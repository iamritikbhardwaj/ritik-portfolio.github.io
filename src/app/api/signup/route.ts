import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";
import { sendVeficationEmail } from "@/helper/sendVerificationEmail";
import bcrypt from "bcryptjs"

sendVeficationEmail;

export async function POST(request: Request) {
    await dbConnect()

    try {
        const { username, email, password } = await request.json();
        const existingUserVerifiedByEmail = await UserModel.findOne({
            username,
            isVerified: true
        });
        if (existingUserVerifiedByEmail) {
            return Response.json({
                success: false,
                message: "username already taken"
            }, { status: 400 })
        };
        const existingUserByEmail = await UserModel.findOne({ email });
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
        if (existingUserByEmail) {
            if (existingUserByEmail.isVerified) {
                Response.json({
                    success: false,
                    message: "This email is already registered please try another one"
                }, {status: 400})
            }else{
                existingUserByEmail.password = await bcrypt.hash(password, 10);
                existingUserByEmail.verifyCode = verifyCode;
                existingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000)
                await existingUserByEmail.save()
            }
        } else {
            const hashedPassword = await bcrypt.hash(password, 10)
            const expiryDate = new Date()
            expiryDate.setDate(expiryDate.getDate() + 1)

            const newUser = new UserModel({
                username,
                email,
                password: hashedPassword,
                verifyCode,
                verifyCodeExpiry: expiryDate,
                isVerified: false, // Assuming default value
                isAcceptingMessage: true, // Assuming default value
                message: [] // Assuming default value
            });

            await newUser.save();
        }

        // verification email 
        const emailResponse = await sendVeficationEmail(username, password, verifyCode);

        if(!emailResponse.success) {
            return Response.json({
                success: false,
                message: emailResponse.message
            },{status: 500})
        }

        return Response.json({
            success: true,
            message: "Verification mail sent successfully"
        },{status: 201})

    } catch (error) {
        console.error('error registering user', error)
        return Response.json(
            {
                success: false,
                message: "Error registering user"
            }, {status: 500}
        )
    }
}
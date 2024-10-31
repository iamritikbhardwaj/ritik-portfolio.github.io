import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
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
        const otp = Math.floor(100000 + Math.random() * 900000)
        if (existingUserByEmail) {
            true // TODO: will be back here
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 1);
        }

        new UserModel({
            username,
            email,
            password: hashedPassword,
            verifyCode,
            verifyCodeExpiry: ex;
            isVerified: boolean;
            isAcceptingMessage: boolean;
            message: Message[];
        })
    } catch (error) {
        console.error('error registering user', error)
        return Response.json(
            {
                success: false,
                message: "Error registering user"
            }
        )
    }
}
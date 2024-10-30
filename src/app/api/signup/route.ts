import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcript from "bcryptjs";
import { sendVeficationEmail } from "@/helper/sendVerificationEmail";

sendVeficationEmail;

export async function POST(request: Request) {
    await dbConnect()

    try {
        const { username, email, password } = await request.json()
        const existingUserVerifiedByEmail = await UserModel.findOne({
            username,
            isVerified: true
        },{status : 400})
        if(existingUserVerifiedByEmail) {
            return({
                success: false,
                message: "username already taken"
            })
        }
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
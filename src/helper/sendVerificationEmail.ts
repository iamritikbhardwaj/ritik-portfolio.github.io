import { resend } from "../lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVeficationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Verification Code',
            react: VerificationEmail({username, otp: verifyCode}),
        });
        return{success: true, message: "Verification Mail sent successfully"}
    } catch (EmailError) {
        console.log(EmailError,"Error sending verification email")
        return{success: false, message: "Failed to send verification Email"}
    }
}
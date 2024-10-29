// import { Resend } from 'resend';
// import SendEmails from '../../emails/SendEmails';
// import { ApiResponse } from '@/types/ApiResponse';
// import { resend } from '@/lib/resend';
// import ReactDOMServer from 'react-dom/server';

// export async function SendEmail(
//   name: string,
//   message: string,
//   email: string,
//   url: string // Added url as a parameter
// ): Promise<ApiResponse> {
//   try {
//     // Render the React component to a string
//     const emailBody = ReactDOMServer.renderToString(<SendEmails userurl={url} username={name} />);

//     await resend.emails.send({
//       from: 'onboarding@resend.dev',
//       to: email,
//       subject: 'Thank you for your feedback',
//       react: emailBody, // Use the rendered string here
//     });
    
//     return { success: true, message: "Email sent successfully" };
//   } catch (EmailError) {
//     console.error("Error sending mail:", EmailError); // Log the error details
//     return { success: false, message: "Email error" };
//   }
// }

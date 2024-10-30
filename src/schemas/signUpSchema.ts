import { z } from "zod"; 

export const userNameSchema = 
z.string().min(4, "Username must be of atleast 4 characters").max(20, "Username must not be more").regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]{1,13}[a-zA-Z0-9]$/);

export const signUpSchema = z.object({
    username: userNameSchema,
    email: z.string().email({message: "Please provide a valid email"}),
    password: z.string().min(6, {message: "Password must be atleast 6 characters"}),

})
import { z } from "zod";

export const messageSchema = z.object({
    content: z.string().min(10, "content must atleast be 10 characters").max(300, "Content must not be more then 300 characters")
});
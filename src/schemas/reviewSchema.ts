import {z} from 'zod';

export const reviewSchem = z.object({
    name: z.string().min(4, {message: "name must contain atleast 4 characters"}).regex(/^[A-Z][a-zA-Z'-]+ [A-Z][a-zA-Z'-]+$/,"name must only contain alphabets"),
    email: z.string().email({message: "please enter a valid email"}),
    message: z.string().min(8, {message: "message must contain atlest 8 words"}),
    website: z.string().url("invalid url formant"),
    isHiring: z.boolean(),
    isRecruter: z.boolean()
});
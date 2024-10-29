import { User } from "@/model/User";

export interface ApiResponse{
    success: boolean,
    message: string,
    name?: string,
    email?: string,
    isHiring?: boolean,
    isRecruter?: boolean
}
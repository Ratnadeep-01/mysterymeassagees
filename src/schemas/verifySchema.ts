import { z } from "zod";

export const verifySchema = z.object({
    code : z.string().length(6, "6 digit verification code has been sent to your email")
})
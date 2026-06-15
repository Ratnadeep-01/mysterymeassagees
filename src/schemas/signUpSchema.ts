import {email, z} from "zod"

export const usernameValidation = z
    .string()
    .min(8, "username must be of minimum length 8")
    .max(45, "username cannot be longer than 45 letter")
    .regex(/^[a-zA-Z0-9._]+$/, "username should not contain any special symbol other than . and _")

export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message : "invalid email address"}),
    password : z.string().min(6, "password must be at least 6 character long")
})
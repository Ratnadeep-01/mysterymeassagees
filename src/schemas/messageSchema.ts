import {z} from "zod";

export const messageSchema = z.object({
    content : z
    .string()
    .min(10, "meassage should be atleast 10 character long")
    .max(500, "meassage should be atmost 500 character long")
})
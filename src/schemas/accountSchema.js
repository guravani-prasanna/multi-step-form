import { z } from "zod";


export const accountSchema = z.object({
username: z.string().min(3, "Required"),
password: z.string()
.min(8)
.regex(/[A-Z]/, "One uppercase required")
.regex(/[a-z]/, "One lowercase required")
.regex(/[0-9]/, "One number required")
.regex(/[^A-Za-z0-9]/, "One special character required"),
confirmPassword: z.string()
}).refine(d => d.password === d.confirmPassword, {
message: "Passwords must match",
path: ["confirmPassword"]
});
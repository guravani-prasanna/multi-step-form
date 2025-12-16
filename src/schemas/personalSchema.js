import { z } from "zod";


export const personalSchema = z.object({
firstName: z.string().min(1, "Required"),
lastName: z.string().min(1, "Required"),
email: z.string().email("Invalid email"),
phone: z.string().regex(/^\d{10}$/, "Invalid phone"),
dob: z.string().refine(v => {
const age = Math.floor((Date.now() - new Date(v)) / 3.15576e10);
return age >= 18;
}, "Must be 18+")
});
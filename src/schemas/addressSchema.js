import { z } from "zod";


export const addressSchema = z.object({
address: z.string().min(1, "Required"),
city: z.string().min(1, "Required"),
state: z.string().min(1, "Required"),
zip: z.string().regex(/^\d{6}$/, "Invalid ZIP")
});
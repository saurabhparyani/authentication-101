"use server"

import { LoginSchema } from "@/schemas";
import { z } from "zod";

export default async function login(values: z.infer<typeof LoginSchema>) {
    const validatedFields = LoginSchema.safeParse(values);

    // Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
            error: "Invalid fields!"
        }
    }

    return {success: "Email sent!"}
}

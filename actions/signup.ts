"use server"

import { SignupSchema } from "@/schemas";
import { z } from "zod";

export default async function signup(values: z.infer<typeof SignupSchema>) {
    const validatedFields = SignupSchema.safeParse(values);

    // Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
            error: "Invalid fields!"
        }
    }

    return {success: "Account created!"}
}

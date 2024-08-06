"use server"

import { SignupSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from 'bcrypt'
import prisma from "@/lib/db";
import { getUserByEmail } from "@/data/users";

export default async function signup(values: z.infer<typeof SignupSchema>) {
    const validatedFields = SignupSchema.safeParse(values);
    // Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
            error: "Invalid fields!"
        }
    }

    const {fullName, email, password} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email)

    if (existingUser) {
        return {
            error: "User already exists!"
        }
    }

    await prisma.user.create({
        data: {
            name: fullName,
            email: email,
            password: hashedPassword
        }
    })

    return {success: "Account created!"}
}



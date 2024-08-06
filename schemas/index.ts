import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {
        message: "Password is required"
    })
})

export const SignupSchema = z.object({
    fullName: z.string().min(3, {
        message: "Name should be a minimum of 3 characters"
    }).max(20, {
        message: "Name should be a maximum of 20 characters"
    }),
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Password should be a minimum of 6 characters"
    })
})

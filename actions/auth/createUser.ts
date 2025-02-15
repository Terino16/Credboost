'use server'

import { prisma } from "@/lib/prisma";
import { z } from "zod";
import bcrypt from "bcrypt";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." })
})
 
export async function createUser(values: z.infer<typeof formSchema>) {
    const name = values.name;
    const email = values.email;
    const password = values.password;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: { email, password: hashedPassword, name }
    })

    return {
        user,
        success: true,
        message: "User created successfully"
    }
}   
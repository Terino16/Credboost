"use server"

import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export default async function getSubscription(): Promise<string> {
    const session = await auth();
    const userId = session?.user?.id;

    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { subscription: true }
    });

    return user?.subscription || "FREE"; // Ensure it always returns a string
}

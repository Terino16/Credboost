"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function deleteSpace(spaceId: string) {
    const space = await prisma.space.findUnique({
        where: {
            id: spaceId
        }
    })

    if (!space) {
        return { error: "Space not found", status: 404 }
    }

    await prisma.space.delete({
        where: { id: spaceId }
    })  

    revalidatePath("/dashboard/space")

    return { success: "Space deleted successfully", status: 200 }
    
    
}
"use server";
import { prisma } from "@/lib/prisma";

export const getNumberOfSpaces = async (ownerId: string): Promise<string> => {
    if (!ownerId) {
       await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
       return "No Spaces";
    }

    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulated delay for DB query

    const campaigns = await prisma.space.findMany({
        where: {
            ownerId: ownerId
        }
    });

    return campaigns.length ? `${campaigns.length} Space` : "No Spaces";
};

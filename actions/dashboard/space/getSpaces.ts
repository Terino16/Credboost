"use server";
import { prisma } from "@/lib/prisma";


export const getSpaces = async (ownerId: string) => {
    if (!ownerId) {
       return null;
    }
    const campaigns = await prisma.space.findMany(
        {
            where: {
                ownerId: ownerId
            }
        }
    );
    return campaigns;
}  
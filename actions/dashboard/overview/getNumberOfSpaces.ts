"use server";
import { prisma } from "@/lib/prisma";


export const getNumberOfSpaces = async (ownerId: string) => {

    if (!ownerId) {
       return "No Spaces";
    }

    const campaigns = await prisma.space.findMany(
        {
            where: {
                ownerId: ownerId
            }
        }
    );
    if(campaigns==null)
        return "No Spaces";


    return campaigns.length+"";
}  
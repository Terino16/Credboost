"use server";
import { prisma } from "@/lib/prisma";


export const getNumberOfSpaces = async (ownerId: string) => {

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
    if(campaigns==null)
        return 0;
    return campaigns.length;
}  
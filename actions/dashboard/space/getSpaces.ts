"use server";
import { prisma } from "@/lib/prisma";


export const getSpaces = async (ownerId: string) => {

    if (!ownerId) {
       return null;
    }
    const spaces = await prisma.space.findMany(
        {
            where: {
                ownerId: ownerId
            }
        }
    );
    if(spaces==null)
        return 0;
    return spaces;
}  
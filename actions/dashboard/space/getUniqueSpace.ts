"use server";
import { prisma } from "@/lib/prisma";


interface Space {
  name: string;
  id: string;
  ownerId: string;
  description: string;
  logo: string | null;
  customMessage: string;
  questions: string[];
  createdAt: Date;
}


async function getUniqueSpace(id: string): Promise<Space> {
  try {
    const res = await prisma.space.findUnique({
      where: {
        id: id,
      },
    });

    if (!res) {
      throw new Error("Space not found");
    }

    return res;
  } catch (error) {
    throw new Error("Unable to Fetch Space");
  }
}

export default getUniqueSpace;
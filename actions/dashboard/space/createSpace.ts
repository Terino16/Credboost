"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function createSpace(formState: {
  name: string;
  description: string;
  userId: string;
}) {
  const { name, description, userId} = formState;

  if (!name || !description ) {
    throw new Error("Missing required fields: name, description");
  }

  if(!userId) {
    throw new Error("User not found");
  }
  try {

    const campaign = await prisma.space.create({
      data: {
        name,
        description,
        ownerId: userId
      }
    });
    revalidatePath("/dashboard");
    return {title:"Campaign updated successfully",description:"Following Details have been Added to Databases"};
} catch (error) {
  return {title:"Error updating campaign", description:`Error: ${error}`};
  }
}

"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function updateCampaign(formState: {
  name: string;
  description: string;
  id: string;
}) {
  const { name, description,id} = formState;

  if (!name || !description ) {
    throw new Error("Missing required fields: name, description");
  }


  if(!id) {
    throw new Error("Campaign not found");
  }

  try {
   await prisma.campaign.update({
        where: {
            id: id
        },
        data: {
            name,
            description,
        }
    });
    revalidatePath("/dashboard");
    return {title:"Campaign updated successfully",description:"Following Details have been Added to Databases"};
} catch (error) {
    return {title:"Error updating campaign", description:`Error: ${error}`};
  }
}
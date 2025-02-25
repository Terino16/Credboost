"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function updateSpace(
  spaceId: string,
  formState: {
  name: string;
  description: string;
  logo: string;
  customMessage: string;
  questions: string[];  
}) {
  console.log(spaceId);
  const { name, description,logo,customMessage,questions} = formState;

  console.log(questions);

  const session = await auth();
  const ownerId = session?.user?.id;

  if (!ownerId) {
    return {
      title: "User Not Found",
      description: "Unable to find User in Database",
      variant: "destructive" as "destructive",
    };
  }

  try {
    await prisma.space.update({
      where: {
        id: spaceId,
      },
      data: {
        name,
        description,
        ownerId,
        logo,
        customMessage,
        questions:questions
      },
    });

    revalidatePath("/dashboard");

    return {
      title: "Space Updated",
      description: "Space has been updated successfully.",
      variant: "default" as "default",
    };
  } catch (error) {
    console.log(error)
    return {
      title: "Error Updating Space",
      description: `Error: ${error}`,
      variant: "destructive" as "destructive",
    };
  }
}

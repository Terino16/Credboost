"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";

export default async function createSpace(formState: {
  name: string;
  description: string;
  logo: string;
  welcomeMessage: string;
  questions: string[];
  enableDiscount: boolean;
  discountCode: string;
  enableStarRating: boolean;
  collectUserData: boolean;
}) {
  const { name, description, logo, welcomeMessage , questions, enableDiscount, discountCode, enableStarRating, collectUserData } = formState;

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
    await prisma.space.create({
      data: {
        name,
        description,
        ownerId,
        logo,
        customMessage:welcomeMessage,
        questions:questions,
        enableDiscount:enableDiscount,
        discountCode:discountCode,
        enableStarRating:enableStarRating,
        collectUserData:collectUserData,
      },
    });

    revalidatePath("/dashboard");

    return {
      title: "Space Created",
      description: "Space has been created successfully.",
      variant: "default" as "default",
    };
  } catch (error) {
    console.log(error)
    return {
      title: "Error Creating Space",
      description: `Error: ${error}`,
      variant: "destructive" as "destructive",
    };
  }
}

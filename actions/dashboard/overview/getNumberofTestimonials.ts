"use server";
import { prisma } from "@/lib/prisma";

export const getNumberofTestimonials = async (ownerId: string) => {
  if (!ownerId) {
    return "No testimonials";
  }

  const spaces = await prisma.space.findMany({
    where: {
      ownerId: ownerId
    },
    select: {
      testimonials: {
        select: {
          id: true, // Only selecting ID to count efficiently
        },
      },
    },
  });

  const totalTestimonials = spaces.reduce((count, space) => count + space.testimonials.length, 0);

  return totalTestimonials > 0 ? `${totalTestimonials}` : "No testimonials";
};

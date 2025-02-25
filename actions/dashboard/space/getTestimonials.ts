"use server";

import { prisma } from "@/lib/prisma";

export async function getTestimonials(spaceId: string) {
  const testimonials = await prisma.testimonial.findMany({
    where: {
      spaceId: spaceId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return testimonials;
}

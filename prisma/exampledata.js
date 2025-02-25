import { PrismaClient, Status } from "@prisma/client"; // Import Status enum

const prisma = new PrismaClient();

async function seedTestimonials() {
  const spaceId = "1f502ec4-fa3c-45cf-bbf9-55e6a0d6c3b1";

  const testimonials = Array.from({ length: 30 }, (_, i) => {
    const daysAgo = Math.floor(Math.random() * 10) + 1;
    const createdAt = new Date();
    createdAt.setDate(createdAt.getDate() - daysAgo);

    return {
      spaceId,
      userName: `User ${i + 1}`,
      content: `Testimonial content ${i + 1}`,
      status: Status.PENDING, // Use Prisma Enum, not string
      createdAt,
    };
  });

  await prisma.testimonial.createMany({
    data: testimonials,
  });

  console.log("✅ 30 Testimonials seeded successfully!");
}

seedTestimonials()
  .catch((error) => console.error("Error seeding testimonials:", error))
  .finally(() => prisma.$disconnect());

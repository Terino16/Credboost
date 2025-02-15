"use server"

import { prisma } from "@/lib/prisma"

export async function getUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  })

  return user
}
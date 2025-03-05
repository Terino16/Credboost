"use server"

import { z } from "zod"

// Define the feedback schema
const feedbackSchema = z.object({
  rating: z.number().min(1).max(10),
  email: z.string().email().optional(),
  subscribeToUpdates: z.boolean().default(false),
})

export async function submitFeedback(data: z.infer<typeof feedbackSchema>) {
  // Validate the data
  const validatedData = feedbackSchema.parse(data)

  // Here you would typically:
  // 1. Store the feedback in a database
  // 2. Send an email notification
  // 3. Add the email to a mailing list if subscribeToUpdates is true

  console.log("Feedback received:", validatedData)

  // For demo purposes, we'll just simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: "Feedback submitted successfully",
  }
}


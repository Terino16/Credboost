"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { X } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { submitFeedback } from "@/actions/feature/IdeaValidate"

// Define the form schema with zod
const formSchema = z.object({
    rating: z.number().min(1).max(10),
    email: z.string().email().optional(),
    subscribeToUpdates: z.boolean().default(false),
  }).refine((data) => {
    if (data.subscribeToUpdates && !data.email) {
      return false;
    }
    return true;
  }, {
    message: "Email is required if you subscribe to updates.",
    path: ["email"],
  });
  
export type IdeaValidationPopupProps = {
  title?: string
  description?: string
  ideaName?: string
  delay?: number
  onClose?: () => void
  onSubmit?: (data: z.infer<typeof formSchema>) => void
  showEmailOption?: boolean
  example?: boolean
}

export function IdeaValidationPopup({
  title = "We value your feedback!",
  description = "Help us improve by sharing your thoughts on our idea.",
  ideaName = "our product",
  delay = 5000,
  onClose,
  onSubmit,
  showEmailOption = true,
  example = true,
}: IdeaValidationPopupProps) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 5,
      email: "",
      subscribeToUpdates: false,
    },
  })

  // Show popup after delay
  useEffect(() => {
    // Check if the popup has been shown before
    const hasShownPopup = localStorage.getItem("ideaValidationPopupShown")

    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setOpen(true)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [delay])

  // Handle form submission
  async function handleSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Call the server action or custom onSubmit handler
    //   if (onSubmit) {
    //     onSubmit(values)
    //   } else {
    //     await submitFeedback(values)
    //   }

      setSubmitted(true)

      // Mark popup as shown in localStorage
      localStorage.setItem("ideaValidationPopupShown", "true")

      // Close popup after showing thank you message
      setTimeout(() => {
        setOpen(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting feedback:", error)
    }
  }

  // Handle dialog close
  function handleOpenChange(open: boolean) {
    setOpen(open)
    if (!open && onClose) {
      onClose()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{submitted ? "Thank you!" : title}</DialogTitle>
          <DialogDescription>
            {submitted ? "We appreciate your feedback and will use it to improve our product." : description}
          </DialogDescription>
        </DialogHeader>

       

        {!submitted ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How interested are you in {ideaName}?</FormLabel>
                    <FormControl>
                      <div className="space-y-2">
                        <Slider
                          min={1}
                          max={10}
                          step={1}
                          defaultValue={[field.value]}
                          onValueChange={(value) => field.onChange(value[0])}
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Not interested (1)</span>
                          <span>Very interested (10)</span>
                        </div>
                        <div className="text-center font-medium text-lg">{field.value}</div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {showEmailOption && (
                <>
                  <FormField
                    control={form.control}
                    name="subscribeToUpdates"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Keep me updated</FormLabel>
                          <FormDescription>Get notified when we launch or have updates.</FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />

                  {form.watch("subscribeToUpdates") && (
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </>
              )}

              <DialogFooter>
                <Button type="submit">Submit Feedback</Button>
              </DialogFooter>
            </form>
          </Form>
        ) : (
          <div className="py-6 text-center">
            <p className="text-xl font-medium">Your rating: {form.getValues().rating}/10</p>
            {form.getValues().subscribeToUpdates && (
              <p className="mt-2 text-muted-foreground">We'll notify you at {form.getValues().email} when we launch!</p>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}


"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { formSchema } from "@/schema/CreateCampaignSchema"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import createCampaign from "@/actions/dashboard/campaigns/createCampaign"
import { useToast } from "@/hooks/use-toast"



export default  function CampaignForm({userId}: {userId: string}) {
const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          description: "",
        },
      })
     
      async function onSubmit(values: z.infer<typeof formSchema>) {
       const response = await createCampaign({...values, userId});
        toast({
          title: response.title,
          description: response.description,
        });
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="CredBoost" {...field} />
              </FormControl>
              <FormDescription>
                This is public display Campaign name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="This Campaign is For.." {...field} />
              </FormControl>
              <FormDescription>
                This is the description of the campaign.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

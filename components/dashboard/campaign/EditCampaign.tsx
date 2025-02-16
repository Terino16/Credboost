"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/schema/CreateCampaignSchema";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import updateCampaign from "@/actions/dashboard/space/updateSpace";
import { useToast } from "@/hooks/use-toast";
import { DialogClose } from "@radix-ui/react-dialog";

type Props = {
  campaign: {
    id: string;
    name: string;
    description: string;
  };
};

const EditCampaign = ({ campaign }: Props) => {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: campaign.name,
      description: campaign.description,
    },
  });

  async function  onSubmit(values: z.infer<typeof formSchema>) {
    const response=await updateCampaign({...values,id:campaign.id})
    toast({
        title: response.title,
        description: response.description,
    });
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit Campaign</DialogTitle>
        <DialogDescription>
          Edit Your Campaign name and description.
        </DialogDescription>
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
            <DialogClose asChild>
            <Button type="submit">Submit</Button>
            </DialogClose>
           
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditCampaign;

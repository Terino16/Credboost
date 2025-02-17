"use client";


import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, "Space name is required"),
  logo: z.any(),
  description: z.string().min(1, "Description is required"),
  twitter: z.string().url("Invalid URL format , Missing https or http").or(z.literal("")),
  instagram: z.string().url("Invalid URL format , Missing https or http").or(z.literal("")),
  facebook: z.string().url("Invalid URL format , Missing https or http").or(z.literal("")),
  youtube: z.string().url("Invalid URL format , Missing https or http").or(z.literal("")),
  tiktok: z.string().url("Invalid URL format , Missing https or http").or(z.literal("")),
});

export default function SpaceForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      logo: null,
      description: "",
      twitter: "",
      instagram: "",
      facebook: "",
      youtube: "",
      tiktok: "",
    },
  });



  const { control, setValue, watch } = form;

  const onSubmit = (data: any) => {
    console.log(data);
  }


  

  return (
    <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)} className="gap-4 space-y-4">

     {/* <FormField
  control={control}
  name="logo"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Space Logo</FormLabel>
      <FormControl>
        <Input type="file" accept="image/*" onChange={handleFileChange} />
      </FormControl>
      {previewUrl && <img src={previewUrl} alt="Preview" className="mt-2 h-20" />}
      <FormMessage />
    </FormItem>
  )}
/> */}
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Space Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Space name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Space Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter space description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={control}
          name="twitter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Twitter</FormLabel>
              <FormControl>
                <Input placeholder="Enter twitter link Or Leave blank" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="instagram"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instagram</FormLabel>
              <FormControl>
                <Input placeholder="Enter instagram link Or Leave blank" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={control}
          name="facebook"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Facebook</FormLabel>
              <FormControl>
                <Input placeholder="Enter facebook link Or Leave blank" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={control}
          name="youtube"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Youtube</FormLabel>
              <FormControl>
                <Input placeholder="Enter youtube link Or Leave blank" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="tiktok"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tiktok</FormLabel>
              <FormControl>
                <Input placeholder="Enter tiktok link Or Leave blank" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}

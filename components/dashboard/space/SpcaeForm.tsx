"use client";


import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from "lucide-react";

const formSchema = z.object({
  spaceName: z.string().min(1, "Space name is required"),
  spaceHeader: z.string().min(1, "Space header is required"),
  spaceLogo: z.any(),
  spaceDescription: z.string().min(1, "Description is required"),
  prompts: z.array(z.string()).min(2).max(5),
  socialLink: z.string().url("Invalid URL format"),
  starReview: z.number().min(1).max(5),
  collectionType: z.string().min(1,"Give a collection type"),
});

export default function SpaceForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      spaceName: "",
      spaceHeader: "",
      spaceLogo: null,
      spaceDescription: "",
      prompts: ["", ""], // Start with 2 prompts
      socialLink: "",
      starReview: 1,
      collectionType: "",
    },
  });

  const { control, handleSubmit, setValue, watch } = form;
  const prompts = watch("prompts");

  const addPrompt = () => {
    if (prompts.length < 5) {
      setValue("prompts", [...prompts, ""]);
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values); 
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="gap-4">
        <FormField
          control={control}
          name="spaceName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Space Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter space name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="spaceHeader"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Space Header</FormLabel>
              <FormControl>
                <Input placeholder="Enter space header" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="spaceLogo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Space Logo</FormLabel>
              <FormControl>
                <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files?.[0])} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="spaceDescription"
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

        <div>
          <FormLabel>Prompts</FormLabel>
          {prompts.map((_, index) => (
            <FormField
              key={index}
              control={control}
              name={`prompts.${index}`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={`Prompt ${index + 1}`} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
          {prompts.length < 5 && (
            <Button type="button" onClick={addPrompt} className="mt-2">
              Add Prompt
            </Button>
          )}
        </div>

        <FormField
          control={control}
          name="socialLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social Links</FormLabel>
              <FormControl>
                <Input type="url" placeholder="Enter social link" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="starReview"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Star Review</FormLabel>
              <FormControl>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Star
                      key={num}
                      className={`w-6 h-6 cursor-pointer ${field.value >= num ? "text-yellow-400" : "text-gray-300"}`}
                      onClick={() => setValue("starReview", num)}
                    />
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="collectionType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Collection</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="text">Text</SelectItem>
                  </SelectContent>
                </Select>
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

"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { uploadFile } from "@/actions/upload/upload";// Import the file upload function
import { useToast } from "@/hooks/use-toast";
import createSpace from "@/actions/dashboard/space/createSpace";

const formSchema = z.object({
  name: z.string().min(1, "Space name is required"),
  logo: z.string().optional(),
  description: z.string().min(1, "Description is required"),
});

export default function SpaceForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      logo: "",
      description: "",
    },
  });

  const {toast}=useToast();

  const [uploading, setUploading] = useState(false);
  const [imageURL,setImageURL]=useState("");

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

   

    setUploading(true);


    const formData = new FormData();
    formData.append("file", file);

    try {
      toast(
        {title:"Uploading to S3",
          description:"The File is being uploaded to S3 "
        }
      )
      const response = await uploadFile(null, formData);
     

      if (response.status === "success") {
        const s3Url = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/${file.name}`;
       
        form.setValue("logo", s3Url);
        toast(
          {title:"Uploaded to S3",
            description:"The File is uploaded Succesfully "
          }
        )
        setImageURL(s3Url);
      } else {
        toast(
          {
            variant: "destructive",
            title:"Server Error",
            description:"Unable to Upload to S3 "
          }
        )
      
      }
    } catch (error) {
      toast(
        {
          variant: "destructive",
          title:"Server Error",
          description:"Unable to Upload to S3 "
        }
      )
    } finally {
     
      setUploading(false);
    }
  };

  const onSubmit = async (data: any) => {
    const response=await createSpace(data);
   toast({
    title:response.title,
    description:response.description,
    variant:response.variant
   })
    console.log("📨 Form submitted with data:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="gap-4 space-y-4">
        <div className="flex items-center justify-around gap-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={imageURL} className="contain" />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>

          <FormField
            name="logo"
            control={form.control}
            render={() => (
              <FormItem>
                <FormLabel>Space Logo (Optional)</FormLabel>
                <FormControl>
                  <Input type="file" accept="image/*" onChange={handleFileUpload} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

       

        <FormField
          control={form.control}
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
          control={form.control}
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

        <Button type="submit" className="w-full" disabled={uploading}>
          {uploading ? "Uploading..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

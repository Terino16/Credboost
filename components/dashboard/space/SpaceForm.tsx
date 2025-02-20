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
import { uploadFile } from "@/actions/upload/upload";
import { useToast } from "@/hooks/use-toast";
import createSpace from "@/actions/dashboard/space/createSpace";

const formSchema = z.object({
  name: z.string().min(1, "Space name is required"),
  logo: z.string().optional(),
  description: z.string().min(1, "Description is required"),
  customMessage: z.string().min(1, "Custom Message is required"),
  questions: z.array(z.string()).min(1,"Minimum of 1 Question is Needed").max(5, "Maximum 5 questions allowed"),
});

export default function SpaceForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      logo: "",
      description: "",
      customMessage: "",
      questions: ["", ""], // Initially two questions
    },
  });

  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [questions, setQuestions] = useState(["", ""]); // State for managing dynamic questions

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      toast({ title: "Uploading to S3", description: "The File is being uploaded to S3" });
      const response = await uploadFile(null, formData);

      if (response.status === "success") {
        const s3Url = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/${file.name}`;
        form.setValue("logo", s3Url);
        toast({ title: "Uploaded to S3", description: "The File is uploaded successfully" });
        setImageURL(s3Url);
      } else {
        toast({ variant: "destructive", title: "Server Error", description: "Unable to Upload to S3" });
      }
    } catch (error) {
      toast({ variant: "destructive", title: "Server Error", description: "Unable to Upload to S3" });
    } finally {
      setUploading(false);
    }
  };

  const addQuestion = () => {
    if (questions.length < 5) {
      setQuestions([...questions, ""]);
    }
  };

  const updateQuestion = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
    form.setValue("questions", newQuestions);
  };

  const onSubmit = async (data: any) => {
    const response = await createSpace(data);
    toast({
      title: response.title,
      description: response.description,
      variant: response.variant,
    });
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

        {/* Custom Message Input */}
        <FormField
          control={form.control}
          name="customMessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Custom Message</FormLabel>
              <FormControl>
                <Input placeholder="Add a custom message for your customer welcome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Dynamic Questions */}
        <div className="space-y-4">
          <FormLabel>Questions</FormLabel>
          {questions.map((question, index) => (
            <Input
              key={index}
              placeholder={`Enter question ${index + 1}`}
              value={question}
              onChange={(e) => updateQuestion(index, e.target.value)}
            />
          ))}

          {/* Add More Questions Button */}
          {questions.length < 5 && (
            <Button type="button" onClick={addQuestion} variant="outline">
              Add Question
            </Button>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={uploading}>
          {uploading ? "Uploading..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

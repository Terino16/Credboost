"use server";
import { revalidatePath } from "next/cache";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";

const s3Client = new S3Client({
  region: process.env.NEXT_AWS_S3_REGION!,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

async function uploadFileToS3(file: Buffer, fileName: string): Promise<string> {
  console.log("🔄 Processing file for upload:", fileName);

  const fileBuffer = await sharp(file)
    .jpeg({ quality: 50 })
    .resize(800, 400)
    .toBuffer();

  const params = {
    Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME!,
    Key: fileName,
    Body: fileBuffer,
    ContentType: "image/jpeg",
  };

  console.log("⏳ Uploading to S3:", params.Key);

  const command = new PutObjectCommand(params);
  try {
    const response = await s3Client.send(command);
    console.log("✅ S3 Upload Success:", response);
    return fileName;
  } catch (error) {
    console.error("🔥 S3 Upload Error:", error);
    throw error;
  }
}

export async function uploadFile(
  prevState: any,
  formData: FormData
): Promise<{ status: string; message: string }> {
  try {
    console.log("📥 Received file upload request");
    
    const file = formData.get("file") as File;
    if (!file || file.size === 0) {
      console.warn("⚠️ No file selected or file is empty.");
      return { status: "error", message: "Please select a file." };
    }

    console.log("📝 File Details:", {
      name: file.name,
      size: file.size,
      type: file.type,
    });

    if (file.size > 5 * 1024 * 1024) {  // 5MB limit
      console.warn("⚠️ File too large. Max allowed: 5MB");
      return { status: "error", message: "File size exceeds the 5MB limit." };
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    console.log("🔄 Converting and optimizing image...");
    
    await uploadFileToS3(buffer, file.name);

    console.log("✅ File successfully uploaded:", file.name);

    revalidatePath("/");
    return { status: "success", message: "File has been uploaded." };
  } catch (error) {
    console.error("🔥 Upload Server Error:", error);
    return { status: "error", message: "Failed to upload file." };
  }
}

"use client

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SpacePreview({ formData }: { formData: any }) {
  return (
    <Card className="border rounded-lg shadow-md p-4">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            {formData.logo ? (
              <AvatarImage src={formData.logo} alt="Space Logo" />
            ) : (
              <AvatarFallback>NA</AvatarFallback>
            )}
          </Avatar>
          <CardTitle>{formData.name || "Preview Space Name"}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500">{formData.description || "Preview Space Description"}</p>
        <p className="text-sm text-blue-600 mt-2">{formData.customMessage || "Preview Custom Message"}</p>
      </CardContent>
    </Card>
  );
}

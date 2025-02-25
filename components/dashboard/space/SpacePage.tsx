"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import AnalyticsGraph from "./AnalyticsGraph";
interface Space {
  id: string;
  name: string;
  description: string;
  logo: string | null;
  customMessage: string;
  questions: string[];
  createdAt: Date;
}
export default function SpacePage({space}: {space: Space}) {
    console.log(space);
  return (
  <div>
    <div className="flex items-center gap-4">
        
        <AnalyticsGraph />
    </div>
  </div>
  );
}

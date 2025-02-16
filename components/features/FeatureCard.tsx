"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Routes } from "@/constants/Route";

type FeatureCardProps = {
  id: string;
  view: string;
  description: {
    image: string;
    title: string;
    text: string;
  };
  icon: LucideIcon;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ id, view, description }) => {
  return (
    <Card id={id} className="py-6 rounded-2xl shadow-none bg-background border-0">
      <CardContent
        className={`flex flex-col md:flex-row items-start gap-16 ${
          view === "right" ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Icon + Description */}
        <div className="w-full md:w-1/2 py-8 text-center md:text-left flex flex-col gap-4">
        <h3 className="text-5xl font-bold text-featurecolor">{description.title}</h3>
          
          <p className="text-gray-600 text-lg">{description.text}</p>
          <Link className="mt-10" href={Routes.pricing}><Button>Get Started !</Button></Link>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={description.image}
            alt={description.title}
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        
      </CardContent>
    </Card>
  );
};

export default FeatureCard;

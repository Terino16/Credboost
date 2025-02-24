import { getNumberOfSpaces } from "@/actions/dashboard/overview/getNumberOfSpaces";

import { Routes } from "@/constants/Route";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import CreateSpace from "@/components/dashboard/space/CreateSpace";
import SpaceCard from "@/components/dashboard/space/SpaceCard";
import { Separator } from "@/components/ui/separator"
import NumberOfSpacesCard from "@/components/dashboard/overview/NumberOfSpacesCard";
import Subscription from "@/components/dashboard/overview/Subscription";
import Testimonials from "@/components/dashboard/overview/Testimonials";
import { Suspense } from "react";
import { getNumberofTestimonials } from "@/actions/dashboard/overview/getNumberofTestimonials";
import getSubscription from "@/actions/Navbar/getSubscription";
import { Skeleton } from "@/components/ui/skeleton";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { getSpaces } from "@/actions/dashboard/space/getSpaces";


export default async function Dashboard() {
  const session = await auth();
  if (!session?.user) {
    redirect(Routes.login);
  }

  const ownerId = session.user.id;

  if (!ownerId) {
    return <p>Unauthorized</p>;
  }


  const space = getNumberOfSpaces(ownerId);
  const spaceData = await getSpaces(ownerId);
  const testimonials = getNumberofTestimonials(ownerId);
  const subscription = getSubscription();
  console.log(spaceData);

  return (
    
    <>
      <div className="flex space-y-4 justify-between items-center w-full mb-4">
        <div className="flex flex-col items-center md:items-start space-y-2 md:w-1/2">
          <Badge className="motion-preset-confetti w-fit ">Feature</Badge>
          <h1 className="text-3xl font-semibold">Wall of Goody</h1>
          <p className="text-center md:text-left">A fully customizable portfolio page to showcase your services, testimonials, and contact information—all in one place.</p>
          <p className="text-left">✅ Personalized Branding – Add your logo, colors, and brand identity.</p>
          <p className="text-left">✅ Client Testimonials – Highlight feedback from satisfied clients.</p>
          <p className="text-left">✅Work Showcase – Display your best projects and case studies. </p>
        </div>

        <div className="hidden md:block ">
          <Image src="/Hero.png" width={400} height={400} alt="HGello" className="rounded-lg p-2 border-[1px] border-white bg-zinc-300" />
        </div>
      </div>

      <Separator />

      <div className="w-full my-4">
        <h1 className="text-3xl font-semibold my-4">Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Suspense fallback={<Skeleton className="h-8 w-[250px] bg-blue-100/10" />}>
            <NumberOfSpacesCard space={space} />
          </Suspense>
          <Suspense fallback={<Skeleton className="h-8 w-[250px] bg-blue-100/10" />}>
            <Testimonials testimonials={testimonials} />
          </Suspense>
          <Suspense fallback={<Skeleton className="h-8 w-[250px] bg-blue-100/10" />}>
            <Subscription subscription={subscription} />
          </Suspense>
        </div>
      </div>

      <div className="my-4">
        <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Spaces</h1>
        <CreateSpace/>
        </div>
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {spaceData && spaceData.length > 0 ? (
          spaceData.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))
        ) : (
          <p className="text-gray-400 text-center text-lg">
            No Space available. Create a new Space.
          </p>
        )}
      </div>
    </>
  );
}

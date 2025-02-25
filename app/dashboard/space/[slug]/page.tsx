import { Suspense } from "react";
import getSpace from "@/actions/dashboard/space/getUniqueSpace";
import { Skeleton } from "@/components/ui/skeleton";
import SpacePage from "@/components/dashboard/space/SpacePage";

export default async function Page({
  params,
}: {
  params: { slug: string }
}) {
  const space = await getSpace(params.slug);
  return (
    <Suspense fallback={<Loading />}>
      <SpacePage space={space} />
    </Suspense>
  );
}

export const Loading = () => {
  return <Skeleton className="w-full h-full" />;
};

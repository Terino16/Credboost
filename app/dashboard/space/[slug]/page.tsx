import { Suspense } from "react";
import getCampaign from "@/actions/dashboard/space/getUniqueSpace";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const campaign = await getCampaign(slug);
  const form={};
  // const product = await getProduct(campaign.product_id);

  return (
    <Suspense>
     {slug}
    </Suspense>
  );
}

import { Suspense } from "react";
import getCampaign from "@/actions/dashboard/space/getUniqueSpace";
import Notfound from "@/components/dashboard/campaign/Notfound";
import CampaignHero from "@/components/dashboard/campaign/CampaignHero";
import ProductForm from "@/components/dashboard/campaign/ProductForm";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const campaign = await getCampaign(slug);
  const form={};
  // const product = await getProduct(campaign.product_id);

  if ("error" in campaign) {
    return <Notfound message={campaign.error} />;
  }

  return (
    <Suspense>
      <CampaignHero campaign={campaign} />
      <ProductForm  form={form} />
    </Suspense>
  );
}

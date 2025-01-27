import { Suspense } from "react";
import getCampaign from "@/actions/dashboard/campaigns/getCampaign";
import Notfound from "@/components/dashboard/campaign/Notfound";



export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const campaign = await getCampaign(slug);

  // Narrowing the type
  if ("error" in campaign) {
    return <Notfound message={campaign.error} />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>My Post: {slug}</div>
      <div>{campaign.name}</div>
    </Suspense>
  );
}

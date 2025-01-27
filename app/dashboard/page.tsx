import { getCampaigns } from "@/actions/dashboard/campaigns/getCampaigns";
import CampaignCard from "@/components/dashboard/campaign/CampaignCard";
import CreateCampaign from "@/components/dashboard/campaign/CreateCampaign";
import { auth } from "@clerk/nextjs/server";
export default async function Dashboard() {
  const campaigns = await getCampaigns();
  const { userId } = await auth();
  if (userId === null) {
    return <p>Unauthorized</p>;
  }
  return (
    <>
      <div className="flex justify-between items-start">
        <h1 className="text-white text-2xl lg:text-4xl font-bold leading-tight tracking-tight mb-6">
          Dashboard
        </h1>

        <CreateCampaign userId={userId} />
      </div>

      <div className="flex flex-col items-start md:flex-row gap-6">
        {campaigns && campaigns.length > 0 ? (
          campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))
        ) : (
          <p className="text-gray-400 text-center text-lg">
            No campaigns available. Create a new campaign.
          </p>
        )}
      </div>
    </>
  );
}

import { getSpaces } from "@/actions/dashboard/space/getSpaces";
import CampaignCard from "@/components/dashboard/campaign/CampaignCard";
import CreateCampaign from "@/components/dashboard/campaign/CreateCampaign";
import { Routes } from "@/constants/Route";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";


export default async function Dashboard() {
  const session = await auth();
  if (!session?.user) {
    redirect(Routes.login);
  }

  console.log(session.user);
  const ownerId = session.user.id;

  if (!ownerId) {
    return <p>Unauthorized</p>;
  }


  const campaigns = await getSpaces(ownerId);

  return (
    <>
      <div className="flex justify-between items-start">
        <h1 className="text-white text-2xl lg:text-4xl font-bold leading-tight tracking-tight mb-6">
          Dashboard
        </h1>

        <CreateCampaign userId={ownerId} />
      </div>

      <div className="flex flex-col items-start md:flex-row gap-6">
        {/* {campaigns && campaigns.length > 0 ? (
          campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))
        ) : (
          <p className="text-gray-400 text-center text-lg">
            No campaigns available. Create a new campaign.
          </p>
        )} */}
      </div>
    </>
  );
}

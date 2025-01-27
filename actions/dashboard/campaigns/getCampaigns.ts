import { prisma } from "@/lib/prisma";
import { auth} from '@clerk/nextjs/server'


export const getCampaigns = async () => {

    const { userId } = await auth();
    if (!userId) {
       return null;
    }
    const campaigns = await prisma.campaign.findMany(
        {
            where: {
                userId: userId
            }
        }
    );
    return campaigns;
}  
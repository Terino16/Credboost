"use server";
import { prisma } from "@/lib/prisma";
import exp from "constants";

interface Campaign {
  name: string;
  id: string;
  userId: string;
  description: string;
}

interface CampaignError {
  error: string;
}

async function getCampaign(id: string): Promise<Campaign | CampaignError> {
  try {
    const res = await prisma.campaign.findUnique({
      where: {
        id: id,
      },
    });

    if (!res) {
      throw new Error("Campaign not found");
    }

    return res;
  } catch (error) {
    return { error:"Unable to Fetch Campaign" };
  }
}

export default getCampaign;
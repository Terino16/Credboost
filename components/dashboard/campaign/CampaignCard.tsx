import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import EditCampaign from './EditCampaign';
import Link from 'next/link';

interface Campaign {
  id: string;
  name: string;
  description: string;
}


const CampaignCard: React.FC<{ campaign: Campaign }> = ({ campaign }) => {
  return (
    <Card className=" w-full md:w-[350px]">
      <CardHeader>
        <CardTitle>{campaign.name}</CardTitle>
        <CardDescription>{campaign.description}</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        <EditCampaign campaign={campaign} />
        <Button>
          <Link href={`dashboard/campaign/${campaign.id}`}>
          Open
          </Link>
          </Button>
      </CardFooter>
    </Card>
  )
}

export default CampaignCard
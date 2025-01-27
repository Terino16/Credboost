import React from "react";
import { Button } from "../../ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import CampaignForm from "@/components/dashboard/campaign/CampaignForm";

type Props = {
  userId:string
};

const CreateCampaign = ({userId}: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button >
          Create Campaign
          <PlusIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create Campaign</DialogTitle>
        <DialogDescription>
          Create a new campaign to track your marketing efforts.
        </DialogDescription>
        <CampaignForm userId={userId} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateCampaign;

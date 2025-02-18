"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { PlusCircleIcon } from "lucide-react"
import SpaceForm from "./SpaceForm"

  
export default function CreateSpace() {
    return (
        <Dialog>
        <DialogTrigger asChild>
            <Button>
                Create Space
                <PlusCircleIcon/>
            </Button>
          </DialogTrigger>
        <DialogContent className="max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create New Space</DialogTitle>
            <DialogDescription>
              This will generate dedicated page for you projects where you can collect and manage testimonials
            </DialogDescription>
          </DialogHeader>
          <SpaceForm/>
        </DialogContent>
      </Dialog>
    )
}
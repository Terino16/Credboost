"use client"

import { Ellipsis, UserIcon } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { deleteSpace } from "@/actions/dashboard/space/deleteSpace"
import { useToast } from "@/hooks/use-toast"


import Link from "next/link";
import EditSpace from "./EditSpace";

interface Props {
    space: {
            id: string;
            name: string;
            logo: string | null;
            description: string;
            createdAt: Date;
            ownerId: string;
            customMessage: string;
            questions: string[];
    }
}

export default function SpaceCard({ space }: Props) {

    const { toast } = useToast()
    const handleDelete = async () => {
        const result = await deleteSpace(space.id)
        if (result.status === 200) {
            toast({
                title: "Space deleted successfully",
                description: "Your space has been deleted successfully",
                variant: "default"
            })
        } else {
            toast({
                title: "Error deleting space",
                description: "Your space has not been deleted",
                variant: "destructive"
            })
        }
    }
    return (
        <div
        className="cursor-pointer px-4 py-6 w-full space-y-4 border-[0.5px] border-zinc-200 dark:border-zinc-900 rounded-lg overflow-hidden  
            hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">

            <div className="flex justify-between items-center gap-4">
          
                    <img src={space?.logo ?? "NA"} className="w-10 h-10 rounded-full object-fill" />
                 
                <Link className="flex flex-col" href={`/dashboard/space/${space.id}`}>
                    <p className="tex-lg">{space.name}</p>
                    <p className="text-sm text-zinc-400 ">{space.description}</p>
                </Link>

            
                <Popover>
                    <PopoverTrigger><Ellipsis className="w-4 h-4 text-zinc-400" /></PopoverTrigger>
                    <PopoverContent className="flex flex-col space-y-1 py-2 max-w-[150px] p-0">
                      <Link href={`/dashboard/space/${space.id}`} className="text-sm px-4 py-2  w-full text-left hover:bg-zinc-800 transition-all duration-300 ">Manage</Link>
                      <EditSpace spaceData={space} /> 
                      <Link href={`/dashboard/space/${space.id}`} className="text-sm  px-4 py-2   w-full text-left hover:bg-zinc-800 transition-all duration-300 ">Copy Link</Link>
                      <button onClick={handleDelete} className=" bg-transparent text-red-500 text-sm  px-4 py-2   w-full text-left hover:bg-zinc-800 transition-all duration-300 ">Delete</button></PopoverContent>
                </Popover>
            </div>
        </div>
    )
}
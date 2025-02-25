"use client"

import { Ellipsis, UserIcon } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
    return (
        <div
            className=" cursor-pointer  px-4 py-6  w-full space-y-4 border-[0.5px] border-zinc-900 rounded-lg overflow-hidden  hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <div className="flex justify-between items-center gap-4">
                <Avatar>
                    <AvatarImage src={space?.logo ?? ""} />
                    <AvatarFallback>
                        <UserIcon className="w-6 h-6 text-blue-500" />
                    </AvatarFallback>
                </Avatar>
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
                      <p className="text-red-500 text-sm  px-4 py-2   w-full text-left hover:bg-zinc-800 transition-all duration-300 ">Delete</p></PopoverContent>
                </Popover>
            </div>
        </div>
    )
}
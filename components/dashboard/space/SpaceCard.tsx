"use client"

import { Ellipsis, EllipsisIcon, UserIcon } from "lucide-react"
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
            className="relative cursor-pointer  px-4 py-6  w-full space-y-4 border-[0.5px] border-zinc-900 rounded-lg overflow-hidden  hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
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

                <DropdownMenu>
                    <DropdownMenuTrigger><Ellipsis className="w-4 h-4 text-zinc-400" /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem asChild>
                            <Link href={`/dashboard/space/${space.id}`}>Manage</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <EditSpace spaceData={space} />
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={`/dashboard/space/${space.id}`}>Copy Link</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


            </div>
        </div>
    )
}
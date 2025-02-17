"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ClubIcon, UserIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
interface Props{
    space:{
        name:string
        description:string
        image:string
    }
}

export default function SpaceCard({space}:Props)
{
    return(
        <Card className="hover:border-blue-500 min-w-[300px] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <CardHeader>
                <div className="flex items-center gap-4">   
                    {/* <ClubIcon className="w-6 h-6 text-blue-500 bg-blue-500/10 rounded-full p-1" /> */}
                    <Avatar>
                        <AvatarImage src={space.image} />
                        <AvatarFallback>
                            <UserIcon className="w-6 h-6 text-blue-500" />
                        </AvatarFallback>
                    </Avatar>
                    <CardTitle className="font-bold text-2xl">{space.name}</CardTitle>
                </div>
                <CardDescription className="truncate font-normal py-2">{space.description}</CardDescription>
            </CardHeader>
           
        </Card>
    )
}
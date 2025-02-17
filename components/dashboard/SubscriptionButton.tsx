"use client"

import { Button } from "@/components/ui/button"
import { use } from 'react'
import { Badge } from "../ui/badge"


export default function SubscriptionButton({subscription}:{subscription:Promise<string>})
{
    const currentsubscription=use(subscription)
    return(
        <Badge variant="outline" className="p-2">{currentsubscription}</Badge>
    )
}
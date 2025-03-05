"use client"

import { Button } from "@/components/ui/button"
import { IdeaValidationPopup } from "@/components/features/ideavalidationpopup"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Image from "next/image"

export function Feature() {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <div className="flex space-y-4 justify-between items-center w-full mb-4">
        <div className="flex flex-col text-md items-center md:items-start md:w-1/2">
          <Badge className="motion-preset-confetti w-fit my-2  ">Feature</Badge>
          <h1 className="text-3xl tracking-tight">Validate your ideas</h1>
          <p className="text-center md:text-left text-md mt-2">A small popup on your MVP website to validate your ideas before you build it.</p>
          <p className="text-left text-md mt-2">✅ Collect feedback from your customers</p>
          <p className="text-left text-md mt-2">✅ Gain insights about your customers</p>
          <p className="text-left text-md mt-2">✅ Collect user's before you build it</p>

          <Button className="text-md mt-4" onClick={() => setShowPopup(true)}>Validate your idea</Button>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-700 to-black  p-[3px] ">
            <Image src="/Feature.png" alt="Idea Validation" width={350} height={350} />
        </div>

       {showPopup && (
        <IdeaValidationPopup
            title="What do you think of our idea?"
            description="We're building a platform to help entrepreneurs validate their ideas quickly. How interested are you in this concept?"
            ideaName="CredBoost"
            delay={1000}
            />
       )}
      </div>        
    )
}


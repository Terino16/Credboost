"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { IdeaValidationPopup } from "@/components/features/ideavalidationpopup"

interface PopupTriggerProps {
  buttonText?: string
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  popupTitle?: string
  popupDescription?: string
  ideaName?: string
  showEmailOption?: boolean
}

export function PopupTrigger({
  buttonText = "Give Feedback",
  buttonVariant = "default",
  popupTitle = "We value your feedback!",
  popupDescription = "Help us improve by sharing your thoughts on our idea.",
  ideaName = "our product",
  showEmailOption = true,
}: PopupTriggerProps) {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <Button variant={buttonVariant} onClick={() => setShowPopup(true)}>
        {buttonText}
      </Button>

      {showPopup && (
        <IdeaValidationPopup
          title={popupTitle}
          description={popupDescription}
          ideaName={ideaName}
          delay={0} // Show immediately when triggered by button
          onClose={() => setShowPopup(false)}
          showEmailOption={showEmailOption}
        />
      )}
    </>
  )
}


"use client"

import { useState } from "react"
import { signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, LogOut, CreditCard } from "lucide-react"
import Link from "next/link"
import { Routes } from "@/constants/Route"
export default function UserButton() {
  const { data: session, status } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  if (status === "loading") {
    return (
      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
        <Avatar className="h-8 w-8">
          <AvatarFallback>...</AvatarFallback>
        </Avatar>
      </Button>
    )
  }

  if (status === "unauthenticated" || !session) {
    return null
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
            <AvatarFallback>{session.user?.name?.charAt(0) || "NA"}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-1" align="end" forceMount>
        <DropdownMenuItem className="flex items-center justify-between">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{session.user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{session.user?.email}</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a href="/profile" className="cursor-pointer flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer  flex items-center"
          asChild
        >
          <Link href={Routes.pricing}>
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Upgrade</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="cursor-pointer text-red-600 focus:text-red-600 flex items-center"
          onSelect={(event) => {
            event.preventDefault()
            signOut()
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


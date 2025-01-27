import Image from "next/image"
import { Routes } from "@/constants/Route"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "@/components/ui/theme-toggle"

import { LinkComponent } from "../ui/link"

export default function Navbar() {
    return (
        <div className="flex justify-between items-center p-6">
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="CredBoost" width={35} height={25} />
                    <h1 className="text-2xl font-bold">CredBoost</h1>
                </div>
                <div className="flex items-center gap-2">
                    <ModeToggle />
                </div>
            </div>
           
           
        </div>
    )
}

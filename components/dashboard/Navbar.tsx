import Image from "next/image"
import { ModeToggle } from "@/components/ui/theme-toggle"
import MobileNavbar from "./MobileNavbar"
import UserButton from "@/components/general/UserButton"
import Link from "next/link"
import { Routes } from "@/constants/Route"
import SubscriptionButton from "./SubscriptionButton"
import { Suspense } from "react"
import getSubscription from "@/actions/Navbar/getSubscription"


export default function Navbar() {

    const subscription=getSubscription();
    return (
        <div className="flex max-w-6xl mx-auto justify-between items-center   py-12">
            {/* Desktop Navbar */}
            <div className="hidden lg:flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                    <Link className="flex flex-row gap-2 items-center" href={Routes.home}><Image src="/logo.png" alt="CredBoost" width={35} height={25} />
                    <h1 className="text-2xl font-bold">CredBoost</h1></Link>
                    
                </div>
                
                <div className="flex items-center gap-4">
                    <Suspense>
                    <SubscriptionButton subscription={subscription}/>
                    </Suspense>
                 
                   
                    <ModeToggle />
                    <UserButton />
                </div>
            </div>
            {/* Mobile Navbar */}
            <div className="lg:hidden w-full">
                <MobileNavbar />
            </div>
        </div>
    )
}

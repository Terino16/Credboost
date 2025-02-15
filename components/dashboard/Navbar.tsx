import Image from "next/image"
import { ModeToggle } from "@/components/ui/theme-toggle"
import MobileNavbar from "./MobileNavbar"
import UserButton from "@/components/general/UserButton"


export default function Navbar() {
    return (
        <div className="flex justify-between items-center p-6">
            {/* Desktop Navbar */}
            <div className="hidden lg:flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="CredBoost" width={35} height={25} />
                    <h1 className="text-2xl font-bold">CredBoost</h1>
                </div>
                
                <div className="flex items-center gap-2">
                    <UserButton />
                    <ModeToggle />
                </div>
            </div>
            {/* Mobile Navbar */}
            <div className="lg:hidden w-full">
                <MobileNavbar />
            </div>
        </div>
    )
}

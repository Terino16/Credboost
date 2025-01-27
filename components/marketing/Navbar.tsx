import Image from "next/image"
import { Routes } from "@/constants/Route"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "@/components/ui/theme-toggle"
import MobileNavbar from "./MobileNavbar"
import { LinkComponent } from "../ui/link"

export default function Navbar() {
    return (
        <div className="flex justify-between items-center p-6">
            {/* Desktop Navbar */}
            <div className="hidden lg:flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="CredBoost" width={35} height={25} />
                    <h1 className="text-2xl font-bold">CredBoost</h1>
                </div>
                <div className="flex items-center gap-8  text-gray-500">
                    <LinkComponent href={Routes.dashboard} className="leading-[15px] text-[18px] font-light tracking-tight hover:text-white ">Dashboard</LinkComponent>
                    <LinkComponent href={Routes.pricing} className="leading-[15px] text-[18px] font-light tracking-tight hover:text-white ">Pricing</LinkComponent>
                    <LinkComponent href={Routes.features} className="leading-[15px] text-[18px] font-light tracking-tight hover:text-white">Features</LinkComponent>
                    <LinkComponent href={Routes.blog} className="leading-[15px] text-[18px] font-light tracking-tight hover:text-white">Blog</LinkComponent>
                </div>
                <div className="flex items-center gap-2">
                    <ModeToggle />
                    <Button variant="default">
                        <Link href={Routes.login}>
                            Login
                        </Link>
                    </Button>
                    <Button variant="outline">
                        <Link href={Routes.signup}>
                            Singup
                        </Link>
                    </Button>
                </div>
            </div>
            {/* Mobile Navbar */}
            <div className="lg:hidden w-full">
                <MobileNavbar />
            </div>
        </div>
    )
}

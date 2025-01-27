import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Routes } from "@/constants/Route"
import Link from "next/link"
import Image from "next/image"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

export default function MobileNavbar() {
    return (
        <div className="w-full flex items-center justify-between ">
            <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="CredBoost" width={35} height={25} />
                <h1 className="text-2xl font-bold">CredBoost</h1>
            </div>
            <Sheet>
                <SheetTrigger>
                    <HamburgerMenuIcon />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="text-center">Navigation</SheetTitle>
                    </SheetHeader>
                    <div className="w-full flex items-center  gap-2 py-4 ">
                    <Button variant="default" className="w-full">
                        <Link href={Routes.login}>
                        Login
                        </Link>
                       </Button>
                    <Button variant="outline" className="w-full">
                    <Link href={Routes.signup}>
                        Singup
                        </Link>
                    </Button>
                    </div>
                   
                    <div className="flex flex-col gap-6 mt-4">
                        <Link href={Routes.dashboard}>Dashboard</Link>
                        <Link href={Routes.pricing}>Pricing</Link>
                        <Link href={Routes.features}>Features</Link>
                        <Link href={Routes.blog}>Blog</Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

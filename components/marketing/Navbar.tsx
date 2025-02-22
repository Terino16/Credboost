import Image from "next/image";
import { Routes } from "@/constants/Route";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { LinkComponent } from "../ui/link";
import { auth } from "@/lib/auth";
import UserButton from "@/components/general/UserButton";
import MobileNavbar from "./MobileNavbar";
export default async function Navbar() {
  const session = await auth();

  return (
    <div className="flex max-w-6xl mx-auto justify-between items-center py-8 ">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center w-full ">
        <Link href={Routes.home} className="flex items-center gap-2">
          <Image src="/logo.png" alt="CredBoost" width={35} height={25} />
          <h1 className="text-xl font-semibold tracking-tight">CredBoost</h1>
        </Link>
        <div className="flex items-center gap-16  text-gray-500">
          <LinkComponent
            href={Routes.dashboard}
            className=" text-[18px] font-light tracking-tight  "
          >
            Dashboard
          </LinkComponent>
          <LinkComponent
            href={Routes.pricing}
            className=" text-[18px] font-light tracking-tight  "
          >
            Pricing
          </LinkComponent>
          <LinkComponent
            href={Routes.features}
            className="text-[18px] font-light tracking-tight "
          >
            Features
          </LinkComponent>
          <LinkComponent
            href={Routes.blog}
            className=" text-[18px] font-light tracking-tight"
          >
            Blog
          </LinkComponent>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          {session?.user ? (
            <UserButton />
          ) : (
            <>
              <Button variant="default">
                <Link href={Routes.login}>Login</Link>
              </Button>
              <Button variant="outline">
                <Link href={Routes.signup}>Singup</Link>
              </Button>
            </>
          )}
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="lg:hidden w-full">
        <MobileNavbar />
      </div>
     
    </div>
  );
}

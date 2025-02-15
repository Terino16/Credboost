import { LoginForm } from "@/components/auth/SignIn"
import { Routes } from "@/constants/Route";
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation";
export default async function LoginPage() {
  const session = await auth();
  console.log(session)
  if (session?.user) {
    redirect(Routes.dashboard)
  }
  return (
    <div className="flex min-h-svh flex-col items-center justify-center  p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  )
}

import { SignIn } from "@clerk/nextjs";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
function ImageDescription() {
  return (
    <p className="text-center leading-9 text-sm text-gray-500">
      A vast universe By @Anubhav
    </p>
  );
}

export default function Page() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center  p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden">
            <CardContent className="grid p-0 md:grid-cols-2">
              <SignIn />
              <div className="relative hidden bg-muted md:block">
                <Image
                  src="/authHero.jpg"
                  width={500}
                  height={300}
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover "
                />
              </div>
            </CardContent>
          </Card>
          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
}

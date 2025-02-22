

import Navbar from "@/components/dashboard/Navbar";
import { Toaster } from "@/components/ui/toaster"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div className="max-w-6xl mx-auto">
   <Navbar/>
   <div className="flex flex-col mx-4 my-6 md:mx-16 md:my-6 rounded-lg p-4 ">
   {children}
   </div>
   <Toaster />
  </div>

        

  );
}

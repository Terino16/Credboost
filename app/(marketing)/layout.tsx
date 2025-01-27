

import Navbar from "@/components/marketing/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <>
   <Navbar/>
   {children}
  </>

        

  );
}

import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import getSpace from "@/actions/dashboard/space/getUniqueSpace";

export default async function RootLayout({
    analytics,
    children,
    params,
}: {
    analytics: React.ReactNode;
    children: React.ReactNode;
    params: { slug: string };
}) {
    const space = await getSpace(params.slug);
    
    return (
        <>
         <div className="p-4 border-b">
            <div className="gap-4">
                <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10">
                    <AvatarImage src={space.logo ?? "/fallback-avatar.png"} alt={space.name} />
                </Avatar>
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold">{space.name}</h1>
                    <p className="text-sm text-gray-500">{space.description}</p>
                </div>
                </div>
                {analytics}
            </div>
         </div>
         {children}
        </>
    );
}

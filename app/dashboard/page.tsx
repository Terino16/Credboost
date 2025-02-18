import { getSpaces } from "@/actions/dashboard/space/getSpaces";

import { Routes } from "@/constants/Route";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import CreateSpace from "@/components/dashboard/space/CreateSpace";
import SpaceCard from "@/components/dashboard/space/SpaceCard";

export default async function Dashboard() {
  const session = await auth();
  if (!session?.user) {
    redirect(Routes.login);
  }

  console.log(session.user);
  const ownerId = session.user.id;

  if (!ownerId) {
    return <p>Unauthorized</p>;
  }


  const space = await getSpaces(ownerId);

  return (
    <>
      <div className="flex justify-between items-start">
        <h1 className="text-white text-2xl lg:text-4xl font-bold leading-tight tracking-tight mb-6">
          Dashboard
        </h1>

       <CreateSpace  />
      </div>

      <div className="flex flex-col items-start md:flex-row gap-6">
        {space && space.length > 0 ? (
          space.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))
        ) : (
          <p className="text-gray-400 text-center text-lg">
            No Space available. Create a new Space.
          </p>
        )}
      </div>
    </>
  );
}

import { Rocket } from "lucide-react";
import { use } from "react";
import { HandCoins } from "lucide-react";

export default function Subscription({
    subscription,
  }: {
    subscription: Promise<string>
  }) {
    const allSubscription = use(subscription)
  return (
    <div className="relative flex flex-col items-center justify-center p-4 w-full space-y-4 border-[0.5px] border-zinc-200 dark:border-zinc-900 rounded-lg overflow-hidden bg-opacity-10 group ">
      <div className="flex items-center justify-between w-full">
      <span className=" text-lg tracking-tighter font-[500]">Subscription</span>
        < HandCoins className="w-6 h-6 text-blue-400" />
      </div>
      <div className="flex items-center justify-between w-full ">
        <h1 className="text-xl font-bold">{allSubscription}</h1>
      </div>

           {/* Top Blob - Moves Right on Hover */}
  <div className="absolute top-[-10px] left-0 flex justify-center items-end pb-2 transition-all duration-500  group-hover:translate-x-6 group-hover:-translate-y-2">
    <div className="w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-50 group-hover:w-36 group-hover:h-36"></div>
  </div>

 
  <div className="absolute bottom-[-10px] left-20 flex justify-center items-end pb-2 transition-all duration-500 group-hover:-translate-x-6 group-hover:-translate-y-2">
    <div className="w-24 h-12 bg-purple-500 rounded-full blur-2xl opacity-50"></div>
  </div>
    </div>
  );
}

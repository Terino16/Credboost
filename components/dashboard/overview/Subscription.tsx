import { Rocket } from "lucide-react";
import { use } from "react";

export default function Subscription({
    subscription,
  }: {
    subscription: Promise<string>
  }) {
    const allSubscription = use(subscription)
  return (
    <div className="relative flex flex-col items-center justify-center p-4 w-full space-y-4 border-[0.5px] border-zinc-900 rounded-lg overflow-hidden bg-opacity-10 dark:bg-zinc-900">
      <div className="flex items-center justify-between w-full">
        <span className="">Subscription</span>
        <Rocket className="w-6 h-6 text-blue-400" />
      </div>
      <div className="flex items-center justify-between w-full ">
        <h1 className="">{allSubscription}</h1>
      </div>

      <div className="absolute bottom-0 right-0 flex justify-center items-end pb-2">
        <div className="w-24 h-24 bg-blue-400 rounded-full blur-3xl opacity-50"></div>
      </div>
    </div>
  );
}

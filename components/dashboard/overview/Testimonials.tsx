import { Rocket } from "lucide-react";
import { use } from "react";

export default function Subscription({
    testimonials,
  }: {
    testimonials: Promise<string>
  }) {
    const allSpaces = use(testimonials);
  return (
    <div className="relative flex flex-col items-center justify-center p-4 w-full space-y-4 border-[0.5px] border-zinc-900 rounded-lg overflow-hidden bg-opacity-10 dark:bg-zinc-900">
      <div className="flex items-center justify-between w-full">
        <span className="">Testimonials</span>
        <Rocket className="w-6 h-6 text-blue-400" />
      </div>
      <div className="flex items-center justify-between w-full ">
        <h1 className="">5</h1>
      </div>

      <div className="absolute bottom-0 right-0 flex justify-center items-end pb-2">
        <div className="w-24 h-24 bg-blue-400 rounded-full blur-3xl opacity-50"></div>
      </div>
    </div>
  );
}

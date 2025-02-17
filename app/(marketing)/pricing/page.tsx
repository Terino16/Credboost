import PricingCard from "@/components/pricing/PricingCard";

export default function Pricing() {
  return (
    <div className="flex flex-col items-center px-8 md:px-2 py-4 sm:py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text animate-gradient">
        &nbsp;
          Unlimited &nbsp;
        </span>
        Access For Your Account
      </h2>
      <PricingCard />
    </div>
  );
}

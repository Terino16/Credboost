"use client";
import FeatureCard from "@/components/features/FeatureCard";
import features from "@/constants/features";
import { Button } from "@/components/ui/button"; // Importing ShadCN button

export default function Features() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center gap-10 md:gap-20 py-10 md:py-20">
      <h1 className="self-center font-bold text-5xl max-w-[70%] text-center">
        Enhance Your Brand with Seamless Testimonial Collection & Management
        Features
      </h1>

      {/* Feature Navigation List */}
      <ul className="flex flex-wrap justify-center gap-4 mb-10 md:mb-20">
        {features.map((feature) => (
          <li key={feature.id}>
            <Button
              onClick={() => handleScroll(feature.id)}
              className="flex items-center gap-2 px-4 py-2 text-lg font-semibold text-white bg-featurecolor drop-shadow-2xl shadow-blue-500"
            >
              <feature.icon className="w-5 h-5 text-white" />
              {feature.id}
            </Button>
          </li>
        ))}
      </ul>

      {/* Feature Cards */}
      {features.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  );
}

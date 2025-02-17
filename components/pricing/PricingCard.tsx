"use client";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { pricingList, PricingProps, PopularPlanType } from "@/constants/pricingData";
import getSubscription from "@/actions/Navbar/getSubscription";

export default function PricingCard() {
  const [currentSubscription, setCurrentSubscription] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSubscription() {
      const subscription = await getSubscription();
      setCurrentSubscription(subscription?.toLowerCase() || null);
    }
    fetchSubscription();
  }, []);

  return (
    <section id="pricing" className="container py-6 sm:py-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => {
          const isActive = currentSubscription === pricing.title.toLowerCase();

          return (
            <Card
              key={pricing.title}
              className={pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between min-h-6">
                  {pricing.title}
                  <div className="flex gap-2">
                    {pricing.popular === PopularPlanType.YES && !isActive && (
                      <Badge variant="secondary" className="text-sm text-primary bg-indigo-500">
                        Most popular
                      </Badge>
                    )}
                    {isActive && (
                      <Badge variant="secondary" className="text-sm text-white bg-green-500">
                        Active
                      </Badge>
                    )}
                  </div>
                </CardTitle>
                <div className="min-h-10">
                  <span className="text-3xl font-bold">${pricing.price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
                <CardDescription className="min-h-8">{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button className="w-full">{pricing.buttonText}</Button>
              </CardContent>

              <hr className="w-4/5 m-auto mb-4" />

              <CardFooter className="flex">
                <div className="space-y-4">
                  {pricing.benefitList.map((benefit: string) => (
                    <span key={benefit} className="flex">
                      <Check className="text-[#22C461]" /> 
                      <h3 className="ml-2">{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

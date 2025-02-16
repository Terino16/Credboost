export enum PopularPlanType {
    NO = 0,
    YES = 1,
  }
  
  export interface PricingProps {
    title: string;
    popular: PopularPlanType;
    price: number;
    description: string;
    buttonText: string;
    benefitList: string[];
  }
  
  export const pricingList: PricingProps[] = [
    {
      title: "Free",
      popular: PopularPlanType.NO,
      price: 0,
      description:
        "Explore basic feature on our free tier. No credit card required",
      buttonText: "Get Started",
      benefitList: [
        "3 Campaign",
        "5 Review space on Cred-Board",
        "Basic Review Display Card",
        "Basic Review Collection form",
      ],
    },
    {
      title: "Plus",
      popular: PopularPlanType.YES,
      price: 10,
      description:
        "CredBoost Plus offers restricted access to all premium feature at low cost",
      buttonText: "Upgrade",
      benefitList: [
        "10 Campaign",
        "30 Review space on Cred-Board",
        "Customizable Review Display Card",
        "Customizable Review Colection Form",
        "Social Media Integrations",
      ],
    },
    {
      title: "Premium",
      popular: PopularPlanType.NO,
      price: 40,
      description:
        "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
      buttonText: "Upgrade Free Trial (15 days)",
      benefitList: [
        "Unlimited Campaign",
        "Unlimited Space on Cred-Board",
        "Customizable Review Display Card",
        "Customizable Review Colection Form",
        "Social Media Integrations",
        "Review Analytics",
      ],
    },
  ];
  
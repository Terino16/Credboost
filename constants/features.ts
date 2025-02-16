import { Folder, Settings, Share2 } from "lucide-react";

const features = [
  {
    id: "Collect",
    view: "left",
    description: {
      image: "/feature1.png",
      title: "Collect Testimonials ",
      text: "CredBoost lets you collect testimonials with ease , using our no-code widget you can integrate the collection form into any website",
    },
    icon: Folder, // Icon from Lucide React
  },
  {
    id: "Manage",
    view: "right",
    description: {
      image: "/feature1.png",
      title: "Manage your Campaigns",
      text: "Manage all of your projects's testimonials from one place , with our easy to use dashboard",
    },
    icon: Settings, // Icon from Lucide React
  },
  {
    id: "Share",
    view: "left",
    description: {
      image: "/feature1.png",
      title: "Share your Cred",
      text: "Share your Cred with help of our stylish and no-code Cred-Board , Cred-Board showcases all the tesimonails in one place",
    },
    icon: Share2, // Icon from Lucide React
  },
];

export default features;

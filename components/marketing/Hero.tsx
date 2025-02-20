"use client";
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from '../ui/label';
const users = [
  { image: "/avatarthree.webp", initials: "JD" },
  { image: "/avatartwo.webp", initials: "SR" },
    { image: "/avatarone.webp", initials: "AK" },
  { image: "/avatarfour.webp", initials: "MB" },
  { image: "/avatarfive.webp", initials: "TW" },
]


function GetStartedButton(): React.JSX.Element {
    return (
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex items-center justify-center text-white  "
      >
      <Badge className='p-1'>Still Under Development 😇</Badge>
      </motion.button>
    );
  }


function HeroDescription(): React.JSX.Element {
    return (
      <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className=" text-sm md:text-lg   text-balance  text-center text-base dark:text-white leading-[24px] md:leading-[28px] text-muted-foreground "

      >
        CredBoost is a platform that helps you collect reviews from your customers and boost trust in your business.
          <br/>
        Seamlessly gather and showcase testimonials that drive conversions.

       
      </motion.p>
    );
}


function HeroTitle(): React.JSX.Element {
    return (
      <>
      <motion.div
        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <h1 className=" font-thin tracking-tighter text-center text-5xl md:text-7xl     ">
          We Collect Reviews <br /> To Boost{" "}
          <span className="bg-blue-500 bg-clip-text text-transparent">
            Trust
          </span>
        </h1>
        <style jsx>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            25%{
              background-position: 50% 50%;
              }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </motion.div>

     

     
      </>
    );
  }


  export function HeroImage()
  {
    return(
      <div className="relative bg-opacity-20 border border-zinc-400 p-4 border-white border-[1px] rounded-xl">
      <Image
        src="/Hero.png"
        className="rounded-lg w-[350px] md:w-[600px] lg:w-[900px]"
        width={900}
        height={900}
        alt="Error"
      />
      {/* Adjusted Blob Shadow */}
      <div className="absolute top-0 left-1/2 z-[-10] transform -translate-x-1/2 -translate-y-1/2 w-[100%] h-[150px] bg-gradient-to-r from-cyan-600 to-blue-600 blur-[150px] rounded-full opacity-50"></div>
    </div>
    
    )
  }

  export function HeroButton()
  {
    return(
      <motion.div className='gap-4 flex items-center  flex-col md:flex-row'>
         <div className="flex flex-col items-center space-y-1 ">
      <Button className='rounded-xl bg-blue-500 hover:bg-blue-600  '>
        <Label className='text-white'>
          Schedule a Demo
        </Label>
      </Button>
      <Label className='text-muted-foreground text-sm'>
        Coming Soon
      </Label>
      </div>
      <div className="flex flex-col items-center space-y-1 ">
      <div className="flex -space-x-4 rtl:space-x-reverse">
        {users.map((user, index) => (
          <Avatar
            key={index}
            className="h-10 w-10 border-2 border-background hover:-translate-y-1 transition-transform duration-200 bg-white"
          >
            <AvatarImage src={user.image} alt={`User ${index + 1}`} />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        Trusted by <span className="font-semibold text-foreground">1000+</span> users
      </p>
    </div>
    </motion.div>
    )
  }


export default function Hero(): React.JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center space-y-4  ">
    <GetStartedButton />    
     <HeroTitle />
     <HeroDescription/>
     <HeroButton/>
     <HeroImage/>

   

    
    </div>
  );
}

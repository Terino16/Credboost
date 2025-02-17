"use client";
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

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
      className="mx-auto  text-balance  text-center text-base dark:text-white leading-[24px] md:leading-[28px] text-muted-foreground "

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
        <h1 className=" font-bold tracking-tighter text-center text-4xl md:text-7xl    ">
          We Collect Reviews <br /> To Boost{" "}
          <span className="bg-gradient-to-r from-sky-400 via-cyan-500 to-sky-600 inline-block text-transparent bg-clip-text animate-gradient">
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
      <div className='pt-[20px]'>
        

      <Image
      src="/Hero.png"
      className='rounded-lg w-[400px] md:w-[600px] lg:w-[900px]  '
      width={900}
      height={900}
      alt="Error"
      />
            </div>
    )
  }

  export function HeroButton()
  {
    return(
      <motion.div className='space-x-4'>
      <Button className='rounded-lg'>
        Get Started 
        <ArrowRight className='animate-pulse'/>
      </Button>
      <Button className=' rounded-lg'>
       Schedule A Demo
      </Button>
    </motion.div>
    )
  }


export default function Hero(): React.JSX.Element {
  return (
    <div className="m-auto max-w-5xl h-[90vh]  md:h-[115vh] lg:h-[135vh]  flex flex-col justify-end items-center space-y-4 px-2 ">
    <GetStartedButton />    
     <HeroTitle />
     <HeroDescription/>
     <HeroButton/>
     <HeroImage/>
     
    </div>
  );
}

"use client";
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';

function GetStartedButton(): React.JSX.Element {
    return (
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex items-center justify-center text-white  "
      >
      <Badge variant="outline" className='px-2 py-2 text-[14px]'>Still Under Development 😇</Badge>
      </motion.button>
    );
  }


function HeroDescription(): React.JSX.Element {
    return (
      <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="mx-auto mt-3 text-balance text-center text-base dark:text-white leading-[24px] md:leading-[28px] text-muted-foreground sm:text-xl lg:mt-6"

      >
        CredBoost is a platform that helps you collect reviews from your customers and boost trust in your business.
          <br/>
        Seamlessly gather and showcase testimonials that drive conversions.
   
       
      </motion.p>
    );
}


function HeroTitle(): React.JSX.Element {
    return (
      <motion.div
        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <h1 className="mt-6 text-center text-[46px] font-semibold leading-[54px] tracking-[-1.2px] [font-kerning:none] sm:text-[56px] md:text-[64px] lg:text-[76px] lg:leading-[74px] lg:tracking-[-2px]">
          We Collect Reviews <br /> To Boost{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text animate-gradient">
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
    );
  }

  // function AbstractShape() {
  //   return (
  //     <motion.div
  //       animate={{ rotate: 360 }}
  //       transition={{
  //         repeat: Infinity,
  //         duration: 5,
  //         ease: "linear",
  //       }}
  //       style={{
  //         display: "inline-block",
  //         position: "absolute",
  //         bottom: "-200px",
  //         left: "200px",
  //         zIndex: 0,
  //       }}
  //     >
  //       <Image
  //         src="/abstract-curl.png"
  //         alt="Abstract Shape"
  //         className="hidden lg:block"
  //         width={250}
  //         height={50}
  //       />
  //     </motion.div>
  //   );
  // }

export default function Hero(): React.JSX.Element {
  return (
    <div className="mx-auto relative mt-16 flex flex-col gap-6 px-2 sm:mt-20 sm:px-1 md:mt-24 lg:mt-32">
    <GetStartedButton />    
     <HeroTitle />
      {/* <AbstractShape/> */}
     <HeroDescription/>
    </div>
  );
}

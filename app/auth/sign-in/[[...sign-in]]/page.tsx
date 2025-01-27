import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

function ImageDescription() {
    return (
      <p className='text-center leading-9 text-sm text-gray-500'>
        A vast universe By @Anubhav
      </p>
    );
}


export default function Page() {
    return (
        <div className="flex flex-col lg:flex-row h-[80vh]">
            {/* Left Section for larger screens */}
            <div className="hidden lg:flex lg:flex-col w-1/2 border-r-[1px] justify-center items-center">
                <Image src="/authHero.jpg" alt="logo" width={400} height={400} />
                <ImageDescription />
            </div>

            {/* SignIn Component Section */}
            <div className="flex flex-1 justify-center items-center">
                <SignIn />
            </div>
        </div>
    );
}

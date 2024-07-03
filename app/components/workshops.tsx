import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { Montserrat } from "next/font/google";
import MyComponent from "../components/downloadbutton"
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

function workshops() {
  return (
    <div className={`relative my-10 ${montserrat.className}`}>
    <h1 className="relative font-bold text-center text-4xl my-5 md:mt-10">WORKSHOPS</h1>
    <div className="text-center text-[18px] md:text-[24px] md:mx-20">
      <p className="my-8"> We’re excited to announce Aarambh 2024, an 18-day welcome program from June 8th to June 25th, 2024, designed just for our new Batch of 2024 students. </p>
      <p className="my-8"> Aarambh 2024 is packed with fun, learning, and celebration. We’ll kick things off with an exciting opening event featuring inspiring leaders and teachers who will get you pumped up to learn and create amazing things. There will be fascinating talks from experts, hands-on workshops, and activities that will keep your mind buzzing with new ideas. </p>
      <p className="my-8"> Every day is set to be amazing, making Aarambh 2024 a blast that everyone at JKLU will be talking about for years to come. </p>
    </div>
    <div className="flex place-content-center rounded-full">
    <MyComponent downloadbutton='download' />
    </div>

    {/* Main Events */}
    <div className=' md:text-center md:items-center md:py-12 place-items-center'>
      <div className='flex flex-col items-center mt-8 lg:flex-row md:flex-row md:gap-[0.11rem] md:justify-between md:my-[4rem]'>
        <div className='md-full px-6 md:px-0 md:w-1/2 object-center'>
          <Image 
            src="/aarambh-pictures/aarambh-1.jpg"
            alt="aarambh-picture"
            height={300}
            width={450}
            className='rounded-[2rem] mx-auto'/>
        </div>
        <div className='md:w-1/2 text-center my-auto'>
          <h2 className='font-bold text-3xl py-2'>Ice Breaking</h2>
          <p className='text-wrap md:text-center md:align-middle text-xl'>We’re excited to announce Aarambh 2024, an 18-day welcome program from June 8th to June 25th, 2024, designed just for our new Batch of 2024 students. This isn’t just an introduction—it’s the start of something truly special. It’s your chance to make lifelong friends and dive into the vibrant JKLU life.
          </p>
        </div>
      </div>
      
      <div className='flex flex-col items-center mt-8 lg:flex-row md:flex-row md:gap-[0.11rem] md:justify-between md:my-[4rem]'>
      <div className='block lg:hidden md:hidden px-6 object-center'>
        <Image 
            src="/aarambh-pictures/aarambh-1.jpg"
            alt="aarambh-picture"
            height={300}
            width={450}
            className='rounded-[2rem] mx-auto'/>
        </div>
        <div className='md:w-1/2 text-center my-auto'>
        <h2 className='font-bold text-3xl py-2'>Ice Breaking 2</h2>
          <p className='text-wrap md:text-center md:align-middle text-xl'>We’re excited to announce Aarambh 2024, an 18-day welcome program from June 8th to June 25th, 2024, designed just for our new Batch of 2024 students. This isn’t just an introduction—it’s the start of something truly special. It’s your chance to make lifelong friends and dive into the vibrant JKLU life.
          </p>
        </div>
        <div className='hidden lg:block md:block md-full px-6 md:px-0 md:w-1/2 object-center'>
        <Image 
            src="/aarambh-pictures/aarambh-1.jpg"
            alt="aarambh-picture"
            height={300}
            width={450}
            className='rounded-[2rem] mx-auto'/>
        </div>
      </div>
      <div className='flex flex-col items-center mt-8 lg:flex-row md:flex-row md:gap-[0.11rem] md:justify-between md:my-[4rem]'>
        <div className='md-full px-6 md:px-0 md:w-1/2 object-center'>
          <Image 
            src="/aarambh-pictures/aarambh-1.jpg"
            alt="aarambh-picture"
            height={300}
            width={450}
            className='rounded-[2rem] mx-auto'/>
        </div>
        <div className='md:w-1/2 text-center my-auto'>
          <h2 className='font-bold text-3xl py-2'>Ice Breaking 3</h2>
          <p className='text-wrap md:text-center md:align-middle text-xl'>We’re excited to announce Aarambh 2024, an 18-day welcome program from June 8th to June 25th, 2024, designed just for our new Batch of 2024 students. This isn’t just an introduction—it’s the start of something truly special. It’s your chance to make lifelong friends and dive into the vibrant JKLU life.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default workshops
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
              className='rounded-[2rem] mx-auto' />
          </div>
          <div className='md:w-1/2 text-center md:text-left my-auto'>
            <h2 className='font-bold text-3xl py-2'>Ice Breaking</h2>
            <p className='text-wrap text-center md:text-left md:align-left text-xl'>Discover an Unforgettable Ice-Breaking Session with Manish Freeman!
              This event isn’t just another gathering—it’s a chance to break free from the norm, have a lot of fun, and create memories that will last. Whether you're looking to meet new people, share laughter, or step out of your comfort zone, this is the place to be.

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
              className='rounded-[2rem] mx-auto' />
          </div>
          <div className='md:w-1/2 text-right my-auto'>
            <h2 className='font-bold text-3xl py-2'>Manzil Mystics</h2>
            <p className='text-wrap md:text-right md:align-right text-xl'>Unleash Your Rockstar at Manzil Mystics
              Music Extravaganza!
              JK Lakshmipat University is transforming into a music haven with India's First Mobile Music Classroom and Recording Studio, the Manzil Mystics, rolling in!
              This is your chance to Craft your own anthem, Rock the Music Bus, Jam with the Mystics and Star in a Music Video.
            </p>
          </div>
          <div className='hidden lg:block md:block md-full px-6 md:px-0 md:w-1/2 object-center'>
            <Image
              src="/aarambh-pictures/aarambh-1.jpg"
              alt="aarambh-picture"
              height={300}
              width={450}
              className='rounded-[2rem] mx-auto' />
          </div>
        </div>
        <div className='flex flex-col items-center mt-8 lg:flex-row md:flex-row md:gap-[0.11rem] md:justify-between md:my-[4rem]'>
          <div className='md-full px-6 md:px-0 md:w-1/2 object-center'>
            <Image
              src="/aarambh-pictures/aarambh-1.jpg"
              alt="aarambh-picture"
              height={300}
              width={450}
              className='rounded-[2rem] mx-auto' />
          </div>
          <div className='md:w-1/2 text-center text-left my-auto'>
            <h2 className='font-bold text-3xl py-2'>Rang Mastaaney</h2>
            <p className='text-wrap text-center md:text-left md:align-left text-xl'>For 13 years Rang Mastaaney has been wowing audiences with their shows. They have a repertoire of 65 plays, 250 stage productions and 1000 street shows of their superhit play Ab Bas. And they hold the record of being the only theatre group in the country to present 7 different plays by the same group in 4 consecutive days in Alwar.
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
              className='rounded-[2rem] mx-auto' />
          </div>
          <div className='md:w-1/2 text-center md:text-right my-auto'>
            <h2 className='font-bold text-3xl py-2'>Pottery and Clay</h2>
            <p className='text-wrap md:text-right md:align-right text-xl'>Join us for the source of joy and amusement with the great experience and opportunity to learn and know more towards the creative side of the world. Here you may gain insight into various ceramic techniques and skills from experienced instructor whose work reflects the many influences he had over the years of training so it is not only an art form but also a relaxing activity.
            </p>
          </div>
          <div className='hidden lg:block md:block md-full px-6 md:px-0 md:w-1/2 object-center'>
            <Image
              src="/aarambh-pictures/aarambh-1.jpg"
              alt="aarambh-picture"
              height={300}
              width={450}
              className='rounded-[2rem] mx-auto' />
          </div>
        </div>
        <div className='flex flex-col items-center mt-8 lg:flex-row md:flex-row md:gap-[0.11rem] md:justify-between md:my-[4rem]'>
          <div className='md-full px-6 md:px-0 md:w-1/2 object-center'>
            <Image
              src="/aarambh-pictures/aarambh-1.jpg"
              alt="aarambh-picture"
              height={300}
              width={450}
              className='rounded-[2rem] mx-auto' />
          </div>
          <div className='md:w-1/2 text-center md:text-left my-auto'>
            <h2 className='font-bold text-3xl py-2'>Pravah</h2>
            <p className='text-wrap text-center md:text-left md:align-left text-xl'>Prepare yourself for an exciting seminar series presented by Pravah at J.K. Lakshmipat University! Join us for the "Self to Society: Explorations & Awareness" workshop, an incredible journey of self-discovery. Through engaging activities and lively discussions, you'll uncover your true potential and enhance your communication, teamwork, and empathy skills.
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default workshops
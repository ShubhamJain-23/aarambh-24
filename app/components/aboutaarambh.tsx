import aarambhPics from "../data/aarambhpics.json";
import Image from 'next/image';
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const aarambhpics = aarambhPics;

function aboutaarambh() {
  return (
    <div className="relative">
      <h1 className="relative font-bold text-center text-4xl my-1 md:mt-10">What is AARAMBH?</h1>
      <div className="text-center text-[18px] md:text-[24px] md:mx-20">
        <p className="my-8"> Aarambh 2024, an 18-day welcome program from July 8th to July 25th 2024, is packed with fun, learning, and celebration. We’ll kick things off with an exciting opening event featuring inspiring leaders and teachers who will get you pumped up to learn and create amazing things. </p>
        <p className="my-8"> There will be fascinating talks from experts, hands-on workshops, and activities that will keep your mind buzzing with new ideas. Every day is set to be amazing, making Aarambh 2024 a blast that everyone at JKLU will be talking about for years to come. </p>
      </div>

      <div className='flex px-2 pt-2 pb-[0.01rem] gap-10 justify-center'>
        {/* Mobile Carousel */}
        <div className='lg:hidden md:hidden flex p-1 gap-6 justify-center'>
          <Carousel>
            <CarouselContent>
              {aarambhpics.map((member, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={member.image}
                    alt="aarambh-picture"
                    height={300}
                    width={400}
                    className='rounded-[1rem]' />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        </div>
      </div>
      {/* Download Schedule */}
      <div className="flex place-content-center pb-2">
        <button><a
          className="flex place-items-center items-center text-white px-4 py-2 bg-footerpink rounded-[0.5rem] gap-1"
          href="https://jklu.edu.in/" target="_blank">
          Register Now
        </a>
        </button>
      </div>
    </div>
  )
}

export default aboutaarambh;
import { FC } from 'react';
import {
  FaInstagram,
  FaLinkedinIn,
  FaGlobe,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import { MapPinIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import NextLink from "next/link";
import Image from "next/image";


const Footer: FC = () => {
  return (
    <footer className="bg-footerpink bg-opacity-50 text-black">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-around">

          {/* Contact Us Section */}
          <div className="w-full md:w-2.8/10">
            <h2 className="text-4xl font-bold mb-4 sm:mx-10">Contact Us</h2>
            <ul className="list-none">
              <li className="flex items-center mb-5 sm:mx-10">
                <span>
                  <Link href="/">
                    <FaPhone className="h-10 w-10 mr-2" />
                  </Link>
                </span>
                <span className="text-black sm:text-lg">9314072153</span>
              </li>
              <li className="flex items-center mb-5 sm:mx-10">
                <span>
                  <Link href="mailto:deepak.sogani@jklu.edu.in">
                    <FaEnvelope className="h-10 w-10 mr-2" />
                  </Link>
                </span>
                <Link href="mailto:deepak.sogani@jklu.edu.in">
                  <span className="text-black sm:text-lg">deepak.sogani@jklu.edu.in</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Address and social media icons Section */}
          <div className="w-full md:w-2.8/10 my-6 md:my-0 items-end">
            <h2 className="text-4xl font-bold mb-4 md:text-left">Address</h2>
            <ul className="list-none flex-wrap">
              <li className="flex items-start mb-5">
                <span>
                  <Link href="https://www.jklu.edu.in/">
                    <MapPinIcon className="h-10 w-10 mr-2" />
                  </Link>
                </span>
                <span className="text-black sm:text-lg">JK Lakshmipat University, Mahapura Rd, near Mahindra SEZ, Mahapura, Rajasthan 302026</span>
              </li>
            </ul>
            <ul className="flex justify-center gap-6 md:gap-1 my-8">
              <li className="items-center lg:mx-8 mb-2">
                <Link href="https://www.instagram.com/jklu_jaipur" target='_blank'>
                <FaInstagram className="h-6 w-6 mr-1" />
                </Link>
              </li>
              <li className="items-center lg:mx-8 mb-2">
                <Link href="https://in.linkedin.com/school/jk-lakshmipat-university-jaipur/" target='_blank'>
                  <FaLinkedinIn className="h-6 w-6 mr-1" />
                </Link>
              </li>
              <li className="items-center lg:mx-8 mb-2">
                <Link href="https://www.jklu.edu.in/" target='_blank'>
                  <FaGlobe className="h-6 w-6 mr-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Embedded Map Section */}
          <div className="w-full md:w-2/5 rounded md:px-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.117070008914!2d75.64722912457951!3d26.836228513374916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4af4fe68f403%3A0x3bf05f95df22b8c4!2sJK%20Lakshmipat%20University!5e0!3m2!1sen!2sin!4v1695563431231!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex={0}
              className="border-black-800 border-2 rounded-md"

            />
          </div>

        </div>
        <div className="flex flex-col md:flex-row justify-around items-center mt-8">
          <NextLink href="/" passHref>
            <div className="relative h-[rem] md:w-[18rem] md:h-[3rem] md:h-[3.5rem] justify-center" >
              <Image
                src="/logo.png"
                alt="Logo"
                width={265}
                height={65}
                className=" h-[4rem] w-[15rem] md:h-[3.5rem] md:w-[18.5rem] flex items-center justify-center object-contain"
              />
            </div>
          </NextLink>
          <div className="w-full md:w-1/3 mt-6 md:mt-0 text-center">
            <p className="text-sm">©2024 JK Lakshmipat University. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 mt-6 md:mt-0 text-center">
            <NextLink
              href="https://www.linkedin.com/in/rupakshi-sharma-interaction-designer/"
              target="_blank"
              passHref
            >
              <span className="hover:font-bold text-[0.9rem] md:text-sm">
                Design by Rupakshi Sharma
              </span>
            </NextLink>
            <span className="text-[0.7rem] md:text-sm"> & </span>
            <NextLink
              href="https://github.com/ShubhamJain-23"
              target="_blank"
              passHref
            >
              <span className="hover:font-bold text-[0.9rem] md:text-sm">
                Developed by Shubham Jain
              </span>
            </NextLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
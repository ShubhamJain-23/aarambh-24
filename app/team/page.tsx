import dataTeam from "../data/dataTeam.json";
import dataOC from "../data/dataOC.json";
import dataOSA from "../data/dataOSA.json";
import Image from "next/image";
import Link from 'next/link';
import { Share_Tech_Mono, Inter } from "next/font/google";
import {
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

const Team: React.FC = () => {
  const importedDataOC = dataOC;
  const importedDataTeam = dataTeam;
  const importedDataOSA = dataOSA;

  return (
    <div className="">
      <div
        className={`mx-[1rem] md:mx-[5rem] lg:mx-[10rem] mt-8 md:mt-8 mb-[5rem] md:mb-[10rem] ${tech_mono.className}`}
      >

        {/* OFFICE OF STUDENT AFFAIRS */}
        <section className="mb-1 md:mb-16">
          <h3 className="text-[1.8rem] md:text-[4rem] font-bold text-center my-[2rem] md:my-[6rem] text-[#f58b40]">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #b22d4e 15%, #249683 84.22%)",
              }}
            >
              OFFICE OF STUDENT AFFFAIRS
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[3rem] mx-[1rem] md:mx-[1rem]">
            {importedDataOSA.map((member) => (
              <div key={member.name} className="relative text-white">
                <div className="absolute inset-0.5 md:-inset-0.5 bg-footerpink rounded-[1rem] blur opacity-30"></div>
                <div className="relative flex flex-row md:flex-col items-center bg-black bg-opacity-0 justify-center rounded-[1rem] p-4 md:p-4">
                  <div className="w-1/2 md:mb-4 relative h-[8rem]  md:h-[14rem] md:w-full overflow-hidden rounded-full shadow-lg md:mx-auto">
                    <div className="w-full h-full overflow-hidden rounded-md">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex-grow"></div>
                  <div className="w-1/2 md:w-full m-2">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-footerpink text-center text-base md:text-lg mb-">
                        {member.name}
                      </p>
                      <p className="flex justify-center text-darkcyan hover:underline">
                        {member.contact}
                      </p>
                      <ul className="flex sm:flex-row justify-center lg:justify-between md:justify-center my-4">
                      <li className="items-center lg:mx-4 mb-2">
                <Link href={"mailto:"+member.email}>
                <FaEnvelope className="h-8 w-8 mr-2" />
                </Link>
              </li>
              <li className="items-center lg:mx-4 mb-2">
                <Link href={member.linkedin}>
                <FaLinkedinIn className="h-8 w-8 mr-2" />
                </Link>
              </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ORGANISING COMMITTEE */}
        <section className="mb-1 md:mb-16">
          <h3 className="text-[1.8rem] md:text-[4rem] font-bold text-center my-[2rem] md:my-[6rem] text-[#f58b40]">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #b22d4e 15%, #249683 84.22%)",
              }}
            >
              ORGANISING COMMITTEE
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[3rem] mx-[1rem] md:mx-[1rem]">
            {importedDataOC.map((member) => (
              <div key={member.name} className="relative text-white">
                <div className="absolute inset-0.5 md:-inset-0.5 bg-footerpink rounded-[1rem] blur opacity-30"></div>
                <div className="relative flex flex-row md:flex-col items-center bg-black bg-opacity-0 justify-center rounded-[1rem] p-4 md:p-4">
                  <div className="w-1/2 md:mb-4 relative h-[8rem]  md:h-[14rem] md:w-full overflow-hidden rounded-full shadow-lg md:mx-auto">
                    <div className="w-full h-full overflow-hidden rounded-md">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex-grow"></div>
                  <div className="w-1/2 md:w-full m-2">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-footerpink text-center text-sm md:text-lg mb-2">
                        {member.name}
                      </p>
                      <a
                        href={member.email}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center text-darkcyan hover:underline"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* COORDINATORS */}
        <section className="md:mt-[12.5rem]">
          <h3 className="text-[1.8rem] md:text-[4rem] font-bold text-center my-[4rem] md:my-[6rem] text-[#f58b40]">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #b22d4e 25%, #249683 84.22%)",
              }}
            >
              COORDINATORS
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:gap-8 mx-[0.5rem] md:mx-[5rem]">
            {importedDataTeam.map((member) => (
              <div
                key={member.name}
                className="flex flex-col text-white md:flex-row items-around text-center md:text-left justify-center md:justify-start mb-8"
              >
                <div className="md:mr-4 relative h-[9rem] w-[9rem] md:h-40 md:w-40 overflow-hidden rounded-full shadow-lg">
                  <div className="w-full h-full overflow-hidden rounded-full">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-black text-base mt-[1rem] md:mt-0 md:text-[1.7rem] md:mb-[1rem]">
                    {member.name}
                  </p>
                  <p className="mb-2 text-base text-[1.2rem] md:my-[2rem] px-1 md:px-0">
                    <span
                      className="text-transparent bg-clip-text"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(178,45,78,0.885766806722689) 0%, rgba(178,45,78,1) 100%)",
                      }}
                    >
                      {member.committee}
                    </span>
                  </p>
                  <a
                    href={member.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-darkcyan hover:underline text-[1.1rem]"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteers */}

      </div>
    </div>
  );
};

export default Team;
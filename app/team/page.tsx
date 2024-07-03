import dataTeam from "../data/dataTeam.json";
import dataOC from "../data/dataOC.json";
import dataOSA from "../data/dataOSA.json";
import Image from "next/image";
import Link from 'next/link';
import { Inter, Montserrat } from "next/font/google";
import {
  FaInstagram,
  FaLinkedinIn,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });


const Team: React.FC = () => {
  const importedDataOC = dataOC;
  const importedDataTeam = dataTeam;
  const importedDataOSA = dataOSA;

  return (
    <div className="">
      <div
        className={`mx-[1rem] md:mx-[5rem] lg:mx-[5rem] mt-8 md:mt-8 mb-[5rem] md:mb-[10rem] ${montserrat.className}`}
      >

        {/* OFFICE OF STUDENT AFFAIRS */}
        <section className="mb-1 md:mb-16">
          <h3 className="text-[1.8rem] md:text-[2.5rem] font-bold text-center my-[2rem] md:my-[3rem] text-[#f58b40]">
            <span
              className="text-black bg-clip-text"
              // style={{
              //   backgroundImage:
              //     "linear-gradient(90deg, #b22d4e 15%, #249683 84.22%)",
              // }}
            >
              OFFICE OF STUDENT AFFFAIRS
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[1rem] mx-[1rem] md:mx-[1rem]">
            {importedDataOSA.map((member) => (
              <div key={member.name} className="relative text-white">
                <div className="absolute inset-0.5 md:-inset-0.5"></div>
                <div className="relative flex flex-row md:flex-col align-center items-center justify-center p-2 md:p-2">
                  <div className="w-1/2 md:mb-4 relative h-[8rem] md:h-[14rem] md:w-full overflow-hidden md:mx-auto">
                    <div className="w-full h-full overflow-hidden">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 md:w-full m-1">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-black text-center text-base md:text-lg mb-">
                        {member.name}
                      </p>
                      <p className="flex justify-center text-center text-[#737373] hover:underline">
                        {member.committee}
                      </p>
                      <p className="flex justify-center text-black hover:underline">
                        {member.contact}
                      </p>
                      <ul className="flex sm:flex-row justify-center lg:justify-between md:justify-center my-4">
                        <li className="items-center lg:mx-4 mb-2">
                          <Link href={"mailto:" + member.email}>
                          <FaEnvelope className="h-8 w-8 mr-2" />
                          </Link>
                        </li>
                        <li className="items-center lg:mx-4 mb-2">
                          <Link href={member.linkedin}>
                          <FaLinkedin className="h-8 w-8 mr-2" />
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
          <h3 className="text-[1.8rem] md:text-[4rem] font-bold text-center my-[2rem] md:my-[3rem] text-[#f58b40]">
            <span
              className="text-black bg-clip-text"
            >
              ORGANISING COMMITTEE
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[3rem] mx-[1rem] md:mx-[1rem]">
            {importedDataOC.map((member) => (
              <div key={member.name} className="relative text-white">
                <div className="absolute inset-0.5 md:-inset-0.5"></div>
                <div className="relative flex flex-row md:flex-col align-center items-center justify-center p-4 md:p-2">
                  <div className="w-1/2 md:mb-4 relative h-[8rem]  md:h-[14rem] md:w-full overflow-hidden rounded-full shadow-lg md:mx-auto">
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
                  <div className="flex-grow"></div>
                  <div className="w-1/2 md:w-full m-2">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-black text-center text-sm md:text-lg mb-2"> 
                      {member.name}                      
                      </p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center text-[#737373] hover:underline">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COORDINATORS */}
        <section className="">
          <h3 className="text-[1.8rem] md:text-[4rem] font-bold text-center my-[4rem] md:my-[3rem] text-[#f58b40]">
            <span
              className="text-black  bg-clip-text"
            >
              COORDINATORS
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 md:gap-8 mx-[0.5rem] md:mx-[5rem]">
            {importedDataTeam.map((member) => (
              <div
                key={member.name}
                className="flex flex-col text-white items-around text-center md:text-center justify-self-center mb-8"
              >
                <div className="relative h-[9rem] w-[9rem] md:h-40 md:w-40 overflow-hidden rounded-full mx-auto shadow-lg ">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                    />
                </div>
                <div className="flex flex-col text-center">
                  <p className="font-bold text-black text-base mt-[1rem] text-center md:text-[1.7rem] md:mb-[1rem]">
                    {member.name}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#737373] hover:underline text-center text-[1.1rem] md:mb-[0.5rem]"
                  >
                    LinkedIn
                  </a>
                  <p className="mb-2 text-base text-[1.2rem] text-center px-1 md:px-0">
                    <span
                      className="text-black font-bold bg-clip-text"
                    >
                      {member.committee}
                    </span>
                  </p>
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
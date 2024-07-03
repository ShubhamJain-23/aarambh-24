import type { Metadata } from "next";
import React, { ReactNode } from "react"; // Import ReactNode from 'react'
import { Montserrat  } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Gallery from "./components/gallery";

const montserrat  = Montserrat ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aarambh",
  description:
    "Come be a part of HackJKLU v3.0, the hackathon organized by the Council of Technical Affairs of JK Lakshmipat University, Jaipur. Join us from 15th to 17th March 2024 for a thrilling hackathon in Web2, Web3, IoT, Game dev/ AR/ VR, Cybersecurity and AI/ML. Register now!",
  keywords:
    "Aarambh, Aarambh'24, Aarambh 2024, hackjklu, Aarambh JKLU 2024, orientation, orientation JKLU, orientation JK Lakshmipat University, orientation JKLU Jaipur, orientation JKLU Rajasthan, orientation JKLU India, JK Lakshmipat University, Jaipur, Rajasthan, India, hackathon, Jaipur hackathon, hackathon in march, hackathon in 2024, admission in JKLU, admission in JK Lakshmipat University, admission in JKLU Jaipur, admission in JKLU Rajasthan, admission in JKLU India, bachelor of design best college, bacheor of technology best college, best college jaipur",
};


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}

import Image from "next/image";
import { Montserrat } from "next/font/google";
import Aarambh from "./components/aboutaarambh"
import Workshops from "./components/workshops"
import Poster from "./components/poster"

// import Gallery from "./components/gallery";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });


export default function Home() {
  return (
    <main className={`min-h-screen items-center  ${montserrat.className}`}>
      <div className={`mx-[1rem] md:mx-[10rem] ${montserrat.className}`}>
        {/* <Poster /> */}
        {/* <img className="h-[1080px]" alt="" src="" /> */}
        <div className="absolute max-w-full overflow-hidden object-cover inset-0 z-[-1]">
          <Image
            src="/banner.png"
            alt="Cover Picture"
 fill
            style={{ objectFit: "fill" }}
            className="hidden relative lg:block md:block"
          >
          </Image>
        </div>
        <div className="absolute inset-x-0 top-[4.5rem] z-[-1]">
          <Image
            src="/bannerportrait.png"
            alt="Cover Picture"
            width={400}
            height={400}
            style={{ objectFit: "cover" }}
            className="relative block lg:hidden md:hidden"
          >
          </Image>
        </div>
        {/* About Aarambh */}
        <Aarambh />

        {/* Workshops */}
        <Workshops />
      </div>

    </main>
  );
}

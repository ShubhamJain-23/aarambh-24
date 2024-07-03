import React from 'react'
import Image from "next/image";

function poster() {
    return (
        <section>
            <div className="absolute z-[-1]">
                <Image
                    src="/banner.png"
                    alt="Cover Picture"
                    fill
                    style={{ objectFit: "cover" }}
                    className="hidden lg:block md:block"
                >
                </Image>
            </div>
            <div className="relative inset-0 z-[-1]">
                <Image
                    src="/bannerportrait.png"
                    alt="Cover Picture"
                    width={480}
                    height={480}
                    style={{ objectFit: "cover" }}
                    className="relative block lg:hidden md:hidden"
                >
                </Image>
            </div>
        </section>
    )
}

export default poster;
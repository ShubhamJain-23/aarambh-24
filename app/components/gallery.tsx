import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const imagePaths = ['/image_1.png', '/logo-md.png', '/logo.png'];

function Gallery() {
  return (
      <div>
        <Carousel className="w-full max-w-full">
          <CarouselContent>
            {imagePaths.map((path, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-0">
                      <Image
                        src={path}
                        alt={`Image ${index + 1}`}
                        // layout="responsive"
                        width="100" // Set the width to the actual width of your images
                        height="500" // Set the height to the actual height of your images
                      />
                    </CardContent>
                    <CardContent className="flex items-center justify-center p-0">
                      <Image
                        src={path}
                        alt={`Image ${index + 2}`}
                        // layout="responsive"
                        width="100" // Set the width to the actual width of your images
                        height="500" // Set the height to the actual height of your images
                      />
                    </CardContent>
                    <CardContent className="flex items-center justify-center p-0">
                      <Image
                        src={path}
                        alt={`Image ${index + 3}`}
                        // layout="responsive"
                        width="100" // Set the width to the actual width of your images
                        height="50" // Set the height to the actual height of your images
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>      
      </div>
  )
}

export default Gallery;
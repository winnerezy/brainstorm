'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

export const Topics = () => {
  return (
   <div className="w-full flex flex-col gap-2">
      <h4 className="text-start">Topics</h4>
   <Carousel className="w-full self-center">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/3 md:basis-1/5 lg:basis-1/6">
            <div className="p-1">
           <div className="border-2 border-[--border] w-full max-w-36 h-10 rounded-full"> 

           </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
   </div>
  )
}

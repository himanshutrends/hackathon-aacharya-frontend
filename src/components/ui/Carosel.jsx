import * as React from "react";
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
export default function CarouselDemo() {
    return (<Carousel className="">
      <CarouselContent>
        
      <CarouselItem key={0}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center p-6">
                <img src="https://img.freepik.com/premium-vector/geometric-background-bg-shape-background-square-background-polygonal-background-abstract-bg_634868-12.jpg" width={2600} height={0} alt="hello"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          {/*  */}

          <CarouselItem key={1}>
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center p-6">
                <img src="https://img.freepik.com/premium-vector/geometric-background-bg-shape-background-square-background-polygonal-background-abstract-bg_634868-12.jpg" width={2600} height={0} alt="hello"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>);
}

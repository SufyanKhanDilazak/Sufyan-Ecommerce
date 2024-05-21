import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import img2 from "../../../public/pics/img2.avif"
import Image from "next/image"

const Card = () => {
  return (
    <div><Carousel >
    <CarouselContent >
      <CarouselItem></CarouselItem>
      <CarouselItem>...</CarouselItem>
      <CarouselItem>...</CarouselItem>
    </CarouselContent>
    <CarouselPrevious className="mobile:hidden"/>
    <CarouselNext className="mobile:hidden" />
  </Carousel>
  </div>
  )
}

export default Card
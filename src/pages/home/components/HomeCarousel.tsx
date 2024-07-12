import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export type CarouselProps = {
  images: Array<[src: string, alt: string]>
}

export const HomeCarousel : React.FC<CarouselProps> = ({ images }: CarouselProps) => {

  const carouselItems = () => {
    const items = images.map(([src, alt]) => {
      return(
        <CarouselItem className="pl-0" key={src}>
          <img src={src} alt={alt} className="w-screen h-[500px] bg-secondary" />
        </CarouselItem>
      )
    });
    return items;
  }

  return (
    <Carousel className="w-screen relative bg" opts={{
      align:"start",
      loop: true
    }}>
      <CarouselContent className="-ml-0">
        {carouselItems()}
      </CarouselContent>
      <CarouselPrevious className="absolute left-6"/>
      <CarouselNext className="absolute right-6"/>
    </Carousel>
  )
};
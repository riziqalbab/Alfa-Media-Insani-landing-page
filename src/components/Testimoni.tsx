import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardTesti from "./ui/CardTesti";

function Testimoni() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Apa Kata Mereka?</h1>
      <div className="w-full ">
        <Carousel>
          <CarouselContent className="">
            <CarouselItem className="w-full lg:basis-1/2 flex items-center justify-center">
              <CardTesti />
            </CarouselItem>
            <CarouselItem className="w-full lg:basis-1/2 flex items-center justify-center">
              <CardTesti />
            </CarouselItem>
            <CarouselItem className="w-full lg:basis-1/2 flex items-center justify-center">
              <CardTesti />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Testimoni;

/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function HeaderCarousel() {
  const featuredBooks = [
    {
      id: 1,
      title: "The Girl",
      coverImage: "https://picsum.photos/1920/720",
    },
    {
      id: 2,
      title: "The Girl",
      coverImage: "https://picsum.photos/1920/720",
    },
    {
      id: 3,
      title: "The Girl",
      coverImage: "https://picsum.photos/1920/720",
    },
    {
      id: 4,
      title: "The Girl",
      coverImage: "https://picsum.photos/1920/720",
    },
  ];

  return (
    <div className="w-full">
      <Carousel>
        <CarouselContent className="">
          <CarouselItem className="relative flex h-99">
            <SearchCorusel />
          </CarouselItem>
          {featuredBooks.map((item) => {
            return (
              <CarouselItem key={item.id} className="relative flex h-99">
                <img
                  className="absolute h-full object-cover w-full"
                  src={item.coverImage}
                  alt={item.title}
                />
                <h1 className="absolute right-0 bottom-0 p-4">{item.title}</h1>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute top-1/2 left-2 flex items-center justify-center">
          <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
        </div>
        <div className="absolute top-1/2 right-2 flex items-center justify-center">
          <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
        </div>
      </Carousel>
    </div>
  );
}

function SearchCorusel() {
  return (
    <div className="p-10 w-full h-full flex items-center lg:items-start justify-center flex-col lg:px-20 bg-gradient-to-r from-slate-50 to-gray-200">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold">Alfa Media Insani</h1>
        <h2>Akses di mana pun, kapan pun, Baca buku yuk!</h2>
      </div>
      <div className="flex mt-5 gap-4">
        <Input className="rounded border lg:w-96" placeholder="Cari Buku Disini"/> 
        <Button type="button">CARI</Button>
      </div>
    </div>
  );
}

export default HeaderCarousel;

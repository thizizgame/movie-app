"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieType } from "@/types";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

type MovieCarouselProps = {
  movies: MovieType[];
};

export function MovieCarousel({ movies }: MovieCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {movies.slice(0, 10).map((movie, index) => (
            <CarouselItem key={index}>
              <Link href={`/movie-details?id=${movie.id}`}>
              <div className="p-1" >
                <Card>
                  <CardContent className="h-[606px] p-0 m-0 relative flex items-center text-white">

                    <div className="w-101 rounded-xl absolute p-5 left-25 flex flex-col gap-3 ">
                      <h2>Now Playing:</h2>
                      <span className="text-3xl font-semibold ">
                        {movie.title}
                      </span>
                      <h2 className="flex items-center gap-2"><FaStar color="yellow"/>{movie.vote_average}</h2>
                      <h2 className="text-[14px]">{movie.overview}</h2>
                      <h2 className="rounded-xl py-2 px-4 mt-5 w-32 bg-white text-black border-1">Watch Trailer</h2>
                    </div>

                    <img className="rounded-xl w-screen h-[654px] bg-center bg-cover" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                  </CardContent>
                </Card>
              </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
      </Carousel>
      <div className="flex gap-2 justify-center -mt-15 left-[45%] absolute ">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            onClick={() => {
              api?.scrollTo(index);
            }}
            key={index}
            className={`rounded-full size-4 ${index + 1 === current ? "bg-gray-300" : "bg-gray-600"
              }`}
          ></div>
        ))}
      </div>
    </>
  );
}
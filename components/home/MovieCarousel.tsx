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
import { TrailerDialog } from "./trailerDialog";
import { getTrailer } from "@/utils/get-movie-details";

// ⬇️ ШИНЭ: Autoplay import
import Autoplay from "embla-carousel-autoplay";

type MovieCarouselProps = {
  movies: MovieType[];
};

export function MovieCarousel({ movies }: MovieCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [trailerLink, setTrailerLink] = React.useState("");

  // ⬇️ ШИНЭ: plugin-ийн ref — play/stop дуудах боломжтой
  const autoplay = React.useRef(
    Autoplay({
      delay: 4000,            // 4 сек тутам slide
      stopOnInteraction: false,
      stopOnMouseEnter: true, // hover хийхэд зогсооно
    })
  );

  const handleClick = async (id: string | number) => {
    const trailerURL = await getTrailer(id);
    setTrailerLink(trailerURL.results[0].key);
  };

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        className="w-full"
        // ⬇️ ШИНЭ: loop + autoplay plugin
        opts={{ loop: true }}
        plugins={[autoplay.current]}
        // (optional) mouse орж гарахад play/stop гар аргаар удирдах
        onMouseEnter={autoplay.current.stop}

      >
        <CarouselContent>
          {movies.slice(0, 10).map((movie, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="xl:h-[606px] lg:h-[506px] md:h-[426px] sm:h-[406px] p-0 m-0 relative flex items-center text-white">
                    <div className="w-101 rounded-xl absolute p-5 left-25 flex flex-col gap-3">
                      <Link href={`seemore?name=now_playing&page=1`}><h2>Now Playing:</h2></Link>
                      <span className="text-3xl font-semibold">
                        <Link href={`/movie-details?id=${movie.id}`}>
                          {movie.title}
                        </Link>
                      </span>
                      <h2 className="flex items-center gap-2">
                        <FaStar color="yellow" />
                        {movie.vote_average}
                      </h2>
                      <h2 className="text-[14px]">{movie.overview}</h2>
                      <TrailerDialog
                        id={movie.id}
                        trailerLink={trailerLink}
                        handleClick={handleClick}
                      />
                    </div>

                    <img
                      className="rounded-xl w-screen h-[654px] bg-center bg-cover"
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt={movie.title}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
      </Carousel>

      {/* ⬇️ ЖИЖИГ ЗАСВАР: сумнуудын доорх dots-ын тоог динамик болгов */}
      <div className="flex gap-2 justify-center -mt-15 lg:left-[40%] md:left-[39%] sm:left-[40%] xl:left-[45%] absolute">
        {Array.from({ length: count || 0 }).map((_, index) => (
          <div
            onClick={() => api?.scrollTo(index)}
            key={index}
            className={`rounded-full xl:size-4 md:size-2.5 lg:size-3 sm:size-2 ${index + 1 === current ? "bg-gray-300" : "bg-gray-600"
              }`}
          />
        ))}
      </div>
    </>
  );
}

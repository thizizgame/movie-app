import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { mockMovies } from "@/lib/constants"
const containerMovies = mockMovies.filter(
  (movie) => movie.popularity > 90
);
export function MovieCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        

        {containerMovies.map((movie) => (
          Array.from({ length: 1 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <img className="w-full" src={movie.backdrop_path}/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))
                          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}



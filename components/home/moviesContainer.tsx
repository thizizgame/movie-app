import { MovieType } from "@/types";
import { MovieCard } from "./MovieCard";
import Link from "next/link";


type MoviesContainerProps = {
  movies: MovieType[];
  title: string;
  angilal: string;
};

export const MoviesContainer = ({ movies, title, angilal }: MoviesContainerProps) => {

  return (
    <div>
      <div className="flex items-center pr-5 ">
        <Link className="flex justify-between items-center w-full md:justify-between sm:justify-around" href={`${angilal}`}>
          <h2 className="pt-6 pb-6 text-4xl font-semibold">{title}</h2>
          <p>See more</p>
        </Link>
      </div>

      <div className="flex gap-6 m-auto flex-wrap justify-center">
        {movies.slice(0, 10).map((movie) => (

          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            scores={movie.vote_average}
            imageURL={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};
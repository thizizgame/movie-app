import { MovieType } from "@/types";
import { MovieCard } from "./MovieCard";

type MoviesContainerProps = {
  movies: MovieType[];
  title: string;
};

export const MoviesContainer = ({ movies, title }: MoviesContainerProps) => {
   
  return (
    <div>
      <h2 className="pt-6 pb-6 text-4xl font-semibold">{title}</h2>
      <div className="flex gap-6 m-auto flex-wrap ">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            scores={movie.vote_average}
            imageURL={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};
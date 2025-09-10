import { CardDemo } from "@/components/home/MovieCard";
import { MovieCarousel } from "@/components/home/MovieCarousel";
import { mockMovies } from "@/lib/constants";


const upcomingMovies = mockMovies.filter(
  (movie) => new Date(movie.release_date) >= new Date("2015-01-01")
);
const popularMovies = mockMovies.filter(
  (movie) => movie.popularity > 90
);


const topRatedMovies = mockMovies.filter(
  (movie) => movie.vote_average >= 8.5
);

export default function Home() {
  return (
    <div className="w-[1250px] m-auto">
      <MovieCarousel />
      <h1 className="pt-6 pb-6 text-4xl font-semibold">Upcoming</h1>
      <div className="flex gap-6 m-auto flex-wrap ">
        {upcomingMovies.map((movie) => (
          <CardDemo
            key={movie.id}
            title={movie.title}
            scores={movie.vote_average}
            imageURL={movie.poster_path}
          />
        ))}
      </div>
      <h1 className="pt-6 pb-6 text-4xl font-semibold">Popular</h1>
      <div className="flex gap-6 m-auto flex-wrap ">
         {popularMovies.map((movie) => (
          <CardDemo
            key={movie.id}
            title={movie.title}
            scores={movie.vote_average}
            imageURL={movie.poster_path}
          />
        ))}
      </div>
      <h1 className="pt-6 pb-6 text-4xl font-semibold">Top Rated</h1>
      <div className="flex gap-6 m-auto flex-wrap ">
         {topRatedMovies.map((movie) => (
          <CardDemo
            key={movie.id}
            title={movie.title}
            scores={movie.vote_average}
            imageURL={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
}

import { MovieCarousel } from "@/components/home/MovieCarousel";
import { MoviesContainer } from "@/components/home/moviesContainer";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";

export default async function HomePage() {

  const upcomingMovies: movieResponseType = await getMoviesList("upcoming", "1");
  const popularMovies: movieResponseType = await getMoviesList("popular", "1");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated", "1");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing", "1"
  );

  return (
    <div className="xl:w-[1250px] m-auto lg:w-[1024px] md:w-[768px] sm:w-[640px]">

      <MovieCarousel movies={nowPlayingMovies.results} />
      <MoviesContainer movies={upcomingMovies.results} title="Upcoming" angilal="upcoming" />
      <MoviesContainer movies={popularMovies.results} title="Popular" angilal="popular" />
      <MoviesContainer movies={topRatedMovies.results} title="Top Rated" angilal="top_rated" />
    </div>
  );
}

import { MovieCarousel } from "@/components/home/MovieCarousel";
import { MoviesContainer } from "@/components/home/moviesContainer";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";

export default async function HomePage() {

  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );

  return (
    <div className="xl:w-[1250px] m-auto lg:w-[1024px] md:w-[768px] sm:w-[640px]">

      <MovieCarousel movies={nowPlayingMovies.results} />
      <MoviesContainer movies={upcomingMovies.results} title="Upcoming" angilal="upcoming" />
      <MoviesContainer movies={popularMovies.results} title="Popular" angilal="popular" />
      <MoviesContainer movies={topRatedMovies.results} title="Top Rated" angilal="toprated" />
    </div>
  );
}

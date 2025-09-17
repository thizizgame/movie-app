import { MovieCarousel } from "@/components/home/MovieCarousel";
import { MoviesContainer } from "@/components/home/moviesContainer";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";

export default async function Home() {

  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );

  return (
    <div className="w-[1250px] m-auto">

      <MovieCarousel movies={nowPlayingMovies.results} />
      <MoviesContainer movies={upcomingMovies.results} title="Upcoming" />
      <MoviesContainer movies={popularMovies.results} title="Popular" />
      <MoviesContainer movies={topRatedMovies.results} title="Top Rated" />
    </div>
  );
}
// 1. Home Page Carousel Watch trailer
// 2. Movie Carousel iin auto slide hiih
// 3. Searched Page iin Results-iig songoson Genre-r filterdeh
// 4. Searched Page iin pagination
// 5. Movie Details page watch traileriin absolute-g zasah
// 6. Responsive hiih
// 7. Page buriin skeleton hiih
// 8. Design saijruulj bolno
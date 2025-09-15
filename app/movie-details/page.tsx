import { MovieCard } from "@/components/home";
import { MovieDetails } from "@/components/home/MovieDetails";
import { CreditType, movieResponseType, MovieType } from "@/types";
import { getCredits, getMoviesByMovieId, getSimilarMovies, getTrailer } from "@/utils/get-movie-details";


type movieDetailsPageProps = {
  searchParams: Promise<{ id: string }>;
};

const movieDetailsPage = async ({ searchParams }: movieDetailsPageProps) => {
  const params = await searchParams;
  const id = params.id;

  const movieDetail: MovieType = await getMoviesByMovieId(
    id
  );
  
  const movieCredits: CreditType = await getCredits(id);
  const movieTrailer = await getTrailer(id);
  const similarMovies :movieResponseType = await getSimilarMovies(id);
  console.log("moviecredits.cast", movieCredits.cast);
  console.log("moviecredits", movieCredits);
  console.log("trailer", movieTrailer);
  console.log("similar movies", similarMovies);
  return (
    <div className="w-[1250px] m-auto relative">
       <MovieDetails overview={movieDetail.overview} genreID={movieDetail.genre_ids} scores={movieDetail.vote_average} title={movieDetail.title} imageURL={movieDetail.backdrop_path} date={movieDetail.release_date}/>
       <iframe
       key={movieTrailer.id}
        src={`https://www.youtube-nocookie.com/embed/${movieTrailer.results[0].key}`}
        className="w-[950px] border-0 absolute top-19 left-75 h-107"
      />
      <div className="flex gap-2  border-b-1 pt-3 pb-3">
        <h2 className="font-bold">Director: </h2>
          {
            movieCredits.crew[0].name
          }
       </div>
       <div className="flex gap-2  border-b-1 pt-3 pb-3">
        <h2 className="font-bold">Actors: </h2>
          {movieCredits.cast.slice(0,5).map((n)=>(
            <p key={n.credit_id}>{n.name}</p>
          ))}
       </div>
       <div className="flex gap-2  border-b-1 pt-3 pb-3">
        <h2 className="font-bold">Crew Members: </h2>
         {movieCredits.crew.slice(0,5).map((n)=>(
            <p key={n.credit_id}>{n.name}</p>
          ))}
       </div>
       <div className="flex justify-between py-6">
          <div className="text-2xl font-bold">More Like this</div>
          <div>See More</div>
       </div>
       <div className="flex justify-between">
         {
            similarMovies.results.slice(0,5).map((movie)=>(
                <MovieCard key={movie.id} title={movie.title} id={movie.id} scores={movie.vote_average} imageURL={movie.poster_path}/>
            ))   
         } 
       </div>
    </div>  
  );
};

export default movieDetailsPage;
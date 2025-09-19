
import { MovieCard } from "@/components/home";
import { genreResponsiveType, genreType, movieResponseType, MovieType } from "@/types";
import { getSearchedMoviesServer } from "@/utils/get-data";
import { getGenreList } from "@/utils/get-genre";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type searchGenrePageProps = {
  searchParams: Promise<{ value: string, genreid: number }>;
};

const SearchPage = async ({ searchParams }: searchGenrePageProps) => {
  const params = await searchParams;
  const searchValue = params.value;
  const selectedGenreID = params.genreid;
  let page:string = "1";
  const searchedMoviesResponse: movieResponseType = await getSearchedMoviesServer(
    searchValue, page
  );
  const abc: genreResponsiveType = await getGenreList();
  console.log("selectedgenreId",selectedGenreID);
  const filteredSearchedMovies = selectedGenreID != undefined ? 
  searchedMoviesResponse.results.filter((movie)=> movie.genre_ids.includes(selectedGenreID)) 
  : searchedMoviesResponse.results;
  return (
    <div className="w-[1250px] m-auto">
      <h1 className="text-3xl pb-15 pt-5">Search Filter</h1>
      <div className="flex">
         <div className="flex flex-wrap gap-3 border-r-1">
        <h1 className="w-full">
            { (searchedMoviesResponse.total_results) } results for “{searchValue}”
          </h1>
        {filteredSearchedMovies.slice(0, 12).map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            scores={movie.vote_average}
            imageURL={movie.poster_path}
          />
        ))}
         
      </div>
      <div className="pl-3">
        <h1>Genres</h1>
        <p className="py-5">See lists of movies by genre</p>
        <div className="w-65 flex gap-2 flex-wrap text-[14px]">
        {abc.genres.map((genre: genreType) => (

          <Link className="border-1 py-1 px-1 rounded-2xl " key={genre.id} href={`/search?value=${searchValue}&genreid=${genre.id}`}>
            <p className="flex items-center">
              {genre.name}
              <ChevronRight className="w-4 h-4"/>  
            </p>
          </Link>

        ))}
      </div>
      </div>
      
     
    </div>
    </div>
    
  );
};

export default SearchPage;

import { MovieCard } from "@/components/home";
import { genreResponsiveType, genreType, movieResponseType } from "@/types";
import { getSearchedMovies } from "@/utils/get-data";
import { getGenreList } from "@/utils/get-genre";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
type searchGenrePageProps = {
  searchParams: Promise<{ value: string, id: string, page: string }>;
};
const SearchPage = async ({ searchParams }: searchGenrePageProps) => {
  const params = await searchParams;
  const searchValue = params.value;
  const selectedGenreID = params.id;
  const page = params.page || "1";
  const searchedMoviesResponse: movieResponseType = await getSearchedMovies(
    searchValue, page
  );
  const abc: genreResponsiveType = await getGenreList();
  console.log("selectedgenreId", selectedGenreID);
  const filteredSearchedMovies = selectedGenreID != undefined ?
    searchedMoviesResponse.results.filter((movie) => movie.genre_ids.toString().includes(selectedGenreID))
    : searchedMoviesResponse.results;
  return (
    <div className="xl:w-[1250px] lg:w-[1024px] md:w-[768px] sm:w-[640px] m-auto">
      <h1 className="text-3xl pb-15 pt-5">Search Filter</h1>
      <div className="flex">
        <div className="flex flex-wrap gap-3 border-r-1">
          <h1 className="w-full">
            {(searchedMoviesResponse.total_results)} results for {searchValue}
          </h1>
          {filteredSearchedMovies.slice(0, 20).map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              scores={movie.vote_average}
              imageURL={movie.poster_path}
            />
          ))}
          <div className="mt-6 m-auto">
            <Pagination>
              <PaginationContent>
                {/* Previous */}
                {searchedMoviesResponse.page > 1 && (
                  <PaginationItem>
                    <PaginationPrevious
                      href={`search?value=${searchValue}&page=${searchedMoviesResponse.page - 1}`}
                    />
                  </PaginationItem>
                )}

                {/* Dynamic number buttons */}
                {Array.from({ length: 3 }, (_, i) => {
                  // эхлэх утга: page=1 үед 1; page>=2 үед (currentPage - 1)
                  const startPage =
                    searchedMoviesResponse.page === 1
                      ? 1
                      : searchedMoviesResponse.page - 1

                  const pageNumber = startPage + i

                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        href={`search?value=${searchValue}&page=${pageNumber}`}
                        isActive={pageNumber === searchedMoviesResponse.page}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  )
                })}

                {/* Ellipsis */}
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>

                {/* Next */}
                {searchedMoviesResponse.page < searchedMoviesResponse.total_pages && (
                  <PaginationItem>
                    <PaginationNext
                      href={`search?value=${searchValue}&page=${searchedMoviesResponse.page + 1}`}
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        <div className="pl-3">
          <h1>Genres</h1>
          <p className="py-5">See lists of movies by genre</p>
          <div className="w-65 flex gap-2 flex-wrap text-[14px]">
            {abc.genres.map((genre: genreType) => (

              <Link className="border-1 py-1 px-1 rounded-2xl " key={genre.id} href={`/search?value=${searchValue}&page=1&id=${genre.id}`}>
                <p className="flex items-center">
                  {genre.name}
                  <ChevronRight className="w-4 h-4" />
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

import { MovieCard } from "@/components/home";
import { genreResponsiveType, genreType, movieResponseType } from "@/types";
import { getGenreList, getMoviesByGenreId } from "@/utils/get-genre";
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

type GenrePageProps = {
  searchParams: Promise<{ id: string, name: string, page: string }>;
};

const GenrePage = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;
  const name = params.name;
  const page = params.page || "1";

  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id, page
  );

  const abc: genreResponsiveType = await getGenreList();
  console.log("getmoviesbygenreid", filteredMoviesResponse)
  console.log("genres", abc.genres);
  console.log("buh params", id, name, page);

  return (
    <div className="w-[1250px] m-auto">
      <h1 className="text-3xl pb-15 pt-5">Search Filter</h1>
      <div className="flex">
        <div>
          <h1>Genres</h1>
          <p className="py-5">See lists of movies by genre</p>
          <div className="w-70 flex gap-2 flex-wrap text-[14px]">
            {abc.genres.map((genre: genreType) => (

              <Link className="border-1 py-1 px-1 rounded-2xl " key={genre.id} href={`/genre?id=${genre.id}&name=${genre.name}&page=1`}>
                <p className="flex items-center">
                  {genre.name}
                  <ChevronRight className="w-4 h-4" />
                </p>
              </Link>

            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 border-l-1 pl-3">
          <h1 className="w-full">
            {(filteredMoviesResponse.total_results)} titles in {name}
          </h1>
          {filteredMoviesResponse.results.slice(0, 12).map((movie) => (
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
                {filteredMoviesResponse.page > 1 && (
                  <PaginationItem>
                    <PaginationPrevious
                      href={`genre?id=${id}&name=${name}&page=${filteredMoviesResponse.page - 1}`}
                    />
                  </PaginationItem>
                )}

                {/* Dynamic number buttons */}
                {Array.from({ length: 3 }, (_, i) => {
                  // эхлэх утга: page=1 үед 1; page>=2 үед (currentPage - 1)
                  const startPage =
                    filteredMoviesResponse.page === 1
                      ? 1
                      : filteredMoviesResponse.page - 1

                  const pageNumber = startPage + i

                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        href={`genre?id=${id}&name=${name}&page=${pageNumber}`}
                        isActive={pageNumber === filteredMoviesResponse.page}
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
                {filteredMoviesResponse.page < filteredMoviesResponse.total_pages && (
                  <PaginationItem>
                    <PaginationNext
                      href={`genre?id=${id}&name=${name}&page=${filteredMoviesResponse.page + 1}`}
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>

        </div>

      </div>
    </div>

  );
};

export default GenrePage;
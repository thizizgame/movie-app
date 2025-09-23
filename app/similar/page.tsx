
import { MovieCard } from "@/components/home";
import {  movieResponseType } from "@/types";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { getSimilarMovies } from "@/utils/get-movie-details";

type SimilarPageProps = {
  searchParams: Promise<{ id: string }>;
};

const SimilarPage = async ({ searchParams }: SimilarPageProps) => {
  const params = await searchParams;
  const id = params.id;
  

  const filteredMoviesResponse: movieResponseType = await getSimilarMovies(id);

  return (
    <div className="w-[1250px] m-auto">
      
      <div className="flex">

        <div className="flex flex-wrap gap-4 pl-3">
          {filteredMoviesResponse.results.slice(0, 20).map((movie) => (
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
                      href={`similar?id=${id}&page=${filteredMoviesResponse.page - 1}`}
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
                        href={`similar?id=${id}&page=${pageNumber}`}
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
                      href={`similar?id=${id}&page=${filteredMoviesResponse.page + 1}`}
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

export default SimilarPage;
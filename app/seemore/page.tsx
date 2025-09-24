
import { MovieCard } from "@/components/home";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";
import { getSimilarMovies } from "@/utils/get-movie-details";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

type UpcomingPageProps = {
    searchParams: Promise<{ name: string, page: string }>;
};

const SeeMorePage = async ({ searchParams }: UpcomingPageProps) => {
    const params = await searchParams;
    const listName = params.name;
    const page = params.page || "1";

    const data: movieResponseType =
        params.name === "top_rated" || params.name === "upcoming" || params.name === "popular" || params.name === "now_playing"
            ? await getMoviesList(listName, page)
            : await getSimilarMovies(params.name, page);
    return (
        <div className="w-[1250px] m-auto">
            <div className="flex">
                <div className="flex flex-wrap gap-4 pl-3">
                    {data.results.slice(0, 20).map((movie) => (
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
                                {data.page > 1 && (
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href={`seemore?name=${listName}&page=${data.page - 1}`}
                                        />
                                    </PaginationItem>
                                )}

                                {/* Dynamic number buttons */}
                                {Array.from({ length: 3 }, (_, i) => {
                                    // эхлэх утга: page=1 үед 1; page>=2 үед (currentPage - 1)
                                    const startPage =
                                        data.page === 1
                                            ? 1
                                            : data.page - 1

                                    const pageNumber = startPage + i

                                    return (
                                        <PaginationItem key={pageNumber}>
                                            <PaginationLink
                                                href={`seemore?name=${listName}&page=${pageNumber}`}
                                                isActive={pageNumber === data.page}
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
                                {data.page < data.total_pages && (
                                    <PaginationItem>
                                        <PaginationNext
                                            href={`seemore?name=${listName}&page=${data.page + 1}`}
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

export default SeeMorePage;
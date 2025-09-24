
import { MovieCard } from "@/components/home";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";
import { getSimilarMovies } from "@/utils/get-movie-details";

type UpcomingPageProps = {
    searchParams: Promise<{ name: string }>;
};

const PopularPage = async ({ searchParams }: UpcomingPageProps) => {
    const params = await searchParams;
    const listName = params.name;

    const data: movieResponseType =
        params.name === "top_rated" || params.name === "upcoming" || params.name === "popular"
            ? await getMoviesList(listName)
            : await getSimilarMovies(params.name);

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

                    </div>

                </div>

            </div>
        </div>

    );
};

export default PopularPage;
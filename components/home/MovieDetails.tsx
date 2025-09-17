import { genreType } from "@/types"
import { FaStar } from "react-icons/fa"

type MovieDetailsProps = {
    title: string,
    scores: number,
    imageURL: string,
    date: string,
    genres: genreType[],
    overview: string,
    bigImage: string,

}
export function MovieDetails({ title, scores, date, imageURL, overview, genres, bigImage }: MovieDetailsProps) {

    return (
        <div className="w-[1250px] m-auto">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-3xl"> {title}</h1>
                    <h2> {date}</h2>
                </div>
                <div className="flex items-center gap-1">
                    <p>Rating</p><br />
                    <FaStar color="yellow" />
                    {scores}
                </div>
            </div>
            <div className="mt-4 flex gap-3">
                <img src={`https://image.tmdb.org/t/p/original${bigImage}`} className="w-80 h-120 overflow-hidden object-cover" />
                <img src={`https://image.tmdb.org/t/p/original${imageURL}`} className="w-[920px] h-120 relative" />
            </div>

            <div className="mt-6">
                <div className="flex gap-2 my-4">
                    {genres.map((genre) => (
                        <div key={genre.id} className="rounded-xl border-1 px-3 py-1">{genre.name}</div>
                    ))}
                </div>
                {overview}
            </div>
        </div>
    )
}

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { FaStar } from "react-icons/fa";
type MovieCardProps = {
    id: number,
    title: string,
    scores: number,
    imageURL: string,
}

export function MovieCard({ id, title, scores, imageURL }: MovieCardProps) {
    return (
        <Link href={`/movie-details?id=${id}`}>
            <Card className="w-[230px] h-[440px] p-0 rounded-2xl shadow-none border-transparent bg-secondary">
                <CardHeader className="p-0 m-0">
                    <img className="rounded-t-xl h-[340px]" src={`https://image.tmdb.org/t/p/w500/${imageURL}`}></img>
                    <CardDescription className="pl-2 pt-2 flex gap-2 items-center">
                        <FaStar color="#FDE047" />
                        {scores}
                    </CardDescription>
                    <CardTitle className="pl-2">{title}</CardTitle>
                </CardHeader>
            </Card>
        </Link>

    )
}


import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
type MovieCardProps = {
    title: string,
    scores: number,
    imageURL: string,
}
import { FaStar } from "react-icons/fa";
export function CardDemo({title, scores, imageURL} : MovieCardProps) {
    return (

        <Card className="w-[230px] h-[440px] p-0 rounded-2xl shadow-none border-transparent bg-secondary">
            <CardHeader className="p-0 m-0">
                <img className="rounded-t-lg h-[340px]" src={imageURL}></img>
                <CardDescription className="pl-2 pt-2 flex gap-2 items-center">
                 <FaStar color="#FDE047"/>   
                 {scores}
                </CardDescription>
                <CardTitle className="pl-2">{title}</CardTitle> 
            </CardHeader>
        </Card>


    )
}

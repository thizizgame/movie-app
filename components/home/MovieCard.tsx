
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

export function CardDemo({title, scores, imageURL} : MovieCardProps) {
    return (

        <Card className="w-[230px] h-[440px] bg-[#F4F4F5] p-0 rounded-2xl shadow-none border-transparent">
            <CardHeader className="p-0 m-0">
                <img className="rounded-2xl h-[340px]" src={imageURL}></img>
                <CardDescription className="pl-2 pt-2">{scores}</CardDescription>
                <CardTitle className="pl-2">{title}</CardTitle> 
            </CardHeader>
        </Card>


    )
}

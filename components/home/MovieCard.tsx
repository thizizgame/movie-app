
import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaStar } from "react-icons/fa";
type MovieCardProps = {
    title: string,
    scores: number,
    imageURL: string,
}
export type MediaItem = {
  id: string;
  title: string;
  genre: string;     // жишээ: "Action", "Drama", "Comedy", ...
  imageUrl: string;  // зургийн бүрэн URL
  rating: number;    // 0–5
};

export const MOCK_MEDIA: MediaItem[] = [
  {
    id: "m1",
    title: "Crimson Skyline",
    genre: "Action",
    imageUrl: "https://picsum.photos/seed/crimson-skyline/600/900",
    rating: 4.6,
  },
  {
    id: "m2",
    title: "Under Northern Lights",
    genre: "Drama",
    imageUrl: "https://picsum.photos/seed/northern-lights/600/900",
    rating: 4.2,
  },
  {
    id: "m3",
    title: "Neon Alley",
    genre: "Thriller",
    imageUrl: "https://picsum.photos/seed/neon-alley/600/900",
    rating: 4.0,
  },
  {
    id: "m4",
    title: "Paper Planets",
    genre: "Sci-Fi",
    imageUrl: "https://picsum.photos/seed/paper-planets/600/900",
    rating: 3.7,
  },
  {
    id: "m5",
    title: "Echoes of Spring",
    genre: "Romance",
    imageUrl: "https://picsum.photos/seed/echoes-spring/600/900",
    rating: 4.3,
  },
  {
    id: "m6",
    title: "Midnight Market",
    genre: "Comedy",
    imageUrl: "https://picsum.photos/seed/midnight-market/600/900",
    rating: 3.9,
  },
  {
    id: "m7",
    title: "Iron Harbor",
    genre: "Adventure",
    imageUrl: "https://picsum.photos/seed/iron-harbor/600/900",
    rating: 4.1,
  },
  {
    id: "m8",
    title: "Silent Radio",
    genre: "Mystery",
    imageUrl: "https://picsum.photos/seed/silent-radio/600/900",
    rating: 4.4,
  },
  {
    id: "m9",
    title: "Sunset Sonata",
    genre: "Music",
    imageUrl: "https://picsum.photos/seed/sunset-sonata/600/900",
    rating: 4.0,
  },
  {
    id: "m10",
    title: "Pixel Frontier",
    genre: "Animation",
    imageUrl: "https://picsum.photos/seed/pixel-frontier/600/900",
    rating: 3.8,
  },
  {
    id: "m11",
    title: "Granite Road",
    genre: "Crime",
    imageUrl: "https://picsum.photos/seed/granite-road/600/900",
    rating: 4.5,
  },
  {
    id: "m12",
    title: "Blue Caravan",
    genre: "Family",
    imageUrl: "https://picsum.photos/seed/blue-caravan/600/900",
    rating: 3.6,
  },
  {
    id: "m13",
    title: "Whispering Dunes",
    genre: "Western",
    imageUrl: "https://picsum.photos/seed/whispering-dunes/600/900",
    rating: 3.9,
  },
  {
    id: "m14",
    title: "Circuit Hearts",
    genre: "Rom-Com",
    imageUrl: "https://picsum.photos/seed/circuit-hearts/600/900",
    rating: 4.2,
  },
  {
    id: "m15",
    title: "Ivory Tower",
    genre: "History",
    imageUrl: "https://picsum.photos/seed/ivory-tower/600/900",
    rating: 4.1,
  },
];

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

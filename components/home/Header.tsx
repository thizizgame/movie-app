import { ModeToggle } from "@/components/home/ThemeToggler";
import { Button } from "../ui/button";
import { FiFilm } from "react-icons/fi";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import { getGenreList } from "@/utils/get-genre";
import { genreType } from "@/types";
import { SearchBox } from "./SearchBox";

export async function Header() {

    const genresResponse = await getGenreList();
    console.log(genresResponse);
    return (
        <div className="p-10 lg:w-[1024px] md:w-[768px] sm:w-[640px] xl:w-[1280px] m-auto flex justify-between">
            <div className=" text-indigo-700">
                <Link className="flex gap-1 items-center" href="/">
                    <FiFilm color="#4338CA" />
                    <p className="font-semibold">Movie Z</p>
                </Link>
            </div>
            <div className="flex gap-5">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className="w-[97px]">
                            <ChevronDown />
                            Genre
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="flex gap-2 flex-wrap xl:w-[577px] md:w-[457px] sm:w-[407px] p-[20px]">
                        <div className="w-full border-b-1 mb-2">
                            <h1 className="text-2xl mb-2" >Genres</h1>
                            <h2 className="text-l mb-3">See lists of movies by genre</h2>
                        </div>
                        {
                            genresResponse.genres.map((genre: genreType) => (
                                <DropdownMenuItem key={genre.id} className="border-1 rounded-2xl">
                                    <Link className="flex items-center gap-1" key={genre.id} href={`/genre?id=${genre.id}&name=${genre.name}&page=1`}>{genre.name}
                                        <ChevronRight /></Link>

                                </DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
                <SearchBox />
            </div>
            <ModeToggle />
        </div>
    )
}
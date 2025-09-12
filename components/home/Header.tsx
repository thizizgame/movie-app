import { ModeToggle } from "@/components/home/ThemeToggler";
import { Button } from "../ui/button";
import { FiFilm } from "react-icons/fi";
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getGenreList } from "@/utils/get-genre";
import { genreResponsiveType } from "@/types";
export async function Header() {

    const genreList: genreResponsiveType = await getGenreList();
    console.log(genreList);
    return (
        <div className="p-10 w-[1360px] m-auto flex justify-between">
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
                    <DropdownMenuContent align="start" className="flex gap-2 flex-wrap w-[577px] p-[20px]">
                        <div className="w-full border-b-1 mb-2">
                            <h1 className="text-2xl mb-2" >Genres</h1>
                            <h2 className="text-l mb-3">See lists of movies by genre</h2>
                        </div>
                        {
                            genreList.genres.map((g) => (
                                <DropdownMenuItem key={g.id} className="border-1 rounded-2xl">
                                    <Link href={'/genre/${g.id}'}>{g.name}</Link>
                                    <ChevronRight />
                                </DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
                <Input className="w-[380px]" placeholder="Search" />
            </div>
            <ModeToggle />

        </div>
    )
}
import { ModeToggle } from "@/components/home/ThemeToggler";
import { Button } from "../ui/button";
import { FiFilm } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export function Header() {
    return (
        <div className="p-10 w-[1360px] m-auto flex justify-between">
            <div className="flex gap-1 items-center text-indigo-700">
                <FiFilm color="#4338CA" />
                <p className="font-semibold">Movie Z</p>
            </div>
            <div className="flex gap-5">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className="w-[97px]">
                            <IoIosArrowDropdown />
                            Genre
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="flex gap-2 flex-wrap w-[577px] p-[20px]">
                        <div className="w-full border-b-1 mb-2">
                            <h1 className="text-2xl mb-2" >Genres</h1>
                            <h2 className="text-l mb-3">See lists of movies by genre</h2>
                        </div>
                        
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Action
                            <FaAngleRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Adventure
                            <FaAngleRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Animation
                            <FaAngleRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Biography
                            <FaAngleRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Comedy
                            <FaAngleRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Crime
                            <FaAngleRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Documentary
                            <FaAngleRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Drama
                            <FaAngleRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Family
                            <FaAngleRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Fantasy
                            <FaAngleRight />
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
                <Input className="w-[380px]" placeholder="Search" />
            </div>
            <ModeToggle />

        </div>
    )
}
import { ModeToggle } from "@/components/home/ThemeToggler";
import { Button } from "../ui/button";
import { FiFilm } from "react-icons/fi";
import { IoChevronDownCircle } from "react-icons/io5";
import { FaCircleChevronRight } from "react-icons/fa6";
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
                <FiFilm color="#4338CA"/>
                <p className="font-semibold">Movie Z</p>
            </div>
            <div className="flex gap-5">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className="w-[90px]">
                           <IoChevronDownCircle />
                            Genre
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="flex gap-2 flex-wrap w-[377px]">
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Action
                            <FaCircleChevronRight /> 
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Adventure
                            <FaCircleChevronRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Animation
                            <FaCircleChevronRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Biography
                            <FaCircleChevronRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Comedy
                            <FaCircleChevronRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Crime
                            <FaCircleChevronRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Documentary
                            <FaCircleChevronRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Drama
                            <FaCircleChevronRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Family
                            <FaCircleChevronRight />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border-1 rounded-2xl">
                            Fantasy
                            <FaCircleChevronRight />
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
                <input type="search" placeholder="Search" className="border-1"></input>
            </div>
            <ModeToggle />

        </div>
    )
}
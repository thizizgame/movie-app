import Link from "next/link";
import { getGenreList } from "@/utils/get-genre";
import { ChevronRight } from "lucide-react";
import { genreType } from "@/types";
import { MovieCard } from "@/components/home";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const { genres } = await getGenreList();

  return (
    <main className="max-w-[1250px] m-auto flex gap-10">
      <div>
        <h1 className="text-2xl font-semibold mb-4">Genres</h1>
        <ul className="w-[387px] flex flex-wrap gap-2 items-center">
          {(genres).map((g: genreType) => (
            <li key={g.id}>
              <Button
                className="flex items-center justify-between rounded-xl"
              >
                <span>{g.name}</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-l-1 pl-10">
        81 titles in “Animation”
        <div className="flex flex-wrap">
          {/* <MovieCard /> */}
        </div>

      </div>

    </main>
  );
}

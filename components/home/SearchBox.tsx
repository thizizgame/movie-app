"use client"

import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Input } from '../ui/input'
import Link from 'next/link'
import { getSearchedMovies } from '@/utils/get-data'
import { movieResponseType } from '@/types'
import { FaStar } from 'react-icons/fa'
import { ChevronRight } from 'lucide-react'

export const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    const foundData = await getSearchedMovies(value)
    if (value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setFoundMovies(foundData);
  }

  return (
    <div>
      <Popover open={isOpen} onOpenChange={() => { setIsOpen(false) }}>
        <PopoverTrigger><Input className="xl:w-[380px] md:w-[280px] sm:w-[250px] relative" value={searchValue} onChange={handleChange} placeholder="Search" /></PopoverTrigger>
        <PopoverContent onOpenAutoFocus={(e) => e.preventDefault()} className="xl:w-120 md:w-100 sm:w-[90] md:-left-67.5 sm:-left-77.5 absolute -left-47.5">
          {foundMovies?.results.slice(0, 5).map((movie) => {
            return <div className="w-full border-b-1 py-3 mb-4" key={movie.id}>
              <div className='flex gap-3 text-[14px]'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='w-17 h-25' />
                <div className='flex flex-col justify-between'>
                  <div>
                    <p className='w-full'>{movie.title}</p>
                    <p className='flex items-center gap-1'><FaStar color='yellow' /> {movie.vote_average}</p>
                  </div>
                  <div className='flex gap-45 items-center'>
                    <p>{movie.release_date}</p>
                    <Link className="flex gap-2 items-center" href={`/movie-details?id=${movie.id}`}>See more <ChevronRight /></Link>
                  </div>
                </div>
              </div>

            </div>
          }
          )}
          <Link href={`/search?value=${searchValue}`}>See all results for &quot;{searchValue}&quot;</Link></PopoverContent>
      </Popover>
    </div>
  )
}



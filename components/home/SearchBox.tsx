"use client"

import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Input } from '../ui/input'
import Link from 'next/link'

export const SearchBox = () => {
    const [searchValue, setSearchValue]= useState("");
    const [foundMovies, setFoundMovies] = useState();

  return (
    <div>
       <Popover open={!searchValue}>
                    <PopoverTrigger><Input className="w-[380px] relative" placeholder="Search"/></PopoverTrigger>
                    <PopoverContent className="w-120 absolute -left-47.5"><div className="w-full border-b-1 mb-2">

                    </div>
                        <Link href="/search">See all results for ""</Link></PopoverContent>
                </Popover>
    </div>
  )
}



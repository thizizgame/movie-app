import { FaStar } from "react-icons/fa"

type MovieDetailsProps = {
    title: string,
    scores: number,
    imageURL: string,
    date: string,
    genreID: number[],
    overview: string,
}

export function MovieDetails({title, scores, date, imageURL, overview} : MovieDetailsProps) {
    
    return (       
       <div className="w-[1250px] m-auto">
            <div className="flex justify-between">
                <div>
                 <h1 className="text-3xl"> {title}</h1> 
                 <h2> {date}</h2> 
                </div>
                <div className="flex items-center gap-1">
                    <p>Rating</p><br/>
                    <FaStar color="yellow"/>
                    {scores}
                   
                </div>
            </div>
            <div className="mt-4 flex">
                <img src={`https://image.tmdb.org/t/p/original${imageURL}`} className="w-70 h-107 overflow-hidden object-cover"/>
                
            </div>
            <div className="mt-4">
                 {overview}                
            </div>
       </div> 
    )
}
// 4.	GET: /movie/now_playing?language=en-US&page=1
// Одоо кино театруудад гарч буй кинонуудын жагсаалт авах.
// 	5.	GET: /movie/${movieId}?language=en-US
// Тодорхой киноны дэлгэрэнгүй мэдээллийг авах.
// 	6.	GET: /genre/movie/list?language=en
// Киноны төрөл буюу жанрын жагсаалт авах.
// 	7.	GET: /discover/movie?language=en&with_genres=${genreIds}&page=${page}
// Тухайн жанрын кинонуудыг шүүж дуудаж авах.
// 	8.	GET: /search/movie?query=${searchValue}&language=en-US&page=${page}
// Хайлтын утгад тохирох кинонуудын жагсаалт авах.
// 	9.	GET: /movie/${id}/videos?language=en-US
// Тодорхой киноны трейлер, видео мэдээллийг авах.
// 	10.	GET: /movie/${id}/credits?language=en-US
// Тухайн киноны жүжигчид болон багийн мэдээлэл авах.
// 	11.	GET: /movie/${id}/similar?language=en-US&page=1
// Ижил төстэй кинонуудын жагсаалт авах
export const getMovieDetails = async (id: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
        
      },
    }
  );
  const data = await res.json();
  return data;
};
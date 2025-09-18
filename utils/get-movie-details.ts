export const getMoviesByMovieId = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getCredits = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getTrailer = async (movieId: string | number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};


export const getSimilarMovies = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

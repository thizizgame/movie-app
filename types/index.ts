export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genres: genreType[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  genre_ids: number[];
};

export type movieResponseType = {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieType[];
};

export type genreType = {
  id: number;
  name: string;
};
export type genreResponsiveType = {
  genres: genreType[];
};
export type MovieDetails = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  runtime: number | null;
  release_date: string; // "YYYY-MM-DD"
  genres: { id: number; name: string }[];
};
export type CreditType = {
  cast: { credit_id: number; name: string }[];
  crew: { credit_id: number; name: string }[];
};
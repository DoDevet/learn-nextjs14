interface MovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieCreditsType {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
interface GetMovieProps {
  id: string;
}

interface GetVideoType {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/";

export const getMovies = async (): Promise<MovieType[]> => {
  const response = await fetch(URL + "movies");
  const data = await response.json();
  return data;
};

export const getMovie = async ({ id }: GetMovieProps) => {
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(URL + "movies/" + id);
  const data = await response.json();
  return data as MovieType;
};

export const getMovieCredits = async ({ id }: GetMovieProps) => {
  //await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(URL + "movies/" + id + "/credits");
  const data = await response.json();
  return data as MovieCreditsType;
};

export const getMovieVideos = async ({ id }: GetMovieProps) => {
  //await new Promise((resolve) => setTimeout(resolve, 10000));
  const data = await (await fetch(URL + "movies/" + id + "/videos")).json();
  return data as GetVideoType[];
};

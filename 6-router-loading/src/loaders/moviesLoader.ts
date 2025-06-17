import type { IMovie } from "../models/IMovie";
import { getMovies } from "../services/movieService";

export type MoviesLoader = {
  movies: IMovie[];
};

export const moviesLoader = async (): Promise<MoviesLoader> => {
  const moviesInStorage = localStorage.getItem("movies");
  if (moviesInStorage) {
    return { movies: JSON.parse(moviesInStorage) as IMovie[] };
  }

  const movies = await getMovies("star");

  return { movies } satisfies MoviesLoader;
};

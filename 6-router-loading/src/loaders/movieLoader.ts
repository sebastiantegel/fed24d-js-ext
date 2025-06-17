import type { LoaderFunctionArgs } from "react-router";
import type { IMovieExt } from "../models/IMovie";
import { getMovieById } from "../services/movieService";

export type MovieLoader = {
  movie: IMovieExt;
};

export const movieLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<MovieLoader> => {
  const { id } = params;

  if (id) {
    const movie = await getMovieById(id);
    return { movie } satisfies MovieLoader;
  }

  return {
    movie: {
      Title: "",
      imdbID: "",
      Poster: "",
      Plot: "",
      Actors: "",
      Director: "",
    },
  };
};

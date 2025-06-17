import type { IMovie, IMovieExt } from "../models/IMovie";
import type { IOmdbResponse } from "../models/IOmdbResponse";
import { get } from "./serviceBase";

const BASE_URL = `https://omdbapi.com/?apikey=${
  import.meta.env.VITE_OMDB_API_KEY
}&`;

export const getMovies = async (searchText: string): Promise<IMovie[]> => {
  const response = await get<IOmdbResponse>(`${BASE_URL}s=${searchText}`);

  localStorage.setItem("movies", JSON.stringify(response.Search));

  return response.Search;
};

export const getMovieById = async (id: string): Promise<IMovieExt> => {
  return await get<IMovieExt>(`${BASE_URL}i=${id}`);
};

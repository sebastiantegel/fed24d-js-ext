import { useState, useEffect } from "react";
import type { IMovie } from "../models/IMovie";
import type { IOmdbResponse } from "../models/IOmdbResponse";

export const useMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://omdbapi.com/?apikey=416ed51a&s=star",
        );
        const data: IOmdbResponse = await response.json();
        setMovies(data.Search);
      } catch (err) {
        console.error(err);
      } finally {
        setHasFetched(true);
      }
    };

    if (hasFetched) return;

    getData();
  });

  return movies;
};

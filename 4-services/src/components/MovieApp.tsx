import { useEffect, useState } from "react";
import type { Movie } from "../models/Movie";
import { getMovies } from "../services/movieService";
import { MovieSearch } from "./MovieSearch";

export const MovieApp = () => {
  const [movies, setMovies] = useState<Movie[]>(
    JSON.parse(localStorage.getItem("movies") || "[]"),
  );

  useEffect(() => {
    const getData = async () => {
      const movies = await getMovies("star");
      setMovies(movies);
    };

    if (movies.length > 0) return;

    getData();
  });

  const searchMovies = async (searchText: string) => {
    const searchResult = await getMovies(searchText);
    setMovies(searchResult);
  };

  localStorage.setItem("movies", JSON.stringify(movies));

  return (
    <>
      <MovieSearch search={searchMovies} />
      {movies.map((m) => (
        <div key={m.imdbID}>
          <h3>{m.Title}</h3>
        </div>
      ))}
    </>
  );
};

import { Link, useLoaderData } from "react-router";
import type { MoviesLoader } from "../loaders/moviesLoader";
import { useState } from "react";
import type { IMovie } from "../models/IMovie";
import { getMovies } from "../services/movieService";
import { MovieSearch } from "../components/MovieSearch";

export const Movies = () => {
  // const { movies } = useLoaderData() as MoviesLoader;
  const { movies } = useLoaderData<MoviesLoader>();

  const [moviesInState, setMoviesInState] = useState<IMovie[]>(movies);

  const search = async (searchText: string) => {
    const movies = await getMovies(searchText);
    setMoviesInState(movies);
  };

  return (
    <>
      <MovieSearch search={search} />
      <div className="movies">
        {moviesInState.map((m) => (
          <div key={m.imdbID}>
            <Link to={`/movie/${m.imdbID}`}>
              <h3>{m.Title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

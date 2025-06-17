import { useEffect, useState } from "react";
import type { IMovie } from "../models/IMovie";
import type { IOmdbResponse } from "../models/IOmdbResponse";
import { Link } from "react-router";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://omdbapi.com/?apikey=416ed51a&s=star",
      );
      const data: IOmdbResponse = await response.json();

      setMovies(data.Search);
    };

    if (movies.length > 0) return;

    getData();
  });

  return (
    <div className="movies">
      {movies.map((m) => (
        <div key={m.imdbID}>
          <Link to={`/movie/${m.imdbID}`}>
            <h3>{m.Title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

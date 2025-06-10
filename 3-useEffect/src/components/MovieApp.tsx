import { useFetch } from "../hooks/useFetch";
import { useMovies } from "../hooks/useMovies";
import type { IOmdbResponse } from "../models/IOmdbResponse";

export const MovieApp = () => {
  //   const movies = useMovies();
  const [response, loading] = useFetch<IOmdbResponse>(
    "https://omdbapi.com/?apikey=416ed51a&s=star",
  );

  return (
    <>
      {loading && <div>Loading...</div>}
      {response?.Search.map((m) => (
        <div key={m.imdbID}>
          <h3>{m.Title}</h3>
          <div>
            <img src={m.Poster} alt={m.Title} />
          </div>
        </div>
      ))}
    </>
  );
};

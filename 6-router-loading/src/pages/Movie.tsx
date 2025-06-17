import { useLoaderData } from "react-router";
import type { MovieLoader } from "../loaders/MovieLoader";

export const Movie = () => {
  const { movie } = useLoaderData<MovieLoader>();

  return (
    <div>
      <h2>{movie?.Title}</h2>
      <div>
        <img src={movie?.Poster} alt={movie?.Title} />
      </div>
      <p>{movie?.Director}</p>
      <p>{movie?.Actors}</p>
      <p>{movie?.Plot}</p>
    </div>
  );
};

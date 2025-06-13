import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { IMovieExt } from "../models/IMovie";

export const Movie = () => {
  const [movie, setMovie] = useState<IMovieExt>();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://omdbapi.com/?apikey=416ed51a&i=" + id,
      );
      const data: IMovieExt = await response.json();

      setMovie(data);
    };

    if (movie) return;

    getData();
  });

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

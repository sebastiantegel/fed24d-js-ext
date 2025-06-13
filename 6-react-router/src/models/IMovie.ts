export interface IMovie {
  Title: string;
  imdbID: string;
  Poster: string;
}

export interface IMovieExt extends IMovie {
  Plot: string;
  Actors: string;
  Director: string;
}

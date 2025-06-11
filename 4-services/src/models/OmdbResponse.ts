import type { Movie } from "./Movie";

export type OmdbResponse = {
  Search: Movie[];
  totalResults: string;
  Response: string;
};

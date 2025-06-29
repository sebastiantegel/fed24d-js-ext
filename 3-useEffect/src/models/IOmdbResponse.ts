import type { IMovie } from "./IMovie";

export interface IOmdbResponse {
  Search: IMovie[];
  totalResults: string;
  Response: string;
}

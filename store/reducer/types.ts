export interface IReducerParam {
  type: string;
  payload?: any
}

export interface IMovieList {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface ISearch {
  keyword: string;
  movies: IMovieList[];
  totalResults: number;
  loading: boolean;
  error: boolean;
}

export interface IResultSearchMovies {
  Search: IMovieList[] | null;
  totalResults: string;
  Response: boolean;
}

export interface IFavourite {
  movies: IMovieList[]
}

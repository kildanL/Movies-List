export type MovieListStackParamList = {
    MovieList: undefined;
    MovieScreen: TMovie;
};

export type TMovie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | undefined;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type TMovieInfo = {
    adult: false;
    backdrop_path: "/l94l89eMmFKh7na2a1u5q67VgNx.jpg";
    belongs_to_collection: null;
    budget: 0;
    genres: { id: number; name: string }[];
    homepage: string;
    id: number;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type TBySort = {
    name: string;
    bySort: TSort;
};

export type TSortMovie = {
    id: number;
    name: string;
    sort: TSort;
    color: string;
};

export type TSort =
    | "popularity.desc"
    | "revenue.desc"
    | "primary_release_date.desc"
    | "vote_average.desc";

export type TGenres = {
    id: number;
    name: string;
};

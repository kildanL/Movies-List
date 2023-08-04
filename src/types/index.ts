export type TMovie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type TBySort = {
    name: string;
    bySort: TSort;
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

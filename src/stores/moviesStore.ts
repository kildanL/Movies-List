import { makeAutoObservable, runInAction, values } from "mobx";
import { TGenres, TMovie, TSort } from "../types";
import { FetchGenres, FetchMovies } from "../service/api";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";

class MoviesStore {
    moviesList?: IPromiseBasedObservable<TMovie[]>;
    genresList?: IPromiseBasedObservable<TGenres[]>;
    moviesGenresPromise?: IPromiseBasedObservable<
        PromiseSettledResult<TMovie | TGenres>[]
    >;
    currentSort: TSort = "popularity.desc";
    currentPage: number = 1;

    constructor() {
        makeAutoObservable(this);
    }

    async getMovies() {
        this.moviesList = fromPromise(
            FetchMovies(this.currentSort, this.currentPage)
        );
    }

    async getGenres() {
        this.genresList = fromPromise(FetchGenres());
    }

    changeSort(sortType: TSort) {
        this.currentSort = sortType;
    }

    nextPage(currentPage: number = 1) {
        if (currentPage < 1000) {
            this.currentPage += 1;
        }
    }

    prevPage(currentPage: number = 1) {
        if (currentPage > 1) {
            this.currentPage -= 1;
        }
    }
}

export const moviesStore = new MoviesStore();

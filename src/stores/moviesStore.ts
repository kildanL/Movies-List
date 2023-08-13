import { makeAutoObservable, runInAction, values } from "mobx";
import { TGenres, TMovie, TSort } from "../types";
import { FetchGenres, FetchMovies } from "../service/api";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import axios from "axios";

class MoviesStore {
    moviesList: TMovie[] = [];
    genresList: TGenres[] = [];
    isLoading: boolean = false;
    error: string | null = null;
    currentSort: TSort = "popularity.desc";
    currentPage: number = 1;

    constructor() {
        makeAutoObservable(this);
    }

    async getMovies() {
        // this.moviesList = fromPromise(
        //     FetchMovies(this.currentSort, this.currentPage)
        // );
        try {
            this.isLoading = true;
            const result = await FetchMovies(
                this.currentSort,
                this.currentPage
            );

            runInAction(() => {
                this.moviesList = result.data.results;
                this.isLoading = false;
            });
        } catch (err) {
            this.isLoading = false;
            if (axios.isAxiosError(err)) {
                console.log(err.status);
                if (!err.response) {
                    this.error = null;
                } else this.error = err.response.toString();
            } else {
                if (!err) {
                    this.error = null;
                } else this.error = err.toString();
            }
        }
    }

    async getGenres() {
        try {
            this.isLoading = true;
            const result = await FetchGenres();
            runInAction(() => {
                this.genresList = result;
                this.isLoading = false;
            });
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.log(err.status);
                console.error(err.response);
            } else {
                console.error(err);
            }
            this.isLoading = false;
        }
    }

    changeSort(sortType: TSort) {
        this.currentSort = sortType;
    }

    nextPage(currentPage: number = 1) {
        if (currentPage < 1000) {
            this.currentPage += 1;
            console.log(this.currentPage);
        }
    }

    prevPage(currentPage: number = 1) {
        if (currentPage > 1) {
            this.currentPage -= 1;
            console.log(this.currentPage);
        }
    }
}

export const moviesStore = new MoviesStore();

import { makeAutoObservable, runInAction, values } from "mobx";
import { TGenres, TMovie, TSort } from "../types";
import { FetchGenres, FetchMovies } from "../service/api";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import axios from "axios";

class MoviesStore {
    moviesList: TMovie[] = []; //movies list
    genresList: TGenres[] = [];

    isLoading: boolean = false;
    error: string | null = null;

    currentSort: TSort = "popularity.desc";
    currentPage: number = 1;

    constructor() {
        makeAutoObservable(this);
    }

    async getMovies() {
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

    findTwoFirstGenreName(genre_ids: number[], genresList: TGenres[]): string {
        let result: string[] = [];

        //Find a match with a list of genres and a movie genres
        for (let i = 0; i < genre_ids.length; i++) {
            for (let j = 0; j < genresList.length; j++) {
                if (genre_ids[i] === genresList[j].id)
                    result.push(genresList[j].name);
            }
        }

        let strArray: string[] = this.UpperFirstLetter(result);
        let str: string = strArray.slice(0, 2).join("/ ");
        return str;
    }

    //First letter of str to UpperCase
    UpperFirstLetter(str: string[]) {
        return str.map(
            (genre) => genre.charAt(0).toUpperCase() + genre.slice(1)
        );
    }

    //Truncate string
    truncateStr(str: string, num: number) {
        if (str.length > num) return str.slice(0, num - 1) + `...`;
        else return str;
    }

    //Divide votes
    divVotes(vote_average: number) {
        return vote_average / 2;
    }
}

export const moviesStore = new MoviesStore();

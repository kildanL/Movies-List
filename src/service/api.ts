import axios, { AxiosResponse } from "axios";
import { baseURL } from "../constants";
import { TGenres, TMovie, TMovieInfo, TSort } from "../types";
import { TOKEN } from "../constants/secretKey";

axios.defaults.baseURL = baseURL;

export async function FetchMovies(sortType?: TSort): Promise<TMovie[]> {
    return await axios
        .get<TMovie>(
            "/discover/movie?include_adult=false&include_video=false&language=ru-ru&page=1&sort_by=popularity.desc",
            {
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${TOKEN}`,
                },
            }
        )
        .then((response: AxiosResponse) => response.data.results)
        .catch((error) => console.log(error));
}

export async function FetchMoviebyId(id: number): Promise<TMovieInfo> {
    return await axios
        .get<TMovieInfo>(`/movie/${id}?language=ru-RU`, {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${TOKEN}`,
            },
        })
        .then((response: AxiosResponse) => response.data)
        .catch((error) => console.log(error));
}

export async function FetchGenres() {
    return await axios
        .get<TGenres>("/genre/movie/list?language=ru", {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${TOKEN}`,
            },
        })
        .then((response: AxiosResponse) => response.data.genres)
        .catch((error) => console.log(error));
}

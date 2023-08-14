import axios, { AxiosResponse } from "axios";
import { baseURL } from "../constants";
import { TGenres, TMovie, TMovieInfo, TSort } from "../types";
import { TOKEN } from "../constants/secretKey";

axios.defaults.baseURL = baseURL;

export async function FetchMovies(
    sortType: TSort,
    page: number
): Promise<AxiosResponse> {
    return await axios
        .get(
            `/discover/movie?include_adult=false&include_video=false&language=ru-RU&page=${page}&sort_by=${sortType}`,
            {
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${TOKEN}`,
                },
            }
        )
        .then((response: AxiosResponse) => response)
        .catch((error: AxiosResponse) => error);
}

export async function FetchMoviebyId(id: number): Promise<AxiosResponse> {
    return await axios
        .get<TMovieInfo>(`/movie/${id}?language=ru-RU`, {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${TOKEN}`,
            },
        })
        .then((response: AxiosResponse) => response)
        .catch((error: AxiosResponse) => error);
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

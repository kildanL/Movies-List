import axios, { AxiosResponse } from "axios";
import { baseURL } from "../constants";
import { TMovie, TSort } from "../types";
import { TOKEN } from "../constants/secretKey";

axios.defaults.baseURL = baseURL;

export async function FetchMovies(sortType?: TSort) {
    return await axios
        .get<TMovie[]>(
            "/discover/movie?include_adult=false&include_video=false&language=ru-ru&page=1&sort_by=popularity.desc",
            {
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${TOKEN}`,
                },
            }
        )
        .then((response: AxiosResponse) => response.data)
        .catch((error) => console.log(error));
}

export async function FetchGenres() {
    return await axios
        .get("/genre/movie/list?language=ru", {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${TOKEN}`,
            },
        })
        .then((response) => response)
        .catch((error) => console.log(error));
}

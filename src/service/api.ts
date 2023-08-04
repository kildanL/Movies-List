import axios from "axios";
import { TOKEN, baseURL } from "../constants";
import { TSort } from "../types";

axios.defaults.baseURL = baseURL;

export async function FetchMovies(sortType: TSort) {
    return await axios
        .get(
            "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
            {
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${TOKEN}`,
                },
            }
        )
        .then((response) => response)
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

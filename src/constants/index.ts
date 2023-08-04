import { TBySort } from "../types";

const TOKEN = "";
const baseURL = "https://api.themoviedb.org/3";
const postersURL = "https://image.tmdb.org/t/p/w185";

const sortList: TBySort[] = [
    {
        name: "По популярности",
        bySort: "popularity.desc",
    },
    {
        name: "Новинки",
        bySort: "primary_release_date.desc",
    },
    {
        name: "По доходности",
        bySort: "revenue.desc",
    },
    {
        name: "Высокий рейтинг",
        bySort: "vote_average.desc",
    },
];

export { TOKEN, sortList, baseURL, postersURL };

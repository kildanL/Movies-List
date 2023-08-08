import { TMovie, TSortMovie } from "../types";

export const sortData: TSortMovie[] = [
    {
        id: 0,
        name: "По популярности",
        sort: "popularity.desc",
        color: "rgba(15, 100, 167, 1)",
    },
    {
        id: 1,
        name: "По доходности",
        sort: "revenue.desc",
        color: "rgba(56, 210, 174, 1)",
    },
    {
        id: 2,
        name: "Новинки",
        sort: "primary_release_date.desc",
        color: "rgba(255, 138, 92, 1)",
    },
    {
        id: 3,
        name: "По рейтингу",
        sort: "vote_average.desc",
        color: "rgba(210, 41, 196, 1)",
    },
];

import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
// import { MoviesCardStyles as st } from "./style";
import { postersURL } from "../../constants";
import { TGenres, TMovie } from "../../types";
import { MoviesCardStyles as st } from "./style";

export default function MoviesCard({
    movie,
    genresList,
}: {
    movie: TMovie;
    genresList: TGenres[];
}) {
    const { poster_path, title, genre_ids, vote_average } = movie;

    function findTwoFirstGenreName(
        genre_ids: number[],
        genresList: TGenres[]
    ): string {
        let result: string[] = [];

        for (let i = 0; i < genre_ids.length; i++) {
            for (let j = 0; j < genresList.length; j++) {
                if (genre_ids[i] === genresList[j].id)
                    result.push(genresList[j].name);
            }
        }
        let str: string = result.slice(0, 2).join(" ");
        return str;
    }

    useEffect(() => {
        console.warn("render");
    }, []);

    return (
        <View style={st.wrapper}>
            <Image
                style={st.poster}
                source={{
                    uri: postersURL + poster_path,
                }}
            />
            <Text>Барби!!!</Text>

            <Text>Комедия, Драма</Text>
            <Text>5.8</Text>
        </View>
    );
}

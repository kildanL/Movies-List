import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
// import { MoviesCardStyles as st } from "./style";
import { postersURL } from "../../constants";
import { TGenres, TMovie } from "../../types";
import { MoviesCardStyles } from "./style";
import { MoviesCardStyles as st } from "./style";
import { Rating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";

export default function MoviesCard({
    movie,
    genresList,
}: {
    movie: TMovie;
    genresList: TGenres[];
}) {
    const { poster_path, title, genre_ids, vote_average } = movie;
    // const navigationProp = useNavigation<MovieListStackNavigationProp>();
    // const { navigation } = navigationProp;

    function findTwoFirstGenreName(
        genre_ids: number[],
        genresList: TGenres[]
    ): string {
        let result: string[] = [];

        //Find a match with a list of genres and a movie genres
        for (let i = 0; i < genre_ids.length; i++) {
            for (let j = 0; j < genresList.length; j++) {
                if (genre_ids[i] === genresList[j].id)
                    result.push(genresList[j].name);
            }
        }

        let strArray: string[] = UpperFirstLetter(result);
        let str: string = strArray.slice(0, 2).join("/ ");
        return str;
    }

    //Truncate string
    function truncateStr(str: string, num: number) {
        if (str.length > num) return str.slice(0, num - 1) + `...`;
        else return str;
    }

    //First letter of str to UpperCase
    function UpperFirstLetter(str: string[]) {
        return str.map(
            (genre) => genre.charAt(0).toUpperCase() + genre.slice(1)
        );
    }

    //Divide votes
    function divVotes(vote_average: number) {
        return vote_average / 2;
    }

    return (
        <View style={st.wrapper}>
            <Image
                style={st.poster}
                source={{
                    uri: postersURL + poster_path,
                }}
            />
            <Text style={st.title}>{truncateStr(title, 10)}</Text>
            <Text style={st.genres}>
                {truncateStr(findTwoFirstGenreName(genre_ids, genresList), 12)}
            </Text>
            <Rating
                style={{ alignSelf: "flex-start" }}
                ratingCount={5}
                readonly
                imageSize={13}
                startingValue={divVotes(vote_average)}
            />
        </View>
    );
}

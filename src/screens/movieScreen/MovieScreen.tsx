import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MovieListStackParamList, TMovie } from "../../types";
import { FetchMoviebyId } from "../../service/api";

const MovieScreen = () => {
    const { id, title } =
        useRoute<RouteProp<MovieListStackParamList, "MovieScreen">>().params;
    const [movieInfo, setMovieInfo] = useState<TMovie>();

    useEffect(() => {
        getMovie();
    }, []);

    async function getMovie() {
        const result: TMovie = await FetchMoviebyId(id);
        setMovieInfo(result);
    }

    //If movie not found
    if (!movieInfo) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                }}
            >
                <Text>Фильма нет</Text>
            </View>
        );
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
            }}
        >
            <Text>{movieInfo.title}</Text>
            <Text>{movieInfo.release_date}</Text>
            <Text>{movieInfo.title}</Text>
        </View>
    );
};

export default MovieScreen;

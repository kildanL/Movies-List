import React, { useEffect, useState } from "react";
import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
// import { MoviesCardStyles as st } from "./style";
import { postersURL } from "../../constants";
import { TGenres, TMovie } from "../../types";
import { MoviesCardStyles as st } from "./style";
import { AirbnbRating, Rating } from "react-native-ratings";
import { LinearGradient } from "expo-linear-gradient";
import { mainBGcolor, vh, vw, yellowColor } from "../../constants/style";
import { moviesStore } from "../../stores/moviesStore";

export default function MoviesCard({
    movie,
    genresList,
}: {
    movie: TMovie;
    genresList: TGenres[];
}) {
    const { poster_path, title, genre_ids, vote_average, backdrop_path } =
        movie;

    return (
        <View style={st.wrapper}>
            <ImageBackground
                style={st.poster}
                source={{
                    uri: postersURL + poster_path,
                }}
            >
                <LinearGradient
                    colors={["transparent", mainBGcolor]}
                    locations={[0.7, 0.95]}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: 20 * vh,
                    }}
                />
            </ImageBackground>
            <Text style={st.title}>{moviesStore.truncateStr(title, 10)}</Text>
            <Text style={st.genres}>
                {moviesStore.truncateStr(
                    moviesStore.findTwoFirstGenreName(genre_ids, genresList),
                    15
                )}
            </Text>
            <AirbnbRating
                defaultRating={moviesStore.divVotes(vote_average)}
                count={5}
                size={3 * vw}
                reviewSize={0}
                selectedColor={yellowColor}
                ratingContainerStyle={{
                    flexDirection: "row-reverse",
                    alignSelf: "flex-start",
                }}
            />
        </View>
    );
}

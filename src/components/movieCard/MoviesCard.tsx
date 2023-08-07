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
import { MoviesCardStyles } from "./style";
import { MoviesCardStyles as st } from "./style";
import { AirbnbRating, Rating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { mainBGcolor, vh, vw, yellowColor } from "../../constants/style";

export default function MoviesCard({
    movie,
    genresList,
}: {
    movie: TMovie;
    genresList: TGenres[];
}) {
    const { poster_path, title, genre_ids, vote_average, backdrop_path } =
        movie;
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
            <ImageBackground
                style={st.poster}
                source={{
                    uri: postersURL + poster_path,
                }}
            >
                <LinearGradient
                    // style={{ width: "100%", height: 20 * vh }}
                    // start={{ x: 0.1, y: 0.5 }}
                    // end={{ x: 0.1, y: 0.2 }}
                    colors={["rgba(84,73,120,0.1)", "rgba(28,20,56,1)"]}
                    locations={[0.7, 0.95]}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: 20 * vh,
                        // opacity: 0.2,
                    }}
                />
            </ImageBackground>
            <Text style={st.title}>{truncateStr(title, 10)}</Text>
            <Text style={st.genres}>
                {truncateStr(findTwoFirstGenreName(genre_ids, genresList), 15)}
            </Text>
            <AirbnbRating
                // tintColor={mainBGcolor}
                // ratingBackgroundColor={mainBGcolor}
                // ratingTextColor={mainBGcolor}
                // ratingColor={mainBGcolor}
                // type="custom"
                // style={{
                //     alignSelf: "flex-start",
                //     backgroundColor: mainBGcolor,
                // }}
                // ratingCount={5}
                // readonly
                // imageSize={13}
                // startingValue={divVotes(vote_average)}
                defaultRating={divVotes(vote_average)}
                count={5}
                size={3 * vw}
                reviewSize={0}
                selectedColor={yellowColor}
                ratingContainerStyle={{
                    flexDirection: "row-reverse",
                    alignSelf: "flex-start",
                    // alignItems: "flex-end",
                    // justifyContent: "flex-end",
                }}
            />
        </View>
    );
}

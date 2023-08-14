import { View, Text, ImageBackground, ScrollView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MovieListStackParamList, TMovie, TMovieInfo } from "../../types";
import { FetchMoviebyId } from "../../service/api";
import { MoviesScreenStyles as st } from "./style";
import { postersURL } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { mainBGcolor, vh, vw, yellowColor } from "../../constants/style";
import { AirbnbRating } from "react-native-ratings";
import Loading from "../../components/loading/Loading";
import axios from "axios";
import ButtonHeaderBack from "../../components/buttonHeaderBack/ButtonHeaderBack";
import { useNavigation, NavigationProp } from "@react-navigation/native";

const MovieScreen = () => {
    const { id, title } =
        useRoute<RouteProp<MovieListStackParamList, "MovieScreen">>().params;

    const { goBack } = useNavigation<NavigationProp<MovieListStackParamList>>();

    const [movieInfo, setMovieInfo] = useState<TMovieInfo>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getMovie();
    }, []);

    async function getMovie() {
        try {
            setIsLoading(true);

            const result = await FetchMoviebyId(id);

            setMovieInfo(result.data);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            if (axios.isAxiosError(err)) {
                console.log(err.status);

                if (!err.response) {
                    setError(null);
                } else setError(err.response.toString());
            } else {
                if (!err) {
                    setError(null);
                } else setError(err.toString());
            }
        }
    }

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <Text style={{ color: "white" }}>{error}</Text>;
    }

    //If movie not found
    if (!movieInfo) {
        return (
            <View style={st.containerNotFound}>
                <Text style={{ color: "white" }}>
                    Фильма нет, но вы держитесь!
                </Text>
            </View>
        );
    }

    function firstTwoGenres() {
        if (movieInfo) {
            const genresList: string[] = movieInfo.genres.map(
                (genre) => genre.name
            );

            let result = genresList.map(
                (genre) => genre.charAt(0).toUpperCase() + genre.slice(1)
            );

            return result.slice(0, 2).join("/");
        }
    }

    return (
        <ScrollView removeClippedSubviews={true} style={st.container}>
            <ImageBackground
                blurRadius={1}
                style={st.backdrop}
                source={{ uri: postersURL + movieInfo.backdrop_path }}
            >
                <LinearGradient
                    colors={["rgba(17, 15, 43, 0.38)", mainBGcolor]}
                    locations={[0.85, 0.95]}
                    style={st.backdropLinearGradient}
                />
            </ImageBackground>
            <View style={st.posterMovieInfo}>
                <Image
                    style={st.poster}
                    source={{ uri: postersURL + movieInfo.poster_path }}
                />

                <View
                    style={{
                        flexDirection: "column",
                        flexShrink: 1,
                        rowGap: 0.8 * vh,
                    }}
                >
                    <Text style={st.title}>{movieInfo.title}</Text>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <AirbnbRating
                            defaultRating={movieInfo.vote_average / 2}
                            count={5}
                            size={3 * vw}
                            reviewSize={0}
                            selectedColor={yellowColor}
                            ratingContainerStyle={{
                                flexDirection: "row-reverse",
                                alignSelf: "flex-start",
                            }}
                        />

                        <Text style={st.voteAverage}>
                            {(movieInfo.vote_average / 2).toFixed(1)}
                        </Text>
                    </View>
                    <Text style={st.voteAverage}>{firstTwoGenres()}</Text>
                    <Text style={st.headerRealeseDate}>Дата релиза:</Text>
                    <Text style={st.textRealeseDate}>
                        {movieInfo.release_date}
                    </Text>
                </View>
            </View>

            <View style={{ paddingHorizontal: 5 * vw }}>
                <Text style={st.headerOverview}>Синопсис:</Text>
                <Text style={st.textOverview}>{movieInfo.overview}</Text>
            </View>

            <ButtonHeaderBack onPress={() => goBack()} />
        </ScrollView>
    );
};

export default MovieScreen;

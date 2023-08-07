import React, { useEffect, useState } from "react";
import {
    FlatList,
    Pressable,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MovieListStackParamList, TGenres, TMovie } from "../../types";
import { FetchGenres, FetchMovies } from "../../service/api";
import {
    fontBlack,
    fontBlackItalic,
    fontLight,
    fontRegular,
    mainBGcolor,
    vh,
    vw,
    whiteColor,
} from "../../constants/style";
import MoviesCard from "../../components/movieCard/MoviesCard";

export default function MovieList() {
    const [moviesList, setMoviesList] = useState<TMovie[]>([]);
    const [genresList, setGenresList] = useState<TGenres[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { navigate } =
        useNavigation<NavigationProp<MovieListStackParamList>>();

    useEffect(() => {
        setIsLoading(true);
        getMovies();
        getGenres();
        setIsLoading(false);
    }, []);

    async function getMovies() {
        const result: TMovie[] = await FetchMovies();
        setMoviesList(result);
    }

    async function getGenres() {
        const result: TGenres[] = await FetchGenres();
        setGenresList(result);
    }
    return (
        <View style={{ flex: 1, backgroundColor: mainBGcolor }}>
            <FlatList
                contentContainerStyle={{ padding: 5 }}
                ListHeaderComponent={() => (
                    <Pressable
                        onPress={() => console.warn("Click!")}
                        style={{
                            width: "100%",
                            height: 8 * vh,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: fontRegular,
                                fontSize: 10 * vw,
                                color: whiteColor,
                            }}
                        >
                            Фильмы
                        </Text>
                    </Pressable>
                )}
                data={moviesList}
                renderItem={({ item: movie, index }) => (
                    <TouchableOpacity
                        key={index.toString()}
                        onPress={() => navigate("MovieScreen", movie)}
                        style={{ width: "33%" }}
                    >
                        <MoviesCard
                            key={movie.id}
                            movie={movie}
                            genresList={genresList}
                        />
                    </TouchableOpacity>
                )}
                numColumns={3}
            ></FlatList>
        </View>
    );
}

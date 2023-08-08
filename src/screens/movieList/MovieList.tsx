import React, { useEffect, useState } from "react";
import {
    FlatList,
    Pressable,
    Text,
    TouchableOpacity,
    View,
    SectionList,
    ScrollView,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import {
    MovieListStackParamList,
    TGenres,
    TMovie,
    TSort,
    TSortMovie,
} from "../../types";
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
import { sortData } from "../../service/testData";
import ButtonSort from "../../components/buttonSort/ButtonSort";
import { MovieListStyles as st } from "./style";

export default function MovieList() {
    const [moviesList, setMoviesList] = useState<TMovie[]>([]);
    const [genresList, setGenresList] = useState<TGenres[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentSort, setCurrentSort] = useState<number>(0);

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

    async function changeSort(id: number, sortType: TSort) {
        setCurrentSort(id);
        const result: TMovie[] = await FetchMovies(sortType);
        setMoviesList(result);
    }

    if (!moviesList) {
        return <Text>Фильмов нет!</Text>;
    }

    const renderMovieList = moviesList.map((movie) => (
        <TouchableOpacity
            key={movie.id}
            onPress={() => navigate("MovieScreen", movie)}
            style={{ width: "33%" }}
        >
            <MoviesCard key={movie.id} movie={movie} genresList={genresList} />
        </TouchableOpacity>
    ));

    return (
        <View style={{ flex: 1, backgroundColor: mainBGcolor }}>
            <ScrollView style={{ width: "100%", paddingTop: 10 }}>
                <Text style={[st.headerList]}>Сортировка</Text>
                <FlatList
                    removeClippedSubviews
                    contentContainerStyle={st.sortContainer}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={sortData}
                    renderItem={({ item }) => (
                        <ButtonSort
                            key={item.id}
                            onPress={() => changeSort(item.id, item.sort)}
                            checked={currentSort === item.id}
                            text={item.name}
                            backgroundColor={item.color}
                        />
                    )}
                />
                <Text style={st.headerList}>Фильмы</Text>
                <View style={st.movieListContainer}>{renderMovieList}</View>
            </ScrollView>
        </View>
    );
}

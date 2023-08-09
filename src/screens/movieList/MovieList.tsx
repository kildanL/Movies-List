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
    const [currentSort, setCurrentSort] = useState<TSort>("popularity.desc");
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { navigate } =
        useNavigation<NavigationProp<MovieListStackParamList>>();

    useEffect(() => {
        getMovies();
        getGenres();
    }, [currentPage]);

    useEffect(() => {
        getMovies();
        getGenres();
    }, [currentSort]);

    async function getMovies() {
        const result: TMovie[] = await FetchMovies(currentSort, currentPage);
        setMoviesList(result);
    }

    async function getGenres() {
        const result: TGenres[] = await FetchGenres();
        setGenresList(result);
    }

    async function changeSort(sortType: TSort) {
        setCurrentSort(sortType);
    }

    async function nextPage(currentPage: number = 1) {
        if (currentPage < 1000) {
            setCurrentPage((prev) => prev + 1);
        }
    }

    async function prevPage(currentPage: number = 1) {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
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
                            onPress={() => changeSort(item.sort)}
                            checked={currentSort === item.sort}
                            text={item.name}
                            backgroundColor={item.color}
                        />
                    )}
                />
                <Text style={st.headerList}>Фильмы</Text>
                <View style={st.movieListContainer}>{renderMovieList}</View>

                <View>
                    <TouchableOpacity
                        style={{ padding: 5, backgroundColor: "blue" }}
                        onPress={() => prevPage(currentPage)}
                    >
                        <Text style={{ color: "white", fontSize: 16 }}>
                            Назад
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ color: "white", fontSize: 16 }}>
                        {currentPage}
                    </Text>
                    <TouchableOpacity
                        onPress={() => nextPage(currentPage)}
                        style={{ padding: 5, backgroundColor: "blue" }}
                    >
                        <Text style={{ color: "white", fontSize: 16 }}>
                            Вперёд
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

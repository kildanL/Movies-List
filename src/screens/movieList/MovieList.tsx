import React, { useEffect, useState } from "react";
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MovieListStackParamList, TGenres, TMovie, TSort } from "../../types";
import { FetchGenres, FetchMovies } from "../../service/api";
import { mainBGcolor } from "../../constants/style";
import MoviesCard from "../../components/movieCard/MoviesCard";
import { sortData } from "../../service/testData";
import ButtonSort from "../../components/buttonSort/ButtonSort";
import { MovieListStyles as st } from "./style";
import { observer } from "mobx-react-lite";
import { moviesStore } from "../../stores/moviesStore";

export default observer(function MovieList() {
    const {
        moviesList,
        currentPage,
        currentSort,
        getMovies,
        genresList,
        changeSort,
        getGenres,
        prevPage,
        nextPage,
    } = moviesStore;
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

    if (!moviesList || !genresList) {
        return <Text>Фильмов нет!</Text>;
    }

    if (moviesList.state === "pending" || genresList.state === "pending") {
        return <Text>Загрузка...</Text>;
    }

    if (moviesList.state === "rejected" || genresList.state === "rejected") {
        return <Text>Ошибка</Text>;
    }

    const renderMovieList = moviesList.value.map((movie) => (
        <TouchableOpacity
            key={movie.id}
            onPress={() => navigate("MovieScreen", movie)}
            style={{ width: "33%" }}
        >
            <MoviesCard
                key={movie.id}
                movie={movie}
                genresList={genresList.value}
            />
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
});

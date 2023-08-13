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

export const MovieList = observer(() => {
    const { navigate } =
        useNavigation<NavigationProp<MovieListStackParamList>>();

    useEffect(() => {
        moviesStore.getMovies();
        moviesStore.getGenres();
    }, [moviesStore.currentPage]);

    useEffect(() => {
        moviesStore.getMovies();
        moviesStore.getGenres();
    }, [moviesStore.currentSort]);

    // if (!moviesStore.moviesList) {
    //     return <Text>Фильмов нет!!!</Text>;
    // }

    if (moviesStore.isLoading) {
        return <Text>Загрузка...</Text>;
    }

    if (moviesStore.error) {
        console.warn(moviesStore.error);
        return <Text>{moviesStore.error}</Text>;
    }

    const renderMovieList = moviesStore.moviesList.map((movie) => (
        <TouchableOpacity
            key={movie.id}
            onPress={() => navigate("MovieScreen", movie)}
            style={{ width: "33%" }}
        >
            <MoviesCard
                key={movie.id}
                movie={movie}
                genresList={moviesStore.genresList}
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
                            onPress={() => moviesStore.changeSort(item.sort)}
                            checked={moviesStore.currentSort === item.sort}
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
                        onPress={() =>
                            moviesStore.prevPage(moviesStore.currentPage)
                        }
                    >
                        <Text style={{ color: "white", fontSize: 16 }}>
                            Назад
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ color: "white", fontSize: 16 }}>
                        {moviesStore.currentPage}
                    </Text>
                    <TouchableOpacity
                        onPress={() =>
                            moviesStore.nextPage(moviesStore.currentPage)
                        }
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

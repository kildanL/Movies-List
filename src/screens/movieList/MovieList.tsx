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
    // type TSort = {
    //     title: string;
    //     horizontal: boolean;
    //     data: readonly unknown[];
    // };
    // const sections: TSort[] = [
    //     {
    //         title: "Любимые жанры",
    //         horizontal: true,
    //         data: sortData,
    //     },
    //     {
    //         title: "Фильмы",
    //         horizontal: false,
    //         data: moviesList,
    //     },
    // ];
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
                            checked
                            text={item.name}
                            backgroundColor={item.color}
                        />
                    )}
                />
                <Text style={st.headerList}>Фильмы</Text>
                <View style={st.movieListContainer}>{renderMovieList}</View>
            </ScrollView>
            {/* <SectionList
                sections={sections}
                stickySectionHeadersEnabled={false}
                renderSectionHeader={({ section }) => (
                    <>
                        <Text style={st.headerList}>
                            {section.title}
                        </Text>
                        {section.horizontal ? (
                            <FlatList
                                horizontal
                                data={section.data}
                                renderItem={({ item }) => (
                                    <ListItem item={item} />
                                )}
                                showsHorizontalScrollIndicator={false}
                            />
                        ) : null}
                    </>
                )}
            /> */}

            {/* <FlatList
                contentContainerStyle={{ padding: 5 }}
                ListHeaderComponent={() => (
                    <>
                        <Text
                            style={{
                                fontFamily: fontBlack,
                                fontSize: 10 * vw,
                                color: whiteColor,
                            }}
                        >
                            фильмы
                        </Text>
                    </>
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
            ></FlatList> */}
        </View>
    );
}

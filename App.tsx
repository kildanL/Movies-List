import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
    FlatList,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from "react-native";
import { TGenres, TMovie, TSort } from "./src/types";
import { FetchGenres, FetchMovies } from "./src/service/api";
import MoviesCard from "./src/components/movieCard/MoviesCard";
import { movieData } from "./src/service/testData";

export default function App() {
    const [moviesList, setMoviesList] = useState<TMovie[]>([]);
    const [genresList, setGenresList] = useState<TGenres[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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

    if (isLoading) return <Text>Загрузка...</Text>;

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                {/* <Pressable onPress={() => console.warn(moviesList)}>
                    <Text>ПРиветик!!!</Text>
                </Pressable> */}
                <FlatList
                    // style={{ height: 500 }}
                    contentContainerStyle={{}}
                    data={movieData}
                    renderItem={({ item: movie }) => (
                        <MoviesCard
                            key={movie.id}
                            movie={movie}
                            genresList={genresList}
                        />
                    )}
                    numColumns={3}
                ></FlatList>
                {/* <MoviesCard movie={moviesList[0]} genresList={genresList} /> */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        paddingTop: 40,
        flexWrap: "wrap",
    },
});

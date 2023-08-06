import axios from "axios";
import { useFonts } from "expo-font";
import { useCallback } from "react";
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
    StatusBar,
    useWindowDimensions,
    ScrollView,
} from "react-native";
import { TGenres, TMovie, TSort } from "./src/types";
import { FetchGenres, FetchMovies } from "./src/service/api";
import MoviesCard from "./src/components/movieCard/MoviesCard";
import { movieData } from "./src/service/testData";
import * as SplashScreen from "expo-splash-screen";
import { fontBlackItalic, fontBoldItalic, vh, vw } from "./src/constants/style";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        "Lato Black": require("./assets/fonts/Lato-Black.ttf"),
        "Lato Bold": require("./assets/fonts/Lato-Bold.ttf"),
        "Lato Light": require("./assets/fonts/Lato-Light.ttf"),
        "Lato Regular": require("./assets/fonts/Lato-Regular.ttf"),
        "Lato Black Italic": require("./assets/fonts/Lato-BlackItalic.ttf"),
        "Lato Bold Italic": require("./assets/fonts/Lato-BoldItalic.ttf"),
        "Lato Light Italic": require("./assets/fonts/Lato-LightItalic.ttf"),
        "Lato Regular Italic": require("./assets/fonts/Lato-Italic.ttf"),
    });
    const [moviesList, setMoviesList] = useState<TMovie[]>([]);
    const [genresList, setGenresList] = useState<TGenres[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        getMovies();
        getGenres();
        setIsLoading(false);
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    async function getMovies() {
        const result: TMovie[] = await FetchMovies();
        setMoviesList(result);
    }

    async function getGenres() {
        const result: TGenres[] = await FetchGenres();
        setGenresList(result);
    }

    return (
        <SafeAreaView style={styles.screen} onLayout={onLayoutRootView}>
            <FlatList
                contentContainerStyle={{ padding: 5 }}
                ListHeaderComponent={() => (
                    <View
                        style={{
                            width: "100%",
                            // height: "20%",
                            // width: 100,
                            height: 8 * vh,
                            // backgroundColor: "#000",
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: fontBlackItalic,
                                fontSize: 10 * vw,
                            }}
                        >
                            Фильмы
                        </Text>
                    </View>
                )}
                // stickyHeaderIndices={[0]}
                data={moviesList}
                renderItem={({ item: movie }) => (
                    <MoviesCard
                        key={movie.id}
                        movie={movie}
                        genresList={genresList}
                    />
                )}
                numColumns={3}
            ></FlatList>
            <StatusBar />
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
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        paddingTop: 40,
        flexWrap: "wrap",
    },
});

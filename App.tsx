import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from "react-native";
import { TMovie, TSort } from "./src/types";
import { FetchMovies } from "./src/service/api";

export default function App() {
    const [data, setData] = useState<TMovie[]>([]);

    useEffect(() => {
        getMovies();
    }, []);

    async function getMovies() {
        const result: TMovie[] = await FetchMovies();
        setData(result);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={() => console.warn(data)}>
                <Text>НАжми на меня</Text>
            </Pressable>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

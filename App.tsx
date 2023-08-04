import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from "react-native";
import { TOKEN } from "./src/constants";
import { TSort } from "./src/types";

export default function App() {
    const [data, setData] = useState<any>();

    useEffect(() => {
        getMovies();
        console.warn(data);
    }, []);

    function getMovies() {}

    return (
        <SafeAreaView style={styles.container}>
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

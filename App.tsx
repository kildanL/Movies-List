import axios from "axios";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import MovieList from "./src/screens/movieList/MovieList";
import MovieScreen from "./src/screens/movieScreen/MovieScreen";
import { MovieListStackParamList } from "./src/types";

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator<MovieListStackParamList>();

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

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.screen} onLayout={onLayoutRootView}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MovieList">
                    <Stack.Screen
                        name="MovieList"
                        component={MovieList}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="MovieScreen"
                        component={MovieScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
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

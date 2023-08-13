import { useFonts } from "expo-font";
import { useCallback } from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { RootStoreContext } from "./src/context/rootStoreContext";
import RootStore from "./src/stores/rootStore";
import AppNavigation from "./src/navigation/AppNavigation";

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

    //App will not start until the fonts are loaded.
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <RootStoreContext.Provider value={new RootStore()}>
            <SafeAreaView style={styles.screen} onLayout={onLayoutRootView}>
                <AppNavigation />

                <StatusBar />
            </SafeAreaView>
        </RootStoreContext.Provider>
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
        // justifyContent: "center",
        // alignItems: "center",
        padding: 10,
        paddingTop: 40,
        flexWrap: "wrap",
    },
});

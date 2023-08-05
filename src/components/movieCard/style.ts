import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const vw = width / 100;
const vh = height / 100;

export const MoviesCardStyles = StyleSheet.create({
    // wrapper: {
    //     width: "33%",
    //     height: "40%",
    //     padding: 10,
    // },
    // poster: {
    //     width: "100%",
    //     height: "60%",
    //     resizeMode: "cover",
    // },
    wrapper: {
        width: "33%",
        // height: 20 * vh,
        padding: 10,
    },
    poster: {
        width: "100%",
        // height: "100%",
        height: 20 * vh,
        resizeMode: "cover",
    },
});

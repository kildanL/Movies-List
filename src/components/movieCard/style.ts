import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
    fontLight,
    fontRegular,
    titleSize,
    vh,
    vw,
} from "../../constants/style";

export const MoviesCardStyles = StyleSheet.create({
    wrapper: {
        width: "100%",
        padding: 1.5 * vw,
        overflow: "hidden",
    },
    poster: {
        width: "100%",
        height: 20 * vh,
        resizeMode: "cover",
        borderRadius: 3 * vw,
    },
    title: {
        fontFamily: fontRegular,
        fontSize: titleSize,
        marginBottom: 1 * vw,
    },
    genres: {
        fontFamily: fontLight,
        marginBottom: 1 * vw,
    },
});

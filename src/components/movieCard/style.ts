import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
    fontBlack,
    fontBold,
    fontLight,
    fontRegular,
    titleSize,
    vh,
    vw,
    whiteColor,
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
        overflow: "hidden",
        position: "relative",
    },
    title: {
        fontFamily: fontBold,
        fontSize: titleSize,
        marginBottom: 1 * vw,
        color: whiteColor,
    },
    genres: {
        fontFamily: fontLight,
        fontSize: 3 * vw,
        marginBottom: 1 * vw,
        color: whiteColor,
    },
});

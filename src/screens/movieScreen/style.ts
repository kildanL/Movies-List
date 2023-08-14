import { StyleSheet } from "react-native";
import {
    descriptionSize,
    fontBlack,
    fontLight,
    fontRegular,
    greyColor,
    mainBGcolor,
    titleSize,
    vh,
    vw,
    whiteColor,
} from "../../constants/style";

export const MoviesScreenStyles = StyleSheet.create({
    containerNotFound: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: mainBGcolor,
    },
    container: {
        // paddingTop: 20,
        flex: 1,
        height: "100%",
        backgroundColor: mainBGcolor,
    },
    backdrop: {
        width: "100%",
        height: 30 * vh,
        overflow: "visible",
    },
    backdropLinearGradient: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 40 * vh,
    },
    posterMovieInfo: {
        width: "100%",
        // height: 10 * vh,
        columnGap: 5 * vw,
        paddingHorizontal: 5 * vw,
        flexDirection: "row",
        marginTop: -18 * vh,
        marginBottom: 2 * vh,
    },
    poster: {
        width: "45%",
        height: 30 * vh,
        resizeMode: "cover",
        borderRadius: 3 * vw,
    },
    title: {
        fontFamily: fontBlack,
        fontSize: titleSize,
        marginBottom: 1 * vw,
        color: whiteColor,
    },
    voteAverage: {
        fontFamily: fontRegular,
        fontSize: 3.5 * vw,
        color: greyColor,
    },
    genre: {
        fontFamily: fontRegular,
        fontSize: descriptionSize,
        color: whiteColor,
    },
    headerOverview: {
        fontFamily: fontRegular,
        fontSize: 6 * vw,
        color: whiteColor,
        marginBottom: 1.5 * vh,
    },
    textOverview: {
        fontFamily: fontLight,
        fontSize: 4 * vw,
        color: greyColor,
    },
    headerRealeseDate: {
        fontFamily: fontRegular,
        fontSize: 4 * vw,
        color: whiteColor,
    },
    textRealeseDate: {
        fontFamily: fontLight,
        fontSize: 4 * vw,
        color: greyColor,
    },
});

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
        width: "33%",
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

// export function MoviesCardStyles() {
//     const { width, height } = useWindowDimensions();

//     const vw = width / 100;
//     const vh = height / 100;

//     return StyleSheet.create({
//         wrapper: {
//             width: "33%",
//             // height: 20 * vh,
//             padding: 10,
//         },
//         poster: {
//             width: "100%",
//             // height: "100%",
//             height: 20 * vh,
//             resizeMode: "cover",
//         },
//     });
// }

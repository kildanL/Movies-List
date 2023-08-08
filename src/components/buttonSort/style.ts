import { StyleSheet } from "react-native";
import { fontBold, vh, vw, whiteColor } from "../../constants/style";

export const ButtonSortStyles = StyleSheet.create({
    wrapper: {
        // width: 40 * vw,
        // height: 4 * vh,
        // position: "relative",
        borderRadius: 4 * vw,
        padding: 8,
        overflow: "visible",
        zIndex: 2,
        elevation: 2,
    },
    text: {
        fontFamily: fontBold,
        fontSize: 5 * vw,
        color: whiteColor,
    },
    shadow: {
        width: "100%",
        height: "100%",
        position: "absolute",
        alignSelf: "center",
        top: 6,
        zIndex: 1,
        elevation: 1,
        overflow: "visible",
        borderRadius: 8 * vw,
    },
});

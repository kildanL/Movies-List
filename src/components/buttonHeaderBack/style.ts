import { StyleSheet } from "react-native";
import { purpleColor } from "../../constants/style";

export const ButtonHeaderBackStyles = StyleSheet.create({
    wrapper: {
        backgroundColor: "rgba(210, 41, 196, .8)",
        borderRadius: 50,
        width: 45,
        height: 45,
        position: "absolute",
        top: 25,
        left: 30,
        padding: 10,
    },
    icn: {
        width: "100%",
        height: "100%",
    },
});

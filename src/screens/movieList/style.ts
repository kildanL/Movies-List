import { StyleSheet } from "react-native";
import { fontBold, fontLight, vw, whiteColor } from "../../constants/style";

export const MovieListStyles = StyleSheet.create({
    headerList: {
        fontFamily: fontBold,
        color: whiteColor,
        fontSize: 7 * vw,
        paddingLeft: 8,
    },
    movieListContainer: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    sortContainer: {
        padding: 10,
    },
    btnPagination: {
        width: "30%",
        padding: 5,
        borderRadius: 13,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: "white",
    },
    btnPaginationText: {
        fontFamily: fontLight,
        color: "white",
        fontSize: 16,
    },
});

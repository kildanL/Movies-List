import React from "react";
import { Image, Text, View } from "react-native";
import { MoviesCardStyles as st } from "./style";
import { postersURL } from "../../constants";

export default function MoviesCard({
    poster,
    title,
    description,
    genres,
    rating,
}: {
    poster: string;
    title: string;
    description: string;
    genres: string;
    rating: number;
}) {
    return (
        <View style={st.wrapper}>
            <Image source={{ uri: postersURL + poster }} />
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{genres}</Text>
            <Text>{rating}</Text>
        </View>
    );
}

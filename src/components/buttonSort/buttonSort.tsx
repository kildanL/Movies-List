import { View, Text, Pressable } from "react-native";
import React from "react";
import { ButtonSortStyles as st } from "./style";

export const ButtonSort = ({
    checked,
    text,
    backgroundColor,
}: {
    checked: boolean;
    text: string;
    backgroundColor: string;
}) => {
    return (
        <Pressable style={[{ marginLeft: 15, position: "relative" }]}>
            <View style={[st.wrapper, { backgroundColor: backgroundColor }]}>
                <Text style={st.text}>{text}</Text>
            </View>
            <View
                style={[
                    st.shadow,
                    { backgroundColor: backgroundColor, opacity: 0.3 },
                ]}
            ></View>
        </Pressable>
    );
};

export default ButtonSort;

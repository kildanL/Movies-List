import { View, Text, Pressable } from "react-native";
import React from "react";
import { ButtonSortStyles as st } from "./style";

export default React.memo(
    function ButtonSort({
        checked,
        text,
        backgroundColor,
        onPress,
    }: {
        checked: boolean;
        text: string;
        backgroundColor: string;
        onPress: () => void;
    }) {
        return (
            <Pressable
                onPress={onPress}
                style={[{ marginLeft: 15, position: "relative" }]}
            >
                <View
                    style={[
                        st.wrapper,
                        {
                            backgroundColor: checked
                                ? "white"
                                : backgroundColor,
                        },
                    ]}
                >
                    <Text style={[st.text, checked && { color: "black" }]}>
                        {text}
                    </Text>
                </View>
                <View
                    style={[
                        st.shadow,
                        {
                            backgroundColor: checked
                                ? "white"
                                : backgroundColor,
                            opacity: 0.3,
                        },
                    ]}
                ></View>
            </Pressable>
        );
    },
    (prevProps, nextProps) => {
        if (nextProps.checked !== prevProps.checked) return false;
        else return true;
    }
);

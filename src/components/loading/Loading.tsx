import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import {
    blueColor,
    fontBold,
    fontLight,
    mainBGcolor,
    whiteColor,
} from "../../constants/style";

const Loading = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: mainBGcolor,
            }}
        >
            <ActivityIndicator size={"large"} color={blueColor} />
            <Text
                style={{
                    fontFamily: fontLight,
                    color: whiteColor,
                    fontSize: 24,
                }}
            >
                Загрузка...
            </Text>
        </View>
    );
};

export default Loading;

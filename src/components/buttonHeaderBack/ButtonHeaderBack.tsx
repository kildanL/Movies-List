import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonHeaderBackStyles as st } from "./style";

const ButtonHeaderBack = ({ onPress }: { onPress?: () => void }) => {
    return (
        <TouchableOpacity onPress={onPress} style={st.wrapper}>
            <Image
                style={st.icn}
                source={require("../../../assets/back.png")}
            />
        </TouchableOpacity>
    );
};

export default ButtonHeaderBack;

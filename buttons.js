import React from "react";
import { Text, View } from "react-native";

const Buttons = ({buttonBox, buttonContent, buttonStyle}) => {
    return (
        <View style={buttonBox}>
            <Text style={buttonStyle}>
                {buttonContent}
            </Text>
        </View>
    )
}

export default Buttons;
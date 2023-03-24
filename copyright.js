import React from "react";
import { Text, View } from "react-native";

const Copyright = ({copyrightBox, copyrightStyle, copyrightText}) => {
    return (
        <View style={copyrightBox}>
            <Text style={copyrightStyle}>
                {copyrightText}
            </Text>
        </View>
    )
}

export default Copyright;

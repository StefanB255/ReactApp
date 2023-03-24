import React from "react";
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Choice = ({choiceContainer, containerStyle, boxStyle, choiceItem, iconStyle, choiceText, textStyle}) => {
    return(
        <View style={containerStyle}>
            <View style={boxStyle}>
                <Text style={iconStyle}>
                    {choiceItem}
                </Text>

                <Text style={textStyle}>
                    {choiceText}
                </Text>
            </View>
        </View>
    )
}
 export default Choice;
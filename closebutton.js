import React from "react";
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Close = ({closeButtonStyle, closeButton, closeButtonBox}) => {
        <View style={closeButtonBox}>
            <Text style={closeButtonStyle}>
                {closeButton}
            </Text>
        </View>
}
export default Close;
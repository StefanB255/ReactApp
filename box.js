import React from "react";
import { Text, View } from "react-native";

const Box = ({title,titleStyle,title2,title2Style,title3,title3Style,boxStyle,box2Style,flexBox,circle,circleStyle,save,saveStyle,annual,annualStyle,perMonth,perMonthStyle,perYear,perYearStyle}) => {
    
    return (
        <View>
            
            <View>
                <Text style={titleStyle}>{title}</Text>
            </View>
        </View>
    )
}
 export default Box


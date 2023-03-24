import React from "react";
import { Text, View } from "react-native";



const BoxOnee = ({boxStyle,icons,AntDesign,boxDesc,smallDesc,box2Style,flexBox,circle,circleStyle,save,saveStyle,annual,annualStyle,perMonth,perMonthStyle,perYear,perYearStyle}) => {
    
    return (
        <View>
        <View style={boxStyle}>
         <View style={boxDesc}>
         <View style={flexBox}>
         <Text name='customerservice' style={icons}>{AntDesign}</Text>
            <Text style={circleStyle}>{circle}</Text>
            <Text style={saveStyle}>{save}</Text>
        </View>
            <View style={smallDesc}>
                <Text style={annualStyle}>{annual}</Text>
                <Text style={perMonthStyle}>{perMonth}</Text>
                <Text style={perYearStyle}>{perYear}</Text>
            </View>
         </View>
        </View>
        </View>
    )
}
 export default BoxOnee


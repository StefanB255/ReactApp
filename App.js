import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/MaterialIcons';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Box from './box';

import BoxOnee from './boxes';

import Choice from './choices';

import Buttons from './buttons';

import Copyright from './copyright';

import Close from './closebutton';

export default function App() {
  return (
    
    <View style={styles.container}>
      
      <Close
      closeButton={'sala'}
      closeButtonStyle={styles.close}
      closeButtonBox={styles.close}
      />
      <Choice
      
      choiceItem={<Icon name="close" style={styles.close}/>}
      iconStyle={styles.close}
      boxStyle={styles.choice}
      />
      <Box
      
      title={'Level up your \nfood game'}
      titleStyle={styles.title}

      />
    <View style={styles.body}>
      <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
      <StatusBar style="auto" />
      <View style={styles.boxContainer}>
        <BoxOnee
        circle={''}
        circleStyle={styles.circle}
        annual={'Monthly'}
        annualStyle={styles.annual}
        boxStyle={styles.boxOne}
        perMonth={'$32.99/monthly\n'}
        perMonthStyle={styles.monthly}
        perYear={'$395.88 per year'}
        perYearStyle={styles.perYear}
        smallDesc={styles.smallDesc}
        flexBox={styles.flexBox1}
        boxDesc={styles.boxDesc}
        />
        
        <BoxOnee
        circle={<Icon name="check-circle" style={styles.icon}/>}
        circleStyle={styles.icon}
        save={'Save $32'}
        saveStyle={styles.save}
        annual={'Annual'}
        annualStyle={styles.annual}
        boxStyle={styles.boxTwo}
        perMonth={'$32.99/monthly\n'}
        perMonthStyle={styles.monthly}
        perYear={'$395.88 per year'}
        perYearStyle={styles.perYear}
        smallDesc={styles.smallDesc}
        flexBox={styles.flexBox}
        boxDesc={styles.boxDesc}
        />
</View>


      <Choice
        containerStyle={styles.choiceContainer}
        choiceItem={<Icon name="people" style={styles.choiceIcon1}/>}
        iconStyle={styles.choiceIcon}
        choiceText={'Premium communities'}
        textStyle={styles.choiceDesc}
        boxStyle={styles.choice}
      />

      <Choice
      containerStyle={styles.choiceContainer}
      choiceItem={<Icon name="no-meals" style={styles.choiceIcon1}/>}
      iconStyle={styles.choiceIcon}
      choiceText={'Unlimited meal plans'}
      textStyle={styles.choiceDesc}
      boxStyle={styles.choice}
      />

      <Choice
      containerStyle={styles.choiceContainer}
      choiceItem={<Icon name="receipt" style={styles.choiceIcon1}/>}
      iconStyle={styles.choiceIcon}
      choiceText={'Access all recipes'}
      textStyle={styles.choiceDesc}
      boxStyle={styles.choice}
      />

      <Choice
      containerStyle={styles.choiceContainer}
      choiceItem={<Icon name="check-circle" style={styles.choiceIcon1}/>}
      iconStyle={styles.choiceIcon}
      choiceText={'Ad free'}
      textStyle={styles.choiceDesc}
      boxStyle={styles.choice}
      />
      </View>

      <Buttons
      buttonContent={'Continue'}
      buttonStyle={styles.button}
      />

      <Copyright
        copyrightText = {'Some fees and stuff like that apply.'}
        copyrightStyle = {styles.footer}
      />
      
      

      

    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',
    margin:20, 
  },
  flexBox:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center'
  },
  flexBox1:{
    flex: 1,
    flexDirection: 'row',
    
    alignItems: 'center',
    
  },
  title: {
    fontWeight: '800',
    fontSize: 25,
  },
  title2Style:{
    color: 'blue',
    fontWeight: 900,
    fontSize:21,
  },
  close: {
    marginTop: 5,
    fontSize: 35,
    color: 'grey'
  },
  closeButton: {
    margin: 50,
  },
  boxContainer: {
    width: '100%',
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
    marginBottom: 10,
  },
  flexBox:{
    flex:1,
    flexDirection: 'row',
    alignContent:'center',
    alignItems: 'center',
    justifyContent: 'space-between',
   },
  boxDesc:{
    flex:1,
    flexDirection: 'column',
    paddingTop: 0,
   },
   smallDesc:{
    textAlign: 'center',
   },
  boxOne: {
    height: 130,
    borderWidth: 3,
    width: '100%',
    borderColor: 'grey',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginTop: 10,
    
  },
  boxTwo: {
    height: 130,
    borderWidth: 3,
    width: '100%',
    borderColor: '#ff4500',
    borderRadius: 15,
    marginRight: 0,
    paddingHorizontal: 15,
    marginTop: 10,
    position: 'relative',
    paddingVertical: 0,
    alignSelf: 'center',
    
  },
  desc:{
    color: 'grey',
    fontWeight: 700,
  },
  circle:{
    marginTop: 0,
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 50,
  },
  icon:{
    fontSize: 25,
    color: '#ff4500',
    marginLeft: -15,
    borderRadius: 50,
    padding: 8,
    margin: 0,
  },
  save:{
    backgroundColor: '#86939e',
    padding: 5,
    marginTop: 0,
    color: '#000',
    fontWeight: 800,
    borderRadius: 5,
    alignContent: 'center',
    position: 'relative',
  },
  annualBox:{
  },
  annual:{
    fontWeight:900,
    fontSize: 15,
  },
  monthly:{
    fontWeight:900,
    color: 'grey',
  },
  perYear:{
    fontWeight:800,
    color: 'grey',
    fontSize: 11,
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 0,
    left: 0,
    marginVertical: 5,
  },
  choiceContainer:{
    width: '100%',
    position: 'relative',
    
  },
  choice:{
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  whiteSpace:{
    width: 15,
  },
  choiceDesc:{
    fontWeight: 900,
    fontSize: 20,
    marginLeft: 10,
    
  },
  choiceIcon:{
    fontSize: 30,
    color: '#ff4500',
    backgroundColor: 'grey',
    borderRadius: 50,
    padding: 8,
    marginTop: 10,
  },
  choiceIcon1:{
    fontSize: 30,
    color: '#ff4500',
    
    borderRadius: 50,
    padding: 8,
    margin: 0,
  },
  button:{
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#ff4500',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    fontWeight: 700,
    marginTop: 0,
  },
  buttonBox:{ 
    width: '100%', 
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    marginTop: 50,
  },
  footer:{
    color: 'grey',
    fontWeight: 700,
    marginTop: 5,
  }
});


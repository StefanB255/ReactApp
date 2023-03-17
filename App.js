import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function App() {
  return (
    <View style={styles.container}>
      <Icon name="close" style={styles.close} />
      <Text style={styles.title}>Level up your</Text>
      <Text style={styles.title}>food game!</Text>
      <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
      <StatusBar style="auto" />
      <View style={styles.boxContainer}>
        <View style={styles.boxOne}>
            
            <View style={styles.circleBox}>
        
            <View style={styles.circle}>
              
              </View>
        
        </View>
          <View style={styles.annualBox}>
          
          <Text style={styles.annual}>Annual</Text>
          <Text style={styles.monthly}>$32.99/monthly</Text>
          <Text style={styles.whiteBox}></Text>
          <Text style={styles.perYear}>$395.88 per year</Text>
         </View>

        </View>
        <View style={styles.boxTwo}>
        <View style={styles.circleBox}>
        
        <Text> <Icon name="check-circle" style={styles.icon} /></Text>
        <Text style={styles.save}>
            Save $32
          </Text> 
        
        </View>
         <View style={styles.annualBox}>
          
          <Text style={styles.annual}>Annual</Text>
          <Text style={styles.monthly}>$32.99/monthly</Text>
          <Text style={styles.whiteBox}></Text>
          <Text style={styles.perYear}>$395.88 per year</Text>
         </View>
        </View>

        <View style={styles.choiceContainer}>
              <View style={styles.choice}>
                <Icon name="people" style={styles.choiceIcon} />
                <Text style={styles.whiteSpace}></Text>
                <Text style={styles.choiceDesc}>Premium communities</Text>
              </View>

              <Text style={styles.whiteSpace}></Text>

              <View style={styles.choice}>
                <Icon name="no-meals" style={styles.choiceIcon} />
                <Text style={styles.whiteSpace}></Text>
                <Text style={styles.choiceDesc}>Unlimited meal plans</Text>
              </View>

              <Text style={styles.whiteSpace}></Text>

              <View style={styles.choice}>
                <Icon name="receipt" style={styles.choiceIcon} />
                <Text style={styles.whiteSpace}></Text>
                <Text style={styles.choiceDesc}>Access all recipes</Text>
              </View>

              <Text style={styles.whiteSpace}></Text>

              <View style={styles.choice}>
                <Icon name="adjust" style={styles.choiceIcon} />
                <Text style={styles.whiteSpace}></Text>
                <Text style={styles.choiceDesc}>Ad free</Text>
              </View>

              <Text style={styles.whiteSpace}></Text>

              <View style={styles.buttonBox}>
              <Text style={styles.button}>Continue</Text>
              </View>

              <View style={styles.footerBox}>
              <Text style={styles.footer}>Some fees and stuff like that apply.</Text>
              </View>

      </View>
      
      </View>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',
    margin: 20, 
  },
  title: {
    fontWeight: '800',
    fontSize: 25,
  },
  close: {
    fontSize: 35,
    fontWeight: '300',
    marginLeft: -8,
    color: 'grey',
    position: 'relative',
  },
  boxContainer: {
    width: '100%',
    marginTop: 10,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
  },
  boxOne: {
    width: '45%',
    height: '30%',
    borderWidth: 3,
    borderColor: '#080800',
    borderRadius: 15,
    marginRight: 35,
    padding: 10,
  },
  boxTwo: {
    width: '45%',
    padding: 10,
    height: '30%',
    borderWidth: 3,
    borderColor: '#ff4500',
    borderRadius: 15,
    
  },
  desc:{
    color: 'grey',
    fontWeight: 700,
  },
  circleBox:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    
  },
  circle:{
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 50,
  },
  icon:{
    fontSize: 25,
    color: '#ff4500',
    margin: 0,
    padding: 0,
  },
  save:{
    backgroundColor: '#86939e',
    height: '55%',
    padding: 5,
    color: '#000',
    fontWeight: 800,
    borderRadius: 5,
    width: '50%'
  },
  annualBox:{
   marginTop: -10, 
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
    marginTop: 0,
  },
  choiceContainer:{
    width: '100%',
    height: '10%',
    position: 'absolute',
    marginTop: 180,
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
    fontSize: 20
  },
  choiceIcon:{
    fontSize: 30,
    color: '#ff4500',
    backgroundColor: '#ff6a00bd',
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
  },
  buttonBox:{ 
    width: '100%', 
    alignItems: 'center'
  },
  footer:{
    color: 'grey',
    fontWeight: 700,
    marginTop: 5,
  }
});


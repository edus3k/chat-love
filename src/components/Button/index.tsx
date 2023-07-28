import { 
StyleSheet,
View,
Text,
TouchableOpacity,
GestureResponderEvent
} from 'react-native';

export type Btn = {
  text: string,
  event: ((event: GestureResponderEvent) => void)
}

const Button = (props:Btn) => {

  return (
    <View style={styles.container}>   
      <TouchableOpacity 
        onPress={props.event}
        style={styles.button}>
        <Text style={styles.button_text}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
    
const styles = StyleSheet.create({
  container:{
    marginBottom: 32
  },
  button_text:{
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 6,
  },
  button:{
    height: 50,
    backgroundColor: '#FE0364',
    borderWidth: 1,
    borderRadius: 12,
    textAlign: 'center',
    marginStart: '10%',
    marginEnd: '10%',
    padding: 10
  }
  
});
    
export default Button;
    
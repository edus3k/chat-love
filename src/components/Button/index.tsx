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
    marginBottom: 12
  },
  button_text:{
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 6,
  },
  button:{
    width: '100%',
    height: 50,
    backgroundColor: '#FE0364',
    borderWidth: 1,
    borderRadius: 12,
    textAlign: 'center',
    padding: 10
  }
  
});
    
export default Button;
    
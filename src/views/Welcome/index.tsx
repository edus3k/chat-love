import { 
StyleSheet,
View,
Text,
Image,
TouchableOpacity
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import Icon from '@assets/mascot.png';
import { StackTypes } from '@config/StackTypes';

const Welcome = () => {

  const navigation = useNavigation<StackTypes>();

  const login = () =>{
    navigation.navigate('Signin');
  }

  return (
    <View style={styles.container}>   
      <LinearGradient
        style={styles.container_gradient}
        colors={['transparent', 'rgba(0,0,0,0.3)',
        'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.7)',
        'rgba(0,0,0,0.9)', 'rgba(0,0,0,1)']}>

        <View style={styles.container_icon}>
          <Animatable.Image
            delay={200}
            animation='flipInY'
            source={Icon} 
            style={styles.icon}
            resizeMode='contain'
          />
        </View>

        <Animatable.View 
        delay={700}
        animation='fadeInUp' 
        style={styles.container_text}>
          
          <Text style={styles.title}>Bem Vindo ao ChatLove</Text>
          <Text style={styles.label}>Venha descobri um novo jeito de se relacionar.</Text>
          <Text style={styles.label_button}>Faça o login para começar!</Text>
                
          <TouchableOpacity 
            onPress={login}
            style={styles.button}>
            <Text style={styles.button_text}>Acessar</Text>
          </TouchableOpacity>
        </Animatable.View>

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FE0364',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_gradient:{
    width: '100%',
    height: '100%'
  },
  container_icon:{
    flex:2,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_text:{
    flex:1,
    width:'100%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#A1A1A1',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingStart: '12%',
    paddingEnd: '12%'
  },
  icon:{
    width: '60%',
    height: '70%'
  },
  title:{
    fontSize: 24,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10
  },
  label:{
    fontSize: 16,
    textAlign: 'justify',
    fontStyle: 'italic',
    fontWeight: '400',
    marginTop: 14,
    marginBottom: 18
  },
  label_button:{
    color:'#A1A1A1',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '300',
    marginTop: 8,
    marginBottom: 22
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

export default Welcome;

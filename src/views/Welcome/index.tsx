import { 
StyleSheet,
View,
Text,
Image,
ImageBackground,
TouchableOpacity
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import Background from '@assets/background.jpg';
import CadInfo from '@components/CadInfo';
import { StackTypes } from '@config/StackTypes';

import Mascot from '@assets/mascot.png'
import Chat from '@assets/cardchat.png';
import People from '@assets/people.png';
import Cyber from '@assets/cyber.png';

const Welcome = () => {

  const navigation = useNavigation<StackTypes>();

  const login = () =>{
    navigation.navigate('Signin');
  }

  return (
    <View style={styles.container}>   
     <ImageBackground source={Background} style={styles.container_bakground}>
        <LinearGradient style={styles.container_gradient}
        colors={['transparent', 'rgba(0,0,0,0.3)',
        'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.6)',
        'rgba(0,0,0,0.7)', 'rgba(0,0,0,.8)']}>
          <View style={styles.container_app}>
            <View style={styles.container_name}>
              <Image style={styles.icon} source={Mascot} />
              <Text style={styles.text}>
                BEM-VINDOS AO CHATLOVE
              </Text>
            </View>
            <View style={styles.container_cads}>
              <CadInfo
              img={Chat}
              text='Conecte-se com novos amigos e
              colegas de forma rápida e simples, de 
              maneira fácil e divertida.'/>
              <CadInfo
              img={People}
              text='Troque fotos, vídeos e documentos 
              facilmente, tornando cada conversa mais 
              envolvente e personalizada.'/>
              <CadInfo
              img={Cyber}
              text='Sua privacidade é nossa prioridade. 
              Utilizamos os mais altos padrões de segurança 
              para proteger suas conversas.'/>
            </View>
            <View style={styles.container_button}>
              <TouchableOpacity style={styles.button}
              onPress={login}>
                <Text style={styles.button_text}>ACESSAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
     </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F4F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_bakground:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    resizeMode: 'cover',
    zIndex: 1
  },
  container_gradient:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_app:{
    width: '80%',
  },
  icon:{
    width: 94,
    height: 94,
    marginBottom: 16
  },
  container_name:{
    alignItems: 'center',
    marginBottom: 28
  },
  text:{
    fontSize: 40,
    letterSpacing: 4,
    fontStyle: 'italic',
    fontWeight: '700',
    color: '#F4F4F4F4'
  },
  container_cads:{
    alignItems: 'center'
  },
  container_button:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    width: '80%',
    height: 50,
    backgroundColor: '#F4F4F4F4',
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: 32
  },
  button_text:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 6
  }
});

export default Welcome;

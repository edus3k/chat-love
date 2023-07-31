import React, { useState } from 'react';
import { 
StyleSheet,
View,
Text,
TouchableOpacity
} from 'react-native';
  
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

import Icon from '@assets/mascot.png';
import InEmail from '@components/InEmail';
import InPassword from '@components/InPassword';
import Button from '@components/Button';

import { StackTypes } from '@config/StackTypes';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from '@config/Firebase';

const Signin = () => {
  
  const navigation = useNavigation<StackTypes>();
  const [email, setEamil] = useState(null);
  const [password, setPassword] = useState(null);
  const [errEmail, setErroEmail] = useState('');
  const [errPassword, setErroPassword] = useState('');

  const create = ()=>{
    console.log('Registrando no app!');
    navigation.navigate('DataUsers');
  }

  const recover = ()=>{
    console.log('Recuperando senha!');
    navigation.navigate('RecoverUsers');
  }

  const validation = ()=>{
    
    if(email != null && password != null){
      
      const auths = Auth;
      
      signInWithEmailAndPassword(auths, email, password)
        .then(() => {
          // Signed in 
          console.log('entrando no app...');
          navigation.navigate('Home');
        })
        .catch((error) => {
          // Err Signed in 
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log({erro:errorCode, errorMesg: errorMessage});
        });
    }
    if(email == null && password == null ){
      console.log('email ou senha null');
      setErroEmail('*Email informado errado.');
      setErroPassword('*Senha informada errada.');
    }
    if(email == null){
      console.log('email null');
      setErroEmail('*Email informado errado.');
    }
    if(password == null){
      console.log('senha null');
      setErroPassword('*Senha informada errada.');
    }
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
        delay={400}
        animation='fadeInUpBig' 
        style={styles.container_from_data}>
          <LinearGradient
          style={styles.container_gradient}
          colors={['transparent', 'rgba(0,0,0,0.3)',
          'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.7)',
          'rgba(0,0,0,0.9)', 'rgba(0,0,0,1)']}>
            <View style={styles.container_data}>
              <InEmail
                labelColor='#000'
                backColor='#FE0364'
                in={setEamil}
                erro={errEmail}
              />
              <InPassword
                labelColor='#000'
                backColor='#FE0364'
                in={setPassword}
                erro={errPassword}
              />
              <TouchableOpacity
                onPress={recover}
                style={styles.conateiner_recover}>
                <Text style={styles.text_recover}>
                  Esqueceu sua senha?
                  <Text style={styles.text_recover_lick}>
                    Entre aqui!
                  </Text>
                </Text>
              </TouchableOpacity>
              <View style={styles.container_button}>
                <Button
                  text='LOGIN'
                  event={validation}
                />
              </View>
              <TouchableOpacity
                onPress={create}
                style={styles.conateiner_create}>
                <Text style={styles.text_create}>
                  Não possui uma conta? Cadastre-se!
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
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
    flex:1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_from_data:{
    flex:2,
    width:'100%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#A1A1A1',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  container_data:{
    marginTop: '2%',
    marginStart: '8%',
    marginEnd: '8%',
    marginBottom: '2%'
  },
  icon:{
    width: '60%',
    height: '70%'
  },
  conateiner_recover:{
    marginStart: 8,
    marginTop: 8,
    marginBottom: 32
  },
  text_recover:{
    color: '#000',
    fontSize: 14,
    fontWeight: '600'
  },
  text_recover_lick:{
    color: '#FFF',
    fontWeight: 'bold'
  },
  container_button:{
    marginStart: '12%',
    marginEnd: '12%'
  },
  conateiner_create:{
    marginStart: '24%',
    marginEnd: '24%',
    marginTop: 2,
    padding: 10,
    backgroundColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
  },
  text_create:{
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '600',
    textAlign: 'center'
  }
});
  
export default Signin;
  
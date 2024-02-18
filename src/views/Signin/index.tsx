import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet,
View,
Text,
TouchableOpacity
} from 'react-native';

import InEmail from '@components/InEmail';
import InPassword from '@components/InPassword';
import ErrText from '@components/ErrText';

import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from '@config/getFirebase';

const Signin = () => {

  const {navigate} = useNavigation();
  const [email, setEamil] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');

  const validation = ()=>{
    setErrEmail('');
    setErrPassword('');

    if(email != null && password != null){
      const auths = Auth;
      signInWithEmailAndPassword(auths, email, password)
        .then(() => {
          // Signed in 
          console.log('entrando no app...');
          navigate('Home');
          return 0;
        })
        .catch((error) => {
          // Err Signed in 
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log({erro:errorCode, errorMesg: errorMessage});
          return 1;
        });
    }
    if(email == null && password == null ){
      console.log('email ou senha null');
      setErrEmail('*Email informado errado.');
      setErrPassword('*Senha informada errada.');
      return 0;
    }
    if(email == null){
      console.log('email null');
      setErrEmail('*Email informado errado.');
      return 0;
    }
    if(password == null){
      console.log('senha null');
      setErrPassword('*Senha informada errada.');
      return 0;
    }
  }

  const rRecover = ()=>{
    navigate('Recover');
  }

  const rCreate = ()=>{
    navigate('Create');
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_name_app}>
        <Text style={styles.name_app}>Chat Love</Text>
      </View>
      <View style={styles.container_inputs}>
        <InEmail email={setEamil}/>
        <ErrText err={errEmail}/>
        <InPassword password={setPassword}/>
        <ErrText err={errPassword}/>
        <View style={styles.container_recover}>
          <TouchableOpacity onPress={rRecover}>
            <Text style={styles.text_recover}> 
             Esqueceu sua senha? 
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_login}>
          <TouchableOpacity style={styles.button_login}
          onPress={validation}>
            <Text style={styles.text_login}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_create}>
          <TouchableOpacity onPress={rCreate}>
            <Text style={styles.text_create}>
              Não possui uma conta?
            </Text>
            <Text style={styles.text_create}>
              Cadastre-se!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container_name_app:{
    marginBottom: 32
  },
  name_app:{
    fontSize: 32,
    fontWeight: '600'
  },
  container_inputs:{
    width: '90%',
    marginTop: 32
  },
  container_recover:{
    width: '50%',
    marginTop: 12,
    marginBottom: 32,
  },
  text_recover:{
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '500'
  },
  container_login:{
    width: '60%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 32
  },
  button_login:{
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text_login:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 4
  },
  container_create:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 32
  },
  text_create:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700'
  },
});
  
export default Signin;
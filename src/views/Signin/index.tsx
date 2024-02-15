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
  const [errEmail, setErroEmail] = useState('');
  const [errPassword, setErroPassword] = useState('');

  const validation = ()=>{
    setErroEmail('');
    setErroPassword('');

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
      setErroEmail('*Email informado errado.');
      setErroPassword('*Senha informada errada.');
      return 0;
    }
    if(email == null){
      console.log('email null');
      setErroEmail('*Email informado errado.');
      return 0;
    }
    if(password == null){
      console.log('senha null');
      setErroPassword('*Senha informada errada.');
      return 0;
    }
  }

  const rRecover = ()=>{

  }

  const rCreate = ()=>{
    
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
          <TouchableOpacity onPress={validation}>
            <Text style={styles.text_login}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_create}>
          <TouchableOpacity onPress={rCreate}>
            <Text style={styles.text_create}>
              Login
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
    width: '90%'
  },
  container_recover:{
    
  },
  text_recover:{

  },
  container_login:{
    
  },
  text_login:{

  },
  container_create:{
    
  },
  text_create:{

  },
});
  
export default Signin;
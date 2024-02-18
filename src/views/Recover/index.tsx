import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet,
View,
Text,
TouchableOpacity,
Modal
} from 'react-native';

import HeaderGoBack from '@components/HeaderGoBack';
import InEmail from '@components/InEmail';
import ErrText from '@components/ErrText';
import { SimpleModal } from '@components/SimpleModal';

import { Auth } from '@config/getFirebase';
import { sendPasswordResetEmail } from "firebase/auth";


const Recover = () => {

  const [email, setEamil] = useState<string | null>(null);
  const [errEmail, setErrEmail] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false)

  const changeModalVisibe = (bool: boolean)=>{
    setIsModalVisible(bool);
  }

  const validation = ()=>{
    setErrEmail('');

    if(email != null){
      const auths = Auth;
      sendPasswordResetEmail(auths, email)
      .then(() => {
        changeModalVisibe(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('erro: '+errorMessage+' code: '+errorCode);
        setErrEmail('*Erro ao recuperar senha.');
  });
    }
    if(email == null ){
      console.log('email ou senha null');
      setErrEmail('*Email informado errado.');
      return 0;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <HeaderGoBack route={'Signin'}/>
      </View>
      <View style={styles.container_name_app}>
        <Text style={styles.name_app}>Chat Love</Text>
      </View>
      <View style={styles.container_inputs}>
        <View style={styles.container_label_recover}>
          <Text style={styles.label_recover}>
            Informe seu e-mail para fazer a recuperação de senha!      
          </Text>
        </View>
        <InEmail email={setEamil}/>
        <ErrText err={errEmail}/>
        <View style={styles.container_recover}>
          <TouchableOpacity style={styles.button_recover}
          onPress={validation}>
            <Text style={styles.text_recover}>
              Recuperar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal 
        transparent={true}
        animationType='fade'
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibe(false)}>
        <SimpleModal close={changeModalVisibe}/>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    alignItems: 'center'
  },
  container_header:{
    top: 30,
    width: '90%',
    height: 50,
    marginBottom: 12
  },
  container_name_app:{
    marginTop: '30%',
    marginBottom: 32
  },
  name_app:{
    fontSize: 32,
    fontWeight: '600'
  },
  container_inputs:{
    flex: 1,
    width: '90%',
    marginTop: 32
  },
  container_label_recover:{
    width: '100%',
    marginBottom: 32,
  },
  label_recover:{
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'left'
  },
  container_recover:{
    width: '60%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 32
  },
  button_recover:{
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text_recover:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 4
  }
});
  
export default Recover;
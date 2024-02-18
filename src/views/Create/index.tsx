import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet,
View,
Text,
TouchableOpacity
} from 'react-native';

import HeaderGoBack from '@components/HeaderGoBack';
import InName from '@components/InName';
import InEmail from '@components/InEmail';
import InPassword from '@components/InPassword';
import ErrText from '@components/ErrText';

import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from '@config/getFirebase';

type ParamProps = {
  name: string;
  orientation: string;
}

const Create = () => {

  const {navigate} = useNavigation();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [errName, setErrName] = useState('');
  const [errOption, setErrOption] = useState('');

  const optionPress = (option: string) => {
    setSelectedOption(option);
  };

  const validation = ()=>{
    setErrName('');
    setErrOption('');

    if(name != null && selectedOption != null){
      const auths = Auth;
      navigate('UsersData', {name: name, orientation: selectedOption})
    }
    if(name == null && selectedOption == null ){
      console.log('name ou option null');
      setErrName('*Inform um nome');
      setErrOption('*Selecione uma opção');
      return 0;
    }
    if(name == null){
      console.log('name null');
      setErrName('*Inform um nome');
      return 0;
    }
    if(selectedOption == null){
      console.log('select option null');
      setErrOption('*Selecione uma opção');
      return 0;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <HeaderGoBack route={'Signin'}/>
      </View>
      <View style={styles.container_title}>
        <Text style={styles.title_view}>
          Agora vamos criar seu perfil!
        </Text>
      </View>
      <View style={styles.container_inputs}>
        <View style={styles.container_name}>
          <Text style={styles.label_name_h2}>
            Como voçê se chama? nos diga seu nome.
          </Text>
          <Text style={styles.label_name_h3}>
            Esse nome ficara no seu Perfil!
          </Text>
          <InName Name={setName}/>
          <ErrText err={errName}/>
        </View>
        <View style={styles.container_orientation}>
          <Text style={styles.label_orientation_h2}>
            Como voçê se identifica?
          </Text>
          <View style={styles.container_option_button}>
            <TouchableOpacity style={[styles.option_button, 
              selectedOption === 'Homem' && styles.selectedOption]} 
              onPress={() => optionPress('Homem')}>
                <Text style={styles.option_text}>Homem</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.option_button, 
              selectedOption === 'Mulher' && styles.selectedOption]} 
              onPress={() => optionPress('Mulher')}>
                <Text style={styles.option_text}>Mulher</Text>
            </TouchableOpacity>
          </View>
          <ErrText err={errOption}/>
        </View>
        <View style={styles.container_next}>
          <TouchableOpacity style={styles.button_next}
          onPress={validation}>
            <Text style={styles.text_next}>
              Avançar
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
  container_header:{
    top: 30,
    width: '90%',
    height: 50,
    marginBottom: 12
  },
  container_title:{
    width: '80%',
    marginTop:20,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title_view:{
    fontSize: 24,
    fontWeight: '700'
  },
  container_inputs:{
    flex: 1,
    width: '90%',
    marginTop: 32
  },
  container_name:{
    width: '100%',
    alignItems: 'center',
    marginBottom: 16
  },
  label_name_h2:{
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 16
  },
  label_name_h3:{
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 16
  },
  container_orientation:{
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 32
  },
  label_orientation_h2:{
    fontSize: 18,
    fontWeight: '500'
  },
  container_option_button:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  option_button:{
    width:'40%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  selectedOption:{
    backgroundColor: 'lightblue',
  },
  option_text:{
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  container_next:{
    width: '60%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '30%',
    marginBottom: 32
  },
  button_next:{
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text_next:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 4
  }
});
  
export default Create;
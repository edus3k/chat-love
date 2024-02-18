import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet,
View,
Text,
TouchableOpacity
} from 'react-native';

import HeaderGoBack from '@components/HeaderGoBack';
import InAge from '@components/InAge';
import InEmail from '@components/InEmail';
import InPassword from '@components/InPassword';
import ErrText from '@components/ErrText';

import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

type ParamProps = {
  name: string;
  orientation: string;
}

const UsersData = () => {

  //var name = 'EDUARDO'; // VAR DEVELOP
  const {navigate} = useNavigation();
  const {name, orientation} = useRoute().params as ParamProps;
  const [age, setAge] = useState<number|null>(null);
  const [email, setEamil] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  
  const [errAge, setErrAge] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');

  const [day, setDay] = useState<string|null>(null);
  const [month, setMonth] = useState<string|null>(null);
  const [year, setYear] = useState<string|null>(null);

  const calculateAge = () => {
    if(day && month && year != null){
      const inputDay = parseInt(day);
      const inputMonth = parseInt(month);
      const inputYear = parseInt(year);

      const birthDate = new Date(inputYear, inputMonth - 1, inputDay);
      const currentDate = new Date();
  
      const ageDiff = currentDate.getFullYear() - birthDate.getFullYear();
     
      const isBirthdayPassed =
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate());
  
      const calculatedAge = isBirthdayPassed ? ageDiff - 1 : ageDiff;
      const age = calculatedAge;
      setAge(age);
    }
  }

  const validation = ()=>{
    setErrAge('');
    setErrEmail('');
    setErrPassword('');

    if(day != null && month != null && year != null &&
      email != null && password != null ){
      calculateAge()
      if(age != null){
        navigate('UsersPhoto', {name: name, orientation: orientation, age: age, email: email, password: password})
      }
    }
    if(day == null && month == null && year == null &&
      email == null && password == null ){
      console.log('age ou email ou senha null');
      setErrAge('*Informe uma data valida');
      setErrEmail('*Email informado errado.');
      setErrPassword('*Senha informada errada.');
      return 0;
    }
    if(day == null || month == null || year == null){
      console.log('data null');
      setErrAge('*Informe uma data valida');
      return 0;
    }
    if(email == null && password == null){
      console.log('email null e password null');
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

  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <HeaderGoBack route={'Create'}/>
      </View>
      <View style={styles.container_title}>
        <Text style={styles.title_view}>
          Então {name}, nos diga mais sobre voçê.
        </Text>
      </View>
      <View style={styles.container_inputs}>
        <View style={styles.container_age}>
          <Text style={styles.label_age_h2}>
            Informe sua data de nascimento.
          </Text>
          <InAge 
            day={setDay} 
            month={setMonth} 
            year={setYear}
          />
          <ErrText err={errAge}/>
        </View>
        <View style={styles.container_login}>
          <Text style={styles.label_login_h2}>
            Agora informe sue email e uma senha.
          </Text>
          <Text style={styles.label_login_h3}>
            Email:
          </Text>
          <InEmail email={setEamil}/>
          <ErrText err={errEmail}/>
          <Text style={styles.label_login_h3}>
            Password:
          </Text>
          <InPassword password={setPassword}/>
          <ErrText err={errPassword}/>
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
    width: '90%',
    marginTop: 40,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title_view:{
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'justify'
  },
  container_inputs:{
    flex: 1,
    width: '90%',
    marginTop: 32
  },
  container_age:{
    width: '100%',
    alignItems: 'center',
    marginBottom: 16
  },
  label_age_h2:{
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 16
  },
  container_login:{
    width: '100%',
    justifyContent: 'center',
    marginBottom: 16
  },
  label_login_h2:{
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 16,
  },
  label_login_h3:{
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 10,
  },
  container_next:{
    width: '60%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '10%',
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
  
export default UsersData;
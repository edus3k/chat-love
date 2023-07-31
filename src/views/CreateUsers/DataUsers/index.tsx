import React, { useState, useRef } from 'react';
import { 
StyleSheet,
View,
Text,
} from 'react-native';
  
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

import Icon from '@assets/mascot.png';
import InName from '@components/InName';
import InAge from '@components/InAge';
import Button from '@components/Button';

import { StackTypes} from '@config/StackTypes';
import { useNavigation } from '@react-navigation/native';

const DataUsers = () => {
  
  const navigation = useNavigation<StackTypes>();
  const [name, setName] = useState(null);
  const [errName, setErrName] = useState('');
  const [errAge, setErrAge] = useState('');
  const inputRefs = [
    useRef<any>(),useRef<any>(),
    useRef<any>(),useRef<any>(),
    useRef<any>(),useRef<any>(),useRef<any>(),useRef<any>()
  ]; // Crie um array de referências para os inputs


  const goBack = ()=>{
    navigation.goBack()
  }

  const validation = ()=>{
    const inputValues = inputRefs.map((ref) => ref.current.value);
    
    if(name != null && inputValues != null){
      //navigation.navigate('DataAge',(name))
      console.log('ok');
      console.log('Dados digitados:', inputValues);
      navigation.navigate('DataDetail', (name))
    }
    if(name == null && inputValues[0] == ''){
      setErrName('*Informe seu nome.');
      setErrAge('*Informe sua idade.');
    }
    if(name == null){
      setErrName('*Informe seu nome.');
    }
    if(inputValues == null){
      setErrAge('*Informe sua idade.');
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
              <View style={styles.container_text}>
                <Text style={styles.title}>
                  Bora começar? Vamos criar seu perfi!
                </Text>
                <Text style={styles.sub_title}>
                  Qual o seu nome?
                </Text>
                <Text style={styles.label}>
                  É assim que as pessoas vão ver.
                </Text>
              </View>
              <InName
                label=''
                describe='Digite seu Nome...'
                labelColor='#000'
                backColor='#FE0364'
                in={setName}
                erro={errName}
              />
              <Text style={styles.title_age}>
                Agora informe a sua data de nascimento.
              </Text>
              <View style={styles.container_age}>
                <InAge
                  in={inputRefs}
                />
                <Text style={styles.erro}>
                  {errAge}
                </Text>
              </View>
              <View style={styles.container_buttons}>
                <Button
                text='TO BACK'
                event={goBack}
                />
                <Button
                  text='GO NEXT'
                  event={validation}
                />
              </View>
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
    flex:3,
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
  container_text:{
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  title:{
    color: '#00',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '500'
  },
  sub_title:{
    marginTop: 4,
    color: '#00',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '500'
  },
  label:{
    marginTop: 8,
    color: '#00',
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '400'
  },
  container_name:{
    width: '100%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  name:{
    width: '48%',
  },
  title_age:{
    textAlign: 'center',
    marginTop: 32,
    color: '#00',
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '700'
  },
  container_age:{
    marginTop: 18
  },
  erro:{
    color: '#FFF',
    fontStyle: 'italic',
    fontSize: 12,
    fontWeight: '200',
    marginTop: 4,
    marginStart: 26,
    marginBottom: 4
  },
  container_buttons:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginTop: '16%',
    marginStart: '4%',
    marginEnd: '4%'
  }
});
  
export default DataUsers;
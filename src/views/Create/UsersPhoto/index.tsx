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
    name: string, 
    orientation: string, 
    age: number, 
    email: string, 
    password: string
}

const UsersPhoto = () => {

  var name = 'EDUARDO'; // VAR DEVELOP
  const {navigate} = useNavigation();
  //const {name, orientation, age, email, password} = useRoute().params as ParamProps;


  const validation = ()=>{
   
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <HeaderGoBack route={'UsersData'}/>
      </View>
      <View style={styles.container_title}>
        <Text style={styles.title_view}>
          {name}, para finalizar seu registro!
        </Text>
      </View>
        <View style={styles.container_inputs}>
          <View style={styles.container_photo}>
            <Text style={styles.label_photo_h2}>
              Adicione pelomenos uma Foto.
            </Text>
            <View style={styles.grid_photo}>
              <View style={styles.photo}>

              </View>
              <View style={styles.photo}>

              </View>
            </View>
          </View>
          <View style={styles.container_next}>
              <TouchableOpacity style={styles.button_next}
              onPress={validation}>
                <Text style={styles.text_next}>
                  Registre-se
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
  container_photo:{
    width: '100%',
    alignItems: 'center',
    marginBottom: 16
  },
  label_photo_h2:{
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 16
  },
  grid_photo:{
    width: '80%',
    height: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center'
  },
  photo:{
    width: '40%',
    height: 200,
    backgroundColor: '#A4A4A4',
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
  
export default UsersPhoto;
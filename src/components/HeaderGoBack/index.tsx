import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet,
View,
Text,
Image,
TouchableOpacity
} from 'react-native';

import Back from '@assets/back.png'

import { useNavigation } from '@react-navigation/native';

export type GoBack = {
  route: any
}

const HeaderGoBack = (props:GoBack) => {
  
  const {navigate} = useNavigation();
  
  const goBack = ()=>{
    navigate(props.route);
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
            <Image source={Back} style={styles.ic_back}/>
            </TouchableOpacity>
                <Text style={styles.header_label}>
                    Chat Love
                </Text>
            <View></View>
        </View>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    width: '100%',
    top: 20,
    backgroundColor: '#FFF',
    alignItems:'center',
    justifyContent: 'center'
  },
  header:{
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header_label:{
    color: '#000'
  },
  ic_back:{
    width: 20,
    height: 20
  }
});
  
export default HeaderGoBack;
  
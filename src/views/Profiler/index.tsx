import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet,
View,
Text,
TouchableOpacity
} from 'react-native';

import HeaderGoBack from '@components/HeaderGoBack';

import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


const Profiler = () => {

  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <HeaderGoBack route={'Create'}/>
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
  }
});
  
export default Profiler;
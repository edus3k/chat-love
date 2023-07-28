import React, { useState, useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet, 
View,
Image,
ViewStyle,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import Logo from '@assets/mascot.png';

export type Loading = {
  state: boolean
}

const Loading = (props:Loading) =>{
  
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    startLoading();
  }, []);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },2000);
  };
  
  return (
    <View style={styles.container}>
      <Image source={Logo} style={
        {
          display: props.state == true ? 'flex' :  'none',
          marginTop: '72%',
          width: 64,
          height: 64
        }}
      />
      <Spinner
        visible={props.state}
        textContent={'Loading...'}
        textStyle={styles.spinner_text}
        indicatorStyle={styles.spinner}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%'
  },
  spinner:{
    marginTop: '20%'
  },
  spinner_text:{
    textAlign: 'center',
    color: '#000',
    marginTop: '20%'
  }
});

export default Loading;
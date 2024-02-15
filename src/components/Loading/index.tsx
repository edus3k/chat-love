import React from "react";
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet, 
View,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export type loading = {
  state: boolean,
}

const Loading = (props:loading) =>{
  
  /**
   * <Image source={Logo} style={
        {
          //display: loading == true ? 'flex' :  'none',
          display: loading == true ? 'none' :  'none',
          marginTop: '72%',
          width: 64,
          height: 64,
        }}
      />
   */
  
  return (
    <View style={styles.container}>
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
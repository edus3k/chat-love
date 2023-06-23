import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TextInputProps} from 'react-native';

export type Props = {
  input: any,
  password: string|undefined,
  erro: String
}

const InputPassword = (props:Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.lable}>Password</Text>
        <TextInput style={styles.input}
          placeholder='Digite sua senha...'
          keyboardType='visible-password'
          onChangeText={props.input}
          value={props.password}
        />
        <Text style={styles.text_erro}>{props.erro}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '8%',
    marginVertical: '2%'
  },
  lable:{
    color:'#FFF',
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '400',
    marginStart: 12
  },
  input:{
    backgroundColor: '#FE0364',
    color: '#000',
    borderRadius: 30,
    padding:12
  },
  text_erro:{
    color: '#FFF',
    fontSize: 14,
    fontStyle:'italic',
    fontWeight:'200',
    marginStart: 12
  }
});

export default InputPassword;
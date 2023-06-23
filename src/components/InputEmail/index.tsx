import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export type Props = {
  input: any,
  email: string|undefined,
  erro: String
}

const InputEmail = (props:Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.lable}>Email</Text>
        <TextInput style={styles.input}
          placeholder='Digite um email...'
          keyboardType='email-address'
          onChangeText={props.input}
          value={props.email}
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

export default InputEmail;

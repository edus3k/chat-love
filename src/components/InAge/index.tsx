import React, {useState, MutableRefObject } from 'react';
import {
View,
StyleSheet,
Text,
TextInput,
Image,
} from 'react-native';

export type In = {
   in: MutableRefObject<any>[],
}

const InAge = (props:In) =>{

    const handleInputChange = (text:string, index:number) => {
      if (text.length === 1 && index < props.in.length - 1) {
        props.in[index + 1].current.focus(); // Foca no próximo input ao digitar um caractere
        }
    };

    const placeholderIdex = (index:number)=>{
        if(index == 0 || index == 1){
            return 'D';
        }
        if(index == 2 || index == 3){
            return 'M';
        }
        else{
            return 'A';
        }
    }

    return(
        <View style={styles.container}>
            {props.in.map((ref, index) => (
                <TextInput
                    style={styles.inputs}
                    key={index}
                    ref={ref}
                    placeholder={placeholderIdex(index)}
                    placeholderTextColor={'#FFF'}
                    keyboardType="numeric"
                    maxLength={1}
                    onChangeText={(text) => handleInputChange(text, index)}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        marginTop: 22,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputs:{
        width: 30, 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        margin: 5, 
        textAlign: 'center',
    }
});

export default InAge;
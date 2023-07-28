import React, {useState} from 'react';
import {
View,
StyleSheet,
Text,
TextInput,
Image,
} from 'react-native';

import Arroba from '@assets/arroba.png';

export type In = {
    erro: string,
    in: ((text: string) => void ) | undefined | any,
    labelColor: string,
    backColor: string
}

const InEmail = (props:In) =>{
    
    return(
        <View style={styles.container}>
            <Text style={{
                 color: props.labelColor,
                 fontStyle: 'italic',
                 fontSize: 14,
                 fontWeight: '400',
                 marginTop: 6,
                 marginStart: 12,
                 marginBottom: 6
            }}>
                Email
            </Text>
            <View style={{
                flexDirection: 'row',
                width: '100%',
                height: 50,
                backgroundColor: props.backColor,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 32,
                padding: 2
            }}>
                <Image
                    style={styles.ic_type}
                    source={Arroba}
                />
                <TextInput
                    style={styles.inputs}
                    placeholder='Digite seu email...'
                    keyboardType='email-address'
                    onChangeText={props.in}
                />
            </View>
            <Text style={styles.erro}>
                {props.erro}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    },
    ic_type:{
        width: 18,
        height: 18,
    },
    inputs:{
        width: '84%',
        height: '100%',
        fontSize: 16,
        padding: 12
    },
    ic_visible:{
        marginTop: 4,
        width: 18,
        height: 18,
    },
    erro:{
        color: '#FFF',
        fontStyle: 'italic',
        fontSize: 12,
        fontWeight: '200',
        marginTop: 4,
        marginStart: 12,
        marginBottom: 4
    }
});

export default InEmail;
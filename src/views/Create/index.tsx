import React, { useState } from 'react';
import { 
StyleSheet,
View,
Text,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { StackTypes } from '@config/StackTypes';
import { useNavigation } from '@react-navigation/native';

import InName from '@components/InName';
import InAge from '@components/InAge';
import InEmail from '@components/InEmail';
import InPassword from '@components/InPassword';

const Create = () => {

    const navigation = useNavigation<StackTypes>();
    const [name, setName] = useState(null);
    const [email, setEamil] = useState(null);
    const [password, setPassword] = useState(null);
    const [errEmail, setErroEmail] = useState('');
    const [errName, setErroName] = useState('');
    const [errPassword, setErroPassword] = useState('');

    return (
    <View style={styles.container}>
        <LinearGradient
          style={styles.container_gradient}
          colors={['transparent', 'rgba(0,0,0,0.2)',
          'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.5)','rgba(0,0,0,0.6)',
          'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.8)']}>
            <InName
            label='Nome'
            labelColor='#FFF'
            backColor='#FFF'
            describe='Nome'
            in={setEamil}
            erro={errEmail}
            />
            <InAge
            label='Nome'
            labelColor='#FFF'
            backColor='#FFF'
            describe='Nome'
            in={setEamil}
            erro={errEmail}
            />
            <InEmail
            labelColor='#FFF'
            backColor='#FFF'
            in={setEamil}
            erro={errEmail}
            />
            <InPassword
            labelColor='#FFF'
            backColor='#FFF'
            in={setPassword}
            erro={errPassword}
            />
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
});
    
export default Create;
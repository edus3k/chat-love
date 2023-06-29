import { 
StyleSheet,
View,
Text,
ImageBackground,
TextInput,
TouchableOpacity,
Vibration,
} from 'react-native';
import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

import IconApp from '@components/IconApp';
import imageBack from '@assets/loving.png';
import { StackTypes } from '@routes/Stacks';

const RecoverUsers = () => {
    const navigation = useNavigation<StackTypes>();
    const [email, setEmail] = useState('');
    const [errEmail, setErrEmail] = useState('') //*Email informado errado.

    function recover(){
        navigation.navigate('Signin');
        console.log('Recuperando senha!');
    }

    const validation = ()=>{
        if (email == null) {
            setErrEmail('*Email informado errado.');
            Vibration.vibrate();
            return
        }
        else{
            recover();
        }
    }

    return (
    <View style={styles.container}>
      
        <ImageBackground
        style={styles.image_back}
        source={imageBack}>
        
            <LinearGradient
            style={styles.container_gradient}
            colors={['transparent', 'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.7)',
            'rgba(0,0,0,0.9)', 'rgba(0,0,0,1)']}>
            
                <Animatable.View
                style={styles.logo}
                animation={'fadeInDown'}
                delay={800}>
                    <IconApp/>
                    <Text style={styles.title}>
                        Informe seu email para recuperar sua senha
                    </Text>
                </Animatable.View>

                <Animatable.View
                animation={'fadeInUp'}
                delay={800}>
                   
                   <View style={styles.container_inputs}>
                        <Text style={styles.lable}>Email</Text>
                        <TextInput style={styles.input}
                            placeholder='Digite um email...'
                            keyboardType='email-address'
                            onChangeText={setEmail}
                            value={email}
                        />
                        <Text style={styles.text_erro}>{errEmail}</Text>
                    </View>

                    <View style={styles.container_inputs}>
                        <TouchableOpacity 
                        onPress={validation}
                        style={styles.button_recover}>
                            <Text style={styles.label_recover}>RECOVER</Text>
                        </TouchableOpacity>
                    </View>

                </Animatable.View>    
            </LinearGradient>
        </ImageBackground>
    </View>
    );
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
image_back:{
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
    alignItems: "center",
    width:'100%',
    height: 780,
},
container_gradient:{
    width: '100%',
    height: '100%'
},
title:{
    marginTop: '12%',
    marginHorizontal: '6%',
    color: '#FFF',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '600'
},
logo:{
    marginTop: '10%'
},
container_inputs:{
    marginHorizontal: '8%',
    marginVertical: '2%'
},
lable:{
    color:'#FFF',
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '400',
    marginStart: 12,
    marginTop: 14
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
},
button_recover:{
    backgroundColor: '#FE0364',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    padding: 12,
    marginTop: 12, 
    marginBottom: 12,
    marginHorizontal: '4%',
},
label_recover:{
    color:'#FFF',
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '400',
    marginStart: 14
}
});
    
export default RecoverUsers;
    
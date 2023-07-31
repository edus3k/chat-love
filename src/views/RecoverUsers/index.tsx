import React, { useState } from 'react';
import { 
StyleSheet,
View,
Text,
TouchableOpacity
} from 'react-native';
  
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

import Icon from '@assets/mascot.png';
import InEmail from '@components/InEmail';
import Button from '@components/Button';

import { StackTypes } from '@config/StackTypes';
import { useNavigation } from '@react-navigation/native';
import { sendPasswordResetEmail } from "firebase/auth";
import { Auth } from '@config/Firebase';

const RecoverUsers = () => {
  
    const navigation = useNavigation<StackTypes>();
    const [email, setEamil] = useState(null);
    const [errEmail, setErroEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            console.log('recuperendo senha...');
            navigation.navigate('Welcome');
        },2000);
    };

    const goBack = ()=>{
        navigation.goBack
    }

    const validation = ()=>{

        if(email != null ){
            const auth = Auth;
            sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                startLoading();
            })
            .catch((error) => {
                // Err Password reset email sent!
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log({erro:errorCode, errorMesg: errorMessage});
            });
        }
        if(email == null){
            console.log('email null');
            setErroEmail('*Email informado errado.');
        }
    }
  
    return (
        <View style={styles.container}>   
            <LinearGradient
                style={styles.container_gradient}
                colors={['transparent', 'rgba(0,0,0,0.3)',
                'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.7)',
                'rgba(0,0,0,0.9)', 'rgba(0,0,0,1)']}>

                <View style={styles.container_icon}>
                    <Animatable.Image
                        delay={200}
                        animation='flipInY'
                        source={Icon} 
                        style={styles.icon}
                        resizeMode='contain'
                    />
                </View>

                <Animatable.View 
                delay={400}
                animation='fadeInUpBig' 
                style={styles.container_from_data}>
                    <LinearGradient
                    style={styles.container_gradient}
                    colors={['transparent', 'rgba(0,0,0,0.3)',
                    'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.7)',
                    'rgba(0,0,0,0.9)', 'rgba(0,0,0,1)']}>
                        <View style={styles.container_data}>
                            <Text style={styles.title}>
                                Informe seu email para recuperar sua senha
                            </Text>
                            
                            <InEmail
                                labelColor='#000'
                                backColor='#FE0364'
                                in={setEamil}
                                erro={errEmail}
                            />
                        
                           <View style={styles.container_buttons}>
                                <Button
                                    text='RECOVER'
                                    event={validation}
                                />
                                <Button
                                    text='TO BACK'
                                    event={goBack}
                                />
                           </View>
                        </View>
                    </LinearGradient>
                </Animatable.View>
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
  container_icon:{
    flex:1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_from_data:{
    flex:2,
    width:'100%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#A1A1A1',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  container_data:{
    marginTop: '2%',
    marginStart: '8%',
    marginEnd: '8%',
    marginBottom: '2%'
  },
  icon:{
    width: '60%',
    height: '70%'
  },
  title:{
    marginTop: 32,
    marginBottom: 28,
    color: '#00',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '500'
  },
  container_buttons:{
    marginTop: 34,
    marginStart: '8%',
    marginEnd: '8%'
  }
});
  
export default RecoverUsers;
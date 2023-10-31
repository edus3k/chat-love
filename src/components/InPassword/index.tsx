import React, {useState} from 'react';
import {
View,
StyleSheet,
Text,
TextInput,
Image,
TouchableOpacity,
} from 'react-native';

import Force from '@assets/force.png';
import OffVisible from '@assets/off_visible.png';
import OnVisible from '@assets/on_visible.png';

export type In = {
  erro: string,
  in: ((text: string) => void ) | undefined | any,
  labelColor: string,
  backColor: string
}

const InPassword = (props:In) =>{
    
    let visible = {
        off: OffVisible,
        on: OnVisible
    }

    const [secure, setSecure] = useState(true);
    const [icSecure, setIcSecure] = useState(visible.off);

    const stateSecure = ()=>{
        if(secure == true){
            setSecure(false);
            setIcSecure(visible.on);
        }else{
            setSecure(true);
            setIcSecure(visible.off);
        }
    }

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
              Password
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
                source={Force}
            />
            <TextInput
                style={styles.inputs}
                placeholder='Digite sua senha...'
                keyboardType='visible-password'
                onChangeText={props.in}
                maxLength={8}
                secureTextEntry={secure}
            />
            <TouchableOpacity onPress={stateSecure}>
                <Image
                  style={styles.ic_visible}
                  source={icSecure}
                />
            </TouchableOpacity>
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
    },
    ic_type:{
        width: 18,
        height: 18,
    },
    inputs:{
        width: '82%',
        height: '100%',
        fontSize: 16,
        padding: 12
    },
    ic_visible:{
        margin: 2,
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

export default InPassword;
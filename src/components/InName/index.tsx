import {useState} from 'react';
import {
StyleSheet, 
View, 
TextInput, 
Text,
Image
} from "react-native";

import ic_user from '@assets/user.png';

export type Name= {
    Name: ((text: string) => void) | undefined;
}

const InName = (props: Name)=>{

    return(
        <View style={styles.container}>
            <Image style={styles.icon_user} source={ic_user}/>
            <TextInput
                style={styles.in_name}
                placeholder="Digite seu Nome"
                onChangeText={props.Name}
                keyboardType='default'
                maxLength={20}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '80%',
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FFF',
        borderBottomColor: '#000',
        borderBottomWidth: 1
    },
    icon_user:{
        width: 16,
        height: 16,
        marginEnd: 6,
        marginStart: 6,
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: "500"
    },
    in_name:{
        width: '80%',
        height: 40,
        fontSize: 18
    },
    
});

export default InName;
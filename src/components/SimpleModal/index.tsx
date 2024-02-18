import React from "react";
import {
View,
StyleSheet,
Text,
TouchableOpacity,
Dimensions 
} from "react-native";

import { useNavigation } from '@react-navigation/native';

const WIDTH = Dimensions.get("screen").width
const HEIGTH_MODAL = 150;

export type Modal ={
    close: ((bool: boolean) => void)
}

const SimpleModal = (props:Modal)=>{

    const {navigate} = useNavigation();

    const closeModal = (bool: boolean)=>{
        props.close(bool);
        navigate('Signin');
    }

    return(
        <TouchableOpacity
            disabled={true}
            style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.container_label}>
                    <Text style={styles.label_h1}>
                        Recuperação de Senha.
                    </Text>
                    <Text style={styles.label_h2}>
                        Enviamos para seu email um link, para fazer uma nova senha!
                    </Text>
                </View>
                <View style={styles.container_button}>
                    <TouchableOpacity onPress={()=> closeModal(false)}>
                        <Text style={styles.opition}>
                            OK
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:  "center"
    },
    modal:{
        width: WIDTH - 80,
        height: HEIGTH_MODAL,
        paddingTop: 10,
        backgroundColor: '#FFF',
        borderColor: '#A4A4A4',
        borderWidth: 1,
        borderRadius: 8
    },
    container_label:{
        width: '90%',
        alignSelf: "center",
    },
    label_h1:{
        fontSize: 22,
        fontWeight: "800",
        textAlign: 'center'
    },
    label_h2:{
        fontSize: 18,
        fontWeight: "400",
        textAlign: 'justify',
        marginTop: 8
    },
    container_button:{
        width: '100%',
        height: 40,
        marginTop: 10,
        marginBottom: 2
    },
    opition:{
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: "500",
        textTransform: "uppercase",
        textAlign: "center",
        color: 'blue'
    }
});

export {SimpleModal};
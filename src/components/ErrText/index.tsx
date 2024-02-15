import React from "react";
import {
StyleSheet, 
View, 
Text,
} from "react-native";

export type err = {
err: string | null
}

const ErrText = (props: err)=>{
return(
    <View style={styles.container}>
        <View style={styles.container_erro}>
            <Text style={styles.text_erro}>
                {props.err}
            </Text>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        minHeight:40
    },
    container_erro:{
        width: '90%',
        marginStart: 26,
        marginBottom: 20
    },
    text_erro:{
        color: '#ff0000',
        fontSize: 12,
        fontStyle: "italic",
        fontWeight: "400"
    },
});

export default ErrText;
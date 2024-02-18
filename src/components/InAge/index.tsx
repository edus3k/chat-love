import {
StyleSheet, 
View, 
TextInput, 
Text,
} from "react-native";

export type Age = {
    day: ((num: string) => void) | undefined;
    month: ((num: string) => void) | undefined;
    year: ((num: string) => void) | undefined;
}

const InAge = (props: Age)=>{

    return(
        <View style={styles.container}>
            <View style={styles.container_age}>
                <TextInput
                    style={styles.in}
                    placeholder="DD"
                    keyboardType="numeric"
                    onChangeText={props.day}
                    maxLength={2}
                />
                <TextInput
                    style={styles.in}
                    placeholder="MM"
                    keyboardType="numeric"
                    onChangeText={props.month}
                    maxLength={2}
                />
                <TextInput
                    style={styles.in}
                    placeholder="AAA"
                    keyboardType="numeric"
                    onChangeText={props.year}
                    maxLength={4}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
       width: '100%',
       height: 40,
       backgroundColor: '#FFF',
       justifyContent: "center",
       alignItems: "center",
       alignContent: "center",
       marginBottom: 12
    },
    container_age:{
        width: '80%',
        height: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    in:{
        width: '30%',
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderBlockColor: '#A4A4A4',
        borderBottomWidth: 1,
        margin: 6
    },
    in_day:{
        width: '33%',
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderBlockColor: '#A4A4A4',
        borderBottomWidth: 1
    },
    in_month:{
        width: '33%',
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    in_year:{
        width: '33%',
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }
});

export default InAge;
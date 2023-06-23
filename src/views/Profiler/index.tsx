import { 
StyleSheet,
View,
Text,
} from 'react-native';


const Profiler = () => {
    return (
    <View style={styles.container}>
        Profiler
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
});

export default Profiler;

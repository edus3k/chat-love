import { 
StyleSheet,
View,
Text,
} from 'react-native';


const Home = () => {
    return (
    <View style={styles.container}>
        HOME
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

export default Home;
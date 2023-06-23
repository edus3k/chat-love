import { StyleSheet, Text, View, Image} from 'react-native';

import logoApp from '@assets/mascot.png'

export type Props = {

}

const IconApp = () => {
  return (
    <View style={styles.container}>
        <Image source={logoApp} style={styles.image}/>
        <Text style={styles.name}>ChatLove</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 64,
    height: 64
  },
  name:{
    color: '#FFF',
    marginTop: '15%',
    fontSize: 26,
    fontWeight: 'bold'
  }
});

export default IconApp;

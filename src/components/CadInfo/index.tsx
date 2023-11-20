import { 
StyleSheet,
View,
Text,
Image,
} from 'react-native';



export type In = {
  text: string,
  img: object
}

const CadInfo = (props: In) => {

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={props.img}/>
      <Text style={styles.text}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 100,
    backgroundColor: '#F4F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    flexDirection: 'row',
    marginBottom: 26
  },
  img:{
    width: 64,
    height: 64,
    resizeMode: 'cover',
    position: 'relative',
    zIndex: 1,
    },
  text:{
    fontWeight: '300',
    textAlign: 'justify',
    padding: 10,
    fontSize: 18,
    marginEnd: 36,
    zIndex: 2
  }
});

export default CadInfo;

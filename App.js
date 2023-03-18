import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/favicon.png')} style={styles.image}/>
        <Text>Plazma</Text>
      </View>
      <View style={styles.middle}>
        <View style={styles.stars}>
          <Image source={require('./assets/star.png')}/>
          <Image source={require('./assets/star.png')}/>
          <Image source={require('./assets/star.png')}/>
          <Image source={require('./assets/star.png')}/>
          <Image source={require('./assets/star.png')}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>New Body & Photo Editing App</Text>
          <Text style={styles.secondText}>Reshape your body in secret for free with all-in-one Plasma’s app.</Text>
        </View>
        <View style={styles.btnContainer}>
        <ImageBackground source={require('./assets/btnbg.png')} style={styles.btn}> 
            <Text style={{marginRight:'10%',color:'white', fontSize:16,fontWeight:'700',lineHeight:22}}>Download App</Text>
            <Image source={require('./assets/apple.png')}/>
          </ImageBackground>
        </View>
        <View style={styles.mobile}>
          <Image source={require('./assets/phone.png')} style={{width:300,height:350}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  image:{
    width:36,
    height:36
  },
  header:{
    backgroundColor:'white',
    width:'100%',
    height:'8.5%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  middle:{
    width:'100%',
    flex:1,
    backgroundColor:'#FDF8FCE5',
    marginTop:20,
  },
  stars:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginLeft:115,
    marginRight:115,
  },
  text:{
    marginTop:16,
    fontSize:32,
    fontWeight:'700',
    lineHeight:40,
    textAlign:'center',
  },
  textContainer:{
    width:'70%',
    marginLeft:'15%'
  },
  secondText:{
    fontSize:14,
    fontWeight:'400',
    lineHeight:20,
    textAlign:'center',
    marginLeft:'8.5%',
    marginTop:12,
  },
  mobile:{
    display:'flex',
    alignItems:'center' 
  },
  btn:{
    width:192,
    height:48,
    borderRadius:28,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:25,
  },
  btnContainer:{
    flex:1,
    display:'flex',
    alignItems:'center'
  }
});

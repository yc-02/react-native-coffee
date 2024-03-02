import { Image, Pressable, StyleSheet, Text, View } from "react-native";
const cold = require('../../assets/coffeeMenu/cold.jpg')
const bakery = require('../../assets/bakery.jpg')
const offer = require('../../assets/HomeCard/limited.jpg')
export default function MenuScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Pressable onPress={()=>navigation.navigate('Limited Time Offer')} style={styles.pressContainer}>
            <Image style={styles.image} source={offer}/>
            <Text style={styles.text}>Limited Time Offer</Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate('Best Sellers')} style={styles.pressContainer}>
            <Image style={styles.image} source={cold}/>
            <Text style={styles.text}>Best Sellers</Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate('Cold Coffees')} style={styles.pressContainer}>
            <Image style={styles.image}source={cold}/>
            <Text style={styles.text}>Cold Coffees</Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate('Bakery')} style={styles.pressContainer}>
            <Image style={styles.image} source={bakery}/>
            <Text style={styles.text}>Bakery</Text>
        </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    gap:20,
  },
  image:{
    width:100,
    height:100,
    borderRadius:100
  },
  pressContainer:{
    flexDirection:"row",
    alignItems:"center",
    gap:20,
  },
  text:{
    fontSize:18,
    fontWeight:"bold"

  }
})
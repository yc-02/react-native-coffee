import { Button, Dimensions, Image, StyleSheet, Text, View } from "react-native";
const limited = require ("../assets/limited.jpg")
const coffeeBeans =require ("../assets/coffeeBeans.jpg")
const favorites = require ("../assets/favorites.jpg")


export default function HomeView() {


  return (
    <View style={styles.container}>
    <View style={styles.card}>
        <Image source={limited} style={styles.homeImage}/>
        <Text style={styles.text}>Limited-time offer</Text>
        <View style={styles.buttonContainer}>
        <Button title="Order Now" color="white"></Button>
        </View>
    </View>
    <View style={styles.card}>
        <Image source={favorites} style={styles.homeImage}/>
        <Text style={styles.text}>Best sellers</Text>
        <View style={styles.buttonContainer}>
        <Button title="Order Now" color="white"></Button>
        </View>
    </View>
    <View style={styles.card}>
        <Image source={coffeeBeans} style={styles.homeImage}/>
        <Text style={styles.text}>Brew at home</Text>
        <View style={styles.buttonContainer}>
        <Button title="Shop Now" color="white"></Button>
        </View>
    </View>
    </View>
  )
}
const windowHeight = Dimensions.get("window").height
const windowWidth = Dimensions.get("window").width
console.log("width",windowWidth)
console.log("height",windowHeight)

const styles=StyleSheet.create({
  container:{
    gap:20,
    flexDirection:windowWidth>700 ? "row" :"column",
    flexWrap:"wrap",
    justifyContent:"center",
    alignContent:"center"
  },
  card:{
    gap:20,
    width:windowWidth>700? "45%" : "90%",
    borderColor:"#dcdcdc",
    borderWidth:1,
    overflow:"hidden",
    borderRadius:10,
  },
  text:{
    fontWeight:"bold",
    fontSize:windowHeight > 900 ? 25 :20,
    textTransform:"uppercase",
    marginLeft:20
  },
  homeImage:{
    width:"100%",
    height:windowHeight > 900 ? 300 : 200,
  },
  buttonContainer:{
    backgroundColor:"#696969",
    alignSelf:"flex-start",
    borderRadius:30,
    marginBottom:20,
    marginLeft:20
  },

})
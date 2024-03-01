import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { HomeCardData } from "../data/HomeCardData";



export default function HomeCard() {


  return (
    <View style={styles.container}>
      {HomeCardData.map((data)=>
            <View style={styles.card} key={data.title}>
            <Image source={data.image} style={styles.homeImage}/>
            <Text style={styles.text}>{data.title}</Text>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.buttonText}>{data.buttonTitle}</Text>
            </Pressable>
        </View>
      )}
    </View>
  )
}



const windowHeight = Dimensions.get("window").height
const windowWidth = Dimensions.get("window").width

const styles=StyleSheet.create({
  container:{
    gap:20,
    flexDirection:windowWidth>700 ? "row" :"column",
    flexWrap:"wrap",
    justifyContent:"center",
    alignContent:"center",
  },
  card:{
    gap:20,
    width:windowWidth>700? "45%" : "90%",
    borderColor:"gainsboro",
    borderWidth:1,
    overflow:"hidden",
    borderRadius:10,
  },
  text:{
    fontWeight:"bold",
    fontSize:windowHeight > 900 ? 20 :15,
    textTransform:"uppercase",
    marginLeft:20
  },
  homeImage:{
    width:"100%",
    height:windowHeight > 900 ? 300 : 200,
  },
  buttonContainer:{
    backgroundColor:"dimgray",
    alignSelf:"flex-start",
    padding:10,
    borderRadius:30,
    marginBottom:20,
    marginLeft:20
  },
  buttonText:{
    color:"white",
    fontWeight:"bold",
  }

})
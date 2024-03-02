import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { HomeCardData } from "../data/HomeCardData";
import { useNavigation } from "@react-navigation/native";



export default function HomeCard() {
  const navigation = useNavigation()
  return (
      <FlatList
      data={HomeCardData}
      renderItem={({item})=>{
        return(
          <View style={styles.container}>
          <View style={styles.card} key={item.title}>
          <Image source={item.image} style={styles.homeImage}/>
          <Text style={styles.text}>{item.title}</Text>
          <Pressable style={styles.buttonContainer} onPress={()=>navigation.navigate('Order',{screen:item.screenTitle })}>
            <Text style={styles.buttonText}>{item.buttonTitle}</Text>
          </Pressable>
          </View>
          </View>
        )
      }}
      ItemSeparatorComponent={<View style={{height:20}}/>}
      />

  )
}



const windowHeight = Dimensions.get("window").height
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
  },
  card:{
    gap:20,
    width:"90%",
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
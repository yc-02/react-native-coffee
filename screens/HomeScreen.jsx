import { StyleSheet, View, Platform, ScrollView} from "react-native";
import HomeCard from "../components/HomeCard";
import HomeTop from "../components/HomeTop";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeTop/>
      <HomeCard/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      ...Platform.select({
        android:{
          paddingTop:30,
        },
      })
  
    },
  })
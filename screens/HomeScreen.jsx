import { StyleSheet, View, StatusBar,} from "react-native";
import HomeCard from "../components/HomeCard";
import * as Linking from 'expo-linking';

export default function HomeScreen() {


  return (
    <View style={styles.container}>
      <HomeCard/>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:StatusBar.currentHeight
  }
})


import {StyleSheet, StatusBar, View, Platform, ScrollView, SafeAreaView} from "react-native";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import NavTop from "./components/NavTop";



export default function App(){
  return(
    <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <StatusBar/>
      <NavTop/>
    <ScrollView style={styles.scrollcontent}>
      <HomeView/>
    </ScrollView>
      <View style={styles.navbar}>
        <Navbar/>
      </View>
    </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  safeContainer:{
    flex:1,
  },
  container:{
    flex:1,
    ...Platform.select({
      android:{
        paddingTop:30,
      },
    })

  },
  scrollcontent:{
  },
  navbar:{
    borderTopWidth:1,
    borderTopColor:"#f5f5f5"
  }
})
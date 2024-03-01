import { Dimensions, StyleSheet, Text, View } from "react-native";


export default function HomeTop() {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>all you need is coffee and a cat</Text>
    </View>
  )
}

const windowHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:"white"
    },
    text:{
        fontSize:windowHeight > 900 ? 20 :15,
        textTransform:"uppercase",
        fontWeight:"bold"
    }
})
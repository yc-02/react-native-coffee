import { Pressable, StyleSheet, Text, View } from "react-native";


import useCart from "./hooks/useCart";
import { FontAwesome5} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function CartIcon() {
    const navigation = useNavigation()
    const {items,totalCount}=useCart()
    const handlePress = ()=>{
        navigation.navigate('Order',{screen:'Cart'})
        
    }
  return (
    items.length !== 0 &&
    <View style={styles.container}>
        <Pressable onPress={handlePress}>
        <View style={styles.iconBg}>
        <FontAwesome5 name="shopping-bag" size={24} color="white"/>
        <Text style={styles.countText}>{totalCount}</Text>
        </View>
        </Pressable>
    </View>
  )
}




const styles = StyleSheet.create({
    container:{
        position:"absolute",
        bottom:100,
        right:50,
        zIndex:10
    },
    iconBg:{
        flexDirection:"row",
        gap:5,
        backgroundColor:"mediumseagreen",
        width:80,
        height:80,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
    },
    countText:{
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
        fontSize:18,

    }

})
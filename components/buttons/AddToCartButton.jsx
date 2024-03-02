
import { View, Text, Pressable, StyleSheet} from "react-native"
import useCart from "../hooks/useCart"
import * as Haptics from 'expo-haptics'

export default function AddToCartButton({addToCart}) {

    const {increase} = useCart()

    const handlePress =()=>{
        increase(addToCart)
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    }


  return (
    <View style={styles.addButtonContainer}>
    <Pressable style={({pressed})=>[styles.addButton,{backgroundColor:pressed?"mediumseagreen":"dimgray"}]} onPress={handlePress}>
        <Text style={styles.buttonText}>Add to order</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    addButtonContainer:{
        margin:20

    },
    addButton:{
        alignSelf:"center",
        padding:10,
        borderRadius:10
    },
    buttonText:{
        fontSize:15,
        fontWeight:"bold",
        color:"white"
    }
})
import { Button, Dimensions, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Cart from './Cart'
import useCart from "./hooks/useCart";
import { FontAwesome5 } from '@expo/vector-icons';

export default function CartIcon() {
    const [modalVisivle,setModalVisible]=useState(false)
    const {items,totalCount}=useCart()




    console.log(totalCount);
    const handlePress = ()=>{
        setModalVisible(!modalVisivle)
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
        <Modal visible={modalVisivle} animationType="slide"> 
            <Cart handlePress={handlePress}/>
        </Modal> 
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
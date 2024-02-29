import { Button, Dimensions, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBagShopping,faCaretDown} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import Cart from "./Cart";

export default function NavTop() {
    const [modalVisivle,setModalVisible]=useState(false)
    const handlePress = ()=>{
        setModalVisible(!modalVisivle)
    }
  return (

    <View style={styles.container}>
    <Text style={styles.text}>all you need is coffee</Text>
        <Pressable onPress={handlePress}>
        <FontAwesomeIcon icon={faBagShopping} size={25} style={styles.icons}/>
        </Pressable>
        <Modal visible={modalVisivle} animationType="slide" presentationStyle="pageSheet">
            <View style={styles.modalContainer}>
            <Pressable onPress={handlePress}>
                <FontAwesomeIcon icon={faCaretDown} size={30} style={styles.icons}/>
            </Pressable>
            <Cart/>
            </View>
        </Modal>
    </View>

  )
}

const windowHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
    container:{
        padding:20,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    icons:{
        color:"grey",
        size:25
    },
    text:{
        fontSize:windowHeight > 900 ? 25 :20,
        textTransform:"uppercase",
        fontWeight:"bold"
    }
})
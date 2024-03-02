import React, { useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, View} from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures';
import { Ionicons} from '@expo/vector-icons';



export default function SelectMilk({selectMilk,setSelectMilk}) {
    const milkOptions = ['None (No Milk)','Whole','Almond','Half & Half','Low fat','Oat']
    const [modalVisible,setModalVisible]=useState(false)

    const onSwipeDown = () => {
      setModalVisible(false);
    };
  
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    

    const handleSelect=(milk)=>{
      setSelectMilk(milk)
      setModalVisible(false)
    }



  return (
    <View style={styles.container}>
        <Pressable onPress={()=>setModalVisible(true)} style={styles.button}>
          <Text style={styles.buttonText}>{selectMilk.milk}</Text>
        <Ionicons name="chevron-down-outline" size={24} color="black"/>
        </Pressable>
      <GestureRecognizer
            style={{ flex: 1 }}
            onSwipeDown={onSwipeDown}
            config={config}
            >
            <Modal
            transparent={true}
            visible={modalVisible}
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
            >
              <Pressable
              activeOpacity={1}  
              style={{flex:1,justifyContent:"flex-end"}} 
              onPress={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                {milkOptions.map((milk)=>(
                  <Pressable key={milk} style={[styles.modalButton,selectMilk.milk === milk && {backgroundColor:"mediumseagreen"}]} onPress={()=>handleSelect({milk})}>
                  <Text style={[{fontWeight:"bold"},selectMilk.milk === milk && {color:"white"}]}>{milk}</Text>
                </Pressable>
                ))}
                </View> 
                </Pressable>            
            </Modal>
          </GestureRecognizer>
    </View>

  )
}

const styles= StyleSheet.create({
  container:{
    padding:20,
    borderBottomWidth:1,
    borderBottomColor:"gainsboro",

  },
  button:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  buttonText:{
    fontWeight:"bold",
    fontSize:17
  },
  modalContainer:{
    height:"auto",
    width:"100%",
    backgroundColor:"whitesmoke",
    paddingBottom:20,
  },
  modalButton:{
    width:"100%",
    borderBottomWidth:1,
    borderColor:"gainsboro",
    alignItems:"center",
    justifyContent:"center",
    padding:25,

  }
})
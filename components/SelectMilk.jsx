import { useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, View} from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures';
import { Ionicons} from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';



export default function SelectMilk({selectMilk,setSelectMilk}) {
    const {colors}=useTheme()
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
          <Text style={[styles.buttonText,{color:colors.text}]}>{selectMilk.milk}</Text>
        <Ionicons name="chevron-down-outline" size={24} color={colors.text}/>
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
                <View style={[styles.modalContainer,{backgroundColor:colors.card}]}>
                {milkOptions.map((milk)=>(
                  <Pressable key={milk} style={[styles.modalButton,selectMilk.milk === milk && {backgroundColor:"mediumseagreen"}]} onPress={()=>handleSelect({milk})}>
                  <Text style={[{fontWeight:"bold",color:colors.text},selectMilk.milk === milk && {color:"white"}]}>{milk}</Text>
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
    paddingVertical:20,
    alignItems:"center",
    gap:5,
  },
  modalButton:{
    width:"50%",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    padding:20,

  }
})
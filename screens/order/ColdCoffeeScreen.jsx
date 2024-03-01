import { Image, Modal, Pressable,ScrollView, StyleSheet, Text, View} from 'react-native'
import { MenuData } from '../../data/MenuData'
import { useState } from 'react'
import MenuDetails from '../../components/MenuDetails'
import { AntDesign } from '@expo/vector-icons';

export default function ColdCoffeeScreen() {
    const [modalVisible,setModalVisible]=useState(false)
    const [data,setData]=useState()
    const handlePress = (menu)=>{
        setModalVisible(!modalVisible)
        setData(menu)
    }


  return (
    <View>
    <ScrollView>
        <View style={styles.container}>
        {MenuData.map((menu)=>(
            <Pressable key={menu.name} onPress={()=>handlePress(menu)}>
            <View style={styles.card}>
                <Image source={menu.image} style={styles.menuImage}/>
                <Text style={styles.text}>{menu.name}</Text>
            </View>
            </Pressable>
        ))}
        </View>
        {/* Menu details */}
        <Modal visible={modalVisible} animationType="slide" presentationStyle="pageSheet">
        <View style={styles.modalView}>
            <Pressable onPress={()=>setModalVisible(false)} style={styles.modalClose}>
                <AntDesign name="close" size={27} color="black"/>
            </Pressable>
            <MenuDetails data={data}/>
        </View>
        </Modal>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        gap:20
    },
    card:{
        flexDirection:"row",
        alignItems:"center",

    },
    menuImage:{
        height:100,
        width:100,
        borderRadius:50
    },
    text:{
        fontWeight:"bold",
        fontSize:15,
        textTransform:"capitalize",
        marginLeft:20
    },
    modalView:{
        flex:1,
        padding:20,

    },
    modalClose:{
        alignSelf:"flex-end"
    },
})
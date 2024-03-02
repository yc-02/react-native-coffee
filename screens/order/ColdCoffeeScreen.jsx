import { Dimensions, Modal, Pressable, StyleSheet,View} from 'react-native'
import { CoffeeMenuData } from '../../data/CoffeeMenuData'
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';
import CoffeeMenuDetails from '../../components/CoffeeMenuDetails';
import MenuCards from '../../components/MenuCards';


export default function ColdCoffeeScreen() {
    const windowHeight = Dimensions.get("window").height
    const [modalVisible,setModalVisible]=useState(false)
    const [data,setData]=useState()
    const handlePress = (menu)=>{
        setModalVisible(!modalVisible)
        setData(menu)
    }

  return (
    <View style={styles.container}>
    <MenuCards MenuData={CoffeeMenuData} handlePress={handlePress}/>
        
    {/* Menu details */}
    <Modal visible={modalVisible} animationType="slide" presentationStyle={windowHeight<900?"pageSheet":"fullScreen"}>
        <SafeAreaView/>
        <View style={styles.modalView}>
        <Pressable onPress={()=>setModalVisible(false)} style={styles.modalClose}>
            <AntDesign name="close" size={27} color="black"/>
        </Pressable>
        <CoffeeMenuDetails data={data}/>
    </View>
    </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    modalView:{
        flex:1,
        padding:20,
    
    },
    modalClose:{
        alignSelf:"flex-end"
    },
    })
    
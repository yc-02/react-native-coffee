import { StyleSheet,View} from 'react-native'
import MenuCards from '../../components/MenuCards';
import { MenuData } from '../../data/MenuData';




export default function ColdCoffeeScreen({navigation}) {

    const handlePress = (item)=>{
        navigation.navigate('Order',{screen:'DrinkDetails',params:{data:item,title:item.name}},)

    }


  return (
    
    <View style={styles.container}>
    <MenuCards MenuData={MenuData[0].coldCoffees} handlePress={handlePress}/>
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
    
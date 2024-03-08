import { StyleSheet,View} from 'react-native'
import MenuCards from '../../components/MenuCards';
import { MenuData } from '../../data/MenuData';


export default function OfferScreen({navigation}) {
 

    const handlePress = (item)=>{
        navigation.navigate('Order',{screen:'BakeryDetails',params:{data:item,title:item.name}},)
    }

    const offerData = MenuData[1].bakery.filter(a=>a.name === "Iced Americano (M) + Strawberry Cake Slice" )

return (
  <View style={styles.container}>
  <MenuCards MenuData={offerData} handlePress={handlePress}/>
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
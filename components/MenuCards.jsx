import { useTheme } from '@react-navigation/native'
import { FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native'



export default function MenuCards({MenuData,handlePress}) {

const {colors} = useTheme()

  return (
    <View style={styles.container}>
        <FlatList
        data={MenuData}
        renderItem={({item})=>{
        return(
            <Pressable key={item.name} onPress={()=>handlePress(item)}>
            <View style={styles.card}>
                <Image source={item.image} style={styles.menuImage}/>
                <View style={{width:"60%"}}>
                <Text style={[styles.text,{color:colors.text}]} numberOfLines={3}>{item.name}</Text>
                </View>
            </View>
            </Pressable>         
        )
        }}
        ItemSeparatorComponent={<View style={{height:20}}/>}
        />


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

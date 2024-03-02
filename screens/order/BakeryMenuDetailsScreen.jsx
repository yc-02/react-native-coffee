
import {Image, StyleSheet, Text, View } from 'react-native'
import AddToCartButton from '../../components/buttons/AddToCartButton';



export default function BakeryMenuDetails({route}) {
    const {data}=route.params
  
    const addToCart ={
        name:data.name,
        price:data.sizePrice["N/A"],
        image:data.image,
        size:"N/A",
        qty:0
    }


  return (
    <View style={styles.container}>
        <View style={styles.item}>
        <Image source={data.image} style={styles.image}/>
        <View style={{width:"50%", gap:20}}>
        <Text style={styles.itemText} numberOfLines={3}>{data.name}</Text>
        <Text style={{fontSize:15}}>$ {(data.sizePrice["N/A"]).toFixed(2)}</Text>
        </View>
        </View>

        {/* add to cart */}
        <AddToCartButton addToCart={addToCart}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:20
    },
    item:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:"gainsboro",
        gap:20,
        padding:10,
    },
    itemText:{
        fontWeight:"bold",
        fontSize:17,

    },
    image:{
        width:150,
        height:150,
        borderRadius:75,
    }
})
import {Image, StyleSheet, Text, View } from 'react-native'
import AddToCartButton from '../../components/buttons/AddToCartButton';
import { useTheme } from '@react-navigation/native';
import { MenuData } from '../../data/MenuData';



export default function BakeryMenuDetails({route}) {
    const {colors} = useTheme()

    const {title}=route.params
    const decodeTitle = decodeURIComponent(title)
    const data = MenuData[1].bakery.filter(b=>b.name === decodeTitle)[0]



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
        <View style={{width:"50%"}}>
        <Image source={data.image} style={styles.image}/>
        </View>
        <View style={{width:"40%", gap:20}}>
        <Text style={[styles.itemText,{color:colors.text}]} numberOfLines={3}>{data.name}</Text>
        <Text style={{fontSize:15,color:colors.text}}>$ {(data.sizePrice["N/A"]).toFixed(2)}</Text>
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
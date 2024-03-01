import React, { useState } from 'react'
import {Image, Pressable, StyleSheet, Text, View } from 'react-native'
import SelectMilk from './SelectMilk';
import AddToCartButton from './AddToCartButton';
import CartIcon from './CartIcon';



export default function MenuDetails({data}) {
    const [selectSize,setSelectSize]=useState({"size":"M"})
    const [selectMilk,setSelectMilk]=useState({"milk": "None (No Milk)"})
    const sizes =['S','M','L']
  
    const addToCart ={
        name:data.name,
        size:selectSize?.size,
        price:data.price,
        image:data.image,
        milk:selectMilk.milk,
        qty:0
    }


  return (
    <View style={styles.container}>
        <View style={styles.item}>
        <Image source={data.image} style={styles.image}/>
        <View style={{width:"50%"}}>
        <Text style={styles.itemText} numberOfLines={2}>{data.name}</Text>
        </View>
        </View>
        {/* select size */}
        <View style={styles.sizeContainer}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Size</Text>
            <View style={styles.sizeItems}>
                {sizes.map((size)=>(
                     <Pressable
                     key={size}  
                     style={[styles.sizeButton,selectSize.size === size && styles.selectedSizeButton]}
                     onPress={() => setSelectSize({size})}>
                         <Text  style={[styles.sizeText,selectSize.size === size && {color:"white"}]}>{size}</Text>
                     </Pressable>
                ))}
            </View>
        </View>
        {/* select milk */}
        <SelectMilk setSelectMilk={setSelectMilk} selectMilk={selectMilk}/>
        {/* add to cart */}
        <AddToCartButton addToCart={addToCart}/>
        <CartIcon/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    item:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:"gainsboro",
        padding:10,
        gap:20
    },
    itemText:{
        fontWeight:"bold",
        fontSize:17,

    },
    image:{
        width:150,
        height:150,
        borderRadius:75,
    },
    sizeContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"baseline",
        padding:20,
        borderBottomWidth:1,
        borderBottomColor:"gainsboro",

    },
    sizeText:{
        fontSize:15,
        fontWeight:"bold"

    },
    sizeItems:{
        flexDirection:"row",
        gap:20
    },
    sizeButton:{
        padding:10,
        borderRadius:10,
        backgroundColor:"lightgray"

    },
    selectedSizeButton:{
        backgroundColor:"mediumseagreen",
    },
})
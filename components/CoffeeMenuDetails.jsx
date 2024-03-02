import React, { useState } from 'react'
import {Image, StyleSheet, Text, View } from 'react-native'
import SelectMilk from './SelectMilk';

import CartIcon from './CartIcon';
import SelectSize from './SelectSize';
import AddToCartButton from './buttons/AddToCartButton';



export default function CoffeeMenuDetails({data}) {
    const [selectSize,setSelectSize]=useState({"size":"M"})
    const [selectMilk,setSelectMilk]=useState({"milk": "None (No Milk)"})

    const addToCart ={
        name:data.name,
        size:selectSize?.size,
        price:data.sizePrice[selectSize?.size],
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
        <SelectSize setSelectSize={setSelectSize} selectSize={selectSize}/>
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
    }
})
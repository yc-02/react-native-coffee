import React, { useState } from 'react'
import {Image, StyleSheet, Text, View } from 'react-native'
import CartIcon from './CartIcon';
import AddToCartButton from './buttons/AddToCartButton';



export default function BakeryMenuDetails({data}) {

  
    const addToCart ={
        name:data.name,
        price:data.price,
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
        <Text style={{fontSize:15}}>$ {(data.price).toFixed(2)}</Text>
        </View>
        </View>

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
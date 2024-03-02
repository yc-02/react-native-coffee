import { Dimensions, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, Vibration, View } from "react-native"
import useCart from "../components/hooks/useCart"
import * as Haptics from 'expo-haptics';
import {AntDesign} from '@expo/vector-icons';



export default function Cart() {
  const {items,totalPrice,tax,subTotal,increase,decrease}=useCart()
  const windowHeight = Dimensions.get("window").height
  const scrollViewHeight = Math.min(items.length * 200, windowHeight * 0.55)

  const handleIncrease=(item)=>{
    increase(item)
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }
  const handleDecrease=(item)=>{
    decrease(item)
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }

  return (
    <View>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Orders</Text>
        </View>
        <FlatList
        style={{borderBottomWidth:1,borderBottomColor:"gainsboro",height:scrollViewHeight}}
        data={items}
        renderItem={({item})=>{
          return(
            <View style={styles.itemView} key={item.name+item.size}>
            <View style={{width:"30%"}}>
            <Image source={item.image} style={styles.image}/>
            </View>
            <View style={{width:"40%",gap:10}}>
                <Text style={{fontSize:18,fontWeight:"bold"}} numberOfLines={4}>{item.name}</Text>
                <View>
                <Text style={{fontSize:15,color:"dimgray"}}>Size: {item.size}</Text>
                <Text style={{fontSize:15,color:"dimgray"}}>{item.milk}</Text>
                </View>
              <View style={styles.addQtyView}>
                  <Pressable onPress={()=>handleDecrease(item)}>
                  <AntDesign name="minussquareo" size={23} color="dimgray" />
                  </Pressable>
                    <Text style={{fontSize:18,color:"dimgray",textAlign:"center"}}>{item.qty}</Text>
                  <Pressable onPress={()=>handleIncrease(item)}>
                  <AntDesign name="plussquareo" size={23} color="dimgray"/>
                  </Pressable>
              </View>
            </View>
            <View style={{width:"30%"}}>
              <Text style={{fontWeight:"bold",fontSize:15,}}>$ {(item.price*item.qty).toFixed(2)}</Text>
            </View>
          </View>
          )
        }}
        />
          <View style={styles.priceContainer}>
            <View style={styles.priceItems}>
              <Text style={styles.priceText}>Subtotal</Text>
              <Text style={styles.priceText}>Tax</Text>
              <Text style={{fontSize:18,fontWeight:"bold"}}>Total</Text>
            </View>
            <View style={styles.priceItems}>
              <Text style={styles.priceText}>$ {subTotal.toFixed(2)}</Text>
              <Text style={styles.priceText}>$ {tax.toFixed(2)}</Text>
              <Text style={{fontSize:18,fontWeight:"bold"}}>$ {totalPrice.toFixed(2)}</Text>
            </View>
          </View>
          <Pressable style={({pressed})=>[styles.placeOrderButton,{backgroundColor:pressed?"mediumseagreen":"dimgray"}]}>
            <Text style={styles.buttonText}>Place Order</Text>
          </Pressable>
      </View>
  )
}


const styles = StyleSheet.create({

  titleContainer:{
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:"gainsboro"
  },
  title:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:20,
  },
  itemView:{
    padding:20,
    flexDirection:"row",
    alignItems:"flex-start",
    gap:20,
  },
  image:{
      width:100,
      height:100,
      borderRadius:10,
  },
  addQtyView:{
    flexDirection:"row",
    gap:10,
    alignItems:"center"
  },
  priceContainer:{
    padding:20,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  priceItems:{
    gap:5
  },
  priceText:{
    color:"dimgray",
  },
  placeOrderButton:{
    padding:10,
    borderRadius:10,
    alignSelf:"center"
  },
  buttonText:{
    color:"white",
    fontWeight:"bold"
  },

})


import { FlatList, Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native"
import useCart from "../../components/hooks/useCart"
import * as Haptics from 'expo-haptics';
import {AntDesign} from '@expo/vector-icons';
import { useTheme } from "@react-navigation/native";



export default function CartScreen() {
  const {colors} = useTheme()
  const {items,totalPrice,tax,subTotal,increase,decrease}=useCart()
  const windowHeight = useWindowDimensions().height
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
      {items.length===0?(
      <View style={{padding:30}}>
        <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold",color:"dimgray"}}>No items Found.</Text>
      </View> ):(
          <>
                <FlatList
                style={{borderBottomWidth:1,borderBottomColor:"gainsboro",height:scrollViewHeight}}
                data={items}
                renderItem={({item})=>{
                  return(
                    <View style={styles.itemView} key={item.name+item.size}>
                    <View style={{flexDirection:"row",gap:20}}>
                    <Image source={item.image} style={styles.image}/>
                    <View style={{width:"50%",gap:10}}>
                        <Text style={{fontSize:18,fontWeight:"bold",color:colors.text}} numberOfLines={4}>{item.name}</Text>
                        <Text style={{fontSize:15,color:"dimgray"}}>Size: {item.size}</Text>
                        <Text style={{fontSize:15,color:"dimgray"}}>{item.milk}</Text>
                      <View style={styles.addQtyView}>
                          <Pressable onPress={()=>handleDecrease(item)}>
                          <AntDesign name="minussquareo" size={25} color="dimgray" />
                          </Pressable>
                            <Text style={{fontSize:18,color:"dimgray",textAlign:"center"}}>{item.qty}</Text>
                          <Pressable onPress={()=>handleIncrease(item)}>
                          <AntDesign name="plussquareo" size={25} color="dimgray"/>
                          </Pressable>
                      </View>
                    </View>
                    </View>
                    <View>
                      <Text style={{fontWeight:"bold",fontSize:15,color:colors.text}}>$ {(item.price*item.qty).toFixed(2)}</Text>
                    </View>
                  </View>
                  )
                }}
                />
                  <View style={styles.priceContainer}>
                    <View style={styles.priceItems}>
                      <Text style={styles.priceText}>Subtotal</Text>
                      <Text style={styles.priceText}>Tax</Text>
                      <Text style={{fontSize:18,fontWeight:"bold",color:colors.text}}>Total</Text>
                    </View>
                    <View style={styles.priceItems}>
                      <Text style={styles.priceText}>$ {subTotal.toFixed(2)}</Text>
                      <Text style={styles.priceText}>$ {tax.toFixed(2)}</Text>
                      <Text style={{fontSize:18,fontWeight:"bold",color:colors.text}}>$ {totalPrice.toFixed(2)}</Text>
                    </View>
                  </View>
                  <Pressable style={({pressed})=>[styles.placeOrderButton,{backgroundColor:pressed?"mediumseagreen":"dimgray"}]}>
                    <Text style={styles.buttonText}>Place Order</Text>
                  </Pressable>
            </>
      )}

      </View>
  )
}


const styles = StyleSheet.create({

  itemView:{
    padding:20,
    flexDirection:"row",
    alignItems:"flex-start",
    justifyContent:"space-between"
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


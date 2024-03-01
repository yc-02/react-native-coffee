import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import useCart from "./hooks/useCart";
import { AntDesign } from '@expo/vector-icons';


export default function Cart({handlePress}) {
  const {items,totalCount,totalPrice,increase}=useCart()


  const windowHeight = Dimensions.get("window").height
  const scrollViewHeight = Math.min(items.length * 130, windowHeight * 0.55);

  return (
    <View style={styles.container}>
        <Pressable style={{alignSelf:"flex-end"}} onPress={handlePress}>
          <AntDesign name="close" size={27} color="black"/>
        </Pressable>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Orders</Text>
        </View>
        <ScrollView style={{borderBottomWidth:1,borderBottomColor:"gainsboro",height:scrollViewHeight}}>
          {items?.map((item)=>(
            <View style={styles.itemView} key={item.name+item.size}>
              <Image source={item.image} style={styles.image}/>
              <View style={{width:"50%"}}>
                <Text style={{fontSize:18,fontWeight:"bold"}} numberOfLines={3}>{item.name}</Text>
                <Text>Size: {item.size}</Text>
                <Text>{item.milk}</Text>
                <View style={styles.addQtyView}>
                <Pressable><Text>-</Text></Pressable>
                <Text>{item.qty}</Text>
                <Pressable><Text>+</Text></Pressable>
                </View>
              </View>
              <View>
                <Text>$ {item.price*item.qty}</Text>
              </View>
            </View>

          ))}
          </ScrollView>
          <View style={styles.priceContainer}>
            <View style={styles.priceItems}>
              <Text style={styles.priceText}>Subtotal</Text>
              <Text style={styles.priceText}>Tax</Text>
              <Text style={{fontSize:18}}>Total</Text>
            </View>
            <View style={styles.priceItems}>
              <Text style={styles.priceText}>$ {totalPrice}</Text>
              <Text style={styles.priceText}>$ {(totalPrice*0.0625).toFixed(2)}</Text>
              <Text style={{fontSize:18}}>$ {(totalPrice+totalPrice*0.0625).toFixed(2)}</Text>
            </View>
          </View>
          <Pressable style={({pressed})=>[styles.placeOrderButton,{backgroundColor:pressed?"mediumseagreen":"dimgray"}]}>
            <Text style={styles.buttonText}>Place Order</Text>
          </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    marginVertical:80,
    marginHorizontal:10,
  },
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
    alignItems:"center",
    gap:20,
  },
  image:{
      width:80,
      height:80,
      borderRadius:40,
  },
  addQtyView:{
    flexDirection:"row",
    alignItems:"center"
  },
  priceContainer:{
    padding:20,
    flexDirection:"row",
    justifyContent:"space-between"
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
  }

})


import { View, Text, Pressable, StyleSheet } from "react-native";

export default function SelectSize({setSelectSize,selectSize}) {
    const sizes =['S','M','L']
  return (
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
  )
}

const styles =StyleSheet.create({
    sizeContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"baseline",
        padding:20,
        borderBottomWidth:1,
        borderBottomColor:"gainsboro",

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
    sizeText:{
        fontSize:15,
        fontWeight:"bold"

    },

})
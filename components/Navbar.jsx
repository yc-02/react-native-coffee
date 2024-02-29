import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCoffee,faHome,faGift,faUser} from "@fortawesome/free-solid-svg-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";


export default function Navbar () {
  return (
    <View style={styles.container}>

            <Pressable style={styles.navButtons}>
            <FontAwesomeIcon icon={faHome} size={25} style={styles.icons}/>
            <Text style={styles.navText}>Home</Text>
            </Pressable>

            <Pressable style={styles.navButtons}>
            <FontAwesomeIcon icon={faCoffee} size={25} style={styles.icons}/>
            <Text style={styles.navText}>Order</Text>
            </Pressable>

            <Pressable style={styles.navButtons}>
            <FontAwesomeIcon icon={faGift} size={25} style={styles.icons}/>
            <Text style={styles.navText}>Gift</Text>
            </Pressable>

            <Pressable style={styles.navButtons}>
            <FontAwesomeIcon icon={faUser} size={25} style={styles.icons}/>
            <Text style={styles.navText}>Account</Text>
            </Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:20,
        paddingTop:20,
        width:"100%",
    },
    navButtons:{
        textAlign:"center",
        alignItems:"center",
        gap:5,
    },
    navText:{
        fontSize:12,
        color:"grey",
    },
    icons:{
        color:"grey",
    }
})

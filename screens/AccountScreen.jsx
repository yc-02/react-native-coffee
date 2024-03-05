import { useTheme } from '@react-navigation/native'
import {Pressable, StyleSheet,Text, TextInput, View,} from 'react-native'




export default function AccountScreen() {
  const {colors} = useTheme()

  return (
    <View style={styles.container}>

        <TextInput style={[styles.input,{color:colors.text}]} 
        placeholder='Email' 
        keyboardType='email-address' 
        autoCorrect={false} 
        autoCapitalize='none'/>
        <TextInput style={[styles.input,{color:colors.text}]} placeholder='Password' secureTextEntry/>
        <Pressable>
          <Text style={{color:colors.text}}>Sign in</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
  },
  input:{
    height:50,
    borderBottomWidth:1,
    borderBottomColor:"dimgray",
    fontSize:18,
  },
  
})

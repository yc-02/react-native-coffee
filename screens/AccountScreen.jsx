
import { View,} from 'react-native'
import SigninForm from '../components/SigninForm'




export default function AccountScreen() {
  

  return (
    <View style={styles.container}>
      <SigninForm/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    gap:10,
  },

  
})

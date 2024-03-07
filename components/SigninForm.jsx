import { useTheme } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import {KeyboardAvoidingView, Pressable, StyleSheet,Text, TextInput, View,} from 'react-native'


export default function SigninForm() {

    const {colors} = useTheme()
    const {control,handleSubmit,formState:{errors}} = useForm()
    const onSubmit = data =>console.log(data)
  return (
    <KeyboardAvoidingView>
    <View style={[styles.container,{backgroundColor:colors.primary}]}>
    <Controller 
    control={control}
    rules={{required:true}}
    render={({field:{onChange,onBlur,value}})=>(
    <TextInput style={[styles.input,{color:colors.text,borderBottomColor:colors.border}]} 
    placeholder='Email' 
    onBlur={onBlur}
    onChangeText={onChange}
    value={value}
    keyboardType='email-address' 
    autoCorrect={false} 
    autoCapitalize='none'
    placeholderTextColor={colors.text}
    />
    )}
    name='email'
    />
    {errors.email && <Text style={{color:colors.notification}}>This is required.</Text>}
    <Controller 
    control={control}
    rules={{required:true}}
    render={({field:{onChange,onBlur,value}})=>(
    <TextInput  style={[styles.input,{color:colors.text,borderBottomColor:colors.border}]}
    onBlur={onBlur}
    onChangeText={onChange}
    value={value}
    placeholder='Password' 
    secureTextEntry 
    placeholderTextColor={colors.text}
    />
    )}
    name='password'
    />
    {errors.password && <Text style={{color:colors.notification}}>This is required.</Text>}


    <Pressable 
    style={({pressed})=>[styles.signinButton,{borderColor:colors.border},
    {backgroundColor:pressed?"mediumseagreen":"dimgray"}]}
    onPress={handleSubmit(onSubmit)}
    >
      <Text style={{color:"white",fontWeight:"bold",fontSize:18}}>Sign in</Text>
    </Pressable>
</View>
</KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        gap:15,
        borderRadius:10,

    },
    input:{
      height:50,
      borderBottomWidth:1,
      fontSize:18,
    },
    signinButton:{
      padding:10,
      backgroundColor:'gainsboro',
      alignSelf:"flex-start",
      borderRadius:10,
      borderWidth:1,
    }
    
  })
  
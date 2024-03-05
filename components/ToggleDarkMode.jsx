import { useCallback, useContext, useEffect } from "react";
import { Switch, View, useColorScheme, Text} from "react-native";
import { DarkMode } from "../utils/darkMode";
import { useTheme } from "@react-navigation/native";


export default function ToggleDarkMode() {
    const {colors} = useTheme()
    const {isDarkMode,setIsDarkMode,isDeviceDark,setIsDeviceDark}= useContext(DarkMode)
    const scheme = useColorScheme()
    const currentTheme = isDarkMode?'dark':'light'
    const toggleDarkMode = useCallback(()=>{
        setIsDarkMode(!isDarkMode)
    },[isDarkMode,isDeviceDark,scheme])
    useEffect(()=>{
        if(currentTheme!==scheme){
            setIsDeviceDark(false)
        }
    },[isDarkMode,isDeviceDark])
    const handleDeviceDark =()=>{
        setIsDeviceDark(!isDeviceDark)
        if(scheme === 'dark'){
            setIsDarkMode(true)
        }else{
            setIsDarkMode(false)
        }
    }
  return (
   <View style={{gap:20,backgroundColor:colors.card,padding:20,borderRadius:10}}>
    <View style={{borderBottomWidth:1,borderBottomColor:'lightgray',paddingVertical:10}}>
    <Text style={{color:colors.text,fontSize:18,fontWeight:"bold"}}>Theme</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:"center", justifyContent:"space-between"}}>
        <Text style={{color:colors.text,fontSize:15}}>Automatic</Text>
        <Switch value={isDeviceDark} onChange={handleDeviceDark} trackColor={{true:"mediumseagreen"}}/>
    </View>
    <View style={{flexDirection:'row',alignItems:"center", justifyContent:"space-between"}}>
        <Text style={{color:colors.text,fontSize:15}}>Dark Mode</Text>
        <Switch value={isDarkMode} onChange={toggleDarkMode} trackColor={{true:"mediumseagreen"}}/>
   </View>
   </View>
  )
}

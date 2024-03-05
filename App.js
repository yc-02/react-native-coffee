import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import HomeScreen from "./screens/HomeScreen";
import GiftScreen from "./screens/GiftScreen";
import AccountScreen from "./screens/AccountScreen";
import { Appearance,} from "react-native";
import CartIcon from "./components/CartIcon";
import OrderScreen from "./screens/order/OrderScreen";
import { useEffect, useState } from "react";
import {MyDarkTheme, MyDefaultTheme} from './utils/MyTheme.jsx'
import MyStatusBar from "./components/MyStatusBar.jsx";
import { DarkMode } from "./utils/darkMode.js";
import SettingScreen from "./screens/SettingScreen.jsx";




const Tab = createBottomTabNavigator()

export default function App(){

  const [colorScheme, setColorScheme] = useState(
    Appearance.getColorScheme(),
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

const [isDarkMode,setIsDarkMode] = useState(false)
const [isDeviceDark,setIsDeviceDark] = useState(colorScheme === 'dark')
 
  return(
    <DarkMode.Provider value={{isDarkMode,setIsDarkMode,isDeviceDark,setIsDeviceDark}}>
    <NavigationContainer theme={isDarkMode? MyDarkTheme:MyDefaultTheme}>
      <MyStatusBar/>
      <CartIcon/>
      <Tab.Navigator 
      screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          if(route.name==='Home'){
            iconName = focused ? 'home':'home'
          }else if(route.name === 'Order'){
            iconName = focused ?'coffee':'coffee'
          }else if(route.name === 'Gift'){
            iconName = focused ?'gift':'gift'
          }else if(route.name === 'Account'){
            iconName = focused?'user':'user'
          }else if(route.name === 'Setting'){
            iconName = focused? 'settings':'settings'
          }
          return <Feather name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor:'mediumseagreen',
        tabBarInactiveTintColor:"dimgray",
        headerShown:false,
        tabBarStyle:{
          backgroundColor:isDarkMode? MyDarkTheme.colors.tabBarBackground : MyDefaultTheme.colors.background,
          borderTopWidth:1,
          borderTopColor:isDarkMode? MyDarkTheme.colors.tabBarBackground : MyDefaultTheme.colors.border,
          paddingTop:10,
        },
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Order" component={OrderScreen}/>
        <Tab.Screen name="Gift" component={GiftScreen}/>
        <Tab.Screen name="Account" component={AccountScreen}/>
        <Tab.Screen name="Setting" component={SettingScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
    </DarkMode.Provider>

  )

}


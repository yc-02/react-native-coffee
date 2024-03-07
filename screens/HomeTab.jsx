
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen.jsx';
import OrderScreen from './order/OrderScreen.jsx';
import GiftScreen from './GiftScreen.jsx';
import AccountScreen from './AccountScreen.jsx';
import SettingScreen from './SettingScreen.jsx';
import { useContext } from 'react';
import { DarkMode } from '../utils/darkMode.js';
import { MyDarkTheme, MyDefaultTheme } from '../utils/MyTheme.jsx';

const Tab = createBottomTabNavigator()
export default function HomeTab() {

    const {isDarkMode}= useContext(DarkMode)

  return (
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
  )
}

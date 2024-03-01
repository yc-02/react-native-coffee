import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import HomeScreen from "./screens/HomeScreen";
import GiftScreen from "./screens/GiftScreen";
import AccountScreen from "./screens/AccountScreen";
import { SafeAreaView } from "react-native";
import MenuScreen from "./screens/order/ColdCoffeeScreen";
import CartIcon from "./components/CartIcon";
import OrderScreen from "./screens/order/OrderScreen";




const Tab = createBottomTabNavigator()


export default function App(){
  return(
    <NavigationContainer>
      <SafeAreaView/>
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
          }
          return <Feather name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor:'mediumseagreen',
        tabBarInactiveTintColor:"dimgray",
        headerShown:false,
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Order" component={OrderScreen}/>
        <Tab.Screen name="Gift" component={GiftScreen}/>
        <Tab.Screen name="Account" component={AccountScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )

}


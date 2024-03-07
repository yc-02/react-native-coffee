import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './MenuScreen';
import ColdCoffeeScreen from './ColdCoffeeScreen';
import BakeryScreen from './BakeryScreen';
import OfferScreen from './OfferScreen';
import BakeryMenuDetails from './BakeryMenuDetailsScreen';
import DrinkMenuDetails from './DrinkMenuDetailsScreen';
import CartScreen from './CartScreen';
import { useTheme } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function OrderScreen() {

  const {colors} = useTheme()
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor:"dimgrey",
      headerBackTitleVisible:false,
      headerShadowVisible:true,
      headerStyle:{
        backgroundColor:colors.background,
      }
      }} initialRouteName='Menu'>
    <Stack.Screen name="Menu" component={MenuScreen} />
    <Stack.Screen name="Cold" component={ColdCoffeeScreen} options={{title:"Cold Coffees"}}/>
    <Stack.Screen name="Bakery" component={BakeryScreen}/>
    <Stack.Screen name="Limited" component={OfferScreen} options={{title:"Limited Time Offer"}}/>
    <Stack.Screen name="Best" component={ColdCoffeeScreen} options={{title:"Best Sellers"}}/>

  <Stack.Screen name="DrinkDetails" component={DrinkMenuDetails} 
  options={({route}) => ({
    title: decodeURIComponent(route.params.title),
  })}/>
  <Stack.Screen name="BakeryDetails" component={BakeryMenuDetails} 
  options={({route}) => ({
    title: decodeURIComponent(route.params.title),
  })}/>

  <Stack.Screen name="Cart" component={CartScreen} options={{presentation:"modal"}}/>
  </Stack.Navigator>
  )
}

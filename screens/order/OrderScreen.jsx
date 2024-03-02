import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './MenuScreen';
import ColdCoffeeScreen from './ColdCoffeeScreen';
import Cart from '../Cart';
import BakeryScreen from './BakeryScreen';
import OfferScreen from './OfferScreen';



const Stack = createNativeStackNavigator();

export default function OrderScreen() {
  return (
    <Stack.Navigator screenOptions={{headerTintColor:"dimgrey"}}>
    <Stack.Screen name="Menu" component={MenuScreen} />
    <Stack.Screen name="Cold Coffees" component={ColdCoffeeScreen}/>
    <Stack.Screen name="Bakery" component={BakeryScreen}/>
    <Stack.Screen name="Cart" component={Cart}/>
    <Stack.Screen name="Limited Time Offer" component={OfferScreen}/>
    <Stack.Screen name="Best Sellers" component={ColdCoffeeScreen}/>
  </Stack.Navigator>
  )
}

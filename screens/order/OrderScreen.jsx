import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './MenuScreen';
import ColdCoffeeScreen from './ColdCoffeeScreen';


const Stack = createNativeStackNavigator();

export default function OrderScreen() {
  return (
    <Stack.Navigator screenOptions={{headerTintColor:"dimgrey"}}>
    <Stack.Screen name="Menu" component={MenuScreen} />
    <Stack.Screen name="Cold Coffees" component={ColdCoffeeScreen}/>
  </Stack.Navigator>
  )
}

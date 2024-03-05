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
    <Stack.Screen name="Cold Coffees" component={ColdCoffeeScreen}/>
    <Stack.Screen name="Bakery" component={BakeryScreen}/>
    <Stack.Screen name="Limited Time Offer" component={OfferScreen}/>
    <Stack.Screen name="Best Sellers" component={ColdCoffeeScreen}/>
    <Stack.Group
  screenOptions={({ route}) => ({
    title: route.params.title,
  })}
>
  <Stack.Screen name="Drink Details" component={DrinkMenuDetails}/>
  <Stack.Screen name="Bakery Details" component={BakeryMenuDetails}/>
</Stack.Group>
<Stack.Group
  screenOptions={{
    presentation: "modal",
    
  }}>
<Stack.Screen name="Cart" component={CartScreen}/>
</Stack.Group>
  </Stack.Navigator>
  )
}

import { NavigationContainer} from "@react-navigation/native";
import { Appearance} from "react-native";
import CartIcon from "./components/CartIcon";
import { useEffect, useState } from "react";
import {MyDarkTheme, MyDefaultTheme} from './utils/MyTheme.jsx'
import MyStatusBar from "./components/MyStatusBar.jsx";
import { DarkMode } from "./utils/darkMode.js";
import HomeTab from "./screens/HomeTab.jsx";
import * as Linking from 'expo-linking';



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





const config={
  screens:{
    Home:'home',
    Order:{
      path:'order',
      screens:{
        Cold:'cold',
        Bakery:'bakery',
        Limited:'limited',
        Best:'best',
        DrinkDetails:{
          path:'drink-details/:title',
        }
      }
    },
    Gift:'gift',
    Account:"account",
    Setting:'setting',
    NotFound:'*'
  },
}

const linking ={
  prefixes:['mycoffee://',Linking.createURL('/'),],
  config
  }



  return(
    <DarkMode.Provider value={{isDarkMode,setIsDarkMode,isDeviceDark,setIsDeviceDark}}>
    <NavigationContainer
    linking={linking}
    theme={isDarkMode? MyDarkTheme:MyDefaultTheme}>
      <MyStatusBar/>
      <HomeTab/>
      <CartIcon/>
    </NavigationContainer>
    </DarkMode.Provider>

  )

}


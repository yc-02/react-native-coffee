import React from 'react'
import { Button, Text, View } from 'react-native'
import * as Linking from 'expo-linking';



export default function GiftScreen() {
const url = Linking.useURL()
console.log("gift",url)


  return (
    <View>
      <Text>gift screen</Text>
          
    </View>
  )
}

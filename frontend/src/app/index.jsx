import { View, Text, Button, } from 'react-native'
import{router} from "expo-router"
import React from 'react'

export default function Index() {
  return (
    <View style={{ padding: 110 }}>
      <Text>Vice City Motors</Text>

      <Button title='registrate' onPress={() => router.replace("/auth/registro")} />
      <Button title='Login' onPress={() => router.replace("/auth/login")}/>
    </View>
  );
}


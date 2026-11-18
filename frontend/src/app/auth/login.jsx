import { View, Text,TextInput,Button,Alert} from 'react-native'
import { guardarToken } from '../../services/auth.storage.js'
import { login } from '../../services/auth.services.js'
import { router } from "expo-router"
import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    async function handleLogin() {
         if (!email || !password) {
           Alert.alert("error", "faltan campos por llenar");
           return;
         }
        
      try {
        const datos = await login({
          email,
          password,
        });

        await guardarToken(datos.token);

        Alert.alert("Login bien", "continue", [{ text: "continuar", onPress: () => router.replace("/vehiculos") }]);
      } catch (error) {
        console.log(error.response.data);
      }
    }


  return (
    <View style={{padding:110}}>
          <Text>Logueate</Text>
          
          <Text>Email</Text>
          <TextInput placeholder='digite su email...' value={email} onChangeText={setEmail} />

          <Text>Password</Text>
          <TextInput placeholder='digite su password' value={password} onChangeText={setPassword} secureTextEntry />

          <Button title='iniciar sesion' onPress={handleLogin} />
          <Button title='volver a registro' onPress={() => router.replace("/auth/registro")}/>
    </View>
  )
}
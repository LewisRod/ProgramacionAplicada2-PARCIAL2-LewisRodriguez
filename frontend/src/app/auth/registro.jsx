import { View, Text,TextInput,Button,Alert} from 'react-native'
import { router } from "expo-router"
import { registrarUsuario } from '../../services/auth.services.js'
import { useState } from 'react'

export default function registro() {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    async function handleRegistro() {
        if (!nombre || !email || !password) {
            Alert.alert("error", "faltan campos por llenar");
            return;
        }
        try {
            await registrarUsuario({ nombre, email, password })
            Alert.alert("registro completo", "usuario registrado bien", [{ text: "continuar", onPress: () => router.replace("/auth/login") }])
            
        } catch (error) {
            Alert.alert("error", "no se pudo registrar el usuario",error.response.data)
            console.log(error.response.data)
        }
    }


  return (
    <View style={{padding:110}}>
          <Text>registro</Text>
          
          <Text>Nombre</Text>
          <TextInput placeholder='digite su nombre...' value={nombre} onChangeText={setNombre} />
          
          <Text>Email</Text>
          <TextInput placeholder='digite su email..' value={email} onChangeText={setEmail} />

          <Text>Contrasena</Text>
          <TextInput placeholder='digite su contrasena' value={password} onChangeText={setPassword} secureTextEntry />

          <Button title='registrar' onPress={handleRegistro} />
          <Button title='ir a login' onPress={() => router.replace("/auth/login")}/>
    </View>
  )
}
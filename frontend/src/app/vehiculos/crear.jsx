import { View, Text, TextInput, Alert, Button } from 'react-native'
import { useState } from 'react'
import { router } from "expo-router"
import { crearVehiculo } from "../../services/vehiculos.services.js"

export default function Crear() {
  const [marca, setMarca] = useState("")
  const [modelo, setModelo] = useState("")
  const [anio, setAnio] = useState("")
  const [estado, setEstado] = useState("")
  const [precio, setPrecio] = useState("")

  async function handleCrear() {
    try {
      await crearVehiculo({
        marca,
        modelo,
        anio,
        precio,
        estado
      })

      Alert.alert("Vehiculo creado bien"," se creo correctamente", [{ text: "Continuar", onPress: () => router.replace("/vehiculos") }])
    } catch (error) {
      console.log(error.response.data)
      Alert.alert("Error", "no se creo el vehiculo")
    } 
  }

  return (
    <View style={{ padding: 110 }}>
      <Text>Crear</Text>

      <Text>marca</Text>
      <TextInput placeholder="digite la marca" value={marca} onChangeText={setMarca} />

      <Text>modelo</Text>
      <TextInput placeholder="digite el modelo" value={modelo} onChangeText={setModelo} />

      <Text>anio</Text>
      <TextInput
        placeholder="digite el anio..."
        value={anio}
        onChangeText={setAnio}
      />

      <Text>estado</Text>
      <TextInput placeholder="digite el estado" value={estado} onChangeText={setEstado} />

      <Text>precio</Text>
      <TextInput
        placeholder="digite el precio"
        value={precio}
        onChangeText={setPrecio}
      />

      <Button title= "Crear" onPress={handleCrear}/>
      <Button title="volver a vehiculos" onPress={() => router.replace("/vehiculos")} />
    </View>
  )
}
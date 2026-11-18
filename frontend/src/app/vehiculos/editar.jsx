import { useState, useEffect } from "react";
import { View, Text, TextInput, Alert,Button } from 'react-native'
import { actualizarVehiculo, buscarVehiculo } from "../../services/vehiculos.services.js";
import { router, useLocalSearchParams } from "expo-router";


export default function editar() {
    const {id} = useLocalSearchParams()
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [anio, setAnio] = useState("");
    const [estado, setEstado] = useState("");
    const [precio, setPrecio] = useState("");
    
    useEffect(() => {
        async function cargarVehiculo() {
            const vehiculo = await buscarVehiculo(id)

            setMarca(vehiculo.marca);
            setModelo(vehiculo.modelo);
            setAnio(vehiculo.anio);
            setEstado(vehiculo.estado);
            setPrecio(vehiculo.precio);
        }  
        cargarVehiculo()
    }, [id])
    
    async function handleActualizar() {

        try {
            await actualizarVehiculo(id, {
                marca,
                modelo,
                anio,
                precio,
                estado
            });

            Alert.alert(
                "vehiculo actualizado",
                "actualizado correctamente",
                [{ text: "continue", onPress: () => router.replace("/vehiculos") }]
            );
        } catch (error) {
           console.log(error.response.data)
            Alert.alert("Error", mensaje);
        }
    }

 
  return (
    <View>
      <Text>Editar vehiculo</Text>

      <Text>marca</Text>
      <TextInput
        placeholder="digite la marca"
        value={marca}
        onChangeText={setMarca}
      />

      <Text>modelo</Text>
      <TextInput
        placeholder="digite el modelo"
        value={modelo}
        onChangeText={setModelo}
      />

      <Text>anio</Text>
      <TextInput
        placeholder="digite el anio..."
        value={anio}
        onChangeText={setAnio}
      />

      <Text>estado</Text>
      <TextInput
        placeholder="digite el estado"
        value={estado}
        onChangeText={setEstado}
      />

      <Text>precio</Text>
      <TextInput
        placeholder="digite el precio"
        value={precio}
        onChangeText={setPrecio}
      />

      <Button title="actualizar" onPress={handleActualizar}/>
    </View>
  );
}
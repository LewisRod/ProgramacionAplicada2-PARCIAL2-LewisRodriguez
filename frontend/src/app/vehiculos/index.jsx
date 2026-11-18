import { View, Text, FlatList, Button } from 'react-native'
import { listarVehiculos,eliminarVehiculo } from '../../services/vehiculos.services.js'
import { useState, useCallback } from 'react'
import{router,useFocusEffect} from "expo-router"
import React from 'react'

export default function index() {
  const [vehiculos, setVehiculos] = useState([])

  useFocusEffect(
    useCallback(() => {
    cargarVehiculos()
    },[])
  )
  
  async function cargarVehiculos() {
    const vehiculos = await listarVehiculos()
    setVehiculos(vehiculos)
  }

  async function handleEliminar(id) {
    await eliminarVehiculo(id)
    cargarVehiculos()
  }
  
  return (
    <View style={{padding:110}}>
      <Text>Lista de vehiculos</Text>

      <FlatList
        data={vehiculos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{padding:110}}>
            <Text>{item.marca}</Text>
            <Text>{item.modelo}</Text>
            <Text>{item.anio}</Text>
            <Text>{item.precio}</Text>
            <Text>{item.estado}</Text>
            <Button title='eliminar' onPress={() => handleEliminar(item.id)} />
            <Button title='actualizar' onPress={() => router.replace(`/vehiculos/editar?id=${id}`)}/>
          </View>
        )}
      />

      <Button title='ir a crear' onPress={() => router.replace("/vehiculos/crear")}/>
    </View>
  );
}
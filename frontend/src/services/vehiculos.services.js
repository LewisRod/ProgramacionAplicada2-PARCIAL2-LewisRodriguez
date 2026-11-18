import api from "./api.js"

export async function crearVehiculo(datos) {
    const respuesta = await api.post("/vehiculos", datos)
    return respuesta.data
}

export async function listarVehiculos() {
    const respuesta = await api.get("/vehiculos")
    return respuesta.data
}

export async function misVehiculos() {
    const respuesta = await api.get("/vehiculos?estado=disponible");
    return respuesta.data
}

export async function actualizarVehiculo(id,datos) {
    const respuesta = await api.put(`/vehiculos/${id}`, datos)
    return respuesta.data
}

export async function buscarVehiculo(id) {
    const respuesta = await api.get(`/vehiculos/${id}`)
    return respuesta.data
}


export async function eliminarVehiculo(id) {
    const respuesta = await api.delete(`/vehiculos/${id}`)
    return respuesta.data
}
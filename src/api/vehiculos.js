import axios from './axios.js';

export const getVehiculosRequest = () => axios.get('/Vehiculos')

export const getVehiculoRequest = (id) => axios.get(`/Vehiculo/${id}`)

export const createVehiculoRequest = (vehiculo) => axios.post('/Vehiculos', vehiculo)

export const updateVehiculoRequest = (id, vehiculo) => axios.put(`/Vehiculo/${id}`, vehiculo)

export const deleteVehiculoRequest = (id) => axios.delete(`/Vehiculo/${id}`)

export const getVehRequest = (clase) => axios.get(`/Vehiculos/${clase}`)

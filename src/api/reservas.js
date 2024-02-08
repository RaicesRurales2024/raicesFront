import axios from './axios.js';

export const getReservasRequest = () => axios.get('/Reservas')

export const getReservaRequest = (id) => axios.get(`/Reserva/${id}`)

import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:3001',
    //baseURL: 'https://raicesrurales.onrender.com',
    withCredentials:true,
    
})

export default instance

import axios from 'axios'

const instance = axios.create({
    //baseURL:'http://localhost:3001',
    baseURL: 'https://reliable-raindrop-840fbf.netlify.app',
    
    withCredentials:true,
    
})

export default instance

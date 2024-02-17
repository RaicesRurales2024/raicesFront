import axios from 'axios'

const instance = axios.create({
    //baseURL:'http://localhost:3001',
    baseURL: 'https://app.netlify.com/teams/raicesrurales2024/builds/65d066e91a487475f881a77d',
    
    withCredentials:true,
    
})

export default instance

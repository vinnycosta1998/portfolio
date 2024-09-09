import axios from 'axios'

const baseURL = 'http://localhost:3000/api/send'

export const api = axios.create({
    baseURL,
    headers:{
        'Content-Type': 'application/json'
    }
})
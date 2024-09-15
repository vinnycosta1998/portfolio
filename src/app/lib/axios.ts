import axios from 'axios'

const baseURL = 'http://viniciuscostadealmeida98.vercel.app/api/send'

export const api = axios.create({
    baseURL,
    headers:{
        'Content-Type': 'application/json'
    }
})
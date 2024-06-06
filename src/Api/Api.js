import axios from "axios";

const apiClient=axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

export const callhelloApi=()=>apiClient.get('/hello')

export const registerNewUser=(register)=>apiClient.post(`/register/${register.userName}`,register)

export const retrieveUser=(username)=>apiClient.get(`/findByUsername/${username}`)
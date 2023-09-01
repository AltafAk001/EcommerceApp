import axios from "axios"

export const Registration = async (payload) => {
    return await axios.post(`${process.env.API_URL}/auth/register`, payload)
}

export const Login = async (payload) => {
    return await axios.post(`${process.env.API_URL}/auth/login`, payload)
}
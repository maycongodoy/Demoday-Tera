import axios from 'axios'

const baseURL = 'https://api-tera-shop.vercel.app'


export const api = axios.create({
    baseURL
})

//export const httpDelete=(path, config={ }) => axios.delete(`${baseURL}${path}`, config)

//buscar user por ID pega o caminho e as configuracoes 
export const userById=(path, config={ }) => axios.get(`${baseURL}${path}`, config)

//delete user por id
export const deleteUSer=(path, config={ }) => axios.delete(`${baseURL}${path}`, config)

 
import axios from 'axios'

const baseURL = 'https://back-end-demoday.vercel.app'
//const baseURL = "http://localhost:4000"

export const createUser = axios.create({baseURL})

//export const httpDelete=(path, config={ }) => axios.delete(`${baseURL}${path}`, config)

//buscar user por ID pega o caminho e as configuracoes 
export const getUserById=(path, config={ }) => axios.get(`${baseURL}${path}`, config)

export const putUserById=(path, config={ }) => axios.put(`${baseURL}${path}`, config)

export const upUserById=(path, config={ }) => axios.updade(`${baseURL}${path}`, config)


//delete user por id
export const deleteUSer=(path, config={ }) => axios.delete(`${baseURL}${path}`, config)

 
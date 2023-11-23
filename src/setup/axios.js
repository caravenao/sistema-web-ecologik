import axios from 'axios'
import { useSessionStore } from '../stores/session'

var api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
  }
})

const attachAccessToken = (config) => {
  const sessionStore = useSessionStore()
  const accessToken = sessionStore.accessToken
  console.log(config)

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
}

const handleResponse = (response) => {
  return response
}

const handleError = (error) => {
  if (error.response) {
    console.log(error.response)
    if (!error.response.data.msg) {
      error.response.data.msg = 'Error en el servidor no identificado'
    }
    if (!error.response.data.errors) {
      error.response.data.errors = [['Error en el servidor no identificado']]
    }
    if (error.response.status === 401) {
      //const sessionStore = useSessionStore()
      //sessionStore.destroy()
      console.log('no autorizado')
    }
  } else if (error.request) {
    error.msg = 'Sin respuesta del servidor'
    error.errors = [['Sin respuesta del servidor']]
  } else {
    error.msg = 'Error del cliente, comuniquese con el administrador'
    error.errors = [['Error del cliente, comuniquese con el administrador']]
  }

  return Promise.reject(error)
}

api.interceptors.request.use(attachAccessToken, (error) => Promise.reject(error))
api.interceptors.response.use(handleResponse, handleError)

export default api
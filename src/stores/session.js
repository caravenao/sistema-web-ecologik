import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import api from '../setup/axios'

export const useSessionStore = defineStore('session', {
  state: () => ({
    accessToken: useLocalStorage('session/accessToken', null),
    refreshToken: useLocalStorage('session/refreshToken', null),
    userData: useLocalStorage('session/userData', null),
    accountValidated: useLocalStorage('session/accountValidated', false),
    refreshTimeOut: null,
  }),
  actions: {
    addProduct(newProduct) {
      this.products.push(newProduct);
    },
  
    removeProduct(productId) {
      this.products = this.products.filter(product => product.id !== productId);
    },
    setAccountValidated(validated) {
      this.accountValidated = validated
    },
    setTokens({ accessToken, refreshToken }) {
      
      const { exp, sessionUserData: userData } = JSON.parse(window.atob(accessToken.split('.')[1]))
      
      this.accessToken = accessToken
      this.refreshToken = refreshToken
      this.userData = userData
      
      const now = new Date()
      const msToExp = exp * 1000 - now.getTime()
      
      const refreshDelay = msToExp / 10
      
      console.log('msToExp', msToExp)
      console.log('refreshDelay', refreshDelay)
      console.log('userData', this.userData)
      
      this.refreshTimeOut = setTimeout(() => {
        this.refreshTokens()
      }, refreshDelay)
    },
    async refreshTokens() {
      if (!this.refreshToken) return
    
      try {
        const response = await api.post('refresh-token', {
          refreshToken: this.refreshToken
        })
    
        // Si la solicitud se realizó con éxito, actualiza los tokens
        this.setTokens(response.data.tokens)
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Error 401, no autorizado
          // Borra los datos del sessionStore
          this.accessToken = null
          this.refreshToken = null
          this.userData = null
          if(this.refreshTimeOut){
            clearTimeout(this.refreshTimeOut)
          }
        } else {
          // Maneja otros errores si es necesario
          console.error('Error en la actualización de tokens:', error)
        }
      }
    },
    
    async destroy(){
      await api.post('close-session', {
        refreshToken: this.refreshToken
      }).then(({data})=>{
        console.log(data.msg)
        this.accessToken = null
        this.refreshToken = null
        this.userData = null
      })
      if(this.refreshTimeOut){
        clearTimeout(this.refreshTimeOut)
      }
    },
  },
  getters : {
    isLogged: (state) => {
      return !!state.accessToken && !!state.refreshToken && !!state.userData
    },
    isValidated: (state) => {
      return !!state.accountValidated && !!state.userData
    }
  }
})
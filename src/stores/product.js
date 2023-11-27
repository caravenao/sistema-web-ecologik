import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import api from '../setup/axios'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: useLocalStorage('products/products', []),
    importantProducts: useLocalStorage('products/importantProducts', []),
    cart: useLocalStorage('products/cart', []),
  }),
  actions: {
    async fetchImportantProductsFromDB() {
      await api.get('product')
        .then((response) => {
          const allProducts = response.data.allProducts
          // Ahora, guarda solo los primeros 4 productos en this.products
          this.importantProducts = allProducts.slice(0, 4)
          console.log(this.importantProducts)
        })
        .catch((error) => {
          console.error('Error al obtener productos:', error)
        })
    },
    async fetchProductsFromDB(){
      await api.get('product')
        .then(( response ) => {
          this.products = response.data.allProducts
          console.log(this.products)
        })
        .catch((error) => {
          console.error('Error al obtener productos:', error)
        })
    },
    addProductToCart(product, counter) {
      const productInCartIndex = this.cart.findIndex(item => item.id === product.id)
    
      if (productInCartIndex !== -1) {
        // Si el producto ya está en el carrito, actualiza la cantidad
        this.cart[productInCartIndex].quantity += counter
      } else {
        // Si el producto no está en el carrito, agrégalo
        this.cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: counter,
        })
      }
    
      // Actualiza el carrito en el store
      this.cart = [...this.cart]
      console.log(this.cart)
    },
    removeProductFromCart(product) {
      const productIndex = this.cart.findIndex(item => item.id === product.id)
      this.cart.splice(productIndex, 1)
      // Actualiza el carrito en elstore
      this.cart = [...this.cart]
    },

    incrementCounter(item) {
      const productIndex = this.cart.findIndex((p) => p.id === item.id)
      if (productIndex !== -1) {
        this.cart[productIndex].quantity += 1
        this.cart = [...this.cart]
      }
    },
    decrementCounter(item) {
      const productIndex = this.cart.findIndex((p) => p.id === item.id)
      if (productIndex !== -1 && this.cart[productIndex].quantity > 1) {
        this.cart[productIndex].quantity -= 1
        this.cart = [...this.cart]
      }
    },
    updateQuantity(item, quantity) {
      quantity = parseInt(quantity, 10);
      if (quantity && quantity > 0) {
        item.quantity = quantity;
        // Aquí, también puedes llamar a un método para actualizar el estado global del carrito si es necesario.
      }
    },
    calculateTotal() {
      return this.cart.reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0)
    }}
})
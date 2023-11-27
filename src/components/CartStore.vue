<template>
    <div class="cart-container py-5">
      <div class="container">
        <h2 class="text-center mb-4">Carrito</h2>
        <div v-if="productStore.cart.length > 0">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in productStore.cart" :key="item.id">
                  <td><button @click="removeProductFromCart(item)" class="btn btn-danger">X</button></td>
                  <td>{{ item.name }}</td>
                  <td>${{ item.price }}</td>
                  <td>
                    <input type="number" class="form-control quantity-input" min="1" :value="item.quantity" @input="updateQuantity(item, $event.target.value)">
                  </td>
                  <td>${{ item.price * item.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="cart-summary">
            <h5>Total del carrito</h5>
            <p>Subtotal: ${{ calculateTotal() }}</p>
            <p>Total: ${{ calculateTotal() }}</p>
            <button class="btn btn-success">Finalizar compra</button>
          </div>
        </div>
        <div v-else>
          <p>Tu carrito está vacío.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '../stores/product';
  
  export default {
    name: 'CartStore',
    setup() {
      const productStore = useProductStore();
      return {
        productStore,
        removeProductFromCart: productStore.removeProductFromCart,
        updateQuantity: productStore.updateQuantity, // Asegúrate de que este método exista en tu store
        calculateTotal: productStore.calculateTotal,
      };
    },
    methods: {
      // Si necesitas métodos adicionales, añádelos aquí
    }
  };
  </script>
  
  <style scoped>
  .cart-container {
    background-color: #f8f9fa;
  }
  
  .table {
    margin-bottom: 2rem;
  }
  
  .btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  
  .btn-danger:hover {
    background-color: #c82333;
    border-color: #bd2130;
  }
  
  .cart-summary {
    text-align: right;
  }
  
  .btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  }
  
  .btn-success:hover {
    background-color: #218838;
    border-color: #1e7e34;
  }
  
  .quantity-input {
    width: 60px; /* Ajusta esto según tus necesidades */
    margin-right: 10px; /* Espacio a la derecha del input */
    margin-left: 10px; /* Espacio a la izquierda del input */
    text-align: center;
  }
  
  @media (max-width: 768px) {
    .coupon-area {
      flex-direction: column;
    }
  }
  </style>
  
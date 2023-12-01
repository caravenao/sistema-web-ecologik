<template>
  <nav class="navbar navbar-expand-lg bg-white container">
    <div class="container-fluid">
      <router-link to="/home" class="navbar-brand">
        <img src="../assets/img/Ecologik-logo.jpg" alt="logo" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <router-link to="/home" class="nav-link">
            <li class="nav-item">
            Inicio
            </li>
          </router-link>
          <router-link to="/compost" class="nav-link">
            <li class="nav-item">
            Compostaje
            </li>
          </router-link>
          <router-link to="/notices" class="nav-link">
            <li class="nav-item">
            Noticias
            </li>
          </router-link>
          <router-link to="/about-us" class="nav-link">
            <li class="nav-item">
            Nosotros
            </li>
          </router-link>
          <router-link to="/store" class="nav-link">
            <li class="nav-item">
            Tienda
            </li>
          </router-link>
          <router-link to="/service" class="nav-link">
          <li class="nav-item">
            Planes
          </li>
          </router-link>
        </ul>
        <div class="d-flex"> <!-- Contenedor flex para los iconos -->
          <a class="nav-link" href="#">
            <router-link :to="buttonIsLogged">
              <img class="navbar-icon" src="../assets/img/_user_icon.png" alt="icono user" />
            </router-link>
          </a>
          <a class="nav-link" href="#">
            <router-link to="/cart">
              <img class="navbar-icon" src="../assets/img/shopping_cart.png" alt="carrito de compra" />
              <span v-if="totalCartItems > 0" class="cart-item-count">{{ totalCartItems }}</span>
            </router-link>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-item {
  margin-right: 20px; /* Añade un margen a la derecha de cada ítem de navegación */
}

.nav-item:last-child {
  margin-right: 0; /* Remueve el margen derecho del último ítem para mantener el alineamiento correcto */
}

.nav-link {
  margin-right: 20px; /* Añade un margen a la derecha de cada enlace de navegación (incluyendo los iconos) */
}

.d-flex > a:last-child {
  margin-right: 0; /* Remueve el margen derecho del último ícono para mantener el alineamiento correcto */
}

.navbar-icon {
  max-height: 30px; /* Establece un alto máximo para los íconos */
  width: auto; /* Asegura que la relación de aspecto se mantenga */
}

@media (min-width: 992px) {
  .d-flex {
    margin-left: auto; /* Empuja el contenedor de íconos a la derecha en pantallas grandes */
  }
}

.cart-item-count {
    position: absolute;
    top: -5px; /* Ajusta según sea necesario */
    right: -10px; /* Ajusta según sea necesario */
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
  }

  .nav-link {
    position: relative;
    /* Otros estilos necesarios para el enlace */
  }
</style>

<script>
import { useSessionStore } from '../stores/session'
import { useProductStore } from '../stores/product' // Ajusta la ruta según la estructura de tu proyecto

export default {
  name: 'NavBar',
  data() {
    return {
      // Your data properties go here
    }
  },
  computed: {
    // Your methods go here
    buttonIsLogged(){
      if(this.sessionStore.isLogged == false){
        return '/login'
      }else {
        return '/profile'
      }
    },
    totalCartItems() {
      const productStore = useProductStore()
      return productStore.cart.reduce((total, item) => total + item.quantity, 0)
    }
  },
    setup(){
      const sessionStore = useSessionStore()
      return {
        sessionStore,
      }
  }
}
</script>
<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterEc from './components/FooterEc.vue'
import { useSessionStore } from './stores/session';

export default {
  name: 'App',
  components: {
    RouterView,
    NavBar,
    FooterEc
  },
  setup() {
    const sessionStore = useSessionStore();
    sessionStore.refreshTokens();
  },
  computed: {
    mostrarComponente() {
      // Retorna 'true' si la ruta actual NO comienza con '/admin'
      return !this.$route.path.startsWith('/admin');
    }
  }
}
</script>

<template>
  <header>
    <div>
      <NavBar v-if="mostrarComponente" />
    </div>
  </header>
    <RouterView />
  <footer>
    <FooterEc v-if="mostrarComponente" />
  </footer>
</template>

<style scoped>
 
</style>

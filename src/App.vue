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
  }
}
</script>

<template>
  <header>
    <div>
      <NavBar />
    </div>
  </header>
  <RouterView />
  <footer>
    <FooterEc />
  </footer>
</template>

<style scoped>
 
</style>

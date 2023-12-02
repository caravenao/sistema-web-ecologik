<template>
    <section class="compost-section">
      <div class="container text-center py-5">
        <h1 class="title">¡Mira lo que hemos logrado entre todos!</h1>
        <div class="stats-container mt-4">
          <div class="stats-card">
            <h2 class="stats-value">{{compost.totalOrganicWaste}}Kg</h2>
            <p class="stats-description">De residuos reciclados</p>
          </div>
  
          <div class="transformation-indicator">
            <span class="transform-text">Transformados a</span>
            <svg class="transform-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path d="M21 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 18L21 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
  
          <div class="stats-card">
            <h2 class="stats-value">{{compost.humusGenerated}}Kg</h2>
            <p class="stats-description">De fertilizante generado</p>
          </div>
        </div>
      </div>

      <div class="container text-center py-5" v-if="sessionStore.userData">
        <h2 class="title">¡Y esto es lo que tú haz aportado!</h2>
        <div class="stats-container mt-4">
          <div class="stats-card">
            <h2 class="stats-value">{{ sessionStore.userData.totalOrganicWaste }}Kg</h2>
            <p class="stats-description">De residuos reciclados</p>
          </div>
  
          <div class="transformation-indicator">
            <span class="transform-text">Transformados a</span>
            <svg class="transform-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path d="M21 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 18L21 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
  
          <div class="stats-card">
            <h2 class="stats-value">{{ sessionStore.userData.humusGenerated }}Kg</h2>
            <p class="stats-description">De fertilizante generado</p>
          </div>
        </div>
      </div>
  
      <div class="composting-rules py-5">
        <h2 class="rules-title">¿Qué sí y qué no compostamos?</h2>
        <div class="compost-list-container row">
          <div class="compost-list col-md-6">
            <div class="list-card">
              <h3 class="list-title positive text-center">Sí Compostamos</h3>
              <ul class="list-items positive">
                <li>Restos de frutas y verduras</li>
                <li>Restos de comida</li>
                <li>Restos de té, café o mate</li>
                <li>Cáscara de huevo</li>
                <li>Servilletas</li>
                <li>Palos de fósforos o sushi</li>
                <li>Papel, cartones</li>
              </ul>
            </div>
          </div>
          <div class="compost-list col-md-6">
            <div class="list-card">
              <h3 class="list-title negative list-title-right text-center">No Compostamos</h3>
              <ul class="list-items negative">
                <li>Carnes, huesos, espinas ni</li>
                <li>Conchas de cualquier tipo</li>
                <li>Productos químicos</li>
                <li>Metales</li>
                <li>Plásticos de cualquier tipo</li>
                <li>Vidrios</li>
                <li>Envases Tetrapak</li>
                <li>Colillas de cigarro</li>
                <li>Fecas de animales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>  

<script>
      import { useSessionStore } from '../stores/session';

    export default {
      name: 'CompostSection',
      data() {
        return {
          compost: {},
        };
      },
      setup() {
        const sessionStore = useSessionStore();
        return {
          sessionStore
        }
      },
      mounted() {
        this.fetchCompost();
      },
      methods: {
      async fetchCompost() {
        try {
          const response = await this.$api.get('/compost');
          if (response.status === 200) {
            this.compost = response.data.compost;
          }
        } catch (error) {
          console.error('Error al obtener los detalles del compostaje:', error);
        }
      },
    },
    };
</script>
  

<style scoped>
.compost-section {
  background-color: #86BB8C;
  color: #fff;
}

.title {
  font-weight: bold;
  margin-bottom: 1rem;
}

.stats-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.stats-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  min-width: 200px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.stats-value {
  color: #2D721C;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stats-description {
  color: #2D721C;
  font-size: 1rem;
}

.transformation-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: #fff;
}

.transform-text {
  font-size: 1.5rem;
  margin: 0 1rem;
}

.transform-icon {
  height: 30px;
  color: #fff;
}

.composting-rules {
  background-color:#fff;
  color: #333;
}

.rules-title {
  text-align: center;
  font-size: 2.2rem;
  color: #333;
  padding-bottom: 1rem;
}

.compost-list-container {
  display: flex;
  justify-content: center;
  gap: 50px;
}

.compost-list {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.list-title {
  font-size: 1.7rem;
  margin-bottom: 1rem;
  color:#2D721C
}

.list-title-right {
  color:firebrick;
}

.list-items {
  list-style: none;
  padding-left: 0;
  color: #333;
}

.list-items li {
  margin-bottom: 0.25rem;
  font-size: 1.2rem;
}

.list-items.positive li:before {
  content: '✓';
  color: green;
  margin-right: 0.5rem;
}

.list-items.negative li:before {
  content: '✗';
  color: red;
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .stats-container,
  .compost-list-container {
    flex-direction: column;
    align-items: center;
  }

  .transform-icon {
    transform: rotate(90deg);
    margin: 10px 0;
  }

  .composting-rules,
  .compost-list {
    padding: 2rem 1rem;
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }

  .rules-title {
    font-size: 1.75rem;
  }
}
</style>

  
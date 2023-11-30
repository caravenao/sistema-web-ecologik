<template>
    <section class="plans-section py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">Planes de Servicio</h2>
        <div class="row">
          <!-- Tarjetas de planes -->
          <div class="col-md-4" v-for="service in services" :key="service.id">
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">{{ service.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ service.price }}</h6>
                <p class="card-text">{{ service.description }}</p>
                <div class="badge" :class="service.status === 'Disponible' ? 'badge-available' : 'badge-secondary'">
                  {{ service.status }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Formulario -->
      <div class="profile-card container mt-5">
        <h1 class="profile-title">Formulario de cotización</h1>
  
        <!-- Grupo de entrada para Tipo de Plan -->
        <div class="form-group">
          <label class="input-label" for="tipoCuenta">Tipo de Plan</label>
          <select id="tipoCuenta" class="input-field">
            <option v-for="service in services" :value="service.title" :key="service.id">{{ service.title }}</option>
          </select>
        </div>
  
        <!-- Grupo de entrada para Nombre -->
        <div class="form-group">
          <label class="input-label" for="nombre">Nombre</label>
          <input type="text" id="nombre" class="input-field">
        </div>
  
        <!-- Grupo de entrada para Apellidos -->
        <div class="form-group">
          <label class="input-label" for="apellido">Apellidos</label>
          <input type="text" id="apellido" class="input-field">
        </div>
  
        <!-- Grupo de entrada para Correo Electrónico -->
        <div class="form-group">
          <label class="input-label" for="correo">Correo electrónico</label>
          <input type="email" id="correo" class="input-field">
        </div>
  
        <!-- Grupo de entrada para RUT -->
        <div class="form-group">
          <label class="input-label" for="rut">RUT</label>
          <input type="text" id="rut" class="input-field">
        </div>
  
        <!-- Grupo de entrada para Teléfono -->
        <div class="form-group">
          <label class="input-label" for="telefono">Teléfono</label>
          <input type="tel" id="telefono" class="input-field">
        </div>
  
        <!-- Grupo de entrada para Dirección -->
        <div class="form-group">
          <label class="input-label" for="direccion">Dirección</label>
          <input type="text" id="direccion" class="input-field">
        </div>
  
        <!-- Grupo de entrada para Notas -->
        <div class="form-group">
          <label class="input-label" for="notas">Notas</label>
          <textarea id="notas" class="input-field"></textarea>
        </div>
  
        <div class="form-buttons">
          <button class="submit-btn">Enviar formulario</button>
        </div>
      </div>
    </section>
  </template>
  

<script>
export default {
  name: 'PlansSection',
  data() {
    return {
      services: [],
      selectedPlan: '',
      // Resto de la data para el formulario
    };
  },
  created() {
    this.fetchServices();
  },
  methods: {
    async fetchServices() {
      try {
        const response = await this.$api.get('/service');
        this.services = response.data.allServices;
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    },
    submitForm() {
      // Procesar el formulario aquí
      console.log('Form submitted:', this.selectedPlan);
    },
  },
};
</script>

<style scoped>
.bg-light {
  background-color: #f7f7f7;
}

.badge-available {
  color: white;
  background-color: #76c893;
}

.badge-secondary {
  color: white;
  background-color: #6c757d;
}

.card {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

/* Estilos del formulario */
.profile-card {
    background-color: #ffffff;
    padding: 30px;
    width: 600px;
    border-radius: 15px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.profile-title {
    text-align: center;
    margin-bottom: 30px;
}

.form-group {
    display: flex;
    margin-bottom: 15px;
}

.input-label {
    width: 20%;
    margin-right: 5%;
    text-align: left;
}

.input-field {
    flex: 1;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #DFF4D8;
    outline: none;
    transition: border-color 0.3s ease;
}

.input-field:focus {
    border-color: #2D721C;
}

.submit-btn {
    display: block;
    margin: auto;
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    background-color: #86BB8C;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 50%;
}

.submit-btn:hover {
    background-color: #65996f;
}

.form-buttons {
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
}

.close-session-btn {
    background-color: #ff6b6b;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.close-session-btn:hover {
    background-color: #ff8787;
}

/* Media queries para dispositivos pequeños (como celulares) */
@media (max-width: 768px) {
  .profile-card {
    width: 100%; /* Ocupar todo el ancho disponible */
    padding: 15px; /* Reducir el padding para más espacio */
  }

  .form-group {
    flex-direction: column; /* Los elementos se apilan verticalmente */
    margin-bottom: 10px; /* Reducir el margen */
  }

  .input-label, .input-field {
    width: 100%; /* Aprovechar todo el ancho disponible */
  }

  .submit-btn {
    width: 100%; /* Botón a lo ancho del contenedor */
  }

  .input-field {
    border-bottom: 1px solid #DFF4D8; /* Reducir el grosor de la línea para una apariencia más sutil */
  }
}
</style>


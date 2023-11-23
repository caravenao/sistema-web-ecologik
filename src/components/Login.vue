<template>
    <div class="login-container">
        <div class="login-card">
            <h1>Iniciar sesión</h1>
            
            <div class="input-group">
                <i class="fa-solid fa-envelope icon"></i>
                <input type="email" placeholder="Correo electrónico" v-model="email">
            </div>
            
            <div class="input-group">
                <i class="fa-solid fa-lock icon"></i>
                <input type="password" placeholder="Contraseña" v-model="password">
            </div>
            
            <a href="#" class="reset-link">Restablecer contraseña</a>
            
            <button class="login-btn" @click="login">Ingresar</button>
            
            <div class="register-option">
                <p>¿Aún no tienes cuenta? 
                    <router-link to="/register" class="register-link">Regístrate</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
import { useSessionStore } from '../stores/session';

export default {
    name: 'LoginPage',
    setup() {
        const sessionStore = useSessionStore();
        return {
            sessionStore
        }
    },
    data() {
        return {
            // Your data properties go here
            email: null,
            password: null,
        }
    },
    methods: {
        // Your methods go here
        async login(){
      const reqData = {
        email: this.email,
        password: this.password
      }
      await this.$api.post('/login', reqData)
        .then((response) => {
          console.log(response.status)
          console.log(response)
          console.log(response.data)
          console.log('pendingValidateEmail: ' + response.data.pendingValidateEmail)
          console.log('logeado')

          if(response.status === 200) {
            this.sessionStore.setTokens(response.data.tokens)
            if(response.data.pendingValidateEmail){
              console.log('Email no validado')
            }else{
              this.$router.push({ path: '/home' })
            }
          }
        })
        .catch(error => {
          console.log(error + ' Algo salió mal') 
        })
    },
    }
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    background-color: #86BB8C;
}

.login-card {
    background-color: #ffffff;
    padding: 30px;
    width: 400px;
    border-radius: 15px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.input-group {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.icon {
    margin-right: 15px;
}

input[type="email"], input[type="password"] {
    flex-grow: 1;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #DFF4D8;
    background-color: transparent;
    outline: none;
    transition: border-color 0.3s ease;
}

input[type="email"]:focus, input[type="password"]:focus {
    border-color: #2D721C;
}

.reset-link {
    text-align: center; /* Centrar "Restablecer contraseña" */
    margin-bottom: 15px;
    text-decoration: underline; /* Subrayado para "Restablecer contraseña" */
    color: #2D721C;
}

.register-link {
    color: #2D721C; /* Color para "Regístrate" */
    text-decoration: underline; /* Subrayado para "Regístrate" */
}

.login-btn {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 8px;
    background-color: #86BB8C;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.login-btn:hover {
    background-color: #65996f;
}

.register-option {
    text-align: center; /* Centrar el texto "Aun no tienes cuenta?" */
    margin-top: 10px;
}

.reset-link {
    display: block;  /* Se asegura de que el enlace ocupe todo el ancho */
    text-align: center; /* Centrar el texto "Restablecer contraseña" */
    margin-bottom: 15px;
    color: #2D721C;
    text-decoration: underline; /* Subrayado para "Restablecer contraseña" */
}

</style>

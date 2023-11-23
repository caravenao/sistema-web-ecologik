<template>
    <div class="register-container">
        <div class="register-card">
            <h1>Crea tu cuenta</h1>
            
            <div class="input-group">
                <i class="fa-solid fa-user icon"></i>
                <input type="text" placeholder="Nombre">
            </div>

            <div class="input-group">
                <i class="fa-solid fa-user icon"></i>
                <input type="text" placeholder="Apellido">
            </div>
            
            <div class="input-group">
                <i class="fa-solid fa-envelope icon"></i>
                <input type="email" placeholder="Correo electrónico">
            </div>

            <div class="input-group">
                <i class="fa-solid fa-phone icon"></i>
                <input type="tel" placeholder="Teléfono">
            </div>
            
            <div class="input-group">
                <i class="fa-solid fa-lock icon"></i>
                <input type="password" placeholder="Contraseña">
            </div>

            <div class="input-group">
                <i class="fa-solid fa-lock icon"></i>
                <input type="password" placeholder="Confirmar contraseña">
            </div>

            <div class="checkbox-group">
                <input type="checkbox" id="termsCheckbox">
                <label for="termsCheckbox" class="checkbox-label">Acepto los términos y condiciones</label>
            </div>
            
            <button class="register-btn">Registrarse</button>
            
            <div class="login-option">
                <router-link to="/login" class="login-link">Ya tengo cuenta</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterPage'
}
</script>

<style scoped>
.register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-color: #86BB8C;
}

.register-card {
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

input[type="text"], input[type="email"], input[type="tel"], input[type="password"] {
    flex-grow: 1;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #DFF4D8;
    background-color: transparent;
    outline: none;
    transition: border-color 0.3s ease;
}

input[type="text"]:focus, input[type="email"]:focus, input[type="tel"]:focus, input[type="password"]:focus {
    border-color: #2D721C;
}

.checkbox-group {
    margin-bottom: 15px;
}

.checkbox-label {
    margin-left: 10px; /* añadiendo espacio al texto del checkbox */
}

.register-btn {
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

.register-btn:hover {
    background-color: #65996f;
}

.login-option {
    text-align: center;
    margin-top: 10px;
}

.login-link {
    color: #2D721C;
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.3s ease;
}

.login-link:hover {
    color: #86BB8C; /* color más claro al pasar el cursor */
}
</style>

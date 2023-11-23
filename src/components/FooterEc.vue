<template>
    <footer class="container container-fluid">
        <div class="row">
            <!-- Sección del logo -->
            <div class="col-md-4 justify-content-start logo-container">
                <img src="../assets/img/Ecologik-logo.jpg" alt="Ecologik Logo" class="footer-logo">
            </div>

            <!-- Sección de contacto -->
            <div class="col-md-4 d-flex flex-column align-items-start contact-section">
                <h4 class="contact-heading">Contáctanos</h4>
                <div class="contact-item">
                    <i class="fa-solid fa-envelope"></i> <a href="mailto:info@ecologik.com">info@ecologik.com</a>
                </div>
                <div class="contact-item">
                    <i class="fa-solid fa-phone"></i> <a href="tel:+123456789">+1 234 567 89</a>
                </div>
                <div class="contact-item">
                    <i class="fa-brands fa-whatsapp"></i> <a href="https://wa.me/123456789">+9 987 654 32</a>
                </div>
            </div>

            <!-- Sección de redes sociales -->
            <div class="col-md-4 d-flex flex-column align-items-start social-media-section">
                <h4 class="social-media-heading">Redes Sociales</h4>
                <div class="social-media-item">
                    <i class="fa-brands fa-facebook"></i> <a href="https://www.facebook.com/ecologik">Ecologik Reciclaje Orgánico</a>
                </div>
                <div class="social-media-item">
                    <i class="fa-brands fa-instagram"></i> <a href="https://www.instagram.com/ecologik">ecologik_compostaje</a>
                </div>
                <div class="social-media-item">
                    <i class="fa-brands fa-youtube"></i> <a href="https://www.youtube.com/c/ecologik">Ecologik Chile</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
body {
    background-color: #f2f2f2;
}

footer {
    padding: 20px;
}

.logo-container {
    margin-top: -10px; /* Ajustar según necesidad */
}

.footer-logo {
    width: 150px; /* Tamaño ajustado */
    height: auto; /* Auto para mantener la proporción */
}

.contact-heading, .social-media-heading {
    color: #2D721C;
    margin-bottom: 10px; /* Reduce el espacio debajo del título */
}

.contact-item, .social-media-item {
    display: flex;
    align-items: center;
    margin-bottom: 5px; /* Espacio entre elementos */
}

.contact-section, .social-media-section {
    padding-top: 0; /* Reduce el espacio encima de los títulos */
}

footer i {
    margin-right: 10px; /* Espacio entre icono y texto */
}
</style>

<script>
export default {
    name: 'FooterEc'
}
</script>

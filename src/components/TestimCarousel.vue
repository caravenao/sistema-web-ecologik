<template>
    <div id="carouselExampleControlsNoTouching" class="carousel slide container" data-bs-touch="false">
        <h2 class="text-center mb-5">Testimonios de clientes</h2>
        <div class="carousel-inner">
            <!-- Testimonio 1 -->
            <div class="carousel-item active">
                <div class="testimonial-content">
                    <img src="/img/fotos-perfil.webp" alt="" class="testimonial-img">
                    <p>“<em>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, nostrum? Mollitia...</em>”</p>
                    <h3>Persona 1</h3>
                </div>
            </div>

            <!-- Testimonio 2 -->
            <div class="carousel-item">
                <div class="testimonial-content">
                    <img src="/img/fotos-perfil.webp" alt="" class="testimonial-img">
                    <p>“<em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente...</em>”</p>
                    <h3>Persona 2</h3>
                </div>
            </div>

            <!-- Testimonio 3 -->
            <div class="carousel-item">
                <div class="testimonial-content">
                    <img src="/img/fotos-perfil.webp" alt="" class="testimonial-img">
                    <p>“<em>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt...</em>”</p>
                    <h3>Persona 3</h3>
                </div>
            </div>
        </div>

        <!-- Controles del carrusel -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'TestimCarousel'
}
</script>

<style scoped>
    .testimonial-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .testimonial-img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.5rem;
        margin: 10px 0;
        font-style: italic; /* Esto hace que el texto esté en cursiva */
    }

    h3 {
        font-size: 1.2rem;
        margin-top: 10px;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        background-color: #86BB8C;  /* O el color que prefieras */
        height: 30px;
        width: 30px;
        border-radius: 50%; /* Esto hará que tengan forma circular */
        background-size: 50%;  /* Ajusta el tamaño del ícono de flecha dentro del círculo */
    }

    .carousel-control-prev-icon:hover,
    .carousel-control-next-icon:hover {
        background-color: #555;  /* Cambia a un color ligeramente diferente al pasar el mouse por encima */
    }

    h2 {
        color: #86BB8C;
    }
</style>

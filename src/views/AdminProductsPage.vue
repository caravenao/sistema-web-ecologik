<template>
    <div>
        <NavBarAdmin />
        <ProductsAdmin />
    </div>
</template>

<script>
import NavBarAdmin from '../components/NavBarAdmin.vue';
import ProductsAdmin from '../components/ProductsAdmin.vue';

export default {
    name: 'AdminProductsPage',
    components: {
        NavBarAdmin,
        ProductsAdmin
    },
    data() {
        return {
            // Your data properties go here
        }
    },
    methods: {
        // Your methods go here
    }
}
</script>

<style scoped></style>
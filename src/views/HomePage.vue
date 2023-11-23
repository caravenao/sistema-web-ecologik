<template>
    <div>
        <HomeCarousel />
        <HomeProducts />
        <HomeInfo />
    </div>
</template>

<script>
import HomeCarousel from '../components/HomeCarousel.vue';
import HomeProducts from '../components/HomeProducts.vue';
import HomeInfo from '../components/HomeInfo.vue';

export default {
    name: 'HomePage',
    components: {
        HomeCarousel,
        HomeProducts,
        HomeInfo
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

<style scoped>

</style>

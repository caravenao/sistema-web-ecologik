<template>
    <div>
        <CartStore />
    </div>
</template>

<script>
    import CartStore from '../components/CartStore.vue';

    export default {
        name: 'CartPage',
        components : {
        CartStore
    },
    }
</script>
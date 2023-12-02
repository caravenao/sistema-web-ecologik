<template>
    <div>
        <NavBarAdmin />
        <NoticesAdmin />
    </div>
</template>

<script>
import NavBarAdmin from '../components/NavBarAdmin.vue';
import NoticesAdmin from '../components/NoticesAdmin.vue';

export default {
    name: 'AdminNoticesPage',
    components: {
        NavBarAdmin,
        NoticesAdmin
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
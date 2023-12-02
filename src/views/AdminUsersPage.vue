<template>
    <div>
        <NavBarAdmin />
        <UsersAdmin />
    </div>
</template>

<script>
import NavBarAdmin from '../components/NavBarAdmin.vue';
import UsersAdmin from '../components/UsersAdmin.vue';

export default {
    name: 'AdminUsersPage',
    components: {
        NavBarAdmin,
        UsersAdmin
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
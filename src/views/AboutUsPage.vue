<template>
    <div>
       <VideoIntro />
       <MissionAbout />
       <ClientsAbout />
       <TestimCarousel />
    </div>
</template>

<script>
import VideoIntro from '../components/VideoIntro.vue';
import MissionAbout from '../components/MissionAbout.vue';
import ClientsAbout from '../components/ClientsAbout.vue';
import TestimCarousel from '../components/TestimCarousel.vue';

export default {
    name: 'AboutUsPage',
    components: {
    VideoIntro,
    MissionAbout,
    ClientsAbout,
    TestimCarousel
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

<template>
    <div class="container">
        <div class="btn btn-secondary">
            Hello Bootstrap!
        </div>
        <div v-bind:key="weather.id" v-for="weather in arWearherCity">
            <weater-card :weatherCity="weather" :id="idCard"/>
        </div>
    </div>
</template>

<script>
    import weaterCard from '~/components/weatherCard.vue'

    export default {
        mounted() {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(this.successData, this.errorData);
            } else {
                console.log('gg');
            }

            console.log('crd');
        },
        components: {
            weaterCard
        },
        computed: {
            arWearherCity () {
                return this.$store.state.storeWaether.arCityWeater
            },
            idCard () {
                return this.$store.state.storeWaether.id
            }
        },
        methods: {
            successData (pos) {
                let crd = pos.coords;
                this.incrementId();
                this.$store.dispatch('storeWaether/addCityOnCoord', crd);
            },
            incrementId() {
                this.$store.dispatch('storeWaether/incrementId');
            },
            errorData: function (err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            },
        }
    }
</script>

<style>
    .done {
        text-decoration: line-through;
    }
</style>
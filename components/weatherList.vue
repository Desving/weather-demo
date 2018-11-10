<template>
    <div>
        <div v-bind:key="weather.id" v-for="weather in arWearherCity">
            <div>{{weather}}</div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'


    export default {
        mounted() {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(this.successData, this.errorData);
            } else {
                console.log('gg');
            }

            console.log('crd');
        },
        computed: {
            arWearherCity () {
                return this.$store.state.storeWaether.arCityWeater
            }
        },
        methods: {
            successData (pos) {
                var crd = pos.coords;
                this.$store.dispatch('storeWaether/addCityOnCoord', crd);
            },
            errorData: function (err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            },
            ...mapMutations({
                toggle: 'storeWaether/toggle'
            })
        }
    }
</script>

<style>
    .done {
        text-decoration: line-through;
    }
</style>
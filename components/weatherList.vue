<template>
    <div class="weather">
        <addWeather/>
        <div v-if="isError">
            <div class="errors" v-bind:key="error.id" v-for="error in getErrors">
                {{error.message}}
            </div>
        </div>
        <div class="list" v-bind:key="weather.id" v-for="weather in arWearherCity">
            <weather-card :weatherCity="weather" :id="idCard"/>
        </div>
    </div>
</template>

<script>
    import weatherCard from '~/components/weatherCard.vue'
    import addWeather from '~/components/addWeathetOnCoords.vue'

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
            weatherCard,
            addWeather
        },
        computed: {
            arWearherCity () {
                return this.$store.state.storeWaether.arCityWeater
            },
            idCard () {
                return this.$store.state.storeWaether.id
            },
            getErrors() {
                console.log(this.$store.state.storeWaether.errors);
                return this.$store.state.storeWaether.errors
            },
            isError() {
                return this.getErrors.length > 0
            }
        },
        methods: {
            successData (pos) {
                let crd = pos.coords;
                console.log(crd);
                this.$store.dispatch('storeWaether/addCityOnCoord', crd);
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
    .weather {
        width: 80%;
        margin: auto;
    }
    .list {
        display: flex;
        /*justify-content: center;*/
        padding: 10px 0;
    }
    .errors {
        background: #ff494921;
        width: 50%;
        border: 1px solid red;
        padding: 5px 10px;
        margin: 10px 0;
        border-radius: 10px;
        color: red;
    }
</style>
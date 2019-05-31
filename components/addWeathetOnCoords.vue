<template>
    <div class="coordinate">
        <button v-on:click="showInputCoordinates" class="btn btn-secondary">
            Add coordinates
        </button>
        <div class="group-inputs" v-if="showInputs">
            <input class="coordinate__input form-control" name="late" v-model="late" type="number">
            <input class="coordinate__input form-control" name="long" v-model="long" type="number">
            <button class="btn btn-primary" v-on:click="addPointByCoordinate">Add</button>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                late: '',
                long: '',
                showInputs: false,
            }
        },
        computed: {
            getLate() {
                return this.late
            },
            getLong() {
                return this.long
            }
        },
        methods: {
            showInputCoordinates() {
                return this.showInputs = !this.showInputs;
            },
            addPointByCoordinate() {
                let crd = {};
                crd.latitude = this.getLate;
                crd.longitude = this.getLong;
                this.$store.dispatch('storeWaether/addCityOnCoord', crd);
            },

        }
    }
</script>

<style>
    .coordinate {
        display: flex;
        margin-top: 10px;
    }
    .coordinate__input {
        width: 100px;
        display: flex;
        padding: 5px;
        margin: 0 10px;
    }
    .group-inputs {
        display: flex;
    }
</style>
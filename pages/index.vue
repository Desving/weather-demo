<template>
  <section class="container">
    <weater-list/>
  </section>
</template>

<script>
    import BootstrapVue from "bootstrap-vue";
    import "bootstrap/dist/css/bootstrap.min.css";
    import "bootstrap-vue/dist/bootstrap-vue.css";
    import weaterList from '~/components/weatherList.vue'

    export default {
        components: {
            weaterList
        }
    }
</script>

<style>

</style>


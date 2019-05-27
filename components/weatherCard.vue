<template>
    <div class="card col-10 col-sm-8 col-md-6 col-lg-6 col-xl-6">
        <div class="row info-city">
            <div class="col-8 col-sm-8 coord">
                <img class="icon" src="../static/marker.svg" alt="">
                <div class="coord__txt">
                    {{weatherCity.info.data.sys.country}},{{weatherCity.info.data.name}}<br>
                    {{weatherCity.info.data.coord.lon}},{{weatherCity.info.data.coord.lat}}
                </div>
            </div>
            <div class="col-4 col-sm-4">
                <div class="btn btn-close">
                    <img src="../static/delete.svg" alt="" class="icon">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-12 col-lg-12 col-xl-12 p10">
                <div class="row">
                    <div class="col-4">
                        <img src="../static/temperature.svg" alt="" class="icon">
                        {{(weatherCity.info.data.main.temp - 273.15).toFixed(1)}} C&#176;
                    </div>
                    <div class="col-4">
                        <img src="../static/gauge.svg" alt="" class="icon">
                        {{weatherCity.info.data.main.pressure}}
                    </div>
                    <div class="col-4">
                        <img src="../static/humidity.svg" alt="" class="icon">
                        {{weatherCity.info.data.main.humidity}} %
                    </div>
                </div>
            </div>
            <div class="col-12 p10">
                <div class="row">
                    <div class="col-4">
                        <img src="../static/anemometer.svg" alt="" class="icon">
                        {{weatherCity.info.data.wind.speed}} м/c
                    </div>
                    <div class="col-6">
                        <img src="../static/view.svg" alt="" class="icon">
                        {{weatherCity.info.data.visibility}} MOR
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-12 col-xl-12 p10">
                <div class="row">
                    <div class="col-1">
                        <img src="../static/sunrise.svg" alt="" class="icon">
                    </div>
                    <div class="col-3">
                        <span>{{new Date(weatherCity.info.data.sys.sunrise * 1000).getHours()}}:</span>
                        <span>{{new Date(weatherCity.info.data.sys.sunrise * 1000).getMinutes()}}:</span>
                        <span>{{new Date(weatherCity.info.data.sys.sunrise * 1000).getSeconds()}}</span>
                    </div>
                    <div class="col-3">
                        <span>{{new Date(weatherCity.info.data.sys.sunset * 1000).getHours()}}:</span>
                        <span>{{new Date(weatherCity.info.data.sys.sunset * 1000).getMinutes()}}:</span>
                        <span>{{new Date(weatherCity.info.data.sys.sunset * 1000).getSeconds()}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            weatherCity: Object,
            id: Number
        },
        computed: {
            time: () => {
                //return this.weatherCity
            }
        }
    }
</script>

<style>
    .card {
        padding: 20px;
    }

    .p10{
        padding: 10px;
    }

    .coord {
        display: flex;
        flex-direction: row;
        padding: 0 10px;
    }

    .coord__txt {

    }

    .btn-close {
        display: flex;
        justify-content: flex-end;
    }

    .icon {
        width: 20px;
        height: 20px;
    }

    .info-city {
        margin-bottom: 20px;
    }
</style>
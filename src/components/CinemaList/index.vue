<template>
    <div class="cinema_body">
        <ul>          
            <li v-for="cinema in cinemas" :key="cinema.id">
                <div>
                    <span>{{ cinema.nm }}</span>
                    <span class="q" v-if="cinema.sellPrice"><span class="price">{{ cinema.sellPrice }}</span> 元起</span>
                </div>
                <div class="address">
                    <span>{{ cinema.addr }}</span>
                    <span>{{cinema.distance}}</span>
                </div>
                <div class="card">
                    <div v-if="cinema.tag.allowRefund === 1" class="bl">退</div>
                    <div v-if="cinema.tag.endorse === 1" class="bl">改签</div>
                    <div v-if="cinema.tag.snack === 1" class="or">小吃</div>
                    <div v-if="cinema.tag.vipTag" class="or">{{ cinema.tag.vipTag }}</div>
                    <div v-for="type in cinema.tag.hallType" :key="type"  class="bl"> {{ type }} </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CinemaList',
    data(){
        return {
            cinemas: []
        }
    },
    mounted(){
        this.axios({
            //url:'/ajax/cinemaList?ci=57',
            //url: 'ajax/cinemaDetail?cinemaId=890',
            //url:'/ajax/movieOnInfoList?ci=57',
            url: '/ajax/cinemaList?ci=30'
        }).then(res => {
            this.cinemas = res.data.cinemas;        
            console.log(this.cinemas);
        })
    }
}
</script>

<style scoped>
#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>
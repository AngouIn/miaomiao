<template>
    <div class="cinema_body" ref="cinema_body">
        <Loading v-if="isLoading"/>
        <Scroller v-else ref="scroll" :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
            <ul>
                 <transition>
                    <Loading v-if="isRefresh" style="transition: all 0.6s"/>
                </transition>          
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
        </Scroller>
    </div>
</template>

<script>
export default {
    name: 'CinemaList',
    data(){
        return {
            cinemas: [],
            isLoading: true,
            isRefresh: false,
            prevCityId: -1
        }
    },
    activated(){
        var cityId = this.$store.state.city.cityId
        if(this.prevCityId === cityId) return

        this.isLoading = true
        this.axios({
            //url:'/ajax/cinemaList?ci=57',
            //url: 'ajax/cinemaDetail?cinemaId=890',
            //url:'/ajax/movieOnInfoList?ci=57',
            url: `/ajax/cinemaList?ci=${cityId}`
        }).then(res => {
            this.cinemas = res.data.cinemas
            this.prevCityId = cityId
            this.isLoading = false
             this.$nextTick(() => {
                this.$refs.scroll.handleScrollRefresh()
            })
        })
    },
    methods: {
        handleToScroll(pos){
            if(pos.y > 30){
                this.isRefresh = true
            }
        },
        handleToTouchEnd(pos){
            if(pos.y > 30){
                this.axios({
                    url: `/ajax/cinemaList?ci=${this.$store.state.city.cityId}`
                }).then(res => {
                    this.cinemas = res.data.cinemas
                    this.isRefresh = false
                })
            }
        } 
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
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 10px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>
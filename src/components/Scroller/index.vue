<template>
    <div ref="wrapper" class="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import Scroller from 'better-scroll'
export default {
    name: 'Scroller',
    data(){
        return {
            scroll: null
        }
    },
    props :{
        
        handleToScroll:{
            type: Function,
            default : function(){}
        },
        handleToTouchEnd:{
            type: Function,
            default : function(){}
        }
    },
    methods:{
        handleScrollRefresh(){
            this.scroll.refresh()
        },
        toScrollTop(y){
            this.scroll.scrollTo(0,y)
        }
    },
    mounted(){
        if(!this.scroll){
            this.scroll = new Scroller(this.$refs.wrapper,{
                click: true,
                probeType: 1
            })
        }
        this.scroll.on('scroll',(pos) => {
            this.handleToScroll(pos)
        })
        this.scroll.on('touchEnd',(pos)=>{
            this.handleToTouchEnd(pos)
        })
    },  

}
</script>
<style scoped>
.wrapper{ height: 100%;}
</style>
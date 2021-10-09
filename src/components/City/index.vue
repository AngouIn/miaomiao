<template>
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li v-for="city in hotCityList" :key="city.cityId">{{city.name}}</li>
                </ul>
            </div>
            <div class="city_sort" ref="city_sort">
                <div v-for="cities in cityList" :key="cities.index">
                    <h2>{{ cities.index }}</h2>
                    <ul>
                        <li v-for="city in cities.list" :key="city.cityId">
                            {{ city.name }}
                        </li>
                    </ul>
                </div>	
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li v-for="(item,index) in cityList" :key="item.index" @touchstart="handleToIndex(index)">{{ item.index }}</li>            
            </ul>
        </div>
    </div> 
    
</template>

<script>
export default {
    name: 'City',
    data(){
        return{
            cityList: [],
            hotCityList: [
                {pinyin: 'beijing', name: '北京', id: 1},
                {pinyin: 'shanghai', name: '上海', id: 10},
                {pinyin: 'guangzhou', name: '广州', id: 20},
                {pinyin: 'shenzhen', name: '深圳', id: 30},
                {pinyin: 'nanjing', name: '南京', id: 55},
                {pinyin: 'wuhan', name: '武汉', id: 57},
                {pinyin: 'chengdu', name: '成都', id: 59},
                {pinyin: 'changsha', name: '长沙', id: 70}
                ]
        }
    },
    mounted() {
        this.axios({
            url: '/poi/city',
        }).then(res => {
            this.cityList = this.handleCityClassification(res.data.data)
        })
    },
    methods: {
        handleCityClassification(cities){
            var letterArr = []
            for (var i = 65; i < 91; i++){
                letterArr.push(String.fromCharCode(i))
            }

            var newList = []
            for (var j = 0; j < letterArr.length; j++){
                var arr = cities.filter(item => item.pinyin.substring(0,1) === letterArr[j].toLowerCase())
                if(arr.length > 0){
                    newList.push({
                        index: letterArr[j],
                        list: arr
                    })
                }
            }
            return newList
        },
        handleToIndex(index){
            var h2 = this.$refs.city_sort.getElementsByTagName('h2');
            this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop
        }
    }
}
</script>

<style scoped>
 #content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{background-color:transparent;width:0;}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;} 
</style>
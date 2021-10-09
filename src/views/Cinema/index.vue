<template>
  <div id="main">
    <myHeader title="影院"/>
    <div id="content">
      <div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
			</div>
      <keep-alive>
        <cinemaList></cinemaList>
      </keep-alive>
    </div>
    <tabBar />
  </div>
</template>

<script>
import myHeader from '@/components/Header'
import tabBar from '@/components/TabBar'
import cinemaList from '@/components/CinemaList'
export default {
  name: 'Cinema',
  components: {
    myHeader,
    tabBar,
    cinemaList
  }
}
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>
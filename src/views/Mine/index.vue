<template>
  <div>
    <myHeader title="登录"/>
    <div id="content">
      <login />
    </div>
    <tabBar />
  </div>
</template>

<script>
import myHeader from '@/components/Header'
import tabBar from '@/components/TabBar'
import login from '@/components/Login'
export default {
  name: 'Mine',
  components: {
    myHeader,
    tabBar,
    login
  }
}
</script>

<style>

</style>
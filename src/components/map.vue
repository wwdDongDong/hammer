<template>
  <div>
    <div id="container" tabindex="0">
    </div>
  </div>
</template>
<script>
import BMap from 'BMap'
export default{
  data () {
    return {
      map: ''
    }
  },
  mounted () {
    this.ready()
  },
  methods: {
    ready () {
      var map = new BMap.Map('container')
// 创建地图实例
      var point = new BMap.Point(116.404, 39.915)
// 创建点坐标
      map.centerAndZoom(point, 15)
// 初始化地图，设置中心点坐标和地图级别
    }
  }
}
</script>
<style scoped>
  html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    font-family: "微软雅黑";
  }
  #container{
    width: 100%;
    height: 400px;
  }
</style>

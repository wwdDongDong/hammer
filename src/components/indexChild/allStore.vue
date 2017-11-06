<template>
  <div>
    <ul>
      <li class="first"><a href="#">综合排序</a></li>
      <li><a href="#">销量排序</a></li>
      <li><a href="#">价格低到高</a></li>
      <li><a href="#">价格高到低</a></li>
    </ul>
    <div class="storeList">
      <div v-for="item,keys in storeList">
        <unitStore :item="item"></unitStore>
      </div>
    </div>
    <div class="server">
      <div>
        <div><span class="iconfont icon-zaixiankefu"></span></div>
        <div>在线客服</div>
        <div>周一至周日 9:00-18:00</div>
      </div>
      <div>
        <div><span class="iconfont iconfont icon-tianwuliyou"></span></div>
        <div>7 天无理由退货</div>
        <div>7 天无理由退货 请放心购买</div>
      </div>
      <div>
        <div><span class="iconfont iconfont icon-15tianwuliyou"></span></div>
        <div>15 天免费换货</div>
        <div>15 天内如遇到质量问题 免费换货</div>
      </div>
      <div>
        <div><span class="iconfont iconfont icon-liwuhezi"></span></div>
        <div>满 150 元免运费</div>
        <div>全场使用顺丰快递</div>
      </div>
    </div>
  </div>
</template>
<script>
import unitStore from './unitStore.vue'
export default{
  components: {
    unitStore
  },
  data () {
    return {
      scrollAdd: '',
      defaultImg: 0,
      imgSrc: '',
      initialImg: ''
    }
  },
  methods: {
    defaultShowImg (key, keys) {
      this.imgSrc = this.storeList[keys].sku_info[key].ali_image
      this.$set(this.storeList[keys].sku_info[0], 'ali_image', this.imgSrc)
      this.$store.dispatch('initialImg', {key: keys})
      if (key === 0) {
        this.$set(this.storeList[keys].sku_info[0], 'ali_image', this.$store.state.getSrcUrl)
      }
    }
  },
  computed: {
    storeList () {
      return this.$store.state.storeList
    }
  },
  created () {
    this.$store.dispatch('getList')
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  ul{
    height: 60px;
    line-height: 60px;
    list-style: none;
    border-top: 1px solid #D8D8D8;
    li{
      float: left;
      padding-left: 42px;
      position: relative;
      a:hover{
        color: #5683EA;
      }
    }
    li:before{
      content: '.';
      position: absolute;
      left: 20px;
      top: 50%;
      width: 2px;
      height: 2px;
      margin-top: -1px;
      background: #C7C7C7;
    }
    li:nth-of-type(1){
      padding-left: 0;
      a{
        color: #5683EA;
      }
    }
  }
  .storeList{
    width:100%;
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px rgba(0,0,0,.14);
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
    &>div:hover{
      box-shadow: 0 0 38px rgba(0,0,0,.08) inset;
      transition: all .15s ease;
      &>div:nth-of-type(5){
        display: block;
      }
    }
    &>div{
      position: relative;
      float: left;
      border-right: 1px solid #efefef;
      border-bottom: 1px solid #efefef;
      width: 25%;
      height: 429px;
      background: #fff;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
  .server{
    position: relative;
    z-index: 22;
    width: 100%;
    background: #fff;
    border-radius: 8px;
    border: 1px rgba(0,0,0,.14);
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
    margin-top: 10px;
    overflow: hidden;
    margin-bottom: 10px;
    &>div{
      width: 25%;
      height: 153px;
      float: left;
      &>div:nth-of-type(1){
        color: #000;
        text-align: center;
        span{
          display: inline-block;
          margin: 33px auto 5px;
          opacity: .625;
          font-size: 30px;
          -webkit-transition: all .15s ease;
        }
        span:hover{
          opacity: 1;
        }
      }
      &>div:nth-of-type(2){
        font-size: 15px;
        line-height: 25px;
        font-weight: 400;
        text-align: center;
      }
      &>div:nth-of-type(3){
        color: #A8A8A8;
        font-size: 12px;
        line-height: 24px;
        text-align: center;
      }
    }
  }
</style>

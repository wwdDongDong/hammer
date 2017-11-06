<template>
  <div>
    <transition name="slide">
      <div v-if="scroll" class="navTop">
        <div>
          <ul>
            <li>
              <a href="#"><b>首页</b></a>
            </li>
            <li class="first">
              <a href="#">手机</a>
            </li>
            <li class="first">
              <a href="#">"足迹系列"手感膜</a>
            </li>
            <li class="first">
              <a href="#">官方配件</a>
            </li>
            <li class="first">
              <a href="#">周边产品</a>
            </li>
            <li class="first">
              <router-link to="allStore" tag="a">全部商品</router-link>
            </li>
            <li class="first">
              <a href="#">服务</a>
            </li>
          </ul>
          <div class="headerMyTwo">
            <a href=""><span class="iconfont icon-touxiang" style="color: #ddd"></span></a>
            <div>
              <span class="iconfont icon-gouwuche" style="color: #ddd"></span>
              <span class="sphere">{{allCount}}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="middle">
      <div class="nav">
      <ul>
        <li>
          <a href="#"><b>首页</b></a>
        </li>
        <li class="first">
          <a href="#">手机</a>
        </li>
        <li class="first">
          <a href="#">"足迹系列"手感膜</a>
        </li>
        <li class="first">
          <a href="#">官方配件</a>
        </li>
        <li class="first">
          <a href="#">周边产品</a>
        </li>
        <li class="first">
          <router-link to="/allStore" tag="a">全部商品</router-link>
        </li>
        <li class="first">
          <router-link to="/map">服务</router-link>
        </li>
      </ul>
      <router-view/>
    </div>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      zero: '',
      sixty: ''
    }
  },
  computed: {
    scroll () {
      return this.$store.state.scroll
    },
    allCount () {
      return this.$store.state.zongCount
    },
    skuCartData () {
      return this.$store.state.skuCartData
    }
  },
  methods: {
    scrollPag () {
      return this.$store.commit('pagScroll')
    }
  },
  created () {
    window.addEventListener('scroll', this.scrollPag)
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .middle{
    width: 1220px;
    margin:0 auto;
  }
  .nav>ul{
    padding: 31px 0;
    height: 28px;
    line-height: 28px;
    list-style: none;
    &>li{
      float: left;
      padding: 0 20px;
      position: relative;
      a{
        display: block;
        color: #666;
        text-decoration: none;
      }
      a:hover{
        color: #5079d9;
      }
    }
    &>li:nth-of-type(1){
      padding:0 20px 0 0;
    }
    .first:before{
      position: absolute;
      left:0;
      top: -2px;
      content: '.';
      width: 2px;
      height: 2px;
      margin-right: 15px;
      font-weight: 900;
    }
  }
  .navTop{
    width:100%;
    position: fixed;
    top:0;
    height: 60px;
    z-index: 99;
    background: linear-gradient(#ffffff,#F1F1F1);
    border-bottom:1px solid #ddd;
  }
  .navTop>div{
    padding: 20px 0;
    width: 1220px;
    margin:0 auto;
  }
  .headerMyTwo{
    float: right;
    position: relative;
    &>a{
      margin-left: 40px;
      width: 36px;
      float: left;
      color: #979797;
      opacity: .6;
      text-decoration: none;
    }
    &>a:hover{
      color: red;
    }
    &>div{
      float: left;
      color: white;
      &>span:nth-of-type(1){
        opacity: .6;
        margin-left: 20px;
        font-size: 28px;
        position: relative;
        left: -4px;
        top: -8px;
      }
      &>span:nth-of-type(2){
        position: absolute;
        top: 3px;
        right: -20px;
        width: 20px;
        height: 20px;
        display: inline-block;
        background-color: #eb746b;
        text-align: center;
        line-height: 20px;
        color: white;
        border-radius: 50%;
        font-weight:700;
      }
    }
  }
  .navTop ul{
    list-style: none;
    float: left;
    &>li{
      float: left;
      padding: 0 20px;
      position: relative;
      a{
        display: block;
        color: #000;
        text-decoration: none;
      }
      a:hover{
        color: #5079d9;
      }
    }
    &>li:nth-of-type(1){
      padding:0 20px 0 0;
    }
    .first:before{
      position: absolute;
      left:0;
      top: -2px;
      content: '.';
      width: 2px;
      height: 2px;
      margin-right: 15px;
      font-weight: 900;
    }
  }
</style>

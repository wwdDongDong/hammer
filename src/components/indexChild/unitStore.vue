<template>
  <div class="unitStore">
    <router-link :to="'/pageStrict/' + clickKey">
      <img :src='item.sku_info[clickKey].ali_image'>
    </router-link>
    <!--v-for="index,key in item.sku_info" v-if="key === defaultImg"-->
    <div>{{ item.name }}</div>
    <div>{{ item.name_title }}</div>
    <div>
      <a @click="witchImg(key)" :class="{'active': key === clickKey}" v-for="index,key in item.sku_info"><img :src="'http://img01.smartisanos.cn/' + index.spec_json.image + '/20X20.jpg'"></a>
    </div>
    <div>￥{{ item.price }}</div>
    <div>
      <router-link :to="'/pageStrict/' + item.id + '/sku_id/' + item.sku_info[clickKey].sku_id" tag="span">查看详情</router-link>
      <span @click="addCartData(item.sku_info[clickKey])">加入购物车</span>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      item: {
        type: Object
      }
    },
    data () {
      return {
        clickKey: 0
      }
    },
    methods: {
      witchImg (key) {
        this.clickKey = key
      },
      addCartData (sku) {
        this.$store.commit('shopCartData', sku)
        this.$store.commit('allPrice')
        this.$store.commit('allCount')
      }
    }
  }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
.unitStore{
  position: relative;
  &>a{
    width:100%;
    text-align: center;
  }
  &>a>img{
    display: block;
    width: 206px;
    height: 206px;
    margin: 50px auto 10px;
  }
  &>div:nth-of-type(1){
    width:100%;
    line-height: 1.2;
    font-size: 16px;
    color: #424242;
    padding: 0 14px;
    text-align: center;
  }
  &>div:nth-of-type(2){
    line-height: 1.2;
    font-size: 12px;
    color: #d0d0d0;
    margin: 8px auto 14px;
    text-align: center;
  }
  &>div:nth-of-type(3){
    margin-top: 23px;
    text-align: center;
    a{
      width:12px;
      height: 12px;
      border: 2px solid #ddd;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      padding: 2px;
      display: inline-block;
      margin-right:6px ;
      overflow: hidden;
    }
    .active{
      border: 2px solid darkkhaki;
    }
    img{
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
  }
  &>div:nth-of-type(4){
    font-weight: 700;
    color: #d44d44;
    margin-top: 24px;
    text-align: center;
    opacity: 1;
    font-size: 18px;
  }
  &>div:nth-of-type(5){
    position: absolute;
    text-align: center;
    width:100%;
    bottom: 0px;
    display: none;
    transition: all .5s ease-out;
    span{
      border: 1px solid #d5d5d5;
      display: inline-block;
      width: 100px;
      height: 30px;
      font-size: 12px;
      line-height: 28px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 200;
      transition: all .1s ease;
      -webkit-user-select: none;
    }
    span:nth-of-type(1){
      color: #a1a1a1;
      background: linear-gradient(#f6f6f6,#fff);
    }
    span:nth-of-type(2){
      color: white;
      margin-left: 10px;
      background: linear-gradient(#5078df,#779ae9);
    }
    span:nth-of-type(1):hover{
      background: linear-gradient(#f6f6f6,#ededed)
    }
    span:nth-of-type(2):hover{
      background: linear-gradient(#6e8ed5,#4769c2)
    }
  }
}
.unitStore:hover{
  &>div:nth-of-type(5){
    display: block;
  }
}
</style>

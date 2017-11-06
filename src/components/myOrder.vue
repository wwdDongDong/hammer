<template>
  <div class="width myOrder">
    <div class="OrderLeft">
      <div>
        <img src="https://account.smartisan.com/files/00/38/35/8b/avatar.png?1509699600" alt="">
        <h5>一路向东</h5>
      </div>
      <ul>
        <router-link to="/mydingdan" tag="li">我的订单</router-link>
        <li>售后服务</li>
        <li>我的优惠</li>
        <li>账户资料</li>
        <router-link to="/myAddress" tag="li">收货地址</router-link>
        <li>以旧换新</li>
      </ul>
    </div>
    <div class="OrderRight">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
    }
  },
  methods: {
    myOrder (key) {
    }
  }
}
</script>
<style scoped lang="scss">
.myOrder{
  width:100%;
  position: relative;
  overflow: hidden;
}
.OrderLeft{
  float: left;
  width: 210px;
  margin: 0 0 20px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #D1D1D1;
  border-color: rgba(0,0,0,.14);
  box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
  background: white;
  overflow: hidden;
  &>div:nth-of-type(1){
    margin-top: 20px;
    margin-bottom: 20px;
    img{
      width: 168px;
      height: 168px;
    }
    h5{
      font-size: 18px;
      line-height: 48px;
      font-weight: 700;
    }
  }
  ul{
    list-style: none;
    li{
      width:100%;
      height: 48px;
      border-top: 1px solid #EBEBEB;
      line-height: 48px;
      cursor: pointer;
    }
    li:hover{
      background-color: #98AFEE;
      color: white;
    }
  }
}
.OrderRight{
  float: right;
  &>div {
    width: 990px;
  }
}
</style>

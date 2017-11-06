<template>
  <div class="order">
    <div>我的订单</div>
    <div class="orderContent" v-if="carList.length">
      <div>
        <span>2017-11-03</span>
        <span>订单号 <a>171103349605138</a></span>
        <span>查看详情></span>
        <span>应付总额</span>
        <span>商品操作</span>
        <span>数量</span>
        <span>单价</span>
      </div>
      <ul>
        <li v-for="item, key in carList">
          <div>
            <img :src="item.ali_image" alt="">
            <span>{{item.title}}</span>
            <span></span>
            <span>{{item.count}}</span>
            <span>￥{{item.price}}.00</span>
          </div>
          <div>
            <span>￥{{item.count * item.price}}.00</span>
            <div>
              <a>现在付款</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="!carList.length" class="noneList">
      <h3>您还没有相关的订单哦~~~</h3>
    </div>
  </div>
</template>
<script>
export default{
  computed: {
    carList () {
      return this.$store.state.skuCartData
    }
  },
  created () {
    console.log(this.carList)
  }
}
</script>
<style lang="scss" scoped>
  .order{
    &>div:nth-of-type(1){
      height: 60px;
      padding: 0 10px 0 28px;
      background: #F5F5F5;
      background: linear-gradient(#FFF, #F5F5F5);
      border-bottom: 1px solid #DCDCDC;
      border-radius: 10px 10px 0 0;
      box-shadow: 0 1px 7px rgba(0, 0, 0, .06);
      line-height: 60px;
      color: #646464;
    }
    .orderContent{
      height: 38px;
      background: #EEE;
      border: 1px solid #DBDBDB;
      line-height: 38px;
      font-size: 12px;
      color: #666;
      &>div:nth-of-type(1){
        padding: 0 24px;
        height: 38px;
        background: #EEE;
        border-top: 1px solid #DBDBDB;
        border-bottom: 1px solid #DBDBDB;
        line-height: 38px;
        font-size: 12px;
        color: #666;
        span:nth-of-type(1){
          width: 108px;
          padding-left: 6px;
          float: left;
          text-align: left;
        }
        span:nth-of-type(2){
          float: left;
          text-align: left;
          a{
            color: #5079d9
          }
        }
        span:nth-of-type(3){
          float: right;
          text-align: right;
          color: #5079d9;
          cursor: pointer;
          transition: all .3s ease;
        }
        span:nth-of-type(4){
          float: right;
          text-align: right;
          width: 102px;
          padding-right: 18px;
          border-left: 1px solid #DBDBDB;
          margin-right: 51px;
        }
        span:nth-of-type(5){
          float: right;
          text-align: center;
          width: 95px;
          height: 38px;
          padding-right: 23px;
        }
        span:nth-of-type(6){
          float: right;
          text-align: center;
          width: 70px;
        }
        span:nth-of-type(7){
          float: right;
          text-align: right;
          width: 85px;
          padding-right: 27px;
        }
      }
      ul{
        list-style: none;
        li{
          background: white;
          &>div:nth-of-type(1){
            float: left;
            width: 737px;
            border-right: 1px solid #EBEBEB;
            overflow: hidden;
            height: 110px;
            line-height: 110px;
            img{
              float: left;
              width: 78px;
              height: 78px;
              border: 1px solid #EBEBEB;
              border-radius: 3px;
              margin: 16px 29px 0 23px;
            }
            span{
              float: left;
              display: inline-block;
            }
            span:nth-of-type(2){
              width: 95px;
              padding-right: 23px;
              height:100%;
            }
            span:nth-of-type(3){
              text-align: center;
              width: 70px;
            }
            span:nth-of-type(4){
              width: 85px;
              padding-right: 27px;
              text-align: right;
              font-weight: 700;
            }
            span:not(:nth-of-type(1)){
              float: right;
            }
          }
          &>div:nth-of-type(2){
            float: right;
            display: table;
            height: 110px;
            &>span{
              padding-right: 18px;
              line-height: 110px;
              text-align: right;
              vertical-align: middle;
              font-weight: 700;
              display: inline-block;
              float: left;
            }
            div{
              width: 80px;
              padding: 0 24px;
              text-align: center;
              float: left;
              line-height: 110px;
              a{
                background: linear-gradient(#7EA3F5,#5A82F0);
                box-shadow: 0 1px 2px rgba(255,255,255,.1) inset,0 0 0 1px rgba(0,0,0,.2) inset,0 1px 3px rgba(0,0,0,.1);
                color: #FFF;
                display: inline-block;
                height: 30px;
                padding: 0 13px;
                border-radius: 4px;
                line-height: 30px;
                font-size: 12px;
                cursor: pointer;
                transition: all .5s;
              }
              a:hover{
                box-shadow: 0 1px 1px #7696DE inset,0 0 2px #627DCA inset,0 -2px 3px #5A77C7 inset,0 0 100px rgba(48,77,147,.4) inset,0 0 0 1px rgba(0,0,0,.3) inset,0 1px 3px rgba(0,0,0,.1);
                color: #FFF;
              }
            }
          }
        }
        li:after{
          content: '';
          display: block;
          clear: both;
          overflow: hidden;
          height: 0;
        }
      }
    }
  }
  .noneList{
    height: 100px;
    line-height: 100px;
    background: white;
    h3{
      text-align: center;
    }
  }
</style>

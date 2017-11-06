<template>
  <div class="shop">
    <div>购物清单</div>
    <div>
      <div class="OrderTitle">
        <span class="name">商品信息</span>
        <span class="doThing">操作</span>
        <span class="subtotal">小计</span>
        <span class="num">数量</span>
        <span class="price">单价</span>
      </div>
      <div class="storeStrict">
        <div style="padding-left: 60px">
          <div class="choose">
            <a></a>
          </div>
          <a href="" class="imgLogo"><img src="http://image.smartisanos.cn/resource/c79a73ffc6f8e782160d978f49f543dc.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp" alt=""></a>
          <div class="textStrict">
            <div class="unit">
              <a href="http://www.smartisan.com/shop/#/item/100026601" title="Smartisan 原装 Type-C 数据线（白色）" target="_blank">Smartisan 原装 Type-C 数据线（白色）</a>
            </div>
          </div>
          <div class="delete">
            <div></div>
          </div>
          <div class="subtotal mid">
            <div class="unit">
              <strong>￥39</strong>
            </div>
          </div>
          <div class="num mid">
            <div class="unit">
              <i></i>
              <span>1</span>
              <i></i>
            </div>
          </div>
          <div class="price mid">
            <div class="unit">
              <strong>￥39</strong>
            </div>
          </div>
        </div>
      </div>
      <div class="submit">
        <div class="chooseAll">
          <a></a>
          <div>
            <span>全选</span>
            <span>删除选中商品</span>
          </div>
        </div>
        <div>
          <button>现在结算</button>
          <div>
            <span>
              应付金额
              <span>￥ 78.00</span>
            </span>
            <div>
              应付金额不含运费
            </div>
          </div>
          <div>
            <span>已选择 <span>2</span> 件商品</span>
            <div>共计 <span>2</span> 件商品</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{}
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  .shop{
    width: 1220px;
    margin:30px auto;
    overflow: hidden;
    border: 1px solid rgba(0,0,0,.14);
    border-radius: 8px;
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
    background-color: white;
    &>div:nth-of-type(1){
      height: 60px;
      padding: 0 10px 0 28px;
      background: #F5F5F5;
      background: linear-gradient(#FFF,#F5F5F5);
      border-bottom: 1px solid #DCDCDC;
      border-radius: 10px 10px 0 0;
      box-shadow: 0 1px 7px rgba(0,0,0,.06);
      line-height: 60px;
      color: #646464;
    }
    &>div:nth-of-type(2){
      overflow: hidden;
      border-radius: 0 0 8px 8px;
      font-size: 14px;
      color: #626262;
    }
  }
  .shop {
    .OrderTitle {
      overflow: hidden;
      padding: 0 0 0 29px;
      border-top: none;
      height: 38px;
      background: #EEE;
      border-top: 1px solid #DBDBDB;
      border-bottom: 1px solid #DBDBDB;
      line-height: 38px;
      font-size: 12px;
      color: #666;
    }
    .storeStrict {
      position: relative;
      overflow: hidden;
    }
    .name {
      float: left;
    }
    .subtotal, .price, .num{
      float: right;
      width: 132px;
      padding-right: 29px;
      text-align: right;
    }
    .price {
      font-weight: 700;
    }
    .imgLogo {
      margin-top: 15px;
      border: 1px solid #EBEBEB;
      float: left;
      img {
        width: 78px;
        height: 78px;
        border-radius: 4px;
      }
    }
    .textStrict {
      float: left;
      display: table;
      width: 420px;
      height: 120px;
      margin-left: 30px;
      line-height: 24px;
    }
    .choose{
      position: absolute;
      left: -14px;
      top: 0;
      width: 24px;
      height: 20px;
      padding: 53px 0 0 34px;
      font-size: 12px;
      color: #999;
      &>a{
        display: inline-block;
        width: 24px;
        height: 20px;
        background: url("../../img/choose.png") no-repeat 0 -20px;
      }
      &>a:hover{
        background-position: 0 0px;
      }
    }
    .chooseAll{
      float: left;
      margin-top: 30px;
      &>a{
        float: left;
        display: inline-block;
        width: 24px;
        height: 20px;
        margin-left: 23px;
        background: url("../../img/choose.png") no-repeat 0 -20px;
      }
      &>a:hover{
        background-position: 0 0px;
      }
      &>div{
        float: right;
        margin-left: 15px;
        line-height: 20px;
      }
      &>div>span:nth-of-type(2):before{
        width:1px;
        border:1px solid #ddd;
        margin-right: 15px;
        margin-left: 10px;
        content: '';
      }
    }
    .unit {
      vertical-align: middle;
      display: table-cell;
    }
    .num{
      position: relative;
    }
    .num i{
      position: absolute;
      display: inline-block;
      width: 34px;
      height: 37px;
      margin-right: 5px;
      background: url(../../img/add.jpg) no-repeat;
      background-size: 100% auto;
      line-height: 40px;
      text-indent: -9999em;
      cursor: pointer;
      -moz-user-select: -moz-none;
      -khtml-user-select: none;
      -webkit-user-select: none;
    }
    .num i:nth-of-type(1){
      top: 44px;
      left: 76px;
      background-position: 0 -60px;
    }
    .num i:nth-of-type(2){
       top: 44px;
       left: 145px;
       background-position: 0 0;
     }
    .num i:nth-of-type(2):hover{
      background-position: 0 -120px;
    }
    .mid {
      height: 120px;
      display: table;
    }
    .storeAllPrice {
      & > div {
        padding: 21px 30px;
        border-top: 1px solid #EBEBEB;
        line-height: 30px;
        text-align: right;
        & > p {
          line-height: 30px;
          text-align: right;
          span {
            float: right;
            width: 157px;
            font-weight: 700;
          }
        }
      }
    }
    .submit {
      overflow: hidden;
      & > div:nth-of-type(2):after {
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
      }
      & > div:nth-of-type(2) {
        padding: 22px 29px 19px 30px;
        background: #F5F5F5;
        background: linear-gradient(#FCFCFC, #F5F5F5);
        border-top: 1px solid #DADADA;
        box-shadow: -3px 0 8px rgba(0, 0, 0, .04);
        &>div:nth-of-type(1){
          border-left: 1px solid #e1e1e1;
          padding: 0 20px;
        }
        &>div{
          float: right;
          text-align: right;
          margin-right: 20px;
          &>div{
            color: #959595;
            line-height: 25px;
          }
          &>span {
            font-size: 14px;
            display: inline-block;
            color: #323232;
            span {
              display: inline-block;
              margin-top: -4px;
              font-size: 18px;
              color: #d44d44;
              font-weight: 700;
            }
          }
        }
        button {
          float: right;
          width: 136px;
          font-size: 16px;
          height: 46px;
          display: block;
          border: none;
          padding: 1px;
          border-radius: 6px;
          background: linear-gradient(#6F97E5, #527ED9);
          text-align: center;
          text-shadow: rgba(255, 255, 255, .496094) 0 1px 0;
          font-family: 'Microsoft Yahei', '微软雅黑', 'PingFang SC', sans-serif;
          cursor: pointer;
          -webkit-user-select: none;
          outline: none;
          color: white;
          transition: all .3s ease;
        }
        button:hover {
          background: linear-gradient(#6D95E4, #5480DA);
        }
      }
    }
  }
  .doThing{
    float: right;
    width: 79px;
    padding-right: 56px;
    text-align: right;
  }
  .delete{
    float: right;
    width: 137px;
    padding: 49px 0 0;
    font-size: 12px;
    line-height: 24px;
    &>div{
      display: block;
      width: 24px;
      height: 24px;
      margin: 0 auto;
      color: #C2C2C2;
      background: url("../../img/delete.jpg");
      -webkit-background-size: 100% auto;
      background-size: 100% auto;
      -moz-transition: none;
      -webkit-transition: none;
      -o-transition: none;
      transition: none;
    }
    &>div:hover{
      background-position: 0 24px;
    }
  }
</style>

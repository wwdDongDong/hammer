<template>
  <div>
    <div class="order width">
      <div class="address">
        <div>收货信息</div>
        <div>
          <ul>
            <li>
              <p>请填写新地址</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="invoice">
        <div>发票信息</div>
        <div>
          <p>
            <span>发票类型：电子发票</span>
            <a href="http://www.smartisan.com/support/#/instruction?anchor=electronicInvoice" target="_blank" class="invoice-tips icon-font">L</a>
          </p>
          <p>
            <span>发票抬头</span>
            <input type="radio" name="invoice_type" class="fn-hide" value="0" data-id="0">
            <span>个人</span>
            <input type="radio" name="invoice_type" class="fn-hide" value="0" data-id="0">
            <span>单位</span>
          </p>
          <p>发票内容：购买商品明细</p>
          <p>  电子发票是税务局认可的有效收付款凭证，可作为售后服务凭据。电子发票打印后可以用于企业报销。  </p>
        </div>
      </div>
      <div class="shop">
        <div>购物清单</div>
        <div>
          <div class="OrderTitle">
            <span class="name">商品名称</span>
            <span class="subtotal">小计</span>
            <span class="num">数量</span>
            <span class="price">单价</span>
          </div>
          <div class="storeStrict">
            <div style="padding-left: 29px">
              <a href="" class="imgLogo"><img src="http://image.smartisanos.cn/resource/c79a73ffc6f8e782160d978f49f543dc.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp" alt=""></a>
              <div class="textStrict">
                <div class="unit">
                  <a href="http://www.smartisan.com/shop/#/item/100026601" title="Smartisan 原装 Type-C 数据线（白色）" target="_blank">Smartisan 原装 Type-C 数据线（白色）</a>
                </div>
              </div>
              <div class="subtotal mid">
                <div class="unit">
                  <strong>￥39</strong>
                </div>
              </div>
              <div class="num mid">
                <div class="unit">
                  <span>1</span>
                </div>
              </div>
              <div class="price mid">
                <div class="unit">
                  <strong>￥39</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="storeAllPrice">
            <div>
              <p>商品总计 <span>￥39.00</span></p>
              <p>运费 <span>+￥15.00</span></p>
            </div>
          </div>
          <div class="submit">
            <div>
              <button>提交订单</button>
              <span>
                应付金额
                <span>￥ 54.00</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.order{
  padding: 20px 0 25px;
}
.address,.invoice,.shop{
  margin-bottom: 30px;
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
.invoice{
  &>div:nth-of-type(2){
    padding:22px 29px 29px 28px;
    p{
      height: 36px;
      line-height: 36px;
      color: #666;
    }
    p:nth-of-type(2){
      input{
        margin: 0 3px 0 6px;
      }
      span:nth-of-type(2){
        margin: 0 3px 0 3px;
      }
    }
    p:nth-last-of-type(1){
      padding-top: 25px;
      margin-top: 11px;
      border-top: 1px solid #E5E5E5;
      line-height: 12px;
      text-indent: 10px;
      font-size: 12px;
      color: #999;
    }
  }
}
.shop{
  .OrderTitle{
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
  .storeStrict{
    overflow: hidden;
  }
  .name{
    float: left;
  }
  .subtotal,.price,.num{
    float: right;
    width: 132px;
    padding-right: 29px;
    text-align: right;
  }
  .price{
    font-weight: 700;
  }
  .imgLogo{
    margin-top: 15px;
    border: 1px solid #EBEBEB;
    float: left;
    img{
      width: 78px;
      height: 78px;
      border-radius: 4px;
    }
  }
  .textStrict{
    float: left;
    display: table;
    width: 420px;
    height: 120px;
    margin-left: 30px;
    line-height: 24px;
  }
  .unit{
    vertical-align: middle;
    display: table-cell;
  }
  .mid{
    height: 120px;
    display: table;
  }
  .storeAllPrice{
    &>div{
      padding: 21px 30px;
      border-top: 1px solid #EBEBEB;
      line-height: 30px;
      text-align: right;
      &>p{
        line-height: 30px;
        text-align: right;
        span{
          float: right;
          width: 157px;
          font-weight: 700;
        }
      }
    }
  }
  .submit{
    &>div:after{
      display: block;
      font-size: 0;
      content: " ";
      clear: both;
      height: 0;
    }
    &>div{
      padding: 22px 29px 19px 30px;
      background: #F5F5F5;
      background: linear-gradient(#FCFCFC,#F5F5F5);
      border-top: 1px solid #DADADA;
      box-shadow: -3px 0 8px rgba(0,0,0,.04);
      span{
        float: right;
        padding: 0 40px;
        line-height: 50px;
        font-size: 14px;
        display: inline-block;
        span{
          display: inline-block;
          margin-top: -4px;
          font-size: 24px;
          color: #d44d44;
          font-weight: 700;
        }
      }
      button{
        float: right;
        width: 136px;
        font-size: 16px;
        height: 46px;
        display: block;
        border: none;
        padding: 1px;
        border-radius: 6px;
        background: linear-gradient(#6F97E5,#527ED9);
        text-align: center;
        text-shadow: rgba(255,255,255,.496094) 0 1px 0;
        font-family: 'Microsoft Yahei','微软雅黑','PingFang SC',sans-serif;
        cursor: pointer;
        -webkit-user-select: none;
        outline:none;
        color: white;
        transition: all .3s ease;
      }
      button:hover{
        background: linear-gradient(#6D95E4,#5480DA);
      }
    }
  }
}
.address{
  &>div:nth-of-type(2){
    &>ul{
      list-style: none;
      padding: 30px 13px 0;
      li{
        position: relative;
        overflow: hidden;
        float: left;
        width: 276px;
        height: 158px;
        margin: 0 0 30px 16px;
        border: 1px solid #E5E5E5;
        border-radius: 3px;
        background: #FAFAFA;
        line-height: 14px;
        text-align: left;
        word-wrap: break-word;
        word-break: normal;
        color: #626262;
        cursor: pointer;
        -moz-user-select: -moz-none;
        -webkit-user-select: none;
        -o-user-select: none;
        user-select: none;
        p{
          height: 14px;
          padding-top: 85px;
          line-height: 14px;
          text-align: center;
          color: #999;
        }
        p:before{
          content: '+';
          display: block;
          position: absolute;
          left: 50%;
          top: 54px;
          height: 24px;
          margin-left: -10px;
          line-height: 24px;
          text-align: center;
          font-size: 24px;
          font-family: SmartisanIconFont;
          color: #626262;
        }
      }
      li:after{
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
      }
    }
  }
}
</style>

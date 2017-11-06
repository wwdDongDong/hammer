<template>
  <div>
    <div class="pagStrict">
      <div class="pagStrict_l">
        <ul>
          <li v-for="item,keys in 5" :class="{on: keys===n}" @click="liClick(keys)">
            <img src="http://image.smartisanos.cn/resource/c79a73ffc6f8e782160d978f49f543dc.jpg?x-oss-process=image/resize,w_108/quality,Q_90/format,webp" alt="">
          </li>
        </ul>
        <div class="storeContent">
          <img src="http://image.smartisanos.cn/resource/c79a73ffc6f8e782160d978f49f543dc.jpg?x-oss-process=image/resize,w_880/quality,Q_90/format,webp" alt="">
        </div>
      </div>
      <div class="pagStrict_r">
        <div>
          <div class="storeTitle">
            <div>Smartisan 原装 Type-C数据线</div>
            <div>PTC过温保护、凹形设计、TPE环保材质</div>
          </div>
          <div class="storePrice"><i>￥</i>39.00</div>
        </div>
        <div>
          <div class="chooseColor">
            <span>颜色</span>
            <div style="clear: both"></div>
            <ul>
              <li><a href="" class="a"><i></i></a></li>
            </ul>
          </div>
          <div class="chooseNumber">
            <span>数量</span>
            <div style="clear: both"></div>
            <div class="addNumber">
              <div>-</div>
              <span>0</span>
              <div>+</div>
            </div>
          </div>
        </div>
        <div>
          <button>加入购物车</button>
          <router-link to="/order" tag="button">现在购买</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        n: 0
      }
    },
    methods: {
      liClick (keys) {
        this.n = keys
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
.pagStrict{
  width: 1098px;
  padding: 60px;
  margin-bottom: 20px;
  overflow: hidden;
  background: #fff;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,.14);
  box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
}
.pagStrict_l{
    width: 635px;
    height: 440px;
    float: left;
    overflow: hidden;
    &>ul{
      list-style: none;
      width: 79px;
      float: left;
      .on{
        border: 3px solid #ccc;
      }
      li{
        padding: 10px;
        border: 1px solid rgba(0,0,0,.06);
        width: 54px;
        height: 54px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 12px;
        img{
          width:100%;
        }
      }
      li:nth-of-type(1){
        margin-top: 0;
      }
    }
  .storeContent{
    width: 440px;
    height: 480px;
    float: left;
    img{
      width:100%;
    }
  }
  }
.pagStrict_r{
  float: right;
  width:460px;
  height: 440px;
  &>div:nth-of-type(1){
    padding: 8px 8px 18px 10px;
    position: relative;
  }
  .storeTitle{
    &>div:nth-of-type(1){
      font-size: 24px;
      line-height: 1.25;
      color: #000;
      margin-bottom: 13px;
    }
    &>div:nth-of-type(2){
      font-size: 14px;
      line-height: 1.5;
      color: #bdbdbd;
    }
  }
  .storePrice{
    position: absolute;
    right: 8px;
    bottom: 8px;
    font-size: 24px;
    color: #d44d44;
    font-weight: 700;
    i{
      padding-right: 2px;
      font-size: 16px;
    }
  }
  &>div:nth-of-type(2){
    padding: 29px 0 8px 10px;
    border-top: 1px solid #ebebeb;
    overflow: hidden;
  }
  .chooseColor,.chooseNumber{
    margin-bottom: 19px;
    float: left;
    &>span{
      float: left;
      padding-right: 20px;
      font-size: 14px;
      color: #8d8d8d;
      line-height: 36px;
      overflow: hidden;
    }
  }
  .chooseColor{
    ul{
      float: left;
      line-height: 36px;
      margin: -10px 0 0 -10px;
      width: 402px;
      list-style: none;
      li{
        float: left;
        margin: 10px 0 0 10px;
        a{
          border-color: #B2B2B2;
          i{
            position: absolute;
            left:calc(50% - 14px);
            top:calc(50% - 13.3px);
            width: 26px;
            height: 26px;
            display: inline-block;
            border-radius: 50%;
            border: 1px solid #B2B2B2;
          }
        }
      }
    }
  }
  .chooseNumber{
    .addNumber{
      line-height: 36px;
      float: left;
      width: 392px;
      &>div{
        float: left;
        width: 30px;
        height: 30px;
        font-weight: 700;
        text-align: center;
        line-height: 30px;
        border: 1px solid #fff;
        box-shadow: 0 0 17px 0 #ddd;
        border-radius: 50%;
        color: #ddd;
      }
      &>div:hover{
        background-color: #E5E5E5;
      }
      &>span{
        float: left;
        display: inline-block;
        width: 56px;
        height: 18px;
        margin: 7px 0 0;
        border: none;
        border-radius: 3px;
        line-height: 18px;
        text-align: center;
        font-size: 14px;
        color: #333;
      }
    }
  }
  &>div:nth-of-type(3){
    border-top: 1px solid #ebebeb;
    padding: 30px 0 0 10px;
    &>button{
      float: left;
      display: inline-block;
      width: 143px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      border-radius: 7px;
      cursor: pointer;
      outline:none;
    }
    &>button:nth-of-type(1){
      background: #fafafa;
      border: 1px solid #5c81e3;
      background-image: -webkit-linear-gradient(#779ae9,#5078df);
      background-image: linear-gradient(#779ae9,#5078df);
      color: #fff;
    }
    &>button:nth-of-type(1):hover{
      transition: all .15s ease-out;
      box-shadow: inset 0 1px 1px #7696DE,inset 0 0 2px #627DCA,inset 0 -2px 3px #5A77C7,inset 0 0 100px rgba(48,77,147,.4);
    }
    &>button:nth-of-type(2):hover{
      transition: all .15s ease-out;
      background: linear-gradient(#f6f6f6,#ededed);
    }
    &>button:nth-of-type(2){
      margin-left: 20px;
      background: pink;
      background: -webkit-linear-gradient(#fff,#fafafa);
      background: linear-gradient(#fff,#fafafa);
      border: 1px solid #e0e0e0;
      color: #8c8c8c;
    }
  }
}
</style>

<template>
  <div id="app">
    <transition name="fade">
      <div class="warningPag" v-if="deletePage">
        <div class="warning">
          <div>
            <div>
              提示
            </div>
            <span class="icon_font close">X</span>
          </div>
          <div>
            <div class="imgWarning"></div>
            确认删除地址？
          </div>
          <div>
            <button class="btn">取消</button>
            <button class="btn">确定</button>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="addressPag" v-show="addNewAddress">
        <div class="address">
          <div>
            <div>
              管理收货地址
            </div>
            <span @click="closeReceive()" class="icon_font close">X</span>
          </div>
          <div class="inpInfo">
          <input type="text" placeholder="收货人姓名" class="name" v-model="nameRe"><br>
          <input type="text" placeholder="手机号" class="tel" v-model="telRe">
          <div class="mayChoose">
            <input type="text" placeholder="区号（可选）" class="num">
            <input type="text" placeholder="区号（固定电话）" class="fixTel">
          </div>
          <select name="" class="sheng" v-model="shengRe" @click="sheng()">
            <option selected>请选择省份</option>
            <option :value="item.area_name" v-for="item,key in address">{{item.area_name}}</option>
          </select>
          <div>
            <select name="" class="city" v-model="cityRe" @click="city()">
              <option selected>请选择城市</option>
              <option :value="item.area_name" v-for="item,key in cityList">{{item.area_name}}</option>
            </select>
            <select name="" class="country" v-model="countryRe">
              <option selected>请选择县区</option>
              <option :value="item.area_name" v-for="item,key in countryList">{{item.area_name}}</option>
            </select>
          </div>
          <input type="text" class="strictAddress" placeholder="详细地址，如街道名称，楼层，门牌号码等" v-model="addressRe">
          <div class="setDefault">
            <input type="radio" value="true" id="defaultAddress" v-model="ok">
            <label for="defaultAddress">
              <span>设置为默认</span>
            </label>
          </div>
          <button class="save" @click="save(ok)">保存</button>
        </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="editPag" v-show="changeMessage">
        <div class="address">
          <div>
            <div>
              管理收货地址
            </div>
            <span @click="closeChange()" class="icon_font close">X</span>
          </div>
          <div class="inpInfo">
            <input type="text" placeholder="收货人姓名" class="name" v-model="nameRe"><br>
            <input type="text" placeholder="手机号" class="tel" v-model="telRe">
            <div class="mayChoose">
              <input type="text" placeholder="区号（可选）" class="num">
              <input type="text" placeholder="区号（固定电话）" class="fixTel">
            </div>
            <select name="" class="sheng" v-model="shengRe" @click="sheng()">
              <option selected>请选择省份</option>
              <option :value="item.area_name" v-for="item,key in address">{{item.area_name}}</option>
            </select>
            <div>
              <select name="" class="city" v-model="cityRe" @click="city()">
                <option selected>请选择城市</option>
                <option :value="item.area_name" v-for="item,key in cityList">{{item.area_name}}</option>
              </select>
              <select name="" class="country" v-model="countryRe">
                <option selected>请选择县区</option>
                <option :value="item.area_name" v-for="item,key in countryList">{{item.area_name}}</option>
              </select>
            </div>
            <input type="text" class="strictAddress" placeholder="详细地址，如街道名称，楼层，门牌号码等" v-model="addressRe">
            <div class="setDefault">
              <input type="radio" name="defaultAddress" value="true" class="defaultAddress" v-model="ok">
              <label for="defaultAddress">
                <span>设置为默认</span>
              </label>
            </div>
            <button class="save" @click="change(ok)">修改</button>
          </div>
        </div>
      </div>
    </transition>
    <div class="header">
      <div>
        <span></span>
        <div>
          <div class="headerMy">
            <a href="" class="touxiang">
              <span class="iconfont icon-touxiang"></span>
              <div>
                <div>
                <div class="toTop"></div>
                <dl>
                  <dd><img src="https://account.smartisan.com/files/00/38/35/8b/avatar.png?1509159600" alt=""></dd>
                  <dt>一路向东</dt>
                </dl>
                <ul>
                  <router-link to="/mydingdan" tag="li">我的订单</router-link>
                  <li>售后服务</li>
                  <li><span></span>我的优惠</li>
                  <li><span></span>账户资料</li>
                  <router-link to="/myAddress" tag="li"><span></span>收货地址</router-link>
                  <li><span></span>退出</li>
                </ul>
              </div>
              </div>
            </a>
            <div class="shopCar">
              <router-link to="/shopCar" tag="span" class="iconfont icon-gouwuche"></router-link>
              <span class="sphere">{{ allCount }}</span>
              <div class="shopCarList">
                <ul v-if="skuCartData.length">
                  <li v-for="index,key in skuCartData">
                    <img :src="index.ali_image">
                    <span @click="del(index,key)"></span>
                    <div>
                      <h4>{{index.title}}</h4>
                      <p>{{index.spec_json.show_name}}</p>
                      <h6>
                        <span>¥</span>
                        <span>{{index.price}}</span>
                        <span>x {{index.count}}</span>
                      </h6>
                    </div>
                  </li>
                  <div>
                    <div>
                      <p>共 <strong>{{allCount}}</strong> 件商品</p>
                      <h5>合计：<span>¥</span><span>{{allPrice}}</span></h5>
                    </div>
                    <router-link to="/shopCar" tag="button">去购物车</router-link>
                  </div>
                </ul>
                <div class="noShopContent" v-if="!skuCartData.length">
                  <span class="iconfont icon-gouwuche"></span>
                  <div>
                    <p>暂无商品哦，快去商店逛逛吧~~~</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul>
            <li>在线商城</li>
            <li>坚果Pro</li>
            <li>Smartisan OS</li>
            <li>欢喜云</li>
            <li>应用下载</li>
            <li>官方论坛</li>
          </ul>
        </div>
      </div>
    </div>
    <router-view/>
    <div class="footer">
      <div>
        <div class="footer_one">
          <ul >
            <li>
              <h3>订单服务</h3>
              <ul>
                <li>购买指南</li>
                <li>支付方式</li>
                <li>送货政策</li>
              </ul>
            </li>
            <li>
              <h3>服务支持</h3>
              <ul>
                <li>售后服务</li>
                <li>维修门店</li>
                <li>零售门店</li>
              </ul>
            </li>
            <li>
              <h3>自主服务</h3>
              <ul>
                <li>热点资讯</li>
                <li>预约购买</li>
                <li>订单流程</li>
              </ul>
            </li>
            <li>
              <h3>媒体中心</h3>
              <ul>
                <li>新闻动态</li>
                <li>官方视频</li>
                <li>图片资源</li>
              </ul>
            </li>
            <li>
              <h3>关于公司</h3>
              <ul>
                <li>公司简介</li>
                <li>加入我们</li>
                <li>联系我们</li>
              </ul>
            </li>
            <li>
              <h3>关注我们</h3>
              <ul>
                <li>新浪微博</li>
                <li>官方微信</li>
                <li>官网贴吧</li>
              </ul>
            </li>
          </ul>
          <div class="footer_right">
            <div>400-619-0909</div>
            <div>周一至周日 9:00-18:00</div>
            <div>
              <span>？</span>
              <span>在线帮助</span>
            </div>
          </div>
        </div>
        <div class="footer_two">
          <div>
            <div>
              Copyright © 2017, Smartisan Digital Co., Ltd. All Rights Reserved.北京锤子数码科技有限公司
              <span><a href="#">法律声明</a></span>
              <span><a href="#">隐私条款</a></span>
              <span><a href="#">开发者中心</a></span>
            </div>
            <div>
              <pre>京ICP备14041720号-1    京ICP证140622号    京公网安备11010502025474</pre>
            </div>
          </div>
          <div>
            <ul>
              <li style="display: none">
                英文
              </li>
              <li>
                中文
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      skuCartData: this.$store.state.skuCartData,
      address: [],
      cityList: [],
      countryList: [],
      addressRe: '',
      cityRe: '请选择城市',
      shengRe: '请选择省份',
      countryRe: '请选择县区',
      telRe: '',
      nameRe: '',
      ok: false
    }
  },
  computed: {
    allPrice () {
      return this.$store.state.zongPrice
    },
    allCount () {
      return this.$store.state.zongCount
    },
    deletePage () {
      return this.$store.state.deletePage
    },
    addNewAddress () {
      return this.$store.state.addNewAddress
    },
    changeMessage () {
      return this.$store.state.editAddress // 修改页面
    },
    editAddress () {
      var obj = this.$store.state.changeAddress
      if (this.$store.state.changeAddress.length) {
        this.addressRe = obj.address
        this.cityRe = obj.city
        this.shengRe = obj.sheng
        this.countryRe = obj.country
        this.telRe = obj.tel
        this.nameRe = obj.name
        this.ok = obj.ok
      }
    }
  },
  methods: {
    del (index, key) {
      this.$store.commit('deleteCartData', key)
      this.$store.commit('allPrice')
      this.$store.commit('allCount')
    },
    closeReceive () {
      this.$store.state.addNewAddress = false
    },
    sheng () {
      this.city()
    },
    city () {
      if (this.shengRe !== '请选择省份') {
        this.address.forEach((res) => {
          if (res.area_name === this.shengRe) {
            this.cityList = res.city_list
          }
        })
      }
      this.countryside()
    },
    countryside () {
      if (this.cityRe !== '请选择城市') {
        this.cityList.forEach((res) => {
          if (res.area_name === this.cityRe) {
            this.countryList = res.county_list
            console.log(res)
          }
        })
      }
    },
    save (ok) {
      if (!this.nameRe) {
        alert('请输入收货姓名')
        return false
      }
      if (!this.telRe) {
        alert('请输入电话号码')
        return false
      }
      if (!this.shengRe) {
        alert('请输入省份')
        return false
      }
      if (!this.cityRe) {
        alert('请输入城市名')
        return false
      }
      if (!this.addressRe) {
        alert('请输入详细的收货地址名')
        return false
      }
      this.$store.state.addNewAddress = false
      this.$store.commit('addAddress', {
        address: this.addressRe,
        city: this.cityRe,
        sheng: this.shengRe,
        country: this.countryRe,
        tel: this.telRe,
        name: this.nameRe,
        ok: ok
      })
      this.addressRe = ''
      this.cityRe = '请选择城市'
      this.shengRe = '请选择省份'
      this.countryRe = '请选择县区'
      this.telRe = ''
      this.nameRe = ''
    },
    change (ok) {
      if (!this.nameRe) {
        alert('请输入收货姓名')
        return false
      }
      if (!this.telRe) {
        alert('请输入电话号码')
        return false
      }
      if (!this.shengRe) {
        alert('请输入省份')
        return false
      }
      if (!this.cityRe) {
        alert('请输入城市名')
        return false
      }
      if (!this.addressRe) {
        alert('请输入详细的收货地址名')
        return false
      }
      this.$store.state.editAddress = false
      this.$store.commit('changeAfter', {
        address: this.addressRe,
        city: this.cityRe,
        sheng: this.shengRe,
        country: this.countryRe,
        tel: this.telRe,
        name: this.nameRe,
        ok: ok
      })
      this.addressRe = ''
      this.cityRe = '请选择城市'
      this.shengRe = '请选择省份'
      this.countryRe = '请选择县区'
      this.telRe = ''
      this.nameRe = ''
    },
    closeChange () {
      this.$store.state.editAddress = false
    }
  },
  watch: {
    $router () {
      if (this.$store.state.editAddress) {
        this.editAddress()
      }
    }
  },
  created () {
    axios.get('http://www.easy-mock.com/mock/59f1df9dd00d13585e251066/hammer/addressData').then((res) => {
      this.address = res.data
      console.log(res.data)
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
.header{
  width:100%;
  height: 100px;
  background-color: black;
}
.header>div{
    width:1220px;
    height: 100px;
    margin: 0 auto;
  }
.header>div>span{
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-top: 25px;
  background: url("./img/smartisan-logo.png") left no-repeat;
  float: left;
}
.header>div>div{
  float: right;
}
.header>div>div>ul{
  float: right;
}
.header>div>div>ul>li{
  float: left;
  list-style: none;
  height: 26px;
  padding: 25px 20px 0;
  line-height: 14px;
  font-size: 14px;
  color: #FFF;
  opacity: .6;
  margin-top: 20px;
}
.headerMy,.headerMyTwo{
  float: right;
  margin-top: 42px;
  position: relative;
  &>a{
    margin-left: 40px;
    width: 36px;
    float: left;
    color: #979797;
    text-decoration: none;
    padding-bottom: 20px;
  }
  &>a:hover{
    color: red;
    &>div{
      display: block;
    }
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
.touxiang{
  position: relative;
  .toTop{
    position: absolute;
    content: " ";
    background: url(./img/list.png) no-repeat -49px -43px;
    -webkit-background-size: 240px 107px;
    background-size: 240px 107px;
    width: 20px;
    height: 8px;
    left: 57%;
    top: -8px;
    margin-left: -25px;
  }
  &>div{
    position: absolute;
    padding-top: 20px;
    top:0;
    left:0;
    display: none;
    transition: opacity .15s ease-out;
  }
  &>div>div{
    position: absolute;
    left: -74px;
    top:39px;
    z-index: 12;
    background: white;
    width: 168px;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0,0,0,.15);
    padding-top: 20px;
    dl{
      text-align: center;
      img{
        width: 46px;
        height: 46px;
        border-radius: 50%;
      }
      dt{
        margin-bottom: 16px;
        font-size: 12px;
        line-height: 1.5;
        text-align: center;
        color: #757575;
      }
    }
    ul{
      list-style: none;
      li{
        border-top: 1px solid #f5f5f5;
        display: block;
        padding-left: 54px;
        line-height: 44px;
        height: 44px;
        color: #616161;
        font-size: 12px;
        position: relative;
      }
      li:hover{
        background: #f5f5f5;
      }
      li:before{
        background: url(./img/list.png) no-repeat;
        -webkit-background-size: 240px 107px;
        background-size: 240px 107px;
        content: ' ';
        display: block;
        position: absolute;
        left: 22px;
        top: 48%;
        width: 20px;
        height: 20px;
        margin-top: -8px;
      }
      li:nth-of-type(1):before{
        background-position: 0 -43px;
      }
      li:nth-of-type(2):before{
        background-position: -21px -44px;
      }
      li:nth-of-type(3):before{
        background-position: -21px -81px;
      }
      li:nth-of-type(4):before{
        background-position: 0 -43px;
      }
      li:nth-of-type(5):before{
        background-position: -20px -62px;
      }
      li:nth-of-type(6):before{
        background-position: 0 -81px;
      }
    }
  }
}
.shopCar{
  position: relative;
  &>span:nth-of-type(1){
    padding-bottom: 20px;
  }
}
.shopCarList{
  display: none;
  z-index: 100;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.06),0 20px 40px rgba(0,0,0,.15);
  overflow: hidden;
  width: 360px;
  position: absolute;
  top: 40px;
  left: -134px;
  &>ul{
    list-style: none;
    &>div{
      padding: 20px;
      height: 40px;
      background: #fafafa;
      border-top: 1px solid #f0f0f0;
      border-radius: 0 0 8px 8px;
      box-shadow: inset 0 -1px 0 rgba(255,255,255,.5),0 -3px 8px rgba(0,0,0,.04);
      background: -webkit-linear-gradient(#fafafa,#f5f5f5);
      background: linear-gradient(#fafafa,#f5f5f5);
      color: #000;
      overflow: hidden;
      &>div{
        float: left;
        p{
          font-size: 12px;
        }
        h5{
          font-size: 12px;
          color: #6f6f6f;
          span{
            color: #d44d44;
            display: inline-block;
            font-weight: 700;
          }
          &>span:nth-of-type(1){
            font-size: 12px;
            margin-right: 5px;
          }
          &>span:nth-of-type(2){
            font-size: 18px;
          }
        }
      }
      &>button{
        float: right;
        display: block;
        width: 108px;
        height: 38px;
        background: #688fe8;
        background: -webkit-linear-gradient(#688fe8,#5079e1);
        background: linear-gradient(#688fe8,#5079e1);
        border: 1px solid #5c81e3;
        border-radius: 6px;
        box-shadow: inset 0 1px 0 rgba(255,255,255,.2),0 1px 3px rgba(0,0,0,.2);
        line-height: 38px;
        text-align: center;
        color: #FFF;
        text-shadow: 0 -1px 0 rgba(0,0,0,.15);
      }
    }
    li:hover{
      background: #f5f5f5;
    }
    li{
      height: 80px;
      padding: 20px;
      overflow: hidden;
      &>img{
        width: 80px;
        height: 80px;
        border-radius: 3px;
        float: left;
        border: 1px solid #ddd;
        outline: 2px;
      }
      &>div{
        float: right;
        display: table-cell;
        vertical-align: middle;
        h4{
          width: 185px;
          overflow: hidden;
          word-break: keep-all;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 14px;
          line-height: 16px;
          margin-bottom: 10px;
          color: #000;
        }
        p{
          font-size: 14px;
          line-height: 14px;
          color: #999;
        }
        h6{
          color: #cacaca;
          font-size: 12px;
          line-height: 14px;
          margin-top: 15px;
          span{
            color: #d44d44;
            font-weight: 700;
          }
          span:nth-of-type(3){
            margin-left: 10px;
            display: inline-block;
            color: #cacaca;
          }
          span:nth-of-type(2){
            margin-left: 5px;
            display: inline-block;
            font-size: 14px;
          }
        }
      }
      &>span{
        display: inline-block;
        float: right;
        width: 20px;
        height: 20px;
        margin-right: 5px;
        margin-top: 30px;
        background: url(./img/list.png) no-repeat -50px -60px;
        background-size: 240px 107px;
        line-height: 40px;
        text-indent: -9999em;
        cursor: pointer;
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        top: 44px;
        left: 145px;
      }
      &>span:hover{
        background-position: -75px -60px;
      }
    }
  }
}
.noShopContent{
  padding: 60px 0;
  text-align: center;
  span{
    font-size: 60px;
    color: darkgray;
    display: inline-block;
    margin-bottom: 20px;
  }
  div{
    color: #000;
    font-size: 20px;
  }
}
.shopCar:hover{
  color: red;
  .shopCarList{
    display: block;
  }
}
.footer{
  background: #fafafa;
  border-top: 1px solid #e6e6e6;
  position: relative;
  bottom:0;
  &>div{
    width: 1220px;
    margin-left: auto;
    margin-right: auto;
  }
}
.footer_one{
  height: 100px;
  padding: 100px 0 32px;
  border-bottom: 1px solid #e6e6e6;
  &>ul{
    float: left;
    li{
      list-style: none;
    }
    &>li{
    float: left;
    width: 149px;
    line-height: 1;
    h3{
      color: #646464;
      font-size: 12px;
      padding: 0 0 14px;
    }
    li{
      color: #c3c3c3;
      font-size: 12px;
      padding: 6px 0;
    }
  }
  }
}
.footer_right{
  float: right;
  text-align: right;
  div:nth-of-type(1){
    cursor: default;
    color: #646464;
    font-size: 30px;
  }
  div:nth-of-type(2){
    margin-top: 5px;
    font-size: 12px;
    line-height: 18px;
    color: #c3c3c3;
    text-align: right;
   }
  div:nth-of-type(3){
    width: 102px;
    height: 32px;
    line-height: 32px;
    background: linear-gradient(#fcfcfc,#f5f5f5);
    cursor: pointer;
    font-size: 14px;
    padding: 0 0 0 26px;
    margin-top: 8px;
    text-align: left;
    color: #5079d9;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    float: right;
    span:nth-of-type(1){
      width: 15px;
      height: 15px;
      color: white;
      font-size: 12px;
      display: inline-block;
      border-radius: 50%;
      text-align: center;
      line-height:15px;
      background-color: #5079D9;
    }
  }
}
.footer_two{
  color: #434d55;
  font-size: 12px;
  padding: 40px 0;
  &>div:nth-of-type(1){
    height: 15px;
    color: #757575;
    font-weight: 400;
    margin-bottom: 5px;
    &>div:nth-of-type(1){
      font-size: 12px;
      height: 12px;
      line-height: 12px;
      color: #757575;
    }
    span{
      margin-left: 12px;
      a{
        text-decoration: none;
      }
    }
    span:before{
      content: '';
      height:12px;
      border:1px solid #ddd;
      margin-right: 12px;
    }
  }
  &>div:nth-of-type(2){
    float: right;
    ul{
      list-style: none;
    }
    li{
      padding-left: 20px;
      background: url("img/flag.png") no-repeat;
    }
  }
}
.headerMyTwo{
  margin-top: 0;
}
.close{
  display: block;
  position: absolute;
  right: 10px;
  top: 15px;
  z-index: 20;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  color: #000;
  opacity: .2;
  cursor: pointer;
  -webkit-transition: all .3s linear;
  -moz-transition: all .3s linear;
  -o-transition: all .3s linear;
  transition: all .3s linear;
}
.warningPag,.addressPag,.editPag{
   position: fixed;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   z-index: 1001;
   text-align: center;
   background: rgba(0,0,0,0.5);
   transition: background .2s ease-in;
 }
.warning{
  width: 436px;
  min-width: 200px;
  border-radius: 10px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1) inset,1px 0 3px rgba(0,0,0,.1);
  vertical-align: middle;
  display: inline-block;
  background: url("img/gray-bg.png");
  position: absolute;
  top:calc(50% - 165px);
  left:calc(50% - 218px);
  &>div:nth-of-type(1){
    overflow: hidden;
    width: 100%;
    height: 60px;
    background: #F5F5F5;
    background: linear-gradient(#FFF,#F5F5F5);
    border-bottom: 1px solid #DCDCDC;
    border-radius: 10px 10px 0 0;
    box-shadow: 2px 0 5px rgba(0,0,0,.1);
    &>div{
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      color: #666;
      line-height: 60px;
    }
  }
  &>div:nth-of-type(2){
    max-width: 310px;
    min-height: 50px;
    margin: 50px auto;
    line-height: 24px;
    text-align: center;
    word-wrap: break-word;
    word-break: break-all;
    font-size: 16px;
    .imgWarning{
      display: inline-block;
      position: relative;
      left: -15px;
      top: 20px;
      width: 50px;
      height: 50px;
      margin-top: -20px;
      background-image: url("./img/warning.png");
      background-repeat: no-repeat;
    }
  }
  &>div:nth-of-type(3){
    background: url("img/bottom-bar-bg.png");
    height: 51px;
    padding: 18px 10px 0;
    border-radius: 0 0 13px 13px;
    .btn{
      width: 100px;
      height: 40px;
      transition: all .3s ease;
      outline: none;
      border-radius: 6px;
      font-family: 'Microsoft Yahei','微软雅黑','PingFang SC',sans-serif;
    }
    button:nth-of-type(1){
      border: 1px solid #dbdde2;
      float: left;
      color: black;
      background: linear-gradient(#fff,#ececec);
    }
    button:nth-of-type(1):hover{
      background: linear-gradient(#f2f2f2,#e1e1e1);
      box-shadow: none;
    }
    button:nth-of-type(2){
      border: 1px solid #dbdde2;
      float: right;
      color: white;
      background: linear-gradient(#739fe1,#5f7ed7)
    }
    button:nth-of-type(2):hover{
      box-shadow: inset 0 1px 3px #83a9e1,inset 0 0 2px #627dca,inset 0 -2px 3px #5a77c7,inset 0 0 100px rgba(48,77,147,.4);
    }
    button:nth-of-type(2){
      border: 1px solid #dbdde2;
      float: right;
      color: white;
      background: linear-gradient(#5598c9,#2a6da2);
    }
  }
}
.address{
  width: 436px;
  min-width: 200px;
  border-radius: 10px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1) inset,1px 0 3px rgba(0,0,0,.1);
  vertical-align: middle;
  display: inline-block;
  position: absolute;
  top:calc(50% - 230px);
  left:calc(50% - 218px);
}
.address {
  &>div:nth-of-type(1){
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    background:linear-gradient(#ffffff,#f5f5f5);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .name,.tel{
    width: 80%;
    height: 30px;
    border-radius: 5px;
    font-size: 15px;
    padding-left: 10px;
    margin-bottom: 10px;
  }
  .inpInfo{
    background: white;
    padding: 20px 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
.num,.fixTel,.strictAddress{
  height: 30px;
  border-radius: 5px;
  font-size: 15px;
  padding-left: 10px;
}
.strictAddress{
  width:80%;
}
.mayChoose{
    margin-bottom: 10px;
    .num{
      width: 26%;
      margin-right: 30px;
    }
    .fixTel{
      width:43%;
    }
  }
.sheng,.city,.country{
  height: 34px;
  font-size: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
}
.sheng{
  width: 83%;
}
.city{
  width:30%;
  margin-right: 47px;
}
.country{
  width:40%;
}
.save{
  width:80%;
  height: 40px;
  background: linear-gradient(#1e90ff,#0088cc);
  color: white;
  border: none;
  outline:none;
  -webkit-border-radius:5px;
  -moz-border-radius:5px;
  border-radius:5px;
  transition: all .5s;
}
.save:hover{
  background: linear-gradient(#0d5ab1,#357ebd);
}
.setDefault{
  text-align: left;
  padding: 10px 0 10px 35px;
}
</style>

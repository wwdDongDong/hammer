<template>
  <div class="successSub width">
    <div>支付订单</div>
    <div>
      <div>
        <h3>提交订单成功</h3>
        <div>请在 <span>24小时内完成支付</span>，超时订单将自动取消</div>
        <div>我们将在您完成支付后的72小时内发货</div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  created () {
    setTimeout(() => {
      this.$router.push({path: '/myOrder'})
    }, 3000)
  }
}
</script>
<style scoped lang="scss">
  .successSub{
    margin-top: 30px;
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
    &>div{
      padding: 60px 0 55px;
      text-align: center;
      line-height: 24px;
      font-size: 14px;
      color: #999;
      h3{
        padding-bottom: 14px;
        line-height: 36px;
        text-align: center;
        font-size: 36px;
        color: #212121;
      }
      span{
        font-weight: bolder;
        color: #d44d44;
      }
    }
    }
  }
</style>

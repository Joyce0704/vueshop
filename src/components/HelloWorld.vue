<template>
  <div id="app">
     <div style="width:100%;">
     <img src="https://web-data.zmlearn.com/image/j2k5bvt4pLR8briU1brt6h/banner_0_4th.png" style="width: 100%;"/></div>
   <!-- 切换城市 -->
     <div class="location-container">
      <img  src="https://web-data.zmlearn.com/image/8cGtjXXX5JrRP7Cc8jEQGJ/MAP_PIN.svg" alt="">
      <span class="location_text">fff</span>
     </div>
  <!-- 超值 -->
  <div class="super">
    <div>
         <img  src="https://web-data.zmlearn.com/image/5221979f-6bcf-48cd-ae0e-c09c3e8eb7b5.png">
    </div>
    <div>
      <div  class="super_text">小学，初中，高中</div>
    </div>
  </div>
  <div style="magin-bottom:20px;">
  <div class="general">
    <span class="casetitle">全科专题突破小班课，视频互动，1天2节课，每节45分钟，送精美电子讲义</span>
  </div>
 <div class="row3 flex">
       <span class="tag">名师授课</span>
       <span class="desc">一线师资在家学</span>
   </div>
   </div>
  <div class="division-1"></div>
   <!-- 年级选择 -->
 <div  id="grade-select">
   <div class="grades">
     <div class="grades-title">
       <span> 年级选择</span>
     </div>
    <div class="grades-list flex flex-wrap jcontent-space-between">
      <div class="meta" style="padding-left: 0px;">
        <span>四年级</span>
    </div>
    <div class="meta" style="padding-left: 0px;">
      <span>五年级</span>
    </div>
    <div class="meta" style="padding-left: 0px;">
    <span>六年级</span>
    </div>
    <div class="meta" style="padding-left: 0px;">
      <span >初一</span>
    </div>
    <div class="meta" style="padding-left: 0px;">
        <span >初二</span>
    </div>
    <div class="meta" style="padding-left: 0px;">
    <span >初三</span>
    </div>
    <div class="meta" style="padding-left: 0px;">
        <span >高一</span>
    </div>
    <div class="meta" style="padding-left: 0px;">
        <span >高二</span>
      </div>
 </div>
  </div>
</div>
<div id="subject-select">
  <div class="grades">
  <div class="grades-title">
    <span>科目选择</span>
  </div>
 <div class="grades-list flex flex-wrap jcontent-space-between">
  <div class="meta" style="padding-left: 0px;">
    <span>语文</span>
    </div>
  <div  class="meta" style="padding-left: 0px;">
    <span>数学</span>
  </div>
  <div  class="meta" style="padding-left: 0px;">
      <span>英语</span>
  </div>
  </div>
  </div>
  <div id="lesson-time" class="lesson-time" style="">
    <span >上课时间：</span>
    <span  class="lesson-time-text">1月，时间可选</span>
  </div>
    <!-- 输入手机号 -->
    <div class="input-phone">
      <input type="tel" placeholder="请输入您的手机号码" maxlength="13">
   </div>
   <div  >
   <div class="phone-code">
     <input  type="tel" maxlength="6" placeholder="请输入验证码">
     <button  class="unclick"> 获取验证码 </button>
     </div>
   </div>
</div>
</div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
.location-container{
    position: absolute;
    z-index: 100;
    top: .26666667rem;
    left: .42666667rem;
    height: .53333333rem;
    padding-left: .13333333rem;
    padding-right: .26666667rem;
    border-radius: .26666667rem;
    background: rgba(0,0,0,.4);
    color: #fff;
    font-size: .32rem;
    text-align: center;
    height: 1.4rem;
}
.location-container img{
    height: 1rem;
}
.super{
  display: flex;
  justify-content: space-between;
}
.super img{
  width: 50%;
}
.super_text{
    border: 1px solid red;
    width: 108px;
    font-size: 0.7rem;
    color: red;
    text-align: center;
}
.general{
 width: 100%;
}
.casetitle
{
    color: #333;
    font-size: 1rem;
    line-height: .74666667rem;
    font-weight: 700;
    width: 100%;
    margin-top: .13333333rem!important;
}
.row3{
    padding-top: 0.9rem;
    font-size: .32rem;
    line-height: 1.50666667rem;
    padding-bottom: 0.5rem;
}

.row3 .tag {
    padding-left: .21333333rem;
    padding-right: .21333333rem;
    border-radius: .05333333rem;
    color: #502b0e;
    background: linear-gradient(136deg,#ffebb8,#ffc48b);
}
.row3 .desc{
    padding-left: .21333333rem;
    color: #999;
}
#grade-select{

  margin-top: .625rem;
}
.division-1{
    width: 100%;
    height: 0.85rem;
    background: #f5f5f6;
}
.grades {
    padding-left: .53333333rem;
    padding-right: .53333333rem;
}
.meta {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: .21333333rem;
    margin-top: .32rem;
    width: 6.66666667rem;
    line-height: 2.56666667rem;
    font-size: 1rem;
    border-radius: .10666667rem;
    border: 1px solid #eee;
    color: #333;
    text-align: center;
}
.grades-title {
    font-size: 1rem;
    font-weight: 700;
    color: #333;
}
.grades-list{
       padding-bottom: 22px;
}
.flex-wrap {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.jcontent-space-between {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.input-phone input{
    width: 21.146667rem;
    top: 0;
    left: 0;
    border: none;
    text-indent: .56rem;
    background: #f8f8f8;
    height: 2.5rem;
    border-radius: 1.25rem;
    margin: 10px;
}
.phone-code{
     display: flex;
     float: left;
     margin: 15px;
}
.phone-code input {
    border: none;
    text-indent: .56rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #f5f5f6;
    height: 2.06666667rem;
    width: 7.41333333rem;
    border-radius: .58666667rem;
    margin-bottom: .37333333rem;
    border-radius: 1.25rem;
}
.unclick {
    background: #f8f8f8;
    border:none;
    border-radius: .625rem;
    margin-left: 70px;
    width: 7rem;
}
</style>

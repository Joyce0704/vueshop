<template>
 <div>
<!-- <div class="chaxun">
  <input class="chaxun_neirong" type="text" placeholder="请输入要查询的内容" />
  <button class="chaxun_anniu">查询</button>
</div> -->
<!-- 轮播图 -->
<div class="carousel-wrap">
    <ul>
    <!-- <transition-group  tag="ul" class="slide-ul" name="list"> -->
    <li v-for="(list,index) in slideList" :key="index" v-show="index===currentindex" @mouseenter="stop" @mouseleave="go">
      <a>
      <img :src="list.image">
      </a>
     </li>
  </ul>
    <!-- </transition-group> -->
    <div  class="carousel-items">
        <span v-for="(item,index) in slideList.length" :key="index" :class="{'active':index===currentindex}"  @mouseover="change(index)"></span>
    </div>
</div>
<!--导航快捷菜单-->
<div class="caidan">
  <a href="chanpin_list.html" class="caidan_lianjie">
    <img src="static/img/menu01.png"  class="caidan_img" />
  <p>最新产品</p>
  </a>
  <a href="xinwen_list.html?cs_lxid=11&cs_lxmc=活动列表" class="caidan_lianjie">
   <img src="static/img/menu02.png"  class="caidan_img" />
   <p>活动列表</p>
  </a>
   <a href="xinwen_list.html?cs_lxid=10&cs_lxmc=帮助中心" class="caidan_lianjie">
     <img src="static/img/menu03.png"  class="caidan_img" />
  <p>帮助中心</p>
   </a>
   <a href="u_index.html" class="caidan_lianjie" id="yhzx_yes">
     <img src="static/img/menu04.png"  class="caidan_img" />
   <p>用户中心</p>
   </a>
</div>
<!--最新通知-->
<div v-for="xinwen in xinwens" :key="xinwen">
  <div class="tongzhi">
    <a  class="tongzhi_lianjie">
    <img class="tongzhi_zuo" src="static/img/news.png">
    <p class="tongzhi_neirong">{{xinwen.mybiaoti}}</p>
    <img class="tongzhi_you" src="static/img/right.png" />
 </a>
</div>
</div>
<!-- 区块标题 -->
<div class="qukuai">
     <p class="qukuai_zuo"></p>
      <p class="qukuai_zhong">最新上架</p>
      <a href="#" class="qukuai_you">更多></a>
</div>
<!-- 最新上架 -->
<div>
<div class="cp_zuixin" v-for=" zc in zxcps" :key="zc">
   <a class="cp_lianjie">
        <img v-bind:src="zc.cp_tupian"  class="cp_img">
       <p class="cp_mc">{{zc.cp_mingcheng}}</p>
        <p class="cp_mc2">${{zc.jiage}}</p>
   </a>
</div>
</div>

</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      // 轮播代码
      slideList: [
        {
          'clickUrl': '#',
          'desc': '图片轮播说明1',
          'image': 'static/img/ban1.jpg'
        },
        {
          'clickUrl': '#',
          'desc': '图片轮播说明2',
          'image': 'static/img/ban2.jpg'
        },
        {
          'clickUrl': '#',
          'desc': '图片轮播说明3',
          'image': 'static/img/ban3.jpg'
        }
      ],
      currentindex: 0,
      time: '',
      xinwens:[],
      zxcps:[]
    }
  },

  mounted: function () {
    this.Getxinwen();
    this.GetCps_zuixin();
  },

  methods: {
    go () {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 3000)
    },
    // 轮播方法
    stop () {
      clearInterval(this.timer)
      this.timer = null
    },
    change (index) {
      this.currentindex = index
    },
    // 自动轮播
    autoPlay () {
      this.currentindex++
      if (this.currentindex > this.slideList.length - 1) {
        this.currentindex = 0
      }
    },
    // 最新通知
    Getxinwen: function () {
      axios.get('http://vue.yaoyiwangluo.com/wx_news_list.asp',
        {
          params: {
            cs_shuliang: 3, // 数量
            cs_lxid: 11 // 类型id
          }
        }).then(response => {
      
        this.xinwens = response.data
      })
    },
    GetCps_zuixin:function(){
      axios.get('http://vue.yaoyiwangluo.com/wx_CpList_top4.asp',
      { 

      }).then(response=>{
        console.log(response.data);
        this.zxcps=response.data;
      })
    }
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
/* 轮播图 */
.carousel-wrap {
   height: 180px;
   width: 100%;
   overflow: hidden;
   background-color: #fff;
}
.slide-ul {
  position: relative;
  width: 100%;
  height: 180px;
  list-style-type: none;
}

.slide-ul li {
  position: absolute;
  width: 100%;
  height: 180px;
  list-style-type: none;
}

.slide-ul img {
  width: 100%;
  height: 180px;
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 180px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}
.carousel-items span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
}
.carousel-items .active {
  background-color: orange;
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0);
}
/* 菜单 */
.caidan{display: flex;padding: 10px;}
.caidan_lianjie{width: 25%;display: flex;flex-direction: column;align-items: center;text-decoration: none;position: relative;}
.caidan_img{width:50px; }
.caidan_mingcheng{font-size: 14px;color: dimgray;}
.caidan_tishi{background-color: red;width: 14px;height: 14px;font-size: 12px;color: white;text-align: center;line-height: 14px;border-radius: 50%;position: absolute;bottom: 35px;left: 70%;}
.daohang2{display: flex;align-items: center;padding: 10px;border-bottom: 1px solid #f2f2f2;}
.daohang2_img{width: 16px;height: 16px;}
.daohang2_biaoti{flex:1;padding-left: 10px;}
.daohang2_you{width: 16px;height: 16px;}

/* 最新通知 */
.tongzhi {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-top: 1px #e6e6e6 solid;
    border-bottom: 1px solid #e6e6e6;
}
.tongzhi_lianjie {
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
}

.tongzhi_zuo {
    width: 20px;
    height: 20px;
}
.tongzhi_neirong {
    flex-grow: 1;
    color: gray;
    padding-left: 10px;
}
.tongzhi_you {
    width: 16px;
    height: 16px;
}
/* 区块标题 */
.qukuai {
    display: flex;
    background-color: #fcfcfc;
    align-items: center;
    box-shadow: 2px 2px 2px gainsboro;
    padding: 5px;
    box-sizing: border-box;
}
.qukuai_zuo {
    width: 3px;
    height: 18px;
    background-color: green;
    box-shadow: 2px 2px 2px gainsboro;
}
.qukuai_zhong {
    padding-left: 8px;
    flex: 1;
    color: gray;
    text-shadow: 2px 3px 2px gainsboro;
}
.qukuai_you {
    color: gray;
    text-shadow: 2px 2px 2px gainsboro;
    text-decoration: none;
}
/* 最新上架产品 */
.cp_zuixin{
	width: 49%;
  float: left;
  box-sizing: border-box;
}
.cp_lianjie{
	width: 50%;
	padding: 3px;
}
.cp_lianjie_href{
	text-decoration: none;
	color: black;
}
.cp_img{
	width: 100%;
}
.cp_mc{
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: 14px;
}
.cp_mc2{
	color: red;
}

</style>

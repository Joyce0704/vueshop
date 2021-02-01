<template>
    <!--底部导航菜单-->
<div class="dibu_caidan" id="dl_yes">
    <a href="index.html" class="dibu_caidan_xiangmu">
      <p class="dibu_caidan_xiangmu_tupian"><img src="static/img/a-on.png" class="dibu_caidan_xiangmu_tupian_img"></img></p>
      <p class="dibu_caidan_xiangmu_biaoti dibu_caidan_xiangmu_biaoti_xuanzhong">首页</p>
   </a>
     <a href="chanpin_fenlei.html" class="dibu_caidan_xiangmu">
       <p class="dibu_caidan_xiangmu_tupian"><img src="static/img/b-off.png" class="dibu_caidan_xiangmu_tupian_img"></img></p>
       <p class="dibu_caidan_xiangmu_biaoti">分类</p>
    </a>
    <a href="gouwuche.html" class="dibu_caidan_xiangmu">
        <p class="dibu_caidan_xiangmu_tupian"><img src="static/img/c-off.png" class="dibu_caidan_xiangmu_tupian_img"></img></p>
         <p class="dibu_caidan_xiangmu_biaoti">购物车</p>
	</a>
    <a href="u_index.html" class="dibu_caidan_xiangmu">
        <p class="dibu_caidan_xiangmu_tupian"><img src="static/img/d-off.png" class="dibu_caidan_xiangmu_tupian_img"></img></p>
        <p class="dibu_caidan_xiangmu_biaoti">会员</p>
    </a>
</div>
</template>
<script>
export default {
    
}
</script>
</script>
<style>
*{
    margin: 0;padding: 0;
}
.dibu_caidan{
	display: flex;
	padding: 5px;
	box-sizing: border-box;
	background-color: #f5f5f5;
	position: fixed;
	bottom: 0px;
	width: 100%;
	border-top: 1px solid gainsboro;
}
.dibu_caidan_xiangmu{
	width: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	color: black;
	font-size: 14px;
	position: relative;
}
.dibu_caidan_xiangmu_tupian_img{
	width: 20px;height: 20px;
}

.dibu_caidan_xiangmu_biaoti_xuanzhong{
	font-weight: bold;
	color: orangered;
}
.gouwucheshu{
	position: absolute;
	width: 15px;
	height: 15px;
	background-color: red;
	border-radius: 50%;
	line-height: 15px;
	text-align: center;
	color: white;
	font-size: 13px;
	padding: 2px;
	bottom: 35px;
	left: 70px;
}


</style>
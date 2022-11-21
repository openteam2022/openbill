<template>
	<view class="editCategory">
		<view class="custom" :style="{height:statusBarHeight+'px'}"></view>
		<!-- 分类编辑 -->
		<view class="topBar" :style="{position:'absolute',top:statusBarHeight+'px',left:0,position:'fixed'}">
			<image class="topBar-back" @click="goBack()" src="../../static/imgs/back.png" alt="返回"/>
			<view class="tabbar-category">
				<text>分类编辑</text>
			</view>
		</view>
		<view class="category" :style="{paddingTop:statusBarHeight+50+'px'}" >
			<view class="category-item">
				<ul>
					<li v-for="(item,index) in categoryList" @click="clickCategory(index)">
						<view class="">
							<image :src="item.img"/>
							<text>{{item.name}}</text>
						</view>
						<view class="item-util">
								<image src="../../static/imgs/edit.png" mode=""></image>
							<image src="../../static/imgs/shezhi.png" mode=""></image>
						</view>
					</li>
				</ul>
			</view>
		</view>
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	export default {
		data(){
			return{
				statusBarHeight:statusBarHeight,
				categoryList:[
					{
						"name":'默认',
						"img":'../../static/imgs/moren.png'
					},
					{
						"name":'生活用品',
						"img":'../../static/imgs/shenghuoyongpin.png'
					},
					{
						"name":'早餐',
						"img":'../../static/imgs/zaocan1.png'
					},
					{
						"name":'午餐',
						"img":'../../static/imgs/wucan.png'
					},
					{
						"name":'晚餐',
						"img":'../../static/imgs/wancan.png'
					},
					{
						"name":'水果',
						"img":'../../static/imgs/shuiguo.png'
					},
					{
						"name":'酒水饮料',
						"img":'../../static/imgs/jiushui.png'
					},
					{
						"name":'衣服鞋帽',
						"img":'../../static/imgs/yifu.png'
					},
					{
						"name":'蔬菜',
						"img":'../../static/imgs/shucai.png'
					},
					{
						"name":'话费',
						"img":'../../static/imgs/huafei.png'
					},
					{
						"name":'房租',
						"img":'../../static/imgs/fangzu.png'
					},
					{
						"name":'电影',
						"img":'../../static/imgs/dianying.png'
					},
					{
						"name":'淘宝',
						"img":'../../static/imgs/taobao.png'
					},
					{
						"name":'红包',
						"img":'../../static/imgs/hongbao.png'
					},
					{
						"name":'药品',
						"img":'../../static/imgs/yaopin.png'
					},{
						"name":'交通',
						"img":'../../static/imgs/jiaotong.png'
					},{
						"name":'零食',
						"img":'../../static/imgs/lingshi.png'
					}
				],
			}
		},
		methods:{
			goBack(){
				uni.navigateBack({ 
					delta: 1,
				})
			},
			
		}
	}
</script>

<style>
	ul{
		display: flex;
		padding: 0;
		margin: 0;
	}
	li{
		list-style-type: none;
		
	}
	page{
		background: #ffffff;
	}
	.custom{
		width: 750rpx;
		background: #ffffff;
		position: absolute;
		top: 0;
		left: 0;
		position: fixed;
		z-index: 9;
	}
	.topBar{
		height: 90rpx;
		line-height: 90rpx;
		width: 690rpx;
		padding: 0 30rpx;
		background: #ffffff;
		color: black;
		text-align: center;
		position: relative;
		font-size: 36rpx;
		border-bottom: 1rpx #eeeeee solid;
		z-index: 998;
	}
	.topBar-back{
		position:absolute;
		top: 20rpx;
		left: 20rpx;
		width: 50rpx;
		height: 50rpx;
	}
	.tabbar-category text{
		padding: 18rpx 5rpx;
		margin: 0 45rpx;
		/* border-radius: 10rpx;
		border: 1rpx #42B983 solid;
		background: #42B983; */
		
	}
	.category{
		width: 690rpx;
		padding: 0 30rpx;
	}
	.category-item{
		padding-bottom: 40rpx;
	}
	.category-item ul{
		width: 690rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.category-item ul li{
		display: block;
		width: 690rpx;
		/* text-align: center;
		margin-bottom: 30rpx; */
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 0;
		border-bottom: 1rpx #eeeeee solid;
	}
	.category-item ul li:last-child{
		border-bottom: none;
	}
	.category-item ul li view:nth-child(1){
		display: flex;
		align-items: center;
	}
	.category-item image{
		display: inline-block;
		width: 80rpx ;
		height: 80rpx;
		margin-right: 15rpx;
		/* padding: 10rpx;
		margin: 0 19rpx;
		margin-bottom: 10rpx; */
		/* background: #F4F4F4;
		border-radius: 50rpx; */
	}
	.category-item text{
		color: #666666;
		font-size:28rpx;
	}
	.item-util image{
		width: 45rpx;
		height: 45rpx;
		position: relative;
		right: -15rpx;
		bottom: -5rpx;
	}
</style>

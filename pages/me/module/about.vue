<template>
	<view class="container">
		<!-- 状态栏占位 -->
		<view class="custom" :style="{height:statusBarHeight+'px'}"></view>
		<view class="tabbar" :style="{position:'absolute',top:statusBarHeight+'px',left:0,position:'fixed'}">
			<image class="tabbar-back" src="../../../static/imgs/back.png" mode="" @click="goBack()"></image>
			<view class="tabbar-category">
				<text>关于我们</text>
			</view>
		</view>
		<view class="list" :style="{paddingTop:statusBarHeight+45+'px'}">
			<view class="list-yunyou">
				<view class="list-yunyou-img">
					<image src="../../../static/imgs/logo.png" mode=""></image>
				</view>
				<view class="list-yunyou-title">
					<text>海贝记账</text>
					<text>{{version}}</text>
				</view>
			</view>
		</view>
		<view class="footer">
			深圳市千途信息技术公司提供技术支持
		</view>
	</view>
</template>

<script>
	import {goReturn} from '../../../components/base.js';
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	export default{
		data(){
			return{
				statusBarHeight:statusBarHeight,
				content:'',
				version:''
			}
		},
		onLoad() {
			this.getVersion();
		},
		methods:{
			// 返回上一页
			goBack(){
				goReturn();
			},
			// 获取版本号
			getVersion(){
				this.version = ' V 1.0.0';
			}
		}
	}
</script>

<style>
	page{
		background: #f8f8f8;
		height: 100vh;
	}
	.custom{
		position: absolute;
		top: 0;
		left: 0;
		width: 750rpx;
		background: #ffffff;
		position: fixed;
		z-index: 999;
	}
	.tabbar{
		height: 88rpx;
		line-height: 88rpx;
		width: 690rpx;
		padding: 0 35rpx;
		background: #FFFFFF;
		color:#333333;
		text-align: center;
		position: relative;
		font-size: 34rpx;
		z-index: 99;
		border-bottom: 1rpx #eeeeee solid;
		/* box-shadow: 0rpx 4rpx 8rpx 2rpx #f6f6f6; */
	}
	.tabbar-back{
		position: absolute;
		top: 20rpx;
		left: 20rpx;
		width: 50rpx;
		height: 50rpx;
	}
	.tabbar-category text{
		padding: 18rpx 5rpx;
		margin: 0 45rpx;
	}
	.list{
		width: 100vw;
		height:100vh;
		overflow-y: scroll;
		box-sizing: border-box;
		/* background: #ffffff; */
	}
	.list-input{
		width: 100vw;
		height: 400rpx;
		background: #ffffff;
	}
	.list-yunyou{
		width: 100vw;
	}
	.list-yunyou-img{
		width: 140rpx;
		height: 140rpx;
		margin: 0rpx auto;
		margin-top: 160rpx;
	}
	.list-yunyou-img image{
		width: 140rpx;
		height: 140rpx;
		border-radius: 20rpx;
	}
	.list-yunyou-title{
		width: 100vw;
		text-align: center;
		margin-top: 50rpx;
	}
	.list-yunyou-title text{
		font-size: 30rpx;
		color: #333333;
	}
	.footer{
		position: absolute;
		bottom: 60rpx;
		left: 0rpx;
		width: 100vw;
		text-align: center;
		font-size: 26rpx;
		color: #cccccc;
		position: fixed;
	}
</style>

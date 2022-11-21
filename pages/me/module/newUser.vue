<template>
	<view class="container">
		<!-- 状态栏占位 -->
		<view class="custom" :style="{height:statusBarHeight+'px'}"></view>
		<view class="tabbar" :style="{position:'absolute',top:statusBarHeight+'px',left:0,position:'fixed'}">
			<image class="tabbar-back" src="../../../static/imgs/back.png" mode="" @click="goBack()"></image>
			<view class="tabbar-category">
				<text>新手指导</text>
			</view>
		</view>
		<view class="list" :style="{marginTop:statusBarHeight+55+'px'}">
			<view class="list-left">
				<view class="list-left-text">
					1
				</view>
				<view class="list-left-line">
					
				</view>
				<view class="list-left-text">
					2
				</view>
				<view class="list-left-line">
					
				</view>
				<view class="list-left-text">
					3
				</view>
				<view class="list-left-line">
					
				</view>
				<view class="list-left-text">
					4
				</view>
				<view class="list-left-line">
					
				</view>
				<view class="list-left-text">
					5
				</view>
			</view>
			<view class="list-right">
				<view class="list-right-item">
					<view class="item-title">
						<text>步骤一：添加项目</text>
					</view>
				</view>
				<view class="list-right-item">
					<view class="item-title">
						<text>步骤二：添加项目任务</text>
					</view>
				</view>
				<view class="list-right-item">
					<view class="item-title">
						<text>步骤三：开启项目</text>
					</view>
				</view>
				<view class="list-right-item">
					<view class="item-title">
						<text>步骤四：完成项目下的任务</text>
					</view>
				</view>
				<view class="list-right-item">
					<view class="item-title">
						<text>步骤五：项目下所有任务完成后，再点击完成项目即可</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	import {goReturn} from '../../../components/base.js';
	export default{
		data(){
			return{
				statusBarHeight:statusBarHeight
			}
		},
		methods:{
			// 返回上一页
			goBack(){
				goReturn();
			}
		}
	}
</script>

<style>
	page{
		background: #F8f8f8;
		height: 100vh;
		overflow: hidden;
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
		z-index: 999;
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
		margin: 0rpx auto;
		width: 710rpx;
		box-sizing: border-box;
		padding:40rpx 20rpx 30rpx 0;
		display: flex;
		justify-content: space-between;
		background:#ffffff;
		border-radius: 20rpx;
	}
	.list-left{
		width: 100rpx;
		text-align: center;
		margin-top: 30rpx;
	}
	.list-left-text{
		font-size: 30rpx;
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 20rpx;
		background: #1890ff;
		margin: 0 auto;
		color: #ffffff;
	}
	.list-left-line{
		height: 100rpx;
		width: 4rpx;
		background: #F4F4F4;
		margin: 10rpx auto;
	}
	.list-right{
		width: 610rpx;
	}
	.list-right-item{
		width: 610rpx;
		background:#F4F4F4;
		padding-bottom: 20rpx;
		margin-bottom: 70rpx;
		border-radius: 20rpx;
	}
	.item-title{
		padding:30rpx 30rpx 0rpx 30rpx;
		color: #333333;
		font-size: 30rpx;
	}
	.item-box{
		width: 550rpx;
		padding:0 30rpx;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.list-item{
		width: 137.5rpx;
		/* padding: 0 20rpx ; */
		text-align: center;
		margin-top: 30rpx;
	}
	.list-item image{
		width: 90rpx;
		height: 90rpx;
		/* padding: 10rpx; */
		/* border-radius: 50rpx; */
	}
	.list-item text{
		display: block;
		font-size: 26rpx;
		color: #999999;
		text-align: center;
		margin-top: 8rpx;
	}
</style>

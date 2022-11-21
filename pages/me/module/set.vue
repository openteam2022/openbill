<template>
	<view class="container">
		<!-- 状态栏占位 -->
		<view class="custom" :style="{height:statusBarHeight+'px'}"></view>
		<view class="tabbar" :style="{position:'absolute',top:statusBarHeight+'px',left:0,position:'fixed'}">
			<image class="tabbar-back" src="../../../static/imgs/back.png" mode="" @click="goBack()"></image>
			<view class="tabbar-category">
				<text>设置</text>
			</view>
		</view>
		<view class="list" :style="{paddingTop:statusBarHeight+45+'px'}">
			<view class="list-user">
				<view class="list-user-item" @click="goSetUser">
					<text>个人信息</text><image src="../../../static/imgs/enter1.png" mode=""></image>
				</view>
				<view class="list-user-item" @click="goSetAccount">
					<text>账号</text><image src="../../../static/imgs/enter1.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="btn">
			<text @click="outLogin">退出账号</text>
		</view>
	</view>
</template>

<script>
	import {goUrl,goTabbarUrl,showInfo,goReturn} from '../../../components/base.js';
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	var app =getApp();
	export default{
		data(){
			return{
				statusBarHeight:statusBarHeight,
			}
		},
		methods:{
			// 返回上一页
			goBack(){goReturn();},
			// 跳转到修改个人信息
			goSetUser(){
				goUrl('./setlist/setUser');
			},
			// 跳转到修改手机号和密码
			goSetAccount(){
				goUrl('./setlist/setAccount');
			},
			outLogin(){
				// 清空本地token
				uni.setStorage({
					key:"hebei_token",
					data:''
				})
				//清空本地用户信息
				uni.setStorage({
					key:"hebei_userinfo",
					data:''
				})
				// 清空全局变量
				app.globalData.userInfo = [];
				app.globalData.token = '';
				showInfo('退出成功');
				// uni.$emit('removeItem');
				// uni.$emit('removeMe');
				//跳转到首页
				setTimeout(()=>{
					goUrl('../../login/login');
				},1500)
			},
		}
	}
</script>

<style>
	page{
		background: #F8f8f8;
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
		height: 100vh;
		box-sizing: border-box;
		overflow-y: scroll;
	}
	.list-user{
		width: 100vw;
		margin-top: 20rpx;
	}
	.list-user-item{
		width: 100vw;
		box-sizing: border-box;
		padding: 0 20rpx;
		height: 100rpx;
		line-height: 100rpx;
		display:flex;
		justify-content: space-between;
		background: #ffffff;
		margin-bottom: 20rpx;
	}
	.list-user-item text{
		font-size: 30rpx;
		color: #333333;
	}
	.list-user-item image{
		width: 35rpx;
		height: 35rpx;
		margin-top: 32rpx;
	}
	.btn{
		width: 100vw;
		height: 200rpx;
		line-height: 200rpx;
		position: absolute;
		bottom: 0;
		left: 0;
		position: fixed;
		background: #f8f8f8;
	}
	.btn text{
		display: inline-block;
		width: 650rpx;
		margin-left: 50rpx;
		height: 75rpx;
		line-height: 75rpx;
		text-align: center;
		font-size: 30rpx;
		color: #ffffff;
		background: #1890FF;
		border-radius: 10rpx;
		
	}
</style>

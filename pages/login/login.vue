<template>
	<view class="container">
		<!-- 状态栏 -->
		<view class="custom" :style="{height:statusBarHeight+'px'}"></view>
		<view class="back" :style="{position:'absolute',top:statusBarHeight+'px',left:0}">
			<image src="../../static/imgs/close.png" mode="" @click="goClose()"></image>
		</view>
		<!-- 登录内容框 -->
		<view class="login-box">
			<view class="login-img">
				<image src="../../static/imgs/logo.png" mode=""></image>
			</view>
			<view class="login-input">
				<view class="login-user">
					<view class="login-text">
						账号
					</view>
					<view class="login-username">
						<input type="text" v-model="name" maxlength="12" placeholder="请输入用户名或手机号"/>
					</view>
				</view>
				<view class="login-password">
					<view class="login-text">
						密码
					</view>
					<view class="login-username">
						<input type="password" v-model="password" placeholder="请输入密码"/>
					</view>
				</view>
				<view class="login-mobile" @click="goQuickLogin()">
					<text>手机快捷登录</text>
				</view>
			</view>
			<view class="login-btn" >
				<text @click="goLogin()">立即登录</text>
			</view>
			<view class="login-more">
				<text @click="goResetPassword()">忘记密码</text><text @click="goRegister()">注册账号</text>
			</view>
		</view>
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	import {checkStrEngInt,checkNull,checkSymbol,checkPassword} from "../../components/shield.js";
	import {goUrl,goTabbarUrl,showInfo,goReturn} from '../../components/base.js';
	var app = getApp();
	export default {
		data() {
			return {
				statusBarHeight:statusBarHeight,
				contact:'',//账号
				password:'',//密码
			}
		},
		methods: {
			// 关闭登录页面，跳转到首页
			goClose(){
				goReturn();
			},
			// 跳转到手机快捷登录页面
			goQuickLogin(){
				goUrl('./quickLogin');
			},
			// 跳转到重置密码页面
		    goRegister(){
				goUrl("./register");
			},
			// 跳转到注册页面
			goResetPassword(){
				goUrl("./resetPassword");
			},
			// 登录页面
			goLogin(){
				var that = this;
				const name = that.name;
				const password = that.password;
				// 检查账号是否为空
				if(!checkNull(name,'账号不能为空')){return;}
				// 检查账号格式是否正确
				if(!checkStrEngInt(name,"账号格式不正确")){return;}
				// 检查账号不能包含特殊符号
				if(!checkSymbol(that.name,"账号格式不正确，包含非法字符")){return;}
				// 检查密码是否为空
				if(!checkNull(password,'密码不能为空')){return;}
				// 检查密码格式是否正确
				if(!checkPassword(password,'密码格式不正确')){return;}
				uni.request({
					url:app.globalData.http+"bill/login/appUserlogin",
					data:{
						name:name,
						password:password,
						h:'heli'
					},
					method:"POST",
					success(res) {
						const message = res.data.message;
						switch(res.data.status){
							case 0:
								showInfo(message);
								break;
							case 1:
								showInfo("登录成功");
								app.globalData.userInfo = res.data.message;
								app.globalData.token = res.data.token;
								//保存token到本地
								uni.setStorage({
									key:"hebei_token",
									data:res.data.token
								})
								//保存用户信息到本地
								uni.setStorage({
									key:"hebei_userinfo",
									data:res.data.message
								})
								//跳转到首页
								setTimeout(()=>{
									goTabbarUrl("../index/index");
								},1500)
								break;
						}
					},
					fail(res){
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style>
	page{
		background: #ffffff;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
	.custom{
		width:100vw;
		background: #ffffff;
		position: absolute;
		top: 0;
		left: 0;
		position: fixed;
		z-index: 9;
	}
	.container{
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		overflow: hidden;
	}
	.back{
		height: 88rpx;
		width: 690rpx;
		padding: 0 30rpx;
		position: fixed;
		text-align: right;
	}
	.back image{
		width: 50rpx;
		height: 50rpx;
		margin-top: 20rpx;
	}
	.login-box{
		width: 100vw;
		height:75vh;
		box-sizing: border-box;
		padding: 0 70rpx;
	}
	.login-img{
		width: 610rpx;
		height: 170rpx;
		text-align: center;
	}
	.login-img image{
		width: 140rpx;
		height: 140rpx;
		border-radius: 15rpx;
		/* box-shadow: 0rpx 1rpx 15rpx -2rpx #bbbbbb; */
	}
	.login-input{
		padding: 70rpx 0;
	}
	.login-user,.login-password{
		padding: 20rpx 10rpx;
		border-bottom: 1rpx #dddddd solid;
		margin-bottom: 10rpx;
	}
	.login-text{
		font-size: 28rpx;
		color: #888888;
		height: 40rpx;
	}
	input{
		font-size: 30rpx;
		color: #000000;
		margin-top: 10rpx;
	}
	.login-btn text{
		display: block;
		width: 610rpx;
		height: 75rpx;
		line-height: 75rpx;
		background: #56c395;
		border-radius: 10rpx;
		text-align: center;
		color: #ffffff;
		font-size: 30rpx;
		box-shadow: 0rpx 1rpx 15rpx -2rpx #bbbbbb;
	}
	.login-btn text:active{
		background: #4daf84;
		box-shadow: none;
	}
	.login-mobile{
		font-size: 26rpx;
		color: #555555;
		text-align: right;
	}
	.login-more{
		height: 120rpx;
		padding: 0 10rpx;
		line-height: 120rpx;
		font-size: 26rpx;
		color: #555555;
		display: flex;
		justify-content: space-between;
	}
</style>

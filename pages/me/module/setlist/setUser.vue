<template>
	<view class="container">
		<!-- 状态栏占位 -->
		<view class="custom" :style="{height:statusBarHeight+'px'}"></view>
		<view class="tabbar" :style="{position:'absolute',top:statusBarHeight+'px',left:0,position:'fixed'}">
			<image class="tabbar-back" src="../../../../static/imgs/back.png" mode="" @click="goBack()"></image>
			<view class="tabbar-category">
				<text>个人信息</text>
			</view>
		</view>
		<view class="list" :style="{paddingTop:statusBarHeight+45+'px'}">
			<view class="list-user">
				<view class="list-user-logo">
					<view class="">
						<text>头像</text>
					</view>
					<viwe @click="editImg">
						<image class="user-logo" :src="userimg" mode=""></image>
						<image class="user-enter" src="../../../../static/imgs/enter1.png" mode=""></image>
					</viwe>
				</view>
				<view class="list-user-item out-line">
					<view class="">
						<text>账号</text>
					</view>
					<view class="list-user-item-img">
						<text>{{name}}</text><!-- <image src="../../../../static/img/enter1.png" mode=""></image> -->
					</view>
				</view>
			</view>
		</view>
		<view class="btn">
			<text @click="outLogin">退出账号</text>
		</view>
	</view>
</template>
<script>
	import {goUrl,goTabbarUrl,showInfo,goReturn} from '../../../../components/base.js';
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	var app =getApp();
	export default{
		data(){
			return{
				statusBarHeight:statusBarHeight,
				userimg:'../../../../static/img/userImg1.png',
				name:''
			}
		},
		onLoad(){
			this.userimg = app.globalData.http + app.globalData.userInfo.img;
			this.name = app.globalData.userInfo.name;
		},
		methods:{
			// 返回上一页
			goBack(){
				goReturn();
			},
			editImg(){
				const that = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						const tempFilePaths = res.tempFilePaths;
						uni.uploadFile({
							url: app.globalData.http+'beaver/user/appUpdateImg', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								h:'heli',
								token:app.globalData.token,
								user_id:app.globalData.userInfo.id,
							},
							success: (resData) => {
								var data = JSON.parse(eval("("+resData.data+")"));
								const message = data.message;
								switch(data.status){
									case 0:
										showInfo(message);
										break;
									case 1:
										showInfo(message);
										setTimeout(()=>{
											goUrl('../login/login');
										},1500)
										break;
									case 2:
										app.globalData.userInfo.img = app.globalData.http+message;
										console.log(app.globalData.userInfo);
										that.userimg = app.globalData.userInfo.img;
										console.log(that.userimg);
										//保存用户信息到本地
										uni.setStorage({
											key:"heli_userinfo",
											data:app.globalData.userInfo
										})
										showInfo("头像修改成功");
								}
							},
							fail(res){
								console.log(res);
							}
						});
					}
				});
			}
		}
	}
</script>

<style>
	page{
		background: #F8f8f8;
		height: 100vh;
	}
	.out-line{
		border-bottom: none!important;
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
		background: #ffffff;
	}
	.list-user-item{
		width: 710rpx;
		margin: 0 20rpx;
		height: 100rpx;
		line-height: 100rpx;
		display:flex;
		justify-content: space-between;
		border-bottom: 1rpx #eeeeee solid;
	}
	.list-user-logo{
		width: 710rpx;
		margin: 0 20rpx;
		height: 120rpx;
		line-height: 120rpx;
		display:flex;
		justify-content: space-between;
		border-bottom: 1rpx #eeeeee solid;
	}
	.list-user-item text,.list-user-logo text{
		font-size: 30rpx;
		color: #333333;
	}
	.list-user-item image{
		width: 35rpx;
		height: 35rpx;
		margin-top: 32rpx;
	}
	.list-user-item-img text{
		margin-right: 10rpx;
	}
	.list-user-item-img image{
		position: relative;
		top: 7rpx;
	}
	.user-logo{
		width: 35rpx;
		height: 35rpx;
		width: 100rpx!important;
		height: 100rpx!important;
		margin-right: 20rpx!important;
		margin-top: 10rpx!important;
		background: #f4f4f4;
		border-radius: 50rpx;
	}
	.user-enter{
		width: 35rpx;
		height: 35rpx;
		position: relative;
		top: -30rpx;
		right: 0;
	}
</style>

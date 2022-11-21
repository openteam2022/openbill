<template>
	<view class="container">
		<!-- 状态栏占位 -->
		<view class="custom" :style="{height:statusBarHeight+'px'}"></view>
		<view class="tabbar" :style="{position:'absolute',top:statusBarHeight+'px',left:0,position:'fixed'}">
			<image class="tabbar-back" src="../../../static/imgs/back.png" mode="" @click="goBack()"></image>
			<view class="tabbar-category">
				<text>问题反馈</text>
			</view>
		</view>
		<view class="list" :style="{paddingTop:statusBarHeight+45+'px'}">
			<view class="list-input">
				<textarea value="" maxlength="140" v-model="content" placeholder="请输入您遇到的问题:页面名称+具体问题(48字内中文或字母或数字)" />
			</view>
			<view class="btn">
				<text class="btn-text" @click="addFeedback()">提交反馈</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {goUrl,goTabbarUrl,showInfo,goReturn} from '../../../components/base.js';
	import {checkNull,checkText} from '../../../components/shield.js'
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	var app = getApp();
	export default{
		data(){
			return{
				statusBarHeight:statusBarHeight,
				content:''
			}
		},
		methods:{
			// 返回上一页
			goBack(){
				goReturn();
			},
			// 获取需求
			addFeedback(){
				const that = this;
				//验证内容不能为空
				if(!checkNull(that.content,'内容不能为空')){return;}
				//验证文本格式是否正确
				if(!checkText(that.content,'内容格式不正确')){return;}
				uni.request({
					url:app.globalData.http+'beaver/feedback/appaddfeedback',
					data:{
						token:app.globalData.token,
						user_id:app.globalData.userInfo.id,
						content:that.content,
						h:'heli'
					},
					method:'POST',
					success(res) {
						const message = res.data.message;
						switch(res.data.status){
							case 0:
								showInfo(message);
								break;
							case 1:
								showInfo(message);
								setTimeout(()=>{
									goUrl('../../login/login');
								},1500)
								break;
							case 2:
								that.content = '';
								showInfo(message);
								break;
						}
					}
				})
			}
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
		height:100vh;
		overflow-y: scroll;
		box-sizing: border-box;
	}
	.list-input{
		width: 100vw;
		height: 400rpx;
		background: #ffffff;
	}
	.list-input textarea{
		width: 100vw;
		height: 400rpx;
		padding:20rpx;
		box-sizing: border-box;
		color: #333333;
		font-size: 30rpx;
	}
	.btn{
		width: 100vw;
		height: 100vh;
	}
	.btn-text{
		display: inline-block;
		width: 650rpx;
		height: 75rpx;
		line-height: 75rpx;
		text-align:center;
		font-size:30rpx;
		background: #1890FF;
		border-radius:10rpx;
		color: #ffffff;
		margin:80rpx 50rpx;
	}
</style>

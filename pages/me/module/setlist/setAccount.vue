<template>
	<view class="container">
		<!-- 状态栏占位 -->
		<view class="custom" :style="{height:statusBarHeight+'px'}"></view>
		<view class="tabbar" :style="{position:'absolute',top:statusBarHeight+'px',left:0,position:'fixed'}">
			<image class="tabbar-back" src="../../../../static/imgs/back.png" mode="" @click="goBack()"></image>
			<view class="tabbar-category">
				<text>账号安全</text>
			</view>
		</view>
		<view class="list" :style="{paddingTop:statusBarHeight+45+'px'}">
			<view class="list-user">
				<view class="list-user-item out-line">
					<view class="">
						<text>手机号</text>
					</view>
					<view class="list-user-item-img">
						<text>{{phone}}</text><!-- <image src="../../../../static/img/enter1.png" mode=""></image> -->
					</view>
				</view>
				<view class="list-user-item out-line">
					<view class="">
						<text>密码</text>
					</view>
					<view class="list-user-item-img" @click="showPicker()">
						<text>修改</text><image src="../../../../static/imgs/enter1.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 操作弹出框 -->
		<view class="picker" v-if="pickerShow">
			<view class="picker-box">
				<view class="picker-box-input" >
					<input type="password" v-model="password" placeholder="请输入老密码">
				</view>
				<view class="picker-box-input">
					<input type="password" v-model="newPassword" placeholder="请输入新密码">
				</view>
				<view class="picker-box-btn">
					<text class="back"  @click="hidePicker">取消</text><text class="save" @click="updatePassword">确认</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {goReturn,showInfo,goUrl} from '../../../../components/base.js';
	import {checkNull,checkPassword} from '../../../../components/shield.js';
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	var app =getApp();
	export default{
		data(){
			return{
				statusBarHeight:statusBarHeight,
				password:'',
				phone:'',
				pickerShow:false,
				newPassword:''
			}
		},
		onLoad() {
			this.name = app.globalData.userInfo.name;
			this.phone = app.globalData.userInfo.phone;
		},
		methods:{
			// 返回上一页
			goBack(){
				goReturn();
			},
			// 显示弹出框
			showPicker(){
				this.pickerShow = true;
			},
			// 隐藏弹出框
			hidePicker(){
				this.pickerShow = false;
			},
			updatePassword(){
				var that = this;
				// 验证密码框不能为空
				if(!checkNull(that.password,'老密码不能为空')){return;}
				// 验证老密码格式是否正确
				if(!checkPassword(that.password,'老密码格式不正确')){return;}
				//验证新密码框不能为空
				if(!checkNull(that.newPassword,'新密码不能为空')){return;}
				// 验证新密码格式是否正确
				if(!checkPassword(that.newPassword,'新密码格式不正确')){return;}
				uni.request({
					url:app.globalData.http+'beaver/user/appUpdatePassword',
					data:{
						h:'heli',
						token:app.globalData.token,
						user_id:app.globalData.userInfo.id,
						password:that.password,
						newPassword:that.newPassword
					},
					method:'POST',
					success(res){
						const message = res.data.message;
						switch(res.data.status){
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
								showInfo('密码重置成功！请重新登录');
								that.password = '';
								that.newPassword = '';
								that.pickerShow = false;
								setTimeout(()=>{
									goUrl('../../../login/login');
								},1500)
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
	.list-user-item text{
		font-size: 30rpx;
		color: #333333;
	}
	.list-user-item image{
		width: 35rpx;
		height: 35rpx;
		position: relative;
		top: 7rpx;
	}
	.list-user-item-img text{
		margin-right: 10rpx;
	}
	.list-user-item-img image{
		
	}
	/* 弹出框 */
	.picker{
		position: absolute;
		top: 0;
		flex: 0;
		z-index: 999;
		position: fixed;
		height: 100vh;
		width: 100vw;
		background: rgba(0,0,0,0.3);
		display:flex;
		justify-content: center;
		align-items: flex-end;
	}
	.picker-box{
		width: 710rpx;
		background: #ffffff;
		border-radius: 30rpx 30rpx 0 0;
		padding:50rpx 20rpx;
	}
	.picker-box-input{
		width: 600rpx;
		height: 75rpx;
		line-height: 75rpx;
		margin: 30rpx 55rpx ;
		color: #ffffff;
		font-size: 30rpx;
		border: 1rpx #1890ff solid;
		background: #f8f8f8;
		border-radius: 10rpx;
	}
	.picker-box-input input{
		height: 75rpx;
		line-height: 75rpx;
		font-size: 34rpx;
		padding: 0 10rpx;
		box-sizing: border-box;
		color: #333333;
	}
	.picker-box-btn{
		display: flex;
		justify-content: space-around;
		padding: 30rpx 0 20rpx 0;
	}
	.back{
		display: inline-block;
		height: 60rpx;
		line-height: 60rpx;
		width: 250rpx;
		text-align: center;
		background: #eeeeee;
		color: #666666;
		font-size: 30rpx;
		border-radius: 10rpx;
	}
	.save{
		background: #1890ff;
		display: inline-block;
		height: 60rpx;
		line-height: 60rpx;
		width: 250rpx;
		text-align: center;
		color: #ffffff;
		border-radius: 10rpx;
	}
</style>

<template>
	<view class="container">
		<!-- 状态栏占位 -->
		<view class="custom" :style="{height:statusBarHeight+'px'}"></view>
		<view class="tabbar" :style="{position:'absolute',top:statusBarHeight+'px',left:0,position:'fixed'}">
			<image class="tabbar-back" src="../../../static/imgs/back.png" mode="" @click="goBack()"></image>
			<view class="tabbar-category">
				<text>需求墙</text>
			</view>
		</view>
		<view class="list" :style="{paddingTop:statusBarHeight+45+'px'}">
			<view class="list-bag">
			</view>
			<view class="list-content">
				<view class="list-content-item" v-for="(i,index) in needData">
					<view class="list-content-item-title">
						<text>{{i.content}}</text>
					</view>
					<view class="list-content-item-more">
						<view class="list-content-item-status">
							<text class="list-content-item-status-one" v-if="i.status == 1">待开发</text>
							<text class="list-content-item-status-two" v-if="i.status == 2">开发中</text>
							<text class="list-content-item-status-thress" v-if="i.status == 3">已开发</text>
						</view>
						<view class="list-content-item-btn" >
							<image src="../../../static/imgs/support1.png"  mode="" v-if="i.support == 0" @click.once="addSupport(i,index)"></image>
							<image src="../../../static/imgs/support2.png" mode="" v-if="i.support == 1" @click="message()"></image>
							<text>（{{i.goods}})</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="btn" @click="picker()">
			<image src="../../../static/imgs/addItem.png" mode=""></image>
		</view>
		<view class="picker" v-if="pickerShow" @click.self="hidePicker()" @touchmove.prevent>
			<view class="picker-box">
				<view class="picker-input">
					<textarea class="picker-input-text" v-model="content" placeholder="发布您对app的需求(48字内中文或字母或数字)" />
				</view>
				<view class="picker-btn">
					<text class="cancel-btn" @click="hidePicker">取消</text><text @click="sendNeeds()">提交</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {goUrl,goTabbarUrl,showInfo,goReturn} from '../../../components/base.js';
	import {checkNull,checkText} from '../../../components/shield.js'
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	var app =getApp();
	export default{
		data(){
			return{
				statusBarHeight:statusBarHeight,
				pickerShow:false,
				content:'',
				needData:[],
				supportImg:'../../../static/imgs/support2.png'
			}
		},
		onLoad() {
			this.getNeeds();
		},
		methods:{
			// 返回上一页
			goBack(){goReturn();},
			// 重复点赞提示
			message(){
				showInfo('您已经点过支持了');
			},
			// 显示输入框
			picker(){
				this.pickerShow = true;
			},
			// 隐藏输入框
			hidePicker(){
				this.pickerShow = false;
			},
			// 点赞
			addSupport(i,indexs){
				const that = this;
				const id = i.id;
				const index = indexs;
				const data = that.needData;
				uni.request({
				  	url:app.globalData.http+'beaver/needs/appaddneedssupport',
					data:{
						token:app.globalData.token,
						user_id:app.globalData.userInfo.id,
						h:'heli',
						needs_id:id
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
									goUrl('../login/login');
								},1500)
								break;
							case 2:
								data[index].goods++;
								data[index].support = 1;
								that.needData = data;
								showInfo(message);
								break;
						}
					}
				  })
			},
			// 提交需求
			sendNeeds(){
				const that = this;
				const content = that.content;
				//验证内容是否为空
				if(!checkNull(that.content,"内容不能为空")){return;}
				// 验证内容格式是否正确
				if(!checkText(that.content,"内容格式不正确")){return;}
				uni.request({
					url:app.globalData.http+'beaver/needs/appaddneeds',
					data:{
						token:app.globalData.token,
						user_id:app.globalData.userInfo.id,
						content:content,
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
									goUrl('../login/login');
								},1500)
								break;
							case 2:
								that.content = '';
								that.hidePicker();
								that.getNeeds();
								showInfo(message);
								break;
						}
					}
				})
			},
			// 获取需求
			getNeeds(){
				const that = this;
				uni.request({
					url:app.globalData.http+'beaver/needs/appgetneeds',
					data:{
						token:app.globalData.token,
						user_id:app.globalData.userInfo.id,
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
								that.needData = message;
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
		z-index: 99;
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
	.list-bag{
		height: 300rpx;
		width: 100vw;
		background: #f4f4f4;
		background-image:url(../../../static/imgs/need.png);
		background-size:100% 100%;
		background-repeat:no-repeat;
	}
	.list-content{
		width: 750rpx;
		padding: 20rpx;
		box-sizing: border-box;
	}
	.list-content-item{
		width: 710rpx;
		padding:20rpx 20rpx;
		box-sizing: border-box;
		background: #ffffff;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
	}
	.list-content-item-title{
		width: 670rpx;
		font-size: 30rpx;
		color: #333333;
	}
	.list-content-item-more{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 670rpx;
		font-size: 24rpx;
		color: #888888;
		margin-top: 20rpx;
	}
	.list-content-item-status text{
		display: inline-block;
		height: 45rpx;
		line-height: 45rpx;
		width: 120rpx;
		text-align: center;
		border-radius: 25rpx;
	}
	.list-content-item-status-one{
		border: 1rpx #eeeeee solid;
	}
	.list-content-item-status-two{
		border: 1rpx #1890FF solid;
		color:#1890FF;
	}
	.list-content-item-btn image{
		width: 35rpx;
		height: 35rpx;
		position: relative;
		top: 4rpx;
		left: 0;
	}
	.list-content-item-status-thress{
		border: 1rpx #18BC37 solid;
		color:#18BC37;
	}
	/* 添加任务按钮 */
	.btn{
		position: absolute;
		bottom: 100rpx;
		right: 20rpx;
		position: fixed;
		width:100rpx ;
		height: 100rpx;
		background: #1890FF;
		border-radius: 50rpx;
		box-shadow: 0 1px 5px 0 rgba(0,0,0,0.2);
	}
	.btn image{
		width: 80rpx;
		height: 80rpx;
		padding: 10rpx;
		border-radius: 50rpx;
	}
	.picker{
		position: absolute;
		bottom: 0;
		left: 0;
		position: fixed;
		background: rgba(0,0,0,0.3);
		width:100vw;
		height: 100vh;
		z-index: 100;
		display:flex;
		justify-content: center;
		align-items: center;
	}
	.picker-box{
		background: #ffffff;
		width:670rpx;
		box-sizing: border-box;
		padding:70rpx 30rpx 50rpx 30rpx;
		border-radius:20rpx;
	}
	.picker-input{
		width:610rpx ;
	}
	.picker-input-text{
		background: #f4f4f4;
		width: 610rpx;
		height: 180rpx;
		border-radius: 10rpx;
		font-size: 30rpx;
		padding: 20rpx;
		box-sizing: border-box;
		color: #666666;
	}
	.picker-btn{
		width:610rpx ;
		font-size: 30rpx;
		text-align: center;
		display: flex;
		justify-content: space-around;
	}
	.picker-btn text{
		display: inline-block;
		background: #1890FF;
		color: #ffffff;
		width:250rpx ;
		font-size: 30rpx;
		height: 65rpx;
		line-height: 65rpx;
		border-radius: 10rpx;
		text-align: center;
		margin-top: 40rpx;
	}
	.cancel-btn{
		background: #eeeeee!important;
		color: #999999!important;
	}
</style>

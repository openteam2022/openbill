<template>
	<view class="container">
		<status-bar ></status-bar>
		<view class="header">
			<view class="header-logo" v-if="name">
				<view class="logo" >
					<image :src="http+ img" mode="" v-if="img.length>0"></image>
					<image src="@/static/logo.png" mode="" v-else></image>
					<text>{{name}}</text>
				</view>
			</view>
			<view class="header-logo" v-else>
				<view class="logo" @click="goLogin">
					<image src="@/static/logo.png" mode=""></image>
					<text>未登录</text>
				</view>
				<view>
					<uni-icons color="#ccc" type="right" size="18"></uni-icons>
				</view>
			</view>
		</view>
		<view class="view">
			<view class="view-item">
				<view class="view-item-title">
					{{totalData.total_day}}
				</view>
				<view class="view-item-tip">
					记账天数
				</view>
			</view>
			<view class="view-item">
				<view class="view-item-title">
					{{totalData.total_number}}
				</view>
				<view class="view-item-tip">
					记账笔数
				</view>
			</view>
			<view class="view-item">
				<view class="view-item-title">
					{{totalData.notes}}
				</view>
				<view class="view-item-tip">
					账本
				</view>
			</view>
		</view>
		<!-- <view class="list">
			<view class="list-item" @click="goFeedback()">
				<view class="item-left">
					<text>主题</text>
				</view>
				<view class="item-right">
					<uni-icons color="#ccc" type="right" size="18"></uni-icons>
				</view>
			</view>
			<view class="list-item" @click="goAbout()">
				<view class="item-left">
					<text>设置</text>
				</view>
				<view class="item-right">
					<uni-icons color="#ccc" type="right" size="18"></uni-icons>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import {checkNull} from '@/common/shield.js';
	import {goUrl,goTabbarUrl,showInfo,goReturn} from '@/common/base.js';
	import StatusBar from '@/components/layout/statusBar.vue'
	import {getNotes,getTotalData} from '@/common/sqlite.js'
	export default {
		name: 'Me',
		components: {
			StatusBar: StatusBar
		},
		data() {
			return {
				name:'欢迎使用openbill',
				img:'',
				http:'',
				totalData: this.$store.state.totalData,
			}
		},
		computed:{
			listenTotalData(){
				return this.$store.state.totalData
			}
		},
		watch: {
			listenTotalData(n,o){
				this.totalData = n
			}
		},
		mounted() {
			var that = this;
			that.getData();
			uni.$on('loadMe',function(){
				that.name = app.globalData.userInfo.name;
				that.img = app.globalData.userInfo.user_img;
			})
			uni.$on('removeMe',function(){
				that.name = '';
				that.img = '';
			})
		},
		methods: {
			async getData(){
				await getNotes().then((res)=>{
					this.$store.state.totalData.notes = res.length;
				})
				await getTotalData().then((res)=>{
					this.$store.state.totalData.total_day = res[0].total_day;
					this.$store.state.totalData.total_number = res[0].total_number;
					this.$store.state.totalData.last_time = res[0].last_time;
				})
			},
			goNewUser(){
				goUrl('./module/newUser');
			},
			goNeeds(){
				if(!checkNull(app.globalData.userInfo.id,'请先登录')){
					setTimeout(()=>{
						goUrl('../login/login');
					},1500)
				}else{
					goUrl('./module/needs');
				}
			},
			goFeedback(){
				if(!checkNull(app.globalData.userInfo.id,'请先登录')){
					setTimeout(()=>{
						goUrl('../login/login');
					},1500)
				}else{
					goUrl('./module/feedback');
				}
			},
			goAbout(){
				goUrl('./module/about');
			},
			goSet(){
				if(!checkNull(app.globalData.userInfo.id,'请先登录')){
					setTimeout(()=>{
						goUrl('../login/login');
					},1500)
				}else{
					goUrl('./module/set');
				}
			},
			goLogin(){
				goUrl('../login/login');
			}
		},
	}
</script>

<style>
	page{
		background: var(--app-bg-color);
	}
	.header{
		width: 100vw;
		box-sizing: border-box;
		padding:100rpx 40rpx 40rpx 40rpx;
		background: var(--app-bg-color);
		/* background: #ffffff; */
	}
	.header-logo{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo{
		height: 120rpx;
		line-height: 120rpx;
		width: 500rpx;
		display: flex;
		/* align-items: center; */
	}
	.logo image{
		height: 120rpx;
		width: 120rpx;
		background: #eee;
		border-radius: 60rpx;
		border: 1rpx #ffffff solid;
	}
	.logo text{
		font-size: 34rpx;
		margin-left: 20rpx;
	}
	.view{
		box-sizing: border-box;
		margin: 0 20rpx;
		background: white;
		border-radius: 10rpx;
		display: flex;
		justify-content: space-between;
		padding: 50rpx 20px;
	}
	.view-item{
		text-align: center;
		font-size: 28rpx;
		color: #333333;
	}
	.view-item-title{
		font-size: 38rpx;
	}
	.view-item-tip{
		font-size: 24rpx;
		color: #999;
		margin-top: 20rpx;
	}
	.list{
		width: 710rpx;
		margin: 20rpx 20rpx 0 20rpx;
		box-sizing: border-box;
		background: white;
		border-radius: 10rpx;
		padding: 0 25rpx ;
	}
	.list-item{
		padding: 30rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx #eee solid;
	}
	.list-item:last-child{
		border-bottom: none;
	}
	.list-item image{
		width: 35rpx;
		height: 35rpx;
		position: relative;
		top: 7rpx;
		left: 6rpx;
	}
	.list-item text{
		width: 45rpx;
		height: 45rpx;
		margin-left:10rpx ;
		font-size: 34rpx;
		color: #333;
	}
	.list-item-icon{
		color: #aaa;
	}
</style>

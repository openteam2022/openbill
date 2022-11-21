<template>
	<view class="bill-details">
		<!-- 状态栏占位 -->
		<view class="bill-details-header">
			<status-bar></status-bar>
			<view class="topBar" >
				<image class="topBar-back" @click="goBack()" src="../../static/img/back.png" alt="返回"/>
				<view class="tabbar-category">
					<text>账单编辑</text>
				</view>
			</view>
		</view>
		<view class="bill-details-main" >
			<view class="Info">
				<view class="infoItem">
					<text class="infoTitle">日&nbsp;&nbsp;&nbsp;期：</text><text class="infoContent">{{billDate}}</text>
				</view>
				<view class="infoItem">
					<text class="infoTitle">类&nbsp;&nbsp;&nbsp;型：</text>
					<text class="infoContent" v-if="billType == 0">支出</text>
					<text class="infoContent" v-if="billType == 1">收入</text>
				</view>
				<view class="infoItem">
					<text class="infoTitle">金&nbsp;&nbsp;&nbsp;额：</text><text class="infoContent">{{billCost}}</text>
				</view>
				<view class="infoItem">
					<text class="infoTitle">类&nbsp;&nbsp;&nbsp;别：</text><text class="infoContent">{{billName}}</text>
				</view>
				<!-- <view class="infoItem">
					<text class="infoTitle">账&nbsp;&nbsp;&nbsp;本：</text><text class="infoContent">支出</text>
				</view> -->
				<view class="infoItem">
					<text class="infoTitle">备&nbsp;&nbsp;&nbsp;注：</text><text class="infoContent">{{billOther}}</text>
				</view>
				<view class="infoItem">
					<text class="infoTitle">创&nbsp;&nbsp;&nbsp;建：</text><text class="infoContent">{{billCreateTime}}</text>
				</view>
			</view>
		</view>
		<view class="bill-details-Btn">
			<text class="mbRemove" @click="removeInfo(billId)">删除</text><text class="mbEdit" @click="editInfo(billId)">编辑</text>
		</view>
	</view>
</template>

<script>
	import {deleteRowBill} from '../../common//sqlite.js';
	import StatusBar from '@/components/layout/statusBar.vue'
	import open from '@/common/comm.js'
	import {showInfo} from '@/common/base.js'
	export default {
		components: {
			StatusBar
		},
		data(){
			return{
				billId:'',//账单ID
				billType:'',
				billCost:'',
				billCreateTime:'',
				billContent:'',
				billName:'',
				billDate:'',
				billTime: '',
				billCategoryId: ''
				
			}
		},
		onLoad(option) {
			const that = this;
			that.billId = option.id;
			that.billType = option.type;
			that.billCost = option.cost;
			that.billCreateTime = option.create_time;
			that.billOther = option.other;
			that.billName = option.name;
			that.billDate = option.bill_time.substring(0,10);
			that.billTime = option.bill_time;
			that.billCategoryId = option.category_id
		},
		methods:{
			goBack(){
				uni.navigateBack({ 
					delta: 1,
				})
			},
			removeInfo(id){
				uni.showModal({
				    title: '确认删除',
				    content: '删除后数据无法回复',
				    success: function (res) {
				        if (res.confirm) {
				            deleteRowBill(id).then(()=>{
								showInfo("删除成功")
								open.emit("get_bill");
								uni.switchTab({
								    url: '/pages/index/index'
								});
							}).catch(()=>{
								showInfo("删除失败")
							});
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			editInfo(id){
				uni.navigateTo({
					url:`/pages/add/edit?id=${id}&bill_time=${this.billTime}&type=${this.billType}&cost=${this.billCost}&other=${this.billOther}&create_time=${this.billCreateTime}&category_id=${this.billCategoryId}`
				})
			
			}
		}
	}
</script>

<style>
	page{
		background: #ffffff;
	}
	.bill-details-header{
		position: sticky;
		top: 0;
		z-index: 99;
		border-bottom: 1rpx #eeeeee solid;
		box-shadow: 0px 7px 11px -4px #eeeeee;
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
		color: #333333;
		font-size: 36rpx;
	}
	.bill-details-main{
		width: 690rpx;
		padding: 0 30rpx;
	}
	.infoItem{
		line-height: 100rpx;
		display: flex;
		align-items: top;
		border-bottom: 1rpx #eeeeee solid;
	}
	.infoTitle{
		display: inline-block;
		font-size: 30rpx;
		color: #333333;
		width: 150rpx;
		text-align: center;
	}
	.infoContent{
		display: inline-block;
		font-size: 32rpx;
		color: #333333;
		width: 540rpx;
		
	}
	.bill-details-Btn{
		position: absolute;
		bottom: 40rpx;
		left: 0;
		width: 750rpx;
		display: flex;
		justify-content: center;
		position: fixed;
	}
	.bill-details-Btn text{
		display: inline-block;
		width: 300rpx;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 10rpx;
		text-align: center;
		margin: 0 20rpx;
		font-size: 30rpx;
		box-shadow: 1rpx 5rpx 8rpx #eeeeee;
	}
	.bill-details-Btn text:hover{
		opacity: 0.5;
	}
	.mbRemove{
		background: #eeeeee;
		border-radius: 10rpx;
		text-align: center;
		color: #333333;
		margin: 0 20rpx;
	}
	.mbEdit{
		background: #55C394;
		border-radius: 10rpx;
		text-align: center;
		color: #ffffff;
		margin: 0 20rpx;
		
	}
	
</style>

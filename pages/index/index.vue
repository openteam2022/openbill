<template>
	<view class="index">
		<view class="index-header">
			<status-bar ></status-bar>
			<view class="index-header-content">
				<view class="index-header-title">
					<span>我的账单</span>
					<picker mode="date" :value="date" :start="startDate" :end="endDate" fields="month" @change="bindDateChange">
						<uni-icons color="#888" type="calendar-filled" size="26"></uni-icons>
					</picker>
				</view>
				<view class="index-header-box">
					<view class="index-header-box-date">
						<text class="index-header-box-title">{{date.substring(0,4)}}年 </text>
						<view class="ihbd-text" style="color: #333333;">{{`${date.substring(5,7)}月`}}</view>
					</view>
					<view class="index-header-box-income">
						<text class="index-header-box-title">支出</text>
						<text class="ihbi-text">{{monthPay.toFixed(2)}}</text>
					</view>
					<view class="index-header-box-pay">
						<text class="index-header-box-title">收入</text>
						<text class="ihbp-text">{{monthIncome.toFixed(2)}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="index-bill">
			<bill-list :data="billData"></bill-list>
		</view>
	</view>
</template>
<script>
	import StatusBar from '@/components/layout/statusBar.vue'
	import Navbar from '@/components/layout/navbar.vue'
	import BillList from '@/components/index/bill_list.vue'
	import Dates from '@/common/date.js'
	import {billList} from '@/mock/bill.js'
	import open from '@/common/comm.js'
	import {getNotes,getTotalData,addNotes,addTotalData,getBill,getBillData} from '@/common/sqlite.js'
	const date = new Dates();
	export default {
		components: {
			StatusBar: StatusBar,
			Navbar: Navbar,
			BillList: BillList
		},
		data() {
			return {
				year: date.getYear(),
				month: date.getMonth(),
				date: date.getDate(), 
				endDate: date.getTime(),
				startDate: '2020-01-01',
				billData:[],
				monthPay: 0,//本月总支出
				monthIncome: 0,//本月总收入
			}
		},
		onLoad() {
			this.getBillDatas();
		},
		mounted() {
			this.initData();
			open.on('get_bill',()=>{
				this.getBillDatas();
			})
		},
		methods: {
		    getBillDatas(){
				let month = this.date.substring(5,7);
				month = month.slice(0,1) == 0 ? month.slice(1,2) : month;
				let data = {
					year: this.date.substring(0,4),
					month: month,
					day: date.getDay()
				}
				getBillData(data).then((datas)=>{
					this.getBillDataItem(datas,(data)=>{
						this.billData = data;
					});
				}).catch((error)=>{
					console.log(error)
				})
			},
			// 获取账单信息
			async getBillDataItem(data,fn){
				let billdata = [];
				let monthPay = 0;
				let monthIncome = 0;
				for (let i = 0; i < data.length; i++) {
					let billDataItem = {
						name: `${data[i].month}月${data[i].day}日`,
						items: [],
						income: 0,
						pay: 0
					};
					await getBill(data[i]).then((res)=>{
						billDataItem.items = res;
						for(let j = 0;j < res.length; j ++){
							if(res[j].type === 0){
								billDataItem.pay += parseFloat(res[j].cost);
							}else{
								billDataItem.income += parseFloat(res[j].cost);
							}
						}
					})
					// 计算本月总收入和总支出
					monthIncome += billDataItem.income;
					monthPay += billDataItem.pay;
					billdata.push(billDataItem);
				}
				this.monthIncome = monthIncome;
				this.monthPay = monthPay;
				fn(billdata);
			},
			forEachItem(data){
					let billDataItem = {
						name: `${data.month}月${data.day}日`,
						items: [],
						income: 0,
						pay: 0
					};
					getBill(data).then((res)=>{
						billDataItem.items = res;
						res.forEach(item=>{
							if(item.type === 0){
								billDataItem.pay += parseFloat(item.cost);
							}else{
								billDataItem.income += parseFloat(item.cost);
							}
						})
					})
					return billDataItem;
			},
			// 初始化账本表和统计数据表
			async initData(){
				await getNotes().then((res)=>{
					if(res.length <= 0){
						let data = {
							name: '默认'
						}
						addNotes(data).then(()=>{
							console.log("账本添加成功")
						}).catch(()=>{
							console.log("账本添加失败")
						})
					}
				})
				await getTotalData().then((res)=>{
					if(res.length === 0){
						let data = {
							total_day: 0,
							total_number: 0,
							last_time: date.getDate()
						}
						addTotalData(data).then(()=>{
							console.log("总数据添加成功")
						}).catch(()=>{
							console.log("总数据添加失败")
						})
					}
				})
			},
			bindDateChange(e){
				this.date = e.detail.value,
				console.log(this.date)
				this.getBillDatas()
			}
		}
	}
</script>

<style scoped>
	.index{
		background: var(--app-bg-color);
		min-height: 100vh;
	}
	.index-header{
		position: sticky;
		top: 0;
		z-index: 99;
		padding-bottom: 10rpx;
		box-sizing: border-box;
		background: #eee;
	}
	ul{
		list-style: none;
	}
	.index-header-content{
		width: 100%;
		box-sizing: border-box;
		padding: 0rpx 20rpx;
		padding-top: 10rpx;
		color: #333;
		padding-bottom: 10rpx;
	}
	.index-header-title{
		line-height: 60rpx;
		display: flex;
		justify-content: space-between;
		padding: 0 10rpx;
	}
	.index-header-box{
		display: flex;
		justify-content: space-between;
		border-radius: 10rpx;
		padding: 30rpx 20rpx;
		background: #fff;
	}
	.index-header-box view{
		display: flex;
		flex-direction: column;
		text-align: left;
		color: white;
		padding-bottom: 10rpx;
	}
	.index-header-box-date{
	}
	.index-header-box-income{
	}
	.index-header-box-pay{
	}
	.index-header-box-title{
		font-size: 26rpx;
		line-height: 60rpx;
		color: #999;
	}
	.ihbd-text{
		font-size: 32rpx;
		color: #333;
	}
	.ihbi-text{
		font-size: 40rpx;
		color: #333;
	}
	.ihbp-text{
		font-size: 32rpx;
		color: #333;
	}
</style>
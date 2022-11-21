<template>
	<view class="bill-list">
			<!-- 记账列表 -->
			<view class="bill-list-box" >
				<view class="bill-list-box-item" v-for="(item,index) in data" >
					<view class="blbi-title">
						<view class="blbi-title-date">
							{{item.name}}
						</view>
						<view class="blbi-title-info">
							<view class="blbi-title-info-income" v-if="item.income">
								<span>收入&nbsp;</span><text>{{item.income.toFixed(2)}}</text>
							</view>
							<view class="blbi-title-info-pay" v-if="item.pay">
								<span>支出&nbsp;</span><text>{{item.pay.toFixed(2)}}</text>
							</view>
						</view>
					</view>
					<view class="blbi-item">
						<view class="blbi-list"  v-for="i in item.items" @click="goBillDetails(i)">
							<view class="blbi-list-img">
								<image :src="getImg(i)" mode=""></image>
							</view>
							<view class="blbi-list-content">
								<view >
									{{getName(i)}}
								</view>
								<view class="blbi-list-content-tip">
									{{i.other}}
								</view>
							</view>
							<view class="blbi-list-number-pay" v-if="i.type == 0">
							   -{{i.cost}}
							</view>
							<view class="blbi-list-number-income" v-if="i.type == 1">
							   +{{i.cost}}
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 初始化没有数据时显示 -->
			<view class="not_bill" v-if="data.length == 0">
				<img src="@/static/img/notBill.png" alt="">
				<view class="">
					<text>本月还没有记账！赶快添加吧！</text>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		name: 'BillList',
		props: {
			data: {
				type: Object,
				default: function(data){
					return data;
				}
			}
		},
		data(){
			return {
				
			}
		},
		methods: {
			goBillDetails(i){
				let name = this.getName(i,'name');
				uni.navigateTo({
					url:`/pages/index/bill_details?id=${i.id}&bill_time=${i.bill_time}&category_id=${i.category_id}&type=${i.type}&cost=${i.cost}&other=${i.other}&name=${name}&create_time=${i.create_time}`
				})
			},
			getName(item){
				return this.getNode(item,'name');
			},
			getImg(item){
				return this.getNode(item,'imgUrl');
			},
			getNode(item,nodeName){
				let income = this.$store.state.incomeList;
				let pay = this.$store.state.payList;
				let node;
				if(item.type == 0){
					for (let i = 0; i < pay.length; i++) {
						if(pay[i].id == item.category_id){
							node = pay[i][nodeName];
							break;
						}
					}
				}else{
					for (let i = 0; i < income.length; i++) {
						if(income[i].id == item.category_id){
							node = income[i][nodeName];
							break;
						}
					}
				}
				return node;
			}
		}
	}
</script>

<style>
	.bill-list{
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx 20rpx 20rpx ;
		padding-top: 0;
	}
	.bill-list-box{
	}
	.bill-list-box-item{
		background: #fff;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
	}
	.blbi-title{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		font-size: 26rpx;
		color: #aaa;
		line-height: 80rpx;
		box-sizing: border-box;
		margin: 0 20rpx;
		border-bottom: 1px #eee solid;
	}
	.blbi-title-date{
		font-size: 30rpx;
		color: #444;
	}
	.blbi-title-info{
		display: flex;
		align-items: flex-end;
	}
	.blbi-title-info-income{
		
	}
	.blbi-title-info-pay{
		margin-left: 20rpx;
		color: #fc5531;
	}
	.blbi-item{
		box-sizing: border-box;
		padding: 10rpx 20rpx;
		background: #fff;
		border-radius: 10rpx;
	}
	.blbi-list{
		display: flex;
		align-items: center;
		box-sizing: border-box;
		margin: 30rpx 0;
	}
	.blbi-list-img{
		height: 90rpx;
		width: 90rpx;
		box-sizing: border-box;
		padding: 10rpx;
		border-radius: 50%;
		background: #efefef;
	}
	.blbi-list-img image{
		width: 70rpx;
		height: 70rpx;
	}
	.blbi-list-content{
		width: 360rpx;
		box-sizing: border-box;
		padding-left: 20rpx;
		font-size: 30rpx;
		color: #333;
	}
	.blbi-list-content-tip{
		font-size: 26rpx;
		color: #aaa;
	}
	.blbi-list-number-pay,.blbi-list-number-income{
		flex: 1;
		text-align: right;
		font-size: 32rpx;
		color: #333;
	}
	.not_bill{
		width: 100%;
		min-height: 50vh;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #aaa;
	}
</style>
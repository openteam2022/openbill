<template>
	<view class="message-header">
		<view class="message-header-avator">
			<view class="message-header-avator-img">
				<image src="../../static/avator.png" mode=""></image>
			</view>
			<view class="message-header-avator-info">
				<view class="mhai-name">
					客服名字
				</view>
				<view class="mhai-status">
					<span class="mhai-status-mark"></span>在线
				</view>
			</view>
		</view>
		<view class="message-header-btn">
			<image src="../../static/imgs/search.png" @click="change"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MessageHeader',
		methods: {
			change(){
				this.$emit('onClick')
			}
		}
	}
</script>

<style>
	.message-header{
		width: 100%;
		height: 90rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
	}
	.message-header-avator{
		height: 100%;
		display: flex;
		align-items: center;
		color: #333;
	}
	.message-header-avator-img{
		width: 115rpx;
		height: 100rpx;
	}
	.message-header-avator-img image{
		width: 100rpx;
		height: 100rpx;
		border-radius: 10rpx;
	}
	.message-header-avator-info{
		
	}
	.mhai-name{
		font-size: 34rpx;
	}
	.mhai-status{
		font-size: 22rpx;
	}
	.mhai-status-mark{
		display: inline-block;
		width: 20rpx;
		height: 20rpx;
		border-radius: 10rpx;
		background: #67C23A;
		margin-right: 10rpx;
		margin-top: 10rpx;
	}
	.message-header-btn{
		display: flex;
		align-items: center;
	}
	.message-header-btn image{
		width: 40rpx;
		height: 40rpx;
	}
</style>
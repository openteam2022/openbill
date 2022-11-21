<template>
	<view class="navbar">
		<view class="navbar-box" v-if="type == 'default' || ''">
			{{title}}
		</view>
		<view class="navbar-box" v-if="type == 'back'">
			<image class="navbar-img back" src="@/static/img/back.png" mode="" @click="onBack"></image>
			<view class="navbar-box">
				{{title}}
			</view>
		</view>
		<view class="navbar-box" v-if="type == 'option'">
			<image class="navbar-img back" src="@/static/img/back.png" mode="" @click="onBack"></image>
			<view class="navbar-box">
				{{title}}
			</view>
			<image class="navbar-img more" src="@/static/img/back.png" mode="" @click="onOption"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Navbar',
		props: {
			title: {
				type: String,
				default: '标题'
			},
			positions:{
				type: String,
				default: 'center'
			},
			borderColor: {
				type: String,
				default: '#ededed'
			},
			bagColor: {
				type: String,
				default: '#fff'
			},
			type: {
				type: String,
				default: 'default'
			},
			color: {
				type: String,
				default: '#333'
			}
		},
		data () {
			return {
				
			}
		},
		methods: {
			onBack(){
				this.$emit('onBack');
			},
			onOption(){
				this.$emit('onOption');
			}
		}
	}
</script>

<style scoped>
	.navbar{
		width: 100%;
		height: 88rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
		border-bottom: 1rpx solid v-bind(borderColor);
		background: v-bind(bagColor);
	}
	.navbar-box{
		width: 100%;
		height: 87rpx;
		display: flex;
		align-items: center;
		justify-content:v-bind(positions);
		color: v-bind(color);
		font-size: 32rpx;
		position: relative;
		
	}
	.navbar-img{
		width: 40rpx;
		height: 40rpx;
		position: absolute;
		top: 22rpx;
		z-index: 99;
	}
	.back{
		left: 0rpx;
	}
	.more{
		right: 0rpx;
	}
</style>
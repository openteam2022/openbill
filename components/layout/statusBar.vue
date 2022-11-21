<template>
	<view class="status-bar"></view>
</template>

<script>
	export default {
		name: 'StatusBar',
		props:{
			bgColor: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style>
	.status-bar{
		width: 100%;
		background: v-bind(bgColor);
		height: var(--status-bar-height);
	}
</style>
<template>
	<view class="counter" @touchmove.prevent>
		<view class="counter-view">
			<view class="counter-view-category">
				<image :src="selectCategory.imgUrl" mode=""></image>
				<text>{{selectCategory.name}}</text>
			</view>
			<text>{{money || 0}}</text>
			<text class="counter-view-now-number">{{nowNumber}}</text>
		</view>
		<view class="counter-info">
			<view class="counter-info-other">
				<image src="@/static/img/other.png" mode=""></image>
				<text class="counter-info-input" @click="addOther">{{other || '请输入备注信息'}}</text>
			</view>
			<view class="counter-info-date" @click="chooseDate()">
				<image src="@/static/img/datetime.png" mode=""></image> {{currentTime}}
			</view>
		</view>
		<view class="counter-btn-item" >
			<ul>
				<li @click="btnNum('7')">7</li>
				<li @click="btnNum('8')">8</li>
				<li @click="btnNum('9')">9</li>
				<li @click="btnNum('x')"><image class="clear" src="@/static/img/clear.png" mode=""></image></li>
			</ul>
		</view>
		<view class="counter-btn-item">
			<ul>
				<li @click="btnNum('4')">4</li>
				<li @click="btnNum('5')">5</li>
				<li @click="btnNum('6')">6</li>
				<li @click="btnNum('+')">+</li>
			</ul>
		</view>
		<view class="counter-btn-item">
			<ul>
				<li @click="btnNum('1')">1</li>
				<li @click="btnNum('2')">2</li>
				<li @click="btnNum('3')">3</li>
				<li @click="btnNum('-')">-</li>
			</ul>
		</view>
		<view class="counter-btn-item">
			<ul>
				<li @click="btnNum('c')">清除</li>
				<li @click="btnNum('0')">0</li>
				<li @click="btnNum('.')">.</li>
				<li @click="saveBill()">确定</li>
			</ul>
		</view>
	</view>
</template>

<script>
	import open from '@/common/comm.js'
	export default {
		name: 'Counter',
		props: {
			selectCategory:{
				type: Object,
				default: function(data){
					return data;
				}
			},
			addNotes: {
				type: Boolean,
				default: false
			},
			currentTime: {
				type: String,
				default: ''
			},
		},
		data(){
			return {
				money:0,//输入金额
				moneys:[],//临时数据
				startNumber:'',//运算符前面的数字
				endNumber:'',//运算符后面的数字
				tempType:'',//运算符类型
				nowNumber:'',//计算公式
				index:100,//运算数的坐标
				indexMark:false,//只做单步运算。用来标记判断
				floatMark:false,//用来判断是否有用过小数点了
				other: '请输入备注信息'
			}
		},
		mounted() {
			open.on('add_other', data=>{
				this.other = data;
			})
			open.on('add_money', data=>{
				this.money = data;
				this.moneys = [...data];
			})
		},
		methods: {
			chooseDate(){
				this.$emit('chooseDate')
			},
			saveBill(){
				this.$emit('save')
			},
			//消费键盘功能
			btnNum(e){
				//小数点的位置
				const indexFloat = this.moneys.indexOf('.');
				//如果已经使用运算符，再次按运算数将不会执行，只保持现有单步运算
				if(e == '+' || e == '-'){
					if(this.moneys.length === 0){
						return false;
					}
					if(this.indexMark == true){
						return;
					}
				}
				//判断是否按过小数点
				if(e == '.'){
					if(this.floatMark == true){
						return;
					}
				}
				//按C清除所有内容
				if(e == 'c'){
					this.money = 0;
					this.moneys = [0];
					this.index = 100;
					this.startNumber = '';
					this.tempType = '';
					this.endNumber = '';
					this.nowNumber ='';
					this.indexMark = false;//加减判断标记
					this.floatMark =false;//小数点判断
					return;
				}
				//删除数字
				if(e == 'x'){
					if(this.moneys.length === 0){
						return false;
					}
					if(!this.money){
						this.money = 0;
						this.moneys = [0]
					}else{
						console.log(this.money)
						this.moneys = this.moneys.slice(0,this.moneys.length-1);
						if(this.moneys.length == this.index){
							this.index = 100;
							this.startNumber = '';
							this.endNumber = '';
							this.nowNumber ='';
							this.indexMark = false;
						}
						
					}
				}
				//保留2为小数点
				if(indexFloat >= 1){
					if(this.moneys.length - indexFloat >=3){
						uni.showToast({
							title:"最小记录到分",
							icon:"none"
						})
						return false;
					}
				}
				if(e == '.'){
					this.floatMark = true;
				}
				if(this.moneys.length <= 12){
					if(e == 'x'){
						console.log('x')
					}else{
						//如果第一位为0，添加数字后，删除第一位0
						if(this.money[0] == 0 || this.money[0] == '.'){
							this.moneys.push(e);
							this.moneys.shift();
						}else{
							this.moneys.push(e);//临时存储用户输入的内容：不能大于5位数
						}
						
					}
				}else{
					uni.showToast({
						title:"金额太大",
						icon:'error'
					})
					return;
				}
				var start = '';//运算数前面临时数组
				var end = '';//运算符后面临时数组
				var strNumber = '';
				for(var i = 0;i < this.moneys.length;i++){
					if(this.moneys[i] == '+'){
						this.index = i;
						this.tempType = "+";
						this.indexMark  = true;
					}else if(this.moneys[i] == '-'){
						this.index = i;
						this.tempType = "-";
						this.indexMark  = true;
					}
					strNumber += this.moneys[i];
				}
				if(this.index > 0 && this.index <100 ){
					start = this.moneys.slice(0,this.index);
					end = this.moneys.slice(this.index+1,this.moneys.length);
					this.startNumber = '';
					this.endNumber = '';
					for(var i = 0;i < start.length; i++){
						this.startNumber += start[i]
					}
					for(var i = 0;i < end.length; i++){
						this.endNumber += end[i]
					}
					
					if(this.tempType == '+'){
						if(this.index == this.moneys.length -1){
							this.money = this.startNumber
						}else{
							this.money = parseFloat(this.startNumber) + parseFloat(this.endNumber)
						}
					}else if(this.tempType == '-'){
						console.log('算付'+this.tempType)
						if(this.index == this.moneys.length -1){
							this.money = this.startNumber
						}else{
							this.money = parseFloat(this.startNumber) - parseFloat(this.endNumber) 
						}
					}
					this.nowNumber = strNumber
				}else if(this.index == 0 ){
				    this.moneys.shift()
				}else if(this.index ==100){
					this.money = strNumber
				}
				this.$emit('onChange',this.money)
			},
			addOther(){
				this.$emit('addOther')
			}
		}
	}
</script>

<style>
	.counter{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 720rpx;
		background: #fff;
		padding:0 15rpx;
		padding-bottom: 40rpx;
		border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
		box-shadow: 0rpx 1rpx 10rpx 2rpx #eee;
	}
	.counter-info{
		box-sizing: border-box;
		color: #fff;
		border-top: 1rpx #eee solid;
		display: flex;
		justify-content: space-around;
		background: white;
		padding: 20rpx 0;
		margin-bottom: 20rpx;
	}
	.counter-info-other{
		width: 500rpx;
		display: flex;
		justify-content: space-between;
	}
	.counter-info-other image{
		width: 56rpx;
		height: 56rpx;
	}
	.counter-info-input{
		width: 400rpx;
		box-sizing: border-box;
		margin-top: 8rpx;
		color: #666;
		font-size: 30rpx;
	}
	.counter-info-date{
		width: 250rpx;
		display: inline-block;
		color:#333;
		font-size: 30rpx;
		margin-left: 10rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: right;
	}
	.counter-info-date image{
		width: 42rpx;
		height: 42rpx;
		position: relative;
		top: 8rpx;
		left: 0;
		margin-right: 10rpx;
	}
	.counter-info-go{
		font-size: 28rpx;
		color: #999999;
		font-weight: 400;
		margin-top: 10rpx;
		
	}
	.counter-info-go image{
		width: 25rpx;
		height: 25rpx;
		position: relative;
		top: 5rpx;
		left: 0;
	}
	.counter-view{
		width: 710rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		line-height: 150rpx;
		text-align: right;
		position: relative;
		font-size: 50rpx;
		color: #444444;
		font-weight:blod;
		border-radius: 10rpx;
	}
	.counter-view-category{
		position: absolute;
		top: 15rpx;
		left: 15rpx;
		height: 120rpx;
		text-align: left;
		display: flex;
		align-items: center;
		
	}
	.counter-view-category image{
		width:70rpx;
		height:70rpx;
		padding: 10rpx;
		background: #56C395;
		border-radius: 50rpx;
	}
	.counter-view-category text{
		font-size: 30rpx;
		margin-left: 10rpx;
	}
	.counter-view-now-number{
		position: absolute;
		top: 48rpx;
		right: 30rpx;
		font-size: 22rpx;
		color: #333333;
		
	}
	
	.counter-btn-item ul{
		justify-content: space-around;
		margin-bottom: 10rpx;
	}
	.counter-btn-item li{
		width: 170rpx;
		text-align: center;
		height: 90rpx;
		line-height: 90rpx;
		background: #eee;
		border-radius:15rpx;
		font-size: 36rpx;
		color: #555;
		
	}
	.clear{
		width: 55rpx;
		height: 55rpx;
		margin-top: 17rpx;
	}
	.counter-btn-item li:active{
		background: #eeeeee;
		color: #333333;
	}
</style>
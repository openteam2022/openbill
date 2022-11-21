<template>
	<view class="add">
		<!-- 禁止弹出框滑动页面 穿透 -->
		<page-meta :page-style="'overflow:'+(dateShow?'hidden':'visible')"></page-meta>
		<!-- 状态栏占位 -->
		<view class="add-header">
			<status-bar bgColor="#fff"></status-bar>
			<view class="add-header-box">
				<text class="add-header-back" @click="goBack()"><uni-icons type="back" size="25" color="#333"></uni-icons></text>
				<view class="tabbar-category">
					<text :class="[type == 0 ? selectTab:defaultTab]" @click="clickTab(0)">支出</text>
					<text :class="[type == 1 ? selectTab:defaultTab]" @click="clickTab(1)">收入</text>
				</view>
			</view>
		</view>
		<!-- 分类编辑 -->
		<view class="otherBody" @touchmove.stop.prevent="moveHandle"   v-if="otherShow" >
			<view class="otherInput">
				<input  v-model="other"  placeholder="请输入备注信息" :focus="true" />
				<view class="otherBtn">
					<text @click="hideOther()">取消</text>
					<text @click="saveOther()">保存</text>
				</view>
			</view>
		</view>
		<view class="category" v-if="type == 0">
			<view class="category-item">
				<ul>
					<li v-for="(item,index) in payData" @click="choiceCategory(item.id,index)">
						<image :src="item.imgUrl" :class="[selectPayId == index ? chooseCategory:defaultCategory]"/>
						<text>{{item.name}}</text>
					</li>
					<!-- <li @click="goEditCategory()">
						<image src="@/static/img/add.png"/>
						<text >编辑</text>
					</li> -->
				</ul>
			</view>
		</view>
		<view class="category" v-else>
			<view class="category-item">
				<ul>
					<li v-for="(item,index) in incomeData" @click="choiceCategory(item.id,index)">
						<image :src="item.imgUrl" :class="[selectIncomeId== index ? chooseCategory:defaultCategory]"/>
						<text>{{item.name}}</text>
					</li>
					<!-- <li @click="goEditCategory()">
						<image src="../../static/imgs/add.png"/>
						<text >编辑</text>
					</li> -->
				</ul>
			</view>
		</view>
		<counter :selectCategory="selectCategory" :addNotes="addNotes" :currentTime="currentTime" @onChange="onChange" @save="saveBill" @chooseDate="chooseDate" @addOther="addOther"></counter>
	
		<uni-calendar 
			ref="datebox"
			:insert="false"
			:lunar="true" 
			:clear-date="true"
			:showMonth="false"
			:selected="date"
			@confirm="onDateClick"
			@close="hideDate"
			 />
			
	</view>
</template>

<script>
	import {addBill,createBill,updateTotalData} from '@/common/sqlite.js';
	import Dates from '@/common/date.js'
	import {checkNull} from '@/common/shield.js'
	import {goReturn,showInfo} from '@/common/base.js'
	import open from '@/common/comm.js'
	import StatusBar from '@/components/layout/statusBar.vue'
	import Counter from '@/components/add/counter.vue'
	import UniCalendar from '../../uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue'
	const date = new Dates()
	export default {
		components:{
		    StatusBar: StatusBar,
			Counter: Counter,
			UniCalendar: UniCalendar
		},
		data(){
			return{
				userInfo: this.$store.state.userInfo,
				markDays:[],
				addNotes:false,
				other:'',
				otherShow: false,
				selectTab:'selectTab',
				defaultTab:'defaultTab',
				chooseCategory:'chooseCategory',
				defaultCategory:'defaultCategory',
				categoryChoose:0,
				type:0,//消费类型：0代表支出，1代表收入
				dateShow:false,
				categoryList:[],//分类渲染存储
				payCategoryList:[],//支出分类列表
				incomeCategoryList:[],//收入分类列表
				selectCategory:{
					id:1,
					imgUrl:'@/static/img/default1.png',
					name:'默认',
					type:'1'
					},//默认选中列表
				selectId:1,//选中的分类id
				nowTime:'',//选择的时间
				nowYear: date.getYear(),//选择的年份
				nowMonth: date.getMonth(),//选择的月份
				nowDay: date.getDay(),//选择的天数
				nowWeek: date.getWeek(),//选择的星期几
				currentTime:'',//页面选择后的选择的时间
				billDate:'',//time表用来排序时间
				trueYear:'',//添加时的真实时间，不是选择日期的时间
				trueMonth:'',//添加时的真实时间，不是选择日期的时间
				trueDay:'',//添加时的真实时间，不是选择日期的时间
				incomeData: this.$store.state.incomeList,
				selectIncomeId: 0,
				payData: this.$store.state.payList,
				selectPayId: 0,
				money: 0,
				date: []
				
			}
		},
		created(){
			var that = this;
			//初始化当前日期
			this.currentTime = `${date.getMonth()}月${date.getDay()}日`;
			//初始化当前选中分类
			this.selectCategory = this.payData[0];
		},
		methods:{
			//返回上一页面
			goBack(){
				goReturn();
			},
			//跳转到日期页面
			goDate(){
				uni.navigateTo({
					url:"../date/index"
				})
			},
			onChange(e){
				this.money = e;
			},
			//保存账单
			saveBill(){
				const that = this;
				if(that.userInfo.id){
					//如果记录账单金额为0,抛出失败信息
					if(!checkNull(that.money,'请输入金额'))return false;
					// 用户选择的记账日期
					const date = new Dates();
					let billTime = that.billDate || date.getTime();
					console.log(that.billDate)
					console.log(date.getTime())
					//保留记账金额2个小数点
					let money = parseFloat(that.money).toFixed(2);
					//判断金额第一位如果是0，则过滤掉0
					if(money.indexOf(0) ==0 || money.indexOf("0") ==0){
						money.slice(1,money.length)
					}
					let data = {
						category_id:that.selectId,
						type: that.type,
						cost: money,
						day:that.nowDay,
						week:that.nowWeek,
						month:that.nowMonth,
						year:that.nowYear,
						other:that.other || '',
						bill_time:billTime,
						create_time: date.getTime()
					};

					//添加消费记录到本地数据库
					addBill(data).then(()=>{
						showInfo('添加成功')
						// 更新首页
						open.emit('get_bill');
						// 更新个人中心记账数据统计
						open.emit('updateMeTotalData');
						// 更新统计表数据,添加记录次数，累计记录天数，
						this.onUpdateTotalData();
					}).catch((error)=>{
						console.log(error)
						showInfo('添加失败')
					})
				}else{
					uni.showToast({
						title:"未登录账号！",
						icon:"error"
					})
				}
				
			},
			// 初始化计算器数据
			initCounterData(){
				this.money = 0;
				this.moneys = ['0'];
				this.nowNumber = '';
				this.indexMark = false;
				this.index = 100;
				this.startNumber = '';
				this.endNumber = '';
				this.nowNumber ='';
				this.other = '';
			},
			// 更新统计数据表
			onUpdateTotalData(){
				this.billDate = '';
				let {total_day,total_number,last_time,notes} = this.$store.state.totalData;
				if(last_time != date.getDate()){
					last_time = date.getDate();
					total_day += 1;
				}
				total_number += 1;
				let totalData = {
					total_day: total_day,
					total_number: total_number,
					last_time: last_time
				}
				this.$store.state.totalData = {...totalData,notes: notes};
				// 更新统计数据表
				updateTotalData(totalData).then(()=>{
					console.log("统计数据表添加成功");
					// 初始化计算器数据
					this.initCounterData();
					uni.switchTab({
					    url: '/pages/index/index'
					});
				}).catch((error)=>{
					console.log(error);
					console.log("统计数据表添加失败")
				})
			},
			//选择不同类型消费
			choiceCategory(id,index){
				// 判断类型是支出还是收入
				if(this.type === 0){
					//选中的当前id
					this.selectPayId = id -1;
					this.selectId = id;
					//选中的分类
					this.selectCategory = this.payData[index];
				}else{
					this.selectIncomeId = id - 1;
					this.selectId = id;
					this.selectCategory = this.incomeData[index];
				}
			},
			hideEdit(){
				this.categoryShow = false;
			},
			// 添加备注
			addOther(){
				this.otherShow = true;
			},
			// 取消备注
			hideOther(){
				this.otherShow = false;
				this.other = '';
				open.emit('add_other',);
			},
			//保存备注
			saveOther(){
				//去除备注空格
				this.other = this.other.replace(/\s*/g,"");
				open.emit('add_other',this.other);
				this.otherShow = false;
			},
			//切换支出还是收入
			clickTab(e){
				this.type = e;
				if(e == 0){
					this.selectCategory = this.payData[0];
				}else if(e == 1){
					this.selectCategory = this.incomeData[0];
				}
			},
			moveHandle(){
				return false;
			},
			chooseDate(){
				this.dateShow = true;
				this.$refs.datebox.open();
			},
			hideDate(){
				this.dateShow = false;
			},
			//点击时间选择对应日期编辑
			onDateClick(data){
				this.dateShow =false;
				let year = data.year;//获取年份
				let month = data.month;//获取月份
				let day = data.date;//获取天数
				let week =data.nWeek;
				this.billDate = `${data.fulldate} 23:59:59`;
				this.nowYear = year;
				this.nowMonth = month;
				this.nowDay = day;
			    this.currentTime = `${month}月${day}日`;
			},
			
		},
	}
</script>

<style>
	ul{
		display: flex;
		padding: 0;
		margin: 0;
	}
	li{
		list-style-type: none;
		
	}
	page{
		background: #ffffff;
	}
	.add-header{
		position: sticky;
		top: 0;
		z-index: 99;
		box-shadow: 0rpx 1rpx 10rpx #eee;
	}
	.add-header-box{
		height: 90rpx;
		line-height: 90rpx;
		width: 690rpx;
		padding: 0 30rpx;
		background: #ffffff;
		color: black;
		text-align: center;
		position: relative;
		font-size: 36rpx;
		border-bottom: 1rpx #eeeeee solid;
		z-index: 999;
	}
	.add-header-back{
		position:absolute;
		left: 20rpx;
		width: 50rpx;
		height: inherit;
	}
	.tabbar-category text{
		padding: 20rpx 5rpx;
		margin: 0 50rpx;
	}
	.selectTab{
		border-bottom: 4rpx #56C395 solid;
		font-size: 34rpx;
		color: #333;
	}
	.defaultTab{
		border-bottom: none;
		font-weight: none;
		font-size: 34rpx;
		color: #666;
	}
	.category{
		width: 690rpx;
		padding: 0 30rpx;
	}
	.category-item{
		padding-top: 30rpx;
		padding-bottom: 700rpx;
	}
	.category-item ul{
		display: flex;
		flex-wrap:wrap;
	}
	.category-item ul li{
		width: 138rpx;
		text-align: center;
		margin-bottom: 30rpx;
	}
	.category-item image{
		display: block;
		width: 70rpx ;
		height: 70rpx;
		padding: 10rpx;
		margin: 0 19rpx;
		margin-bottom: 2rpx;
		border-radius: 50rpx;
	}
	.category-item text{
		display: inline-block;
		width: 138rpx;
		text-align: center;
		color: #333333;
		font-size:24rpx;
		margin-top: 10rpx;
	}
	.chooseCategory{
		background: #56c395;
		box-shadow: 0rpx 2rpx 10rpx 2rpx #d7ffed;
	}
	.defaultCategory{
		background: #eeeeee;
	}
	.date{
		padding: 20rpx 0;
	}
	.date-time{
		font-size: 40rpx;
		font-weight: bold;
		color: #555555;
	}
	.date-time text:nth-child(2){
		margin-left: 20rpx;  
	}
	.date-change{
		font-size: 30rpx;
		color: #888888;
		margin-top: 20rpx;
	}
	.date-time text:last-child{
		font-size: 30rpx;
		margin-left: 20rpx;
		color: #999999;
	}
	.currentCategory{
		position: absolute;
		top: 15rpx;
		left: 15rpx;
		height: 120rpx;
		text-align: left;
		display: flex;
		align-items: center;
		
	}
	.currentCategory image{
		width:70rpx;
		height:70rpx;
		padding: 10rpx;
		background: #56C395;
		border-radius: 50rpx;
	}
	.currentCategory text{
		font-size: 30rpx;
		margin-left: 10rpx;
	}
	
	
	.editBody{
		position: absolute;
		bottom: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background: #f4f4f4;
		z-index:9999;
		margin-top: 0;
		
	}
	.editBody ul{
		margin: 0;
		padding: 0;
	}
	.otherBody{
		position: absolute;
		bottom: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background:rgba(0,0,0,0.6);
		z-index:9999;
		margin-top: 0;
		position: fixed;
	}
	.otherInput{
		position: absolute;
		top: 30%;
		width: 610rpx;
		padding:50rpx 40rpx;
		background: #ffffff;
		margin:0 30rpx;
		border-radius: 10rpx;
	}
	.otherInput input{
		border-bottom: 1rpx #eeeeee solid;
		padding: 40rpx 0 20rpx 0rpx;
		width: 570rpx;
	}
	.otherBtn{
		display: flex;
		justify-content: space-between;
		padding-top: 40rpx;
	}
	.otherBtn text{
		background: #55C394;
		height: 80rpx;
		line-height: 80rpx;
		width: 280rpx;
		text-align: center;
		border-radius: 10rpx;
		color: white;
	}
	.otherBtn text:hover{
		opacity: 0.5;
	}
	.otherBtn text:nth-child(1){
		background: #eeeeee;
		color: #333333;
	}
	.editTab{
		height: 90rpx;
		line-height: 90rpx;
		width: 690rpx;
		padding: 0 30rpx;
		background: #f4f4f4;
		border-bottom: 1rpx #eeeeee solid;
		position: relative;
	}
	.editTab ul{
		width: 690rpx;
		display: flex;
		justify-content: center;
		font-size: 36rpx;
		color: #333333;
	}
	.editTab ul li:last-child{
		position: absolute;
		top: 0;
		right: 30rpx;
		font-size: 34rpx;
	}
	.downBox{
		position: absolute;
		bottom: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background:rgba(0,0,0,0.5);
		z-index:9999;
		margin-top: 0;
		position: fixed;
	}
	.downItem{
		width: 750rpx;
		height: 500rpx;
		position: absolute;
		left: 0;
		bottom: 0rpx;
		padding:20rpx 0 40rpx 0;
		background: white;
		border-top-left-radius:20rpx ;
		border-top-right-radius: 20rpx;
	}
</style>

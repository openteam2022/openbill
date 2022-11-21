<template>
	<view class="view">
		<!-- 状态栏占位 -->
		<view class="custom" :style="{height:statusBarHeight+'px'}"></view>
		<view class="topBar" :style="{position:'absolute',top:statusBarHeight+'px',left:0,position:'fixed'}">
			<view class="tabbar-category">
				<image class="topBar-back" src="../../static/imgs/back.png" mode="" @click="goHome()"></image>
				<text >记账统计</text>
				<!-- <text :class="[select == 0 ? selectTab:defaultTab]" @click="clickTab(0)">记账统计</text> -->
			</view>
		</view>
		<view class="view-container" :style="{paddingTop:statusBarHeight+45+'px'}" >
			<view class="view-date" >
				<view class="viewDate-item" :class="[selectTime == 0 ? selectDate:defaultDate]" @click="clickDate(0)">
					周统计
				</view>
				<view class="viewDate-item" :class="[selectTime == 1 ? selectDate:defaultDate]" @click="clickDate(1)">
					月统计
				</view>
				<view class="viewDate-item" :class="[selectTime == 2 ? selectDate:defaultDate]" @click="clickDate(2)">
					年统计
				</view>
			</view>
		</view>
		<view v-if="selectTime == 0">
			<view class="statistics">
				<view class="statistics-title">
					本周统计
				</view>
				<view class="statistics-content">
					<text>总支出：{{weekTotalPay}}</text><text>总收入：{{weekTotalIncome}}</text>
					
				</view>
				<view class="charts-box">
				    <qiun-data-charts  type="area" :opts="{extra:{area:{type:'curve',addLine:true,gradient:true}}}" :chartData="weekPayList"/>
				</view>
				<view class="charts-box">
				    <qiun-data-charts  type="area" :opts="{extra:{area:{type:'curve',addLine:true,gradient:true}}}" :chartData="weekIncomeList"/>
				</view>
			</view>
			<!-- <view class="statistics">
				<view class="statistics-title">
					支出排行榜
				</view>
				<view class="progress">
					<view class="progress-item" v-for=" (item,name,index) in totalCatagory">
						<view class="progress-img">
							<image :src="item.img" mode=""></image>
						</view>
						<view class="progress-content">
							<view class="progress-text">
								<text>{{item.name}} {{item.percentage}}%</text><text>{{item.money}}元</text>
							</view>
							<ai-progress :percentage="item.percentage" bgColor='#55C394' :line-data='true'>
							</ai-progress>
						</view>
					</view>
				</view>
			</view> -->
		</view>
		<!-- 月数据 -->
		<view v-if="selectTime == 1">
			<view class="statistics">
				<view class="statistics-title">
					本月统计
				</view>
				<view class="statistics-content">
					<text>总支出：{{monthTotalPay}}</text><text>总收入：{{monthTotalIncome}}</text>
					
				</view>
				<view class="charts-box">
				    <qiun-data-charts  type="area" :opts="{extra:{area:{type:'curve',addLine:true,gradient:true}}}" :chartData="monthPayList"/>
				</view>
				<view class="charts-box">
				    <qiun-data-charts  type="area" :opts="{extra:{area:{type:'curve',addLine:true,gradient:true}}}" :chartData="monthIncomeList"/>
				</view>
			</view>
			<!-- <view class="statistics">
				<view class="statistics-title">
					支出排行榜
				</view>
				<view class="progress">
					<view class="progress-item" v-for=" (item,name,index) in totalCatagory">
						<view class="progress-img">
							<image :src="item.img" mode=""></image>
						</view>
						<view class="progress-content">
							<view class="progress-text">
								<text>{{item.name}} {{item.percentage}}%</text><text>{{item.money}}元</text>
							</view>
							<ai-progress :percentage="item.percentage" bgColor='#55C394' :line-data='true'>
							</ai-progress>
						</view>
					</view>
				</view>
			</view> -->
		</view>
		<!-- 年数据 -->
		<!-- 月数据 -->
		<view v-if="selectTime == 2">
			<view class="statistics">
				<view class="statistics-title">
					本年统计
				</view>
				<view class="statistics-content">
					<text>总支出：{{yearTotalPay}}</text><text>总收入：{{yearTotalIncome}}</text>
					
				</view>
				<view class="charts-box">
				    <qiun-data-charts  type="area" :opts="{extra:{area:{type:'curve',addLine:true,gradient:true}}}" :chartData="yearPayList"/>
				</view>
				<view class="charts-box">
				    <qiun-data-charts  type="area" :opts="{extra:{area:{type:'curve',addLine:true,gradient:true}}}" :chartData="yearIncomeList"/>
				</view>
			</view>
			<!-- <view class="statistics">
				<view class="statistics-title">
					支出排行榜
				</view>
				<view class="progress">
					<view class="progress-item" v-for=" (item,name,index) in totalCatagory">
						<view class="progress-img">
							<image :src="item.img" mode=""></image>
						</view>
						<view class="progress-content">
							<view class="progress-text">
								<text>{{item.name}} {{item.percentage}}%</text><text>{{item.money}}元</text>
							</view>
							<ai-progress :percentage="item.percentage" bgColor='#55C394' :line-data='true'>
							</ai-progress>
						</view>
					</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
	import qiunDataCharts from "../../components/u-charts/components/qiun-data-charts/qiun-data-charts.vue"
	import aiGrogress from "../../components/ai-progress/ai-progress.vue"
	import {selectUser,viewWeekBill,viewMonthBill} from '@/components/sqlite/sqlite.js';
	export default {
		components: {  
			qiunDataCharts:qiunDataCharts,
			aiGrogress:aiGrogress
		},  
		data() {
			return {
				title: 'Hello',
				statusBarHeight:statusBarHeight,
				selectTab:'selectTab',
				defaultTab:'defaultTab',
				select:0,
				loadingTxt:'加载更多',
				selectTime:0,
				selectDate:'selectDate',
				defaultDate:'defaultDate',
				weekPayList:{"categories": ["周一", "周二", "周三", "周四", "周五", "周六","周日"],
					"series": [{
						"name": "支出(元)",
						"data": [0, 0, 0, 0, 0, 0,0]
					}]},
				weekIncomeList:{"categories": ["周一", "周二", "周三", "周四", "周五", "周六","周日"],
					"series": [{
						"name": "收入(元)",
						"data": [0, 0, 0, 0, 0, 0,0]
					}]},
				monthPayList:{"categories": ["周一", "周二", "周三", "周四", "周五", "周六","周日"],
					"series": [{
						"name": "支出(元)",
						"data": [1, 3, 5, 88, 100, 2000,5000]
					}]},
				monthIncomeList:{"categories": ["周一", "周二", "周三", "周四", "周五", "周六","周日"],
					"series": [{
						"name": "收入(元)",
						"data": [0, 0, 0, 0, 0, 0,0]
					}]},
				yearPayList:{"categories": ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
					"series": [{
						"name": "支出(元)",
						"data": [0, 0 ,5, 0, 0, 0,0]
					}]},
				yearIncomeList:{"categories": ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月", "9月", "10月", "11月", "12月"],
					"series": [{
						"name": "收入(元)",
						"data": [0, 0, 0, 0, 0, 0,0]
					}]},
				Line: {
					"categories": ["1", "2", "3", "4", "5", "6","7"],
					"series": [{
						"name": "收入(元)",
						"data": [35, 8, 25, 37, 4, 20,10]
					}, {
						"name": "支出(元)",
						"data": [70, 40, 65, 100, 44, 68,20]
					}]
				},
				totalPay:0,//本周总支出
				totalIncome:0,//本周总收入
				weekPayData:[],//支出数据
				weekIncomeData:[],//收入数据
				weekTotalPay:0,//本周总支出
				weekTotalIncome:0,//本周总收入
				monthPayData:[],//支出数据
				monthIncomeData:[],//收入数据
				monthTotalPay:0,//月总支出
				monthTotalIncome:0,//月总收入
				currentMonthDay:0,//本月多少天
				totalCatagory:[],//分类排行榜
				currentMonth:'',//当前月份，
				currentYear:'',//当前年份
				yearList:[1,2,3,4,5,6,7,8,9,10,11,12],
				showYearList:[]
			}
		},
		onLoad(){
			const that = this;
			//获取当前年份和月份
			that.currentYear = new Date().getFullYear();
			that.currentMonth = new Date().getMonth()+1;
			//获取当月有多少天
			that.currentMonthDay =new Date(that.currentYear,that.currentMonth, 0).getDate() ;
			//获取本周的数据
			viewWeekBill(that);
			that.weekIncomeList['series'][0].data = that.weekIncomeData;
			that.weekPayList['series'][0].data = that.weekPayData;
			//赋值月数据天数
			const day =[];
			for(var i = 0;i<that.currentMonthDay;i++){
				day.push(i+1);
			}
			that.monthIncomeList["categories"] = day;
			that.monthPayList["categories"] = day;
			viewMonthBill(that);
			that.monthIncomeList['series'][0].data = that.monthIncomeData;
			that.monthPayList['series'][0].data = that.monthPayData;
		},
		// created(){
		// 	this.currentYear = new Date().getFullYear();
		// 	this.currentMonth = new Date().getMonth()+1;
		// 	this.getWeekData();
		// 	for(var i = 0; i < this.yearList.length; i ++){
		// 		this.showYearList[i] = this.yearList[i];
		// 		if(this.yearList[i] == this.currentMonth){
		// 			return false;
		// 		}
		// 	}
		// },
		methods:{
			goHome(){
				uni.navigateBack({
				    delta: 1
				});
			},
			clickTab(e){
				this.select = e;
			},
			clickDate(e){
				this.selectTime = e;
				if(e == 0){
					this.getWeekData()
				}else if(e == 1){
					this.getMonthData()
				}else if(e == 2){
					console.log("year")
					this.getYearData()
				}
			},
			//左边减少时间
			leftTime(){
			
				var index = 0;
				for(var i =0;i<this.showYearList.length;i++){
					if(this.showYearList[i] == this.currentMonth){
						index = i-1;
							console.log(this.currentMonth)
						if(i == 0){
							index = 0;
						}
					}
				}
				this.currentMonth = this.showYearList[index];
			},
			//右边增加时间
			rightTime(){
				var index = 0;
				for(var i =0;i<this.showYearList.length;i++){
					if(this.showYearList[i] == this.currentMonth){
						index = i+1;
						if(index == this.showYearList.length){
							index = this.showYearList.length-1;
						}
					}
				}
				this.currentMonth = this.showYearList[index];
			},
			//获取7天数据
			getWeekData(){
				
			},
			//获取最近一月的数据
			getMonthData(){
				var that = this;
				
			},
			getYearData(){
				//获取本年度的数据
				uni.request({
					url:'http://127.0.0.1:80/index.php/songguo/bill/appGetYear',
					data:{
						x:'songguo',
						year:this.currentYear
					},
					method:'POST',
					success:(res) =>{
						if(res.data.status == 1){
							console.log(res.data.pay)
							var pay = res.data.pay;
							var get = res.data.get;
							var date = res.data.data;
							var category = res.data.category;
							var dateData = this.yearToView(date,'time');
							this.Line['categories'] = dateData;
							//支出
							console.log(pay)
							console.log(get)
							var payData = this.yearDataToView(pay,'money');
							this.Line['series'][1].data = payData['data'];
							this.totalPay = payData['money'];
							//收入
							var getData = this.yearDataToView(get,'money');
							this.Line['series'][0].data = getData['data'];
							this.totalGet = getData['money'];
							//分类统计
							
							this.totalCatagory = this.yearDataCategoryToView(pay,category,this.totalPay);
							this.chartsDataArea2=JSON.parse(JSON.stringify(this.Line))
						}else{
							uni.showToast({
								title:res.data.message,
								icon:"error"
								
							})
						}
					},
				})
			},
			//后台数据获取时间展示
			dateToView(DATA,TYPE){
				var data = [];
				for(var i = 0;i < DATA.length;i++){
					var nowDate = DATA[i][TYPE].slice(5,10)
					data[i] = nowDate;
				}
				return data;
			},
			//后台数据获取本年度时间展示
			yearToView(DATA,TYPE){
				var data = [];
				for(var i = 0;i < DATA.length;i++){
					var nowDate = DATA[i][TYPE]
					data[i] = nowDate+"月";
				}
				return data;
			},
			//后台数据转换成页面可展示结果集
			dataToView(DATA,TYPE){
				var datas = [];
				var data = [];
				var tootalMoney = 0;//计算支出和收入的总钱数
				for(var i = 0;i < DATA.length;i++){
					var num = 0;
					for(var j = 0; j < DATA[i].length;j++){
						num += DATA[i][j][TYPE];
						tootalMoney += DATA[i][j][TYPE];
					}
					data[i] = num;
				}
				datas['data']=data;
				datas['money']=tootalMoney;
				return datas;
			},
			//后台年度数据转换成页面可展示结果集
			yearDataToView(DATA,TYPE){
				var datas = [];
				var data = [];
				var tootalMoney = 0;//计算支出和收入的总钱数
				for(var i = 0;i < DATA.length;i++){
					tootalMoney += DATA[i][TYPE];
					data[i] = DATA[i][TYPE];
				}
				datas['data']=data;
				datas['money']=tootalMoney;
				return datas;
			},
			//后台数据转换成分类可展示结果集
			dataCategoryToView(DATA,CATEGORY,TOTALPAY){
				var datas = [];
				var data = [];
				var totalMoney = [];//计算支出和收入的总钱数
				for(var i = 0;i < CATEGORY.length;i++){
					for(var j = 0; j < CATEGORY[i].length;j++){
						data.push(CATEGORY[i][j]['name'])
						
					}
					// data.push(CATEGORY[i]['type'])
				}
				var j;
				var newData = [];
				 
			    for (var i = 0, j = data.length; i < j; i++) {
					if (newData.indexOf(data[i]) === -1) {
						newData.push(data[i]);
					}
				}
				var totalPayMoney = 0;//计算总共支出的钱数
				for(var a =0;a<newData.length;a++){
					var c = [];
					var b = 0;
					var d ='';
					for(var i = 0;i < DATA.length;i++){
						for(var j = 0; j < DATA[i].length;j++){
							if(newData[a] == DATA[i][j]['name']){
								b += DATA[i][j]['money'];
								d = DATA[i][j]['imgUrl']
							}
						}
					}
					totalPayMoney += b;
					c['name'] = newData[a];
					c['money'] = b;
					c['img'] = d;
					totalMoney.push(c);
				}
				for(var i =0;i<totalMoney.length;i++){
					totalMoney[i]['percentage']=Math.floor((totalMoney[i]['money']/TOTALPAY)*100);
				}
				totalMoney = totalMoney.sort(function(a,b){
					return b.percentage - a.percentage;
				});
				return totalMoney;
			},
			//后台年度数据转换成分类可展示结果集
			yearDataCategoryToView(DATA,CATEGORY,TOTALPAY){
				var datas = [];
				var data = [];
				var totalMoney = [];//计算支出和收入的总钱数
				for(var i = 0;i < CATEGORY.length;i++){
					for(var j = 0; j < CATEGORY[i].length;j++){
						var mark = [];
						mark['name']= CATEGORY[i][j]['name'];
						mark['imgUrl'] = CATEGORY[i][j]['imgUrl'];
						data.push(mark);
					}
					// data.push(CATEGORY[i]['type'])
				}
				var j;
				var newData = [];
			    for (var i = 0, j = data.length; i < j; i++) {
					if (newData.indexOf(data[i]) === -1) {
						newData.push(data[i]);
					}
				}
				var totalPayMoney = 0;//计算总共支出的钱数
				console.log(DATA)
				for(var a =0;a<newData.length;a++){
					var c = [];
					var b = 0;
					var d ='';
					for(var i = 0;i < DATA.length;i++){
						if(a == i){
							b += DATA[i]['money'];
							d = newData[a]['imgUrl']
						}
					}
					totalPayMoney += b;
					c['name'] = newData[a]['name'];
					c['money'] = b;
					c['img'] = d;
					totalMoney.push(c);
				}
				console.log(totalMoney)
				for(var i =0;i<totalMoney.length;i++){
					totalMoney[i]['percentage']=Math.floor((totalMoney[i]['money']/TOTALPAY)*100);
				}
				totalMoney = totalMoney.sort(function(a,b){
					return b.percentage - a.percentage;
				});
				return totalMoney;
			},
		}
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
		background: #f8f8f8;
		padding-bottom: 50rpx;
	}
	.custom{
		width: 750rpx;
		background: #ffffff;
		position: absolute;
		top: 0;
		left: 0;
		position: fixed;
		z-index: 9;
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
		font-size: 30rpx;
		border-bottom: 1rpx #eeeeee solid;
		z-index: 999;
		/* box-shadow: 0px 7px 11px -4px #eeeeee ; */
	}
	.topBar-back{
		position:absolute;
		top: 20rpx;
		left: 20rpx;
		width: 50rpx;
		height: 50rpx;
	}
	.tabbar-category text{
		padding: 20rpx 5rpx;
		margin: 0 45rpx;
		font-size: 34rpx;
	}
	.selectTab{
		border-bottom: 4rpx #55C394 solid;
		font-weight: bold;
		font-size: 30rpx;
		color: #333333;
	}
	.defaultTab{
		border-bottom: none;
		font-weight: none;
		font-size: 34rpx;
		color: #333333;
	}
	.view-container{
		width: 690rpx;
		padding: 0rpx 30rpx;
	}
	.view-date{
		display: flex;
		padding-top: 26rpx;
	}
	.timeList{
		width: 690rpx;
		padding: 0 30rpx;
		display: flex;
		justify-content: center;
	}
	.timeList-Month{
		width: 200rpx;
		text-align: center;
	}
	.viewDate-item{
		padding: 10rpx 40rpx;
		margin-right: 30rpx;
		text-align: center;
		font-size: 30rpx;
		border-radius: 15rpx;
	}
	.selectDate{
		background: #56C395;
		color: #ffffff;
		
	}
	.defaultDate{
		color: #333333;
	}
	.statistics{
		width: 710rpx;
		padding: 10rpx 0 ;
		margin: 0 20rpx;
		background: white;
		border-radius:20rpx ;
		margin-top: 20rpx;
		box-shadow: 0px 3px 8px 2px #f4f4f4 ;
	}
	.statistics-title{
		width:670rpx;
		padding:20rpx 20rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
	}
	.statistics-content{
		width: 670rpx;
		padding: 20rpx 20rpx;
		
		font-size: 28rpx;
		color: #333333;
		display: flex;
		justify-content: space-between;
		
	}
	/* .charts-title{
		width:690rpx;
		padding: 10rpx 30rpx;
		font-size: 30rpx;
		color: #333333;
		font-weight: bold;
	} */
	.charts-box{
		width: 710rpx;
		padding-top:30rpx;
	}
	.progress{
		width: 690rpx;
		padding: 30rpx;
	}
	.progress-item{
		display: flex;
		align-items: center;
		margin-bottom: 40rpx;
	}
	.progress-img,.progress-img image{
		width: 70rpx;
		height: 70rpx;
		margin-right: 30rpx;
	}
	.progress-content{
		width: 590rpx;
		
	}
	.progress-text{
		font-size: 28rpx;
		color: #333333;
		display: flex;
		justify-content: space-between;
	}
</style>

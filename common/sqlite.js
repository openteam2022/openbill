
//创建数据库或者有该数据库就打开
export async function openSqlite(){
	//创建数据库或者打开
	//这plus.sqlite只在手机上运行
	return new Promise((resolve,reject) =>{
		plus.sqlite.openDatabase({
			name:'openbill',  //数据库名称
			path:'_doc/openbill.db',   //数据库地址
			success(){
				resolve(true)
			},
			fail(error){
				reject(error)
			}
		})
	})	
}
// 判断数据库是否打开
export async function isOpen(){
	return new Promise((resolve,reject) => {
		let res = plus.sqlite.isOpenDatabase({
			name:'openbill',  //数据库名称
			path:'_doc/openbill.db'  //数据库地
		});
		if(res){
			resolve(true)
		}else{
			reject(false)
		}
	})
}
// 查询所有表
export async function isTable(tabName){
	return new Promise((resolve,reject) =>{
	//创建表格在executeSql方法里写
		plus.sqlite.executeSql({
			name:'openbill',
			//表格创建或者打开，后面为表格结构
			sql: 'select * from '+ tabName+' where id = 1' ,
			success(data){
				resolve(data)
			},
			fail(){
				reject(false)
			}
		})
	})
}
// 关闭数据库
export async function closeDb(){
	return new Promise ((resolve,reject) => {
		plus.sqlite.closeDatabase({
			name: 'openbill',
			success(){
				resolve(true)
			},
			fail(error) {
				reject(error)
			}
		})
	})
} 


//创建账单表
export async function createBill(){
	return new Promise((resolve,reject) =>{
	//创建表格在executeSql方法里写
		plus.sqlite.executeSql({
			name:'openbill',
			//表格创建或者打开，后面为表格结构
			sql:'create table if not exists open_bill ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"category_id" int(15) NOT NULL,"cost" varchar(16) NOT NULL,"type" int(1) NOT NULL,"other" varchar(28),"week" int(1) NOT NULL,"year" int(4) NOT NULL,"month" int(2) NOT NULL,"day" int(2) NOT NULL,"bill_time" datetime NOT NULL,"create_time" datetime NOT NULL,"update_time" datetime)', 
			success(e){
				resolve(true)
			},
			fail(error){
				reject(error)
			}
		})
	})
}
// 添加账单表
export async function addBill(data){
	return new Promise((resolve,reject) =>{
		plus.sqlite.executeSql({
			name:'openbill',
			sql:'insert into open_bill(category_id,other,cost,type,week,year,month,day,bill_time,create_time) values(" '+ data.category_id +'","'+ data.other +'","' + data.cost+'","' +data.type+'","' +data.week+'","' +data.year+'","' +data.month+'","' +data.day+'","' +data.bill_time+'"," '+data.create_time+'")',
			success(){
				resolve(true);
			},
			fail(error){
				reject(error);
			}
		})
	})
}

//修改账单表
export async function updateBill(data){
	return new Promise((resolve,reject) =>{
		plus.sqlite.executeSql({
			name:'openbill',
			sql:'update open_bill set other ="'+ data.other +'" ,cost = "'+ data.cost +'" ,category_id = "'+ data.category_id+'" ,type = "'+ data.type +'" ,week = "'+ data.week +'" ,year = "'+ data.year +'" ,month = "'+ data.month +'" ,day = "'+ data.day +'" ,bill_time = "'+ data.bill_time +'" ,update_time = "'+ data.update_time +'" where id = '+ data.id +'',
			success(e){
				resolve(true);
			},
			fail(e){
				reject(e);
			}
		})
	})
}
//获取账单表
export async function getBillData(data){
	return new Promise((resolve,reject) =>{
		plus.sqlite.selectSql({
			name:'openbill',
			sql: 'select DISTINCT (day),year,month from open_bill where year = '+data.year+' and month ='+data.month+' order by day desc',
			success(data){
				resolve(data)
			},
			fail(error){
				reject(error);
			}
		})
	})
}
//获取账单表
 export function getBill(data){
	return new Promise((resolve,reject) =>{
		plus.sqlite.selectSql({
			name:'openbill',
			sql: 'select * from open_bill where year ='+data.year+' and month = ' +data.month+' and day = '+data.day+' order by bill_time desc',
			success(data){
				resolve(data)
			},
			fail(error){
				reject(error);
			}
		})
	})
}
//创建周报表
export async function createWeekBill(){
	return new Promise((resolve,reject) =>{
	//创建表格在executeSql方法里写
		plus.sqlite.executeSql({
			name:'openbill',
			//表格创建或者打开，后面为表格结构
			sql:'create table if not exists open_week_bill ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"category_id" int(10) NOT NULL,"cost" int(10) NOT NULL,"week" int(2),"type" int(1) NOT NULL,"year" int(4) NOT NULL,"last_cost" int(10) NOT NULL)', 
			success(e){
				resolve(true)
			},
			fail(e){
				reject(false)
			}
		})
	})
}
//创建月报表
export async function createMonthBill(){
	return new Promise((resolve,reject) =>{
	//创建表格在executeSql方法里写
		plus.sqlite.executeSql({
			name:'openbill',
			//表格创建或者打开，后面为表格结构
			sql:'create table if not exists open_month_bill ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"income" int(10) NOT NULL,"pay" int(10) NOT NULL,"month" int(2),"year" int(4) NOT NULL)', 
			success(e){
				resolve(true)
			},
			fail(e){
				reject(false)
			}
		})
	})
}
//创建年报表
export async function createYearBill(){
	return new Promise((resolve,reject) =>{
	//创建表格在executeSql方法里写
		plus.sqlite.executeSql({
			name:'openbill',
			//表格创建或者打开，后面为表格结构
			sql:'create table if not exists open_year_bill ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"category_id" int(10) NOT NULL,"cost" int(10) NOT NULL,"type" int(1) NOT NULL,"year" int(4) NOT NULL,"last_cost" int(10) NOT NULL)', 
			success(e){
				resolve(true)
			},
			fail(e){
				reject(false)
			}
		})
	})
}
//创建当前年月周报表
export async function createCurrentDateBill(){
	return new Promise((resolve,reject) =>{
	//创建表格在executeSql方法里写
		plus.sqlite.executeSql({
			name:'openbill',
			//表格创建或者打开，后面为表格结构
			sql:'create table if not exists open_current_date_bill ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"category_id" int(10) NOT NULL,"week" int(2) NOT NULL ,"week_cost" int(12) NOT NULL,"month" int(2) NOT NULL,"mont_cost" int(12) NOT NULL,"year" int(2) NOT NULL,"year_cost" int(12) NOT NULL,"type" int(1) NOT NULL)', 
			success(e){
				resolve(true)
			},
			fail(e){
				reject(false)
			}
		})
	})
}
//创建统计数据表
export async function createTotalData(){
	return new Promise((resolve,reject) =>{
	//创建表格在executeSql方法里写
		plus.sqlite.executeSql({
			name:'openbill',
			//表格创建或者打开，后面为表格结构
			sql:'create table if not exists open_total_data ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"total_day" int(11) DEFAULT 0,"total_number" int(11) DEFAULT 0,"last_time" varchar(20) DEFAULT NULL)', 
			success(){
				resolve(true)
			},
			fail(error){
				reject(error)
			}
		})
	})
}
// 获取统计数据表
export async function getTotalData(){
	return new Promise((resolve,reject)=>{
		plus.sqlite.selectSql({
			name:'openbill',
			//表格创建或者打开，后面为表格结构
			sql:'select * from open_total_data', 
			success(data){
				resolve(data)
			},
			fail(e){
				reject(false)
			}
		})
	
	})
}
//添加统计数据表，
export async function addTotalData(data){
	return new Promise((resolve,reject) =>{
	//创建表格在executeSql方法里写
		plus.sqlite.executeSql({
			name:'openbill',
			//表格创建或者打开，后面为表格结构
			sql:'insert into open_total_data(total_day,total_number,last_time) values("'+data.total_day+'","'+data.total_number+'","'+data.last+'")', 
			success(){
				resolve(true)
			},
			fail(e){
				reject(false)
			}
		})
	})
}
//修改数据统计表，
export async function updateTotalData(data){
	return new Promise((resolve,reject) =>{
	//创建表格在executeSql方法里写
		plus.sqlite.executeSql({
			name:'openbill',
			//表格创建或者打开，后面为表格结构
			sql:'update  open_total_data set total_day ="'+ data.total_day +'" ,total_number = "'+ data.total_number +'" ,last_time = "'+ data.last_time +'" where id = 1', 
			success(){
				console.log('更新成功')
				resolve(true)
			},
			fail(error){
				reject(error)
			}
		})
	})
}
//创建账本表，
export async function createNotes(){
	return new Promise((resolve,reject) =>{
	//创建表格在executeSql方法里写
		plus.sqlite.executeSql({
			name:'openbill',
			//表格创建或者打开，后面为表格结构
			sql:'create table if not exists open_notes ("id" INTEGER PRIMARY KEY AUTOINCREMENT,"name" varchar(11) not null)', 
			success(e){
				resolve(true)
			},
			fail(e){
				reject(false)
			}
		})
	})
}
// 获取账本表
export async function getNotes(){
	return new Promise((resolve,reject)=>{
		plus.sqlite.selectSql({
			name:'openbill',
			//表格创建或者打开，后面为表格结构
			sql:'select * from open_notes', 
			success(data){
				resolve(data)
			},
			fail(e){
				reject(false)
			}
		})
	
	})
}
//添加账本，
export async function addNotes(data){
	return new Promise((resolve,reject) =>{
	//创建表格在executeSql方法里写
		plus.sqlite.executeSql({
			name:'openbill',
			//表格创建或者打开，后面为表格结构
			sql:'insert into open_notes(name) values("'+data.name+'")', 
			success(){
				resolve(true)
			},
			fail(e){
				reject(false)
			}
		})
	})
}


//查询获取数据库里的数据
//根据传过来的值来获取信息，我这里写了可以有两个条件来获取，都是动态的
//第一个参数为表格名，aa,bb分别为列名和列的值 ， cc,dd同前面
//传的参数按1,3,5来传，传一个，传三个，传五个参数，不能只传两个或者四个
export async function selectInformationType(name,aa,bb,cc,dd){
	if(name !== undefined){
		//第一个是表单名称，后两个参数是列表名，用来检索
		if(aa !== undefined && cc !== undefined){
			//两个检索条件
			var sql = 'select * from '+name+' where '+aa+'='+bb+' and '+cc+'='+dd+'';
		}
		if(aa !== undefined && cc == undefined){
			//一个检索条件
			var sql = 'select * from '+name+' where '+aa+'='+bb+'';
		}
		if(aa == undefined){
			var sql = 'select * from '+name+'';
		}
		return new Promise((resolve,reject) =>{
			plus.sqlite.selectSql({
				name:'openbill',
				sql:sql,
				success(){
					resolve(true);
				},
				fail(){
					reject(false);
				}
			})
		})
	}else{
		return new Promise((resolve,reject) =>{reject(false)});
	}
}

//初始化加载当月账单数据
export async function selectMonthPay(user_id,that,categoryList){
	that.nowMonthPay = 0;
	that.nowMonthIncome =0;
	// 过滤月份日期后面有字符串“月
	return new Promise((resolve,reject) =>{
		plus.sqlite.selectSql({
			name:'openbill',
			sql:'select month,day,year from open_bill where user_id ='+ user_id +' and month = '+ that.date + ' and year = '+ that.year + ' Order By day desc ' ,
			success(e){
				const obj = {};
				const time = [];
				for (var i = 0; i < e.length; i++) {
				  if (!obj[e[i].day]) {
					time.push(e[i]);
					obj[e[i].day] = true;
				  }
				}
				for(var i = 0;i<time.length;i++){
					const pay = 0 ;//统计每天的支出总费用
					const income = 0;
					const monthDay = time[i].month+'月'+time[i].day +'日';
					plus.sqlite.selectSql({
						name:'sgbill',
						sql:'select cost,type from open_bill where user_id ='+ user_id +' and day = '+ time[i].day +' and month = '+ time[i].month +' and year = '+time[i].year+' Order By id desc',
						success(a){
							var data = a;
							for(var j = 0;j<data.length;j++){
								if(data[j].type == 0){
									pay += parseFloat(data[j].cost);
								}else if(data[j].type == 1){
									income += parseFloat(data[j].cost);
								}
							}
							that.nowMonthPay += parseFloat(pay.toFixed(2));
							that.nowMonthPay = parseFloat(that.nowMonthPay.toFixed(2));
							that.nowMonthIncome +=  parseFloat(income.toFixed(2));
						    that.nowMonthIncome = parseFloat(that.nowMonthIncome.toFixed(2));
							resolve(a);
						},
						fail(e){
							uni.showToast({
								icon:'error',
								title:'查询失败',
								duration:1000
							})
							reject(e);
						}
					})
				}
				
			},
			fail(e){
				uni.showToast({
					icon:'error',
					title:'查询失败',
					duration:1000
				})
				reject(e);
			}
		})
	})
}
//上拉加载更多账单数据
export async function addSelectPay(user_id,that,categoryList){
	that.billDataLength = 0;
	return new Promise((resolve,reject) =>{
		plus.sqlite.selectSql({
			name:'openbill',
			sql:'select DISTINCT (day),month,year from open_bill where user_id ='+ user_id +' and month = '+ that.date + ' and year = '+ that.year + ' Order By day desc limit 10 offset '+that.pageNum+'',
			success(e){
				that.pageNum +=10;
				var time =e;
				that.loadingNumber = time.length;
				if(time[0].day == that.selectDay){
					time.shift();
				}
				that.selectDay = time[time.length-1].day;
				that.billDataLength = time.length;
				for(var i = 0;i<time.length;i++){
					const bill = [];//临时存储每天的费用
					const pay = 0 ;//统计每天的支出总费用
					const income = 0;
					const monthDay = time[i].month+'月'+time[i].day +'日';
					plus.sqlite.selectSql({
						name:'sgbill',
						sql:'select * from open_bill where user_id ='+ user_id +' and day = '+ time[i].day +' and month = '+ time[i].month +' and year = '+time[i].year+' Order By id desc',
						success(a){
							var data = a;
							for(var j = 0;j<data.length;j++){
								var category_id = data[j]['category_id'];
								data[j]['name'] = categoryList[category_id].name;
								data[j]['img'] = categoryList[category_id].imgUrl;
								if(data[j].type == 0){
									pay += data[j].cost;
								}else if(data[j].type == 1){
									income += data[j].cost;
								}
								that.nowMonthPay += pay;
								that.nowMonthIncome += income;
							}
							bill['time'] = monthDay;
							bill['bill'] = data;
							bill['pay'] = pay;
							bill['income'] = income;
							that.billData.push(bill);
							resolve(a);
						},
						fail(e){
							uni.showToast({
								icon:'error',
								title:'查询失败',
								duration:1000
							})
							reject(e);
						}
					})
				}
				that.billDataLength = that.billData.length;
			},
			fail(e){
				uni.showToast({
					icon:'error',
					title:'查询失败',
					duration:1000
				})
				reject(e);
			}
		})
	})
}
//查询单条数据
export async function getRowBill(id){
	return new Promise((resolve,reject) =>{
		plus.sqlite.selectSql({
			name:'openbill',
			sql:'select * from open_bill where id ="'+ id+ '"',
			success(data){
				resolve(data)
			},
			fail(e){
				reject(e);
			}
		})
	})
	
}
//查询最近7天数据
export async function getWeekData(){
	return new Promise((resolve,reject) => {
		plus.sqlite.selectSql({
			name:'openbill',                               
			sql:"select day,bill_time from open_bill where  datetime(bill_time) >= datetime('now','start of day','-7 day','weekday 1') AND datetime(bill_time) < datetime('now','start of day','+0 day','weekday 1')",
			success(data){
				resolve(data)
			},
			fail(e){
				reject(e);
			}
		})
	})
}
//查询本月数据
export async function getcurrentMonthData(data){
	return new Promise((resolve,reject) => {
		plus.sqlite.selectSql({
			name:'openbill',
			sql:"select * from open_bill where year = "+data.currentYear+" and month =" +data.currentMonth+"",
			success(data){
				resolve(data)
			},
			fail(e){
				reject(e);
			}
		})
	})
}

//删除单条账单的数据
export async function deleteRowBill(id){
	return new Promise((resolve,reject) =>{
		plus.sqlite.executeSql({
			name:'openbill',
			sql: 'delete from open_bill where id ='+id,
			success(){
				resolve(true);
			},
			fail(error){
				reject(error);
			}
		})
	})
}
//删除全部账单
export async function deleteAllBill(id){
	return new Promise((resolve,reject) =>{
		plus.sqlite.executeSql({
			name:'openbill',
			sql:'delete from open_bill ',
			success(){
				resolve(true)
			},
			fail(e){
				reject(e);
			}
		})
	})
}

//关闭数据库
export async function closeSqlite(name){
	return new Promise((resolve,reject) =>{
		plus.sqlite.closeDatabase({
			name:'openbill',
			success(){
				resolve(true);
			},
			fail(e){
				reject(e);
			}
		})
	})
}

//一次获取指定数据条数
//不想一次性把数据全拿过来就可以这样写
//id为表格名，desc代表倒序拿数据，正常是从第一条开始拿，倒序就从最后一条也是最新的一条数据开始拿
//limit 15 offset '+num+''，后面这是两个单引号，这句的意思是跳过多少条拿15条数据，num是动态值
//比如你刚开始给num设为0，那就从最后面的数据开始拿15条，你下次肯定不想再拿刚刚获取到的数据，所以可以让num为15，这样就能一步一步的拿完所有的数据
export async function pullSQL(id,num){
	//id为表名，num为跳过多少条数据
	//根据list来倒序拿数据，跳过num条拿取15条
	return new Promise((resolve,reject) =>{
		plus.sqlite.selectSql({
			name:'pop',
			sql:'select * from '+id+' order by list desc limit 15 offset '+num+'',
			success(e){
				resolve(e);
			},
			fail(e){
				reject(e);
			}
		})
	})
}

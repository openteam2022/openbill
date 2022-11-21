<script>
	import {isOpen,openSqlite,createBill,createTotalData,createNotes,isTable,addTotalData} from '@/common/sqlite.js'
	export default {
		onLaunch: function() {
			isOpen().then(()=>{
				console.log('数据库已打开');
			}).catch(()=>{
				openSqlite().then(()=>{
					console.log('创建成功')
					createBill().then(()=>{
						console.log("创建账单表成功")
					}).catch((error)=>{
						console.log("创建账单表失败")
					})
					createTotalData().then(()=>{
						console.log("创建总数据表成功")
						// addTotalData({
						// 	id: 1,
							
						// }).then(()=>{
							
						// })
					}).catch((error)=>{
						console.log("创建总数据表失败")
					})
					createNotes().then(()=>{
						console.log("创建账本表成功")
					}).catch((error)=>{
						console.log("创建账本表失败")
					})
					let tabel = ['open_bill','open_total_data'];
					for(let i = 0; i< tabel.length ; i ++){
						isTable(tabel[i]).then(()=>{
							this.$store.state.dbList.push(tabel[i]);
						})
					}
				}).catch(()=>{
					console.log("创建失败")
				})
			});
			uni.onTabBarMidButtonTap(()=>{
				uni.navigateTo({
					url:'/pages/add/index',
					animationType:'slide-in-bottom'
				})
			})
		},
		onShow: function() {
		},
		onHide: function() {
		}
	}
</script>

<style>
	/*每个页面公共css */
	:root{
		--app-bg-color: #EDEDED;
	}
</style>

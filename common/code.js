// 获取验证码
// that指当前this  this属性包括(mobile手机号 codeText 验证码文本 codeNumber 系统生成的验证码 seconds 验证码倒数时间 disabled 验证码倒数时间)
function getCode(that){
	that.codeNumber = 0;
	var num="";
	for(var i=0;i<6;i++)
	{
		num+=Math.floor(Math.random()*10);
	}
	that.codeNumber = num;
	setTimeout(()=>{
		that.codeNumber = 0;
	},300000)
	const timer = setInterval(() => {
		that.disabled = true;
		that.codeText = that.seconds + '秒';
		that.seconds--;
		if(that.seconds === 0){
			clearInterval(timer);
			that.codeText = '发送验证码';
			that.seconds = 120;
			that.disabled = false;
		}
		
	}, 1000);
	// 调用thinkphp验证码api
	uni.request({
		url:"https://api.topthink.com/sms/send",
		data:{
			appCode:"283ce0780c25d6b9e7ba1ba53f37d291",
			signId:579,
			templateId:2,
			phone:that.mobile,
			params:{
				'code':that.codeNumber
			}
		},
		method:'GET',
		success(e){
		},
		fail(e) {
		}
	})
}
export{
	getCode
}
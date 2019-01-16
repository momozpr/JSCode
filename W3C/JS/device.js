var NETCAPKI_DEVICETYPE_ANY=-1;
var NETCAPKI_DEVICEFLAG_CACHE_PIN_IN_PROCESS=0;
//在创建对象前先创建Utilities对象:主要用来加解密和签名验签
var utilobj = new ActiveXObject("NetcaPki.Utilities");
var device = new ActiveXObject("NetcaPki.Device");//创建一个Device对象
var deviceSet = createActiveXObject("NetcaPki.DeviceSet");    // 试试这样能不能创建一个 DeviceSet 对象

function getDeviceInfo(){
	deviceSet.GetAllDevice(NETCAPKI_DEVICETYPE_ANY,NETCAPKI_DEVICEFLAG_CACHE_PIN_IN_PROCESS);
	//获取所有的设备
	var count = deviceSet.Count;
	console.info("设备的数量："+count);
	if(count == 1){
		//设备索引从1开始
		device = deviceSet.Item(1);
		var label = device.Label;
		var serialNumber = device.SerialNumber;
		console.info("设备的标签："+label);
		console.info("设备的序列号："+serialNumber);
		// var result = device.ChangePwd("zola5554321","zola87765078");
		// console.info("修改密码的结果："+result);
		// var keyPair = device.GetKeyPair(1);//获取第一个密钥对
		var pwd = document.getElementById("password").value;
		alert(pwd);
		console.info("获取用户输入的密码："+pwd);
		var	pwdresult = device.VerifyPwd(pwd);
		console.info("用户输入的密码是否正确："+pwdresult);

	}
	else{
		alert("设备数量不为1");
	}
}


function getValue(){
	var username = document.getElementById("username").value;
	alert(username);
	//console.info("获取用户输入的密码："+pwd);
	var password = document.getElementById("password").value;
	alert(password);
	console.info("用户输入的密码是否正确："+pwdresult);
}
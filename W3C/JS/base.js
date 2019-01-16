function createActiveXObject(str, isAlert){
	 isAlert = (isAlert == undefined)?true:isAlert;
	 try {
		var	obj = new ActiveXObject(str);
		if(typeof(obj) == "object"){
			return obj;
		}else{
			if(isAlert == true){
				alert("创建" + str +"对象失败，请检查此对象控件是否已成功安装！");
			}
		}
	 }catch(e) {
	 	if(isAlert == true){
	 		alert("创建" + str +"对象失败，请配置IE相关的安全性！" + getErrMsg(e));
	 	}
	 }
}
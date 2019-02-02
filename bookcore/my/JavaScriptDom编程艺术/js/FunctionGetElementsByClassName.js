//为了兼容低版本的浏览器没有该方法适用于有多个类名
function getElementsByClassName(node,classname){
	if(node.getElementsByClassName){
		//使用现有方法
		return node.getElementsByClassName(classnames);
	}else{
		var results = new Array();
		var elems = node.getElementsByTagName("*");
		for(var i=0,len=elems.length;i<len;i++){
			if(elems[i].className === classname || elems[i].className.indexOf(classname + ' ')>=0
				||elems[i].className.indexOf(' '+classname+' ')>=0||elems[i].className.indexOf(' '+classname)>=0){
				results.push(elems[i]);
			}
		}
		return results;
	}
}
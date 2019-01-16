//签名验签

var utils = new createActiveXObject("NetcaPki.Utilities");
var certificate = new createActiveXObject("NetcaPki.Certificate");
var store = new createActiveXObject("NetcaPki.Store");

var NETCAPKI_CP_UTF8 = 65001;
var NETCAPKI_CERT_ENCODE_DER = 1;//证书编码
// var NETCAPKI_ALGORITHM_RSA_PKCS1_V1_5_ENC = 16;//使用SM2进行加密
var NETCAPKI_ALGORITHM_MD5WITHRSA = 1;//使用MD5WithRSA进行签名
var NETCAPKI_BASE64_ENCODE_NO_NL = 1;//base64编码不换行

var NETCAPKI_CERT_STORE_TYPE_CURRENT_USER = 0;//证书库的类型：当前用户的证书库
var NETCAPKI_CERT_STORE_NAME_MY = "my";//表示个人的证书库
var NETCAPKI_UIFLAG_ALWAYS_UI = 3;
var certType = "CertType='Signature'";


var data;//进行签名的内容
var enCode;//编码后的内容
var derCode;//解码后的内容
var signData;//签名后的数据，Byte数组
var cert;//证书编码
var signResult;//签名结果


function sign(){
	data = document.getElementById("tbs1");
	//对进行加密的内容先进行编码，从字符串变成utf-8编码的byte数组
	// data = "我是加密的内容";
	encode = utils.Encode(data,NETCAPKI_CP_UTF8);
	// alert("编码后的内容:"+encode);
	store.open(NETCAPKI_CERT_STORE_TYPE_CURRENT_USER,NETCAPKI_CERT_STORE_NAME_MY);
	certificate = store.findCertificate(certType,NETCAPKI_UIFLAG_ALWAYS_UI);//获取签名证书
	cert = certificate.Encode(NETCAPKI_CERT_ENCODE_DER);//获取证书编码
	signData = certificate.sign(NETCAPKI_ALGORITHM_MD5WITHRSA,encode);//签名

	

	//进行验签
	signResult = certificate.Verify(NETCAPKI_ALGORITHM_MD5WITHRSA,encode,signData);
	alert("验签结果的内容:"+signResult);
	store.close();
}
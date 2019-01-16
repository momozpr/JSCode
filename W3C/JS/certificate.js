//从证书库中查找证书
// 创建Store对象，调用Open方法打开证书库，用GetCertificateCount获取证书库里证书的个数，
// 然后，用GetCertificate逐个获取证书，选择出合适的证书（或者直接使用FindCertificate），
// 最后使用Close方法关闭证书库。
var certificate = createActiveXObject("NetcaPki.Certificate");//创建一个证书的对象
var certificate1 = createActiveXObject("NetcaPki.Certificate");//创建另一个证书的对象
var store = createActiveXObject("NetcaPki.Store");//创建一个证书库
var utils = createActiveXObject("NetcaPki.Utilities");//创建一个utilities对象进行加密

var NETCAPKI_CERT_STORE_TYPE_CURRENT_USER = 0;//证书库的类型：当前用户的证书库
var NETCAPKI_CERT_STORE_NAME_MY = "my";//表示个人的证书库
var NETCAPKI_UIFLAG_ALWAYS_UI = 3;

var certType = "Signature";//证书类型

var NETCAPKI_BASE64_ENCODE_NO_NL = 1;//编码不换行
var NETCAPKI_CERT_ENCODE_DER = 1;//der编码

var NETCAPKI_CP_UTF8 = 65001;//代码编码

var count;//证书的数量
var serialNumber;//证书的序列号
var result;//证书比对的结果
var cert;//证书编码
var enCert;//编码后的证书编码
var deCert;//解码后的内容
var cert1;//用base64编码的证书

function getCertificateInfo(){
	store.Open(NETCAPKI_CERT_STORE_TYPE_CURRENT_USER,NETCAPKI_CERT_STORE_NAME_MY);
	count = store.GetCertificateCount();
	alert("当前用户的个人证书库的证书数量:"+count);//获得当前两个证书
	certificate = store.GetCertificate(1);//获取第一个证书
	serialNumber = certificate.SerialNumber;

	// alert("第一个证书的序列号:"+serialNumber);
	// certificate.Display();
	//select选择证书，对两个证书进行比对
	// debugger;
	certificate1 = store.FindCertificate("CertType='Signature'",NETCAPKI_UIFLAG_ALWAYS_UI);
	// certificate1 = Select("CertType='Signature'");

	certificate1.Display();
	result = certificate.Equal(certificate1);
	alert("两个证书比对的结果："+result);

	//对证书进行加密和解密
	cert = certificate.Encode(NETCAPKI_CERT_ENCODE_DER);//获取证书的编码


	// enCert = utils.Base64Encode(cert,NETCAPKI_BASE64_ENCODE_NO_NL);
	// enCert = utils.Base64Encode("我是编码内容",NETCAPKI_BASE64_ENCODE_NO_NL);


	encert = utils.Encode("编码内容",NETCAPKI_CP_UTF8);
	alert("base64进行编码的内容："+enCert);//输出是undefined
	// deCert = utils.base64Decode(enCert);
	// alert("base64进行解码后的内容："+deCert);
	deCert = utils.Decode(encert,NETCAPKI_CP_UTF8);
	alert("base64进行解码的内容："+deCert);


	store.close();
	//获取当前的时间
	var now = new Date();
	// alert(now);
}
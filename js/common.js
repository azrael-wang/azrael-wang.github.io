// 公司93地址
// var baseUrl = "http://47.97.174.93:8088/zwy-front/";
// 中物院服务器地址
var baseUrl = "http://front.gscaep.ac.cn/zwy-front/";
// 临时地址
// var baseUrl = "http://192.168.0.100:8210/zwy-front/";
  /**
   * 多层面包屑封装
   * @desDoms 目标元素
   * @language 中文字段或英文切换对应NavObj的静态类名
   */
  function languageChange(desDoms, language,obj) {
    if(obj != undefined){
      $(desDoms).each(function (index, item) {  
        $(item).html(obj[language][index])
      })  
    }else {
      $(desDoms).each(function (index, item) {
        $(item).html(NavObj[language][index])
      })
    }
  }
  /**
   * @parme languageStatus 在每次进入页面时判断如果 语言为空设置默认值为1 中文
   */
  if (sessionStorage.getItem("CNtoEn")) {
    var languageStatus = sessionStorage.getItem("CNtoEn")
  } else {
    sessionStorage.setItem("CNtoEn", 1)
    history.go(0)
  }
  // 判断ie浏览器版本
  function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      if (fIEVersion == 7) {
        return 7;
      } else if (fIEVersion == 8) {
        return 8;
      } else if (fIEVersion == 9) {
        return 9;
      } else if (fIEVersion == 10) {
        return 10;
      } else {
        return 6; //IE版本<=7
      }
    } else if (isEdge) {
      return 'edge'; //edge
    } else if (isIE11) {
      return 11; //IE11  
    } else {
      return -1; //不是ie浏览器
    }
  }
   //登出操作
 function isLogin() {
  if(!sessionStorage.getItem("loginUserId")){
    sessionStorage.clear()
    location.href = "../subPage/login.html"
  }
 }
 //获取url中得参数
 function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
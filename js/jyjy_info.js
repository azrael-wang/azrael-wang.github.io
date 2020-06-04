
$(function(){

  var subUrl = "sys/content/educainfo"

    // 数据加载
    Init()
    //初始化
    function Init() {
      // var str = window.location.href
      // var index = str.indexOf("=")
      // var id = str.substr(index + 1 )
      var id = getQueryString("id")
      $.ajax({
        url:baseUrl + subUrl ,
        type:"POST",
        data:{
          id:id,
        },
        success:function(res){
          // console.log(res)
          createdDOm(res.educa)
        
        },
        
      })
    

      function createdDOm (data) {
        var content = data.content.replace(/&amp;nbsp;/g,"&nbsp;")
          var str = ""
          var createTime = data.createTime.split(" ")[0]
        str +='<div class="news_info_detail_title"><h5>'+ data.title +'</h5><span>'+ createTime +'</span></div>'
        str +='<div class="news_info_detail_content"><p>'+ (content === null? "暂无数据，请返回查看其他信息^_^":content) +'</p></div>'
            $(".news_info_detail").append($(str))
      }
    }
    
    
  
    
var jyInfoLanguage = {
	titleCn:["教育教研",],
	titleEn:["Education and research",],
	titleBreadCn:['当前位置：<a href="../index.html">首页</a>&bull;教育教研'],
	titleBreadEn:['Current location:<a href="../index.html">Home</a>&bull;Education and research'],

}
if(languageStatus == 1){
	//中文
	$("h2[name = jyInfoTitle]").text(jyInfoLanguage["titleCn"])
	$("span[name = jyInfoBread]").html(jyInfoLanguage["titleBreadCn"])
}else {
	//英文
	$("h2[name = jyInfoTitle]").text(jyInfoLanguage["titleEn"])
	$("span[name = jyInfoBread]").html(jyInfoLanguage["titleBreadEn"])
} 
  
    
  
  
  
  
  
  
  })

$(function(){

var subUrl = "sys/content/newsinfo"


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
        // console.log("详情信息")
        // console.log(res)
        createdDOm(res.news)
      
      },
      
    })
  
    

    function createdDOm (data) {
      var content = data.content.replace(/&amp;nbsp;/g,"&nbsp;")
      var createTime = data.createTime.split(" ")[0]
      var str = ""  
      str +='<div class="news_info_detail_title"><h5>'+ data.title +'</h5><span>'+ createTime +' </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>浏览量:  '+ data.browseNum +'<span>'
      str +='</div><div class="news_info_detail_content"><p>'+ content +'</p></div>'
          $(".news_info_detail").html($(str))
    }
  }
  var languageStatus = sessionStorage.getItem("CNtoEn")
  

  var newsMoreLanguage = {
    titleCn:["新闻",],
    titleEn:["News",],
    titleBreadCn:['当前位置：<a href="../index.html">首页</a>&bull;新闻'],
    titleBreadEn:['Current location:<a href="../index.html">Home</a>&bull;News'],
  
  }
  if(languageStatus == 1){
    //中文
    $("h2[name = newsInfoTitle]").text(newsMoreLanguage["titleCn"])
    $("span[name = newsInfoBread]").html(newsMoreLanguage["titleBreadCn"])
  }else {
    //英文
    $("h2[name = newsInfoTitle]").text(newsMoreLanguage["titleEn"])
    $("span[name = newsInfoBread]").html(newsMoreLanguage["titleBreadEn"])
  }  

  






})
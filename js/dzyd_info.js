
$(function(){

var subUrl = "sys/studyactivity/stuContent"


  // 数据加载
  Init()

  //初始化
  function Init() {
    // var str = window.location.href
    // var index = str.indexOf("=")
    // var id = str.substr(index + 1 )
    var id = getQueryString("id")
    // console.log(id)
    $.ajax({
      url:baseUrl + subUrl ,
      type:"POST",
      data:{
        id:id,
      },
      success:function(res){
        // console.log(res)
        createdDOm(res.page[0])
      
      },
      err:function(err){
        // console.log(err)
      }
    })
  
    

    function createdDOm (data) {
      var content = data.content.replace(/&amp;nbsp;/g,"&nbsp;")
      var createTime = data.createTime.split(" ")[0]
      // console.log(content)

        var str = ""
      str +='<div class="news_info_detail_title"><h5>'+ data.title +'</h5><span>'+ createTime +'</span>'
str +='</div><div class="news_info_detail_content"><p>'+ content +'</p></div>'
        
          $(".news_info_detail").append($(str))

    }
  }

  
  var newsMoreLanguage = {
    titleCn:["党建园地",],
    titleEn:["Party building ground",],
    titleBreadCn:['当前位置：<a href="../index.html">首页</a>&bull;党建园地'],
    titleBreadEn:['Current location:<a href="../index.html">Home</a>&bull;Party building ground'],
  
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
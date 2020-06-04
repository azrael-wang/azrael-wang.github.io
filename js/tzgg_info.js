
$(function(){

  var subUrl = "sys/notice/noticeinfo"
  
    // 数据加载
    Init()
    //初始化
    function Init() {
      var id = getQueryString("id")
      $.ajax({
        url:baseUrl + subUrl ,
        type:"POST",
        data:{
          id:id
        },
        success:function(res){
          
          console.log(res)
          createdDOm(res.notice)
        
        },
        
      })
      function createdDOm (data) {
        // // console.log(data.title)
        var content = data.content.replace(/&amp;nbsp;/g,"&nbsp;")
          var str = ""
          var createTime = data.createTime.split(" ")[0]
        str +='<div class="news_info_detail_title"><h5>'+ (data.title === null ?  "暂无数据" :data.title)  +'</h5>'
str +='<span>'+ createTime +'</span></div>'
str +='<div class="news_info_detail_content"><p>'+ (content === null? "暂无数据，请返回查看其他信息^_^":content) +'</p></div>'
            $(".news_info_detail").append($(str))
      }
    }
    
    
  
    var languageStatus = sessionStorage.getItem("CNtoEn")
    var tzggInfoLanguage = {
      titleCn:["通知公告",],
      titleEn:["announcement",],
      titleBreadCn:['当前位置：<a href="../index.html">首页</a>&bull;通知公告'],
      titleBreadEn:['Current location:<a href="../index.html">Home</a>&bull;announcement'],
    
    }
  
    if(languageStatus == 1){
      //中文
      $("h2[name = tzggInfoTitle]").text(tzggInfoLanguage["titleCn"])
      $("span[name = tzggInfoBread]").html(tzggInfoLanguage["titleBreadCn"])
    }else {
      //英文
      $("h2[name = tzggInfoTitle]").text(tzggInfoLanguage["titleEn"])
      $("span[name = tzggInfoBread]").html(tzggInfoLanguage["titleBreadEn"])
    }
  
    
  
  
  
  
  
  
  })
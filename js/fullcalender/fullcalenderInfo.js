
$(function(){

  var subUrl = "sys/learning/learning"
  
  
    // 数据加载
    Init()
  
    //初始化
    function Init() {
      // var str = window.location.href
      // var index = str.indexOf("=")
      // var id = str.substr(index + 1 )
      var id = getQueryString("id")
      // console.log("iddidid")
      // console.log(id)
      $.ajax({
        url:baseUrl + subUrl ,
        type:"POST",
        data:{
          id:id,
        },
        success:function(res){
          // console.log(res)
          if(res.code === 0){
            createdDOm(res.learning)
          }
        
        },
        
      })
    
      
  
      function createdDOm (data) {
        var content = data.content.replace(/&amp;nbsp;/g,"&nbsp;")
        // console.log(content)
  
          var str = ""
    
        str +='<div class="news_info_detail_title"><h5>'+ data.name +'</h5><span>'+ data.createTime +'</span>'
         str +='</div><div class="news_info_detail_content"><p>'+ content +'</p></div>'
          
            $(".news_info_detail").append($(str))
  
      }
    }
    var languageStatus = sessionStorage.getItem("CNtoEn")
    
  
    var newsMoreLanguage = {
      titleCn:["日历",],
      titleEn:["Calender",],
      titleBreadCn:['当前位置：<a href="../index.html">首页</a">&bull;<a href="../subPage/fullcalender.html">日历</a>&bull;日历详情'],
      titleBreadEn:['Current location:<a href="../index.html">Home</a>&bull;<a href="../subPage/fullcalender.html">Calender</a>&bull;Calender Detail'],
    
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
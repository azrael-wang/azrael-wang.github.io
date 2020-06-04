
$(function(){
 
  var subUrl = "sys/content/schlifeinfo"

    // 数据加载
    Init()
    //初始化
    function Init() {
      // var str = window.location.href
      // var index = str.indexOf("=")
      // var id = str.substr(index + 1 )
      var id = getQueryString("id")
      // console.log("id")
      // console.log(id)
      $.ajax({
        url:baseUrl + subUrl ,
        type:"POST",
        data:{
          id:id,
        },
        success:function(res){
          // console.log("res")
          // console.log(res)
          if(res.code == 0 ){
            createdDOm(res.schlife)
          }
          
        
        },
        err:function(err){}
      })
    

      function createdDOm (data) {
      
        
        // console.log("content")
        // console.log(content)
          var str = ""
            if(data != null){
              var content = ""
              if(data.content != null){
                content = data.content.replace(/&amp;nbsp;/g,"&#10;")
                var createTime = data.createTime.split(" ")[0]
              }
        
              str +='<div class="news_info_detail_title"><h5>'+ data.title +'</h5><span>'+ createTime +'</span><div class="news_info_detail_content"><p>'+ (content === null? "暂无数据，请返回查看其他信息^_^":content) +'</p></div>'
            }
            $(".news_info_detail").append($(str))
      }
    }
    
    if(sessionStorage.getItem("CNtoEn") == 1){
      
      $("h2[name = rczmTitle]").text("人才招募")
      $("span[name = rczmBread]").html('当前位置：<a href="../index.html">首页</a>&bull;<a href="./infro_sverver.html?index=1">人才招募</a>')
    }else {
      
      $("h2[name = rczmTitle]").text("Recruiting")
      $("span[name = rczmBread]").html('Current location：<a href="../index.html">Home</a>&bull;<a href="./infro_sverver.html?index=1">Recruitment</a>')
    }
 
  
     
  
    
  
  
  
  
  
  
  })
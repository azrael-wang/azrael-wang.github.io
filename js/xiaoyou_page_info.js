
$(function(){

  var subUrl = "sys/alumnus/getinfo"

    // 数据加载
    Init()
    //初始化
    function Init() {
      var str = window.location.href
      var index = str.indexOf("=")
      var id = str.substr(index + 1 )
      $.ajax({
        url:baseUrl + subUrl ,
        type:"POST",
        data:{
          id:id
        },
        success:function(res){
          // console.log("sss")
          // console.log(res)
          var data = res.content
          createdDOm(data)
        
        },
        
      })
      function createdDOm (data) {
        var content = data.content.replace(/&amp;nbsp;/g,"&#10;")
        let createTime = data.createTime.split(" ")[0]
          var str = ""
     
       
        str +='<div class="news_info_detail_title"><h5>'+ (data.title === null ?  "暂无数据" :data.title)  +'</h5>'
str +='<span>'+ createTime +'</span></div><div class="news_info_detail_content">'
str +='<p>'+ (content === null? "暂无数据，请返回查看其他信息^_^":content) +'</p></div>'
            $(".news_info_detail").append($(str))
      }
    }
    
    var xyInfoLanguage = {
      titleCn:['<h2>来访人员</h2><span>当前位置：<a href="../index.html">首页</a>&bull;<a href="../subPage/xiaoyou.html">来访人员</a></span>'
              ],
      titleEn:['<h2>Alumni</h2><span>Current position:<a href="../index.html">Home</a>&bull;<a href="../subPage/xiaoyou.html">Alumni</a></span>'
            ]
    }
    if(sessionStorage.getItem("CNtoEn") == 1){
        $("div[name = xyInfoTitle]").html(xyInfoLanguage["titleCn"])


    }else {


      $("div[name = xyInfoTitle]").html(xyInfoLanguage["titleEn"])



    }
     
  
    
  
  
  
  
  
  
  })

$(function(){

  var subUrl = "sys/inst/historyinfo"

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
          id:id
        },
        success:function(res){
          // console.log(res.content)
          createdDOm(res.content)
        
        },
        
      })
    
      function createdDOm (data) {

        var content = data.content.replace(/&amp;nbsp;/g,"&#10;")
          var str = ""
          var createTime = data.createTime.split(" ")[0]
        str +='<div class="news_info_detail_title"><h5>'+ data.title +'</h5><span>'+ createTime +'</span>'
str +='</div><div class="news_info_detail_content"><p>'+ (content === null? "暂无数据，请返回查看其他信息^_^":content) +'</p></div>'
            $(".news_info_detail").append($(str))
      }
    }
    if(sessionStorage.getItem("CNtoEn") == 1){
      $("h2[name = lsygTitle]").text("历史沿革")
      $("span[name = lsygBread]").html('当前位置：<a href="../index.html">首页</a>&bull;<a href="./menu_lsyg.html?index=0">历史沿革</a>')
    }else {
      $("h2[name = lsygTitle]").text("TwoBombs evolution")
      $("span[name = lsygBread]").html('Current location：<a href="../index.html">Home</a>&bull;<a href="./menu_lsyg.html?index=0">TwoBombs evolution</a>')
    }
  

  })
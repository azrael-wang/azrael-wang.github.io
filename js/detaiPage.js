
$(function(){

  var str = window.location.href
  var index = str.indexOf("?")
  var dataUrl = str.substr(index +1 ).split("&")
  var dataArr = new Array()
      dataUrl.forEach(function(item,index){
       var subIndex = item.indexOf("=")+1
       dataArr.push(item.substr(subIndex))

 })
 var parentPath = window.location.search
 var parentPathIndex = parentPath.lastIndexOf("&")
 var returnPath = "./" + parentPath.substr(parentPathIndex + 1).split("=")[1] + "="+ parentPath.substr(parentPathIndex + 1).split("=")[2]
 if(returnPath.indexOf("html") != -1){
  $('a[name = more]').attr("href",returnPath)
 }
 
 // console.log(parentPath)
 // console.log(parentPathIndex)
 // console.log(returnPath)
// console.log("详情id")
// console.log(dataArr)
  load()
  function load(id){
    $.ajax({
      url:baseUrl +'sys/research/getPersonnelDetail',
      data:{
        personId:Number(dataArr[0]),
        standby:1
        
      },
      type:"POST",
      success:function(res){
        console.log("人员")
        console.log(res)
        var Ptitle = res.personnel
        var str = ""
        //详情头部渲染
        if(Ptitle !== null){
          var sex = ""
          if(Ptitle.sex !== null) {
           sex =  Ptitle.sex == 1?'男':'女'
          }
          if(Ptitle.perProfile) {
            var empty = Ptitle.perProfile
            var profile = "个人简介"
          } else {
            var empty = ""
            var profile = ""
          }
          if(!Ptitle.telphone) {
            var tel = ""
          } else {
            var tel = Ptitle.telphone
          }
          //头部渲染
          str +='<div class="detailPage_titile"><h2>'+ Ptitle.roleName +'个人主页</h2><span name = "lsyg_detailInfo"></span></div>'
          str +='<div class="detailPage_Pi clearfix"><div class="detailPage_pi_img fl"><img src="'+ Ptitle.perImg +'" alt=""></div>'
          str +='<div class="detaiPage_pi_info clearfix"><div class="fl" style="width:40%;"><h5>'+ Ptitle.roleName +'</h5><span>性别:</span><span id="detaiPage_pi_info_sex">'+ sex +'</span><br />'
          str +='<span>职称:</span><span id="detaiPage_pi_info_title">'+ Ptitle.perPost +'</span><br />'
          str +='<span>邮箱:</span><span id="detaiPage_pi_info_mail">'+ Ptitle.email +'</span><br />'
          str +='<span class="detail_pi_info_bottomspan"'
          str +='id="detaiPage_pi_info_address">通信地址:'+ Ptitle.addr +'</span><br /><span>电话:</span><span id="detaiPage_pi_info_mail">'+ tel +'</span></div><div class="fl" style="width:50%;height:100%;font-size:18px;"><p style="margin-bottom:24px;">'+ profile +'</p><p style="color:#666">'+ empty+'</p></div></div></div>'
          //<a href="'+ Ptitle.website +'">课题组网址</a>
        }
        var PDetail = res.personnelDetaillist
        if(PDetail.length !== 0){
          str +='<div class="detailPage_Pi_content clearfix">'
          PDetail.forEach(function(item,index){
              var content = item.content.split('|')

                str +='<div id=contentId'+ index +' class="detailPage_Pi_content_item"><h2>'+ item.title +'</h2>'
                if(content.length >0){
                  content.forEach(function(item,index){
                      str +='<p>'+ item +'</p>'
                  })
                }
                str +='</div>'
                
          })


        }


        $("#detailPageContent").html($(str))
        $("#contentId0").height($("#contentId1").height())
        
      },
      err:function(err){
        // console.log("错误信息")
        // console.log(err)
      }
    })

  }
  if(sessionStorage.getItem("CNtoEn") == 1){
    
    $("span[name = lsyg_detailInfo]").html('当前位置：<a href="../index.html">首页</a>&bull;<a href="./menu_lsyg.html?index=3">组织架构</a>')
  }else {
    
    $("span[name = lsyg_detailInfo]").html('Current location：<a href="../index.html">Home</a>&bull;<a href="./menu_lsyg.html?index=3">Organization</a>')
  }

})
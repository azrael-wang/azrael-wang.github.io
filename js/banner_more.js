$(function () {


 
  var newsMoreLanguage = {
    titleCn: ["活动详情", ],
    titleEn: ["activity", ],
    titleBreadCn: ['当前位置：<a href="../index.html">首页</a>&bull;活动详情'],
    titleBreadEn: ['Current location:<a href="../index.html">Home</a>&bull;activity'],

  }
  if (languageStatus == 1) {
    //中文
    $("h2[name = newsInfoTitle]").text(newsMoreLanguage["titleCn"])
    $("span[name = newsInfoBread]").html(newsMoreLanguage["titleBreadCn"])
  } else {
    //英文
    $("h2[name = newsInfoTitle]").text(newsMoreLanguage["titleEn"])
    $("span[name = newsInfoBread]").html(newsMoreLanguage["titleBreadEn"])
    $(".SubmissionInformation").html("SubmissionInformation")
  }
  //请求年份
  /** 
   * @str 字符串拼接
   * @desDom 父级dom元素
   * @url 请求地址
   */
  loadPage()
  function loadPage() {
    var url = "sys/banner/year"
    $.ajax({
      url: baseUrl + url,
      type: "POST",
      async: false,
      success: function (res) {
        // console.log(res)
        if (res.code == 0) {
          var data = res.year
          var str = ""
          var desDom = $(".layui-tab-title")
          data.forEach(function (item, index) {
            if (index == 0) {
              str += "<li class='layui-this' onclick=geDetail(" + item + ")>" + item + "</li>"
            } else {
              str += "<li onclick=geDetail(" + item + ")>" + item + "</li>"
            }

          })
          desDom.prepend(str)
          $('.layui-tab-title>li').eq(0).trigger("click")
        }
      },
      err: function (res) {
        // console.log(res)
      }
    })

  }

})
//请求逐个月份信息
/** 
 * @Pyear 年份
 * @everMonth 月份信息
 */
function geDetail(Pyear) {
  var url = "sys/banner/mhlist"
  $.ajax({
    url: baseUrl + url,
    data:{
      createTime:Pyear,
      language:languageStatus,
    },
    type: "POST",
    success: function (res) {
      // console.log(res)
      if (res.code == 0) {
        var everMonth = {}
        var desDom = $(".layui-tab-content")
        
        res.list.forEach(function(item,index){
            if(item.createTime){
              var year = item.createTime.split(" ")[0]
              var arr = year.split("-")
              var handleYear = ""
               arr.forEach(function(item,index){
                 if(index == 0){
                   handleYear += item +"年"
                 }else if(arr.length -1 == index){
                  // handleYear += item +"日"
                 }else {
                  handleYear += item +"月"
                 }
               })
              var month = Number(year.split("-")[1]).toString() + "月份"
              // console.log(month)
              if(!everMonth[month]){
                everMonth[month]=[]
                everMonth[month].push({
                  "content":item.content,
                  "id":item.id,
                  "author":item.author,
                  "createTime":handleYear,
                  "name":item.name,
                  "details":item.details,
                  "currTime":item.createTime,
                })
              } else {
                everMonth[month].push({
                  "content":item.content,
                  "id":item.id,
                  "author":item.author,
                  "createTime":handleYear,
                  "name":item.name,
                  "details":item.details,
                  "currTime":item.createTime,
                })
              }
              
            }

        })  
           var str = '<div class="contentItem clearfix">'
        for (key in everMonth){
          everMonth[key].forEach(function(item,index){
            var createTime = ""
            if(item.createTime) {
              createTime = item.currTime.split(" ")[0]
            }
            if(index == 0 && everMonth[key].length == 1){
              str +='<div data-id='+ item.id+ ' class="TitleBox clearfix"><img src='+ item.content +' alt=""><h2>'+ item.createTime +'</h2></div>'
              str +='<div class="ContentBox"><ul class="clearfix">'
              str +='<li><a href="'+ item.content +'"><img src="'+ item.content +'" alt=""><span>'+ item.name +'</span></a><p style="height:40px;line-height:40px;"><span>'+ createTime +'</span>&nbsp;&nbsp;<span>作者:'+ item.author  +'</span> </p></li>'
              str +="</ul></div>"
            }else if(index == 0){
              str +='<div data-id='+ item.id+ ' class="TitleBox clearfix"><img src='+ item.content +' alt=""><h2>'+ item.createTime +'</h2></div>'
              str +='<div class="ContentBox"><ul class="clearfix">'
              str +='<li><a href="'+ item.content +'"><img src="'+ item.content +'" alt=""><span>'+ item.name +'</span></a><p style="height:40px;line-height:40px;"><span>'+ createTime +'</span>&nbsp;&nbsp;<span>作者:'+ item.author  +'</span> </p></li>'
            }else if (everMonth[key].length - 1  == index){
              str +='<li><a href="'+ item.content +'"><img src="'+ item.content +'" alt=""><span>'+ item.name +'</span></a><p style="height:40px;line-height:40px;"><span>'+ createTime +'</span>&nbsp;&nbsp;<span>作者:'+ item.author  +'</span> </p></li>'
              str +="</ul></div>"
            }
            else {
              str +='<li><a href="'+ item.content +'"><img src="'+ item.content +'" alt=""><span>'+ item.name +'</span></a><p style="height:40px;line-height:40px;"><span>'+ createTime +'</span>&nbsp;&nbsp;<span>作者:'+ item.author  +'</span> </p></li>'
            }

          })
          

        }
        str +='</div></div>'
        desDom.empty()
        desDom.html(str)
        // console.log(everMonth)
      
        
      }
    },
    err: function (res) {
      // console.log(res)
    }
  })
}
function tougaoxinxi() {
  var desDom = $(".layui-tab-content")
  var str = '<div class="detailContent clearfix"><div class="column_5"><article class="mainContent"><div class="introTit clearfix">'
      str += '<div class="introTitImg" ></div><h2>欢迎投稿</h2></div><section class="article_cn">'
      str += '<p>中物院研究生院官网的首页主题图及各栏目图由研究生院党政办维护，各处办教职工、本单位科研人员、学生、来访人员及校外人士等重大活动有投稿需求的，可联系党政办吴煜投稿。作品被采纳使用的，我们将在网站上展示作者姓名及作品标题，欢迎大家踊跃投稿。</p>'
      str += '<p><font color="#8c0000">投稿信箱：</font><a href="mailto:photo@pku.edu.cn">wuy@gscaep.ac.cn</a></p><p><font color="#8c0000">联系电话：</font>010-56989389</p>'
      str += '<p><font color="#8c0000">稿件要求：</font></p><p> 1、可以是摄影作品，也可以是以摄影作品为基础的设计作品或纯设计作品；可以展示活动现场情况，也可以在活动前介绍和推介该活动。 </p>'
      str += '<p> 2、研究生院官网首页主题图尺寸为1500*500（宽*高）像素（px），摄影作品主体内容应在3:1范围内，设计作品应直接按照上述尺寸设计，画质清晰，美观大气。</p>'
      str += '<p> 3、稿件内容包括但不限于：（1）研究生院或中物院重大新闻和科研成果，师生学术和文体活动；（2）重大节庆；（3）校园风物；（4）其他有主题的人物、事件和景物策划。</p>'
      str += '<p><font color="#8c0000">投稿邮件内容格式：</font> </p><p>1、姓名：</p><p>2、单位：</p><p>3、身份：学生、教师、来访人员、校外</p>'
      str +='<p>4、Email：</p><p>5、联系电话：</p><p>6、标题：</p><p>7、创意：</p><p>8、专业组织：xxx社团、xxx协会、xxx学会等</p><p>9、职称职务：</p><p>10、其他说明：</p>'
      str +='</section></article></div><div class="column_1"><div class="rightBg" style="background-image: url(&quot;../../img/img_about27.jpg&quot;);"></div></div></div>'

  desDom.empty()
  desDom.prepend(str)

}
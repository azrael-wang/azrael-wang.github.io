$(function () {

  var subUrl = "sys/learning/learning"

  // 数据加载
  Init()
  //初始化
  function Init() {
    // var str = window.location.href
    // var index = str.indexOf("=")
    // var id = str.substr(index + 1)
    var id = getQueryString("id")
    $.ajax({
      url: baseUrl + subUrl,
      type: "POST",
      data: {
        id: id,
      },
      success: function (res) {
        // console.log("sss")
        // console.log(res)
        if (res.code == 0 && res.learning != null) {
          createdDOm(res.learning)
        }

      },
      err: function (err) {
        // console.log(err)
      }
    })

    function createdDOm(data) {
      var content = data.content.replace(/&amp;nbsp;/g, "&nbsp;")
      var createTime = data.createTime.split(" ")[0]
      var str = ""

      str += '<div class="news_info_detail_title"><h5>' + data.name + '</h5><span>' + createTime + '</span></div>'
      str += '<div class="news_info_detail_content"><p>' + (content === null ? "暂无数据，请返回查看其他信息^_^" : content) + '</p></div>'
      $(".news_info_detail").append($(str))
    }
  }



  var xsMoreLanguage = {
    titleCn: ["学术讲座", ],
    titleEn: ["academic talk", ],
    titleBreadCn: ['当前位置：<a href="../index.html">首页</a>&bull;学术讲座'],
    titleBreadEn: ['Current location:<a href="../index.html">Home</a>&bull;academic talk'],

  }
  if (languageStatus == 1) {
    //中文
    $("h2[name = xsInfoTitle]").text(xsMoreLanguage["titleCn"])
    $("span[name = xsInfoBread]").html(xsMoreLanguage["titleBreadCn"])
  } else {
    //英文
    $("h2[name = xsInfoTitle]").text(xsMoreLanguage["titleEn"])
    $("span[name = xsInfoBread]").html(xsMoreLanguage["titleBreadEn"])
  }








})
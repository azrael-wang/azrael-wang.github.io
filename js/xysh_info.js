$(function () {

  var subUrl = "sys/content/schlifeinfo"

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
        id:id,
      },
      success: function (res) {
        // console.log(res)
        createdDOm(res.schlife)

      },
      err: function (err) {
        // console.log(err)
      }
    })


    function createdDOm(data) {
      var content = data.content.replace(/&amp;nbsp;/g, "&nbsp;")
      var createTime = data.createTime.split(" ")[0]
      var str = ""

      str += '<div class="news_info_detail_title"><h5>' + data.title + '</h5><span>' + createTime + '</span></div>'
      str += '<div class="news_info_detail_content"><p>' + (content === null ? "暂无数据，请返回查看其他信息^_^" : content) + '</p></div>'
      $(".news_info_detail").append($(str))
    }
  }

  var languageStatus = sessionStorage.getItem("CNtoEn")
  var xyshInfoLanguage = {
    titleCn: ["学生活动", ],
    titleEn: ["Student Activities", ],
    titleBreadCn: ['当前位置：<a href="../index.html">首页</a>&bull;学生活动'],
    titleBreadEn: ['Current location:<a href="../index.html">Home</a>&bull;Student Activities'],

  }

  if (languageStatus == 1) {
    //中文
    $("h2[name = syshInfoTitle]").text(xyshInfoLanguage["titleCn"])
    $("span[name = syshInfoBread]").html(xyshInfoLanguage["titleBreadCn"])
  } else {
    //英文
    $("h2[name = syshInfoTitle]").text(xyshInfoLanguage["titleEn"])
    $("span[name = syshInfoBread]").html(xyshInfoLanguage["titleBreadEn"])
  }


  // console.log($("span[name = syshInfoBread]"))







})
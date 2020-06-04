/**
 * Created by zzg on 2017/4/26.
 * listCount = datas.length   currentPage =当前页 options配置对象
 */

var page = {
  "pageId": "",
  "data": null,
  "maxshowpageitem": 5, //最多显示的页码个数
  "pagelistcount": 6, //每一页显示的内容条数
  "init": function (listCount, currentPage, options) {
    //把options定义的参数赋值给page对象
    this.data = options.data,
      this.pageId = options.id,
      this.maxshowpageitem = options.maxshowpageitem, //最多显示的页码个数
      this.pagelistcount = options.pagelistcount //每一页显示的内容条数
    page.initPage(listCount, currentPage);
  },
  /**
   * 初始化数据处理
   * @param listCount 列表总量
   * @param currentPage 当前页
   */
  "initPage": function (listCount, currentPage) {
    //最多页码
    var maxshowpageitem = page.maxshowpageitem;
    //最多页码有值 如果这个值不为空 在赋值回去
    if (maxshowpageitem != null && maxshowpageitem > 0 && maxshowpageitem != "") {
      page.maxshowpageitem = maxshowpageitem;
    }
    //和以上同理
    var pagelistcount = page.pagelistcount;
    if (pagelistcount != null && pagelistcount > 0 && pagelistcount != "") {
      page.pagelistcount = pagelistcount;
    }
    page.pagelistcount = pagelistcount;
    if (listCount < 0) {
      listCount = 0;
    }
    if (currentPage <= 0) {
      currentPage = 1;
    }
    page.setPageListCount(listCount, currentPage);
  },
  /**
   * 初始化分页界面
   * @param listCount 列表总量
   */
  "initWithUl": function (listCount, currentPage) {
    var pageCount = 1;
    //计算显示的总页码
    if (listCount >= 0) {
      var pageCount = listCount % page.pagelistcount > 0 ? parseInt(listCount / page.pagelistcount) + 1 : parseInt(listCount / page.pagelistcount);
    }
    //绘制显示的总页码和当前页
    var appendStr = page.getPageListModel(pageCount, currentPage);
    //渲染到页面中
    $("#" + page.pageId).html(appendStr);
  },
  /**
   * 设置列表总量和当前页码
   * @param listCount 列表总量
   * @param currentPage 当前页码
   * @param page.pagelistcount 每页显示的内容
   */
  "setPageListCount": function (listCount, currentPage) {
    listCount = parseInt(listCount);
    currentPage = parseInt(currentPage);
    page.initWithUl(listCount, currentPage); //绘制分页样式
    page.initPageEvent(listCount); //分页按钮点击事件
    page.viewPage(currentPage, listCount, page.pagelistcount, page.data)
    //      fun(currentPage);
  },
  //页面显示功能
  "viewPage": function (currentPage, listCount, pagelistcount, data) {
    var NUM = listCount % pagelistcount == 0 ? listCount / pagelistcount : parseInt(listCount / pagelistcount) + 1;
    if (currentPage == NUM) {
      var result = data.slice((currentPage - 1) * pagelistcount, data.length);
    } else {
      var result = data.slice((currentPage - 1) * pagelistcount, (currentPage - 1) * pagelistcount + pagelistcount);
    }
    // console.log("callback")
    // console.log(options)
    options.callBack(result);
  },
  "initPageEvent": function (listCount) {
    $("#" + page.pageId + ">li[class='pageItem']").on("click", function () {
      page.setPageListCount(listCount, $(this).attr("page-data"), page.fun);
    });
  },
  "getPageListModel": function (pageCount, currentPage) {
    if (sessionStorage.getItem("CNtoEn") == 1) {
      var prev = "上一页"
      var next = "下一页"
    } else {
      var prev = "Prev"
      var next = "Next"
    }
    var prePage = currentPage - 1;
    var nextPage = currentPage + 1;
    var prePageClass = "pageItem";
    var nextPageClass = "pageItem";
    if (prePage <= 0) {
      prePageClass = "pageItemDisable";
    }
    if (nextPage > pageCount) {
      nextPageClass = "pageItemDisable";
    }
    var appendStr = "";
    appendStr += "<li class='" + prePageClass + "' page-data='" + prePage + "' page-rel='prepage'>" + prev + "</li>";
    var miniPageNumber = 1;
    if (currentPage - parseInt(page.maxshowpageitem / 2) > 0 && currentPage + parseInt(page.maxshowpageitem / 2) <= pageCount) {
      miniPageNumber = currentPage - parseInt(page.maxshowpageitem / 2);
    } else if (currentPage - parseInt(page.maxshowpageitem / 2) > 0 && currentPage + parseInt(page.maxshowpageitem / 2) > pageCount) {
      miniPageNumber = pageCount - page.maxshowpageitem + 1;
      if (miniPageNumber <= 0) {
        miniPageNumber = 1;
      }
    }
    var showPageNum = parseInt(page.maxshowpageitem);
    if (pageCount < showPageNum) {
      showPageNum = pageCount;
    }
    for (var i = 0; i < showPageNum; i++) {
      var pageNumber = miniPageNumber++;
      var itemPageClass = "pageItem";
      if (pageNumber == currentPage) {
        itemPageClass = "pageItemActive";
      }


      appendStr += "<li class='" + itemPageClass + "' page-data='" + pageNumber + "' page-rel='itempage'>" + pageNumber + "</li>";
    }
    appendStr += "<li class='" + nextPageClass + "' page-data='" + nextPage + "' page-rel='nextpage'>" + next + "</li>";
    return appendStr;

  }
}

//定义分页参数对象学术讲座
let options = {
  "id": "page", //显示页码的元素
  "data": null, //显示数据
  "maxshowpageitem": 3, //最多显示的页码个数
  "pagelistcount": 5, //每页显示数据个数
  "callBack": function (result) {
    var cHtml = "";
    // console.log("分页配置")
    // console.log(result)
    for (var i = 0; i < result.length; i++) {
      if (result[i].date != null) {
        var Year = result[i].date.split(" ")[0]
      } else {
        var Year = result[i].createTime.split(" ")[0]
      }
      var content = result[i].title.replace(/&amp;nbsp;/g, "&#10;")
      content = content.substr(0, 30).replace(/&amp;nbsp;/g, "&#10;")
      cHtml += '<li><a href="../subPage/subTZinfo.html?id=' + result[i].id + '"><p class="date"> ' + Year + '</p><p class="itemTitle">' + content + '</p></a></li>'
      //处理数据
    }
    $(".advList").html(cHtml); //将数据增加到页面中
  }
};
//banner导航栏渲染
var languageStatus = sessionStorage.getItem("CNtoEn")
// 进入页面调用一次
// noticetype 区分学生教师
// noticecate 分类

//全部
function totalMessage() {
  //验证是否登录
  if (sessionStorage.getItem("loginUserId")) {
    $.ajax({
      type: "POST",
      url: baseUrl + "sys/noticest/noticestlist/list",
      data: {
        language: sessionStorage.getItem("CNtoEn"),
        'page': 1,
        'limit': 100,
        noticetype: 1,
        id: sessionStorage.getItem("loginUserId"),
      },
      success: function (res) {
        // console.log("通知公告全部list")
        // console.log(res)
        if (res.code === 0) {
          var maxLen = res.page.totalCount
          options.data = res.page.list
          page.init(maxLen, 1, options);
          var imgStr = ""
          var result = res.page.list[0]
          var content = result.title.replace(/&amp;nbsp;/g, "&#10;")
          content = content.substr(0, 30).replace(/&amp;nbsp;/g, "&#10;")
          if (result.imgurl == null || result.imgurl == "") {
            imgStr += "<img  src='../img/noticeAdvance.png'></img><span>" + content + "</span>"
          } else {
            imgStr += "<img  src='" + result.imgurl + "'></img><span>" + content + "</span>"
          }
          $(".conPic").html(imgStr) //左图
        }
      },
      error: function (res) {
        // console.log("res")
        // console.log(res)
      }
    })
  } else {
    $.ajax({
      type: "POST",
      url: baseUrl + "sys/noticest/noticestlist/list",
      data: {
        language: sessionStorage.getItem("CNtoEn"),
        'page': 1,
        'limit': 100,
        noticetype: 1,

      },
      success: function (res) {
        // console.log("通知公告全部list")
        // console.log(res)
        if (res.code === 0) {
          var maxLen = res.page.totalCount
          options.data = res.page.list
          page.init(maxLen, 1, options);
          var imgStr = ""
          var result = res.page.list[0]
          var content = result.title.replace(/&amp;nbsp;/g, "&#10;")
          content = content.substr(0, 30).replace(/&amp;nbsp;/g, "&#10;")
          imgStr += "<img  src='" + result.imgurl + "'></img><span>" + content + "</span>"
          $(".conPic").html(imgStr) //左图
        }

      },
      error: function (res) {
        // console.log("res")
        // console.log(res)
      }
    })

  }


}
// 明细
function classifyMessage(noticetype, noticecate) {
  if (sessionStorage.getItem("loginUserId")) {
    $.ajax({
      type: "POST",
      url: baseUrl + "sys/noticest/noticestlist/pagelist",
      data: {
        language: sessionStorage.getItem("CNtoEn"),
        'page': 1,
        'limit': 100,
        noticetype: noticetype,
        noticecate: noticecate,
      },
      success: function (res) {
        // console.log("通知公告分类list")
        // console.log(res)
        if (res.code === 0) {
          var maxLen = res.page.totalCount
          options.data = res.page.list
          page.init(maxLen, 1, options);

        }

      },
      error: function (res) {
        // console.log("res")
        // console.log(res)
      }
    })
  } else {
    $.ajax({
      type: "POST",
      url: baseUrl + "sys/noticest/noticestlist/pagelist",
      data: {
        language: sessionStorage.getItem("CNtoEn"),
        'page': 1,
        'limit': 100,
        noticetype: noticetype,
        noticecate: noticecate,
        id: sessionStorage.getItem("loginUserId"),
      },
      success: function (res) {
        // console.log("通知公告分类list")
        // console.log(res)
        if (res.code === 0) {
          var maxLen = res.page.totalCount
          options.data = res.page.list
          page.init(maxLen, 1, options);

        }

      },
      error: function (res) {
        // console.log("res")
        // console.log(res)
      }
    })
  }

}

//设置点击事件
$('.titleUl').on('click', 'li', function (e) {
  $(this)
    .addClass("backgroudColorTab")
    .siblings()
    .removeClass("backgroudColorTab")
})

//导航列表
var NavObj = {
  "CN": ["办事指南", "新生通道", "培养环节", "学籍学工", "党团班建设", "奖助评优", "心理健康", "学生活动", "社团文化", "毕业通道", "就业通道", "规章制度", "下载中心"],
  "EN": ["Guideline", "NewlyBorn", "Cultivate", "SchoolRoll", "PartyGroupConstruction", "Award-winning", "MentalHealth", "StudentActivities", "CommunityCulture", "Graduate", "Employment", "RegulatoryFramework", "DownloadCenter"],
  "titleCn": ["重要通知", "通知公告"],
  "titleEn": ["Important", "Notification"],
  "breadCn": ['<a href="../index.html#mainPage1">当前位置：首页&bull;新闻资讯</a>', '<a href="../index.html#mainPage6">当前位置：首页&bull;通知公告</a>'],
  "breadEn": ['<a href="../index.html#mainPage1">Current location:Home&bull;News</a>', '<a href="../index.html#mainPage6">Current location:Home&bull;Notice</a>'],
  "pageEn": ["Pre", "Next"],
  "subTitleCn": ["全部", "招生", "培养", "学工", "学籍", "就业"],
  "subTitleEn": ["Total", "UCAS", "Train", "Stu", "Grade", "Job"],
  "moreCn": ["更多"],
  "moreEn": ["More"],
}

//导航列表渲染
NavList(NavObj)

function NavList(NavObj) {
  var str = ""
  if (languageStatus == 1) {

    NavObj["CN"].forEach(function (item, index) {
      str += "<li><a href='../subPage/xuesheng.html?index=" + index + "'><img src='../img/xstz" + index + ".png'></img><span>" + item + "</span></a></li>"
    })
    //面包屑
    languageChange("span[name = bread]", "breadCn")
    //标题
    languageChange("h2[name = 'Title']", "titleCn")
    //子标题
    languageChange("li[name = 'subTitle']", "subTitleCn")
    //更多
    languageChange("a[name = 'more']", "moreCn")

  } else {

    NavObj["EN"].forEach(function (item, index) {
      str += "<li><a href='../subPage/xuesheng.html?index=" + index + "'><img src='../img/xstz" + index + ".png'></img><span>" + item + "</span></a></li>"
    })
    //面包屑
    languageChange("span[name = bread]", "breadEn")
    //标题
    languageChange("h2[name = 'Title']", "titleEn")
    //子标题
    languageChange("li[name = 'subTitle']", "subTitleEn")
    //更多
    languageChange("a[name = 'more']", "moreEn")
  }

  $('.pictrues>ul').append(str)

}
/**
 * 多层面包屑封装
 * @desDoms 目标元素
 * @language 中文字段或英文切换对应NavObj的静态类名
 */
function languageChange(desDoms, language) {
  $(desDoms).each(function (index, item) {
    $(item).html(NavObj[language][index])
  })
}
/**
 * @desDom 目标元素
 * @objName 语言对象对应的值
 * @obj 语言对象
 */
//默认点击全部
$('li[name = subTitle]').eq(0).trigger("click")
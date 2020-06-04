$(function () {
  //设置培养单位_点击哨兵
  var pydwIsClick = false
  /**tab栏切换效果 */
  //顶部tab栏函数
  var languageStatus = sessionStorage.getItem("CNtoEn")
  kygk_tab()
  //科研团队
  kytd_tab()

  li_trigger()
  //***************ajax */
  //人才招募
  //  paging(languageStatus)
  // 人文信息
  xxfw_rwhj_list(languageStatus)
  //人才招募
  //联系我们北京花园校区
  xxfw_lxwm_huayuan(languageStatus)
  xxfw_rczm_list(languageStatus)
  var page = {
    "pageId": "",
    "data": null,
    "maxshowpageitem": 5, //最多显示的页码个数
    "pagelistcount": 10, //每一页显示的内容条数
    "init": function (listCount, currentPage, options) {
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
      if (listCount >= 0) {
        var pageCount = listCount % page.pagelistcount > 0 ? parseInt(listCount / page.pagelistcount) + 1 : parseInt(listCount / page.pagelistcount);
      }
      var appendStr = page.getPageListModel(pageCount, currentPage);
      $("#" + page.pageId).html(appendStr);
    },
    /**
     * 设置列表总量和当前页码
     * @param listCount 列表总量
     * @param currentPage 当前页码
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
      options.callBack(result);
    },
    "initPageEvent": function (listCount) {
      $("#" + page.pageId + ">li[class='pageItem']").on("click", function () {
        page.setPageListCount(listCount, $(this).attr("page-data"), page.fun);
      });
    },
    "getPageListModel": function (pageCount, currentPage) {
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
      appendStr += "<li class='" + prePageClass + "' page-data='" + prePage + "' page-rel='prepage'>&lt;上一页</li>";
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
        // appendStr+="<li class='"+itemPageClass+"' page-data='"+pageNumber+"' page-rel='itempage'></li>";

        appendStr += "<li class='" + itemPageClass + "' page-data='" + pageNumber + "' page-rel='itempage'>" + pageNumber + "</li>";
      }
      appendStr += "<li class='" + nextPageClass + "' page-data='" + nextPage + "' page-rel='nextpage'>下一页&gt;</li>";
      return appendStr;

    }
  }
  //定义分页参数对象学术讲座
  let options = {
    "id": "page", //显示页码的元素
    "data": null, //显示数据
    "maxshowpageitem": 3, //最多显示的页码个数
    "pagelistcount": 10, //每页显示数据个数
    "callBack": function (result) {
      var cHtml = "";
      // console.log("人才招募option")
      // console.log(result)
      if (result.length != 0) {
        for (var i = 0; i < result.length; i++) {
          var time = ""
          if (result[i].createTime != null) {
            time = result[i].createTime.split(" ")[0]
          }

          cHtml += '<li><a href="../subPage/rencaizm.html?id=' + result[i].id + '"><p class="date"> ' + time + '</p><p class="title">' + result[i].title + '</p></a></li>'
          //处理数据
        }
      } else {
        if (sessionStorage.getItem("CNtoEn") == 0) {
          var temp = "No data"
        } else {
          var temp = "暂无数据"
        }
        cHtml += '<li><a href="#"><p></p><p class="title">' + temp + '</p></a></li>'
      }

      $(".rczm_item").html(cHtml); //将数据增加到页面中


    }
  };

  function kygk_tab() {
    //tab切换显示不同类名  
    /** 获取元素*/
    var titles = $('.content .title')
    var items = $('.menu_lsyg .content .item')
    //设置点击事件
    $(titles).on("mouseenter", "li", function () {
      $(this).css({
        cursor: "pointer"
      })
    })
    $(titles).on('click', "li", function () {
      /** tab点击效果*/
      var index = $(this).index()
      $(this)
        .addClass('tab_active')
        .siblings()
        .removeClass("tab_active")

      //点击显示内容
      $(items)
        .eq(index)
        .addClass("content_item_active")
        .siblings()
        .removeClass('content_item_active')
    })
  }
  //子菜单目录点击事件tab栏执行
  function kytd_tab() {

    var zzjg_tabs = $('.menu_lsyg .content .item .left_menu')
    var pics = $('#infro_server .right_view .sub_content_img_style')

    //鼠标更改为小手
    $(zzjg_tabs).on("mouseenter", "li", function () {
      $(this).css({
        cursor: "pointer"
      })
    })
    $(zzjg_tabs).on("click", 'li', function () {
      var id = $(this).data("id")

      $('#' + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
    })
    $(pics).on("mouseenter", "li", function () {
      $(this).css({
        cursor: "pointer"
      })
    })
    $(pics).on("click", 'li', function () {
      var id = $(this).data("id")

      $('#' + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
    })

  }

  //设置默认展示
  function li_trigger() {
    var str = window.location.href
    var index = str.indexOf("=")

    var id = str.substr(index + 1, 1)


    $('.content .title>ul>li').eq(id).trigger("click")

  }
  //**********************ajax***************** */
  //人才招募 分页  


  //人文环境
  function xxfw_rwhj_list(language) {
    $.ajax({
      url: baseUrl + "sys/humanity/list",
      type: "POST",
      data: {
        language: language,
        page:1,
        limit:100,
      },
      success: function (res) {
        // console.log("人文环境")
        // console.log(res)
        if (res.code == 0) {
          var data = res.page.list
          var str = ""
          var subStr = ""

          if (data.length !== 0) {
            var title = ""
            data.forEach(function (item, index) {
              if (item.title != "") {
                title = item.title.substr(0, 20)
                title += "..."
              }

              str += '<li data-id="rwhj_sub_c_1" class="fourrwhj fiveStep"  data-step="fourrwhj" data-index="'+ index +'" onclick="xxfw_rwhj_info(' + item.id + ')"> <a ><img src="' + item.remark + '" alt=""></a>'
              str += '<div class = "more"><a href="../subPage/infro_sververRwhjMore.html">More</a></div></li>'
              subStr += '<li><i class="arr2"></i><img src="' + item.remark + '" alt=""></li>'
            })
            $("#picBox>ul").html($(str))
            $("#listBox>ul").html($(subStr))
            rmhjLunBo("picBox","listBox","prev","next","prevTop","nextTop")
            var strUrl = window.location.href
            var subIndex = strUrl.lastIndexOf(":")
            if (subIndex) {
              var subId = strUrl.substr(subIndex + 1, 1)

              $('#listBox>ul>li').eq(subId).trigger("click")
              // console.log("小轮播图dom")
              // console.log(subId)
              // console.log($('#listBox>ul>li'))
            }
            fiveMenuClickEvent()

          } else {

            if (sessionStorage.getItem("CNtoEn") == 0) {
              var temp = "No data"
            } else {
              var temp = "暂无数据"
            }
            str += '<li  class="clearfix" ><img src="#" alt=""><span>' + temp + '</span></li>'

            $("#xxfw_rwhj").append($(str))

          }



        }


      }
    })
  }

  //人才招募 列表等待渲染
  function xxfw_rczm_list(language) {

    $.ajax({
      url: baseUrl + "sys/infoserver/genius/list",
      type: "POST",
      data: {
        language: language,
      },
      success: function (res) {
        // console.log("人才招募")
        // console.log(res)
        //拿到数据赋值给option 然后 执行渲染方法  page.init()
        //暂时使用paging函数进行渲染人才招募的分页效果
        //在做详情的时候把id加上即可 在callback中设置即可
        if (res.code === 0) {
          var maxLen = res.page.list.length
          options.data = res.page.list

          page.init(maxLen, 1, options);

        }
      }
    })
  }



})

//联系我们 北京花园路校区
function xxfw_lxwm_huayuan() {
  //sys/infoserver/geniusinfo
  $.ajax({
    url: baseUrl + "sys/infoserver/contact",
    type: "POST",
    data: {
      type: 198,
      language: sessionStorage.getItem("CNtoEn"),
    },
    success: function (res) {
      // console.log("北京花园路校区")
      // console.log(res)
      if (res.code == 0) {
        if (sessionStorage.getItem("CNtoEn") == 1) {
          var Data = "暂无数据"

        } else {
          var Data = "No Data"


        }
        if (res.data === null) {
          $("#lxwm_sub_a .right_view>.sub_content").html(Data)
        } else {
          var data = res.data.content
          $("#lxwm_sub_a .right_view>.sub_content").html(data)
        }

      }
    }
  })
}
//联系我们 北京软件园校区
function xxfw_lxwm_ruanjianyuan() {
  //sys/infoserver/geniusinfo
  $.ajax({
    url: baseUrl + "sys/infoserver/contact",
    type: "POST",
    data: {
      type: 199,
      language: sessionStorage.getItem("CNtoEn"),
    },
    success: function (res) {
      // console.log("北京软件园校区")
      // console.log(res)

      if (res.code == 0) {
        if (sessionStorage.getItem("CNtoEn") == 1) {
          var Data = "暂无数据"

        } else {
          var Data = "No Data"


        }
        if (res.data === null) {

          $("#lxwm_sub_b .right_view>.sub_content").html(Data)
        } else {
          var data = res.data.content
          $("#lxwm_sub_b .right_view>.sub_content").html(data)
        }

      }

    }
  })
}
//联系我们 绵阳科学城校区
function xxfw_lxwm_jinyang() {
  //sys/infoserver/geniusinfo
  $.ajax({
    url: baseUrl + "sys/infoserver/contact",
    type: "POST",
    data: {
      type: 200,
      language: sessionStorage.getItem("CNtoEn"),
    },
    success: function (res) {
      // console.log("绵阳科学城校区")
      // console.log(res)


      if (res.code == 0) {
        if (sessionStorage.getItem("CNtoEn") == 1) {
          var Data = "暂无数据"

        } else {
          var Data = "No Data"


        }
        if (res.data === null) {

          $("#lxwm_sub_c .right_view>.sub_content").html(Data)
        } else {
          var data = res.data.content
          $("#lxwm_sub_c .right_view>.sub_content").html(data)
        }

      }
    }
  })
}

function xxfw_rwhj_info(id) {
  $.ajax({
    url: baseUrl + "sys/degree/assessmentinfo",
    data: {
      id: id,
    },
    type: "POST",
    success: function (res) {
      // console.log("人文环境详情")
      if (sessionStorage.getItem("CNtoEn") == 1) {
        var Time = "时间"
        var PageView = "浏览量"
      } else {
        var Time = "Time"
        var PageView = "PageView"

      }


      var data = res.data
      var content = data.content.replace(/&amp;nbsp;/g, "&#10;")
      var time = ""
      var desDom = $("#rwhj_sub_c_1 .right_view .sub_content")
      if (data.createTime != null) {
        time = data.createTime.split(" ")[0]
      }

      var str = '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date"><span>' + Time + ':</span><i>' + time + '</i> </div><p>' + content + '</p></div>'
      desDom.empty()
      desDom.append($(str))

    }
  })
}
$('li[name = infoTitle]').on("click", tabBarClick)

function tabBarClick(e) {
  var val = e.target.innerHTML
  if (val == "联系我们" || val == "Contact us") {
    $('#lxwm_sub_e')
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
  }
}
xsIntro(305)

function xsIntro(type) {
  $.ajax({
    url: baseUrl + "sys/instroduction/instroList",
    data: {
      language: sessionStorage.getItem("CNtoEn"),
      type: type,
    },
    success: function (res) {
      // console.log("简介内容")
      // console.log(res)
      if (res.code == 0) {

        var desDom = $('p[name  = lxwmComment]')

        if (res.page.list.length > 0) {
          var data = res.page.list[0].content
        } else {
          var data = ""
        }


        desDom.html(data)
      }
    },
  })
}
//中英文渲染
var infoLanguage = {
  "infoTitleCn": ["人文环境", "人才招募", "联系我们"],
  "infoTitleEn": ["Humanities", "Recruiting", "Contact us"],
  "lxwmSubTitleCn": ["北京软件园校区", "北京花园路校区", "绵阳科学城校区"],
  "lxwmSubTitleEn": ["Software Park", "Garden Road", "Mianyang Science"],
}


//中英文切换dom渲染
if (sessionStorage.getItem("CNtoEn") == 1) {
  // 中文切换
  // 标题
  $("li[name = infoTitle]").each(function (index, item) {
    $(item).text(infoLanguage["infoTitleCn"][index])
  })
  $("h2[name = infoTitle]").each(function (index, item) {
    $(item).text(infoLanguage["infoTitleCn"][index])
  })
  //联系我们subMenu
  $("li[name = lxwmSubTitle]").each(function (index, item) {
    $(item).text(infoLanguage["lxwmSubTitleCn"][index])
  })
  $("h2[name = lxwmSubTitle]").each(function (index, item) {
    $(item).text(infoLanguage["lxwmSubTitleCn"][index])
  })
  $("h2[ name = lxwmCommentTitle]").html("联系我们")
  //面包屑
  $("span[ name = rwhj_bread]").each(function (index, item) {
    $(item).html('当前位置：<a href="../subPage/menu.html?prevName=信息服务&prevEname=Information&menuId=74">信息服务</a>&bull;人文环境')
  })
  $("h2[name = rwhj_subTitle]").text("人文环境")
  $("span[name = hyBread]").html('当前位置：<a href="../subPage/menu.html?prevName=信息服务&prevEname=Information&menuId=74">信息服务</a>&bull;北京花园路校区')
  $("span[name = lzBread]").html('当前位置：<a href="../subPage/menu.html?prevName=信息服务&prevEname=Information&menuId=74">信息服务</a>&bull;北京软件园校区')
  $("span[name = kkxBread]").html('当前位置：<a href="../subPage/menu.html?prevName=信息服务&prevEname=Information&menuId=74">信息服务</a>&bull;绵阳科学城校区')
  $("span[name = rczmBread]").html('当前位置：<a href="../subPage/menu.html?prevName=信息服务&prevEname=Information&menuId=74">信息服务</a>&bull;人才招募')


} else if (sessionStorage.getItem("CNtoEn") == 0) {
  //英文切换
  //标题
  $("li[name = infoTitle]").each(function (index, item) {
    $(item).text(infoLanguage["infoTitleEn"][index])
    $(item).css({
      "padding-right": "10px"
    })
  })
  $("h2[name = infoTitle]").each(function (index, item) {
    $(item).text(infoLanguage["infoTitleEn"][index])
  })
  //联系我们subMenu
  $("li[name = lxwmSubTitle]").each(function (index, item) {
    $(item).text(infoLanguage["lxwmSubTitleEn"][index])
  })
  $("h2[name = lxwmSubTitle]").each(function (index, item) {
    $(item).text(infoLanguage["lxwmSubTitleEn"][index])
  })
  $("h2[ name = lxwmCommentTitle]").html("Contact us")
  //面包屑
  $("span[ name = rwhj_bread]").each(function (index, item) {
    $(item).html('Current location: <a href="../subPage/menu.html?prevName=信息服务&prevEname=Information&menuId=74">Information service</a>&bull;Human Environment')
  })
  $("h2[name = rwhj_subTitle]").text("Humanities")
  $("span[name = hyBread]").html('Current location: <a href="../subPage/menu.html?prevName=信息服务&prevEname=Information&menuId=74">Information service</a>&bull;Beijing Garden Road Campus')
  $("span[name = lzBread]").html('Current location: <a href="../subPage/menu.html?prevName=信息服务&prevEname=Information&menuId=74">Information service</a>&bull;Beijing Software Park Campus')
  $("span[name = kkxBread]").html('Current location: <a href="../subPage/menu.html?prevName=信息服务&prevEname=Information&menuId=74">Information service</a>&bull;Mianyang Science City Campus')
  $("span[name = rczmBread]").html('Current location: <a href="../subPage/menu.html?prevName=信息服务&prevEname=Information&menuId=74">Information service</a>&bull;Recruitment')
}
//我们需要首次加载的时候获取url如果在dom加载完成后，会和增加的dom事件冲突将后续的事件序列清空
//给二级标题增加点击事件
var steps = [".twoStep",".threeStep",".fourStep"]
steps.forEach(function(item,index){
	$(item).on('click', function (event) {
		//获取data-step 并获取当前dom的索引
		// // console.log((index + 2)+"级标题dom事件")
		// var step = event.target.dataset.step
		var step = $(this).data().step
		var _index = $(this).data().index
		breadcrumb(step, _index)
	})
})
//五级菜单设置点击事件
function fiveMenuClickEvent() {
	$('.fiveStep').on('click', function (event) {
		//获取data-step 并获取当前dom的索引
		// // // console.log((index + 2)+"级标题dom事件")
		// var step = event.target.dataset.step
		var step = $(this).data().step
		var _index = $(this).data().index
		breadcrumb(step, _index)
	})
}
/*
* @parma  url 网站地址
  @parma currStep 层级
  @parma currIndex 索引
*/
function breadcrumb(currStep, currIndex) {
  //判断url是否存在层级记录  大于-1 有 小于-1 没有
  // // // // console.log(decodeURI(window.location.href))
  if (window.location.href.indexOf("#") > -1) {
    //1.获取当前层级 获取当前点击对象的data-step 层级关系
    //2.判断当前层级 更新当前层级索引
    //3.如果有后续层级删除
    //获取当前的url
    // // // // console.log("currStep")
    // // // // console.log(currStep)
    // // // // console.log("currIndex")
    // // // // console.log(currIndex)
    var currUrlIndex = window.location.href.indexOf("#")
    var currUrl = window.location.href.slice(currUrlIndex + 1)
    //判断是否包含当前的层级
    if (currUrl.indexOf(currStep) > -1) {
      //包含当前层级
      // // // // console.log("包含step的url")
      // // // // console.log(currUrl)
      //将当前的url层级分割成数组便于处理
      var currUrlArr = currUrl.split("|")
      // // // // console.log("currUrlArr")
      // // // // console.log(currUrlArr)
      //用于记录修改后的url层级
      var currStr = ""
      //判断当前的层级，之后的层级将不在添加如url中。目的是当我点击上一层级的时候清除后续层级
      var currDomIndex = true
      /*
       * 循环层级url匹配当前层级
       */
      currUrlArr.forEach(function (item, index) {
        //排除最后一个为空的数组
        if (item.trim() != "") {
          var tempArr = item.split("=")
          // // // // console.log("tempArr")
          // // // // console.log(tempArr)
          // // // // console.log("currDomIndex")
          // // // // console.log(currDomIndex)
          //分割数组进行用层级data-step判断当前点击的层级，修改其索引
          if (tempArr[0] == currStep) {
            //如果匹配当前层级后续层级不在填写到url中 我们已｜分割方便后续使用数组分割
            currDomIndex = false
            currStr += tempArr[0] + "=" + currIndex + "|"
            // // // // console.log("str")
            // // // // console.log(currStr)
            return
          } else {
            //如果处于当前层级的前面我们保留
            if (currDomIndex) {
              // // // // console.log("不匹配当前元素执行了")
              currStr += item + "|"
            }

          }

        }
      })
      // // // // console.log("updataStr")
      // // // // console.log(currStr)
      //使用新的字符串替代#号后面的所有字符串
      var updataUrlIndex = window.location.href.indexOf("#") + 1
      window.location.href = window.location.href.slice(0, updataUrlIndex) + currStr

    } else {
      //不包含当前层级 我们在后面追加当前的操作
      // // // // console.log("不包含step的url")
      // // // // console.log(currUrl)
      window.location.href += currStep + '=' + currIndex + '|'
    }

  } else {
    //0.增加#锚点标记
    //1.获取当前层级添加
    //如果当前页面中还没有#锚点，我们需要增加锚点标示符。
    //*** 给location.search 修改时会自动刷新页面*/
    if (!window.proformance) {
      window.location.href += '#' + currStep + '=' + currIndex + '|'
      // // // // console.log("else 执行")
    }

  }
}
//我们需要首次加载的时候获取url如果在dom加载完成后，会和增加的dom事件冲突将后续的事件序列清空
var urlPath = window.location.href
// // console.log("urlPath")
// // console.log(urlPath)
//反显操作函数
window.onload = function () {
  
  echoOperating()
  function echoOperating() {
    //反显之前我们需要拿到path
    var operatPathIndex = urlPath.lastIndexOf("#")
    //判断是否存在# 如果没有不执行后续操作
    if (operatPathIndex > -1) {
      //截取#锚点后面的操作序列url
      var operatPath = urlPath.slice(operatPathIndex + 1)
      // // // console.log("operatPath")
      // // // console.log(operatPath)
      var operatPathArr = operatPath.split("|")
      if (operatPathArr.length > 0) {
        operatPathArr.forEach(function (item, index) {
          if (item != "") {
            var tempArr = item.split("=")
            // // // console.log("反显")
            // // // console.log('.' + tempArr[0] + tempArr[1])
            if (tempArr[0] == "two") {
              // // // console.log($('.' + tempArr[0] + 'Step'))
              $('.' + tempArr[0] + 'Step').eq(tempArr[1]).trigger("click")
            } else {
              // // console.log('三级层级以上' + tempArr[0])
							// // console.log($('.' + tempArr[0]))
							if($('.' + tempArr[0]).length == 0){
								setTimeout(function(){
                  
									$('.' + tempArr[0]).eq(tempArr[1]).trigger("click")
								},500)
							} else {
          
								$('.' + tempArr[0]).eq(tempArr[1]).trigger("click")
							}
							
							
            }

          }
        })
      }
    }


	}}
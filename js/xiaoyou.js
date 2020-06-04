$(function () {
  //设置培养单位_点击哨兵
  var pydwIsClick = false
  /**tab栏切换效果 */
  //顶部tab栏函数
  kygk_tab()
  //科研团队
  kytd_tab()
  //人才招募
  li_trigger()
  if(!sessionStorage.getItem("CNtoEn")) {
    sessionStorage.setItem("CNtoEn",1)
  }


  //校友回顾
  var page_xyhg = {
    "pageId": "",
    "data": null,
    "maxshowpageitem": 5, //最多显示的页码个数
    "pagelistcount": 10, //每一页显示的内容条数
    "init": function (listCount, currentPage, options) {
      this.data = options.data,
        this.pageId = options.id,
        this.maxshowpageitem = options.maxshowpageitem, //最多显示的页码个数
        this.pagelistcount = options.pagelistcount //每一页显示的内容条数
      page_xyhg.initPage(listCount, currentPage);
    },
    /**
     * 初始化数据处理
     * @param listCount 列表总量
     * @param currentPage 当前页
     */
    "initPage": function (listCount, currentPage) {
      //最多页码
      var maxshowpageitem = page_xyhg.maxshowpageitem;
      //最多页码有值 如果这个值不为空 在赋值回去
      if (maxshowpageitem != null && maxshowpageitem > 0 && maxshowpageitem != "") {
        page_xyhg.maxshowpageitem = maxshowpageitem;
      }
      //和以上同理
      var pagelistcount = page_xyhg.pagelistcount;
      if (pagelistcount != null && pagelistcount > 0 && pagelistcount != "") {
        page_xyhg.pagelistcount = pagelistcount;
      }
      page_xyhg.pagelistcount = pagelistcount;
      if (listCount < 0) {
        listCount = 0;
      }
      if (currentPage <= 0) {
        currentPage = 1;
      }

      page_xyhg.setPageListCount(listCount, currentPage);
    },
    /**
     * 初始化分页界面
     * @param listCount 列表总量
     */
    "initWithUl": function (listCount, currentPage) {
      var pageCount = 1;
      if (listCount >= 0) {
        var pageCount = listCount % page_xyhg.pagelistcount > 0 ? parseInt(listCount / page_xyhg.pagelistcount) + 1 : parseInt(listCount / page_xyhg.pagelistcount);
      }
      var appendStr = page_xyhg.getPageListModel(pageCount, currentPage);
      $("#" + page_xyhg.pageId).html(appendStr);
    },
    /**
     * 设置列表总量和当前页码
     * @param listCount 列表总量
     * @param currentPage 当前页码
     */
    "setPageListCount": function (listCount, currentPage) {
      listCount = parseInt(listCount);
      currentPage = parseInt(currentPage);
      page_xyhg.initWithUl(listCount, currentPage); //绘制分页样式
      page_xyhg.initPageEvent(listCount); //分页按钮点击事件
      page_xyhg.viewPage(currentPage, listCount, page_xyhg.pagelistcount, page_xyhg.data)
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

      options_xyhg.callBack(result);
    },
    "initPageEvent": function (listCount) {
      $("#" + page_xyhg.pageId + ">li[class='pageItem']").on("click", function () {
        page_xyhg.setPageListCount(listCount, $(this).attr("page-data"), page_xyhg.fun);
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
      if (currentPage - parseInt(page_xyhg.maxshowpageitem / 2) > 0 && currentPage + parseInt(page_xyhg.maxshowpageitem / 2) <= pageCount) {
        miniPageNumber = currentPage - parseInt(page_xyhg.maxshowpageitem / 2);
      } else if (currentPage - parseInt(page_xyhg.maxshowpageitem / 2) > 0 && currentPage + parseInt(page_xyhg.maxshowpageitem / 2) > pageCount) {
        miniPageNumber = pageCount - page_xyhg.maxshowpageitem + 1;
        if (miniPageNumber <= 0) {
          miniPageNumber = 1;
        }
      }
      var showPageNum = parseInt(page_xyhg.maxshowpageitem);
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
  //来访活动
  var page_lfhd = {
    "pageId": "",
    "data": null,
    "maxshowpageitem": 5, //最多显示的页码个数
    "pagelistcount": 10, //每一页显示的内容条数
    "init": function (listCount, currentPage, options) {
      this.data = options.data,
        this.pageId = options.id,
        this.maxshowpageitem = options.maxshowpageitem, //最多显示的页码个数
        this.pagelistcount = options.pagelistcount //每一页显示的内容条数
      page_lfhd.initPage(listCount, currentPage);
    },
    /**
     * 初始化数据处理
     * @param listCount 列表总量
     * @param currentPage 当前页
     */
    "initPage": function (listCount, currentPage) {
      //最多页码
      var maxshowpageitem = page_lfhd.maxshowpageitem;
      //最多页码有值 如果这个值不为空 在赋值回去
      if (maxshowpageitem != null && maxshowpageitem > 0 && maxshowpageitem != "") {
        page_lfhd.maxshowpageitem = maxshowpageitem;
      }
      //和以上同理
      var pagelistcount = page_lfhd.pagelistcount;
      if (pagelistcount != null && pagelistcount > 0 && pagelistcount != "") {
        page_lfhd.pagelistcount = pagelistcount;
      }
      page_lfhd.pagelistcount = pagelistcount;
      if (listCount < 0) {
        listCount = 0;
      }
      if (currentPage <= 0) {
        currentPage = 1;
      }

      page_lfhd.setPageListCount(listCount, currentPage);
    },
    /**
     * 初始化分页界面
     * @param listCount 列表总量
     */
    "initWithUl": function (listCount, currentPage) {
      var pageCount = 1;
      if (listCount >= 0) {
        var pageCount = listCount % page_lfhd.pagelistcount > 0 ? parseInt(listCount / page_lfhd.pagelistcount) + 1 : parseInt(listCount / page_lfhd.pagelistcount);
      }
      var appendStr = page_lfhd.getPageListModel(pageCount, currentPage);
      $("#" + page_lfhd.pageId).html(appendStr);
    },
    /**
     * 设置列表总量和当前页码
     * @param listCount 列表总量
     * @param currentPage 当前页码
     */
    "setPageListCount": function (listCount, currentPage) {
      listCount = parseInt(listCount);
      currentPage = parseInt(currentPage);
      page_lfhd.initWithUl(listCount, currentPage); //绘制分页样式
      page_lfhd.initPageEvent(listCount); //分页按钮点击事件
      page_lfhd.viewPage(currentPage, listCount, page_lfhd.pagelistcount, page_lfhd.data)
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

      options_lfhd.callBack(result);
    },
    "initPageEvent": function (listCount) {
      $("#" + page_lfhd.pageId + ">li[class='pageItem']").on("click", function () {
        page_lfhd.setPageListCount(listCount, $(this).attr("page-data"), page_lfhd.fun);
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
      if (currentPage - parseInt(page_lfhd.maxshowpageitem / 2) > 0 && currentPage + parseInt(page_lfhd.maxshowpageitem / 2) <= pageCount) {
        miniPageNumber = currentPage - parseInt(page_lfhd.maxshowpageitem / 2);
      } else if (currentPage - parseInt(page_lfhd.maxshowpageitem / 2) > 0 && currentPage + parseInt(page_lfhd.maxshowpageitem / 2) > pageCount) {
        miniPageNumber = pageCount - page_lfhd.maxshowpageitem + 1;
        if (miniPageNumber <= 0) {
          miniPageNumber = 1;
        }
      }
      var showPageNum = parseInt(page_lfhd.maxshowpageitem);
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
  //校友回顾
  let options_xyhg = {
    "id": "page_xyhg", //显示页码的元素
    "data": null, //显示数据
    "maxshowpageitem": 3, //最多显示的页码个数
    "pagelistcount": 10, //每页显示数据个数
    "callBack": function (result) {
      // console.log("来访活动数据")
      // console.log(result)
      var cHtml = "";
      if(result.length >0){
        for (var i = 0; i < result.length; i++) {
          var time = ""
          if (result[i].createTime != "") {
            time = result[i].createTime.split(" ")[0]
          }
          cHtml += '<li class="abc"><a href="xiaoyou_page_info.html?id=' + result[i].id + '"><p class="date"> ' + time + '</p>'
          cHtml += '<p class="title">' + result[i].title + '</p></a></li>'
          //处理数据
        }
      }else {
        if (sessionStorage.getItem("CNtoEn") == 0){
          var temp = "No data"
        }else {
          var temp = "暂无数据"
        }
        cHtml += '<li class="abc"><a href="#"><p class=""> </p>'
        cHtml += '<p class="title">' + temp + '</p></a></li>'
      }

      $(".rczm_item").html(cHtml); //将数据增加到页面中

    }
  };

  //来访活动
  let options_lfhd = {
    "id": "page_lfhd", //显示页码的元素
    "data": null, //显示数据
    "maxshowpageitem": 3, //最多显示的页码个数
    "pagelistcount": 10, //每页显示数据个数
    "callBack": function (result) {
      var cHtml = "";
      if(result.length >0){
        for (var i = 0; i < result.length; i++) {
          var time = ""
          if (result[i].createTime != "") {
            time = result[i].createTime.split(" ")[0]
          }
          //   cHtml += `<li class="abc">
          //   <a href="xiaoyou_page_info.html?id=${result[i].id}"><p class="date"> ${time}</p>
          //     <p class="title">${result[i].title}</p>
          //   </a>
          // </li>`;
          cHtml += '<li class="abc"><a href="xiaoyou_page_info.html?id=' + result[i].id + '"><p class="date"> ' + time + '</p>'
          cHtml += '<p class="title">' + result[i].title + '</p></a></li>'
          //处理数据
        }
      }else {
        if (sessionStorage.getItem("CNtoEn") == 0){
          var temp = "No data"
        }else {
          var temp = "暂无数据"
        }
        cHtml += '<li class="abc"><a href="#"><p class=""> </p>'
        cHtml += '<p class="title">' + temp + '</p></a></li>'
      }
     

      $(".rczm_item1").html(cHtml); //将数据增加到页面中

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
    // console.log(zzjg_tabs)
    //鼠标更改为小手
    $(zzjg_tabs).on("mouseenter", "li", function () {
      $(this).css({
        cursor: "pointer"
      })
    })
    $(zzjg_tabs).on("click", 'li', function () {
      var id = $(this).data("id")
      // console.log($('#' + id))
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
      // console.log($('#' + id))
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
    var id = str.substr(index + 1)
    $('.content .title>ul>li').eq(id).trigger("click")
  }
  var languageStatus = sessionStorage.getItem("CNtoEn")
  /****************************ajax**************************/
  //两弹元勋
  xy_lsrw_list()

  function xy_lsrw_list() {
    $.ajax({
      url: baseUrl + "sys/alumnus/alumnus/historylist",
      type: "POST",
      data: {
        language: sessionStorage.getItem("CNtoEn"),
      },
      success: function (res) {
        // console.log("两弹元勋")
        // console.log(res)
        if (res.code == 0) {
          let data = res.page.list
          let str = ""
          let desDom = $(".item .sub_content_img_style .lsrw")
          if (data.length !== 0) {
            data.forEach(function (item, index) {
              var title = ""
              if (item.title != "") {
                title = item.title.substr(0, 20)

              }
           
              str += '<li data-id="lsrw_sub_c_1" class="clearfix fiveldyx fiveStep"  data-step="fiveldyx" data-index="'+ index +'"  onclick="xy_lsrw_info(' + item.id + ')">'
              str += '<div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></li>'
            })
            $(desDom).html(str)
            fiveMenuClickEvent()
          } else {
            if (sessionStorage.getItem("CNtoEn") == 0) {
              var Data = "NO Data"
            } else if (sessionStorage.getItem("CNtoEn") == 1) {
              var Data = "暂无数据"

            }
         
            str += '<li data-id="lsrw_sub_c_1" class="clearfix" onclick="xy_lsrw_info( ' + 12 + ')"><div class="img">'
            str += '<img src="../img/jyjx03.jpg"" alt=""></div><span> ' + Data + '</span></li>'
            $(desDom).html(str)
          }



        }


      }
    })
  }

  //来访活动
  xy_lshd_list()

  function xy_lshd_list() {
    $.ajax({
      url: baseUrl + "sys/alumnus/alumnus/visitlist",
      type: "POST",
      data: {
        language: languageStatus,
      },
      success: function (res) {
        // console.log("来访活动")
        // console.log(res)
        if (res.code == 0) {
          if (res.page.list.length != 0) {
            options_lfhd.data = res.page.list
            var maxLen = res.page.list.length
            //调用分页插件
            page_lfhd.init(maxLen, 1, options_lfhd);
          }else {
            options_lfhd.data = []
            var maxLen = res.page.list.length
            //调用分页插件
            page_lfhd.init(maxLen, 1, options_lfhd);
          }



        }
      }
    })
  }

  //校友回顾
  xy_xyhg_list()

  function xy_xyhg_list() {
    $.ajax({
      url: baseUrl + "sys/alumnus/alumnus/alumnuslist",
      type: "POST",
      data: {
        language: languageStatus,
      },
      success: function (res) {
        // console.log("校友回顾")
        // console.log(res)

        if (res.code == 0) {
          if (res.page.list.length != 0) {
            options_xyhg.data = res.page.list
            var maxLen = res.page.list.length
            //调用分页插件
            page_xyhg.init(maxLen, 1, options_xyhg);
          }else {
            options_xyhg.data = []
            var maxLen = res.page.list.length
            //调用分页插件
            page_xyhg.init(maxLen, 1, options_xyhg);
          }


        }


      }
    })
  }
  //来访须知详情
  xy_lfxz_info()

  function xy_lfxz_info() {
    if(sessionStorage.getItem("CNtoEn") == 1){
      var id = 939
    } else {
      var id = 1150
    }
    $.ajax({
      url: baseUrl + "sys/alumnus/visitinfo",
      type: "POST",
      data: {
        id: id,
      },
      success: function (res) {
        // console.log("来访须知富文本")
        // console.log(res)
        let str = ""
        let desDom = $("#xy_lfxz")
        if (res.code == 0) {
          let data = res.content
          if (data !== null) {

            let createTime = data.createTime.split(" ")[0]
            let content = data.content.replace(/&amp;nbsp;/g, "&#10;")
            if (sessionStorage.getItem("CNtoEn") == 0) {
              var Time = "Time"
              var PageView = "PageView"
              var Data = "NO Data"
            } else if (sessionStorage.getItem("CNtoEn") == 1) {
              var Time = "时间"
              var PageView = "浏览量"
              var Data = "暂无数据"

            }
        
            str += '<div class="sub_detail_content"><h3> ' + data.title + '</h3><div class="sub_date">'
            str += '<span> ' + Time + ':</span><i> ' + createTime + '</i> '
            str += '</div><p>' + content + '</p></div>'
          }else {
            if (sessionStorage.getItem("CNtoEn") == 0){
              var temp = "No data"
            }else {
              var temp = "暂无数据"
            }
            str += '<div class="sub_detail_content"><h3> </h3><div class="sub_date">'
            str += '<span></span><i> </i> <span> </span><i></i>'
            str += '</div><p>' + temp + '</p></div>'
          }
          $(desDom).empty()
          $(desDom).append($(str))

        }

      }
    })
  }
  //风采瞬间
  xy_fcsj_list()
  function xy_fcsj_list() {
    $.ajax({
      url: baseUrl + "sys/alumnus/alumnus/demeanorlist",
      type: "POST",
      data: {
        language: languageStatus,
      },
      success: function (res) {
        // console.log("风采瞬间")
        // console.log(res)
        if (res.code == 0) {
          let data = res.page.list
          let str = ""
          let desDom = $("#xy_fcsj")
          if (data.length !== 0) {
            data.forEach(function (item, index) {
              var title = ""
              if (item.title != "") {
                title = item.title.substr(0, 10)
                title += "..."
              }
              str += '<li data-id="lsrw_sub_c_1" class="clearfix fivefcsj fiveStep"  data-step="fivefcsj" data-index="'+ index +'"  onclick="xy_lsrw_info(' + item.id + ')">'
              str += '<div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></li>'
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            if (sessionStorage.getItem("CNtoEn") == 0) {
              var Data = "NO Data"
            } else if (sessionStorage.getItem("CNtoEn") == 1) {
              var Data = "暂无数据"
            }
            str += '<li data-id="lsrw_sub_c_1" class="clearfix" ><div class="img">'
            str += '<img src="" alt=""></div><span>' + Data + '</span></li>'
            desDom.html(str)
          }
        }
      }
    })
  }
})
//两弹元勋详情
function xy_lsrw_info(id) {
  $.ajax({
    url: baseUrl + "sys/alumnus/getinfo",
    type: "POST",
    data: {
      id: id,
    },
    success: function (res) {
      // console.log("两弹元勋详情")
      // console.log(res)
      let str = ""
      let desDom = $("#lsrw_sub_c_1 .right_view .sub_content")
      let data = res.content
      let createTime = data.createTime.split(" ")[0]
      let content = data.content.replace(/&amp;nbsp;/g, "&#10;")
      if (data !== null) {
        if (sessionStorage.getItem("CNtoEn") == 0) {
          var Time = "Time"
          var PageView = "PageView"
          var Data = "NO Data"
        } else if (sessionStorage.getItem("CNtoEn") == 1) {
          var Time = "时间"
          var PageView = "浏览量"
          var Data = "暂无数据"

        }
      
        str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date" style="text-align:center;">'
        str += '<span>' + Time + ':</span><i>' + createTime + '</i>  '
        str += '</div><p>' + content + '</p></div>'
      }
      $(desDom).empty()
      $(desDom).append($(str))

    }
  })
}

var xiaoyouLanguageObj = {
  titleCn: ["访问须知", "来访活动","两弹元勋", "校友回顾","风采瞬间"],
  titleEn: ["Access notice ", "Visiting activity ","TwoBombs", "Alumni review ","Wind moment"],
  OneBreadCn: ['当前位置：<a href="../subPage/menu.html?prev=Alumnus">来访人员</a>•来访须知','当前位置：<a href="../subPage/menu.html?prev=Alumnus">来访人员</a>•来访活动', '当前位置：<a href="../subPage/menu.html?prev=Alumnus">来访人员</a>•两弹元勋', '当前位置：<a href="../subPage/menu.html?prev=Alumnus">来访人员</a>•校友回顾','当前位置：<a href="../subPage/menu.html?prev=Alumnus">来访人员</a>•风采瞬间'],
  OneBreadEn: ['Current location:  <a href="../subPage/menu.html?prev=Alumnus">Alumni</a> • Visiting Tips','Current location:  <a href="../subPage/menu.html?prev=Alumnus">Alumni</a> • Visiting activities','Current location: <a href="../subPage/menu.html?prev=Alumnus">Alumni</a> • TwoBombss', 'Current location:  <a href="../subPage/menu.html?prev=Alumnus">Alumni</a> • Alumni Review','Current location:  <a href="../subPage/menu.html?prev=Alumnus">Alumni</a> • moments of style'],
  infoCn: ['来访人员详情', '当前位置:<a href="../subPage/xiaoyou.html?index=0">来访人员</a>'],
  infoEn: ['Alumni details', 'Current location: <a href="../subPage/xiaoyou.html?index=0">Alumni</a>']
}

if (sessionStorage.getItem("CNtoEn") == 1) {
  // 中文标题
  $("li[name = xyTitle ]").each(function (index, item) {
    $(item).text(xiaoyouLanguageObj["titleCn"][index])
  })
  $("h2[name = xyTitle ]").each(function (index, item) {
    $(item).text(xiaoyouLanguageObj["titleCn"][index])
  })
  // 面包屑
  $("span[name = xyOneBread ]").each(function (index, item) {
    $(item).html(xiaoyouLanguageObj["OneBreadCn"][index])
  })
  //详情页
  $("span[name = xyLsrwInfo ]").each(function (index, item) {
    $(item).html(xiaoyouLanguageObj["infoCn"][index])
  })


} else {
  // 英文标题
  $("li[name = xyTitle ]").each(function (index, item) {
    $(item).text(xiaoyouLanguageObj["titleEn"][index])
    $(item).css({
      "padding": "0 10px",

    })
  })
  $("h2[name = xyTitle ]").each(function (index, item) {
    $(item).text(xiaoyouLanguageObj["titleEn"][index])

  })
  // 面包屑
  $("span[name = xyOneBread ]").each(function (index, item) {
    $(item).html(xiaoyouLanguageObj["OneBreadEn"][index])
  })
  //详情页
  $("span[name = xyLsrwInfo ]").each(function (index, item) {
    $(item).html(xiaoyouLanguageObj["infoEn"][index])
  })


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
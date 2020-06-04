$(function () {
  var sel_index = 0
  var secoundUl_isclick = false
  /**tab栏切换效果 */
  //tab栏函数
  lsyg_tab()
  //组织架构
  zzjg_tab()
  //研究本部子菜单事件
  yjbb_event()
  //其他单位子菜单事件
  qtdw_event()
  //其他单位子菜单子tab事件
  qtdw_sub_event()
  //其他单位类名样式
  other_danwei()
  //设置默认点击
  li_trigger()
  //***************** 数据渲染***************************
  //历史沿革
  lsyg_ajax()
  //院情统计
  yqtj_ajax()
  //发展定位
  yzju_ajax()
  //组织架构
  //机构设置
  zzjg_jgsz()
  //委员会
  zzjg_wyh()

  //其他单位 子集的tab切换事件

  //标题tab栏切换效果
  function lsyg_tab() {
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

  //组织架构子tab栏执行
  function zzjg_tab() {
    var zzjg_tabs = $('.menu_lsyg .content .item .left_menu')
    //鼠标更改为小手
    $(zzjg_tabs).on("mouseenter", "li", function () {
      $(this).css({
        cursor: "pointer"
      })
    })
    $(zzjg_tabs).on("click", 'li', function () {
      var id = $(this).data("id")
      var navName = $(this).text().substr(0, 4)

      var firstLi = $("#zzjg_sub_c_sub")
      var secondUl = $("#zzjg_sub_c_ul")
      var arrow = $("#zzjg_sub_c_arrow")
      //点击其他隐藏培养单位子标题

      if (secoundUl_isclick === false && navName === "Trai") {

        secoundUl_isclick = true
        $(firstLi).css({
          "height": "180px"
        })
        $(secondUl)
          .css("display", "block")

        $(arrow).css({
          "transform": "rotate(180deg)",
          'top': '10px'
        })
        $(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(1).off("click")
        $(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(2).off("click")
        $(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(3).off("click")

      } else if (secoundUl_isclick === false && navName === "培养单位") {
        secoundUl_isclick = true
        $(firstLi).css({
          "height": "180px"
        })
        $(secondUl)
          .css("display", "block")

        $(arrow).css({
          "transform": "rotate(180deg)",
          'top': '10px'
        })
        $(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(1).off("click")
        $(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(2).off("click")
        $(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(3).off("click")

      } else if (navName === "培养单位" || navName === "Trai" && secoundUl_isclick === true) {

        $(secondUl)
          .css("display", "none")
        $(arrow).css({
          "transform": "rotate(0deg)",
          'top': '18px'
        })
        $(firstLi).css({
          "height": "35px"
        })
        secoundUl_isclick = false
      } else {

        $(secondUl)
          .css("display", "none")
        $(arrow).css({
          "transform": "rotate(0deg)",
          'top': '18px'
        })
        $(firstLi).css({
          "height": "35px"
        })
        secoundUl_isclick = false
      }
      if (id == "zzjg_sub_c") {
        return
      }
      $('#' + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
    })







  }

  //研究本部3级菜单事件设置  招生工作---tab切换
  function yjbb_event() {

    var tab = $("#zzjg_sub_c_1 .zzjq_sub_c_1_content .sub_c_1_tab>ul")
    $(tab).on("click", "li", function () {
      // content_item_active
      var id = $(this).data("id")
      $(this).addClass("sub_c1_tab_def_hover")
        .siblings()
        .removeClass("sub_c1_tab_def_hover")
      $("#" + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
    })

  }

  //其他单位4级菜单事件设置
  function qtdw_event() {
    var tab = $("#zzjg_sub_c_2 .zzjq_sub_c_2_content")
    $(tab).on("click", "li", function () {

      var id = $(this).data("id")
      $("#" + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
    })
  }
  //其他单位tab样式
  function other_danwei() {
    $(".zzjg_sub_c_2_0 .sub_c_1_tab ul").on("click", "li", function () {
      $(this).addClass("sub_tab")
        .siblings()
        .removeClass("sub_tab")
    })
  }

  //设置子页面默认展示效果
  function li_trigger() {

    var str = window.location.href
    var index = str.indexOf("=")
    var subIndex = str.indexOf("&")
    var id = str.substr(index + 1, 1)
    // // console.log("id")
    // // console.log(id)

    $('.content .title>ul>li').eq(id).trigger("click")
    if (subIndex !== -1) {
      var subKey = str.substr(subIndex + 6, 4)
      // // console.log("subKey")
      // // console.log(subKey)
      if (subKey == "pydw") {
        $("#zzjg_sub_c_sub").trigger("click")
        $("#zzjg_sub_c_sub ul>li").eq(0).trigger("click")
      } else if (subKey == "jgsz") {
        $("#pydw_jgsz_defClick").trigger("click")
      }



    }

  }
  // *********************数据渲染************
  // 组织架构    
  /**  
   * @persionList 请求中人员统一参数
   * @committee 委员会的接口地址
   *党政领导 lead/personnel/list
   */
  zzjg_dzld()

})

/**
 * item_sel tab栏切换效果
 */
//历史沿革子tab栏执行
// 时间轴计数器
var number = 0

function item_sel(datas) {
  // // console.log("历史沿革数据")
  // // console.log(datas)
  var item_sel = $('.menu_lsyg .content_item .item_sel')
  var context_items = $(".menu_lsyg .content_item .item_context .context_item")
  //鼠标更改为小手
  $(item_sel).on("mouseenter", "li", function () {
    $(this).css({
      cursor: "pointer"
    })

  })
  $(item_sel).on("click", "li", function () {
    //设置哨兵 为了给左右箭头提供索引
    sel_index = $(this).index()
    // // // console.log(sel_index)
    //每次点击内容至空
    $("#lsyg_content").empty()
    //item_sel切换效果
    $(this)
      .addClass("item_sel_active")
      .siblings()
      .removeClass("item_sel_active")

    //item的内容切换
    var index = $(this).index()
    var content_str = ""

    $(context_items).addClass("content_item_active")
    datas[index].forEach(function (item, index) {

      content_str += '<div class="lsyg_fl" class="lsyg_img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div>'
      content_str += '<div class="lsyg_content" class="lsyg_rl"><a href="../subPage/menu_lsyg_info.html?id=' + item.id + '"><h2>' + item.title + '</h2>'
      content_str += '<span>' + (item.standby == null ? "暂无简介" : item.standby) + '</span></a> </div>'
    })
    context_items.html(content_str)
  })

  // 默认渲染一次

  $("#lsyg_timetameUL>li").eq(0).trigger("click")


  // 设置左右箭头动效
  $(".content_item .left_arrow").on("click", function () {
    if (sel_index == 0) {
      return
    }
    $("#lsyg_timetameUL>li").eq(sel_index - 1).trigger("click")
  })
  $(".content_item .right_arrow").on("click", function () {
    $("#lsyg_timetameUL>li").eq(sel_index + 1).trigger("click")
  })

}


// 研究本院 tab切换下的list 切换
function yjbb_tabLIst() {
  //获取组织架构研院本部子集tab标签为其设置事件显示zzjg_sub_c_detail
  var sub_c_1_content_item_list = $("#yybb_sub_c_2 .sub_c_1_content_item_list ")
  sub_c_1_content_item_list.on("click", function () {
    $('#zzjg_sub_c_detail').addClass('content_item_active')
    $('#zzjg_sub_c_1').removeClass('content_item_active')

  })
}

//其他单位子菜单事件设置 ---招生工作---培养工作---毕业工作
function qtdw_sub_event() {
  var pydw_tab = $(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul")

  // 获取子页面的所有li 和 显示框对应
  // 给每一个li设置点击事件 让与之对应的显示框显示_
  //  这里使用lis数组的索引，对应的就是获取显示框数组的索引
  $(pydw_tab).on("click", "li", function () {

    var id = $(this).data("id")

    $(this).addClass("sub_c1_tab_def_hover")
      .siblings()
      .removeClass("sub_c1_tab_def_hover")
    $("#" + id)
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
  })


}
//________________________接口需要测试________________

var languageStatus = sessionStorage.getItem("CNtoEn")

var languageObj = {
  "topBarCn": ["历史沿革", "院情统计", "组织架构", "发展定位"],
  "topBarEn": ["TwoBombs", "Hospital", "Organization", "Positioning"],
  "zzjg_leftBarCn": ["党政领导", "机构设置", "研院本部", "其他单位", "委员会"],
  "zzjg_leftBarEn": ["leadership", "Institutional", "Headquarters", "Other units", "Committee"],
  "zzjg_pydwCn": "培养单位",
  "zzjg_pydwEn": "Training Unit",
  "zzjgSubTitleCn": ["党政领导", "机构设置", "研院本部", "研院本部", "其他单位", "其他单位", "其他单位", "委员会"],
  "zzjgSubTitleEn": ["leadership", "Institutional", "Headquarters", "Headquarters", "Other units", "Other units", "Other units", "Committee"],
  "pydw_subTitleCn": ["研究室教育简介", "招生工作", "培养工作", "毕业工作", "研究室教育简介", "招生工作", "培养工作", "毕业工作"],
  "pydw_subTitleEn": ["Education", "Admissions", "Training", "Graduation", "Education", "Admissions", "Training", "Graduation"],
  "jgsz_titleCn": ["内设机构", "院属机构"],
  "jgsz_titleEn": ["Internal", "Affiliated"],
  "jgsz_subTitleCn": ["机构名称", "机构简介", "人员", "机构类别", "子机构", "子机构简介", "人员"],
  "jgsz_subTitleEn": ["institution name", "Brief Introduction", "personnel", "Institutions category", "Sub-organization", "Sub-institutional introduction", "personnel"],
}
//中英文切换
changeCNEN(languageObj)

function changeCNEN(languageObj) {
  //topbar
  let topBar = $("li[name = 'lsyg_topBar']")
  let lsyg_title = $("span[name = 'lsyg_title']")
  let zzjg_leftBar = $("li[name = 'zzjg_leftBar']")
  let zzjg_pydw = $("p[name = 'zzjg_leftBar']")
  let zzjgSubTitle = $("span[name = 'zzjgSubTitle']")
  let pydw_subTitle = $("li[name = 'pydw_subTitle' ]")
  let jgsz_title = $("span[name = 'jgsz_title']")
  let jgsz_subTitle = $("th[name = jgsz_subTitle]")

  zzjgSubTitle.each(function (index, item) {
    // // console.log($(item).text())
  })
  //判断中英文
  if (languageStatus == 1) {
    //中文
    //topbar
    topBar.each(function (index, item) {
      $(item).text(languageObj["topBarCn"][index])
    })
    //标题
    lsyg_title.each(function (index, item) {
      $(item).text(languageObj["topBarCn"][index])
    })
    //左标题
    zzjg_leftBar.each(function (index, item) {
      $(item).text(languageObj["zzjg_leftBarCn"][index])
    })

    //子标题
    zzjgSubTitle.each(function (index, item) {
      $(item).text(languageObj["zzjgSubTitleCn"][index])
    })
    //培养单位
    zzjg_pydw.text(languageObj["zzjg_pydwCn"])
    //子标题
    pydw_subTitle.each(function (index, item) {
      $(item).text(languageObj["pydw_subTitleCn"][index])
    })
    //机构设置表格
    jgsz_title.each(function (index, item) {
      $(item).text(languageObj["jgsz_titleCn"][index])
    })
    jgsz_subTitle.each(function (index, item) {
      $(item).text(languageObj["jgsz_subTitleCn"][index])
    })
    //历史沿革 面包屑
    $("dl[name = 'lsyg_bread']").html('当前位置 ：<a href="../subPage/menu.html?prevName=研院概括&prevEname=About&menuId=69">研院概况</a>&bull; 历史沿革')
    $("dl[name = 'yqtj_bread']").html('当前位置 ：<a href="../subPage/menu.html?prevName=研院概括&prevEname=About&menuId=69">研院概况</a> &bull; 院情统计')
    $("dl[name = 'yzjy_bread']").html('当前位置 ：<a href="../subPage/menu.html?prevName=研院概括&prevEname=About&menuId=69">研院概况</a> &bull; 发展定位')
    $("dl[name = 'dzld_bread']").html('当前位置： <a href="../subPage/menu.html?prevName=研院概括&prevEname=About&menuId=69">研院概况</a> &bull; 党政领导')
    $("dl[name = 'jgsz_bread']").html('当前位置：<a href="../subPage/menu.html?prevName=研院概括&prevEname=About&menuId=69">研院概况</a> &bull; 机构单位')
    $("dl[name = 'yybb_bread']").html("当前位置：培养单位 &bull;<i class='yybbTrigger'>研院本部</i>")
    $("dl[name = 'qtdw_bread']").html("当前位置：培养单位 &bull;<i class='pydwTrigger'>其他单位</i> ")
    $("dl[name = 'wyh_bread']").html('当前位置：<a href="../subPage/menu.html?prevName=研院概括&prevEname=About&menuId=69">研院概况</a>&bull; 委员会')

  } else {
    //英文
    //topbar
    topBar.each(function (index, item) {
      $(item).text(languageObj["topBarEn"][index])
    })
    //标题
    lsyg_title.each(function (index, item) {
      $(item).text(languageObj["topBarEn"][index])
    })
    //左标题
    zzjg_leftBar.each(function (index, item) {
      $(item).text(languageObj["zzjg_leftBarEn"][index])
    })
    //培养单位
    zzjg_pydw.text(languageObj["zzjg_pydwEn"])
    //子标题
    pydw_subTitle.each(function (index, item) {
      $(item).text(languageObj["pydw_subTitleEn"][index])
    })
    //历史沿革 面包屑
    $("dl[name = 'lsyg_bread']").html('Current location : <a href="../subPage/menu.html?prevName=研院概括&prevEname=About&menuId=69">Research summary </a>&bull; History')
    $("dl[name = 'yqtj_bread']").html('Current location:  <a href="../subPage/menu.html?prevName=研院概括&prevEname=About&menuId=69">Research summary </a>&bull; Hospital statistics')
    $("dl[name = 'yzjy_bread']").html('Current location:   <a href="../subPage/menu.html?prevName=研院概括&prevEname=About&menuId=69">Research summary </a>&bull;Positioning')
    $("dl[name = 'dzld_bread']").html('Current location:  <a href="../subPage/menu.html?prevName=研院概括&prevEname=About&menuId=69">Research summary </a>&bull; government leadership')
    $("dl[name = 'jgsz_bread']").html('Current location:   <a href="../subPage/menu.html?prevName=研院概括&prevEname=About&menuId=69">Research summary </a>&bull;Institutional unit')
    $("dl[name = 'yybb_bread']").html("Current location:  <i class='yybbTrigger'>institute headquarters</i>")
    $("dl[name = 'qtdw_bread']").html("Current location:  Other units")
    $("dl[name = 'wyh_bread']").html('Current location:  <a href="../subPage/menu.html?prevName=研院概括&prevEname=About&menuId=69">Research summary </a>&bull; Committee')

    //子标题
    zzjgSubTitle.each(function (index, item) {
      $(item).text(languageObj["zzjgSubTitleEn"][index])
    })
    //机构设置表格
    jgsz_title.each(function (index, item) {
      $(item).text(languageObj["jgsz_titleEn"][index])
    })
    jgsz_subTitle.each(function (index, item) {
      $(item).text(languageObj["jgsz_subTitleEn"][index])
    })


  }


  //面包屑trigger事件
  //研院本部
  $('.yybbTrigger').on("click", function (event) {
    $("#zzjg_sub_c_ul>li").eq(0).trigger("click")
  })
  //培养单位
  $('.pydwTrigger').on("click", function (event) {
    $("#zzjg_sub_c_ul>li").eq(1).trigger("click")
  })

}

//历史沿革
function lsyg_ajax() {
  $.ajax({
    type: "POST",
    url: baseUrl + "sys/inst/historylist",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // // console.log("历史沿革")
      // // console.log(res)

      if (res.code == 0) {
        var data = res.page.content
        var timetamp = []
        var content = []
        var timestr = ""

        for (key in data) {
          timetamp.unshift(key)
          content.unshift(data[key])

        }

        // // // console.log(content)
        // 渲染选择区域 
        timetamp.forEach(function (item, index) {
          if (index === 0) {
            timestr += '<li class="item_sel_active threeStep threelsyg"  data-step="threelsyg" data-index="' + index + '">' + item + '</li>'

          } else {
            timestr += '<li class="threeStep threelsyg" data-step="threelsyg" data-index="' + index + '">' + item + '</li>'
          }
        })
      }
      $("#lsyg_timetameUL").append($(timestr))
      //动态渲染可能存在延时，我们在它渲染完毕之后在添加事件
      //给三级级标题增加点击事件
      $(".threeStep").on('click', function (event) {
        //获取data-step 并获取当前dom的索引
        // console.log("三级标题dom事件")
        // var step = event.target.dataset.step
        var step = $(this).data().step
        var index = $(this).data().index
        breadcrumb(step, index)
      })
      //在li创建完成之后调用事件
      item_sel(content)
    },
    err: function (res) {

    }
  })





}
//院情 统计
function yqtj_ajax() {

  $.ajax({
    url: baseUrl + "sys/inst/schInfolist",
    type: "POST",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // // console.log("院情统计")
      // // console.log(res.page)
      if (res.code == 500) {
        return
      }
      if (res.code == 0) {
        if (res.page.content != null) {
          var data = res.page
          var content = data.content.replace(/&amp;nbsp;/g, "&nbsp;")
          $("#yqtj_content").append($('<p>' + content + '</p>'))
        }

      }

    }
  })
}
//发展定位
function yzju_ajax() {
  $.ajax({
    url: baseUrl + "sys/inst/schmessagelist",
    type: "POST",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // // console.log("发展定位")
      // // console.log(res)
      if (res.code == 500) {
        return
      }
      if (res.code == 0) {

        var data = res.page
        var content = data.content.replace(/&amp;nbsp;/g, "&nbsp;")
        $("#yzjy_content").append($('<p>' + content + '</p>'))
      }




    }
  })
}
//党政领导
function zzjg_dzld() {
  $.ajax({
    url: baseUrl + "lead/personnel/list",
    data: {
      language: languageStatus,
    },
    type: "POST",
    success: function (res) {
      // // console.log("党政领导")
      // // console.log(res)
      var data = res.page.list
      if (data.length !== 0) {
        let str = ""
        if (sessionStorage.getItem("CNtoEn") == 1) {
          var more = "更多"
          var resData = "暂无数据"
        } else {
          var more = "MORE"
          var resData = "No Data"
        }
        data.forEach(function (item, index) {
          var content = ""
          if (item.perProfile != null) {
            content = item.perProfile.replace(/&amp;nbsp;/g, "&#10;")
          }
          str += '<div class="zzjq_sub_content clearfix"><div class="zzjq_sub_picture lsyg_fl"><img src="' + item.personnelPictures + '" alt=""></div>'
          str += '<div class="zzjq_sub_context lsyg_rl"><span>' + (item.personnelProfile == null ? "" : item.personnelProfile + '&nbsp;&nbsp;&nbsp;&nbsp;') + '</span>'
          str += '<p style="font-size:14px;color:#222;">' + (item.personnelPositions == null ? "" : item.personnelPositions) + '</p><p style="font-size:14px;color:#222;">' + item.name + '</p><p>' + content + '</p></div></div>'
        })
        $("#zzjg_sub_a").append($(str))


      } else {

        strfalse += '<div class="zzjq_sub_content clearfix"><div class="zzjq_sub_picture lsyg_fl"><p>' + resData + '^-^</p></div></div>'
        $("#zzjg_sub_a").append($(strfalse))
      }
    }

  })
}
// 机构设置
function zzjg_jgsz() {
  $.ajax({
    type: "POST",
    url: baseUrl + "sys/dept/list",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // // console.log("机构设置")
      // // console.log(res)
      var neishe = res[0].nextDept
      var yuanshu = res[1].nextDept
      // 拆分数据 将教研室删除 把公共教研室移动到协同教研室中
      if (yuanshu) {
        var handle = handleNextDept(yuanshu)
      } else {
        var handle = []
      }

      var strNeishe = ""
      var strYuanshu = ""
      neishe.forEach(function (item, index) {
        var _item = item
        var personnelList = ""
        if (languageStatus == 1) {
          var jgszEmpty = "暂无数据"
        } else {
          var jgszEmpty = "No data"
        }
        if (_item.personnelList != null) {
          item.personnelList.forEach(function (item, index) {

            if (_item.personnelList.length == index + 1) {

              personnelList += '<a href="../subPage/detailPage.html?roleId=' + item.id + '&standby=' + item.standby + '&parent=menu_lsyg.html?index=2">' + item.roleName + '</a>'
            } else {

              personnelList += '<a href="../subPage/detailPage.html?roleId=' + item.id + '&standby=' + item.standby + '&parent=menu_lsyg.html?index=2">' + item.roleName + '</a>,&nbsp;&nbsp;'
            }
          })
        }
        strNeishe += '<tr><td style="min-width:100px">' + item.name + '</td><td style="max-width:500px">' + (item.profile == null ? jgszEmpty : item.profile) + '</td>'
        strNeishe += '<td style="min-width:50px">' + (item.personnelList == null ? jgszEmpty : personnelList) + '</td></tr>'

      })
      //nextDept  循环教研室
      handle.forEach(function (item, index) {
        var subIndex = index
        var subItem = item.nextList
        var _item = item
        if (languageStatus == 1) {
          var jgszEmpty = "暂无数据"
        } else {
          var jgszEmpty = "No data"
        }
        // // // console.log(item)
        if (item.nextList == null) {
          var personnelList = ""

          if (_item.personnelList != null) {
            item.personnelList.forEach(function (item, index) {
              if (_item.personnelList.length == index + 1) {

                personnelList += '<a href="../subPage/detailPage.html?roleId=' + item.id + '&standby=' + item.standby + '&parent=menu_lsyg.html?index=2">' + item.roleName + '</a>'
              } else {

                personnelList += '<a href="../subPage/detailPage.html?roleId=' + item.id + '&standby=' + item.standby + '&parent=menu_lsyg.html?index=2">' + item.roleName + '</a>,&nbsp;&nbsp;'
              }
            })
          }

          strYuanshu += '<tr class="yuansu' + subIndex + '" data-id=0><td style="width:100px"><p>' + item.name + '</p></td><td style="width:120px"><p></p></td><td style="max-width:700px">' + (item.profile == null ? jgszEmpty : item.profile) + '</td>'
          strYuanshu += '<td>' + (item.personnelList == null ? jgszEmpty : personnelList) + '</td></tr>'
        } else {
          //nextList 循环各个子教研室
          item.nextList.forEach(function (__item, index) {
            //item 每一个子教研室   _item 第一层   __item  第二层
            var personnelList = ""
            //  && _item.personnelList != null
            // 循环每一个教研室下的人员
            if (__item.personnelList != null) {
              __item.personnelList.forEach(function (item, index) {

                // if (_item.personnelList.length == index + 1) {
                if (__item.personnelList.length == index + 1) {
                  personnelList += '<a href="../subPage/detailPage.html?roleId=' + item.id + '&standby=' + item.standby + '&parent=menu_lsyg.html?index=2">' + item.roleName + '</a>'
                } else {

                  personnelList += '<a href="../subPage/detailPage.html?roleId=' + item.id + '&standby=' + item.standby + '&parent=menu_lsyg.html?index=2">' + item.roleName + '</a>,&nbsp;&nbsp;'
                }
              })
            }
            if (index === 0) {

              strYuanshu += '<tr ><td class="yuansu' + subIndex + '" rowspan=' + subItem.length + ' ><p>' + _item.name + '</p></td><td><p>' + __item.name + '</p></td><td style="max-width:700px">' + (__item.profile == null ? jgszEmpty : __item.profile) + '</td>'
              strYuanshu += '<td>' + (__item.personnelList == null ? jgszEmpty : personnelList) + '</td></tr>'
            } else {

              strYuanshu += '<tr><td><p>' + __item.name + '</p></td><td>' + (__item.profile == null ? jgszEmpty : __item.profile) + '</td>'
              strYuanshu += '<td>' + (__item.personnelList == null ? jgszEmpty : personnelList) + '</td></tr>'
            }

          })




        }




      })
      $("#neishe").html(strNeishe)
      $("#yuanshu").html(strYuanshu)


    },
    err: function (err) {

    }
  })

}

function handleNextDept(data) {
  // // // console.log("处理院属数据")
  //   // // console.log(data)
  var arr = []
  var arr1 = []
  var arr2 = []
  if (data) {
    data.forEach(function (item, index) {
      if (item.name == "教研室") {
        arr1.push(item)
      } else {
        arr.push(item)
      }
      // // // console.log("处理后教研室")
      // // // console.log(arr)
      // // // console.log("数字教研室")
      // // // console.log(arr1)
    })
    arr1.forEach(function (item, index) {
      item.nextList.forEach(function (_item, index) {

        if (_item.name == "公共课教研室") {
          arr2.push(_item)
        }
      })

    })
    //   // // console.log("公共教研室")
    //   // // console.log(arr2)
    //   // // console.log("处理院属数据")
    // // // console.log(arr)

    arr.forEach(function (item, index) {
      // // // console.log("处理后的数据遍历")
      // // // console.log(item)
      if (item.name == "科教协同中心") {
        // // // console.log("协同中心")
        // // // console.log(item)
        // // // console.log("公共教研室")
        // // // console.log(arr2)
        arr[index].nextList = item.nextList.concat(arr2)
      }
    })
  }
  // // // console.log(arr)
  return arr
}
//培养单位//研院本部研究室教育简介
zzjg_yybb_yjsjy()

function zzjg_yybb_yjsjy() {
  var id
  if (languageStatus == 1) {
    id = 813
  } else {
    id = 814
  }

  $.ajax({
    url: baseUrl + "sys/culture/info",
    type: "POST",
    data: {
      id: id
    },
    success: function (res) {
      // // console.log("研院本部-研究室教育简介")
      // // console.log(res)
      if (res.code == 0) {
        if (sessionStorage.getItem("CNtoEn") == 1) {

          var resTitle = "新的定位"
        } else {

          var resTitle = "New positioning"
        }
        if (res.content != null) {
          var data = res.content
          var content = data.content.replace(/&amp;nbsp;/g, "&#10;")
          var desDom = $("#yybb_sub_c_1 .sub_c_1_content_item_yjsjyjj")
          var str = ""

          str = '<h5>' + data.title + ':</h5><p>' + content + '</p>'
          desDom.append($(str))
        }

      }


    },
    err: function (err) {
      // // console.log("请求错误信息")
      // // console.log(err)

    }
  })
}


//研院本部 招生工作list
function zzjg_yybb_zzgz() {
  $.ajax({
    url: baseUrl + "sys/culture/culture/list",
    type: "POST",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // // console.log("研究本源招生工作")
      // // console.log(res)


      var time = new Date().toLocaleDateString()
      var desDom = $("#yybb_sub_c_2")
      if (res.code == 0) {
        var str = ""
        var time = ""
        if (sessionStorage.getItem("CNtoEn") == 1) {
          var resTitle = "暂无数据"
        } else {

          var resTitle = "No Data"
        }
        var data = res.page.list
        if (data.length !== 0) {
          data.forEach(function (item, index) {
            if (item.createTime != "") {
              time = item.createTime.split(' ')[0]
            }
            var currDate = ""
            if (item.createTime != null) {
              currDate = item.createTime.split(" ")[0]
            }
            str += '<li class="sub_c_1_content_item_list" onclick="zzjg_yybb_info(' + item.id + ')"><span class="lsyg_fl">'
            str += '' + item.title + '</span><span class="lsyg_rl">' + currDate + '</span></li>'
          })

        } else {

          str += '<li  class="" ><span class="lsyg_fl">' + resTitle + '</span>'
          str += '<span class="lsyg_rl"></span></li>'

        }

      }
      desDom.empty()
      desDom.append($(str))
      yjbb_tabLIst()
    },
    err: function (err) {

    }
  })
}
//研院本部 培养工作list
function zzjg_yybb_pygz() {
  $.ajax({
    url: baseUrl + "sys/culture/culture/culturelist",
    type: "POST",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // // console.log("研院本部培养工作")
      // // console.log(res)

      var time = new Date().toLocaleDateString()
      var desDom = $("#yybb_sub_c_2")
      if (res.code == 0) {
        var str = ""
        var time = ""
        if (sessionStorage.getItem("CNtoEn") == 1) {
          var resTitle = "暂无数据"
        } else {

          var resTitle = "No Data"
        }
        var data = res.page.list
        if (data.length !== 0) {

          data.forEach(function (item, index) {
            if (item.createTime != "") {
              time = item.createTime.split(' ')[0]
            }
            var currDate = ""
            if (item.createTime != null) {
              currDate = item.createTime.split(" ")[0]
            }
            str += '<li class="sub_c_1_content_item_list" onclick="zzjg_yybb_info(' + item.id + ')"><span class="lsyg_fl">'
            str += '' + item.title + '</span><span class="lsyg_rl">' + currDate + '</span></li>'
          })

        } else {

          str += '<li class="" >'
          str += '<span class="lsyg_fl">' + resTitle + '</span><span class="lsyg_rl"></span></li>'

        }

      }
      desDom.empty()
      desDom.append($(str))
      yjbb_tabLIst()
    },
    err: function (err) {

    }
  })
}
//研院本部 毕业工作list
function zzjg_yybb_bygz() {
  $.ajax({
    url: baseUrl + "sys/culture/culture/graduationlist",
    type: "POST",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // // console.log("毕业工作")
      // // console.log(res)
      var data = res.page.list
      var time = new Date().toLocaleDateString()
      if (sessionStorage.getItem("CNtoEn") == 1) {
        var resTitle = "暂无数据"
      } else {

        var resTitle = "No Data"
      }
      var desDom = $("#yybb_sub_c_2")
      if (res.code == 0) {
        var str = ""
        var time = ""
        var data = res.page.list
        if (data.length !== 0) {

          data.forEach(function (item, index) {
            if (item.createTime != "") {
              time = item.createTime.split(' ')[0]
            }
            var currDate = ""
            if (item.createTime != null) {
              currDate = item.createTime.split(" ")[0]
            }
            str += '<li class="sub_c_1_content_item_list" onclick="zzjg_yybb_info(' + item.id + ')"><span class="lsyg_fl">'
            str += '' + item.title + '</span><span class="lsyg_rl">' + currDate + '</span></li>'
          })
        } else {
          str += '<li class="" >'
          str += '<span class="lsyg_fl">' + resTitle + '</span><span class="lsyg_rl"></span></li>'

        }




      }
      desDom.empty()
      desDom.append($(str))
      yjbb_tabLIst()
    },
    err: function (err) {

    }
  })
}
//研院本部 tab_info
function zzjg_yybb_info(id) {
  $.ajax({
    url: baseUrl + "sys/culture/getinfo",
    type: "POST",
    data: {
      id: id,
    },
    success: function (res) {
      // // console.log("研院本部详情info")
      // // console.log(res)
      let desDom = $("#zzjg_sub_c_detail .zzjq_sub_c_1_content")
      if (res.code == 0) {
        var str = ""
        var date = new Date().toLocaleDateString()
        let data = res.content
        if (sessionStorage.getItem("CNtoEn") == 1) {
          var resTitle = "暂无数据"
          var Time = "时间"

        } else {
          var Time = "Time"
          var resTitle = "No Data"

        }
        if (data != null) {

          let createTime = ""
          let content = ""
          if (data.createTime != "") {
            createTime = data.createTime.split(" ")[0]
            // // console.log(createTime)
          }
          if (data.content != "") {
            content = data.content.replace(/&amp;nbsp;/g, "&#10;")
          }


          str += '<div class="sub_detail_content" style="text-align:center;"><h3>' + data.title + '</h3><div class="sub_date" style="text-align:center;">'
          str += '<span>' + createTime + '</span><i></i></div><p>' + content + '</p></div>'
        } else {

          str += '<div class="sub_detail_content"><h3></h3><div class="sub_date">'
          str += '<span>' + Time + '</span><i></i> </div><p>' + resTitle + '</p></div>'

        }



      }


      desDom.empty()
      $(desDom).append($(str))
    }
  })
}
// 其他单位 tab切换下的list 切换
function qtdw_tabList() {
  var sub_list = $("#qtdw_sub_c_2>ul")
  sub_list.on("click", "li", function () {
    var id = $(this).data("id")

    $("#" + id)
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
  })
}
// 其他单位 渲染

//其他单位整体list
zzjg_qtdw_list()

function zzjg_qtdw_list() {
  $.ajax({
    url: baseUrl + "sys/dept/nextlist",
    type: "POST",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // // console.log("其他单位整体list")
      // // console.log(res)
      //这里的渲染的list 需要给子页面传入parentID
      //给每一个list设置点击事件并传入parentID
      var desDom = $("#zzjg_sub_c_2 .zzjq_sub_c_2_content>ul")
      var str = ""
      res.forEach(function (item, index) {
        str += '<li data-id="zzjg_sub_c_2_1" onclick="zzjg_qtdw_getList(' + item.deptId + ')"><span>' + item.name + '</span></li>'
      })

      desDom.append($(str))

    },
    err: function (err) {

    }
  })
}

//获取父级链接的pid请求其他子标题的list 或info
//其他单位//研院本部研究室教育简介
function zzjg_qtdw_getList(Pid) {
  // // console.log("父级机构Deptid")
  // // console.log(Pid)

  zzjg_pydw_yjsjy(Pid)

  function zzjg_pydw_yjsjy(Pid) {
    $.ajax({
      url: baseUrl + "sys/culture/getdeptinfo",
      type: "POST",
      data: {
        parentId: Pid,
        language: languageStatus,
      },
      success: function (res) {
        // // console.log("其他单位简介信息")
        // // console.log(res)
        var desDom = $("#qtdw_sub_c_1 .sub_c_1_content_item_yjsjyjj")
        var str = ""
        if (res.code == 0) {
          var data = res.content
          if (sessionStorage.getItem("CNtoEn") == 1) {
            var time = "时间"

            var Dataa = "暂无数据"
          } else {
            var time = "time"

            var Dataa = "No data"
          }
          if (data != null) {
            let createTime = ""
            let content = ""
            if (data.createTime != "") {
              createTime = data.createTime.split(" ")[0]
            }
            if (data.content != "") {
              content = data.content.replace(/&amp;nbsp;/g, "&#10;")
            }

            str += '<div class="sub_detail_content" style="text-align:center;"><h3>' + data.title + '</h3><div class="sub_date">'
            str += '<span>' + time + ':</span><i>' + createTime + '</i> </div>'
            str += '<p>' + content + '</p></div>'
          } else {

            str += '<div class="sub_detail_content"><h3>' + Dataa + '</h3><div class="sub_date">'
            str += '<span>' + time + ':</span><i></i></div>'
            str += '<p>' + Dataa + '</p></div>'
          }
        }
        if (res.content == null) {

        }
        desDom.empty()
        desDom.append($(str))
        $(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(0).trigger("click")
      },
      err: function (err) {
        // // console.log("其他单位研院本部研究室教育简介错误信息")
        // // console.log(err)
      }
    })
  }
  //其他单位 招生工作 为给子列表设置详情点击事件
  //由于每次进入子菜单都会给每一个tab上事件，这样事件会累加起来
  //所以需要每一次进来之前解除解除每个元素上的事件


  $(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(1).on("click", function (event) {
    zzjg_qtdw_zzgz(Pid)
  })

  $(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(2).on("click", function (event) {
    zzjg_qtdw_pygz(Pid)
  })

  $(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(3).on("click", function (event) {
    zzjg_qtdw_bygz(Pid)
  })

  function zzjg_qtdw_zzgz(Pid) {
    $.ajax({
      url: baseUrl + "sys/culture/culture/ceptlist",
      type: "POST",
      data: {
        language: languageStatus,
        parentId: Pid
      },
      success: function (res) {
        // // console.log("其他单位招生工作")
        // // console.log(res)
        // // console.log(Pid)
        if (sessionStorage.getItem("CNtoEn") == 1) {
          var resTitle = "暂无数据"
        } else {
          var resTitle = "No Data"
        }
        var desDom = $("#qtdw_sub_c_2>ul")
        if (res.code == 0) {
          var data = res.page.list
          var str = ""
          if (data.length == 0) {

            str += '<li data-id="zzjg_sub_qtdw_detail" class="" >'
            str += '<span class="lsyg_fl">' + resTitle + '</span><span class="lsyg_rl"></span></li>'
          } else {
            var time = ""
            var title = ""

            data.forEach(function (item, index) {
              if (item.createTime != "") {
                time = item.createTime.split(' ')[0]
              }
              if (item.title != "") {
                title = item.title.substr(0, 15)
                title += "..."
              }
              var currDate = ""
              if (item.createTime != null) {
                currDate = item.createTime.split(" ")[0]
              }
              str += '<li data-id="zzjg_sub_qtdw_detail" class="sub_c_1_content_item_list" onclick="zzjg_qtdw_info(' + item.id + ')">'
              str += '<span class="lsyg_fl">' + title + '</span><span class="lsyg_rl">' + currDate + '</span></li>'
            })
          }



        }
        desDom.empty()
        desDom.append($(str))
        qtdw_tabList()
      },
      err: function (err) {

      }
    })
  }

  function zzjg_qtdw_pygz(Pid) {
    $.ajax({
      url: baseUrl + "sys/culture/culture/deptculturelist",
      type: "POST",
      data: {
        language: languageStatus,
        parentId: Pid
      },
      success: function (res) {
        // // console.log("培养工作")
        // // console.log(res)
        // // console.log(Pid)
        if (sessionStorage.getItem("CNtoEn") == 1) {
          var resTitle = "暂无数据"
        } else {
          var resTitle = "No Data"
        }
        var data = res.page.list
        var time = new Date().toLocaleDateString()
        var desDom = $("#qtdw_sub_c_2>ul")
        if (res.code == 0) {
          var data = res.page.list
          var str = ""
          if (data.length == 0) {

            str += '<li data-id="zzjg_sub_qtdw_detail" class="" >'
            str += '<span class="lsyg_fl">' + resTitle + '</span><span class="lsyg_rl"></span></li>'

          } else {
            var time = ""
            var title = ""

            data.forEach(function (item, index) {
              if (item.createTime != "") {
                time = item.createTime.split(' ')[0]
              }
              if (item.title != "") {
                title = item.title.substr(0, 15)
                title += "..."
              }
              var currDate = ""
              if (item.createTime != null) {
                currDate = item.createTime.split(" ")[0]
              }
              str += '<li data-id="zzjg_sub_qtdw_detail" class="sub_c_1_content_item_list" onclick="zzjg_qtdw_info(' + item.id + ')">'
              str += '<span class="lsyg_fl">' + title + '</span><span class="lsyg_rl">' + currDate + '</span></li>'

            })
          }



        }
        desDom.empty()
        desDom.append($(str))
        qtdw_tabList()

      },
      err: function (err) {

      }
    })
  }

  function zzjg_qtdw_bygz(Pid) {
    $.ajax({
      url: baseUrl + "sys/culture/culture/graduationlist",
      type: "POST",
      data: {
        language: languageStatus,
        parentId: Pid
      },
      success: function (res) {
        // // console.log("毕业工作")
        // // console.log(res)
        // // console.log(Pid)

        var data = res.page.list
        var time = new Date().toLocaleDateString()
        if (sessionStorage.getItem("CNtoEn") == 1) {
          var resTitle = "暂无数据"
        } else {
          var resTitle = "No Data"
        }
        var desDom = $("#qtdw_sub_c_2>ul")
        if (res.code == 0) {
          var data = res.page.list
          var str = ""
          if (data.length == 0) {

            str += '<li data-id="zzjg_sub_qtdw_detail" class="" >'
            str += '<span class="lsyg_fl">' + resTitle + '</span><span class="lsyg_rl"></span></li>'
          } else {
            var time = ""
            var title = ""

            data.forEach(function (item, index) {
              if (item.createTime != "") {
                time = item.createTime.split(' ')[0]
              }
              if (item.title != "") {
                title = item.title.substr(0, 15)
                title += "..."
              }
              var currDate = ""
              if (item.createTime != null) {
                currDate = item.createTime.split(" ")[0]
              }
              str += '<li data-id="zzjg_sub_qtdw_detail" class="sub_c_1_content_item_list" onclick="zzjg_qtdw_info(' + item.id + ')">'
              str += '<span class="lsyg_fl">' + title + '</span><span class="lsyg_rl">' + currDate + '</span></li>'

            })
          }



        }
        desDom.empty()
        desDom.append($(str))
        qtdw_tabList()
      },
      err: function (err) {

      }
    })
  }

}

//其他单位 tab_info
function zzjg_qtdw_info(id) {
  $.ajax({
    url: baseUrl + "sys/culture/getinfo",
    type: "POST",
    data: {
      id: id,
    },
    success: function (res) {
      // // console.log("研院本部info")
      // // console.log(res)
      if (sessionStorage.getItem("CNtoEn") == 1) {
        var resTitle = "暂无数据"
        var Time = "时间"

      } else {
        var Time = "Time"
        var resTitle = "No Data"

      }

      let desDom = $("#zzjg_sub_qtdw_detail .zzjq_sub_c_1_content")
      if (res.code === 0) {
        var str = ""
        let data = res.content

        if (data != null) {
          let content = data.content.replace(/&amp;nbsp;/g, "&#10;")
          let createTime = data.createTime.split(" ")[0]
          str += '<div class="sub_detail_content" style="text-align:center;"><h3>' + data.title + '</h3><div class="sub_date">'
          str += '<span>' + Time + ':</span><i>' + createTime + '</i></div>'
          str += '<p>' + content + '</p></div>'
        } else {

          str += '<div class="sub_detail_content"><h3>' + resTitle + '</h3>'
          str += '<div class="sub_date"></div><p>' + resTitle + '</p></div>'
        }
      }

      desDom.empty()
      $(desDom).html($(str))
    }
  })
}

// 委员会
function zzjg_wyh() {
  $.ajax({
    type: "POST",
    url: baseUrl + "sys/dept/committee",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // // console.log("委员会")
      // // console.log(res)
      // 获取列表dom
      if (languageStatus == 1) {
        var jgszEmpty = "暂无数据"
      } else {
        var jgszEmpty = "No data"
      }
      var str = ""
      res.forEach(function (_item, index) {
        var personnelList = ""

        if (_item.personnelList != null) {
          _item.personnelList.forEach(function (item, index) {

            if (_item.personnelList.length == index + 1) {
              personnelList += '<a href="../subPage/detailPage.html?roleId=' + item.id + '&parent=menu_lsyg.html?index=2">' + item.roleName + '</a>'
            } else {
              personnelList += '<a href="../subPage/detailPage.html?roleId=' + item.id + '&parent=menu_lsyg.html?index=2">' + item.roleName + '</a>,'
            }
          })
        }
        str += '<div class="zzjq_wyh_content clearfix"><div class="lsyg_fl"><span>' + _item.name + '</span>'
        str += '</div><div class="lsyg_rl"><span>' + (_item.personnelList == null ? jgszEmpty : personnelList) + '</span></div></div>'
      })

      $(".zzjq_wyh_context").append($(str))


    },
    err: function (err) {
      // // console.log(err)
    }
  })
}
//给二级标题增加点击事件
$(".twoStep").on('click', function (event) {
  //获取data-step 并获取当前dom的索引
  // console.log("二级标题dom事件")
  // var step = event.target.dataset.step
  var step = $(this).data().step
  var index = $(this).data().index
  breadcrumb(step, index)
})
//给三级级标题增加点击事件
$(".threeStep").on('click', function (event) {
  //获取data-step 并获取当前dom的索引
  // console.log("三级标题dom事件")
  // var step = event.target.dataset.step
  var step = $(this).data().step
  var index = $(this).data().index
  breadcrumb(step, index)
})

/*
* @parma  url 网站地址
  @parma currStep 层级
  @parma currIndex 索引
*/
function breadcrumb(currStep, currIndex) {
  //判断url是否存在层级记录  大于-1 有 小于-1 没有
  // // console.log(decodeURI(window.location.href))
  if (window.location.href.indexOf("#") > -1) {
    //1.获取当前层级 获取当前点击对象的data-step 层级关系
    //2.判断当前层级 更新当前层级索引
    //3.如果有后续层级删除
    //获取当前的url
    // // console.log("currStep")
    // // console.log(currStep)
    // // console.log("currIndex")
    // // console.log(currIndex)
    var currUrlIndex = window.location.href.indexOf("#")
    var currUrl = window.location.href.slice(currUrlIndex + 1)
    //判断是否包含当前的层级
    if (currUrl.indexOf(currStep) > -1) {
      //包含当前层级
      // // console.log("包含step的url")
      // // console.log(currUrl)
      //将当前的url层级分割成数组便于处理
      var currUrlArr = currUrl.split("|")
      // // console.log("currUrlArr")
      // // console.log(currUrlArr)
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
          // // console.log("tempArr")
          // // console.log(tempArr)
          // // console.log("currDomIndex")
          // // console.log(currDomIndex)
          //分割数组进行用层级data-step判断当前点击的层级，修改其索引
          if (tempArr[0] == currStep) {
            //如果匹配当前层级后续层级不在填写到url中 我们已｜分割方便后续使用数组分割
            currDomIndex = false
            currStr += tempArr[0] + "=" + currIndex + "|"
            // // console.log("str")
            // // console.log(currStr)
            return
          } else {
            //如果处于当前层级的前面我们保留
            if (currDomIndex) {
              // // console.log("不匹配当前元素执行了")
              currStr += item + "|"
            }

          }

        }
      })
      // // console.log("updataStr")
      // // console.log(currStr)
      //使用新的字符串替代#号后面的所有字符串
      var updataUrlIndex = window.location.href.indexOf("#") + 1
      window.location.href = window.location.href.slice(0, updataUrlIndex) + currStr

    } else {
      //不包含当前层级 我们在后面追加当前的操作
      // // console.log("不包含step的url")
      // // console.log(currUrl)
      window.location.href += currStep + '=' + currIndex + '|'
    }

  } else {
    //0.增加#锚点标记
    //1.获取当前层级添加
    //如果当前页面中还没有#锚点，我们需要增加锚点标示符。
    //*** 给location.search 修改时会自动刷新页面*/
    if (!window.proformance) {
      window.location.href += '#' + currStep + '=' + currIndex + '|'
      // // console.log("else 执行")
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
      // // console.log("operatPath")
      // // console.log(operatPath)
      var operatPathArr = operatPath.split("|")
      if (operatPathArr.length > 0) {
        operatPathArr.forEach(function (item, index) {
          if (item != "") {
            var tempArr = item.split("=")
            // // console.log("反显")
            // // console.log('.' + tempArr[0] + tempArr[1])
            if (tempArr[0] == "two") {
              // // console.log($('.' + tempArr[0] + 'Step'))
              $('.' + tempArr[0] + 'Step').eq(tempArr[1]).trigger("click")
            } else {
              // // console.log('三级索引' + tempArr[1])
              // // console.log($('.' + tempArr[0]).eq(tempArr[1]))
              $('.' + tempArr[0]).eq(tempArr[1]).trigger("click")
            }

          }
        })
      }
    }


  }
}
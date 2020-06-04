$(function () {
  //设置培养单位_点击哨兵
  var pydwIsClick = false
  var secoundUl_isclick = false
  /**tab栏切换效果 */
  //tab栏函数
  lsyg_tab()
  //历史沿革子tab栏执行
  item_sel()
  //组织架构
  zzjg_tab()
  //培养单位组织二级单位
  pydw_slide()
  //研究本部子菜单事件
  yjbb_event()
  //其他单位子菜单事件
  qtdw_event()
  //其他单位子菜单子tab事件
  qtdw_sub_event()
  //设置默认点击
  li_trigger()
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
  /**
   * item_sel tab栏切换效果
   */
  function item_sel() {
    var item_sel = $('.menu_lsyg .content_item .item_sel')
    var context_items = $(".menu_lsyg .content_item .item_context .context_item")
    //鼠标更改为小手
    $(item_sel).on("mouseenter", "li", function () {
      $(this).css({
        cursor: "pointer"
      })
    })
    $(item_sel).on("click", "li", function () {
      //item_sel切换效果
      $(this)
        .addClass("item_sel_active")
        .siblings()
        .removeClass("item_sel_active")

      //item的内容切换
      var index = $(this).index()
      $(context_items)
        .eq(0)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
    })
  }
  //组织架构子tab栏执行
  function zzjg_tab() {
    // var zzjg_tabs = $('.menu_lsyg .content .item .left_menu')
    // //鼠标更改为小手
    // $(zzjg_tabs).on("mouseenter", "li", function () {
    //   $(this).css({
    //     cursor: "pointer"
    //   })
    // })
    // $(zzjg_tabs).on("click", 'li', function () {
    //   var id = $(this).data("id")
    //   if (id == "zzjg_sub_c") return
    //   $('#' + id)
    //     .addClass("content_item_active")
    //     .siblings()
    //     .removeClass("content_item_active")
    // })



  }
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
      if (secoundUl_isclick === false && navName === "培养单位" || navName === "Trai"  ) {
       
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
        // console.log("else")
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
      }else {
        $('#' + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
      }
   
    })







  }



  //培训单位子菜单事件
  function pydw_slide() {
    var firstLi = $("#zzjg_sub_c_sub")
    var secondUl = $("#zzjg_sub_c_ul")
    var arrow = $("#zzjg_sub_c_arrow")

    $(firstLi)
      .on('click', function (e) {
        if (!pydwIsClick) {
          $(this).css({
            "height": "180px"
          })
          $(secondUl)
            .css("display", "block")
          $(arrow).css({"transform":"rotate(180deg)",'top':'10px'})
          pydwIsClick = true
        } else {
          $(this).css({
            "height": "35px"
          })
          $(secondUl)
            .css("display", "none")
          $(arrow).css({"transform":"rotate(0deg)",'top':'18px'})
          pydwIsClick = false
        }
      })
    ///培养单位子菜单设置li设置事件
    $('#zzjg_sub_c_ul').on("click", "li", function (event) {
      //组织事件冒泡
      event.stopPropagation();
      var id = $(this).data("id")
      //清除父级样式
      $("#zzjg_sub_c")
        .removeClass("content_item_active")
      //显示当前子页面并清除同级页面
      $("#" + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
    })
  }
  //研究本部3级菜单事件设置
  function yjbb_event() {
    var tab = $("#zzjg_sub_c_1 .zzjq_sub_c_1_content .sub_c_1_tab")
    var items = $("#zzjg_sub_c_1 .zzjq_sub_c_1_content .sub_c_1_content .sub_c_1_content_item")
    $(tab).on("click", "li", function () {
      var index = $(this).index()
      $(items)
        .eq(index)
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
  //其他单位3级菜单事件设置
  function qtdw_sub_event() {
    var lis = $(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab li")
    var items = $(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_content .sub_c_1_content_item")
    // 获取子页面的所有li 和 显示框对应
    // 给每一个li设置点击事件 让与之对应的显示框显示_
    //  这里使用lis数组的索引，对应的就是获取显示框数组的索引
    $.each(lis, function (index, item) {
      $(item).on("click", function () {
        $(items)
          .eq(index)
          .addClass("content_item_active")
          .siblings()
          .removeClass("content_item_active")
      })
    })

  }

//设置子页面默认展示效果
function li_trigger() {

  var str = window.location.href
  var index = str.indexOf("=")
  var subIndex = str.indexOf("&")
  var id = str.substr(index + 1, 1)
  // console.log("id")
  // console.log(id)

  $('.content .title>ul>li').eq(id).trigger("click")
  if (subIndex !== -1) {
    var subKey = str.substr(subIndex + 6, 4)
    // console.log("subKey")
    // console.log(subKey)
    if (subKey == "pydw") {
      $("#zzjg_sub_c_sub").trigger("click")
      $("#zzjg_sub_c_sub ul>li").eq(0).trigger("click")
    } else if (subKey == "jgsz") {
      $("#pydw_jgsz_defClick").trigger("click")
    }



  }

}



})


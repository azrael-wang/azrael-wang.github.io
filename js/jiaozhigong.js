$(function () {
  //设置培养单位_点击哨兵
  var pydwIsClick = false
  /**tab栏切换效果 */
  //顶部tab栏函数
  kygk_tab()
  //科研团队
  kytd_tab()
  //右侧显示区域点击事件
  xwxk_tab()

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
      //添加子菜单默认点击事件
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

    //鼠标更改为小手
    $(zzjg_tabs).on("mouseenter", "li", function () {
      $(this).css({
        cursor: "pointer"
      })
    })
    $(zzjg_tabs).on("click", 'li', function () {
      var id = $(this).data("id")
      $(this)
        .addClass("left_menu_hover")
        .siblings()
        .removeClass("left_menu_hover")

      $('#' + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
    })

  }

  function xwxk_tab() {
    var conta = $(".zzjg_sub .right_view .sub_content>ul")
    var contimg = $(".zzjg_sub .right_view .sub_content_img_style>ul")
    $(conta).on("click", "li", function () {
      var id = $(this).data("id")

      $("#" + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
      return
    })
    $(contimg).on("click", "li", function () {
      var id = $(this).data("id")

      $("#" + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
      return
    })

    //设置子菜单点击事件															    js
    var subs = $(".is_sub_tab .right_view ul")
    $(subs).on("click", "li", function () {
      $(this)
        .css({
          "cursor": "pointer"
        })
        .addClass("sub_tab")
        .siblings()
        .removeClass("sub_tab")
    })
  }
  //设置默认展示
  li_trigger()

  function li_trigger() {
    $('.content .title>ul>li').eq(0).trigger("click")
    var str = window.location.href
    var index = str.indexOf("=")
    var subStr = str.substr(index + 1)
		var subINdex = subStr.indexOf("#")
		var id = subStr.substr(0,subINdex)
    $('.menu_lsyg_wrap .title>ul>li').eq(id).trigger("click")
    //默认点击日常管理-后勤条件
    $('.hqtjTriggerFirst').eq(0).trigger('click')
  }

  /********ajax**********/
})
var languageStatus = sessionStorage.getItem("CNtoEn")
var loginUserid = sessionStorage.getItem("loginUserId")
//下载中心
jzg_download_list()

function jzg_download_list() {
  $.ajax({
    url: baseUrl + "sys/staff/staff/downlist",
    type: "POST",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // console.log("下载中心")
      // console.log(res)
      let desDom = $("#xiazzx_sub_a .right_view .sub_content>ul")
      if (res.code === 0) {

        var data = res.page.list
        var str = ""
        if (data.length !== 0) {
          data.forEach(function (item, index) {
            var time = ""
            var title = ""
            // let crumb = ""
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "下载中心"
            } else {
              crumb = "Download Center"
            }
            if (item.title != "") {
              title = item.title
            }
            if (item.createTime != null) {
              time = item.createTime.split(" ")[0]
            }
            if (item.createTime != null) {
              var currDate = item.createTime.split(" ")[0]
            }
            str += '<li data-id="xiazzx_sub_a_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivexzgl fiveStep"   data-step="fivexzgl" data-index="'+ index +'" onclick="jzg_download_info(' + item.id + ')"><span>' + title + '</span><i>' + currDate + '</i></li>'
          })

          desDom.html(str)
          fiveMenuClickEvent()
        } else {

          let crumb = ""
          if (sessionStorage.getItem("CNtoEn") == 1) {
            crumb = "下载中心"
            var temp = "暂无数据"
          } else {
            crumb = "Download Center"
            var temp = "No data"
          }

          str += '<li class="kxyj_sub_a_0_item  sub_info_mange " ><span>' + temp + '</span><i></i></li>'
          desDom.html(str)
        }


      }



    }
  })
}
// 规章制度
jzg_gzzd_list()

function jzg_gzzd_list() {
  $.ajax({
    url: baseUrl + "sys/staff/staff/systemlist",
    type: "POST",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // console.log("规章制度")
      // console.log(res)
      let desDom = $("#guizzd_sub_a .right_view .sub_content>ul")
      if (res.code === 0) {

        var data = res.page.list
        // console.log("规章制度")
        // console.log(data)
        var str = ""
        if (data.length !== 0) {

          data.forEach(function (item, index) {

            var time = ""
            var title = ""
            let crumb = ""
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "规章制度"
            } else {
              crumb = "Rules and regulations"
            }
            if (item.title != "") {
              title = item.title

            }
            if (item.createTime != null) {
              time = item.createTime.split(" ")[0]
            }
            if (item.createTime != null) {
              var currDate = item.createTime.split(" ")[0]
            }
            str += '<li data-id="guizzd_sub_a_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivegzzd fiveStep"   data-step="fivegzzd" data-index="'+ index +'" onclick="jzg_gzzd_info(' + item.id + ',1)"><span>' + title + '</span><i>' + currDate + '</i></li>'

          })

          desDom.html(str)
          fiveMenuClickEvent()
        } else {

          let crumb = ""
          if (sessionStorage.getItem("CNtoEn") == 1) {
            crumb = "规章制度"
            var temp = "暂无数据"
          } else {
            crumb = "Rules and regulations"
            var temp = "No data"
          }

          str += '<li class="kxyj_sub_a_0_item  sub_info_mange " ><span>' + temp + '</span><i></i></li>'
          desDom.html(str)
        }


      }


    }
  })
}
//  办公办事 通知信息
jzg_tzgg_list()

function jzg_tzgg_list() {
  $.ajax({
    url: baseUrl + "sys/staff/staff/list",
    type: "POST",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // console.log("通知消息")
      // console.log(res)
      let desDom = $("#tongzxx_sub_a .right_view .sub_content>ul")
      if (res.code === 0) {

        var data = res.page.list
        // console.log("通知消息")
        // console.log(data)
        var str = ""
        if (data.length !== 0) {

          data.forEach(function (item, index) {

            var time = ""
            var title = ""
            let crumb = ""
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "通知消息"
            } else {
              crumb = "Notification message"
            }
            if (item.title != "") {
              title = item.title

            }
            if (item.createTime != null) {
              time = item.createTime.split(" ")[0]
            }
            if (item.createTime != null) {
              var currDate = item.createTime.split(" ")[0]
            }
            str += '<li data-id="tongzxx_sub_a_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix" onclick="jzg_tzgg_info(' + item.id + ',1)"><span>' + title + '</span><i>' + currDate + '</i></li>'
          })
          desDom.append(str)
        } else {

          let crumb = ""
          if (sessionStorage.getItem("CNtoEn") == 1) {
            crumb = "通知消息"
            var temp = "暂无数据"
          } else {
            crumb = "Notification message"
            var temp = "No data"
          }


          str += '<li class="kxyj_sub_a_0_item  sub_info_mange " ><span>' + temp + '</span><i></i></li>'
          desDom.append(str)
        }


      }

    }
  })
}
// 办公办事list 
// 后勤保障
function jzg_hqtj_info() {
  if (loginUserid) {
    $.ajax({
      url: baseUrl + "sys/staff/logistics",
      type: "POST",
      data: {
        language: languageStatus,
        type: 301,
        id: loginUserid
      },
      success: function (res) {
        // console.log("后勤条件")
        // console.log(res)
        let desDom = $("#tongzxx_sub_c .right_view .sub_content>ul")
        if (res.code == 0) {
          var data = res.page.list
          let str = ""
          if (data.length !== 0) {
            data.forEach(function (item, index) {
              var title = ""
              if (item.title != "") {
                title += item.title.substr(0, 10)
              }
              if (item.jumpPath == null || item.jumpPath == "") {
                str += '<li data-id="tongzxx_sub_a_1"  class="fivehqbz fiveStep"  data-step="fivehqbz" data-index="'+ index +'"  onclick="jzg_tzgg_info(' + item.id + ',1)"><img src="' + item.remark + '" alt=""><span>' + title + '</span></li>'
              } else {
                str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><img src="' + item.remark + '" alt=""><span>' + title + '</span></a></li>'
              }
            })
            
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            if (sessionStorage.getItem("CNtoEn") == 1) {
              var temp = "暂无数据"
            } else {
              var temp = "No Data"
            }

            str += '<li  "><img src="" alt=""><span><a href="#">' + temp + '</a></span></li>'
            desDom.html(str)
          }
        }


      }
    })
  } else {
    $.ajax({
      url: baseUrl + "sys/staff/logistics",
      type: "POST",
      data: {
        language: languageStatus,
        type: 301,
      },
      success: function (res) {
        // console.log("后勤条件")
        // console.log(res)
        let desDom = $("#tongzxx_sub_c .right_view .sub_content>ul")
        if (res.code == 0) {
          var data = res.page.list
          let str = ""
          if (data.length !== 0) {
            data.forEach(function (item, index) {
              var title = ""
              if (item.title != "") {
                title += item.title.substr(0, 10)
              }
              if (item.jumpPath == null || item.jumpPath == "") {
                str += '<li data-id="tongzxx_sub_a_1"  class="fivehqbz fiveStep"  data-step="fivehqbz" data-index="'+ index +'"  onclick="jzg_tzgg_info(' + item.id + ',1)"><img src="' + item.remark + '" alt=""><span>' + title + '</span></li>'
              } else {
                str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><img src="' + item.remark + '" alt=""><span>' + title + '</span></a></li>'
              }
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            if (sessionStorage.getItem("CNtoEn") == 1) {
              var temp = "暂无数据"
            } else {
              var temp = "No Data"
            }

            str += '<li  "><img src="" alt=""><span><a href="#">' + temp + '</a></span></li>'
            desDom.empty()
            desDom.append(str)
          }
        }


      }
    })
  }

}
// 其他业务
function jzg_zfbz_info() {
  if (loginUserid) {
    $.ajax({
      url: baseUrl + "sys/staff/housing",
      type: "POST",
      data: {
        language: languageStatus,
        type: 302,
        id: loginUserid
      },
      success: function (res) {
        // console.log("其他业务")
        // console.log(res)
        let desDom = $("#tongzxx_sub_d .right_view .sub_content>ul")
        if (res.code == 0) {
          var data = res.page.list
          let str = ""
          if (data.length !== 0) {
            data.forEach(function (item, index) {
              var title = ""
              if (item.title != "") {
                title += item.title.substr(0, 10)

              }
              if (item.jumpPath == null || item.jumpPath == "") {
                str += '<li data-id="tongzxx_sub_a_1"  class="fiveqtyw fiveStep"  data-step="fiveqtyw" data-index="'+ index +'" onclick="jzg_tzgg_info(' + item.id + ',4)"><img src="' + item.remark + '" alt=""><span>' + title + '</span></li>'
              } else {
                str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><img src="' + item.remark + '" alt=""><span>' + title + '</span></a></li>'
              }
            })
            desDom.html(str)
            fiveMenuClickEvent()

          } else {
            if (sessionStorage.getItem("CNtoEn") == 1) {
              var temp = "暂无数据"
            } else {
              var temp = "No Data"
            }

            str += '<li  "><img src="" alt=""><span><a href="#">' + temp + '</a></span></li>'
            desDom.empty()
            desDom.append(str)
          }
        }
      }
    })
  } else {
    $.ajax({
      url: baseUrl + "sys/staff/housing",
      type: "POST",
      data: {
        language: languageStatus,
        type: 302,
      },
      success: function (res) {
        // console.log("其他业务")
        // console.log(res)
        let desDom = $("#tongzxx_sub_d .right_view .sub_content>ul")
        if (res.code == 0) {
          var data = res.page.list
          let str = ""
          if (data.length !== 0) {
            data.forEach(function (item, index) {
              var title = ""
              if (item.title != "") {
                title += item.title.substr(0, 10)

              }
              if (item.jumpPath == null || item.jumpPath == "") {
                str += '<li data-id="tongzxx_sub_a_1"  class="fiveqtyw fiveStep"  data-step="fiveqtyw" data-index="'+ index +'"  onclick="jzg_tzgg_info(' + item.id + ',4)"><img src="' + item.remark + '" alt=""><span>' + title + '</span></li>'
              } else {
                str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><img src="' + item.remark + '" alt=""><span>' + title + '</span></a></li>'
              }
            })
            desDom.html(str)
            fiveMenuClickEvent()


          } else {
            if (sessionStorage.getItem("CNtoEn") == 1) {
              var temp = "暂无数据"
            } else {
              var temp = "No Data"
            }

            str += '<li  "><img src="" alt=""><span><a href="#">' + temp + '</a></span></li>'
            desDom.empty()
            desDom.append(str)
          }



        }




      }
    })
  }

}
//  办公办事 入职业务
function jzg_rzyw_list() {
  if (loginUserid) {
    $.ajax({
      url: baseUrl + "sys/staff/staff/entrylist",
      type: "POST",
      data: {
        language: languageStatus,
        type: 214,
        id: loginUserid
      },
      success: function (res) {
        // console.log("入职业务")
        // console.log(res)


        let desDom = $("#tongzxx_sub_e .right_view .sub_content>ul")
        if (res.code === 0) {

          var data = res.page.list

          var str = ""
          if (data.length !== 0) {
            var crumb = ""
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "入职业务"
            } else {
              crumb = "Entry business"
            }
            data.forEach(function (item, index) {

              var time = ""
              var title = ""

              if (item.title != "") {
                title = item.title

              }
              if (item.createTime != null) {
                time = item.createTime.split(" ")[0]
              }
              if (item.jumpPath == null || item.jumpPath == "") {
                str += '<li data-id="tongzxx_sub_a_1" class="fiverzyw fiveStep"  data-step="fiverzyw" data-index="'+ index +'"  onclick="jzg_tzgg_info(' + item.id + ',2)"><img src="' + item.remark + '" alt=""><span>' + title + '</span></li>'
              } else {
                str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><img src="' + item.remark + '" alt=""><span>' + title + '</span></a></li>'
              }

            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {

            var crumb = ""
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "入职业务"
              var temp = "暂无数据"
            } else {
              crumb = "Entry business"
              var temp = "No data"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)


            str += '<li  "><img src="" alt=""><span><a href="#">' + temp + '</a></span></li>'
            desDom.empty()
            desDom.append(str)
          }


        }

      }
    })
  } else {
    $.ajax({
      url: baseUrl + "sys/staff/staff/entrylist",
      type: "POST",
      data: {
        language: languageStatus,
        type: 214,
      },
      success: function (res) {
        // console.log("入职业务")
        // console.log(res)


        let desDom = $("#tongzxx_sub_e .right_view .sub_content>ul")
        if (res.code === 0) {

          var data = res.page.list

          var str = ""
          if (data.length !== 0) {
            var crumb = ""
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "入职业务"
            } else {
              crumb = "Entry business"
            }
            data.forEach(function (item, index) {

              var time = ""
              var title = ""

              if (item.title != "") {
                title = item.title

              }
              if (item.createTime != null) {
                time = item.createTime.split(" ")[0]
              }
              if (item.jumpPath == null || item.jumpPath == "") {
                str += '<li data-id="tongzxx_sub_a_1" class="fiverzyw fiveStep"  data-step="fiverzyw" data-index="'+ index +'"  onclick="jzg_tzgg_info(' + item.id + ',2)"><img src="' + item.remark + '" alt=""><span>' + title + '</span></li>'
              } else {
                str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><img src="' + item.remark + '" alt=""><span>' + title + '</span></a></li>'
              }

            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {

            var crumb = ""
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "入职业务"
              var temp = "暂无数据"
            } else {
              crumb = "Entry business"
              var temp = "No data"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)


            str += '<li  "><img src="" alt=""><span><a href="#">' + temp + '</a></span></li>'
            desDom.empty()
            desDom.append(str)
          }


        }

      }
    })
  }

}
//  办公办事 离职业务
function jzg_lzyw_list() {
  if (loginUserid) {
    $.ajax({
      url: baseUrl + "sys/staff/staff/quitlist",
      type: "POST",
      data: {
        language: languageStatus,
        type: 215,
        id: loginUserid
      },
      success: function (res) {
        // console.log("离职业务")
        // console.log(res)


        let desDom = $("#tongzxx_sub_f .right_view .sub_content>ul")
        if (res.code === 0) {

          var data = res.page.list
          // console.log("离职业务")
          // console.log(data)
          var str = ""
          if (data.length !== 0) {
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "离职业务"
            } else {
              crumb = "Separation business"
            }
            data.forEach(function (item, index) {
              var time = ""
              var title = ""
              let crumb = ""

              if (item.title != "") {
                title = item.title.substr(0, 10)

              }
              if (item.createTime != null) {
                time = item.createTime.split(" ")[0]
              }
              if (item.jumpPath == null || item.jumpPath == "") {
                str += '<li data-id="tongzxx_sub_a_1"  class="fivelzyw fiveStep"  data-step="fivelzyw" data-index="'+ index +'" onclick="jzg_tzgg_info(' + item.id + ',3)"><img src="' + item.remark + '" alt=""><span>' + title + '</span></li>'
              } else {
                str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><img src="' + item.remark + '" alt=""><span>' + title + '</span></a></li>'
              }
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {

            let crumb = ""
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "离职业务"
              var temp = "暂无数据"
            } else {
              crumb = "Separation business"
              var temp = "No data"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)

            str += '<li  "><img src="" alt=""><span><a href="#">' + temp + '</a></span></li>'
            desDom.empty()
            desDom.append(str)
          }


        }


      }
    })
  } else {
    $.ajax({
      url: baseUrl + "sys/staff/staff/quitlist",
      type: "POST",
      data: {
        language: languageStatus,
        type: 215,
      },
      success: function (res) {
        // console.log("离职业务")
        // console.log(res)


        let desDom = $("#tongzxx_sub_f .right_view .sub_content>ul")
        if (res.code === 0) {

          var data = res.page.list
          // console.log("离职业务")
          // console.log(data)
          var str = ""
          if (data.length !== 0) {
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "离职业务"
            } else {
              crumb = "Separation business"
            }
            data.forEach(function (item, index) {
              var time = ""
              var title = ""
              let crumb = ""

              if (item.title != "") {
                title = item.title.substr(0, 10)

              }
              if (item.createTime != null) {
                time = item.createTime.split(" ")[0]
              }
              if (item.jumpPath == null || item.jumpPath == "") {
                str += '<li data-id="tongzxx_sub_a_1"  class="fivelzyw fiveStep"  data-step="fivelzyw" data-index="'+ index +'" onclick="jzg_tzgg_info(' + item.id + ',3)"><img src="' + item.remark + '" alt=""><span>' + title + '</span></li>'
              } else {
                str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><img src="' + item.remark + '" alt=""><span>' + title + '</span></a></li>'
              }
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {

            let crumb = ""
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "离职业务"
              var temp = "暂无数据"
            } else {
              crumb = "Separation business"
              var temp = "No data"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)

            str += '<li  "><img src="" alt=""><span><a href="#">' + temp + '</a></span></li>'
            desDom.empty()
            desDom.append(str)
          }


        }


      }
    })
  }

}
//教学科研 人物风采
function jzg_rwfc_list() {
  $.ajax({
    url: baseUrl + "sys/staff/staff/teachinglist",
    type: "POST",
    data: {
      language: languageStatus,
      type: 216,
      page:1,
      limit:100,
    },
    success: function (res) {
      // console.log("人物风采")
      // console.log(res)
      if (res.code == 0) {
        let data = res.page.list
        let crumb = ""
        if (sessionStorage.getItem("CNtoEn") == 1) {
          crumb = "人物风采"
        } else {
          crumb = "Character style"
        }
        var desDom = $("#FigureStyle>div")
        let str = ""
        if (data.length !== 0) {
          data.forEach(function (item, index) {
            var title = ""
            var standby = ""
            if (item.title != null) {
              title = item.title.substr(0, 10)

            }
            if (item.standby != null) {
              standby = item.standby.substr(0, 10)
              standby += "..."
            }

            str += '<div data-id="jxky_sub_a_1" onclick="jzg_rwfc_info(' + item.id + ',1)"><img src="' + (item.remark == null ? "" : item.remark) + '" alt="" class="img" name="rwfc_img">'
            str += '<h3>' + item.title + '</h3></div>'

          })
          xsIntro(216)
          desDom.empty()
          desDom.append(str)
          // 调用layui轮播
          layui.use('carousel', function () {
            var carousel = layui.carousel;
            //建造实例
            carousel.render({
              elem: '#FigureStyle',
              width: '600px' //设置容器宽度
                ,
              arrow: 'hover' //始终显示箭头
                ,
              height: "380px", //设置高度
              anim: 'default' //切换动画方式
            });
          });

        } else {
          let crumb = ""
          if (sessionStorage.getItem("CNtoEn") == 1) {
            crumb = "人物风采"
          } else {
            crumb = "Character style"
          }
          if (sessionStorage.getItem("CNtoEn") == 1) {
            var temp = "暂无数据"
          } else {
            var temp = "No Data"
          }

          str += '<li class="clearfix" ><img src="" alt="" class="img" name="rwfc_img"><span>' + temp + '</span></li>'
          desDom.empty()
          desDom.append(str)
        }


      }
    }
  })
}
//教学科研 办公条件
function jzg_bgtj_list() {
  $.ajax({
    url: baseUrl + "sys/staff/staff/teachinglist",
    type: "POST",
    data: {
      language: languageStatus,
      type: 268,
      page:1,
      limit:100,
    },
    success: function (res) {
      // console.log("办公条件")
      // console.log(res)


      if (res.code == 0) {
        let data = res.page.list
        let crumb = ""
        if (sessionStorage.getItem("CNtoEn") == 1) {
          crumb = "办公条件"
        } else {
          crumb = "Character style"
        }
        var desDom = $("#work>div")
        let str = ""
        if (data.length !== 0) {
          data.forEach(function (item, index) {
            var title = ""
            var standby = ""
            if (item.title != null) {
              title = item.title.substr(0, 10)

            }
            if (item.standby != null) {
              standby = item.standby.substr(0, 10)
              standby += "..."
            }
            str += '<div data-id="jxky_sub_a_1" class="fivework fiveStep"  data-step="fivework" data-index="'+ index +'" onclick="jzg_rwfc_info(' + item.id + ',2)"><img src="' + (item.remark == null ? "" : item.remark) + '" alt="" class="img" name="rwfc_img">'
            str += '<h3>' + item.title + '</h3></div>'
          })
          xsIntro(268)
          desDom.html(str)
          fiveMenuClickEvent()
          // 调用layui轮播
          layui.use('carousel', function () {
            var carousel = layui.carousel;
            //建造实例
            carousel.render({
              elem: '#work',
              width: '600px', //设置容器宽度,
              height: "380px", //设置高度
              arrow: 'hover', //始终显示箭头
              anim: 'default' //切换动画方式
            });
          });

        } else {
          let crumb = ""
          if (sessionStorage.getItem("CNtoEn") == 1) {
            crumb = "人物风采"
          } else {
            crumb = "Character style"
          }
          if (sessionStorage.getItem("CNtoEn") == 1) {
            var temp = "暂无数据"
          } else {
            var temp = "No Data"
          }

          str += '<li class="clearfix" ><img src="" alt="" class="img" name="rwfc_img"><span>' + temp + '</span></li>'
          desDom.empty()
          desDom.append(str)
        }


      }


    }
  })
}
//简介
function xsIntro(type) {
  $.ajax({
    url: baseUrl + "sys/instroduction/instroList",
    data: {
      language: sessionStorage.getItem("CNtoEn"),
      type: type,
    },
    success: function (res) {
      // console.log("办公条件/人物风采简介")
      // console.log(res)
      if (res.code == 0) {
        if (type == 268) {
          var desDom = $('p[name  = bgtjjj]')
        } else {
          var desDom = $('p[name  = rwfcjj]')
        }
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
// 人物风采/办公条件info
function jzg_rwfc_info(id, crumb) {
  $.ajax({
    url: baseUrl + "sys/staff/getinfo",
    type: "POST",
    data: {
      id: id,
    },
    success: function (res) {
      // console.log("人物风采/办公条件info")
      // console.log(res)
      let desDom = $("#jxky_sub_a_1")
      if (res.code == 0) {
        let data = res.content
        let content = ""
        if (languageStatus == 1) {

          Bread = "当前位置：教职工&bull;教学科研&bull;"
          if (crumb == 1) {
            crumb = "人物风采"
          } else if (crumb == 2) {
            crumb = "办公条件"
          }
        } else {
          Bread = "Current location: faculty &bull; office services &bull;"
          if (crumb == 1) {
            crumb = "Character style"
          } else if (crumb == 2) {
            crumb = "work"
          }
        }
        if (data) {
          if (data.title != null && data.title != undefined) {

            if (data.createTime != null && data.createTime != undefined) {
              var currDate = data.createTime.split(" ")[0]
            }
            if (data.content != null) {
              content = data.content.replace(/&amp;nbsp;/g, "&#10;")
            }
            if (sessionStorage.getItem("CNtoEn") == 1) {
              var temp = "暂无数据"
              var Time = "时间"
              var PageView = "浏览量"
            } else {
              var PageView = "PageView"
              var temp = "No Data"
              var Time = "Time"
            }
            let str = ""


            str += '<div class="bn clearfix"><h2 class="fl">' + crumb + '</h2><span class="fr">' + Bread + '' + crumb + '</span></div>'
            str += '<div class="right_view"><div class="sub_content"><div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date">'
            str += '<span>' + Time + ':</span><i>' + currDate + '</i>  </div><p>' + content + '</p></div></div></div>'
            $("#jxky_sub_a_1").addClass("content_item_active").siblings().removeClass("content_item_active")
            $(desDom).empty()
            desDom.append(str)
          }
        }

      }




    }
  })
}
// 个人主页
function jzg_grzy_list() {
  $.ajax({
    url: baseUrl + "sys/staff/userList",
    type: "POST",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // console.log("个人主页")
      // console.log(res)


      if (res.code == 0) {
        let data = res.page
        let crumb = ""
        if (sessionStorage.getItem("CNtoEn") == 1) {
          if (crumb == 1) {
            crumb = "个人主页"
          }
        } else {
          if (crumb == 1) {
            crumb = "Homepage"
          }
        }
        if (sessionStorage.getItem("CNtoEn") == 1) {
          var temp = "暂无数据"
          var Time = "时间"
          var PageView = "浏览量"
        } else {
          var PageView = "PageView"
          var temp = "No Data"
          var Time = "Time"
        }
        let desDom = $("#jxky_sub_b .right_view .sub_content_img_style>ul")
        let str = ""
        if (data !== null) {
          data.forEach(function (item, index) {
            var title = ""
            if (item.title != null) {
              title = item.title.substr(0, 10)

            }

            str += '<li data-id="jxky_sub_a_1" class="clearfix" onclick="jzg_grzy_info(' + item.id + ',1)"><img src="../img/infor_5.png" alt="" class="img" name="rwfc_img"><span>' + title + '</span></li>'
          })
          desDom.empty()
          desDom.append(str)
        } else {
          let crumb = ""
          if (sessionStorage.getItem("CNtoEn") == 1) {
            crumb = "个人主页"
            var temp = "暂无数据"
          } else {
            crumb = "Homepage"
            var temp = "No data"
          }

          str += '<li class="clearfix" ><img src="" alt="" class="img" name="rwfc_img"><span>' + temp + '</span></li>'
          desDom.empty()
          desDom.append(str)
        }


      }


    }
  })
}
// 个人主页info
function jzg_grzy_info(id, crumb) {
  $.ajax({
    url: baseUrl + "sys/staff/getinfo",
    type: "POST",
    data: {
      id: id
    },
    success: function (res) {
      // console.log("个人主页info")
      // console.log(res)

      let desDom = $("#jxky_sub_a_1")
      if (res.code == 0) {
        let data = res.content
        let content = ""
        var Bread = ""

        if (sessionStorage.getItem("CNtoEn") == 1) {
          var temp = "暂无数据"
          var Time = "时间"
          var PageView = "浏览量"

        } else {
          var PageView = "PageView"
          var temp = "No Data"
          var Time = "Time"
        }
        if (languageStatus == 1) {
          Bread = "当前位置：教职工&bull;办公办事&bull;"
        } else {
          Bread = "Current location: faculty &bull; office services &bull;"
        }
        if (data.title != null) {

          if (item.createTime != null) {
            var currDate = item.createTime.split(" ")[0]
          }
          if (data.content != null) {
            content = data.content.replace(/&amp;nbsp;/g, "&#10;")
          }

          let str = ""
          str += '<div class="bn clearfix"><h2 class="fl">' + crumb + '</h2><span class="fr">' + Bread + '' + crumb + '</span></div>'
          str += '<div class="right_view"><div class="sub_content"><div class="sub_detail_content"><h3>' + data.title + '</h3>'
          str += '<div class="sub_date"><span>' + Time + ':</span><i>' + currDate + '</i>  </div>'
          str += '<p>' + content + '</p></div></div></div>'
          $(desDom).empty()
          desDom.append(str)
        }
      }





    }
  })
}
// 发展定位
jzg_yzjy_list()

function jzg_yzjy_list() {
  $.ajax({
    url: baseUrl + "sys/inst/schmessagelist",
    type: "POST",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // console.log("发展定位")
      // console.log(res)
      let desDom = $("#jxky_sub_c .right_view .sub_content")
      if (res.code == 0) {
        var data = res.page
        var content = data.content.replace(/&amp;nbsp;/g, "&#10;")
        desDom.html($('<p>' + content + '</p>'))
      }
    }
  })
}
// 办事流程
function jzg_bslc_list() {
  if (loginUserid) {
    $.ajax({
      url: baseUrl + "sys/staff/staff/procedures/list",
      type: "POST",
      data: {
        language: languageStatus,
        type: 267,
        id: loginUserid
      },
      success: function (res) {
        // console.log("办事流程")
        // console.log(res)
        let desDom = $("#tongzxx_sub_g .right_view .sub_content>ul")
        if (res.code === 0) {

          var data = res.page.list
          var str = ""
          if (data.length !== 0) {
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "办事流程"
            } else {
              crumb = "Separation business"
            }
            data.forEach(function (item, index) {
              var time = ""
              var title = ""
              let crumb = ""

              if (item.title != "") {
                title = item.title.substr(0, 10)

              }
              if (item.createTime != null) {
                time = item.createTime.split(" ")[0]
              }

              if (item.jumpPath == null || item.jumpPath == "") {
                str += '<li data-id="tongzxx_sub_a_1"  class="fivebslc fiveStep"  data-step="fivebslc" data-index="'+ index +'"  onclick="jzg_tzgg_info(' + item.id + ',5)"><img src="' + item.remark + '" alt=""><span>' + title + '</span></li>'
              } else {
                str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><img src="' + item.remark + '" alt=""><span>' + title + '</span></a></li>'
              }
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {

            let crumb = ""
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "办事流程"
              var temp = "暂无数据"
            } else {
              crumb = "Separation business"
              var temp = "No data"
            }
            var time = new Date().toLocaleDateString()
            str += '<li  "><img src="" alt=""><span><a href="#">' + temp + '</a></span></li>'
            desDom.empty()
            desDom.append(str)
          }
        }
      }
    })
  } else {
    $.ajax({
      url: baseUrl + "sys/staff/staff/procedures/list",
      type: "POST",
      data: {
        language: languageStatus,
        type: 267,
      },
      success: function (res) {
        // console.log("办事流程")
        // console.log(res)
        let desDom = $("#tongzxx_sub_g .right_view .sub_content>ul")
        if (res.code === 0) {

          var data = res.page.list
          var str = ""
          if (data.length !== 0) {
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "办事流程"
            } else {
              crumb = "Separation business"
            }
            data.forEach(function (item, index) {
              var time = ""
              var title = ""
              let crumb = ""

              if (item.title != "") {
                title = item.title.substr(0, 10)

              }
              if (item.createTime != null) {
                time = item.createTime.split(" ")[0]
              }

              if (item.jumpPath == null || item.jumpPath == "") {
                str += '<li data-id="tongzxx_sub_a_1"  class="fivebslc fiveStep"  data-step="fivebslc" data-index="'+ index +'" onclick="jzg_tzgg_info(' + item.id + ',5)"><img src="' + item.remark + '" alt=""><span>' + title + '</span></li>'
              } else {
                str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><img src="' + item.remark + '" alt=""><span>' + title + '</span></a></li>'
              }
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {

            let crumb = ""
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "办事流程"
              var temp = "暂无数据"
            } else {
              crumb = "Separation business"
              var temp = "No data"
            }
            var time = new Date().toLocaleDateString()
            str += '<li  "><img src="" alt=""><span><a href="#">' + temp + '</a></span></li>'
            desDom.empty()
            desDom.append(str)
          }
        }
      }
    })
  }

}
// 通讯方式
function jzg_txfs_list() {
  if (loginUserid) {
    $.ajax({
      url: baseUrl + "sys/studyactivity/contactusList",
      type: "POST",
      data: {
        language: languageStatus,
        type: 269,
        id: loginUserid,
      },
      success: function (res) {
        // console.log("通讯方式")
        // console.log(res)


        let desDom = $("#txfangshi_sub_a .right_view .sub_content>ul")
        if (res.code === 0) {

          var data = res.page.list
          var str = ""
          if (data.length !== 0) {
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "通讯方式"
            } else {
              crumb = "Separation business"
            }
            data.forEach(function (item, index) {
              var time = ""
              var title = ""
              let crumb = ""

              if (item.standby != "") {
                title = item.standby.substr(0, 10)

              }
              if (item.createTime != null) {
                time = item.createTime.split(" ")[0]
              }

              if (item.jumpPath == null || item.jumpPath == "") {
                str += '<li data-id="jxky_sub_a_1" class="fivetxfs fiveStep clearfix"  data-step="fivetxfs" data-index="'+ index +'"  onclick="jzg_txfs_info(' + item.id + ',1)"><img src="' + (item.remark == null ? "" : item.remark) + '" alt="" class="img" name="rwfc_img"><span>' + title + '</span></li>'
              } else {
                str += '<li  class="clearfix" ><a href="http://' + item.jumpPath + '"target="_blank"><img src="' + (item.remark == null ? "" : item.remark) + '" alt="" class="img" name="rwfc_img"><span>' + title + '</span></a></li>'
              }




            })
            $("#txfangshi_sub_a_1").removeClass("content_item_active")
            $("#txfangshi_sub_a").addClass("content_item_active")
            desDom.html(str)
            fiveMenuClickEvent()
          } else {

            let crumb = ""
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "通讯方式"
              var temp = "暂无数据"
            } else {
              crumb = "Separation business"
              var temp = "No data"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)

            str += '<li  "><img src="" alt=""><span><a href="#">' + temp + '</a></span></li>'
            desDom.empty()
            desDom.append(str)
          }
        }
      }
    })
  } else {
    $.ajax({
      url: baseUrl + "sys/studyactivity/contactusList",
      type: "POST",
      data: {
        language: languageStatus,
        type: 269,
      },
      success: function (res) {
        // console.log("通讯方式")
        // console.log(res)


        let desDom = $("#txfangshi_sub_a .right_view .sub_content>ul")
        if (res.code === 0) {

          var data = res.page.list
          var str = ""
          if (data.length !== 0) {
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "通讯方式"
            } else {
              crumb = "Separation business"
            }
            data.forEach(function (item, index) {
              var time = ""
              var title = ""
              let crumb = ""

              if (item.standby != "") {
                title = item.standby.substr(0, 10)

              }
              if (item.createTime != null) {
                time = item.createTime.split(" ")[0]
              }

              if (item.jumpPath == null || item.jumpPath == "") {
                str += '<li data-id="jxky_sub_a_1" class="fivebslc fiveStep clearfix"  data-step="fivebslc" data-index="'+ index +'"  onclick="jzg_txfs_info(' + item.id + ',1)"><img src="' + (item.remark == null ? "" : item.remark) + '" alt="" class="img" name="rwfc_img"><span>' + title + '</span></li>'
              } else {
                str += '<li  class="clearfix" ><a href="http://' + item.jumpPath + '"target="_blank"><img src="' + (item.remark == null ? "" : item.remark) + '" alt="" class="img" name="rwfc_img"><span>' + title + '</span></a></li>'
              }




            })
            $("#txfangshi_sub_a_1").removeClass("content_item_active")
            $("#txfangshi_sub_a").addClass("content_item_active")
            desDom.html(str)
            fiveMenuClickEvent()
          } else {

            let crumb = ""
            if (sessionStorage.getItem("CNtoEn") == 1) {
              crumb = "通讯方式"
              var temp = "暂无数据"
            } else {
              crumb = "Separation business"
              var temp = "No data"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)

            str += '<li  "><img src="" alt=""><span><a href="#">' + temp + '</a></span></li>'
            desDom.empty()
            desDom.append(str)
          }
        }
      }
    })
  }

}
// 通讯方式info
function jzg_txfs_info(id, crumb) {
  $.ajax({
    url: baseUrl + "sys/studyactivity/stuContent",
    type: "POST",
    data: {
      id: id,
    },
    success: function (res) {
      // console.log("通讯方式info")
      // console.log(res)

      let desDom = $("#txfangshi_sub_a_1 .right_view .sub_detail_content")
      if (res.code == 0) {

        let data = res.page[0]
        let content = ""
        var Bread = ""

        if (sessionStorage.getItem("CNtoEn") == 1) {
          var temp = "暂无数据"
          var Time = "时间"

        } else {
          var temp = "No Data"
          var Time = "Time"
        }
        if (languageStatus == 1) {
          Bread = "当前位置：教职工&bull;联系我们&bull;"
          if (crumb == 1) {
            crumb = "通讯方式"
          }
        } else {
          Bread = "Current location: faculty &bull; Contact us &bull;"
          crumb = "Communication Mode"
        }

        if (data.createTime != null) {
          var currDate = data.createTime.split(" ")[0]
        }
        if (data.content != null) {
          content = data.content.replace(/&amp;nbsp;/g, "&#10;")
        }

        let str = ""
        str += '<div class="right_view"><div class="sub_content"><div class="sub_detail_content"><h3>' + data.standby + '</h3>'
        str += '<div class="sub_date"><span>' + Time + ':</span><i>' + currDate + '</i>  </div>'
        str += '<p>' + content + '</p></div></div></div>'
        $("#txfangshi_sub_a").removeClass("content_item_active")
        $("#txfangshi_sub_a_1").addClass("content_item_active")
        $(desDom).empty()
        desDom.append(str)

      }
    }
  })
}
// 学术资源   sys/staff/staff/literaturelist   
jzg_wxzy_list()

function jzg_wxzy_list() {
  if (loginUserid) {
    $.ajax({
      url: baseUrl + "document/stu/document/tealist",
      type: "POST",
      data: {
        language: languageStatus,
        type: 305,
        id: loginUserid
      },
      success: function (res) {
        // console.log("学术资源")
        // console.log(res)
        var desDom = $("#jxky_sub_d .right_view .sub_content>ul")
        if (res.code == 0) {
          var data = res.page.list
          let str = ""
          if (data.length !== 0) {
            data.forEach(function (item, index) {
              var title = ""
              if (item.title != "") {
                title += item.title.substr(0, 10)
              }
              if (item.jumpPath == null || item.jumpPath == "") {
                str += '<li data-id="jxky_sub_a_1"  class="fivexszy fiveStep clearfix"  data-step="fivexszy" data-index="'+ index +'" onclick="jzg_rwfc_info(' + item.id + ',1)"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""><span><a href="' + (item.path == null ? "#" : item.path) + '">' + title + '</a></span></li>'
              } else {
                str += '<li  class="clearfix" ><a href="http://' + item.jumpPath + '"target="_blank"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""><span>' + title + '</span></a></li>'
              }
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            if (sessionStorage.getItem("CNtoEn") == 1) {
              var temp = "暂无数据"
            } else {
              var temp = "No Data"
              str += '<span style="margin-right:75px;font-size:14px;margin-left:60px">' + temp + '</span>'
            }
            $(desDom).html(str)
          }
        }
      },
    })
  } else {
    $.ajax({
      url: baseUrl + "document/stu/document/tealist",
      type: "POST",
      data: {
        language: languageStatus,
        type: 305,
      },
      success: function (res) {
        // console.log("学术资源")
        // console.log(res)
        var desDom = $("#jxky_sub_d .right_view .sub_content>ul")
        if (res.code == 0) {
          var data = res.page.list
          let str = ""
          if (data.length !== 0) {
            data.forEach(function (item, index) {
              var title = ""
              if (item.title != "") {
                title += item.title.substr(0, 10)

              }
              if (item.jumpPath == null || item.jumpPath == "") {
                str += '<li data-id="jxky_sub_a_1"  class="fivexszy fiveStep clearfix"  data-step="fivexszy" data-index="'+ index +'" onclick="jzg_rwfc_info(' + item.id + ',1)"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""><span><a href="' + (item.path == null ? "#" : item.path) + '">' + title + '</a></span></li>'
              } else {
                str += '<li  class="clearfix" ><a href="http://' + item.jumpPath + '"target="_blank"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""><span>' + title + '</span></a></li>'
              }

            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            if (sessionStorage.getItem("CNtoEn") == 1) {
              var temp = "暂无数据"
            } else {
              var temp = "No Data"

              str += '<span style="margin-right:75px;font-size:14px;margin-left:60px">' + temp + '</span>'
            }

            desDom.empty()

            $(desDom).html(str)

          }

        }
      },
    })
  }


}
// 办公办事info
function jzg_tzgg_info(id, crumb) {
  $.ajax({
    url: baseUrl + "sys/staff/getinfo",
    type: "POST",
    data: {
      id: id
    },
    success: function (res) {
      // console.log("学生info")
      // console.log(res)
      if (res.code == 0) {
        let data = res.content
        if (data) {
          if (data.createTime != null) {
            var currDate = data.createTime.split(" ")[0]
          }
          let content = data.content.replace(/&amp;nbsp;/g, "&#10;")
          let desDom = $("#tongzxx_sub_a_1")
          let str = ""
          var Bread = ""
          if (sessionStorage.getItem("CNtoEn") == 1) {
            var temp = "暂无数据"
            var Time = "时间"
            var PageView = "浏览量"
            if (crumb == 1) {
              crumb = "后勤保障"
            } else if (crumb == 2) {
              crumb = "入职业务"
            } else if (crumb == 3) {
              crumb = "离职业务"
            } else if (crumb == 4) {
              crumb = "其他业务"
            } else if (crumb == 5) {
              crumb = "办事流程"
            }
          } else {
            var PageView = "PageView"
            var temp = "No Data"
            var Time = "Time"
            if (crumb == 1) {
              crumb = "Logistics support"
            } else if (crumb == 2) {
              crumb = "Entry business"
            } else if (crumb == 3) {
              crumb = "Separation business"
            } else if (crumb == 4) {
              crumb = "Other business"
            } else if (crumb == 5) {
              crumb = "Working schedule"
            }

          }
          if (languageStatus == 1) {
            Bread = "当前位置：教职工&bull;日常管理&bull;"
          } else {
            Bread = "Current location: faculty &bull; Daily management &bull;"
          }
          if (data != null) {

            str += '<div class="bn clearfix"><h2 class="fl">' + crumb + '</h2><span class="fr">' + Bread + '' + crumb + '</span></div>'
            str += '<div class="right_view"><div class="sub_content"><div class="sub_detail_content"><h3>' + data.title + '</h3>'
            str += '<div class="sub_date"><span>' + Time + ':</span><i>' + currDate + '</i>  </div>'
            str += '<p>' + content + '</p></div></div></div>'
          }
          $(desDom).empty()
          desDom.append(str)

        } else {
          let desDom = $("#tongzxx_sub_a_1")
          let str = ""
          var Bread = ""
          if (sessionStorage.getItem("CNtoEn") == 1) {
            var temp = "暂无数据"
            var Time = "时间"
            var PageView = "浏览量"
            if (crumb == 1) {
              crumb = "后勤保障"
            } else if (crumb == 2) {
              crumb = "入职业务"
            } else if (crumb == 3) {
              crumb = "离职业务"
            } else if (crumb == 4) {
              crumb = "其他业务"
            } else if (crumb == 5) {
              crumb = "办事流程"
            }
          } else {
            var PageView = "PageView"
            var temp = "No Data"
            var Time = "Time"
            if (crumb == 1) {
              crumb = "Logistics support"
            } else if (crumb == 2) {
              crumb = "Entry business"
            } else if (crumb == 3) {
              crumb = "Separation business"
            } else if (crumb == 4) {
              crumb = "Other business"
            } else if (crumb == 5) {
              crumb = "Working schedule"
            }
          }
          if (languageStatus == 1) {
            Bread = "当前位置：教职工&bull;日常管理&bull;"
          } else {
            Bread = "Current location: faculty &bull; office services &bull;"
          }
          str += '<div class="bn clearfix"><h2 class="fl">' + crumb + '</h2><span class="fr">' + Bread + '' + crumb + '</span></div>'
          str += '<div class="right_view"><div class="sub_content"><div class="sub_detail_content"><h3>' + temp + '</h3>'
          str += '<div class="sub_date"><span></span><i></i> <span></span><i></i></div>'
          str += '<p>' + temp + '</p></div></div></div>'

          $(desDom).empty()
          desDom.append(str)
        }
      }

    }
  })
}
//规章制度info
function jzg_gzzd_info(id, crumb) {
  $.ajax({
    url: baseUrl + "sys/staff/getinfo",
    type: "POST",
    data: {
      id: id
    },
    success: function (res) {
      // console.log("规章制度info")
      // console.log(res)
      let desDom = $("#guizzd_sub_a_1 .right_view .sub_content")
      if (res.code == 0) {
        let data = res.content
        if (data != null) {
          let createTime = ""
          let content = ""
          var str = ""

          if (sessionStorage.getItem("CNtoEn") == 1) {
            var temp = "暂无数据"
            var Time = "时间"
            var PageView = "浏览量"
            if (crumb == 1) {
              crumb = "规章制度"
            }
          } else {
            var PageView = "PageView"
            var temp = "No Data"
            var Time = "Time"
            if (crumb == 1) {
              crumb = "Rules and regulations"
            }
          }
          if (data.createTime != null) {
            createTime = data.createTime.split(" ")[0]
          }
          if (data.content != null) {
            content = data.content.replace(/&amp;nbsp;/g, "&#10;")
          }

          str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date"><span>' + Time + ':</span><i>' + createTime + '</i>  '
          str += '</div><p>' + content + '</p></div>'

        }
      }


      $(desDom).empty()
      desDom.append(str)


    }
  })
}
//下载中心info
function jzg_download_info(id) {
  $.ajax({
    url: baseUrl + "sys/staff/getinfo",
    type: "POST",
    data: {
      id: id
    },
    success: function (res) {
      // console.log("学生info")
      // console.log(res)

      let desDom = $("#xiazzx_sub_a_1 .right_view .sub_content")
      if (res.code == 0) {
        let data = res.content
        if (data != null) {
          let createTime = ""
          let content = ""
          var str = ""
          if (data.createTime != null) {
            createTime = data.createTime.split(" ")[0]
          }
          if (data.content != null) {
            content = data.content.replace(/&amp;nbsp;/g, "&#10;")
          }
          if (sessionStorage.getItem("CNtoEn") == 1) {
            var temp = "暂无数据"
            var Time = "时间"
            var PageView = "浏览量"
          } else {
            var PageView = "PageView"
            var temp = "No Data"
            var Time = "Time"
          }
          if (data.createTime != null) {
            var currDate = data.createTime.split(" ")[0]
          }
          str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date"><span>' + Time + ':</span><i>' + currDate + '</i>  '
          str += '</div><p>' + content + '</p></div>'

        }





      }
      $(desDom).empty()
      desDom.append(str)


    }
  })
}
// 基本概况
jzg_baseInfo()

function jzg_baseInfo() {
  var id = 0
  if (sessionStorage.getItem("CNtoEn") == 1) {
    id = 953
  } else {
    id = 1056
  }
  $.ajax({
    url: baseUrl + "sys/studyactivity/stuContent",
    type: "POST",
    data: {
      id: id
    },
    success: function (res) {
      // console.log("基本概况")
      // console.log(res)
      if (res.code == 0) {
        if (res.page.length > 0) {
          var data = res.page[0]
          var desDom = $("#jxky_sub_e .right_view")
          var str = ""
          if (sessionStorage.getItem("CNtoEn") == 1) {
            var temp = "暂无数据"
            var Time = "时间"

          } else {

            var temp = "No Data"
            var Time = "Time"
          }
          if (data.createTime != null) {
            var currDate = data.createTime.split(" ")[0]
          }
          if (data.content != null) {
            var content = data.content.replace(/&amp;nbsp;/g, "&#10;")
          }
          str += '<div class="sub_detail_content"><h3>' + data.standby + '</h3><div class="sub_date"><span>' + Time + ':</span><i>' + currDate + ''
          str += '</div><p>' + content + '</p></div>'
          desDom.html(str)
        }

      }

    }


  })
}
var jzgLanguageObj = {
  titleCn: ["日常管理", "教学科研","规章制度", "下载中心","联系我们",],
  titleEn: ["Daily management", "Teaching", "Rules", "Download Center", "Contact us"],
  subMenuCn: ["后勤保障", "入职业务", "离职业务", "其他业务", "办事流程", "基本概况", "人物风采", "办公条件", "发展定位", "学术资源", "规章制度", "下载中心","通讯方式",],
  subMenuEn: ["Logistics support", "Entry business", "Separation business", "Other business", "Working schedule", "Basic profile", "Character style", "Office conditions", "Dean's message", "Academic resources", "Rules and regulations", "Download Center", "Communication"],
  subMenuZJJGCn: ['<a href="../subPage/menu_lsyg.html?index=3">组织架构</a>', ],
  subMenuZJJGEn: ['<a href="../subPage/menu_lsyg.html?index=3">Organization</a>', ],
  oneBreadCn: ["当前位置：日常管理•后勤保障", "当前位置：日常管理•入职业务", "当前位置：日常管理•离职业务", "当前位置：日常管理•其他业务", "当前位置：日常管理•办事流程", "当前位置：教学科研•基本概况", "当前位置：教学科研•人物风采", "当前位置：教学科研•办公条件", "当前位置： 教学科研•发展定位", "当前位置：教学科研•学术资源", "当前位置：规章制度", "当前位置：下载中心", "当前位置：联系我们•通讯方式"],
  oneBreadEn: ["Current location: Daily management and logistics support", "Current location: Daily management • On-the-job business", "Current location: Daily management • Separation business", "Current location: Daily management • Other business", "Current location: Daily management and service process", "Current location: Teaching and Research • Basic Profile", "Current location: Teaching and Character style", "Current location: Teaching and Office conditions", "Current location: Teaching and research • Dean's message", "Current location:Teaching and research • Academic resources", "Current location: Rules and regulations", "Current location: Download Center", "Current location:Contact us •Communication method"],
  twoBreadCn: ["当前位置：下载中心"],
  twoBreadEn: ["Current location: Download Center"],
  jgzGzzdTitleCn: ["通讯方式"],
  jgzGzzdTitleEn: ["Communication"],

}
if (languageStatus == 1) {
  //中文
  //标题
  $("span[name = txfsBread]").html("当前位置：通讯方式")
  $("li[ name = jzgSubTitle]").each(function (index, item) {
    $(item).text(jzgLanguageObj["titleCn"][index])
  })
  $("span[ name = jzgSubTitle]").each(function (index, item) {
    $(item).text(jzgLanguageObj["titleCn"][index])
  })
  //子标题 下载中心规章制度
  $("h2[ name = jgzGzzdTitle]").each(function (index, item) {
    $(item).text(jzgLanguageObj["jgzGzzdTitleCn"][index])
  })
  //子菜单
  $("li[ name = jzgSubMenu]").each(function (index, item) {
    $(item).html(jzgLanguageObj["subMenuCn"][index])
  })
  $("h2[ name = jzgSubMenu]").each(function (index, item) {
    $(item).html(jzgLanguageObj["subMenuCn"][index])
  })
  $("li[ name = jzgSubMenuZZJG]").html(jzgLanguageObj["subMenuZJJGCn"])
  //面包屑
  $("span[ name = jzgOneBread]").each(function (index, item) {
    $(item).text(jzgLanguageObj["oneBreadCn"][index])
  })
  //下载中心自面包屑
  $("span[ name = jgzTwoBread]").text(jzgLanguageObj["twoBreadCn"])

} else {
  //英文
  //标题
  $("li[ name = jzgSubTitle]").each(function (index, item) {
    $(item).text(jzgLanguageObj["titleEn"][index])
    $(item).css({
      "padding": "0 5px"
    })
  })
  $("span[ name = jzgSubTitle]").each(function (index, item) {
    $(item).text(jzgLanguageObj["titleEn"][index])
  })
  //子标题 下载中心规章制度
  $("h2[ name = jgzGzzdTitle]").each(function (index, item) {
    $(item).text(jzgLanguageObj["jgzGzzdTitleEn"][index])
  })
  //子菜单
  $("li[ name = jzgSubMenu]").each(function (index, item) {
    $(item).html(jzgLanguageObj["subMenuEn"][index])
  })
  $("h2[ name = jzgSubMenu]").each(function (index, item) {
    $(item).html(jzgLanguageObj["subMenuEn"][index])
  })
  $("li[ name = jzgSubMenuZZJG]").html(jzgLanguageObj["subMenuZJJGEn"])
  //面包屑
  $("span[name = txfsBread]").html("Current location:Communication")
  $("span[ name = jzgOneBread]").each(function (index, item) {
    $(item).text(jzgLanguageObj["oneBreadEn"][index])
  })
  //下载中心自面包屑
  $("span[ name = jgzTwoBread]").text(jzgLanguageObj["twoBreadEn"])
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
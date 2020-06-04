//设置培养单位_点击哨兵
var pydwIsClick = false
var languageStatus = sessionStorage.getItem("CNtoEn")
/**tab栏切换效果 */
//顶部tab栏函数
kygk_tab()
//科研团队
kytd_tab()
//右侧tab栏
wlyjs()
//前沿研修
kxyx()

// **********************数据渲染*****************************
// 科学进展
kycg_list_ajax()
//科研团队
kytd_list()
//科研团队详情
// kytd_info()
//学术活动list
xshd_list()


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
}
//右侧子菜单tab栏函数
function wlyjs() {
  var tabs = $(".zzjg_sub .sub_title ul")
  $(tabs).on("click", "li", function () {
    var id = $(this).data("id")

    // // console.log(id)
    $("#" + id)
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
  })
}
//学术活动table详情页
function xshd_tab() {
  var tda = $("#xshy_sub_a td[data-id]")
  var tdb = $("#xshy_sub_b td[data-id]")
  var tdc = $("#xshy_sub_c td[data-id]")
  var tdd = $("#xshy_sub_d td[data-id]")
  $(tda).on("click", function () {
    var id = $(this).data("id")
    $("#" + id)
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
    return false
  })
  $(tdb).on("click", function () {
    var id = $(this).data("id")
    $("#" + id)
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
    return false
  })
  $(tdc).on("click", function () {
    var id = $(this).data("id")
    $("#" + id)
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
    return false
  })
  $(tdd).on("click", function () {
    var id = $(this).data("id")
    $("#" + id)
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
    return false
  })
}

function kxyx() {
  var divs = $("#kyjz_sub_d .item")
  $(divs).on("mouseenter", function () {
    $(this).css({
      cursor: "pointer"
    })
  })
  $(divs).on("click", function () {
    var id = $(this).data("id")
    $("#" + id)
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
  })

  //设置子菜单点击事件
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
function li_trigger() {
  var str = window.location.href
  var index = str.indexOf("=")
  var id = str.substr(index + 1)
  $('.content .title>ul>li').eq(id).trigger("click")
}
//********************数据渲染********************************/
//科研团队
function kytd_list() {
  $.ajax({
    url: baseUrl + "sys/research/list",
    type: "POST",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // // console.log("科研团队")
      // // console.log(res)
      var str = ""
      res.forEach(function (item, index) {
        // str += `
        // <li data-id="kytd_sub_${index}">${item.name}</li>
        // `
        str += '<li data-id="kytd_sub_' + index + '">' + item.name + '</li>'
      })
      // $("#kytd_leftMenu").append($(str))
    },
  })
}
//默认执行一次右侧导航菜单
kytd_HightList(54, 0)
kytd_EnergyList(55, 0)
kytd_QuantumList(56, 0)
kytd_ReliabilityList(57, 0)
//设置部门简介
function setDeptPorfile(deptId) {
  $.ajax({
    url: baseUrl + "sys/research/deptInfo",
    type: "POST",
    data: {
      id: deptId,
    },
    success: function (res) {
      // // console.log(res)
      if (res.code == 0) {
        var data = res.dept
        switch (true) {
          case deptId == 54:
            $('p[name = heightInfo ]').html(data.profile == null ? "" : data.profile)
            break
          case deptId == 55:
            $('p[name = physicalInfo ]').html(data.profile == null ? "" : data.profile)
            break
          case deptId == 56:
            $('p[name = quantumInfo ]').html(data.profile == null ? "" : data.profile)
            break
          case deptId == 57:
            $('p[name = reliabilityInfo ]').html(data.profile == null ? "" : data.profile)
            break

        }
      }
    }
  })

}
//科研团队子接口数据
//高能量密度物理研究室列表
function kytd_HightList(depId, type) {
  $.ajax({
    url: baseUrl + 'sys/research/getPersonnel',
    data: {
      deptId: depId,
      type: type,
      standby: 2,
    },
    success: function (res) {
      // // console.log("高能量密度物理研究室列表")
      // // console.log(res)
      if (sessionStorage.getItem("CNtoEn") == 1) {
        var resTitle = "暂无数据"
      } else {
        var resTitle = "No Data"
      }
      if (res.length !== 0) {
        var str = ""
        var des = "kytd_sub_0_0"
        res.forEach(function (item, index) {
          // // console.log(item)
          str += '<div class="sub_content_item clearfix"><div class="item_img fl">'
          str += '<a class="fivegaonengzrjs fiveStep"  data-step="fivegaonengzrjs" data-index="' + index + '"  onclick="ktyd_Hinfo(' + item.id + ',' + item.standby + ',\'' + item.website + '\',\'kytd_sub_0_0\')"><img src="' + item.perImg + '" alt=""></a></div>'
          str += '<a onclick="ktyd_Hinfo(' + item.id + ',' + item.standby + ',\'' + item.website + '\',\'kytd_sub_0_0\')"><div class="item_content fl"><h2>' + item.roleName + '</h2><p class="kxyj_title clearfix">职称 ：' + item.perPost + '</p>'
          str += '<p><i class="kxyj_mail fl"></i><span title="' + item.email + '">' + item.email + '</span></p><p><i class="kxyj_call fl"></i>' + item.telphone + '</p>'
          if (type == 0) {
            str += '<p><a href="http://' + item.website + '">课题组网址</a></p></div></a></div>'
          } else {
            str += '</div></a></div>'
          }

        })
        setDeptPorfile(54)
        $("#kytd_sub_0_0").html(str)
        fiveMenuClickEvent()
        if (type == 0) {
          $('#kytd_sub_0 .sub_title>ul>li').eq(0)
            .addClass("sub_tab")
            .siblings()
            .removeClass("sub_tab")
        }

      } else {
        $("#kytd_sub_0_0").html('<p>' + resTitle + '</p>')
      }




    }
  })
}
//核物理技术研究室列表
function kytd_EnergyList(depId, type) {
  $.ajax({
    url: baseUrl + 'sys/research/getPersonnel',
    data: {
      deptId: depId,
      type: type,
      standby: 2,
    },
    success: function (res) {
      // // console.log("详情list")
      // // console.log(res)
      if (sessionStorage.getItem("CNtoEn") == 1) {
        var resTitle = "暂无数据"
      } else {
        var resTitle = "No Data"
      }
      if (res.length !== 0) {
        str = ""

        res.forEach(function (item, index) {
          str += '<div class="sub_content_item clearfix"><div class="item_img fl">'
          str += '<a  class="fivewulizrjs fiveStep"  data-step="fivewulizrjs" data-index="' + index + '"  onclick="ktyd_Hinfo(' + item.id + ',' + item.standby + ',\'' + item.website + '\',\'kytd_sub_1_0\')"><img src="' + item.perImg + '" alt=""></a></div>'
          str += '<a onclick="ktyd_Hinfo(' + item.id + ',' + item.standby + ',\'' + item.website + '\',\'kytd_sub_1_0\')"><div class="item_content fl"><h2>' + item.roleName + '</h2><p class="kxyj_title clearfix">职称 ：' + item.perPost + '</p>'

          str += '<p><i class="kxyj_mail fl"></i><span title="' + item.email + '">' + item.email + '</span></p><p><i class="kxyj_call fl"></i>' + item.telphone + '</p>'
          if (type == 0) {
            str += '<p><a href="http://' + item.website + '">课题组网址</a></p></div></a></div>'
          } else {
            str += '</div></a></div>'
          }

        })
        setDeptPorfile(55)
        $("#kytd_sub_1_0").html(str)
        fiveMenuClickEvent()
        if (type == 0) {
          $('#kytd_sub_1 .sub_title>ul>li').eq(0)
            .addClass("sub_tab")
            .siblings()
            .removeClass("sub_tab")
        }
      } else {
        $("#kytd_sub_1_0").html('<p>' + resTitle + '</p>')
      }




    }
  })
}
//量子传感于信息感知研究所
function kytd_QuantumList(depId, type) {
  $.ajax({
    url: baseUrl + 'sys/research/getPersonnel',
    data: {
      deptId: depId,
      type: type,
      standby: 2,
    },
    success: function (res) {
      // // console.log("量子list")
      // // console.log(res)
      if (sessionStorage.getItem("CNtoEn") == 1) {
        var resTitle = "暂无数据"
      } else {
        var resTitle = "No Data"
      }
      if (res.length !== 0) {
        str = ""
        res.forEach(function (item, index) {
          str += '<div class="sub_content_item clearfix"><div class="item_img fl">'
          str += '<a  class="fiveliangzizrjs fiveStep"  data-step="fiveliangzizrjs" data-index="' + index + '"  onclick="ktyd_Hinfo(' + item.id + ',' + item.standby + ',\'' + item.website + '\',\'kytd_sub_2_0\')"><img src="' + item.perImg + '" alt=""></a></div>'
          str += '<a onclick="ktyd_Hinfo(' + item.id + ',' + item.standby + ',\'' + item.website + '\',\'kytd_sub_2_0\')"><div class="item_content fl"><h2>' + item.roleName + '</h2><p class="kxyj_title clearfix">职称 ：' + item.perPost + '</p>'

          str += '<p><i class="kxyj_mail fl"></i><span title="' + item.email + '">' + item.email + '</span></p><p><i class="kxyj_call fl"></i>' + item.telphone + '</p>'
          if (type == 0) {
            str += '<p><a href="http://' + item.website + '">课题组网址</a></p></div></a></div>'
          } else {
            str += '</div></a></div>'
          }

        })
        setDeptPorfile(56)
        $("#kytd_sub_2_0").html(str)
        fiveMenuClickEvent()
        if (type == 0) {
          $('#kytd_sub_2 .sub_title>ul>li').eq(0)
            .addClass("sub_tab")
            .siblings()
            .removeClass("sub_tab")
        }
      } else {
        $("#kytd_sub_2_0").html('<p>' + resTitle + '</p>')
      }

    }
  })
}
//可靠性联合研究室
function kytd_ReliabilityList(depId, type) {
  $.ajax({
    url: baseUrl + 'sys/research/getPersonnel',
    data: {
      deptId: depId,
      type: type,
      standby: 2,
    },
    success: function (res) {
      // // console.log("可靠性list")
      // // console.log(res)
      if (sessionStorage.getItem("CNtoEn") == 1) {
        var resTitle = "暂无数据"
      } else {
        var resTitle = "No Data"
      }
      if (res.length !== 0) {
        str = ""
        res.forEach(function (item, index) {
          str += '<div class="sub_content_item clearfix"><div class="item_img fl">'
          str += '<a class="fivekekaoxingzrjs fiveStep"  data-step="fivekekaoxingzrjs" data-index="' + index + '"  onclick="ktyd_Hinfo(' + item.id + ',' + item.standby + ',\'' + item.website + '\',\'kytd_sub_3_0\')"><img src="' + item.perImg + '" alt=""></a></div>'
          str += '<a onclick="ktyd_Hinfo(' + item.id + ',' + item.standby + ',\'' + item.website + '\',\'kytd_sub_3_0\')"><div class="item_content fl"><h2>' + item.roleName + '</h2><p class="kxyj_title clearfix">职称 ：' + item.perPost + '</p>'

          str += '<p><i class="kxyj_mail fl"></i><span title="' + item.email + '">' + item.email + '</span></p><p><i class="kxyj_call fl"></i>' + item.telphone + '</p>'
          if (type == 0) {
            str += '<p><a href="http://' + item.website + '">课题组网址</a></p></div></a></div>'
          } else {
            str += '</div></a></div>'
          }

        })
        setDeptPorfile(57)
        $("#kytd_sub_3_0").html(str)
        fiveMenuClickEvent()
        if (type == 0) {
          $('#kytd_sub_3 .sub_title>ul>li').eq(0)
            .addClass("sub_tab")
            .siblings()
            .removeClass("sub_tab")
        }
      } else {
        $("#kytd_sub_3_0").html('<p>' + resTitle + '</p>')
      }




    }
  })
}
// 科研团地详情展示接口
function ktyd_Hinfo(personId, standby, website, des) {
  $.ajax({
    url: baseUrl + 'sys/research/getPersonnelDetail',
    data: {
      personId: personId,
      standby: standby
    },
    type: "POST",
    success: function (res) {
      console.log("website")
      console.log(website)

      var Ptitle = res.personnel
      var PDetail = res.personnelDetaillist
      // // console.log("res.personnel")
      // // console.log(PDetail)

      var str = ""
      //详情头部渲染
      if (Ptitle !== null) {
        var sex = ""
        if (Ptitle.sex !== null) {
          sex = Ptitle.sex == 1 ? '男' : '女'
        }
        if (Ptitle.perProfile) {
          var empty = Ptitle.perProfile
          var profile = "个人简介"
        } else {
          var empty = ""
          var profile = ""
        }
        //头部渲染

        str += '<div class="detailPage_Pi clearfix"><div class="detailPage_pi_img fl"><img src="' + Ptitle.perImg + '" alt=""></div>'
        str += '<div class="detaiPage_pi_info clearfix"><div class="fl" style="width:40%;"><h5>' + Ptitle.roleName + '</h5><span>性别:</span><span id="detaiPage_pi_info_sex">' + sex + '</span><br />'
        str += '<span>职称:</span><span id="detaiPage_pi_info_title">' + Ptitle.perPost + '</span><br />'
        str += '<span>邮箱:</span><span id="detaiPage_pi_info_mail">' + Ptitle.email + '</span><br />'
        str += '<span class="detail_pi_info_bottomspan"'
        if (website != "null") {
          str += 'id="detaiPage_pi_info_address">通信地址:' + Ptitle.addr + '</span><br /><p style="margin-top:12px;"><a href="http://' + website + '">课题组网址</a></p></div></div></div>'
        } else {
          str += 'id="detaiPage_pi_info_address">通信地址:' + Ptitle.addr + '</span><br /></div></div></div>'
        }
        //<a href="'+ Ptitle.website +'">课题组网址</a>
      }
      if (PDetail.length !== 0) {
        str += '<div class="detailPage_Pi_content clearfix">'
        if (empty) {
          // 人员简介
          // str += '<div class="fl" style="width:100%;height:100%;font-size:16px;text-align:left;border-bottom: 1px solid #ccc;padding-bottom: 24px;"><h2 style="margin-bottom:24px;font-size:18px;color:#165B9F;">' + profile + '</h2><p style="color:#666;font-size:14px">' + empty + '</p></div>'
        }
        PDetail.forEach(function (item, index) {
          if (item.content) {
            var content = item.content.split('|')
            str += '<div id=contentId' + index + ' class="detailPage_Pi_content_item"><h2>' + item.title + '</h2>'
            if (content.length > 0) {
              content.forEach(function (item, index) {
                str += '<p>' + item + '</p>'
              })
            }
            str += '</div>'
          }


        })
      }


      $('#' + des).html(str)

      // $("#contentId0").height($("#contentId1").height())

    },
    err: function (err) {
      // // console.log("错误信息")
      // // console.log(err)
    }
  })
}
//学术会议列表 sys/conference/list sys/studyactivity/list
function xshd_list() {
  $.ajax({
    url: baseUrl + "sys/conference/list",
    type: "POST",
    data: {
      language: languageStatus,
      page: 1,
      limit: 100,
    },
    success: function (res) {
      // // console.log("学术会议")
      // // console.log(res)

      var crumb = ""

      if (res.code == 0) {
        var data = res.page.list


        optionsXSHY.data = res.page.list
        //学术会议绘制分页
        pageXSHY.init(data.length, 1, optionsXSHY);
      }

    },
  })
}
//学术活动colluquirm
function xshd_colluquirm() {
  $.ajax({
    url: baseUrl + "sys/studyactivity/colluquirmlist",
    type: "POST",
    data: {
      language: languageStatus,
      page: 1,
      limit: 100,
    },
    success: function (res) {
      // // console.log("colluquirm")
      // // console.log(res)
      if (res.code == 0) {
        var data = res.page.list


        optionsColluquirm.data = res.page.list
        //Colluquirm绘制分页
        pageColluquirm.init(data.length, 1, optionsColluquirm);
      }
    },
  })
}
//学术活动seminar
function xshd_seminar() {
  $.ajax({
    url: baseUrl + "sys/studyactivity/seminarlist",
    type: "POST",
    data: {
      language: languageStatus,
      page: 1,
      limit: 100,
    },
    success: function (res) {
      // // console.log("seminar")
      // // console.log(res)
      if (res.code == 0) {
        var data = res.page.list


        optionsSeminar.data = res.page.list
        //seminar绘制分页
        pageSeminar.init(data.length, 1, optionsSeminar);
      }
    },
  })
}
//学术活动report
function xshd_report() {
  $.ajax({
    url: baseUrl + "sys/studyactivity/reportlist",
    type: "POST",
    data: {
      language: languageStatus,
      page: 1,
      limit: 100,
    },
    success: function (res) {
      // // console.log("reportlist")
      // // console.log(res)
      if (res.code == 0) {
        var data = res.page.list


        optionsReport.data = res.page.list
        //seminar绘制分页
        pageReport.init(data.length, 1, optionsReport);
      }
    },
  })
}
//学术活动详情info
function xshd_colluquirm_info(id, crumb) {
  $.ajax({
    url: baseUrl + "sys/studyactivity/info",
    type: "POST",
    data: {
      id: id
    },
    success: function (res) {

      // // console.log("colluquirm_info")
      // // console.log(res)

      var str = ""
      var desDom = $("#xshy_sub_a_1")
      if (sessionStorage.getItem("CNtoEn") == 1) {

        var resTitle = "暂无数据"
        var Bread = "当前位置：科学研究&bull;学术活动&bull;"
        if (crumb == 1) {
          crumb = "学术会议"
        } else if (crumb == 2) {
          crumb = "Colluquirm"
        } else if (crumb == 3) {
          crumb = "Seminar"
        } else if (crumb == 4) {
          crumb = "Report"
        }
      } else {
        if (crumb == 1) {
          crumb = "Meeting"
        } else if (crumb == 2) {
          crumb = "Colluquirm"
        } else if (crumb == 3) {
          crumb = "Seminar"
        } else if (crumb == 4) {
          crumb = "Report"
        }

        var resTitle = "No Data"
        var Bread = "Current location: Scientific Research &bull; Academic Activities &bull;"
      }
      if (res.code === 0) {
        var data = res.studyActivity
        if (data.date) {
          data.date = data.date.split(" ")[0]
        }
        if (data === null) {

          str += '<div class="bn clearfix"><h2 class="fl">' + crumb + '</h2><span class="fr">' + Bread + '' + crumb + '</span></div>'
          str += '<div class="right_view"><div class="sub_content"><p>' + resTitle + '</p></div></div>'
        } else {

          str += '<div class="bn clearfix"><h2 class="fl">' + crumb + '</h2><span class="fr">' + Bread + '' + crumb + '</span></div>'
          str += '<div class="right_view"><div class="sub_content"><h2>' + data.name + '</h2><span>' + data.date + '</span>'
          str += '<p>' + data.content + '</p></div></div>'
        }
        $(desDom).empty()
        $(desDom).append($(str))
        //学术会议详情页点击事件
        xshd_tab()
      }


    },
  })
}

//科研成果列表
function kycg_list_ajax() {

  $.ajax({
    url: baseUrl + "sys/speed/achievements/list",
    type: "POST",
    data: {
      language: languageStatus,
      limit: 30,
    },
    success: function (res) {
      // // console.log("科研成果")
      // // console.log(res)
      if (res.code == 0) {
        var data = res.page.list
        var str = ""
        if (data.length !== 0) {
          layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage
              , layer = layui.layer;
            //调用分页
            laypage.render({
              elem: 'kxyj_laypage'
              , count: data.length
              , limit: 30
              , jump: function (obj) {
                //模拟渲染
                document.getElementById('kyjz_sub_contenta').innerHTML = function () {
                  var arr = []
                    , thisData = data.concat().splice(obj.curr * obj.limit - obj.limit, obj.limit);
                  layui.each(thisData, function (index, item) {
                    var content = ""
                    var str = ""
                    if (item.standby != null) {
                      content = item.standby.replace(/&amp;nbsp;/g, "&#10;").slice(0, 100)
                    }
                    if (item.createTime != null) {
                      var currDate = item.createTime.split(" ")[0]
                    }
                    str += '<div class="kyjz_sub_item data-id="' + index + '" clearfix"><div class="kyjz_sub_picture lsyg_fl"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div>'
                    str += '<div class="kyjz_sub_context  lsyg_rl fivekekycg fiveStep"  data-step="fivekekycg" data-index="' + index + '"  onclick=kycg_info_ajax(' + item.id + ')><h5>' + item.title + '</h5><p>' + content + '</p><i>' + currDate + '</i></div></div>'
                    arr.push('<li>' + str + '</li>');
                  });
                  return arr.join('');
                }();
              }
            });
          })


















          //   // 如果有数据循环
          //   data.forEach(function (item, index) {
          //     var content = ""
          //     if (item.standby != null) {
          //       content = item.standby.replace(/&amp;nbsp;/g, "&#10;").slice(0, 100)
          //     }
          //     if (item.createTime != null) {
          //       var currDate = item.createTime.split(" ")[0]
          //     }

          //     str += '<div class="kyjz_sub_item data-id="' + index + '" clearfix"><div class="kyjz_sub_picture lsyg_fl"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div>'
          //     str += '<div class="kyjz_sub_context  lsyg_rl fivekekycg fiveStep"  data-step="fivekekycg" data-index="' + index + '"  onclick=kycg_info_ajax(' + item.id + ')><h5>' + item.title + '</h5><p>' + content + '</p><i>' + currDate + '</i></div></div>'
          //   })
          // } else {
          //   if (sessionStorage.getItem("CNtoEn") == 1) {
          //     var temp = "暂无数据"
          //   } else {
          //     var temp = "No Data"
          //   }

          //   str += '<div class="kyjz_sub_item clearfix"><div class="kyjz_sub_picture lsyg_fl"><img src="" alt=""></div>'
          //   str += '<div class="kyjz_sub_context  lsyg_rl" >' + temp + '</div></div>'
          // }


          // $("#kyjz_sub_a .kyjz_sub_content").html(str)
          fiveMenuClickEvent()
        }
      }
    },
  })
}
//科研成果详情
function kycg_info_ajax(id) {
  // // console.log("详情id")
  // // console.log(id)
  console.log("123467788")
  $.ajax({
    url: baseUrl + "sys/speed/achievementsinfo",
    type: "POST",
    data: {
      id: id,
    },
    success: function (res) {
      // // console.log("详情")
      // // console.log(res)
      if (sessionStorage.getItem("CNtoEn") == 1) {
        var resTitle = "暂无数据"
      } else {
        var resTitle = "No Data"
      }
      if (res.code == 0) {
        var data = res.data
        var content = ""
        var str = ""
        if (data.content != null) {
          content = data.content.replace(/&amp;nbsp;/g, "&#10;")
          if (data.createTime) {
            data.createTime = data.createTime.split(" ")[0]
          }
          str += '<h2>' + data.title + '</h2><span>' + data.createTime + '</span><p>' + content + '</p>'
        } else {

          str += '<h2></h2><span></span><p>' + resTitle + '</p>'
        }

        $("#kyjz_sub_contenta").empty()
        $("#kyjz_sub_contenta").append($(str))

      }


    }
  })
}
//奖励概况
function jlgk_list_ajax() {

  $.ajax({
    url: baseUrl + "sys/speed/reward/list",
    type: "POST",
    data: {
      language: languageStatus,
      limit: 30,
    },
    success: function (res) {
      // // console.log("奖励概况")
      // // console.log(res)
      var data = res.page.list
      var str = ""
      if (res.code === 0) {
        // if (data.length !== 0) {
        //   if (sessionStorage.getItem("CNtoEn") == 1) {
        //     var resTitle = "暂无数据"
        //   } else {
        //     var resTitle = "No Data"
        //   }
        //   // 如果有数据循环
        //   data.forEach(function (item, index) {

        //     var content = ""
        //     if (item.standby != null) {
        //       content = item.standby.replace(/&amp;nbsp;/g, "&#10;").slice(0, 100)
        //     }
        //     if (item.createTime != null) {
        //       var currDate = item.createTime.split(" ")[0]
        //     }
        //     str += '<div class="kyjz_sub_item data-id="' + index + '" clearfix"><div class="kyjz_sub_picture lsyg_fl"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div>'
        //     str += '<div class="kyjz_sub_context  lsyg_rl fivekejlgk fiveStep"  data-step="fivekejlgk" data-index="' + index + '"  onclick=jlgk_info_ajax(' + item.id + ')><h5>' + item.title + '</h5><p>' + content + '</p><i>' + currDate + '</i></div></div>'
        //   })
        // } else {
        //   if (sessionStorage.getItem("CNtoEn") == 1) {
        //     var resTitle = "暂无数据"
        //   } else {
        //     var resTitle = "No Data"
        //   }
        //   str += '<div class="kyjz_sub_item clearfix"><div class="kyjz_sub_picture lsyg_fl"><img src="" alt="">'
        //   str += '</div><div class="kyjz_sub_context  lsyg_rl" >' + resTitle + '</div></div>'
        // }
        if (data.length !== 0) {
          layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage
              , layer = layui.layer;
            //调用分页
            laypage.render({
              elem: 'jlgk_laypage'
              , count: data.length
              , limit: 30
              , jump: function (obj) {
                //模拟渲染
                document.getElementById('kyjz_sub_contentb').innerHTML = function () {
                  var arr = []
                    , thisData = data.concat().splice(obj.curr * obj.limit - obj.limit, obj.limit);
                  layui.each(thisData, function (index, item) {
                    var content = ""
                    var str = ""
                    if (item.standby != null) {
                      content = item.standby.replace(/&amp;nbsp;/g, "&#10;").slice(0, 100)
                    }
                    if (item.createTime != null) {
                      var currDate = item.createTime.split(" ")[0]
                    }
                    str += '<div class="kyjz_sub_item data-id="' + index + '" clearfix"><div class="kyjz_sub_picture lsyg_fl"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div>'
                    str += '<div class="kyjz_sub_context  lsyg_rl fivekejlgk fiveStep"  data-step="fivekejlgk" data-index="' + index + '"  onclick=jlgk_info_ajax(' + item.id + ')><h5>' + item.title + '</h5><p>' + content + '</p><i>' + currDate + '</i></div></div>'
                    arr.push('<li>' + str + '</li>');
                  });
                  return arr.join('');
                }();
              }
            });
          })
          fiveMenuClickEvent()
        }


      }

      // $("#kyjz_sub_b .kyjz_sub_content").html(str)
      fiveMenuClickEvent()
    },
  })
}

function jlgk_info_ajax(id) {
  $.ajax({
    url: baseUrl + "sys/speed/achievementsinfo",
    type: "POST",
    data: {
      id: id
    },
    success: function (res) {

      if (res.code === 0) {
        var data = res.data
        var content = ""
        if (data.content != null) {
          content = data.content.replace(/&amp;nbsp;/g, "&#10;")
        }
        var str = ""
        if (data.createTime != null) {
          var currDate = data.createTime.split(" ")[0]
        }
        str += '<h2>' + data.title + '</h2><span>' + currDate + '</span><p>' + content + '</p>'
        $("#kyjz_sub_contentb").empty()
        $("#kyjz_sub_contentb").append($(str))

      }


    }
  })
}
//科研项目
function kyxm_list_ajax() {

  $.ajax({
    url: baseUrl + "sys/speed/profile/list",
    type: "POST",
    data: {
      language: languageStatus,
      limit: 30,
    },
    success: function (res) {
      // // console.log("res")
      var data = res.page.list
      var str = ""
      if (res.code === 0) {
        // if (data.length !== 0) {
        //   if (sessionStorage.getItem("CNtoEn") == 1) {
        //     var resTitle = "暂无数据"
        //   } else {
        //     var resTitle = "No Data"
        //   }
        //   // 如果有数据循环
        //   data.forEach(function (item, index) {
        //     var content = ""
        //     if (item.standby != null) {
        //       content = item.standby.replace(/&amp;nbsp;/g, "&#10;").slice(0, 100)
        //     }
        //     if (item.createTime != null) {
        //       var currDate = item.createTime.split(" ")[0]
        //     }
        //     str += '<div class="kyjz_sub_item data-id="' + index + '" clearfix"><div class="kyjz_sub_picture lsyg_fl"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div>'
        //     str += '<div class="kyjz_sub_context  lsyg_rl fivekyxm fiveStep"  data-step="fivekyxm" data-index="' + index + '"  onclick=kyxm_info_ajax(' + item.id + ')><h5>' + item.title + '</h5><p>' + content + '</p><i>' + currDate + '</i></div></div>'
        //   })
        // } else {


        //   str += '<div class="kyjz_sub_item clearfix"><div class="kyjz_sub_picture lsyg_fl"><img src="" alt="">'
        //   str += '</div><div class="kyjz_sub_context  lsyg_rl" >' + resTitle + '</div></div>'
        // }
        // $("#kyjz_sub_c .kyjz_sub_content").html(str)
        if (data.length !== 0) {
          layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage
              , layer = layui.layer;
            //调用分页
            laypage.render({
              elem: 'kyxm_laypage'
              , count: data.length
              , limit: 30
              , jump: function (obj) {
                //模拟渲染
                document.getElementById('kyjz_sub_contentc').innerHTML = function () {
                  var arr = []
                    , thisData = data.concat().splice(obj.curr * obj.limit - obj.limit, obj.limit);
                  layui.each(thisData, function (index, item) {
                    var content = ""
                    var str = ""
                    if (item.standby != null) {
                      content = item.standby.replace(/&amp;nbsp;/g, "&#10;").slice(0, 100)
                    }
                    if (item.createTime != null) {
                      var currDate = item.createTime.split(" ")[0]
                    }
                    str += '<div class="kyjz_sub_item data-id="' + index + '" clearfix"><div class="kyjz_sub_picture lsyg_fl"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div>'
                    str += '<div class="kyjz_sub_context  lsyg_rl fivekyxm fiveStep"  data-step="fivekyxm" data-index="' + index + '"  onclick=kyxm_info_ajax(' + item.id + ')><h5>' + item.title + '</h5><p>' + content + '</p><i>' + currDate + '</i></div></div>'
                    arr.push('<li>' + str + '</li>');
                  });
                  console.log(arr)
                  return arr.join('');
                }();
              }
            });
          })
          fiveMenuClickEvent()
        }

      }

    },
  })
}

function kyxm_info_ajax(id) {
  $.ajax({
    url: baseUrl + "sys/speed/profileinfo",
    type: "POST",
    data: {
      id: id
    },
    success: function (res) {
      var data = res.data
      var content = ""
      var str = ""

      if (res.code === 0) {
        if (data.content != null) {
          content = data.content.replace(/&amp;nbsp;/g, "&#10;")
          if (data.createTime) {
            data.createTime = data.createTime.split(" ")[0]
          }
        }

        str += '<h2>' + data.title + '</h2><span>' + data.createTime + '</span><p>' + content + '</p>'
        $("#kyjz_sub_contentc").empty()
        $("#kyjz_sub_contentc").append($(str))



      }



    }
  })
}
//前沿研修
function qyyx_list_ajax() {

  $.ajax({
    url: baseUrl + "sys/speed/training/list",
    type: "POST",
    data: {
      language: languageStatus,
    },
    success: function (res) {
      // // console.log("前言研修")
      // // console.log(res)
      var data = res.page.list
      var str = ""
      if (data.length !== 0) {
        str += '<ul class="clearfix">'
        data.forEach(function (item, index) {
          var time = ""
          var title = ""
          if (item.title != "") {
            title = item.title.substr(0, 30)
            title += "..."
          }
          if (item.createTime != null) {
            time = item.createTime.split(" ")[0]
          }
          if (item.createTime != null) {
            var currDate = item.createTime.split(" ")[0]
          }
          str += '<li data-id="kyjz_sub_d_1" onclick="qyyx_info_ajax(' + item.id + ')" class="clearfix"><span class="fl">' + title + '</span><span class="fr">' + currDate + '</span></li>'
        })
        str += '</ul>'
      } else {
        if (sessionStorage.getItem("CNtoEn") == 1) {
          var temp = "暂无数据"
        } else {
          var temp = "No Data"
        }
        str += '<li  class="clearfix"><span class="fl">' + temp + '</span><span class="fr"></span></li>'
      }
      $("#kyjz_sub_d .kyjz_sub_content").empty()
      $("#kyjz_sub_d .kyjz_sub_content").append($(str))
    },
  })
}

function qyyx_info_ajax(id) {
  $.ajax({
    url: baseUrl + "sys/speed/traininginfo",
    type: "POST",
    data: {
      id: id,
    },
    success: function (res) {
      var time = ""

      var data = res.data
      var content = ""
      if (data.content != null) {
        content = data.content.replace(/&amp;nbsp;/g, "&#10;")
        if (data.createTime) {
          data.createTime = data.createTime.split(" ")[0]
        }
      }
      var str = ""
      str += '<h2>' + data.title + '</h2><span>' + data.createTime + '</span><p>' + content + '</p>'
      $("#kyjz_sub_d .kyjz_sub_content").empty()
      $("#kyjz_sub_d .kyjz_sub_content").append($(str))

    }
  })
}

// 静态资源中英文切换
var kxyj_languageObj = {
  "titleCn": ["科研团队", "学术活动", "科研进展"],
  "titleEn": ["Research", "Academic", "Scientific"],
  "kytd_subMenuCn": ["高能量密度物理研究室", "核物理技术研究室", "量子传感与信息感知研究室", "可靠性联合研究室"],
  "kytd_subMenuEn": ["High Energy Density", "Nuclear Physics TC", "Quantum Sensing Info Awareness", "Reliability Joint "],
  "kytd_breadCn": ['当前位置：<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">科研团队</a>&bull;高能量密度物理研究室', '当前位置：<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">科研团队</a>&bull;核物理技术研究室', '当前位置：<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">科研团队</a>&bull;量子传感与信息感知研究室', '当前位置：<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">科研团队</a>&bull;可靠性联合研究室'],
  "kytd_breadEn": ['Current location: <a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">Scientific research</a>&bull;High Energy Density Physics Laboratory', 'Current location: <a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">Scientific research</a>&bull;Nuclear Physics Technology Laboratory', 'Current location: <a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">Scientific research</a>&bull;Quantum Sensing', 'Current location: <a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">Scientific research</a>&bull;Reliability Joint Research Laboratory'],
  "xshd_breadCn": ['当前位置：<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">学术活动</a>&bull;', '当前位置：<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">学术活动</a>&bull;', '当前位置：<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">学术活动</a>&bull;', '当前位置：<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">学术活动</a>&bull;'],
  "xshd_breadEn": ['Current location:<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">Scientific research</a>&bull;', 'Current location: <a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">Scientific research</a>&bull;', 'Current location:<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">Scientific research</a>&bull; ', 'Current location:<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">Scientific research</a>&bull; '],
  "kyjz_subMenuCn": ["科研成果", "奖励概况", "科研项目", "前沿研修"],
  "kyjz_subMenuEn": ["Scientific", "Reward profile", "Project", "Frontier"],
  "kycg_breadCn": ['当前位置：<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">科研进展</a>&bull;科研成果', '当前位置：<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">科研进展</a>&bull;奖励概况', '当前位置：<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">科研进展</a>&bull;科研项目', '当前位置：<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">科研进展</a>&bull;前沿研修'],
  "kycg_breadEn": ['Current location: <a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">Scientific research</a>&bull;Research results', 'Current location:<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">Scientific research</a>&bull; Award profile', 'Current location: <a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">Scientific research</a>&bull;Research projects', 'Current location:<a href="../subPage/menu.html?prevName=科学研究&prevEname=Research&menuId=70">Scientific research</a>&bull; Frontier training'],
  "xshyTheadCn": ["日期", "标题", "地点", "汇报人", "日期", "标题", "地点", "汇报人", "日期", "标题", "地点", "汇报人", "日期", "标题", "地点", "汇报人"],
  "xshyTheadEn": ["Date", "Title", "Location", "Reported by", "Date", "Title", "Location", "Reported by", "Date", "Title", "Location", "Reported by", "Date", "Title", "Location", "Reported by"],
}
if (languageStatus == 1) {
  //标题
  $("li[name = kxyj_title]").each(function (index, item) {
    $(item).text(kxyj_languageObj["titleCn"][index])
  })
  $("span[name = kxyj_title]").each(function (index, item) {
    $(item).text(kxyj_languageObj["titleCn"][index])
  })
  $("li[name = kyjz_subMenu]").each(function (index, item) {
    $(item).text(kxyj_languageObj["kyjz_subMenuCn"][index])
  })
  $("h2[name = kyjz_subMenu]").each(function (index, item) {
    $(item).text(kxyj_languageObj["kyjz_subMenuCn"][index])
  })
  //菜单
  $("li[name = kytd_subMenu]").each(function (index, item) {
    $(item).text(kxyj_languageObj["kytd_subMenuCn"][index])
  })
  $("span[name = kytd_subMenu]").each(function (index, item) {
    $(item).text(kxyj_languageObj["kytd_subMenuCn"][index])
  })
  //学术会议
  $("li[name = xshy]").text("学术会议")
  $("h2[name = syhy]").text("学术会议")
  $("span[name = syhy]").text("学术会议")
  //面包屑
  $("span[name = kytd_bread]").each(function (index, item) {
    $(item).html(kxyj_languageObj["kytd_breadCn"][index])
  })
  $("span[name = xshd_bread]").each(function (index, item) {
    $(item).html(kxyj_languageObj["xshd_breadCn"][index])
  })
  $("span[name = kycg_bread]").each(function (index, item) {
    $(item).html(kxyj_languageObj["kycg_breadCn"][index])
  })
  //学术活动thead信息
  $('td[name = xshyThead]').each(function (index, item) {
    $(item).text(kxyj_languageObj["xshyTheadCn"][index])

  })

  $('h2[name = kytdIntroduction]').each(function (index, item) {
    $(item).text(kxyj_languageObj["titleCn"][index])
  })
} else if (languageStatus == 0) {
  //标题
  $("li[name = kxyj_title]").each(function (index, item) {
    $(item).text(kxyj_languageObj["titleEn"][index])
  })
  $("span[name = kxyj_title]").each(function (index, item) {

    $(item).text(kxyj_languageObj["titleEn"][index])
  })
  $("li[name = kyjz_subMenu]").each(function (index, item) {
    $(item).text(kxyj_languageObj["kyjz_subMenuEn"][index])
  })
  $("h2[name = kyjz_subMenu]").each(function (index, item) {
    $(item).text(kxyj_languageObj["kyjz_subMenuEn"][index])
  })
  //菜单
  $("li[name = kytd_subMenu]").each(function (index, item) {
    $(item).text(kxyj_languageObj["kytd_subMenuEn"][index])
  })
  $("h2[name = kytd_subMenu]").each(function (index, item) {
    $(item).text(kxyj_languageObj["kytd_subMenuEn"][index])
  })
  //学术会议
  $("li[name = xshy]").text("Meeting")
  $("h2[name = syhy]").text("academic conference")
  $("span[name = syhy]").text("academic conference")
  //面包屑
  $("span[name = kytd_bread]").each(function (index, item) {
    $(item).html(kxyj_languageObj["kytd_breadEn"][index])
  })
  $("span[name = xshd_bread]").each(function (index, item) {

    $(item).html(kxyj_languageObj["xshd_breadEn"][index])
  })
  $("span[name = kycg_bread]").each(function (index, item) {
    $(item).html(kxyj_languageObj["kycg_breadEn"][index])
  })
  $('td[name = xshyThead]').each(function (index, item) {
    $(item).text(kxyj_languageObj["xshyTheadEn"][index])

  })
  $('h2[name = kytdIntroduction]').each(function (index, item) {
    $(item).html(kxyj_languageObj["titleEn"][index])
  })
}
//学术会议分页
var optionsXSHY = {
  "id": "page_sshy", //显示页码的元素
  "data": null, //显示数据
  "maxshowpageitem": 4, //最多显示的页码个数
  "pagelistcount": 5, //每页显示数据个数
  "callBack": function (result) {


    var str = ""
    if (sessionStorage.getItem("CNtoEn") == 1) {
      crumb = "学术会议"
      var resTitle = "暂无数据"

    } else {
      crumb = "Academic conference"
      var resTitle = "No Data"

    }
    var desDom = $("#xshy_sub_d .sub_content tbody")

    if (result.length === 0) {

      str += '<tr style="cursor:default"><td style="width:80px"></td><td><span>' + resTitle + '</span></td><td></td><td></td></tr>'
    } else {
      result.forEach(function (item, index) {
        var createTime = ""
        var content = ""
        if (item.name != null) {
          content = item.name
        }
        if (item.date != null) {
          createTime = item.date.split(" ")[0]
        }

        str += '<tr><td style="width:80px">' + createTime + '</td><td  ><a href="../subPage/sxhyInfo.html?id=' + item.id + '">' + content + '</a></td><td style="width:120px">' + item.address + '</td><td style="width:120px">' + item.reptor + '</td></tr>'
      })
    }

    $(desDom).empty()
    $(desDom).append($(str))
    //学术会议详情页点击事件
    xshd_tab()
    $("#demoContentSYHT").html(str); //将数据增加到页面中
  }

};
//Colluquirm分页
var optionsColluquirm = {
  "id": "page_colluquirm", //显示页码的元素
  "data": null, //显示数据
  "maxshowpageitem": 4, //最多显示的页码个数
  "pagelistcount": 5, //每页显示数据个数
  "callBack": function (result) {


    var str = ""
    if (sessionStorage.getItem("CNtoEn") == 1) {
      crumb = "学术会议"
      var resTitle = "暂无数据"

    } else {
      crumb = "Academic conference"
      var resTitle = "No Data"

    }
    var desDom = $("#xshy_sub_a .sub_content tbody")

    if (result.length === 0) {

      str += '<tr style="cursor:default"><td style="width:80px"></td><td><span>' + resTitle + '</span></td><td></td><td></td></tr>'
    } else {
      result.forEach(function (item, index) {
        var createTime = ""
        var content = ""
        if (item.name != null) {
          content = item.name
        }
        if (item.date != null) {
          createTime = item.date.split(" ")[0]
        }

        str += '<tr><td style="width:80px">' + createTime + '</td><td data-id="xshy_sub_a_1" class="fiveColluquirm fiveStep"  data-step="fiveColluquirm" data-index="' + index + '"   onclick="xshd_colluquirm_info(' + item.id + ',1)"><a>' + content + '</a></td><td style="width:120px">' + item.address + '</td><td style="width:120px">' + item.reptor + '</td></tr>'
      })
    }




    $(desDom).html(str)
    fiveMenuClickEvent()
    //学术会议详情页点击事件
    xshd_tab()
    $("#demoContentColluquirm").html(str); //将数据增加到页面中
  }

};
//Seminar分页
var optionsSeminar = {
  "id": "page_seminar", //显示页码的元素
  "data": null, //显示数据
  "maxshowpageitem": 4, //最多显示的页码个数
  "pagelistcount": 5, //每页显示数据个数
  "callBack": function (result) {


    var str = ""
    if (sessionStorage.getItem("CNtoEn") == 1) {
      crumb = "学术会议"
      var resTitle = "暂无数据"

    } else {
      crumb = "Academic conference"
      var resTitle = "No Data"

    }
    var desDom = $("#xshy_sub_b .sub_content tbody")

    if (result.length === 0) {

      str += '<tr style="cursor:default"><td style="width:80px"></td><td><span>' + resTitle + '</span></td><td></td><td></td></tr>'
    } else {
      result.forEach(function (item, index) {
        var createTime = ""
        var content = ""
        if (item.name != null) {
          content = item.name
        }
        if (item.date != null) {
          createTime = item.date.split(" ")[0]
        }

        str += '<tr><td style="width:80px">' + createTime + '</td><td data-id="xshy_sub_a_1" class="fiveSeminar fiveStep"  data-step="fiveSeminar" data-index="' + index + '"    onclick="xshd_colluquirm_info(' + item.id + ',1)"><a>' + content + '</a></td><td style="width:120px">' + item.address + '</td><td style="width:120px">' + item.reptor + '</td></tr>'
      })
    }

    $(desDom).html(str)
    fiveMenuClickEvent()
    //学术会议详情页点击事件
    xshd_tab()
    $("#demoContentSeminar").html(str); //将数据增加到页面中
  }

};
//Report分页
var optionsReport = {
  "id": "page_report", //显示页码的元素
  "data": null, //显示数据
  "maxshowpageitem": 4, //最多显示的页码个数
  "pagelistcount": 5, //每页显示数据个数
  "callBack": function (result) {
    var str = ""
    if (sessionStorage.getItem("CNtoEn") == 1) {

      var resTitle = "暂无数据"

    } else {
      crumb = "Academic conference"
      var resTitle = "No Data"

    }
    var desDom = $("#xshy_sub_c .sub_content tbody")

    if (result.length === 0) {

      str += '<tr style="cursor:default"><td style="width:80px"></td><td><span>' + resTitle + '</span></td><td></td><td></td></tr>'
    } else {
      result.forEach(function (item, index) {
        var createTime = ""
        var content = ""
        if (item.name != null) {
          content = item.name
        }
        if (item.createTime != null) {
          createTime = item.createTime.split(" ")[0]
        }

        str += '<tr><td style="width:80px">' + createTime + '</td><td data-id="xshy_sub_a_1" class="fiveReport fiveStep"  data-step="fiveReport" data-index="' + index + '" onclick="xshd_colluquirm_info(' + item.id + ',1)"><a>' + content + '</a></td><td style="width:120px">' + item.address + '</td><td style="width:120px">' + item.reptor + '</td></tr>'
      })
    }




    $(desDom).html(str)
    fiveMenuClickEvent()
    //学术会议详情页点击事件
    xshd_tab()
    $("#demoContentReport").html(str); //将数据增加到页面中
  }

};
$('li[name = kxyj_title]').on("click", tabBarClick)

function tabBarClick(e) {

  var val = e.target.innerHTML
  // // console.log(val)
  // // console.log($('#kxyj_intro'))
  if (val == "科研团队" || val == "Research") {
    $('#kytd_intro')
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
  } else if (val == "学术活动" || val == "Academic") {
    $('#xshd_intro')
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
  } else {
    $('#kyjz_intro')
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
  }
}
xsIntro(302)
xsIntro(303)
xsIntro(304)
//简介接口
function xsIntro(type) {
  $.ajax({
    url: baseUrl + "sys/instroduction/instroList",
    data: {
      language: sessionStorage.getItem("CNtoEn"),
      type: type,
    },
    success: function (res) {
      // // console.log("简介内容")
      // // console.log(res)
      if (res.code == 0) {
        if (type == 302) {
          var desDom = $('p[name  = kytd]')
        } else if (type == 303) {
          var desDom = $('p[name  = xshd]')
        } else {
          var desDom = $('p[name  = kyjz]')
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

//我们需要首次加载的时候获取url如果在dom加载完成后，会和增加的dom事件冲突将后续的事件序列清空
//给二级标题增加点击事件
var steps = [".twoStep", ".threeStep", ".fourStep"]
steps.forEach(function (item, index) {
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
  //设置默认展示
  li_trigger()
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
              // console.log('三级层级以上' + tempArr[0])
              // console.log($('.' + tempArr[0]))
              if ($('.' + tempArr[0]).length == 0) {
                setTimeout(function () {

                  $('.' + tempArr[0]).eq(tempArr[1]).trigger("click")
                }, 500)
              } else {

                $('.' + tempArr[0]).eq(tempArr[1]).trigger("click")
              }


            }

          }
        })
      }
    }


  }
}
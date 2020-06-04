//设置培养单位_点击哨兵
var pydwIsClick = false
/**tab栏切换效果 */
//顶部tab栏函数
kygk_tab()
//科研团队
kytd_tab()
//右侧显示区域点击事件
xwxk_tab()
//认证是否登录
isLogin()

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
  // // console.log(zzjg_tabs)
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
    // // console.log($('#' + id))
    // // console.log("左侧菜单点击事件触发")
    $('#' + id)
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
  })


}

function xwxk_tab() {
  var conta = $(".zzjg_sub .right_view .sub_content>ul")
  var contimg = $("#xsPage_section .right_view .sub_content_img_style")
  var sub_content = $("#xssw_sub_a  .sub_title")
  var sub_content_jyxx_sub_b = $("#jyxx_sub_b  .sub_title")
  var sub_content_jyxx_sub_c = $("#jyxx_sub_c  .sub_title")
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
    // console.log(id)
    $("#" + id)
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
    return
  })
  $(sub_content).on("click", "li", function () {
    var id = $(this).data("id")
    // console.log(id)
    $("#" + id)
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
    return
  })
  $(sub_content_jyxx_sub_b).on("click", "li", function () {
    var id = $(this).data("id")
    // console.log(id)
    $("#" + id)
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
    return
  })
  $(sub_content_jyxx_sub_c).on("click", "li", function () {
    var id = $(this).data("id")
    // console.log(id)
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
var languageStatus = sessionStorage.getItem("CNtoEn")
//学术讲座分页
//分页参数对象学术讲座
// 疑难求助贴吧列表
helpList()
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
    var maxshowpageitem = page.maxshowpageitem;
    if (maxshowpageitem != null && maxshowpageitem > 0 && maxshowpageitem != "") {
      page.maxshowpageitem = maxshowpageitem;
    }
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
    page.initWithUl(listCount, currentPage);
    page.initPageEvent(listCount);
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
    // console.log(result)
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

    if (sessionStorage.getItem("CNtoEn") == 1) {
      //中文
      var home = "首页"
      var prev = "上一页"
      var next = "下一页"
      var end = "尾页"


    } else {
      //英文
      var home = "Home"
      var prev = "Prev"
      var next = "Next"
      var end = "End"

    }
    if (prePage <= 0) {
      prePageClass = "pageItemDisable";
    }
    if (nextPage > pageCount) {
      nextPageClass = "pageItemDisable";
    }
    var appendStr = "";
    appendStr += "<li class='" + prePageClass + "' page-data='1' page-rel='firstpage'>" + home + "</li>";
    appendStr += "<li class='" + prePageClass + "' page-data='" + prePage + "' page-rel='prepage'>&lt;" + prev + "</li>";
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
    appendStr += "<li class='" + nextPageClass + "' page-data='" + nextPage + "' page-rel='nextpage'>" + next + "&gt;</li>";
    appendStr += "<li class='" + nextPageClass + "' page-data='" + pageCount + "' page-rel='lastpage'>" + end + "</li>";
    return appendStr;

  }
}

let options = {
  "id": "page", //显示页码的元素
  "data": null, //显示数据
  "maxshowpageitem": 3, //最多显示的页码个数
  "pagelistcount": 4, //每页显示数据个数
  "callBack": function (result) {


    var cHtml = "";
    for (var i = 0; i < result.length; i++) {
      var content = ""
      if (result[i].content != null) {
        content += result[i].content.replace(/&amp;nbsp;/g, "&#10;")
      }

      var index = result[i].publishTime.lastIndexOf(":")
      var publishTime = result[i].publishTime.substr(0, index)
      // // console.log(typeof(result[i].userName))

      if (result[i].userName == null) {
        var userName = ""
      } else {
        var userName = result[i].userName
      }
      cHtml += '<li data-id="xkyw_sub_g_1" onclick="helpCommitList(' + result[i].id + ',' + result[i].userid + ')"><div class="LostHeader clearfix"><div class="leftTitle fl">'
      cHtml += '<span>' + result[i].userName + '</span></div><div class="rightTitle fr"><span>' + publishTime + '</span></div>'
      cHtml += '</div><div class="LostContent"><span> ' + content + '</span></div></li>'
      //处理数据
    }

    $("#seekHelp").html(cHtml); //将数据增加到页面中


  }
};


//中英文切换
var sysLanguageObj = {
  sysMenuCn: ["科研服务系统", "管理服务系统", "学生服务系统", "生活服务系统", "办事指南", "疑难求助贴吧", ],
  sysMenuEn: ["Research service", "Management service ", "Student service ", "Life service ", "handling guideline", "Difficult to help post it", ],
  sysOneBreadCn: ["当前位置：门户系统▪管理服务系统", "当前位置：门户系统▪管理服务系统", "当前位置：门户系统▪学生服务系统", "当前位置：门户系统▪生活服务系统", "当前位置：教育教学▪学生事务▪办事指南", "当前位置：门户系统▪疑难求助贴吧", "当前位置：门户系统▪规章制度", "当前位置：门户系统▪下载中心"],
  sysOneBreadEn: ["Current location: Portal system management service system", "Current location: Portal system management service system", "Current location: Portal system feels student service system", "Current location: Portal system feels life service system", "Current location: Education and teaching, student affairs, service guide", "Current location: The portal system feels difficult to ask for help", "Current location: Portal system rules and regulations", "Current location: Portal system ▪ Download Center"],
  subTitleCn: ["办事指南", "疑难求助贴吧", ],
  subTitleEn: ["Service Guide", "Difficult Help Post", ],
  subBreadCn: ["当前位置：门户系统&bull;办事指南", "当前位置：门户网站&bull;疑难求助贴吧", ],
  subBreadEn: ["Current location: Portal System &bull; Service Guide", "Current location: Portal &bull;Difficult to help post it", ],
  serverSysSubTitleCn: ["服务系统"],
  serverSysSubTitleEn: ["Service system"],
}
if (languageStatus == 1) {
  //左侧目录
  languageChange("li[name = sysMenu]", "sysMenuCn", sysLanguageObj)
  languageChange("h2[name = sysMenu]", "sysMenuCn", sysLanguageObj)
  //标题
  $("li[name = sysTitle]").html("门户系统")
  $("span[name = sysSubTitle]").html("科研服务系统")
  //面包屑
  languageChange("span[name = sysOneBread]", "sysOneBreadCn", sysLanguageObj)
  // 子标题头部
  languageChange("h2[name = subTitle]", "subTitleCn", sysLanguageObj)
  // 子标题面包屑
  languageChange("span[name = subBread]", "subBreadCn", sysLanguageObj)
  // 子标题title
  languageChange("h2[name = serverSysSubTitle]", "serverSysSubTitleCn", sysLanguageObj)
} else {
  //左侧目录
  languageChange("li[name = sysMenu]", "sysMenuEn", sysLanguageObj)
  languageChange("h2[name = sysMenu]", "sysMenuEn", sysLanguageObj)
  //标题
  $("li[name = sysTitle]").html("Portal system").css({
    "padding": "0 5px"
  })
  $("span[name = sysSubTitle]").html("Research service ")
  //面包屑
  languageChange("span[name = sysOneBread]", "sysOneBreadEn", sysLanguageObj)
  // 子标题头部
  languageChange("h2[name = subTitle]", "subTitleEn", sysLanguageObj)
  // 子标题面包屑
  languageChange("span[name = subBread]", "subBreadEn", sysLanguageObj)
  // 子标题title
  languageChange("h2[name = serverSysSubTitle]", "serverSysSubTitleEn", sysLanguageObj)

}
/**
 * @门户网站三个服务的详情面包屑还没有写
 * @需要通过调用数据动态渲染等接口好了在写
 */
//设置子页面默认展示效果
li_trigger()

function li_trigger() {

  var str = window.location.href
  var index = str.indexOf("=")
  var id = str.substr(index + 1, 1)
  $('.left_menu>ul>li').eq(id).trigger("click")
}
// 富文本编辑器
layui.use(['layedit'], function () {
  var layedit = layui.layedit;
  var laypage = layui.laypage
  var layer = layui.layer
  var index = layedit.build('HomeSys', {
    hideTool: ["face"],
    heigth: 200,
    // uploadImage:"../../../../../"
  }); //建立编辑器
  //编辑器外部操作
  var active = {
    content: function () {
      submitComment(layedit.getContent(index))
    },
    text: function () {
      alert(layedit.getText(index)); //获取编辑器纯文本内容
    },
    selection: function () {
      alert(layedit.getSelection(index));
    }
  };
  //将layui自己的jquery赋值给$符号
  var $ = layui.jquery;
  // 通过获取元素不同的data-type获取不同dom元素
  // 定义一个对象，在对象中定义对应的方法，通过call方法和事件关联。 
  // 这样做的好处是结构分明 特别清晰
  $('.site-demo-layedit').on('click', function () {
    var type = $(this).data('type');
    active[type] ? active[type].call(this) : '';
  });
  // 发评论
  function submitComment(content) {
    var userName = sessionStorage.getItem("userNmae")
    var userid = sessionStorage.getItem("loginUserId")
    var topicId = $('span[name = postedUsername]').data('id')
    // console.log("userid=" + userid + "userName=" + userName + "content=" + content + "topicId" + topicId)
    //去除空格内容空格
    content = content.replace(/\&nbsp;/g, "")
    content = content.replace(/\s*/g, "")
    if (content == "" || content == '<p></p>') {
      layer.msg("请输入内容再发送", {
        icon: 7
      }, function () {

      })
      return
    }
    $.ajax({
      url: baseUrl + "replyposts/save",
      type: "POST",
      data: {
        userid: userid,
        content: content,
        userName: userName,
        topicId: topicId,
      },
      success: function (res) {
        // console.log(res)
        if (res.code == 0) {
          // console.log("评论列表")
          // console.log(res)
          layer.msg('评论成功', {
            icon: 1
          }, function () {
            index = layedit.build('HomeSys', {
              hideTool: ["face"],
              heigth: 200,
              // uploadImage:"../../../../../"
            }); //建立编辑器
            helpCommitList()
          }, 1000);

        }
      },
    })
  }




});
//疑难求助贴吧
function helpList() {
  $.ajax({
    url: baseUrl + "posted/posted/listAll",
    type: "POST",
    data: {
      page: 1,
    },
    success: function (res) {
      // console.log("贴吧列表")
      // console.log(res)
      if (res.code == 0) {
        if (res.page.list.length > 0) {
          options.data = res.page.list
          // 启动
          page.init(options.data.length, 1, options);
          // 声明全局变量

        }

      }
    }
  })
}
//贴吧详情
/**
 * 
 * @param {*} desDom 数据渲染dom节点
 * @param {*} content 评论内容
 * @param {*} str 拼接字符串
 * @param {*} replyList 评论标题列表
 * @param {*} publishTime 评论时间
 */
function helpCommitList(id, userid) {
  // console.log(id)
  //贴吧求助列表id
  if (id) {
    window.helpCommitListId = id
  } else {
    id = window.helpCommitListId
  }
  $.ajax({
    url: baseUrl + "posted/posted/info/" + id,
    type: "POST",
    success: function (res) {
      // console.log("贴吧详情")
      // console.log(res)
      // console.log(replyList)
      if (res.code == 0) {
        var desDom = $("#xkyw_sub_g_1 .LostContent>ul")
        var content = ""
        var str = ""
        var replyList = res.posted.replyList
        if (res.posted.content != null) {
          content += res.posted.content.replace(/&amp;nbsp;/g, "&#10;")
        }

        var index = res.posted.publishTime.lastIndexOf(":")
        var publishTime = res.posted.publishTime.substr(0, index)
        str += '<li><div class="LostHeader clearfix"><div class="leftTitle fl"><span name = "postedUsername"  data-id = ' + res.posted.id + '>' + res.posted.userName + '</span></div>'
        str += '<div class="rightTitle fr"><span>' + publishTime + '</span></div></div><div class="LostContent">'
        str += '<span>' + content + '</span></div></li>'
        desDom.empty()
        desDom.html(str)
        //渲染评论分页
        //评论详情分页
        //调用分页
        /**
         *  逻辑：在分页中渲染评论数据展示，展示内容包括主评论，和评论回复,当触发二级评论是更新此处数据实现刷新数据
         *  @param replyList 一级评论列表
         *  在dom元素绑定onclick事件时 想传入中文字符 会报错，此时我们需要将其转义。这样我们便可以顺利的传入字符串了 转义字符 '\' + '\' 两个反斜杠
         */
        layui.use(['laypage', 'layer'], function () {
          // console.log("datadata")
          // console.log(replyList)
          var laypage = layui.laypage
          var layer = layui.layer;
          laypage.render({
            elem: 'CommentDetails',
            count: replyList.length,
            limit: 2,
            jump: function (obj) {
              //模拟渲染
              document.getElementById('CommentDetailsList').innerHTML = function () {
                var arr = []

                var thisData = replyList.concat().splice(obj.curr * obj.limit - obj.limit, obj.limit);
                layui.each(thisData, function (index, _item) {
                  //一级评论数据
                  var topicId = _item.topicid
                  var replyId = _item.id
                  var respondentId = _item.userid
                  var respondentName = _item.userName
                  // console.log(_item)
                  // 第一层评论
                  var str = '<li><div class="CommentItem"><ul class="clearfix"><!-- 第一层评论 --><li><!-- 头部 --><div class="CommentDetail"><h5>' + respondentName + '</h5><span>' + _item.content + '</span><button class="layui-btn btnColor mt12"  onclick="ReplyToFirstLevelComments(' + topicId + ',' + replyId + ',' + respondentId + ',' + '\' ' + respondentName + '\')">回复</button></div>'
                  // 第二层评论
                  if (_item.replyTwoList.length > 0) {
                    str += '<!-- 第二层评论 --><div class="subCommit"><ul class="clearfix">'
                    _item.replyTwoList.forEach(function (item, index) {

                      str += '<li><div class="subCommitDetail"><i>' + item.answername + '</i><span class="subCommitDetailReplay">回复</span><i>' + item.respondentname + '</i><span>:' + item.content + '</span></div>'
                      str += '<div class="subCommitTime"><button onclick="ReplyToFirstLevelComments(' + item.topicid + ',' + item.replyid + ',' + item.respondentid + ',' + '\' ' + item.answername + '\')">回复</button></div></li>'
                    })
                  }
                  str += '</ul>'
                  str += "</li></ul></div></li>"
                  arr.push(str)
                });
                return arr.join('');
              }();
            }
          })

        })

      }

    }
  })
}
//二级评论回复
/**
 * @topicId 帖子id
 * @replyId 一级评论id
 * @respondentId 被评论人id
 * @respondentName 被评论人姓名
 * @answerId 评论人id(自己的)
 * @answerName 评论人姓名
 * @content 二级评论
 */
function ReplyToFirstLevelComments(topicId, replyId, respondentId, answername) {
  //从全局对象中获取被评论人姓名 在发送完请求后 清空这个对象 清除全局变量

  // // console.log("topicId:"+topicId)
  // // console.log("replyId:"+replyId)
  // // console.log("respondentId:"+respondentId)
  // // console.log("respondentName:"+answername)
  // // console.log("answerId:"+sessionStorage.getItem("loginUserId"))
  // // console.log("answerName:"+sessionStorage.getItem("userNmae"))

  //layui 提示框在这里获取评论内容
  var index = layer.prompt({
    title: '评论'
  }, function (val, index) {
    // layer.msg('得到了'+val);
    //去除空格内容空格
    val = val.replace(/\&nbsp;/g, "")
    val = val.replace(/\s*/g, "")
    if (val == "") {
      layer.msg("请输入内容再发送", {
        icon: 7
      }, function () {

      })
      return
    }
    $.ajax({
      url: baseUrl + "replypoststwo/save",
      type: "POST",
      data: {
        topicId: topicId,
        replyId: replyId,
        respondentId: respondentId,
        respondentName: answername,
        answerId: sessionStorage.getItem("loginUserId"),
        answerName: sessionStorage.getItem("userNmae"),
        content: val,
      },
      success: function (res) {
        // console.log("添加信息")
        // console.log(res)
        if (res.code == 0) {
          helpCommitList()
          layer.msg("添加成功", {
            icon: 1
          })
          //在添加完成后 将数据清空 避免全局污染

        }
      }
    })



    layer.close(index);
  });
  //设置弹框默认
  // layui.jquery('#layui-layer'+index + " .layui-layer-input").val('默认文本内容');

  // console.log()
}
// 服务系统渲染
serverRender(1, "#ywbl_sub_a")

function serverRender(type, des) {
  // console.log("DES")
  // console.log(des)
  $.ajax({
    url: baseUrl + "sys/portalsystem/list",
    type: "POST",
    data: {
      type: type,
    },
    success: function (res) {
      // console.log("服务")
      // console.log(res)

      if (res.code == 0) {
        var desDom = $(des + ">.right_view .sub_content>ul")
        var str = ""
        if (res.page.list.length > 0) {
          var data = res.page.list
          data.forEach(function (item, index) {

            str += '<li><a href="https://' + item.url + '" target="_blank"><img src="' + item.imgurl + '" alt="">' + item.title + '</a></li>'

          })
          // console.log(des + ".right_view .sub_content>ul")
          desDom.empty()
          // console.log(desDom)
          desDom.html(str)
        }





      }
    }
  })
}
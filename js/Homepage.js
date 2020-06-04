$(function () {
  //获取语言信息
  /**
   * @language 1 中文 0英文
   */

  //检测是否登录
  isLogin()
  /**
   * @id 个人id
   * @type 区分教师学生
   * 
   */
  //获取通过url传过来的参数
  var type = sessionStorage.getItem("loginType")
  var userid = sessionStorage.getItem("loginUserId")
  // console.log(userid)
  // console.log(type)
  // console.log(typeof (type))
  //通知公告数据渲染
  notification(languageStatus, type)
  //评论列表渲染
  getComment()
  //个人简介数据
  individualResume()
  // 通知公告
  function notification(language, noticetype) {
    if(userid){
      $.ajax({
        type: "POST",
        url: baseUrl + "sys/noticest/noticestlist/list",
        data: {
          language: sessionStorage.getItem("CNtoEn"),
          noticetype: sessionStorage.getItem("loginType"),
          page: 1,
          limt: 4,
          id:userid,
        },
        success: function (res) {
          // console.log("通知公告全部list")
          // console.log(res)
          if (res.code === 0) {
            if (res.page.list.length > 0) {
              var str = ""
              var desDOm = $('.AnnContent>ul')
              var data = res.page.list
              data.forEach(function (item, index) {
                var introduct = ""
                if (item.introduct != null) {
                  introduct += item.introduct.substr(0, 10)
                }
                if (index < 4) {
                    if(item.imgurl == "" || item.imgurl == null) {
                      str += '<li><a href="../subPage/subTZinfo.html?id=' + item.id + '"><img src="../img/noticeAdvance.png" alt=""><span>' + introduct + '</span></a></li>'
                    } else {
                      str += '<li><a href="../subPage/subTZinfo.html?id=' + item.id + '"><img src="' + item.imgurl + '" alt=""><span>' + introduct + '</span></a></li>'
                    }
                  
                }
              })
  
              desDOm.html(str)
  
            }
  
          }
  
        },
        error: function (res) {
          // console.log("res")
          // console.log(res)
        }
      })
    }else {
      $.ajax({
        type: "POST",
        url: baseUrl + "sys/noticest/noticestlist/list",
        data: {
          language: sessionStorage.getItem("CNtoEn"),
          noticetype: sessionStorage.getItem("loginType"),
          page: 1,
          limt: 4,
        },
        success: function (res) {
          // console.log("通知公告全部list")
          // console.log(res)
          if (res.code === 0) {
            if (res.page.list.length > 0) {
              var str = ""
              var desDOm = $('.AnnContent>ul')
              var data = res.page.list
              data.forEach(function (item, index) {
                var introduct = ""
                if (item.introduct != null) {
                  introduct += item.introduct.substr(0, 10)
                }
                if (index < 4) {
                  str += '<li><a href="../subPage/subTZinfo.html?id=' + item.id + '"><img src="' + item.imgurl + '" alt=""><span>' + introduct + '</span></a></li>'
                }
              })
  
              desDOm.html(str)
  
            }
  
          }
  
        },
        error: function (res) {
          // console.log("res")
          // console.log(res)
        }
      })
    }
  
  }
  // 个人简介
  function individualResume() {
    if (sessionStorage.getItem("loginType") == 1) {
      $(".oterhInfo").append('<a href="../subPage/StudentInfoTable.html?id=' + userid + '" name = "otherInfo">个人信息 >></a>&nbsp;&nbsp;<a href="../subPage/studentModify.html?id=' + userid + '?&type=' + type + '" name = "otherInfo">信息修改</a>')
      $("#myCode").html('<span>学号:</span><span name="studentnumber"></span>')
      var subUrl = "sys/stuinput/byid"
      $("span[name = category]").html("学生")
    } else {
      $(".oterhInfo").append('<a href="../subPage/TeachInfoTable.html?id=' + userid + '" name = "otherInfo">个人信息 >></a>&nbsp;&nbsp;<a href="../subPage/teacherModify.html?id=' + userid + '?&type=' + type + '" name = "otherInfo">信息修改</a>')
      var subUrl = "sys/teacinput/byid"
      $("span[name = category]").html("教师")
      $("#myCode").html('<span>工号:</span><span name="serialnumber"></span>')
    }

    $.ajax({
      type: "POST",
      url: baseUrl + subUrl,
      data: {
        language: sessionStorage.getItem("CNtoEn"),
        noticetype: sessionStorage.getItem("loginType"),
        userid:userid
      },
      success: function (res) {
        // console.log("个人信息")
        // console.log(res)
        if (res.code === 0) {
          var data = res.stu[0]
          //拿到页面中所有带name tdDom元素 
          var tdDom = $("span[name]")
          if (data.url) {
            $('.profilePhoto').html('<img src="' + data.url + '" alt="">')
          }
          sessionStorage.setItem("userNmae", data.name)
          window.userName = data.name
          //遍历每个dom和请求的结果数据比对，进行渲染.
          tdDom.each(function (index, item) {
            var name = $(item).attr("name")
            $(item).html(data[name])
          })



        }



      },
      error: function (res) {
        // console.log("res")
        // console.log(res)



      }
    })
  }
  // 富文本编辑器
  layui.use('layedit', function () {
    var layedit = layui.layedit;
    var editIndex = layedit.build('HomePage', {
      hideTool: ["face"],
      heigth: 200,
      // uploadImage:"../../../../../"
    }); //建立编辑器
    //编辑器外部操作
    var active = {
      content: function () {
        // alert(layedit.getContent(index)); //获取编辑器内容
        submitContent(layedit.getContent(editIndex))

      },
      text: function () {
        alert(layedit.getText(editIndex)); //获取编辑器纯文本内容
      },
      selection: function () {
        alert(layedit.getSelection(editIndex));
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
    // 发帖
    function submitContent(content) {
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
        url: baseUrl + "posted/posted/save",
        type: "POST",
        data: {
          userid: sessionStorage.getItem("loginUserId"),
          content: content,
          userName: window.userName
        },
        success: function (res) {
          if (res.code == 0) {
            layer.msg('保存成功', {
              icon: 1
            }, function () {
              editIndex = layedit.build('HomePage', {
                hideTool: ["face"],
                heigth: 200,
                // uploadImage:"../../../../../"
              }); //建立编辑器
              getComment()
            }, 1000);

          }
        },
      })
    }



  });
  //评论列表
  function getComment() {
    var str = window.location.href
    var index = str.indexOf("=")
    var userid = str.substr((index + 1), 1)
    $.ajax({
      url: baseUrl + "posted/posted/list",
      type: "POST",
      data: {
        userid: sessionStorage.getItem("loginUserId"),
        page: 1,
        limt: 4,
      },
      success: function (res) {
        // console.log("评论列表")
        // console.log(res)
        if (res.code == 0) {
          var str = ""
          var desDom = $(".LostContent>ul")
          if (res.page.list.length > 0) {
            var data = res.page.list
            data.forEach(function (item, index) {
              if (index < 4) {
                var content = ""
                if (item.content != null) {
                  content += item.content.replace(/&amp;nbsp;/g, "&#10;")
                }
                var index = item.publishTime.lastIndexOf(":")
                var publishTime = item.publishTime.substr(0, index)
                str += '<li><div class="LostHeader clearfix"><div class="leftTitle fl"><span>' + item.userName + '</span></div>'
                str += '<div class="rightTitle fr"><span>' + publishTime + '</span></div></div><div class="LostContent">'
                str += '<span>' + content + '</span></div></li>'
              }
            })
            desDom.empty()
            desDom.html(str)
          }

        }



      }
    })
  }
  var alink = '<a href="../subPage/HomePageTzMore.html"><span>More ></span></a>'
  $(".HomePageTzLink").html(alink)

})
//登出操作
function logOut() {
  $.ajax({
    url: baseUrl + "sys/login/signOut",
    type: "POST",
    data: {
      id: sessionStorage.getItem("loginUserId")
    },
    success: function (res) {
      if (res.code == 0) {
        sessionStorage.clear()
        location.href = "../subPage/login.html"
      }
    },
  })

}
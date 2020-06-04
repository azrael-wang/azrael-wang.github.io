    //获取userid
    var str = window.location.href
    var index = str.indexOf("=")
    var userid = str.substr(index + 1)


    getInfor(userid)
    //处理文本框字段/学历
    /**
     * @number 1 = 教育背景  2 = 家庭关系 3 =工作经历
     */

    function handleEduction(data, number) {
      //教育背景
      if (number == 1) {
        // console.log(data)

        if (data) {
          var arr = data.split("|")
          var str = ""
          arr.forEach(function (item, index) {
            if (item != "") {
              var items = item.split(",")

              items.forEach(function (item, index) {

                if (index == 0) {
                  str += "学历:" + item.split(":")[1] + ", "
                } else if (index == 1) {
                  str += "院校:" + item.split(":")[1] + ", "
                } else if (index == 2) {
                  str += "专业:" + item.split(":")[1] + ", "
                } else if (index == 3) {
                  str += "入学时间:" + item.split(":")[1] + ", "
                } else if (index == 4) {
                  str += "毕业时间:" + item.split(":")[1] + " \n "
                }
              })

            }
          })
          return str
        }
      }
      //家庭关系
      else if (number == 2) {
        if (data) {
          var arr = data.split("|")
          var str = ""
          arr.forEach(function (item, index) {
            if (item != "") {
              var items = item.split(",")

              items.forEach(function (item, index) {

                if (index == 0) {

                  str += "亲属姓名:" + item.split(":")[1] + ", "
                } else if (index == 1) {
                  str += "亲属关系:" + item.split(":")[1] + ", "
                } else if (index == 2) {
                  str += "工作单位:" + item.split(":")[1] + ", "
                } else if (index == 3) {
                  str += "职务:" + item.split(":")[1] + "  "
                } else if (index == 4) {
                  str += "联系电话:" + item.split(":")[1] + " \n "
                }
              })

            }
          })
          return str
        }
      } //工作经历
      else if (number == 3) {
        if (data) {
          var arr = data.split("|")
          var str = ""
          arr.forEach(function (item, index) {
            if (item != "") {
              var items = item.split(",")

              items.forEach(function (item, index) {

                if (index == 0) {

                  str += "工作单位:" + item.split(":")[1] + ", "
                } else if (index == 1) {
                  str += "岗位:" + item.split(":")[1] + ", "
                } else if (index == 2) {
                  str += "入职时间:" + item.split(":")[1] + ", "
                } else if (index == 3) {
                  str += "离职时间:" + item.split(":")[1] + " \n "
                }
              })

            }
          })
          return str
        }
      }


    }

    function getInfor(userid) {
      $.ajax({
        url: baseUrl + "sys/stuinput/byid",
        data: {
          userid: sessionStorage.getItem("loginUserId"),
        },
        type: "POST",
        success: function (res) {
          // console.log(res)
          if (res.code == 0) {
            var data = res.stu[0]

            data = handleData(data)
            // console.log(data)
            //处理时间
            if (data.identitycarend != null) {
              data.identitycarend = handleTime(data.identitycardentity, data.identitycarend)
            }
            if (data.protectionend != null) {
              data.protectionend = handleTime(data.protectionentry, data.protectionend)
            }
            if (data.hkandmacaoend != null) {
              data.hkandmacaoend = handleTime(data.hkandmacaoentry, data.hkandmacaoend)
            }
            if (data.taiwanend != null) {
              data.taiwanend = handleTime(data.taiwanentry, data.taiwanend)
            }
            if (data.timeofenrollment != null) {
              data.timeofenrollment = handleTime(data.timeofenrollment)
            }
            if (data.timeofgraduation != null) {
              data.timeofgraduation = handleTime(data.timeofgraduation)
            }
            data.education = handleEduction(data.education, 1)
            data.family = handleEduction(data.family, 2)
            data.workunit = handleEduction(data.workunit, 3)
            //拿到页面中所有带name tdDom元素 
            var tdDom = $("td[name]")
            //遍历每个dom和请求的结果数据比对，进行渲染.
            tdDom.each(function (index, item) {
              var name = $(item).attr("name")
              $(item).html(data[name])
            })

          }
        },
        err: function (res) {

        }
      })
    }
    //导航列表
    var moreButton = {
      "moreCn": ["返回"],
      "moreEn": ["Return"],
    }
    if (sessionStorage.getItem("CNtoEn") == 1) {
      $("li[name = more]").html('<a name ="more" class="sideMenu2" href="./Homepage.html?id=' + userid + '&type=1">返回</a>')
      languageChange("a[name = more]", "moreCn", moreButton)
    } else {
      languageChange("a[name = more]", "moreEn", moreButton)
      $("li[name = more]").html('<a name ="more" class="sideMenu2" href="./Homepage.html?id=' + userid + '&type=1">return</a>')
    }
    //处理时间
    function handleTime(entry, end) {
      var str = ""
      if (end != undefined) {
        str += entry.split(" ")[0]
        str += "&nbsp;&nbsp;至&nbsp;&nbsp;"
        str += end.split(' ')[0]
      } else {
        str += entry.split(" ")[0]
      }
      return str
    }
    //处理数据
    function handleData(data) {
      //处理婚姻
      if (data.ismarriage) {
        data.ismarriage = "已婚"
      } else {
        data.ismarriage = "未婚"
      }
      //是否在职
      if (data.ispostgraduatestudy) {
        data.ispostgraduatestudy = "是"
      } else {
        data.ispostgraduatestudy = "否"
      }

      //培养方式
      switch (true) {
        case data.educationselect == 1:
          data.educationselect = "硕士"
          break;
        case data.educationselect == 2:
          data.educationselect = "博士"
          break;
        case data.educationselect == 3:
          data.educationselect = "直博"
          break;
        case data.educationselect == 4:
          data.educationselect = "硕转博"
          break;
      }
      //考试方式
      switch (true) {
        case data.examination == 1:
          data.examination = "免推"
          break;
        case data.examination == 2:
          data.examination = "硕士统考"
          break;
        case data.examination == 3:
          data.examination = "硕士调剂"
          break;
          case data.examination == 4:
          data.examination = " 博士申请审核制"
          break;
          case data.examination == 5:
            data.examination = "博士统考"
            break;
            case data.examination == 6:
              data.examination = "硕博连读"
              break;
              case data.examination == 7:
                data.examination = "直博生"
                break;
      }
      var desDom = $("#peopleImg")
      if (data.url) {
        desDom.css({
          "background": "url(" + data.url + ") center",
          "background-size": "100% 100%",
        })
      } else {
        desDom.css({
          "background": "url()"
        })
      }

      return data
    }
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
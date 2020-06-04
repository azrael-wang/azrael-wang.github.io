  //设置默认展示
  var languageObj = {
    "MenuCn": ["数学教研室", "物理教研室", "化学与材料教研室", "力学与机制教研室", "光电与通信教研室", "核科学技术教研室", "公共课教研室", ],
    "MenuEn": ["Mathematics", "Physical", "Chemistry", "Mechanics", "Photoelectric", "Nuclear", "Public Courses", ],
    "kytd_breadCn": ['当前位置:教研团队&bull; <a href="../subPage/jyjx.html?index=1">数学教研室</a> ', '当前位置:教研团队&bull; <a href="../subPage/jyjx.html?index=1">物理教研室</a> ', '当前位置:教研团队&bull; <a href="../subPage/jyjx.html?index=1">化学与材料教研室</a> ', '当前位置:教研团队&bull; <a href="../subPage/jyjx.html?index=1">力学与机制教研室</a> ', '当前位置:教研团队&bull; <a href="../subPage/jyjx.html?index=1">光电与通信教研室</a> ', '当前位置:教研团队&bull; <a href="../subPage/jyjx.html?index=1">核科学技术教研室</a> ', '当前位置:教研团队&bull; <a href="../subPage/jyjx.html?index=1">公共课教研室</a> ', ],
    "kytd_breadEn": ['Current location: teaching and research team &bull; <a href="../subPage/jyjx.html?index=1">Mathematics and Research Office</a> ', 'Current Location: Teaching and Research Team &bull; <a href=". ./subPage/jyjx.html?index=1">Physical and Research Office</a> ', 'Current Location: Teaching and Research Team &bull; <a href="../subPage/jyjx.html?index=1">Chemistry and Materials Teaching and Research Section</a> ', 'Current Location: Teaching and Research Team &bull; <a href="../subPage/jyjx.html?index=1">Mechanics and Mechanism Teaching and Research Section</a> ', 'Current Location: Teaching and Research Team &bull; <a href="../subPage/jyjx.html?index=1">Photonics and Communication Teaching and Research Section</a> ', 'Current Location: Teaching and Research Team &bull; <a href="../subPage/ Jyjx.html?index=1">Nuclear Science and Technology Teaching and Research Section</a> ', 'Current Location: Teaching and Research Team &bull; <a href="../subPage/jyjx.html?index=1">Public Courses and Research Institute< /a> ', ],
  }
  var languageStatus = sessionStorage.getItem("CNtoEn")
  if (languageStatus == 1) {
    $('li[name = kytd_subMenu]').each(function (index, item) {
      $(item).html(languageObj["MenuCn"][index])
    })

  } else {
    $('li[name = kytd_subMenu]').each(function (index, item) {
      $(item).html(languageObj["MenuEn"][index])
    })
    $('span[name = kxyj_title]').html("Research team")
  }

  function li_trigger() {
    var str = window.location.href
    var index = str.indexOf("=")
    var id = str.substr(index + 1)
    // console.log("-----")
    // console.log($('li[name = kytd_subMenu]').eq(id))
    $('li[name = kytd_subMenu]').eq(id).trigger("click")
  }
  //渲染dom
  getLoad(49)

  function getLoad(deptId) {
    switch (true) {
      case deptId == 49:
        var index = 0
        break;
      case deptId == 48:
        var index = 1
        break;
      case deptId == 50:
        var index = 2
        break;
      case deptId == 51:
        var index = 3
        break;
      case deptId == 52:
        var index = 5
        break;
      case deptId == 53:
        var index = 6
        break;
      case deptId == 54:
        var index = 4
        break;


    }

    if (languageStatus == 1) {
      // console.log(languageObj)
      // console.log($("h2[ name = kytd_subMenu]"))
      $("h2[ name = kytd_subMenu]").html(languageObj["MenuCn"][index])
      $("span[ name = kytd_bread]").html(languageObj["kytd_breadCn"][index])
    } else {
      $("h2[ name = kytd_subMenu]").html(languageObj["MenuEn"][index])
      $("span[ name = kytd_bread]").html(languageObj["kytd_breadEn"][index])
    }



    $.ajax({
      url: baseUrl + 'sys/research/getPersonnel',
      data: {
        deptId: deptId,
        type: 0,
        standby: 3,
      },
      success: function (res) {
        // console.log("专任教师")
        // console.log(res)
        if (sessionStorage.getItem("CNtoEn") == 1) {
          var resTitle = "暂无数据"
        } else {
          var resTitle = "No Data"
        }
        if (res.length !== 0) {
          str = ""
          res.forEach(function (item, index) {
            // console.log(item)
            str += '<div class="sub_content_item clearfix"><div class="item_img fl">'
            str += '<a class="fiveyanjiusuo fiveStep"  data-step="fiveyanjiusuo" data-index="' + index + '"  onclick="ktyd_Rinfo(' + item.id + ',' + item.standby + ',\'' + item.website + '\')"><img src="' + item.perImg + '" alt=""></a></div>'
            str += '<a onclick="ktyd_Rinfo(' + item.id + ',' + item.standby + ',\'' + item.website + '\')"><div class="item_content fl"><h2>' + item.roleName + '</h2><p class="kxyj_title clearfix">职称 ：' + item.perPost + '</p>'
            str += '<p><i class="kxyj_mail fl"></i><span>' + item.email + '</span></p><p><i class="kxyj_call fl"></i>' + item.telphone + '</p>'
            str += '<p><a href="http://' + item.website + '">课题组网址</a></p></div></a></div>'
            $('p[name = heightInfo ]').html(item.perProfile == null ? "" : item.perProfile)
          })
          $("#kytd_sub_0_0").html(str)
          fiveMenuClickEvent()
        } else {
          $("#kytd_sub_0_0").html('<p>' + resTitle + '</p>')
        }
      }
    })
  }
  li_trigger()

  function ktyd_Rinfo(personId, standby, website) {
    $.ajax({
      url: baseUrl + 'sys/research/getPersonnelDetail',
      data: {
        personId: personId,
        standby: standby,
      },
      type: "POST",
      success: function (res) {
        // console.log("人员")
        // console.log(res)
        var Ptitle = res.personnel
        var PDetail = res.personnelDetaillist
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
          str += 'id="detaiPage_pi_info_address">通信地址:' + Ptitle.addr + '</span><br /><p style="margin-top:12px;"><a href="http://' + website + '">课题组网址</a></p></div></div></div>'
          //<a href="'+ Ptitle.website +'">课题组网址</a>
        }
        if (PDetail.length !== 0) {
          str += '<div class="detailPage_Pi_content clearfix">'
          if (empty) {
            str += '<div class="fl" style="width:100%;height:100%;font-size:16px;text-align:left;border-bottom: 1px solid #ccc;padding-bottom: 24px;"><h2 style="margin-bottom:24px;font-size:18px;color:#165B9F;">' + profile + '</h2><p style="color:#666;font-size:14px">' + empty + '</p></div>'
          }
          PDetail.forEach(function (item, index) {
            if (item.content != null) {
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


        $('#kytd_sub_0_0').html(str)

        // $("#contentId0").height($("#contentId1").height())

      },
      err: function (err) {
        // console.log("错误信息")
        // console.log(err)
      }
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
              // // console.log("反显")
              // // console.log('.' + tempArr[0] + tempArr[1])
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
                  // console.log(tempArr[0])
                  // console.log(tempArr[1])
                  $('.' + tempArr[0]).eq(tempArr[1]).trigger("click")
                }


              }

            }
          })
        }
      }


    }
  }
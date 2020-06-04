$(function () {
  var xiaoyouStr = decodeURI(location.search.substr(location.search.indexOf("?") + 1))
  var xiaoyouPrev = xiaoyouStr.split("=")[1]
  // console.log(xiaoyouPrev)
  if (xiaoyouPrev == "Alumnus") {
    var xiaoyouData = [{
        "name": "访问须知",
        "ename": "Access notice",
      },
      {
        "name": "来访活动",
        "ename": "Visiting activity",
      },
      {
        "name": "两弹元勋",
        "ename": "TwoBombs",
      },
      {
        "name": "校友回顾",
        "ename": "Alumni review",
      },

      {
        "name": "风采瞬间",
        "ename": "Wind moment",
      },
    ]
    var subObj = {
      "prevEname": "Alumnus",
      "prevName": "来访人员"
    }
    createdMenuDom(xiaoyouData)
  } else {
    var subStr = decodeURI(location.search.substr(location.search.indexOf("?") + 1))
    var subArr = subStr.split("&")
    var subObj = {}
    // console.log("susuubsus")
    // console.log(subObj)
    subArr.forEach(function (item, index) {
      var arr = item.split("=")
      subObj[arr[0]] = arr[1]
    })
    // console.log(subArr)
    $.ajax({
      url: baseUrl + "sys/sysmenu/nextlist",
      type: "POST",
      data: {
        parentId: subObj["menuId"]
      },
      success: function (res) {

        // console.log(res)
        createdMenuDom(res.page)
      }
    })

  }

  function createdMenuDom(data) {
    // console.log("渲染")
    // console.log(data)
    var str = ""
    //处理每项跳转
    if (languageStatus == 1) {
      var aaa = {
        "官网首页": "./index.html",
        "研院概况": "./subPage/menu_lsyg.html",
        "科学研究": "./subPage/kxyj.html",
        "研究生教育": "./subPage/jyjx.html",
        "校园生活": "./subPage/xiaoyuansh.html",
        "信息服务": './subPage/infro_sverver.html',
        "来访人员": "./subPage/xiaoyou.html"
      }
    } else if (languageStatus == 0) {
      var bbb = {
        "Home": "./index.html",
        "About": "./subPage/menu_lsyg.html",
        "Research": "./subPage/kxyj.html",
        "Education": "./subPage/jyjx.html",
        "School Life": "./subPage/xiaoyuansh.html",
        "Information": './subPage/infro_sverver.html',
        "Alumnus": "./subPage/xiaoyou.html",
      }
    } //处理每项信息
    if (languageStatus == 1) {

      var message = {
        "研院概况": "以三大定位为支撑（特色的研究生教育、开放的基础研究、科研骨干的再培养），通过科教协同，建设特色明显、水平一流的研究生院。",
        "科学研究": "中国工程物理研究院研究生院面对国家新时期的战略发展需要，围绕向纵深发展的中物院主体工作对相关基础研究提出的新需求，着重布局中物院主体任务牵引的前瞻性基础研究。",
        "研究生教育": " 中国工程物理研究院（简称中物院）的研究生教育始于1984年，30多年来已经培养了一批国家战略目标急需的特色科技人才。",
        "信息服务": '核心价值观：铸国防基石，做民族脊梁,<br/>两弹精神：爱国奉献、艰苦奋斗、协同攻关、求实创新、永攀高峰',
        "来访人员": "人笃实求真、不务虚华，质朴勤勉、锐意创新，秉承“诚敬勤朴”之学术传统，成就了百余年来蔚为壮观的学术气象。",
        "校园生活": "研究生院组织开展系列学术讲座、元旦晚会、趣味运动会、中秋节、女生节、各类体育比赛、心理健康讲座、校园联谊等多项品牌活动，建设良好的校园文化氛围。"
      }
    } else if (languageStatus == 0) {
      var message = {
        "About": "Supported by the three major positionings (specialized postgraduate education, open basic research, and re-cultivation of scientific research backbones), through the synergy between science and education, we will build graduate schools with distinctive features and first-class status.",
        "Research": "The Graduate School of China Academy of Engineering Physics faces the new needs of the country in the new era, focusing on the new needs of the basic research of the main body of the Chinese Academy of Sciences, focusing on the forward-looking basic research of the main task of the Chinese Academy of Sciences.",
        "Education": "The postgraduate education of the China Academy of Engineering Physics (referred to as the Chinese Academy of Sciences) began in 1984. Over the past 30 years, it has trained a group of featured scientific and technological talents that are urgently needed by the national strategic goals.",
        "Information": "Core Values: Casting the cornerstone of national defense, doing the national backbone, the spirit of two bombs: <br/>patriotic dedication, hard work, collaborative research, realistic and innovative, and always climbing the peak",
        "Alumnus": "People are honest, not vain, simple and diligent, and innovative, adhering to the academic tradition of honesty and diligence, and have achieved a magnificent academic atmosphere for more than 100 years.",
        "School Life": "The Graduate School organizes a series of academic lectures, New Year's party, fun games, Mid-Autumn Festival, Girls' Day, various sports competitions, mental health lectures, campus networking and many other brand activities to build a good campus culture.",
      }
    }
    if (data.length === 0) {

      $("#menu_showList").text('暂无数据请浏览其他信息^_^')

      return
    } else {

      //  获取标题dom进行动态渲染 
      var info_message = $(".subBanner_con h3")
      var info_sub_message = $(".subBanner_con p")
      if (languageStatus == 1) {
        var title = subObj["prevName"]
        // console.log("title")
        // console.log(title)

        $(info_message).text(title)
        $(info_sub_message).html(message[title])
        $(info_sub_message).attr('title', message[title])
        data.forEach(function (item, index) {

          str += '<li ><a href=".' + aaa[title] + '?index=' + index + '"><div class="contnet_img" ></div><div class="content_text"><h3>' + item.name + '</h3></div></a></li>'

        })
        $("#menu_showList").append($(str))
        switch (true) {
          case title == '研院概况':
            $('.contnet_img').each(function (index, item) {
              $(item).css({
                "background": "url('../img/nav" + (index + 1) + ".png')",
                "background-size": "100% 100%",
              })
            })
            break
          case title == '研究生教育':
            $('.contnet_img').each(function (index, item) {
              $(item).css({
                "background": "url('../img/navyjsjy" + (index + 1) + ".png')",
                "background-size": "100% 100%",
              })
            })
            break
          case title == '科学研究':
            $('.contnet_img').each(function (index, item) {
              $(item).css({
                "background": "url('../img/navkytd" + (index + 1) + ".png')",
                "background-size": "100% 100%",
              })
            })
            $(info_sub_message).attr('title', '中国工程物理研究院研究生院面对国家新时期的战略发展需要，围绕向纵深发展的中物院主体工作对相关基础研究提出的新需求，着重布局中物院主体任务牵引的前瞻性基础研究。中国工程物理研究院研究生院，赋予研究生教育新的使命：通过科教协同，建设特色明显、水平一流的研究生院.')
            break
          case title == '校园生活':
            $('.contnet_img').each(function (index, item) {
              $(item).css({
                "background": "url('../img/navxysh" + (index + 1) + ".png')",
                "background-size": "100% 100%",
              })
            })
            break
          case title == '信息服务':
            $('.contnet_img').each(function (index, item) {
              $(item).css({
                "background": "url('../img/navinof" + (index + 1) + ".png')",
                "background-size": "100% 100%",
              })
            })
            break
          case title == '来访人员':
            $('.contnet_img').each(function (index, item) {
              $(item).css({
                "background": "url('../img/navlfry" + (index + 1) + ".png')",
                "background-size": "100% 100%",
              })
            })
            break
        }

      } else if (languageStatus == 0) {
        var title = subObj["prevEname"]
        // console.log("title")
        // console.log(title)
        $(info_message).text(title)
        $(info_sub_message).html(message[title])
        data.forEach(function (item, index) {
          // console.log(item)
          str += '<li ><a href=".' + bbb[title] + '?index=' + index + '"><div class="contnet_img" ></div><div class="content_text"><h3>' + item.ename + '</h3></div></a></li>'
        })
        $("#menu_showList").append($(str))
        // $('.contnet_img').each(function (index, item) {
        //   $(item).css({
        //     "background": "url('../img/nav" + (index + 1) + ".png')",
        //     "background-size":"100% 100%",
        //   })
        // })
        switch (true) {
          case title == 'About':
            $('.contnet_img').each(function (index, item) {
              $(item).css({
                "background": "url('../img/nav" + (index + 1) + ".png')",
                "background-size": "100% 100%",
              })
            })
            break
          case title == 'Education':
            $('.contnet_img').each(function (index, item) {
              $(item).css({
                "background": "url('../img/navyjsjy" + (index + 1) + ".png')",
                "background-size": "100% 100%",
              })
            })
            break
          case title == 'Research':
            $('.contnet_img').each(function (index, item) {
              $(item).css({
                "background": "url('../img/navkytd" + (index + 1) + ".png')",
                "background-size": "100% 100%",
              })
            })
            break
          case title == 'School Life':
            $('.contnet_img').each(function (index, item) {
              $(item).css({
                "background": "url('../img/navxysh" + (index + 1) + ".png')",
                "background-size": "100% 100%",
              })
            })
            break
          case title == 'Information':
            $('.contnet_img').each(function (index, item) {
              $(item).css({
                "background": "url('../img/navinof" + (index + 1) + ".png')",
                "background-size": "100% 100%",
              })
            })
            break
          case title == 'Alumnus':
            $('.contnet_img').each(function (index, item) {
              $(item).css({
                "background": "url('../img/navlfry" + (index + 1) + ".png')",
                "background-size": "100% 100%",
              })
            })
            break
        }

      }

    }
  }
})
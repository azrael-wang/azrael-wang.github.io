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
    // console.log(zzjg_tabs)
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
      // console.log($('#' + id))
      // console.log("左侧菜单点击事件触发")
      $('#' + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
    })


  }

  function xwxk_tab() {
    var conta = $(".zzjg_sub  .right_view .sub_content>ul")
    var contimg = $("#xsPage_section .right_view .sub_content_img_style")
    var sub_content = $("#xssw_sub_a  .sub_title")
    var sub_content_jyxx_sub_b = $("#jyxx_sub_b  .sub_title")
    var sub_content_jyxx_sub_c = $("#jyxx_sub_c  .sub_title")
    $(conta).on("click", "li", function () {
      var id = $(this).data("id")
      // console.log(id)
      $("#" + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
      return false
    })
    $(contimg).on("click", "li", function () {
      var id = $(this).data("id")
      // console.log(id)
      $("#" + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
      return false
    })
    $(sub_content).on("click", "li", function () {
      var id = $(this).data("id")
      // console.log(id)
      $("#" + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
      return false
    })
    $(sub_content_jyxx_sub_b).on("click", "li", function () {
      var id = $(this).data("id")
      // console.log(id)
      $("#" + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
      return false
    })
    $(sub_content_jyxx_sub_c).on("click", "li", function () {
      var id = $(this).data("id")
      // console.log(id)
      $("#" + id)
        .addClass("content_item_active")
        .siblings()
        .removeClass("content_item_active")
      return false
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
  /***ajax**** */
  //招聘
  //科研人员
  zp_kyry_list()

  function zp_kyry_list() { 
    $.ajax({
      url: baseUrl + "sys/recruit/recruit/list",
      type: "POST",
      data: {
        language: sessionStorage.getItem("CNtoEn")
      },
      success: function (res) {
        // console.log("科研人员")
        // console.log(res)
        let desDom = $("#zhaopin_sub_a .right_view .sub_content>ul")
        if (res.code === 0) {
          var data = res.page.list
          // console.log("科研人员")
          // console.log(data)
          var str = ""
          if (data.length !== 0) {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "科研人员"
              var resTitle = "暂无数据"
            }else{
              crumb = "Researcher"
              var resTitle = "No Data"
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
              if(item.createTime != null){
                var currDate = item.createTime.split(" ")[0]
              }
              str +='<li data-id="zhaopin_sub_a_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivekyry fiveStep" data-step="fivekyry" data-index="'+ index +'"   onclick="zp_kyry_info('+ item.id +',1)">'
str +='<span>'+ title +'</span><i>'+ currDate +'</i></li>'
            })
            
          } else {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "科研人员"
              var temp = "暂无数据"
            }else{
              var temp = "No data"
              crumb = "Researcher"
            }
            var time = new Date().toLocaleDateString()
            
          
            str +='<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix" ><span>'+ temp +'</span><i></i></li>'
          }


        }

        desDom.html(str)
        fiveMenuClickEvent()
      }
    })
  }
  //行政科辅
  zp_xzkf_list()

  function zp_xzkf_list() {
    $.ajax({
      url: baseUrl + "sys/recruit/recruit/auxiliarylist",
      type: "POST",
      data: {
        language: sessionStorage.getItem("CNtoEn")
      },
      success: function (res) {

        // console.log("行政科辅")
        // console.log(res)

        let desDom = $("#zhaopin_sub_b .right_view .sub_content>ul")

        if (res.code === 0) {

          var data = res.page.list
          // console.log("行政科辅")
          // console.log(data)
          var str = ""
          if (data.length !== 0) {
            
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "行政科辅"
              var resTitle = "暂无数据"
            }else{
              var resTitle = "No Data"
              crumb = "Administrative"
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
              if(item.createTime != null){
                var currDate = item.createTime.split(" ")[0]
              }
              str +='<li data-id="zhaopin_sub_a_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivexzry fiveStep" data-step="fivexzry" data-index="'+ index +'"   onclick="zp_kyry_info('+ item.id +',2)">'
              str +='<span>'+ title +'</span><i>'+ currDate +'</i></li>'
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "行政科辅"
              var temp = "暂无数据"
            }else{
              var temp = "No data"
              crumb = "Administrative"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)
          
            str +='<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix" ><span>'+ temp +'</span><i></i></li>'
            desDom.append($(str))
          }


        }


      }
    })
  }
  //管理人员
  zp_glry_list()

  function zp_glry_list() {
    $.ajax({
      url: baseUrl + "sys/recruit/recruit/adminlist",
      type: "POST",
      data: {
        language: sessionStorage.getItem("CNtoEn")
      },
      success: function (res) {
        // console.log("管理人员")
        // console.log(res)

        let desDom = $("#zhaopin_sub_c .right_view .sub_content>ul")

        if (res.code === 0) {

          var data = res.page.list
          // console.log("管理人员")
          // console.log(data)
          var str = ""
          if (data.length !== 0) {
             var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "管理人员"
            }else{
              
              crumb = "Manager"
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
              if(item.createTime != null){
                var currDate = item.createTime.split(" ")[0]
              }
              str +='<li data-id="zhaopin_sub_a_1"  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fiveglry fiveStep" data-step="fiveglry" data-index="'+ index +'"   onclick="zp_kyry_info('+ item.id +',3)">'
              str +='<span>'+ title +'</span><i>'+ currDate +'</i></li>'
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "管理人员"
              var resTitle = "暂无数据"
            }else{
              var resTitle = "No Data"
              crumb = "Manager"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)
           
            str +='<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix" ><span>'+ resTitle +'</span><i></i></li>'
            desDom.append($(str))
          }


        }


      }
    })
  }
  //博士后
  zp_bsh_list()

  function zp_bsh_list() {
    $.ajax({
      url: baseUrl + "sys/recruit/recruit/doctorallist",
      type: "POST",
      data: {
        language: sessionStorage.getItem("CNtoEn")
      },
      success: function (res) {
        // console.log("博士后")
        // console.log(res)

        let desDom = $("#zhaopin_sub_d .right_view .sub_content>ul")

        if (res.code === 0) {

          var data = res.page.list
          // console.log("博士后")
          // console.log(data)
          var str = ""
          if (data.length !== 0) {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "博士后"
            }else{
              
              crumb = "Postdoctoral"
            }
            
            data.forEach(function (item, index) {
              var time = ""
              var title = ""
              if(item.createTime != null){
                var currDate = item.createTime.split(" ")[0]
              }
              if (item.title != "") {
                title = item.title 
                 
              }
              if (item.createTime != null) {
                time = item.createTime.split(" ")[0]
              }
             
              str +='<li data-id="zhaopin_sub_a_1"  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivebsh fiveStep" data-step="fivebsh" data-index="'+ index +'"   onclick="zp_kyry_info('+ item.id +',4)">'
              str +='<span>'+ title +'</span><i>'+ currDate +'</i></li>'
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "博士后"
              var resTitle = "暂无数据"
            }else{
              
              crumb = "Postdoctoral"
              var resTitle = "No Data"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)
           
            str +='<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix" ><span>'+ resTitle +'</span><i></i></li>'
            desDom.append($(str))
          }


        }



      }
    })
  }
  //应届毕业生
  zp_yjbys_list()

  function zp_yjbys_list() {
    $.ajax({
      url: baseUrl + "sys/recruit/recruit/graduatelist",
      type: "POST",
      data: {
        language: sessionStorage.getItem("CNtoEn")
      },
      success: function (res) {
        // console.log("应届毕业生")
        // console.log(res)

        let desDom = $("#zhaopin_sub_e .right_view .sub_content>ul")

        if (res.code === 0) {

          var data = res.page.list
          // console.log("应届毕业生")
          // console.log(data)
          var str = ""
          if (data.length !== 0) {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "应届毕业生"
            }else{
              
              crumb = "Graduates"
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
              if(item.createTime != null){
                var currDate = item.createTime.split(" ")[0]
              }
              str +='<li data-id="zhaopin_sub_a_1"  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fiveyjbys fiveStep" data-step="fiveyjbys" data-index="'+ index +'"  onclick="zp_kyry_info('+ item.id +',5)">'
              str +='<span>'+ title +'</span><i>'+ currDate +'</i></li>'
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "应届毕业生"
              var temp = "暂无数据"
            }else{
              var temp = "No data"
              crumb = "Graduates"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)
         
            str +='<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix" ><span>'+ temp +'</span><i></i></li>'
            desDom.append($(str))
          }


        }


      }
    })
  }

  //服务指南
  // 招聘事务
  fwzn_zpsw_list()

  function fwzn_zpsw_list() {
    $.ajax({
      url: baseUrl + "sys/ser/ser/recruitlist",
      type: "POST",
      data: {
        language: sessionStorage.getItem("CNtoEn")
      },
      success: function (res) {
        // console.log("招聘事务")
        // console.log(res)
        let desDom = $("#fuwuzn_sub_a .right_view .sub_content>ul")

        if (res.code === 0) {

          var data = res.page.list
          // console.log("招聘事务")
          // console.log(data)
          var str = ""
          if (data.length !== 0) {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "招聘事务"
            }else{
              
              crumb = "Recruitment"
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
              if(item.createTime != null){
                var currDate = item.createTime.split(" ")[0]
              }
              str +='<li data-id="fuwuzn_sub_a_1"  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivezpsw fiveStep" data-step="fivezpsw" data-index="'+ index +'"  onclick="zp_fwzn_info('+ item.id +',1)">'
str +='<span>'+ title +'</span><i>'+ currDate +'</i></li>'
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "招聘事务"
              var temp = "暂无数据"
            }else{
              var temp = "No data"
              crumb = "Recruitment"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)
            
            str +='<li class="kxyj_sub_a_0_item  sub_info_mange  clearfix" ><span>'+ temp +'</span><i></i></li>'
            desDom.append($(str))
          }


        }

      }
    })
  }
  //入职报道

  //入职报道info
  zp_rzbd_info()

  function zp_rzbd_info() {
    if(sessionStorage.getItem("CNtoEn") == 1){
      var id = 1282
    }else {
      var id = 1297
    }
    $.ajax({
      url: baseUrl + "sys/ser/entryinfo",
      type: "POST",
      data: {
        id: id
      },
      success: function (res) {
        // console.log("报道入职info")
        // console.log(res)

       
        let desDom = $("#fuwuzn_sub_b .right_view .sub_content")
        
        let str = ""
        if(res.code == 0){
          let data = res.content
          
          if (data != null) {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "报道入职"
              var Time = "时间"
              var PageView = "浏览量"
            }else{
              var Time = "Time"
              var PageView = "PageView"
              crumb = "Entry report"
            }
            let createTime = data.createTime.split(" ")[0]
            let content = data.content.replace(/&amp;nbsp;/g, "&#10;")
       
        str +='<div class="sub_detail_content" style="" ><h3>'+ data.title +'</h3> <div class="sub_date" style="text-align:center;">'
        str +='<span>'+ Time +':</span><i>'+ createTime +'</i> '
        str +='</div><p>'+ content +'</p></div>'
          }else {
            if (sessionStorage.getItem("CNtoEn") == 0){
              var temp = "No data"
            }else {
              var temp = "暂无数据"
            }
            str +='<div class="sub_detail_content" style="" ><h3></h3> <div class="sub_date" style="text-align:center;">'
            str +='<span></span><i></i> <span></span><i></i>'
            str +='</div><p>'+ temp +'</p></div>'
          }

        }
      
        $(desDom).empty()
        $(desDom).append($(str))


      }
    })
  }
  // 背景审查
  fwzn_bjsc_list()

  function fwzn_bjsc_list() {
    $.ajax({
      url: baseUrl + "sys/ser/ser/bgexaminationlist",
      type: "POST",
      data: {
        language: sessionStorage.getItem("CNtoEn")
      },
      success: function (res) {
        // console.log("背景审查")
        // console.log(res)

        let desDom = $("#fuwuzn_sub_c .right_view .sub_content>ul")

        if (res.code === 0) {

          var data = res.page.list
          // console.log("背景审查")
          // console.log(data)
          var str = ""
          if (data.length !== 0) {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "背景审查"
            }else{
              
              crumb = "Background Check"
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
              if(item.createTime != null){
                var currDate = item.createTime.split(" ")[0]
              }
              str +='<li data-id="fuwuzn_sub_a_1"  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivebjsc fiveStep" data-step="fivebjsc" data-index="'+ index +'"  onclick="zp_fwzn_info('+ item.id +',2)">'
              str +='<span>'+ title +'</span><i>'+ currDate +'</i></li>'
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "背景审查"
              var temp = "暂无数据"
            }else{
              var temp = "No data"
              crumb = "Background Check"
            }
            var time = new Date().toLocaleDateString()
        
            str +='<li class="kxyj_sub_a_0_item  sub_info_mange  clearfix" ><span>'+ temp +'</span><i></i></li>'
            desDom.append($(str))
          }


        }





      }
    })
  }
  // 工资福利
  fwzn_gzfl_list()

  function fwzn_gzfl_list() {
    $.ajax({
      url: baseUrl + "sys/ser/ser/wageslist",
      type: "POST",
      data: {
        language: sessionStorage.getItem("CNtoEn")
      },
      success: function (res) {
        // console.log("工资福利")
        // console.log(res)


        let desDom = $("#fuwuzn_sub_d .right_view .sub_content>ul")

        if (res.code === 0) {

          var data = res.page.list
          // console.log("工资福利")
          // console.log(data)
          var str = ""
          if (data.length !== 0) {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "工资福利"
            }else{
              
              crumb = "Wages and benefits"
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
              if(item.createTime != null){
                var currDate = item.createTime.split(" ")[0]
              }
              str +='<li data-id="fuwuzn_sub_a_1"  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivegsfl fiveStep" data-step="fivegsfl" data-index="'+ index +'"  onclick="zp_fwzn_info('+ item.id +',3)">'
              str +='<span>'+ title +'</span><i>'+ currDate +'</i></li>'
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "工资福利"
              var temp = "暂无数据"
            }else{
              var temp = "No data"
              crumb = "Wages and benefits"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)
          
            str +='<li class="kxyj_sub_a_0_item  sub_info_mange  clearfix" ><span>'+ temp +'</span><i>'+ time +'</i></li>'
            desDom.append($(str))
          }


        }



      }
    })
  }
  // 职称评审
  fwzn_zcps_list()

  function fwzn_zcps_list() {
    $.ajax({
      url: baseUrl + "sys/ser/ser/titlelist",
      type: "POST",
      data: {
        language: sessionStorage.getItem("CNtoEn")
      },
      success: function (res) {
        // console.log("职称评审")
        // console.log(res)





        let desDom = $("#fuwuzn_sub_e .right_view .sub_content>ul")

        if (res.code === 0) {

          var data = res.page.list
          // console.log("职称评审")
          // console.log(data)
          var str = ""
          if (data.length !== 0) {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "职称评审"
            }else{
              
              crumb = "Title review"
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
              if(item.createTime != null){
                var currDate = item.createTime.split(" ")[0]
              }
              str +='<li data-id="fuwuzn_sub_a_1"  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivespfl fiveStep" data-step="fivespfl" data-index="'+ index +'"  onclick="zp_fwzn_info('+ item.id +',4)">'
              str +='<span>'+ title +'</span><i>'+ currDate +'</i></li>'
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "职称评审"
              var temp = "暂无数据"
            }else{
              var temp = "No data"
              crumb = "Title review"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)
        
            str +='<li class="kxyj_sub_a_0_item  sub_info_mange  clearfix" ><span>'+ temp +'</span><i></i></li>'
            desDom.append($(str))
          }


        }

      }
    })
  }
  // 人事证明
  fwzn_rszm_list()

  function fwzn_rszm_list() {
    $.ajax({
      url: baseUrl + "sys/ser/ser/hrprovelist",
      type: "POST",
      data: {
        language: sessionStorage.getItem("CNtoEn")
      },
      success: function (res) {
        // console.log("人事证明")
        // console.log(res)
        let desDom = $("#fuwuzn_sub_f .right_view .sub_content>ul")

        if (res.code === 0) {

          var data = res.page.list
          // console.log("人事证明")
          // console.log(data)
          var str = ""
          if (data.length !== 0) {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "人事证明"
              var temp = "暂无数据"
            }else{
              var temp = "No data"
              crumb = "Personnel Cert"
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
              if(item.createTime != null){
                var currDate = item.createTime.split(" ")[0]
              }
              str +='<li data-id="fuwuzn_sub_a_1"  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fiverszm fiveStep" data-step="fiverszm" data-index="'+ index +'"  onclick="zp_fwzn_info('+ item.id +',5)">'
              str +='<span>'+ title +'</span><i>'+ currDate +'</i></li>'
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "人事证明"
              var resTitle = "暂无数据"
            }else{
              var resTitle = "No data"
              crumb = "Personnel Cert"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)
            str +='<li class="kxyj_sub_a_0_item  sub_info_mange  clearfix" ><span>'+ resTitle +'</span><i></i></li>'
            desDom.append($(str))
          }


        }



      }
    })
  }
  // 离退休事务
  fwzn_ltxsw_list()

  function fwzn_ltxsw_list() {
    $.ajax({
      url: baseUrl + "sys/ser/ser/affairelist",
      type: "POST",
      data: {
        language: sessionStorage.getItem("CNtoEn")
      },
      success: function (res) {
        // console.log("离退休事务")
        // console.log(res)
        let desDom = $("#fuwuzn_sub_g .right_view .sub_content>ul")

        if (res.code === 0) {

          var data = res.page.list
          // console.log("离退休事务")
          // console.log(data)
          var str = ""
          if (data.length !== 0) {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "离退休事务"
            }else{
              
              crumb = "Retirement"
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
              if(item.createTime != null){
                var currDate = item.createTime.split(" ")[0]
              }
              str +='<li data-id="fuwuzn_sub_a_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix fiveltxsw fiveStep" data-step="fiveltxsw" data-index="'+ index +'"  onclick="zp_fwzn_info('+ item.id +',6)">'
              str +='<span>'+ title +'</span><i>'+ currDate +'</i></li>'
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "离退休事务"
              var temp = "暂无数据"
            }else{
              var temp = "No data"
              crumb = "Retirement"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)
           
            str +='<li class="kxyj_sub_a_0_item  sub_info_mange  clearfix" ><span>'+ temp +'</span><i></i></li>'
            desDom.append($(str))
          }


        }


      }
    })
  }
  // 政策制度
  fwzn_zczd_list()

  function fwzn_zczd_list() {
    $.ajax({
      url: baseUrl + "sys/ser/ser/policylist",
      type: "POST",
      data: {
        language: sessionStorage.getItem("CNtoEn")
      },
      success: function (res) {
        // console.log("政策制度")
        // console.log(res)




        let desDom = $("#fuwuzn_sub_h .right_view .sub_content>ul")

        if (res.code === 0) {

          var data = res.page.list
          // console.log("政策制度")
          // console.log(data)
          var str = ""
          if (data.length !== 0) {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "政策制度"
            }else{
              
              crumb = "Policy system"
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
              if(item.createTime != null){
                var currDate = item.createTime.split(" ")[0]
              }
              str +='<li data-id="fuwuzn_sub_a_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivezczd fiveStep" data-step="fivezczd" data-index="'+ index +'"  onclick="zp_fwzn_info('+ item.id +',7)">'
              str +='<span>'+ title +'</span><i>'+ currDate +'</i></li>'
            })
            desDom.html(str)
            fiveMenuClickEvent()
          } else {
            var crumb = ""
            if(sessionStorage.getItem("CNtoEn") == 1 ){
              crumb = "政策制度"
              var temp = "暂无数据"
            }else{
              var temp  = "No data"
              crumb = "Policy system"
            }
            var time = new Date().toLocaleDateString()
            // console.log(time)
         
            str +='<li class="kxyj_sub_a_0_item  sub_info_mange  clearfix" ><span>'+ temp +'</span><i></i></li>'
            desDom.append($(str))
          }


        }


      }
    })
  }




})
//服务指南info
function zp_fwzn_info(id, crumb) {
  $.ajax({
    url: baseUrl + "sys/ser/getinfo",
    type: "POST",
    data: {
      id:id,
    },
    success: function (res) {
      // console.log("学生info")
      // console.log(res)
      if (res.code == 0) {
        if(sessionStorage.getItem("CNtoEn") == 1 ){
          var resTitle = "暂无数据"
          var Time = "时间"
          var PageView = "浏览量"
          if(crumb == 1){
            crumb = "招聘事务"
          }else if(crumb == 2){
              crumb = "背景审查"
          }else if(crumb == 3){
            crumb = "工资福利"
          }else if(crumb == 4){
            crumb = "职称评审"
          }else if(crumb == 5){
            crumb = "人事证明"
          }else if(crumb == 6){
            crumb = "离退休事务"
          }else if(crumb == 7){
            crumb = "政策制度"
          }
         }else {
          var Time = "Time"
          var resTitle = "No Data"
          var PageView = "PageView"
          if(crumb == 1){
            crumb = "Recruitment"
          }else if(crumb == 2){
              crumb = "Background Check"
          }else if(crumb == 3){
            crumb = "Wages and benefits"
          }else if(crumb == 4){
            crumb = "Title review"
          }else if(crumb == 5){
            crumb = "Personnel Cert"
          }else if(crumb == 6){
            crumb = "Retirement"
          }else if(crumb == 7){
            crumb = "Policy system"
          }
         }
        if (res.content != null) {
          let data = res.content
          let createTime = data.createTime.split(" ")[0]
          let content = data.content.replace(/&amp;nbsp;/g, "&#10;")
          let crumbDom = $("#fuwuzn_sub_a_1 .crumb")
          let desDom = $("#fuwuzn_sub_a_1 .right_view .sub_content")
          let titleCrumbDom = $("#fuwuzn_sub_a_1 .titleCrumb")
          let str = ""
          if (data != null) {
    
      str +='<div class="sub_detail_content" style="" ><h3>'+ data.title +'</h3> <div class="sub_date" style="text-align:center;">'
str +='<span>'+ Time +':</span><i>'+ createTime +'</i>  '
str +='</div><p>'+ content +'</p></div>'
          }
          $(desDom).empty()
          $(desDom).append($(str))
          $(crumbDom).eq(0).empty()
          $(crumbDom).eq(0).text(crumb)
          $(titleCrumbDom).eq(0).empty()
          $(titleCrumbDom).eq(0).text(crumb)
        }

      }

    }
  })
}
//科研人员info
function zp_kyry_info(id, crumb) {
  $.ajax({
    url: baseUrl + "sys/recruit/getinfo",
    type: "POST",
    data: {
      id:id,
    },
    success: function (res) {
      // console.log("科研人员info")
      // console.log(res)
      if (res.code == 0) {
        
        if (res.content != null) {

          let data = res.content
          let createTime = data.createTime.split(" ")[0]
          let content = data.content.replace(/&amp;nbsp;/g, "&#10;")
          let crumbDom = $("#zhaopin_sub_a_1 .crumb")
          let desDom = $("#zhaopin_sub_a_1 .right_view .sub_content")
          let titleCrumbDom = $("#zhaopin_sub_a_1 .titleCrumb")
          let str = ""
          if(sessionStorage.getItem("CNtoEn") == 1 ){
            var resTitle = "暂无数据"
            var Time = "时间"
            var PageView = "浏览量"
            if(crumb == 1){
                crumb ="科研人员"
            }else if(crumb == 2){
              crumb ="行政科辅"
            }else if(crumb == 3){
              crumb ="管理人员"
            }else if(crumb == 4){
              crumb ="博士后"
            }else if(crumb == 5){
              crumb ="应届毕业生"
            }
           }else {
            var Time = "Time"
            var resTitle = "No Data"
            var PageView = "PageView"
            if(crumb == 1){
              crumb ="Researcher"
          }else if(crumb == 2){
            crumb ="Administrative"
          }else if(crumb == 3){
            crumb ="Manager"
          }else if(crumb == 4){
            crumb ="Postdoctoral"
          }else if(crumb == 5){
            crumb ="Graduates"
          }
           }
          if (data != null) {
         
            str +='<div class="sub_detail_content" style="" ><h3>'+ data.title +'</h3> <div class="sub_date" style="text-align:center;">'
str +='<span>'+ Time +':</span><i>'+ createTime +'</i>  '
str +='</div><p>'+ content +'</p></div>'
          }
          $(desDom).empty()
          $(desDom).append($(str))
          $(crumbDom).eq(0).empty()
          $(crumbDom).eq(0).text(crumb)
          $(titleCrumbDom).eq(0).empty()
          $(titleCrumbDom).eq(0).text(crumb)

        }

      }


    }
  })
}
var zpLanguage = {
  "titleCn":["人才招聘","服务指南"],
  "titleEn":["Recruitment","Guide"],
  "subMenuCn":["科研人员","行政科辅","管理人员","博士后","应届毕业生","招聘事务","报道入职","背景审查","工资福利","职称评审","人事证明","离退休事务","政策制度"],
  "subMenuEn":["Researcher","Administrative","Manager","Postdoctoral","Graduates","Recruitment","Entry report","Background Check","Wages and benefits","Title review","Personnel Cert","Retirement","Policy system"],
  "oneBreadCn":["当前位置：招聘▪科研人员","当前位置：招聘▪行政科辅","当前位置：招聘▪管理人员","当前位置：招聘▪博士后","当前位置：招聘▪应届毕业生","当前位置：招聘▪离退休事务","当前位置：招聘▪报道入职","当前位置：招聘▪背景审查","当前位置：招聘▪工资福利","当前位置：招聘▪职称评审","当前位置：招聘▪人事证明","当前位置：招聘▪离退休事务","当前位置：招聘▪政策制度"],
  "oneBreadEn":["Current location: Recruiting researchers","Current location: Recruitment","Current location: Recruiting management staff","Current location: Recruitment, postdoctoral","Current location: Recruitment","Current location: Recruitment","Current location: Recruitment report","Current location: Recruitment background review","Current location: Recruitment, wages and benefits","Current location: Recruitment","Current location: Recruitment personnel certificate","Current location: Recruitment","Current location: Recruitment policy system"],
  "twoRcBreadCn":["当前位置：招聘•人才招聘▪"],
  "twoRcBreadEn":["Current location: Recruitment • Talent recruitment•"],
  "twoFwBreadCn":["当前位置：招聘▪科研人员▪"],
  "twoFwBreadEn":["Current location: Recruiting researchers•"]
  


}
//中英文切换
if(sessionStorage.getItem("CNtoEn") == 1){
  //导航
  $("li[name = zpTitle]").each(function(index,item){
    $(item).text(zpLanguage["titleCn"][index])
  })
  $("h2[name = zpTitle]").each(function(index,item){
    $(item).text(zpLanguage["titleCn"][index])
  })
  //标题
  $("li[name = zpSubMenu]").each(function(index,item){
    $(item).text(zpLanguage["subMenuCn"][index])
  })
  $("h2[name = zpSubMenu]").each(function(index,item){
    $(item).text(zpLanguage["subMenuCn"][index])
  })
  //面包屑
  $("span[name = zpOneBread]").each(function(index,item){
    $(item).html(zpLanguage["oneBreadCn"][index])
  })
  $("span[name = zpTwoRcBread]").each(function(index,item){
    $(item).html(zpLanguage["twoRcBreadCn"][index])
  })
  $("span[name = zpTwoFwBread]").each(function(index,item){
    $(item).html(zpLanguage["twoFwBreadCn"][index])
  })
}else if (sessionStorage.getItem("CNtoEn") == 0){
  //导航
  $("li[name = zpTitle]").each(function(index,item){
    $(item).text(zpLanguage["titleEn"][index])
  })
  $("h2[name = zpTitle]").each(function(index,item){
    $(item).text(zpLanguage["titleEn"][index])
  })
  //标题
  $("li[name = zpSubMenu]").each(function(index,item){
    $(item).text(zpLanguage["subMenuEn"][index])
  })
  $("h2[name = zpSubMenu]").each(function(index,item){
    $(item).text(zpLanguage["subMenuEn"][index])
  })
  //面包屑
  $("span[name = zpOneBread]").each(function(index,item){
    $(item).html(zpLanguage["oneBreadEn"][index])
  })
  $("span[name = zpTwoRcBread]").each(function(index,item){
    $(item).html(zpLanguage["twoRcBreadEn"][index])
  })
  $("span[name = zpTwoFwBread]").each(function(index,item){
    $(item).html(zpLanguage["twoFwBreadEn"][index])
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
  //设置默认展示
li_trigger()
//设置默认展示
function li_trigger() {
  $('li[name = zpTitle]').eq(0).trigger("click")
}
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


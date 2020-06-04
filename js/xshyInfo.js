var hdxqLanObj ={
  "hdyqSubMenuCn":["首页","组委会","会议议题","重要日期","邀请报告","论文征集","会议注册","酒店住宿","交通指南","联系我们"],
  "hdyqSubMenuEn":["Home","Committee","Meeting Agenda","Important date","Invitation report","Call for papers","Meeting","Hotel Accommodation","Traffic Guide","Contact us"],
  "hdyqTwoRcBreadCn":['当前位置:活动详情&bull;首页','当前位置:活动详情&bull;组委会','当前位置:活动详情&bull;会议议题','当前位置:活动详情&bull;重要日期','当前位置:活动详情&bull;邀请报告','当前位置:活动详情&bull;论文征集','当前位置:活动详情&bull;会议注册','当前位置:活动详情&bull;酒店住宿','当前位置:活动详情&bull;交通指南','当前位置:活动详情&bull;联系我们',],
  "hdyqTwoRcBreadEn":['Current Location: Event Details &bull; Home', 'Current Location: Event Details &bull; Organizing Committee', 'Current Location: Event Details &bull; Meeting Agenda', 'Current Location: Event Details &bull; Important Date', 'Current Location: Events Details &bull; Invitation Report', 'Current Location: Event Details &bull; Paper Collection', 'Current Location: Event Details &bull; Meeting Registration', 'Current Location: Event Details &bull; Hotel Accommodation', 'Current Location: Event Details &bull; Traffic Guide', 'Current location: event details &bull; contact us',],
  "hdyqTitleCn":"活动详情",
  "hdyqTitleEn":"Details of the event",
}
if (sessionStorage.getItem("CNtoEn") == 1) {
  //中文
  $('li[ name = hdyqTitle]').text(hdxqLanObj["hdyqTitleCn"])
  $('h2[ name = hdyqTitle]').text(hdxqLanObj["hdyqTitleCn"])
  $('li[ name = hdyqSubMenu]').each(function(index,item){
    $(item).text(hdxqLanObj["hdyqSubMenuCn"][index])
  })
  $('span[ name = hdyqTwoRcBread]').each(function(index,item){
    $(item).html(hdxqLanObj["hdyqTwoRcBreadCn"][index])
  })
  $('h2[name = hdyqContentTitle]').each(function(index,item){
    $(item).text(hdxqLanObj["hdyqSubMenuCn"][index])
  })
}else {
  //英文
  $('li[ name = hdyqTitle]').text(hdxqLanObj["hdyqTitleEn"])
  $('h2[ name = hdyqTitle]').text(hdxqLanObj["hdyqTitleEn"])
  $('li[ name = hdyqSubMenu]').each(function(index,item){
    $(item).text(hdxqLanObj["hdyqSubMenuEn"][index])
  })
  $('span[ name = hdyqTwoRcBread]').each(function(index,item){
    $(item).html(hdxqLanObj["hdyqTwoRcBreadEn"][index])
  })
  $('h2[name = hdyqContentTitle]').each(function(index,item){
    $(item).text(hdxqLanObj["hdyqSubMenuEn"][index])
  })
}



// 左侧tab 切换
wlyjs()
function wlyjs() {
  var tabs = $(".left_menu ul")
  $(tabs).on("click", "li", function () {
    var id = $(this).data("id")
    $("#" + id)
      .addClass("content_item_active")
      .siblings()
      .removeClass("content_item_active")
  })
}
// var str = window.location.href
// var index = str.indexOf("=")
// var id = str.substr(index + 1 )
var id = getQueryString("id")
 // 首次加载
  getLoad(id)
  function getLoad(id){
    $.ajax({
      url:baseUrl + "sys/conference/info/"+ id +"",
      success:function(res){
        // console.log("返回值")
        // console.log(res)
        renderDom(res.conference)
      },  
    })
  }
// 渲染dom 元素
  function renderDom (data){
    var arrobj = []
    for (key in data ){
        arrobj.push(data[key])
    }
    arrobj.splice(0,5)
    arrobj.pop()
    var arr = ["#zhaopin_sub_a","#zhaopin_sub_b","#zhaopin_sub_c","#zhaopin_sub_d","#zhaopin_sub_e","#zhaopin_sub_f","#zhaopin_sub_g","#zhaopin_sub_h","#zhaopin_sub_i","#zhaopin_sub_j",]
    
    arr.forEach(function(item,index){
        if(arrobj[index]){
          $(item + " .right_view>.sub_content").html(arrobj[index])
        } else {
          $("li[name = hdyqSubMenu]").eq(index).hide()
        }
        
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
							if($('.' + tempArr[0]).length == 0){
								setTimeout(function(){
                  
									$('.' + tempArr[0]).eq(tempArr[1]).trigger("click")
								},500)
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


	}}
/**tab栏切换效果 */
//顶部tab栏函数
kygk_tab()
//科研团队
kytd_tab()
//右侧tab栏
wlyjs()
//学术会议详情页点击事件
xshd_tab()
//前沿研修
kxyx()
//硕士招生详情页
sszs_tab()
//学位学科
xwxk_tab()
//默认tab切换效果
li_trigger()
//ajax
function kygk_tab() {
	//tab切换显示不同类名  
	/** 获取元素*/
	var titles = $('.content .title>ul')
	//设置点击事件
	$(titles).on("mouseenter", "li", function() {
		$(this).css({
			cursor: "pointer"
		})
	})
	$(titles).on('click', "li", function() {
		/** tab点击效果*/

		var id = $(this).attr("data-id")
		// console.log(id)
		$(this)
			.addClass('tab_active')
			.siblings()
			.removeClass("tab_active")

		//点击显示内容
		$("#" + id)
			.addClass("content_item_active")
			.siblings()
			.removeClass('content_item_active')
	})
}
//子菜单目录点击事件tab栏执行
function kytd_tab() {

	var zzjg_tabs = $('.menu_lsyg .content .item .left_menu')

	//鼠标更改为小手
	$(zzjg_tabs).on("mouseenter", "li", function() {
		$(this).css({
			cursor: "pointer"
		})
	})
	$(zzjg_tabs).on("click", 'li', function() {

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
	$(tabs).on("click", "li", function() {
		var id = $(this).data("id")
		$("#" + id)
			.addClass("content_item_active")
			.siblings()
			.removeClass("content_item_active")
	})
}
//学术活动table详情页
function xshd_tab() {
	var tds = $("#xshy_sub_a td[data-id]")
	$(tds).on("click", function() {
		var id = $(this).data("id")
		$("#" + id)
			.addClass("content_item_active")
			.siblings()
			.removeClass("content_item_active")
		return false
	})

}
// 科学研究
function kxyx() {
	var divs = $("#kyjz_sub_d .item")
	$(divs).on("mouseenter", function() {
		$(this).css({
			cursor: "pointer"
		})
	})
	$(divs).on("click", function() {
		var id = $(this).data("id")
		$("#" + id)
			.addClass("content_item_active")
			.siblings()
			.removeClass("content_item_active")
	})
}
//硕士招生详情页
function sszs_tab() {
	var title = $("#kxyj_sub_a .sub_title")
	$(title).on("click", "li", function() {
		var id = $(this).data("id")
		// console.log(id)
		$("#" + id)
			.addClass("content_item_active")
			.siblings()
			.removeClass("content_item_active")
		return false
	})

}
//学位学科
function xwxk_tab() {
	var conta = $("#jyjxPage_section #xwsy_sub_a .right_view .sub_content")
	var contb = $("#jyjxPage_section #xwsy_sub_b .right_view .sub_content")
	var contd = $("#jyjxPage_section #xwsy_sub_d .right_view .sub_content")
	var conte = $("#jyjxPage_section #xwsy_sub_e .right_view .sub_content")
	$(conta).on("click", "li", function() {
		var id = $(this).data("id")
		// console.log(id)
		$("#" + id)
			.addClass("content_item_active")
			.siblings()
			.removeClass("content_item_active")
		return false
	})
	$(contd).on("click", "li", function() {
		var id = $(this).data("id")
		// console.log(id)
		$("#" + id)
			.addClass("content_item_active")
			.siblings()
			.removeClass("content_item_active")
		return false
	})
	$(contb).on("click", "li", function() {
		var id = $(this).data("id")
		// console.log(id)
		$("#" + id)
			.addClass("content_item_active")
			.siblings()
			.removeClass("content_item_active")
		return false
	})
	$(conte).on("click", "li", function() {
		var id = $(this).data("id")
		// console.log(id)
		$("#" + id)
			.addClass("content_item_active")
			.siblings()
			.removeClass("content_item_active")
		return false
	})
	//设置子菜单点击事件
	var subs = $(".is_sub_tab .right_view ul")
	$(subs).on("click", "li", function() {
		// console.log("--------------------------")
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
	$('.content .title>ul>li').eq(0).trigger("click")
	$("#xiaoyuansh_show_first").trigger("click")
	var str = window.location.href
	var index = str.indexOf("=")
	var id = str.substr(index + 1, 1)
	$('.menu_lsyg_wrap .title>ul>li').eq(id).trigger("click")
	var picStr = window.location.search
	var picIndex = picStr.lastIndexOf('&')
	if (picIndex > -1) {
		var picCrop = picStr.slice(picIndex + 1)
		var picArr = picCrop.split(':')
		picType = picArr[0].slice(4)
		picIndex = picArr[1]
		// console.log("url")
		// console.log(picIndex)
		switch (true) {
			case picType == 134:
				$('#dtbjslistBox>ul>li').eq(picIndex).trigger('click')
				break;
			case picType == 135:
				$('#stwhlistBox>ul>li').eq(picIndex).trigger('click')
				break;
			case picType == 277:
				$('#xysh_sub_c .left_menu>ul>li').eq(0).trigger('click')
				$('#yxtdlistBox>ul>li').eq(picIndex).trigger('click')
				break;
			case picType == 278:
				$('#xysh_sub_c .left_menu>ul>li').eq(1).trigger('click')
				$('#yxgrlistBox>ul>li').eq(picIndex).trigger('click')
				break;
			case picType == 279:
				$('#xysh_sub_c .left_menu>ul>li').eq(2).trigger('click')
				$('#pypxlistBox>ul>li').eq(picIndex).trigger('click')
				break;
			case picType == 280:
				$('#xysh_sub_c .left_menu>ul>li').eq(3).trigger('click')
				$('#cyzslistBox>ul>li').eq(picIndex).trigger('click')
				break;
		}
	}





}
//ajax
//校园活动
var languageStatus = sessionStorage.getItem("CNtoEn")
//党政班共建
function xysh_dzjs_info() {

	$.ajax({
		url: baseUrl + "sys/schlife/reward/list",
		type: "POST",
		data: {
			type: 134,
			language: sessionStorage.getItem("CNtoEn"),
			page: 1,
			limit: 100,
		},
		success: function(res) {
			// console.log("党团班建设")
			// console.log(res)
			if (res.code == 0) {
				var data = res.page.list
				var str = ""
				var subStr = ""
				var jianjieStr = ""
				if (data.length !== 0) {
					var title = ""
					data.forEach(function(item, index) {
						if (item.title != "") {
							title = item.title.substr(0, 20)
							title += "..."
						}

						// str += '<li data-id="rwhj_sub_c_1" class="fivexyhd fiveStep"  data-step="fivexyhd" data-index="' + index + '"  onclick="xysh_sthd_info(' + item.id + ')"> <a ><img src="' + item.remark +
						// 	'" alt=""></a>'
						str += '<li data-id="rwhj_sub_c_1" class="fivexyhd fiveStep"  data-step="fivexyhd" data-index="' + index +
							'"  > <a ><img src="' + item.remark +
							'" alt=""></a>'
						str += '<div class = "more"><a href="../subPage/xiaoyuanshPictureMore.html?id=134">More</a></div></li>'
						subStr += '<li><i class="arr2"></i><img src="' + item.remark + '" alt=""></li>'
						jianjieStr += '<li><p>' + item.standby + '</p></li>'
					})
					$("#dtbjspicBox>ul").html($(str))
					$("#dtbjslistBox>ul").html($(subStr))
					$('#xyhdLBul').html(jianjieStr)
					var ulIndex = $('#xyhdLBul>li').length != 0 ? $('#xyhdLBul>li').length : 0
					$('#xyhdLBul').width(ulIndex * 800)
					dtbjsLunBo("dtbjspicBox", "dtbjslistBox", "dtbjsprev", "dtbjsnext", "dtbjsprevTop", "dtbjsnextTop")
					var strUrl = window.location.href
					var subIndex = strUrl.lastIndexOf(":")
					if (subIndex) {
						var subId = strUrl.substr(subIndex + 1, 1)

						$('#dtbjslistBox>ul>li').eq(subId).trigger("click")

						// console.log("小轮播图dom")
						// console.log(subId)
						// console.log($('#listBox>ul>li'))
					}
					fiveMenuClickEvent()

				} else {

					if (sessionStorage.getItem("CNtoEn") == 0) {
						var temp = "No data"
					} else {
						var temp = "暂无数据"
					}
					str += '<li  class="clearfix" ><img src="#" alt=""><span>' + temp + '</span></li>'

					// $("#xxfw_rwhj").append($(str))

				}



			}


		}
	})
}
//社团文化list
function xysh_sthd_list(type) {
	$.ajax({
		url: baseUrl + "sys/schlife/reward/list",
		type: "POST",
		data: {
			type: 135,
			language: sessionStorage.getItem("CNtoEn"),
			page: 1,
			limit: 100,
		},
		success: function(res) {
			// console.log("社团文化")
			// console.log(res)
			if (res.code == 0) {
				var data = res.page.list
				var str = ""
				var subStr = ""
				var jianjieStr = ""
				if (data.length !== 0) {
					var title = ""
					data.forEach(function(item, index) {
						if (item.title != "") {
							title = item.title.substr(0, 20)
							title += "..."
						}

						// str += '<li data-id="rwhj_sub_c_1" class="fivestwh fiveStep"  data-step="fivestwh" data-index="' + index + '"  onclick="xysh_sthd_info(' + item.id + ')"> <a ><img src="' + item.remark +
						// 	'" alt=""></a>'
						str += '<li data-id="rwhj_sub_c_1" class="fivestwh fiveStep"  data-step="fivestwh" data-index="' + index +
							'" > <a ><img src="' + item.remark +
							'" alt=""></a>'
						str += '<p class="jianjie">' + item.standby + '</p>'
						str += '<div class = "more"><a href="../subPage/xiaoyuanshPictureMore.html?id=135">More</a></div></li>'
						subStr += '<li><i class="arr2"></i><img src="' + item.remark + '" alt=""></li>'
						jianjieStr += '<li><p>' + item.standby + '</p></li>'
					})
					$("#stwhpicBox>ul").html($(str))
					$("#stwhlistBox>ul").html($(subStr))
					$('#stwhLBul').html(jianjieStr)
					//设置ul宽度
					var ulIndex = $('#stwhLBul>li').length != 0 ? $('#stwhLBul>li').length : 0
					$('#stwhLBul').width(ulIndex * 800)
					dtbjsLunBo("stwhpicBox", "stwhlistBox", "stwhprev", "stwhnext", "stwhprevTop", "stwhnextTop")
					var strUrl = window.location.href
					var subIndex = strUrl.lastIndexOf(":")
					if (subIndex) {
						var subId = strUrl.substr(subIndex + 1, 1)

						$('#stwhlistBox>ul>li').eq(subId).trigger("click")

						// console.log("小轮播图dom")
						// console.log(subId)
						// // console.log($('#listBox>ul>li'))
					}

					fiveMenuClickEvent()
				} else {

					if (sessionStorage.getItem("CNtoEn") == 0) {
						var temp = "No data"
					} else {
						var temp = "暂无数据"
					}
					str += '<li  class="clearfix" ><img src="#" alt=""><span>' + temp + '</span></li>'

					$("#stwh_rwhj").append($(str))

				}



			}


		}
	})
}
//社团活动info
function xysh_sthd_info(id) {

	$.ajax({
		url: baseUrl + "sys/schlife/associationinfo",
		data: {
			id: id,
		},
		type: "POST",
		success: function(res) {
			var time = new Date().toLocaleDateString()
			if (sessionStorage.getItem("CNtoEn") == 0) {
				var temp = "Community culture"
				var bread = "Current location: Community culture"
				var Time = "Time"
				var PageView = "PageView"
				var Data = "NO Data"
			} else if (sessionStorage.getItem("CNtoEn") == 1) {
				var temp = "校园生活"
				var bread = "当前位置:校园生活"
				var Time = "时间"
				var PageView = "浏览量"
				var Data = "暂无数据"

			}


			if (res.code == 0) {
				if (res.data != null) {
					var data = res.data
					var content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					var time = ""
					if (data.createTime) {
						time = data.createTime.split(" ")[0]
					} else {
						time = data.date.split(" ")[0]
					}

					var str = '<div class="bn clearfix"><i></i><h2 class="fl" style="text-align:left;">' + temp +
						'</h2><span class="fr">' + bread +
						'</span></div>'
					str += '<div class="right_view"><div class="sub_content"><div class="sub_detail_content"><h3>' + data.title +
						'</h3>'
					str += '<div class="sub_date"><span>' + Time + ':</span><i>' + time + '</i> '
					str += '</div><p>' + content + '</p></div></div></div>'
					$("#xysh_sub_b").removeClass("content_item_active")
					$("#xysh_sub_a").removeClass("content_item_active")
					$("#xysh_sub_b_0_1").html($(str))
					$("#xysh_sub_b_0_1").addClass("content_item_active")
				} else {

					var str = '<div class="bn clearfix"><h2 class="fl">' + temp + '</h2><span class="fr">' + bread +
						'</span></div>'
					str += '<div class="right_view"><div class="sub_content"><div class="sub_detail_content">'
					str += '</div><p>' + Data + '</p></div></div></div>'
					$("#xysh_sub_b").removeClass("content_item_active")
					$("#xysh_sub_b_0_1").html($(str))
					$("#xysh_sub_b_0_1").addClass("content_item_active")
				}
			}






		}
	})
}
//心理健康info
function xysh_xshd_info(id) {
	if (sessionStorage.getItem("CNtoEn") == 1) {
		var id = 627
	} else {
		var id = 628
	}
	$.ajax({
		url: baseUrl + "sys/schlife/schactivityinfo",
		data: {
			id: id
		},
		type: "POST",
		success: function(res) {
			// console.log("心理健康")
			// console.log(res)
			var time = new Date().toLocaleDateString()

			if (sessionStorage.getItem("CNtoEn") == 0) {
				var temp = "Student Activities"
				var bread = "Current location: Student Activities"
				var Time = "Time"
				var PageView = "PageView"
				var Data = "NO Data"
			} else if (sessionStorage.getItem("CNtoEn") == 1) {
				var temp = "学生活动"
				var bread = "当前位置:学生活动"
				var Time = "时间"
				var PageView = "浏览量"
				var Data = "暂无数据"
			}


			if (res.code == 0) {
				if (res.data != null) {
					var data = res.data
					var content = data.content.replace(/&amp;nbsp;/g, "&#10;")

					var str = '<span>' + content + '<span>'
					$("#xysh_sub_d .right_view").html($(str))
					$("#xysh_sub_d .right_view").addClass("content_item_active")
				} else {
					var str = '<span>' + Data + '<span>'
					$("#xysh_sub_d .right_view").html($(str))
					$("#xysh_sub_d .right_view").addClass("content_item_active")
				}
			}



		}

	})
}
//优秀团队list
function yxtd(type) {
	$.ajax({
		url: baseUrl + "sys/schlife/reward/list",
		type: "POST",
		data: {
			type: type,
			language: sessionStorage.getItem("CNtoEn"),
			page: 1,
			limit: 100,
		},
		success: function(res) {
			// console.log("党团班建设")
			// console.log(res)
			if (res.code == 0) {
				var data = res.page.list
				var str = ""
				var subStr = ""

				if (data.length !== 0) {
					var title = ""
					data.forEach(function(item, index) {
						if (item.title != "") {
							title = item.title.substr(0, 20)
							title += "..."
						}

						str += '<li data-id="rwhj_sub_c_1" class="fiveyxtd fiveStep"  data-step="fiveyxtd" data-index="' + index +
							'"   onclick="xxfw_rwhj_info(2,' + item.id + ')"> <a ><img src="' + item.remark +
							'" alt=""></a>'
						str += '<div class = "more"><a href="../subPage/xiaoyuanshPictureMore.html?id=277">More</a></div></li>'
						subStr += '<li><i class="arr2"></i><img src="' + item.remark + '" alt=""></li>'
					})
					$("#yxtdpicBox>ul").html($(str))
					$("#yxtdlistBox>ul").html($(subStr))
					dtbjsLunBo("yxtdpicBox", "yxtdlistBox", "yxtdprev", "yxtdnext", "yxtdprevTop", "yxtdnextTop")
					var strUrl = window.location.href
					var subIndex = strUrl.lastIndexOf(":")
					if (subIndex) {
						var subId = strUrl.substr(subIndex + 1, 1)

						$('#yxtdlistBox>ul>li').eq(subId).trigger("click")

					}
					fiveMenuClickEvent()

				} else {

					if (sessionStorage.getItem("CNtoEn") == 0) {
						var temp = "No data"
					} else {
						var temp = "暂无数据"
					}
					str += '<li  class="clearfix" ><img src="#" alt=""><span>' + temp + '</span></li>'

					// $("#xxfw_rwhj").append($(str))

				}



			}


		}
	})
}
//优秀个人
function yxgr(type) {
	$.ajax({
		url: baseUrl + "sys/schlife/reward/list",
		type: "POST",
		data: {
			type: type,
			language: sessionStorage.getItem("CNtoEn"),
			page: 1,
			limit: 100,
		},
		success: function(res) {
			// console.log("党团班建设")
			// console.log(res)
			if (res.code == 0) {
				var data = res.page.list
				var str = ""
				var subStr = ""

				if (data.length !== 0) {
					var title = ""
					data.forEach(function(item, index) {
						if (item.title != "") {
							title = item.title.substr(0, 20)
							title += "..."
						}

						str += '<li data-id="rwhj_sub_c_1" class="fiveyxgr fiveStep"  data-step="fiveyxgr" data-index="' + index +
							'"   onclick="xxfw_rwhj_info(1,' + item.id + ')"> <a ><img src="' + item.remark +
							'" alt=""></a>'
						str += '<div class = "more"><a href="../subPage/xiaoyuanshPictureMore.html?id=278">More</a></div></li>'
						subStr += '<li><i class="arr2"></i><img src="' + item.remark + '" alt=""></li>'
					})
					$("#yxgrpicBox>ul").html($(str))
					$("#yxgrlistBox>ul").html($(subStr))
					dtbjsLunBo("yxgrpicBox", "yxgrlistBox", "yxgrprev", "yxgrnext", "yxgrprevTop", "yxgrnextTop")
					var strUrl = window.location.href
					var subIndex = strUrl.lastIndexOf(":")
					if (subIndex) {
						var subId = strUrl.substr(subIndex + 1, 1)

						$('#yxgrlistBox>ul>li').eq(subId).trigger("click")

					}
					fiveMenuClickEvent()

				} else {

					if (sessionStorage.getItem("CNtoEn") == 0) {
						var temp = "No data"
					} else {
						var temp = "暂无数据"
					}
					str += '<li  class="clearfix" ><img src="#" alt=""><span>' + temp + '</span></li>'

					// $("#xxfw_rwhj").append($(str))

				}



			}


		}
	})
}
//评优评先
function pypx(type) {
	$.ajax({
		url: baseUrl + "sys/schlife/reward/list",
		type: "POST",
		data: {
			type: type,
			language: sessionStorage.getItem("CNtoEn"),
			page: 1,
			limit: 100,
		},
		success: function(res) {
			// console.log("党团班建设")
			// console.log(res)
			if (res.code == 0) {
				var data = res.page.list
				var str = ""
				var subStr = ""

				if (data.length !== 0) {
					var title = ""
					data.forEach(function(item, index) {
						if (item.title != "") {
							title = item.title.substr(0, 20)
							title += "..."
						}

						str += '<li data-id="rwhj_sub_c_1" class="fivepypx fiveStep"  data-step="fivepypx" data-index="' + index +
							'"   onclick="xxfw_rwhj_info(3,' + item.id + ')"> <a ><img src="' + item.remark +
							'" alt=""></a>'
						str += '<div class = "more"><a href="../subPage/xiaoyuanshPictureMore.html?id=279">More</a></div></li>'
						subStr += '<li><i class="arr2"></i><img src="' + item.remark + '" alt=""></li>'
					})
					$("#pypxpicBox>ul").html($(str))
					$("#pypxlistBox>ul").html($(subStr))
					dtbjsLunBo("pypxpicBox", "pypxlistBox", "pypxprev", "pypxnext", "pypxprevTop", "pypxnextTop")
					var strUrl = window.location.href
					var subIndex = strUrl.lastIndexOf(":")
					if (subIndex) {
						var subId = strUrl.substr(subIndex + 1, 1)

						$('#pypxlistBox>ul>li').eq(subId).trigger("click")
						// console.log("小轮播图dom")
						// console.log(subId)
						// console.log($('#listBox>ul>li'))
					}
					fiveMenuClickEvent()

				} else {

					if (sessionStorage.getItem("CNtoEn") == 0) {
						var temp = "No data"
					} else {
						var temp = "暂无数据"
					}
					str += '<li  class="clearfix" ><img src="#" alt=""><span>' + temp + '</span></li>'

					// $("#xxfw_rwhj").append($(str))

				}



			}


		}
	})
}
//才艺展示
function cyzs(type) {
	$.ajax({
		url: baseUrl + "sys/schlife/reward/list",
		type: "POST",
		data: {
			type: type,
			language: sessionStorage.getItem("CNtoEn"),
			page: 1,
			limit: 100,
		},
		success: function(res) {
			console.log("才艺展示")
			console.log(res)
			if (res.code == 0) {
				var data = res.page.list
				var str = ""
				var subStr = ""
				if (data.length !== 0) {
					var title = ""
					data.forEach(function(item, index) {
						if (item.title != "" && item.title != null) {
							title = item.title.substr(0, 20)
							title += "..."
						}
						str += '<li data-id="rwhj_sub_c_1" class="fivecyzs fiveStep"  data-step="fivecyzs" data-index="' + index +
							'"   onclick="xxfw_rwhj_info(4,' + item.id + ')"> <a ><img src="' + item.remark +
							'" alt=""></a>'
						str += '<div class = "more"><a href="../subPage/xiaoyuanshPictureMore.html?id=280">More</a></div></li>'
						subStr += '<li><i class="arr2"></i><img src="' + item.remark + '" alt=""></li>'
					})
					$("#cyzspicBox>ul").html($(str))
					$("#cyzslistBox>ul").html($(subStr))
					dtbjsLunBo("cyzspicBox", "cyzslistBox", "cyzsprev", "cyzsnext", "cyzsprevTop", "cyzsnextTop")
					var strUrl = window.location.href
					var subIndex = strUrl.lastIndexOf(":")
					if (subIndex) {
						var subId = strUrl.substr(subIndex + 1, 1)

						$('#cyzslistBox>ul>li').eq(subId).trigger("click")
						// console.log("小轮播图dom")
						// console.log(subId)
						// console.log($('#listBox>ul>li'))
					}
					fiveMenuClickEvent()
				} else {

					if (sessionStorage.getItem("CNtoEn") == 0) {
						var temp = "No data"
					} else {
						var temp = "暂无数据"
					}
					str += '<li  class="clearfix" ><img src="#" alt=""><span>' + temp + '</span></li>'

					// $("#xxfw_rwhj").append($(str))

				}



			}


		}
	})
}
//风采展示info
function xysh_jzpy_info(id) {
	$.ajax({
		url: baseUrl + "sys/schlife/Style showinfo",
		data: {
			id: id,
		},
		type: "POST",
		success: function(res) {
			// console.log("风采展示info")
			// console.log(res)
			var time = new Date().toLocaleDateString()

			if (sessionStorage.getItem("CNtoEn") == 0) {
				var temp = "Award-winning"
				var bread = "Current location: Award-winning"
				var Time = "Time"
				var PageView = "PageView"
				var Data = "NO Data"

			} else if (sessionStorage.getItem("CNtoEn") == 1) {
				var temp = "风采展示"
				var bread = "当前位置:风采展示"
				var Time = "时间"
				var PageView = "浏览量"
				var Data = "暂无数据"
			}


			if (res.code == 0) {
				if (res.data != null) {
					var data = res.data
					var content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					var ttime = data.createTime.split(" ")[0]
					var str = '<div class="bn clearfix"><h2 class="fl">' + temp + '</h2><span class="fr">' + bread + '</span>'
					str += '</div><div class="right_view"><div class="sub_content"><div class="sub_detail_content">'
					str += '<h3>' + data.title + '</h3><div class="sub_date"><span>' + Time + ':</span><i>' + ttime + '</i>'
					str += '</div><p>' + content + '</p></div></div></div>'
					$("#xysh_sub_c").removeClass("content_item_active")
					$("#xysh_sub_c_0_1").empty()
					$("#xysh_sub_c_0_1").html($(str))
					$("#xysh_sub_c_0_1").addClass("content_item_active")
				} else {
					var str = '<div class="bn clearfix"><h2 class="fl">' + temp + '</h2><span class="fr">' + bread +
						'</span></div>'
					str += '<div class="right_view"><div class="sub_content"><div class="sub_detail_content"><h3>' + Data + '</h3>'
					str += '<div class="sub_date"><span>' + Time + ':</span><i>' + +' '
					str += '</div><p>' + Data + '</p></div></div></div>'
					$("#xysh_sub_c").removeClass("content_item_active")
					$("#xysh_sub_c_0_1").empty()
					$("#xysh_sub_c_0_1").html($(str))
					$("#xysh_sub_c_0_1").addClass("content_item_active")
				}
			}

		}
	})
}
//社团文化简介 type 135 风采展示 type 137
function xsIntro(type) {
	$.ajax({
		url: baseUrl + "sys/instroduction/instroList",
		data: {
			language: sessionStorage.getItem("CNtoEn"),
			type: type,
		},
		success: function(res) {
			// console.log("学生风采展示/社团文化简介")
			// console.log(res)
			if (res.code == 0) {
				if (type == 135) {
					var desDom = $('p[name  = associationCulture]')
				} else {
					var desDom = $('p[name  = award]')
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

function xxfw_rwhj_info(path, id) {
	$.ajax({
		url: baseUrl + "sys/schlife/associationinfo",
		data: {
			id: id,
		},
		type: "POST",
		success: function(res) {
			var time = new Date().toLocaleDateString()
			if (sessionStorage.getItem("CNtoEn") == 0) {
				var temp = "Community culture"
				var bread = "Current location: Community culture"
				var Time = "Time"
				var PageView = "PageView"
				var Data = "NO Data"
			} else if (sessionStorage.getItem("CNtoEn") == 1) {
				var temp = "校园生活"
				var bread = "当前位置:校园生活"
				var Time = "时间"
				var PageView = "浏览量"
				var Data = "暂无数据"

			}

			var des
			switch (true) {
				case path == 1:
					des = $('#lxwm_sub_a')
					break;
				case path == 2:
					des = $('#lxwm_sub_b')
					break;
				case path == 3:
					des = $('#lxwm_sub_c')
					break;
				case path == 4:
					des = $('#lxwm_sub_d')
					break;
			}

			if (res.code == 0) {
				if (res.data != null) {
					// console.log(res)
					var data = res.data
					var content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					var time = data.date == null ? "" : data.date.split(" ")[0]
					var str = ''
					str += '<div class="right_view"><div class="sub_content"><div class="sub_detail_content"><h3>' + data.title +
						'</h3>'
					str += '<div class="sub_date"><span>' + Time + ':</span><i>' + time + '</i> '
					str += '</div><p>' + content + '</p></div></div></div>'
					if (des) {
						// console.log(des)
						des.removeClass("content_item_active")
							.siblings()
							.removeClass("content_item_active")
						$('#lxwm_sub_e').addClass("content_item_active")
						$('#lxwm_sub_e .right_view>.sub_content').empty()
							.html(str)

					}
				}

			} else {

				var str = '<div class="bn clearfix"><h2 class="fl">' + temp + '</h2><span class="fr">' + bread +
					'</span></div>'
				str += '<div class="right_view"><div class="sub_content"><div class="sub_detail_content">'
				str += '</div><p>' + Data + '</p></div></div></div>'
				$("#xysh_sub_b").removeClass("content_item_active")
				$("#xysh_sub_b_0_1").empty()
				$("#xysh_sub_b_0_1").html($(str))
				$("#xysh_sub_b_0_1").addClass("content_item_active")
			}

		}
	})
}
//中英文切换
var xyshLanguage = {
	"xyshSubTitleCn": ["校园活动", "社团文化", "风采展示", "心理健康"],
	"xyshSubTitleEn": ["School Life", "Community culture", "Style show", "Mental health"],
	"jzpyBreadCn": ["奖学金", "评优评选", "风采展示文件"],
	"jzpyBreadEn": ["scholarship", "Evaluation", "Mental health"]
}
if (sessionStorage.getItem("CNtoEn") == 1) {
	//中文
	//title
	$("li[name = xyshTitle]").text("校园生活")
	$("span[name = xyshTitle]").text("校园生活")
	//subtitle
	$("li[name = xyshSubTitle ]").each(function(index, item) {
		$(item).text(xyshLanguage["xyshSubTitleCn"][index])
	})
	$('h2[name = xyshSubTitlen]').text(xyshLanguage['xyshSubTitleCn'][3])
	$("h2[name = xyshSubTitle ]").each(function(index, item) {
		$(item).text(xyshLanguage["xyshSubTitleCn"][index])
	})
	$("li[name = dzldSubTitle ]").each(function(index, item) {
		$(item).text(xyshLanguage["dzldSubTitleCn"][index])
	})
	$("li[name = stwhSubTitle ]").each(function(index, item) {
		$(item).text(xyshLanguage["stwhSubTitleCn"][index])
	})
	$("li[name = jzpyBread ]").each(function(index, item) {
		$(item).text(xyshLanguage["jzpyBreadCn"][index])
	})
	//面包屑
	$("span[name = dzldBread]").html(
		'当前位置：<a href="../subPage/menu.html?prevName=校园生活&prevEname=School%20Life&menuId=111">校园生活</a>&bull;校园活动')
	$("span[name = stwhBread]").html(
		'当前位置：<a href="../subPage/menu.html?prevName=校园生活&prevEname=School%20Life&menuId=111">校园生活</a>&bull;社团文化')
	$("span[name = xshdBread]").html(
		'当前位置：<a href="../subPage/menu.html?prevName=校园生活&prevEname=School%20Life&menuId=111">校园生活</a>&bull;风采展示')
	$("span[name = jzpyBread]").html(
		'当前位置：<a href="../subPage/menu.html?prevName=校园生活&prevEname=School%20Life&menuId=111">校园生活</a>&bull;心理健康')

} else if (sessionStorage.getItem("CNtoEn") == 0) {
	//英文

	$("li[name = xyshTitle]").text("school life")
	$("span[name = xyshTitle]").text("school life")
	//subtitle
	$("li[name = xyshSubTitle ]").each(function(index, item) {
		$(item).text(xyshLanguage["xyshSubTitleEn"][index])
	})
	$("h2[name = xyshSubTitle ]").each(function(index, item) {
		$(item).text(xyshLanguage["xyshSubTitleEn"][index])
	})
	$("li[name = dzldSubTitle ]").each(function(index, item) {
		$(item).text(xyshLanguage["dzldSubTitleEn"][index])
	})
	$("li[name = stwhSubTitle ]").each(function(index, item) {
		$(item).text(xyshLanguage["stwhSubTitleEn"][index])
	})
	$('h2[name = xyshSubTitlen]').text(xyshLanguage['xyshSubTitleEn'][3])
	$("li[name = jzpyBread ]").each(function(index, item) {
		$(item).text(xyshLanguage["jzpyBreadEn"][index])
	})
	//面包屑
	$("span[name = dzldBread]").html(
		'Current location: <a href="../subPage/menu.html?prevName=校园生活&prevEname=School%20Life&menuId=111">School Life</a>&bull;School Life'
	)
	$("span[name = stwhBread]").html(
		'Current location: <a href="../subPage/menu.html?prevName=校园生活&prevEname=School%20Life&menuId=111">School Life</a>&bull;Community Culture'
	)
	$("span[name = xshdBread]").html(
		'Current location: <a href="../subPage/menu.html?prevName=校园生活&prevEname=School%20Life&menuId=111">School Life</a>&bull;Style show'
	)
	$("span[name = jzpyBread]").html(
		'Current location: <a href="../subPage/menu.html?prevName=校园生活&prevEname=School%20Life&menuId=111">School Life</a>&bull;Mental health'
	)

}
//我们需要首次加载的时候获取url如果在dom加载完成后，会和增加的dom事件冲突将后续的事件序列清空
//给二级标题增加点击事件
var steps = [".twoStep", ".threeStep", ".fourStep"]
steps.forEach(function(item, index) {
	$(item).on('click', function(event) {
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
	$('.fiveStep').on('click', function(event) {
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
			currUrlArr.forEach(function(item, index) {
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
			// // console.log("updataStr")
			// // console.log(currStr)
			//使用新的字符串替代#号后面的所有字符串
			var updataUrlIndex = window.location.href.indexOf("#") + 1
			window.location.href = window.location.href.slice(0, updataUrlIndex) + currStr
		} else {
			//不包含当前层级 我们在后面追加当前的操作
			// // console.log("不包含step的url")
			// // console.log(currUrl)
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
window.onload = function() {
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
				operatPathArr.forEach(function(item, index) {
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
							if ($('.' + tempArr[0]).length == 0) {
								setTimeout(function() {

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

$(function () {
	//设置培养单位_点击哨兵
	var pydwIsClick = false
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
	//就业服务列表
	zssw_zszn_list()
	//校友列表
	jyfw_jyzn_list()
	//硕士招生列表
	sszs_xxgk_list()
	//博士招生列表
	bszs_xxgk_list()
	//************** 特色培养 ******************
	rcpy_jxrl_info()
	rcpy_jsdw_list()
	xwxk_xwsy_list()
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
		// // console.log("sjlkfjsdlkfjlksdjflksdjfl")
		$(tabs).on("click", "li", function () {
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
		$(tds).on("click", function () {
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
	}
	xwxkTab()

	function xwxkTab() {
		var tabs = $("#rcpy_sub_b .sub_title>ul")
		tabs.on("click", "li", function () {
			$(this).addClass("sub_tab")
				.siblings()
				.removeClass("sub_tab")
		})
	}
	//硕士招生详情页
	function sszs_tab() {
		var title = $("#kxyj_sub_a .sub_title")
		$(title).on("click", "li", function () {
			var id = $(this).data("id")
			// // console.log(id)
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
		$(conta).on("click", "li", function () {
			var id = $(this).data("id")
			// // console.log(id)
			$("#" + id)
				.addClass("content_item_active")
				.siblings()
				.removeClass("content_item_active")
			return false
		})
		$(contd).on("click", "li", function () {
			var id = $(this).data("id")
			// // console.log(id)
			$("#" + id)
				.addClass("content_item_active")
				.siblings()
				.removeClass("content_item_active")
			return false
		})
		$(contb).on("click", "li", function () {
			var id = $(this).data("id")
			// // console.log(id)
			$("#" + id)
				.addClass("content_item_active")
				.siblings()
				.removeClass("content_item_active")
			return false
		})
		$(conte).on("click", "li", function () {
			var id = $(this).data("id")
			// // console.log(id)
			$("#" + id)
				.addClass("content_item_active")
				.siblings()
				.removeClass("content_item_active")
			return false
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
		$('#rcpy_sub_c_triFist').trigger("click")
		// if(id = 1) {
		//     $('li[name = rcpyTitle]').eq(4).trigger("click")
		// }
	}
})
//______
var sel_index = 0
var secoundUl_isclick = false
window.currPage = 1,
	window.totalPage = 0
//组织架构
zzjg_tab()
//研究本部子菜单事件
yjbb_event()
//九院各所子菜单事件
qtdw_event()
//九院各所子菜单子tab事件
qtdw_sub_event()
//九院各所类名样式
other_danwei()
//组织架构子tab栏执行
function zzjg_tab() {
	var zzjg_tabs = $('.menu_lsyg .content .item .left_menu')
	//鼠标更改为小手
	$(zzjg_tabs).on("mouseenter", "li", function () {
		$(this).css({
			cursor: "pointer"
		})
	})
	$(zzjg_tabs).on("click", 'li', function () {
		var id = $(this).data("id")
		var navName = $(this).text().substr(0, 4)

		var firstLi = $("#zzjg_sub_c_sub")
		var secondUl = $("#zzjg_sub_c_ul")
		var arrow = $("#zzjg_sub_c_arrow")
		//点击其他隐藏培养单位子标题

		if (secoundUl_isclick === false && navName === "Trai") {

			secoundUl_isclick = true
			$(firstLi).css({
				"height": "180px"
			})
			$(secondUl)
				.css("display", "block")

			$(arrow).css({
				"transform": "rotate(180deg)",
				'top': '10px'
			})
			$(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(1).off("click")
			$(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(2).off("click")
			$(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(3).off("click")

		} else if (secoundUl_isclick === false && navName === "培养单位") {
			secoundUl_isclick = true
			$(firstLi).css({
				"height": "180px"
			})
			$(secondUl)
				.css("display", "block")

			$(arrow).css({
				"transform": "rotate(180deg)",
				'top': '10px'
			})
			$(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(1).off("click")
			$(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(2).off("click")
			$(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(3).off("click")
		} else if (navName === "培养单位" || navName === "Trai" && secoundUl_isclick === true) {
			$(secondUl)
				.css("display", "none")
			$(arrow).css({
				"transform": "rotate(0deg)",
				'top': '18px'
			})
			$(firstLi).css({
				"height": "35px"
			})
			secoundUl_isclick = false
		} else {
			$(secondUl)
				.css("display", "none")
			$(arrow).css({
				"transform": "rotate(0deg)",
				'top': '18px'
			})
			$(firstLi).css({
				"height": "35px"
			})
			secoundUl_isclick = false
		}
		if (id == "zzjg_sub_c") {
			return
		}
		$('#' + id)
			.addClass("content_item_active")
			.siblings()
			.removeClass("content_item_active")
	})

}
//研究本部3级菜单事件设置  招生工作---tab切换
function yjbb_event() {

	var tab = $("#zzjg_sub_c_1 .zzjq_sub_c_1_content .sub_c_1_tab>ul")
	$(tab).on("click", "li", function () {
		// content_item_active
		var id = $(this).data("id")
		$(this).addClass("sub_c1_tab_def_hover")
			.siblings()
			.removeClass("sub_c1_tab_def_hover")
		$("#" + id)
			.addClass("content_item_active")
			.siblings()
			.removeClass("content_item_active")
	})

}
//九院各所4级菜单事件设置
function qtdw_event() {
	var tab = $("#zzjg_sub_c_2 .zzjq_sub_c_2_content")
	$(tab).on("click", "li", function () {
		var id = $(this).data("id")
		$("#" + id)
			.addClass("content_item_active")
			.siblings()
			.removeClass("content_item_active")
	})
}
//九院各所tab样式
function other_danwei() {
	$(".zzjg_sub_c_2_0 .sub_c_1_tab ul").on("click", "li", function () {
		$(this).addClass("sub_tab")
			.siblings()
			.removeClass("sub_tab")
	})
}
// 研究本院 tab切换下的list 切换
function yjbb_tabLIst() {
	//获取组织架构研院本部子集tab标签为其设置事件显示zzjg_sub_c_detail
	var sub_c_1_content_item_list = $("#yybb_sub_c_2 .sub_c_1_content_item_list ")
	sub_c_1_content_item_list.on("click", function () {
		$('#zzjg_sub_c_detail').addClass('content_item_active')
		$('#zzjg_sub_c_1').removeClass('content_item_active')
	})
}
//九院各所子菜单事件设置 ---招生工作---培养工作---毕业工作
function qtdw_sub_event() {
	var pydw_tab = $(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul")
	// 获取子页面的所有li 和 显示框对应
	// 给每一个li设置点击事件 让与之对应的显示框显示_
	//  这里使用lis数组的索引，对应的就是获取显示框数组的索引
	$(pydw_tab).on("click", "li", function () {
		var id = $(this).data("id")
		$(this).addClass("sub_c1_tab_def_hover")
			.siblings()
			.removeClass("sub_c1_tab_def_hover")
		$("#" + id)
			.addClass("content_item_active")
			.siblings()
			.removeClass("content_item_active")
	})
}
//培养单位//研院本部研究室教育简介
zzjg_yybb_yjsjy()
function zzjg_yybb_yjsjy() {
	var id
	if (languageStatus == 1) {
		id = 813
	} else {
		id = 814
	}
	$.ajax({
		url: baseUrl + "sys/culture/info",
		type: "POST",
		data: {
			id: id
		},
		success: function (res) {
			// // console.log("研院本部-研究室教育简介")
			// // console.log(res)
			if (res.code == 0) {
				if (sessionStorage.getItem("CNtoEn") == 1) {
					var resTitle = "新的定位"
				} else {
					var resTitle = "New positioning"
				}
				if (res.content != null) {
					var data = res.content
					var content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					var desDom = $("#yybb_sub_c_1 .sub_c_1_content_item_yjsjyjj")
					var str = ""

					str = '<h5>' + data.title + ':</h5><p>' + content + '</p>'
					desDom.append($(str))
				}
			}
		},
		err: function (err) {
			// // console.log("请求错误信息")
			// // console.log(err)

		}
	})
}
//研院本部 招生工作list
function zzjg_yybb_zzgz() {
	$.ajax({
		url: baseUrl + "sys/culture/culture/list",
		type: "POST",
		data: {
			language: languageStatus,
		},
		success: function (res) {
			// // console.log("研究本源招生工作")
			// // console.log(res)
			var time = new Date().toLocaleDateString()
			var desDom = $("#yybb_sub_c_2")
			if (res.code == 0) {
				var str = ""
				var time = ""
				if (sessionStorage.getItem("CNtoEn") == 1) {
					var resTitle = "暂无数据"
				} else {
					var resTitle = "No Data"
				}
				var data = res.page.list
				if (data.length !== 0) {
					data.forEach(function (item, index) {
						if (item.createTime != "") {
							time = item.createTime.split(' ')[0]
						}
						var currDate = ""
						if (item.date != null) {
							currDate = item.date.split(" ")[0]
						}
						str += '<li class="sub_c_1_content_item_list" onclick="zzjg_yybb_info(' + item.id +
							')"><span class="lsyg_fl">'
						str += '' + item.title + '</span><span class="lsyg_rl">' + currDate + '</span></li>'
					})
				} else {
					str += '<li  class="" ><span class="lsyg_fl">' + resTitle + '</span>'
					str += '<span class="lsyg_rl"></span></li>'
				}
			}
			desDom.empty()
			desDom.html($(str))
			yjbb_tabLIst()
		},
		err: function (err) {

		}
	})
}
//研院本部 培养工作list
function zzjg_yybb_pygz() {
	$.ajax({
		url: baseUrl + "sys/culture/culture/culturelist",
		type: "POST",
		data: {
			language: languageStatus,
		},
		success: function (res) {
			// // console.log("研院本部培养工作")
			// // console.log(res)
			var time = new Date().toLocaleDateString()
			var desDom = $("#yybb_sub_c_2")
			if (res.code == 0) {
				var str = ""
				var time = ""
				if (sessionStorage.getItem("CNtoEn") == 1) {
					var resTitle = "暂无数据"
				} else {
					var resTitle = "No Data"
				}
				var data = res.page.list
				if (data.length !== 0) {
					data.forEach(function (item, index) {
						if (item.createTime != "") {
							time = item.createTime.split(' ')[0]
						}
						var currDate = ""
						if (item.date != null) {
							currDate = item.date.split(" ")[0]
						}
						str += '<li class="sub_c_1_content_item_list" onclick="zzjg_yybb_info(' + item.id +
							')"><span class="lsyg_fl">'
						str += '' + item.title + '</span><span class="lsyg_rl">' + currDate + '</span></li>'
					})
				} else {
					str += '<li class="" >'
					str += '<span class="lsyg_fl">' + resTitle + '</span><span class="lsyg_rl"></span></li>'
				}
			}
			desDom.empty()
			desDom.append($(str))
			yjbb_tabLIst()
		},
		err: function (err) {

		}
	})
}
//研院本部 毕业工作list
function zzjg_yybb_bygz() {
	$.ajax({
		url: baseUrl + "sys/culture/culture/graduationlist",
		type: "POST",
		data: {
			language: languageStatus,
		},
		success: function (res) {
			// // console.log("毕业工作")
			// // console.log(res)
			var data = res.page.list
			var time = new Date().toLocaleDateString()
			if (sessionStorage.getItem("CNtoEn") == 1) {
				var resTitle = "暂无数据"
			} else {

				var resTitle = "No Data"
			}
			var desDom = $("#yybb_sub_c_2")
			if (res.code == 0) {
				var str = ""
				var time = ""
				var data = res.page.list
				if (data.length !== 0) {
					data.forEach(function (item, index) {
						if (item.createTime != "") {
							time = item.createTime.split(' ')[0]
						}
						var currDate = ""
						if (item.date != null) {
							currDate = item.date.split(" ")[0]
						}
						str += '<li class="sub_c_1_content_item_list" onclick="zzjg_yybb_info(' + item.id +
							')"><span class="lsyg_fl">'
						str += '' + item.title + '</span><span class="lsyg_rl">' + currDate + '</span></li>'
					})
				} else {
					str += '<li class="" >'
					str += '<span class="lsyg_fl">' + resTitle + '</span><span class="lsyg_rl"></span></li>'
				}
			}
			desDom.empty()
			desDom.append($(str))
			yjbb_tabLIst()
		},
		err: function (err) {

		}
	})
}
//研院本部 tab_info
function zzjg_yybb_info(id) {
	$.ajax({
		url: baseUrl + "sys/culture/getinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// // console.log("研院本部详情info")
			// // console.log(res)
			let desDom = $("#zzjg_sub_c_detail .zzjq_sub_c_1_content")
			if (res.code == 0) {
				var str = ""
				var date = new Date().toLocaleDateString()
				let data = res.content
				if (sessionStorage.getItem("CNtoEn") == 1) {
					var resTitle = "暂无数据"
					var Time = "时间"

				} else {
					var Time = "Time"
					var resTitle = "No Data"
				}
				if (data != null) {
					let createTime = ""
					let content = ""
					if (data.createTime != "") {
						createTime = data.createTime.split(" ")[0]
						// // console.log(createTime)
					}
					if (data.content != "") {
						content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					}
					str += '<div class="sub_detail_content" style="" ><h3>' + data.title +
						'</h3><div class="sub_date" style="text-align:center;">'
					str += '<span>' + createTime + '</span><i></i></div><p>' + content + '</p></div>'
				} else {

					str += '<div class="sub_detail_content"><h3></h3><div class="sub_date">'
					str += '<i></i> </div><p>' + resTitle + '</p></div>'
				}
			}
			desDom.empty()
			$(desDom).append($(str))
		}
	})
}
// 九院各所 tab切换下的list 切换
function qtdw_tabList() {
	var sub_list = $("#qtdw_sub_c_2>ul")
	sub_list.on("click", "li", function () {
		var id = $(this).data("id")
		$("#" + id)
			.addClass("content_item_active")
			.siblings()
			.removeClass("content_item_active")
	})
}
//九院各所 渲染
//九院各所整体list
zzjg_qtdw_list()
function zzjg_qtdw_list() {
	$.ajax({
		url: baseUrl + "sys/dept/nextlist",
		type: "POST",
		data: {
			language: languageStatus,
		},
		success: function (res) {
			// console.log("九院各所整体list")
			// console.log(res)
			//这里的渲染的list 需要给子页面传入parentID
			//给每一个list设置点击事件并传入parentID
			var desDom = $("#zzjg_sub_c_2 .zzjq_sub_c_2_content>ul")
			var str = ""
			res.forEach(function (item, index) {
				str += '<li data-id="zzjg_sub_c_2_1"  class="fourjygs" data-step="fourjygs" data-index=' + index + ' onclick="zzjg_qtdw_getList(\'' + item.name + '\',' + index + ',' + item.deptId + ',\'fourjygs\')"><span>' + item.name +
					'</span></li>'
			})
			desDom.append($(str))
		},
		err: function (err) {

		}
	})
}
//获取父级链接的pid请求其他子标题的list 或info
//九院各所//研院本部研究室教育简介
function zzjg_qtdw_getList(name, _index, Pid, step) {
	// console.log("父级机构Deptid")
	// console.log(Pid)
	// console.log(arguments)
	breadcrumb(step, _index)
	zzjg_pydw_yjsjy(Pid)
	$(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").off('click')
	$(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(0).trigger('click')
	$("span[name = zzjgSubQtdw1]").html(name)
	function zzjg_pydw_yjsjy(Pid) {
		$.ajax({
			url: baseUrl + "sys/culture/getdeptinfo",
			type: "POST",
			data: {
				parentId: Pid,
				language: languageStatus,
			},
			success: function (res) {
				// console.log("九院各所简介信息")
				// console.log(res)
				var desDom = $("#qtdw_sub_c_1 .sub_c_1_content_item_yjsjyjj")
				var step = $(this).data().step
				var _index = $(this).data().index
				var str = ""
				if (res.code == 0) {
					var data = res.content
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var time = "时间"

						var Dataa = "暂无数据"
					} else {
						var time = "time"

						var Dataa = "No data"
					}
					if (data != null) {
						let createTime = ""
						let content = ""
						if (data.createTime != "") {
							createTime = data.createTime.split(" ")[0]
						}
						if (data.content != "") {
							content = data.content.replace(/&amp;nbsp;/g, "&#10;")
						}

						str += '<div class="sub_detail_content" style="" ><h3>' + data.title +
							'</h3><div class="sub_date" style="text-align:center;">'
						str += '<span>' + time + ':</span><i>' + createTime + '</i> </div>'
						str += '<p>' + content + '</p></div>'
					} else {

						str += '<div class="sub_detail_content"><h3>' + Dataa + '</div>'
					}
				}
				if (res.content == null) {

				}
				desDom.empty()
				desDom.append($(str))
				// $(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(0).trigger("click")
			},
			err: function (err) {
				// // console.log("九院各所研院本部研究室教育简介错误信息")
				// // console.log(err)
			}
		})
	}
	//九院各所 招生工作 为给子列表设置详情点击事件
	//由于每次进入子菜单都会给每一个tab上事件，这样事件会累加起来
	//所以需要每一次进来之前解除解除每个元素上的事件
	$(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(1).on("click", function (event) {
		var step = $(this).data().step
		var _index = $(this).data().index
		breadcrumb(step, _index)
		zzjg_qtdw_zzgz(Pid)
	})
	$(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(2).on("click", function (event) {
		zzjg_qtdw_pygz(Pid)
		// console.log("点击导师介绍")
		$(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").removeClass("sub_c1_tab_def_hover sub_tab")
		$(this).addClass("sub_c1_tab_def_hover sub_tab")
		$('#qtdw_sub_c_1').removeClass("content_item_active")
		$('#qtdw_sub_c_2').addClass("content_item_active")
		var step = $(this).data().step
		var _index = $(this).data().index
		breadcrumb(step, _index)
		breadcrumb("page", window.currPage)
		return false
	})
	$(".zzjg_sub_c_2_0 .zzjq_sub_c_1_content .sub_c_1_tab>ul li").eq(3).on("click", function (event) {
		var step = $(this).data().step
		var _index = $(this).data().index
		breadcrumb(step, _index)
		zzjg_qtdw_bygz(Pid)
	})
	zzjg_qtdw_zzgz(Pid)
	zzjg_qtdw_pygz(Pid)
	zzjg_qtdw_bygz(Pid)
}
function zzjg_qtdw_zzgz(Pid) {
	$.ajax({
		url: baseUrl + "sys/culture/culture/ceptlist",
		type: "POST",
		data: {
			language: languageStatus,
			parentId: Pid
		},
		success: function (res) {
			// console.log("九院各所招生工作")
			// console.log(res)
			// console.log(Pid)
			if (sessionStorage.getItem("CNtoEn") == 1) {
				var resTitle = "暂无数据"
			} else {
				var resTitle = "No Data"
			}
			var desDom = $("#qtdw_sub_c_2>ul")
			if (res.code == 0) {
				var data = res.page.list
				var str = ""
				if (data.length == 0) {
					str += '<li data-id="zzjg_sub_qtdw_detail" class="" >'
					str += '<span class="lsyg_fl">' + resTitle + '</span><span class="lsyg_rl"></span></li>'
				} else {
					var time = ""
					var title = ""
					data.forEach(function (item, index) {
						if (item.date != "") {
							time = item.date.split(' ')[0]
						}
						if (item.title != "") {
							title = item.title.substr(0, 30)
						}
						var currDate = ""
						if (item.date != null) {
							currDate = item.date.split(" ")[0]
						}
						str += '<li data-id="zzjg_sub_qtdw_detail" class="sub_c_1_content_item_list" onclick="zzjg_qtdw_info(' +
							item.id + ')">'
						str += '<span class="lsyg_fl">' + title + '</span><span class="lsyg_rl">' + currDate + '</span></li>'
					})
				}
			}
			desDom.empty()
			desDom.append($(str))
			qtdw_tabList()
		},
		err: function (err) {

		}
	})
}
function zzjg_qtdw_pygz(Pid) {
	$.ajax({
		url: baseUrl + "sys/culture/culture/deptculturelist",
		type: "POST",
		data: {
			language: languageStatus,
			parentId: Pid,
			limit: 10,
			page: window.currPage,
		},
		success: function (res) {
			// console.log("导师介绍")
			// // console.log(res)
			// // console.log(Pid)

			if (sessionStorage.getItem("CNtoEn") == 1) {
				var resTitle = "暂无数据"
			} else {
				var resTitle = "No Data"
			}
			var data = res.page.list
			var time = new Date().toLocaleDateString()
			var desDom = $("#qtdw_sub_c_2>ul")
			if (res.code == 0) {
				var data = res.page.list
				window.totalPage = res.page.totalPage
				var str = ""
				if (data.length == 0) {
					str += '<li data-id="zzjg_sub_qtdw_detail" class="" >'
					str += '<span class="lsyg_fl">' + resTitle + '</span><span class="lsyg_rl"></span></li>'
				} else {
					var time = ""
					var title = ""

					data.forEach(function (item, index) {
						if (item.createTime != "") {
							time = item.createTime.split(' ')[0]
						}
						if (item.title != "") {
							title = item.title.substr(0, 30)

						}
						var currDate = ""
						if (item.date != null) {
							currDate = item.date.split(" ")[0]
						}
						str += '<li data-id="zzjg_sub_qtdw_detail" class="sub_c_1_content_item_list  sixdsjs sixStep"  data-step="sixdsjs"  data-index=' + index + ' onclick="zzjg_qtdw_info(' +
							item.id + ')">'
						str += '<span class="lsyg_fl">' + title + '</span><span class="lsyg_rl">' + currDate + '</span></li>'

					})
					str += "<i class='layui-icon layui-icon-up prevPage' onclick='prevPage(" + Pid + ")'></i> <i class='layui-icon layui-icon-down nextPage' onclick='nextPage(" + Pid + ")'></i> "
				}

			}
			desDom.empty()
			desDom.append($(str))
			sixMenuClickEvent()
			qtdw_tabList()
		},
		err: function (err) {

		}
	})
}
function zzjg_qtdw_bygz(Pid) {
	$.ajax({
		url: baseUrl + "sys/culture/culture/graduationlist",
		type: "POST",
		data: {
			language: languageStatus,
			parentId: Pid
		},
		success: function (res) {
			// // console.log("毕业工作")
			// // console.log(res)
			// // console.log(Pid)

			var data = res.page.list
			var time = new Date().toLocaleDateString()
			if (sessionStorage.getItem("CNtoEn") == 1) {
				var resTitle = "暂无数据"
			} else {
				var resTitle = "No Data"
			}
			var desDom = $("#qtdw_sub_c_2>ul")
			if (res.code == 0) {
				var data = res.page.list
				var str = ""
				if (data.length == 0) {

					str += '<li data-id="zzjg_sub_qtdw_detail" class="" >'
					str += '<span class="lsyg_fl">' + resTitle + '</span><span class="lsyg_rl"></span></li>'
				} else {
					var time = ""
					var title = ""

					data.forEach(function (item, index) {
						if (item.createTime != "") {
							time = item.createTime.split(' ')[0]
						}
						if (item.title != "") {
							title = item.title.substr(0, 30)

						}
						var currDate = ""
						if (item.date != null) {
							currDate = item.date.split(" ")[0]
						}
						str += '<li data-id="zzjg_sub_qtdw_detail" class="sub_c_1_content_item_list" onclick="zzjg_qtdw_info(' +
							item.id + ')">'
						str += '<span class="lsyg_fl">' + title + '</span><span class="lsyg_rl">' + currDate + '</span></li>'

					})
				}



			}
			desDom.empty()
			desDom.append($(str))
			qtdw_tabList()
		},
		err: function (err) {

		}
	})
}
//九院各所 tab_info
function zzjg_qtdw_info(id) {
	$.ajax({
		url: baseUrl + "sys/culture/getinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// // console.log("研院本部info")
			// // console.log(res)
			if (sessionStorage.getItem("CNtoEn") == 1) {
				var resTitle = "暂无数据"
				var Time = "时间"

			} else {
				var Time = "Time"
				var resTitle = "No Data"

			}
			let desDom = $("#zzjg_sub_qtdw_detail .zzjq_sub_c_1_content")
			if (res.code === 0) {
				var str = ""
				let data = res.content

				if (data != null) {
					let content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					let createTime = data.date.split(" ")[0]
					str += '<div class="sub_detail_content" style="" ><h3>' + data.title + '</h3><p class="return">返回</p><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + createTime + '</i></div>'
					str += '<p>' + content + '</p></div>'
				} else {
					str += '<div class="sub_detail_content"><h3>' + resTitle + '</h3>'
					str += '<div class="sub_date"></div><p>' + resTitle + '</p></div>'
				}
			}

			desDom.empty()
			$(desDom).html($(str))
			$('.return').on("click", function (e) {
				var urlPath = window.location.href
				var operatPathIndex = urlPath.lastIndexOf("#")
				var operatPath = urlPath.slice(operatPathIndex + 1)
				var href = urlPath.slice(0, operatPathIndex + 1)
				var operatPathArr = operatPath.split("|")
				var str = ""
				if (operatPathArr.length > 0) {
					var newarr = operatPathArr.splice(0, 4)
					str = newarr.join("|") + "|"
					window.location.href = href + str
					console.log(href + str)
					history.go(0)
				}
			})
		}
	})
}
//__________
var languageStatus = sessionStorage.getItem("CNtoEn")
if (sessionStorage.getItem("CNtoEn") == 0) {
	var Time = "Time"
	var PageView = "PageView"
	var Data = "NO Data"
} else if (sessionStorage.getItem("CNtoEn") == 1) {
	var Time = "时间"
	var PageView = "浏览量"
	var Data = "暂无数据"
}
// ***************************ajax************************
//硕士招生就业信息列表   第二级菜单有bug
function sszs_zcfg_list() {
	$.ajax({
		url: baseUrl + "sys/student/policy/list",
		type: "POST",
		data: {
			language: languageStatus,
		},
		success: function (res) {
			// // console.log("硕士招生政策法则")
			// // console.log(res)
			var data = res.page.list
			var str = ""
			if (data.length !== 0) {
				data.forEach(function (item, index) {
					var time = ""
					if (item.date != null) {
						time = item.createTime.split(" ")[0]
					}
					var title = ""
					if (item.title != "") {
						title = item.title

					}
					if (item.date != null) {
						var currDate = item.date.split(" ")[0]
					}
					str +=
						'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivesszszzxc fiveStep"  data-step="fivesszszzxc" data-index="' +
						index + '" onclick="sszs_zcfg_info(' + item.id +
						')"><span>' + title + '</span><i>' + currDate + '</i></li>'
				})
			} else {
				if (sessionStorage.getItem("CNtoEn") == 0) {
					var temp = "No data"
				} else {
					var temp = "暂无数据"
				}
				str += '<li  class=" sub_info_mange  clearfix"  ><span>' + temp + '</span><i></i></li>'
			}
			$("#kxyj_sub_a_1").removeClass("content_item_active")
			//  
			$("#kxyj_sub_a_0 .sub_title_a ul").html($(str))
			fiveMenuClickEvent()
		}
	})
}
//硕士招生就业信息详情
function sszs_zcfg_info(id) {
	$.ajax({
		url: baseUrl + "sys/student/policyinfo",
		data: {
			id: id
		},
		type: "POST",
		success: function (res) {
			// // console.log("硕士政策详情")
			// // console.log(res)
			if (res.code == 0) {
				if (languageStatus == 1) {
					var bread = "当前位置:招生就业&bull;硕士招生"
					var title = "硕士"

				} else if (languageStatus == 0) {
					var bread = "Current location: Master's enrollment"
					var title = "Master's enrollment"
				}
				var time = ""

				var data = res.data
				if (data.date != null) {
					// // console.log(data.date)
					time = data.date.split(" ")[0]
				}
				var content = data.content.replace(/&amp;nbsp;/g, "&#10;")
				var str = '<div class="bn clearfix"><h2 class="fl">' + title + '</h2><span class="fr">' + bread +
					'</span></div>'
				str += '<div class="right_view"><div class="sub_content"><h3>' + data.title + '</h3><div class="sub_date">'
				str += '<span>' + Time + ':</span><i>' + time + '</i></div><p>' + content + '</p></div></div></div>'
				$("#kxyj_sub_a").removeClass("content_item_active")
				$("#kxyj_sub_a_0_1").addClass("content_item_active")
				$("#kxyj_sub_a_0_1").html($(str))
			}

		}
	})
}
//硕士招生信息公开列表  
function sszs_xxgk_list() {
	$.ajax({
		url: baseUrl + "sys/student/info/list",
		type: "POST",
		data: {
			language: languageStatus,
		},
		success: function (res) {
			// // console.log("硕士招生信息公开列表")
			// // console.log(res)
			var data = res.page.list
			var str = ""
			if (data.length !== 0) {
				data.forEach(function (item, index) {
					var time = ""
					if (item.date != null) {
						time = item.date.split(" ")[0]
					}
					var title = ""
					if (item.title != "") {
						title = item.title

					}
					if (item.date != null) {
						var currDate = item.date.split(" ")[0]
					}
					str +=
						'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fiveStep fivesszsxxgk" data-step="fivesszsxxgk" data-index="' +
						index + '" onclick="sszs_zcfg_info(' + item.id +
						')"><span>' + title + '</span><i>' + currDate + '</i></li>'
				})
			} else {
				if (sessionStorage.getItem("CNtoEn") == 0) {
					var temp = "No data"
				} else {
					var temp = "暂无数据"
				}
				str += '<li  class="  sub_info_mange  clearfix"  ><span>' + temp + '</span><i></i></li>'
			}
			$("#kxyj_sub_a_1").removeClass("content_item_active")
			$("#kxyj_sub_a_0 .sub_title_a ul").html($(str))
			fiveMenuClickEvent()
		}
	})
}
//硕士招生信息公开详情
function sszs_xxgk_info(id) {
	$.ajax({
		url: baseUrl + "sys/student/masterinfo",
		data: {
			id: id
		},
		type: "POST",
		success: function (res) {
			// // console.log("硕士公开信息详情")
			// // console.log(res)
			if (res.code == 0) {
				if (languageStatus == 1) {
					var bread = "当前位置:招生就业&bull;硕士招生"
					var title = "硕士"

				} else if (languageStatus == 0) {
					var bread = "Current location: Master's enrollment"
					var title = "Master's enrollment"
				}
				var time = ""
				var data = res.data
				if (data.date != null) {
					time = data.date.split(" ")[0]
				}
				var content = data.content.replace(/&amp;nbsp;/g, "&#10;")
				if (item.date != null) {
					var currDate = item.date.split(" ")[0]
				}
				var str = '<div class="bn clearfix"><h2 class="fl">' + title + '</h2><span class="fr">' + bread +
					'</span></div>'
				str += '<div class="right_view"><div class="sub_content"><h3>' + data.title + '</h3><div class="sub_date">'
				str += '<span>' + Time + ':</span><i>' + currDate + '</i> </div><p>' + content + '</p></div></div></div>'
				$("#kxyj_sub_a").removeClass("content_item_active")
				$("#kxyj_sub_a_0_1").addClass("content_item_active")
				$("#kxyj_sub_a_0_1").empty()
				$("#kxyj_sub_a_0_1").append($(str))



			}

		}
	})
}
// 硕士招生简章目录 @sys/course/list
// function sszs_zyml_list() {
// 	$.ajax({
// 		url: baseUrl + "sys/course/list",
// 		type: "POST",
// 		data: {
// 			language: languageStatus,
// 			page: 1,
// 			limit: 10,
// 		},
// 		success: function (res) {
// 			// // console.log("硕士招生简章目录")
// 			// // console.log(res)
// 			if (res.code == 0) {
// 				var data = res.page.list
// 				optionsSSZS.data = res.page.list
// 				//硕士招生绘制分页
// 				pageSSZS.init(data.length, 1, optionsSSZS);


// 			}


// 		}
// 	})
// }
//2019-10-14日更改简章目录为列表，之前是表格形式
function sszs_zyml_list() {
	$.ajax({
		url: baseUrl + "sys/schlife/reward/list",
		type: "POST",
		data: {
			language: languageStatus,
			type: 281
		},
		success: function (res) {
			// // console.log("硕士招生简章目录")
			// // console.log(res)
			var data = res.page.list
			// // console.log(data)
			var str = ""
			if (data.length !== 0) {
				data.forEach(function (item, index) {
					var time = ""
					if (item.date != null) {
						time = item.date.split(" ")[0]
					}
					var title = ""
					if (item.title != "") {
						title = item.title

					}
					if (item.date != null) {
						var currDate = item.date.split(" ")[0]
					}
					str +=
						'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fiveStep fivesszsjzml" data-step="fivesszsjzml" data-index="' +
						index + '" onclick="sszs_zcfg_info(' + item.id +
						')"><span>' + title + '</span><i>' + currDate + '</i></li>'
				})
			} else {
				if (sessionStorage.getItem("CNtoEn") == 0) {
					var temp = "No data"
				} else {
					var temp = "暂无数据"
				}
				str += '<li  class="  sub_info_mange  clearfix"  ><span>' + temp + '</span><i></i></li>'
			}
			// // console.log(str)
			$('#kxyj_sub_a_0').addClass("content_item_active")
			$("#kxyj_sub_a_1").removeClass("content_item_active")
			$("#kxyj_sub_a_0 .sub_title_a ul").html($(str))
			fiveMenuClickEvent()
		}
	})
}
//*********** */博士招生********************
//博士招生信息公开列表
function bszs_xxgk_list() {
	$.ajax({
		url: baseUrl + "sys/student/doctor/list",
		type: "POST",
		data: {
			language: languageStatus,
		},
		success: function (res) {
			var data = res.page.list
			var str = ""
			if (data.length !== 0) {
				data.forEach(function (item, index) {
					var time = ""
					if (item.date != null) {
						time = item.date.split(" ")[0]
					}
					var title = ""
					if (item.title != "") {
						title = item.title

					}
					if (item.date != null) {
						var currDate = item.date.split(" ")[0]
					}
					str +=
						'<li  class="kxyj_sub_a_0_item  sub_info_mange  fiveStep fivebszsxxgk clearfix" data-step="fivebszsxxgk" data-index="' +
						index + '" onclick="bszs_xxgk_info(' + item.id +
						')"><span>' + title + '</span><i>' + currDate + '</i></li>'
				})
			} else {
				if (sessionStorage.getItem("CNtoEn") == 0) {
					var temp = "No data"
				} else {
					var temp = "暂无数据"
				}
				str += '<li  class="  sub_info_mange  clearfix"  ><span>' + temp + '</span><i></i></li>'
			}
			$("#kxyj_sub_b_1").removeClass("content_item_active")
			$("#kxyj_sub_b_0 .sub_title ul").html($(str))
			fiveMenuClickEvent()
		}
	})
}
//博士招生信息公开详情
function bszs_xxgk_info(id) {
	$.ajax({
		url: baseUrl + "sys/student/doctorinfo",
		data: {
			id: id
		},
		type: "POST",
		success: function (res) {
			// // console.log("博士招生详情")
			// // console.log(res)
			if (res.code == 0) {
				if (languageStatus == 1) {
					var bread = "当前位置:招生就业&bull;博士招生"
					var title = "博士"
				} else if (languageStatus == 0) {
					var bread = "Current location: Doctoral Admissions"
					var title = "Doctoral Admissions"
				}
				var time = ""

				var data = res.data
				if (data.date != null) {
					time = data.date.split(" ")[0]
				}
				var content = data.content.replace(/&amp;nbsp;/g, "&#10;")
				var str = '<div class="bn clearfix"><h2 class="fl">' + title + '</h2><span class="fr">' + bread +
					'</span></div>'
				str += '<div class="right_view"><div class="sub_content"><h3>' + data.title + '</h3><div class="sub_date">'
				str += '<span>' + Time + ':</span><i>' + time + '</i></div><p>' + content + '</p></div></div></div>'
				$("#kxyj_sub_b").removeClass("content_item_active")
				$("#kxyj_sub_b_0_1").addClass("content_item_active")
				$("#kxyj_sub_b_0_1").empty()
				$("#kxyj_sub_b_0_1").append($(str))



			}


		}
	})
}
//博士招生政策法则列表
function bszs_zcfz_list() {

	$.ajax({
		url: baseUrl + "sys/student/doctor/policy/list",
		type: "POST",
		data: {
			language: languageStatus,
		},
		success: function (res) {
			var data = res.page.list
			var str = ""
			if (data.length !== 0) {
				data.forEach(function (item, index) {
					var time = ""
					if (item.date != null) {
						time = item.date.split(" ")[0]
					}
					var title = ""
					if (item.title != "") {
						title = item.title

					}
					if (item.date != null) {
						var currDate = item.date.split(" ")[0]
					}
					str +=
						'<li  class="kxyj_sub_a_0_item  sub_info_mange  fiveStep fivebszszsxc clearfix"  data-step="fivebszszsxc" data-index="' +
						index + '" onclick="bszs_zcfz_info(' + item.id +
						')"><span>' + title + '</span><i>' + currDate + '</i></li>'
				})
			} else {
				if (sessionStorage.getItem("CNtoEn") == 0) {
					var temp = "No data"
				} else {
					var temp = "暂无数据"
				}
				str += '<li  class="  sub_info_mange  clearfix"  ><span>' + temp + '</span><i></i></li>'
			}
			$("#kxyj_sub_b_1").removeClass("content_item_active")
			$("#kxyj_sub_b_0").addClass("content_item_active")
			$("#kxyj_sub_b_0 .sub_title ul").html($(str))
			fiveMenuClickEvent()
		}
	})
}
//博士招生政策法则详情
function bszs_zcfz_info(id) {
	$.ajax({
		url: baseUrl + "sys/student/doctorpolicyinfo",
		data: {
			id: id
		},
		type: "POST",
		success: function (res) {
			// // console.log("就业信息详情")
			// // console.log(res)
			if (res.code == 0) {
				if (languageStatus == 1) {
					var bread = "当前位置:招生就业&bull;博士招生"
					var title = "博士"

				} else if (languageStatus == 0) {
					var bread = "Current location: Doctoral Admissions"
					var title = "Doctoral Admissions"
				}
				var time = ""

				var data = res.data
				if (data.createTime != null) {
					time = data.createTime.split(" ")[0]
				}
				var content = data.content.replace(/&amp;nbsp;/g, "&#10;")

				var str = '<div class="bn clearfix"><h2 class="fl">' + title + '</h2><span class="fr">' + bread +
					'</span></div>'
				str += '<div class="right_view"><div class="sub_content"><h3>' + data.title + '</h3><div class="sub_date">'
				str += '<span>' + Time + ':</span><i>' + time + '</i> </div><p>' + content + '</p></div></div></div>'
				$("#kxyj_sub_b").removeClass("content_item_active")
				$("#kxyj_sub_b_0_1").addClass("content_item_active")
				$("#kxyj_sub_b_0_1").empty()
				$("#kxyj_sub_b_0_1").append($(str))



			}

		}
	})
}
// 博士招生简章目录 @sys/course/doctorlist
// function bszs_zyml_list() {
// 	$.ajax({
// 		url: baseUrl + "sys/course/doctorlist",
// 		type: "POST",
// 		data: {
// 			language: languageStatus,
// 			limit: 100,
// 			page: 1,
// 		},
// 		success: function (res) {
// 			// // console.log("博士招生简章目录")
// 			// // console.log(res)
// 			if (res.code == 0) {
// 				var data = res.page.list
// 				optionsBSZS.data = res.page.list
// 				//硕士招生绘制分页

// 				// // console.log(optionsBSZS)

// 				pageBSZS.init(data.length, 1, optionsBSZS);


// 			}
// 		}
// 	})
// }
function bszs_zyml_list() {
	$.ajax({
		url: baseUrl + "sys/schlife/reward/list",
		type: "POST",
		data: {
			language: languageStatus,
			type: 282,
		},
		success: function (res) {
			var data = res.page.list
			var str = ""
			if (data.length !== 0) {
				data.forEach(function (item, index) {
					var time = ""
					if (item.date != null) {
						time = item.date.split(" ")[0]
					}
					var title = ""
					if (item.title != "") {
						title = item.title

					}
					if (item.date != null) {
						var currDate = item.date.split(" ")[0]
					}
					str +=
						'<li  class="kxyj_sub_a_0_item  sub_info_mange  fiveStep fivebszszsjz clearfix"  data-step="fivebszszsjz" data-index="' +
						index + '" onclick="bszs_xxgk_info(' + item.id +
						')"><span>' + title + '</span><i>' + currDate + '</i></li>'
				})
			} else {
				if (sessionStorage.getItem("CNtoEn") == 0) {
					var temp = "No data"
				} else {
					var temp = "暂无数据"
				}
				str += '<li  class="  sub_info_mange  clearfix"  ><span>' + temp + '</span><i></i></li>'
			}
			$("#kxyj_sub_b_0").addClass("content_item_active")
			$("#kxyj_sub_b_1").removeClass("content_item_active")
			$("#kxyj_sub_b_0 .sub_title ul").html($(str))
			fiveMenuClickEvent()
		}
	})
}
//硕博招生 表格下载
function bszs_bgxz_list(type) {

	$.ajax({
		url: baseUrl + "sys/schlife/reward/list",
		type: "POST",
		data: {
			language: languageStatus,
			type: type,
		},
		success: function (res) {
			// // console.log(type + "表格下载")
			// // console.log(res)

			var data = res.page.list == null ? [] : res.page.list
			var str = ""
			if (data.length !== 0) {
				data.forEach(function (item, index) {
					var time = ""
					if (item.date != null) {
						time = item.date.split(" ")[0]
					}
					var title = ""
					if (item.title != "") {
						title = item.title

					}
					if (item.date != null) {
						var currDate = item.date.split(" ")[0]
					}
					if (type == 272) {
						str +=
							'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivebszsbgxz fiveStep"  data-step="fivebszsbgxz" data-index="' +
							index + '" onclick="bszs_xxgk_info(' + item.id +
							')"><span>' + title + '</span><i>' + currDate + '</i></li>'
					} else {
						str +=
							'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivezszsbgxz fiveStep"  data-step="fivezszsbgxz" data-index="' +
							index + '" onclick="sszs_zcfg_info(' + item.id +
							')"><span>' + title + '</span><i>' + currDate + '</i></li>'
					}

				})
			} else {
				if (sessionStorage.getItem("CNtoEn") == 0) {
					var temp = "No data"
				} else {
					var temp = "暂无数据"
				}
				str += '<li  class=" sub_info_mange  clearfix"  ><span>' + temp + '</span><i></i></li>'
			}
			// // console.log("字符串")
			// // console.log(str)
			if (type == 272) {
				$("#kxyj_sub_b_1").removeClass("content_item_active")
				$("#kxyj_sub_b_0 .sub_title ul").html($(str))
				fiveMenuClickEvent()
			} else {
				$("#kxyj_sub_a_1").removeClass("content_item_active")
				$("#kxyj_sub_a_0").addClass("content_item_active")
				$("#kxyj_sub_a_0 .sub_title_a ul").html($(str))
				fiveMenuClickEvent()
			}

		}
	})
}
//就业服务手续办理列表
function zssw_kssw_list() {

	$.ajax({
		url: baseUrl + "sys/student/examination/list",
		type: "POST",
		data: {
			language: languageStatus,
			type: 129,
			exchibition: 2,
		},
		success: function (res) {
			// console.log("手续办理")
			// console.log(res)
			var data = res.page.list
			var str = ""
			if (data.length !== 0) {
				data.forEach(function (item, index) {
					var time = ""
					if (item.date != null) {
						time = item.date.split(" ")[0]
					}
					var title = ""
					if (item.title != "") {
						title = item.title

					}
					if (item.date != null) {
						var currDate = item.date.split(" ")[0]
					}
					str +=
						'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivejyfwsxbl fiveStep"  data-step="fivejyfwsxbl" data-index="' +
						index + '" onclick="zssw_kssw_info(' + item.id +
						')"><span>' + title + '</span><i>' + currDate + '</i></li>'
				})
			}
			$("#kxyj_sub_a_1").removeClass("content_item_active")
			$("#kxyj_sub_c_0 .sub_title ul").html($(str))
			fiveMenuClickEvent()
		}
	})
}
//就业服务手续办理详情
function zssw_kssw_info(id) {
	$.ajax({
		url: baseUrl + "sys/student/examinationinfo",
		data: {
			id: id
		},
		type: "POST",
		success: function (res) {
			// // console.log("考生考务详情")
			// // console.log(res)
			if (res.code == 0) {
				if (languageStatus == 1) {
					var bread = "当前位置:招生就业&bull;就业服务"
					var title = "就业服务"

				} else if (languageStatus == 0) {
					var bread = "Current location: Candidate affairs"
					var title = "Candidate affairs"
				}
				var time = ""

				var data = res.data
				if (data.createTime != null) {
					time = data.createTime.split(" ")[0]
				}
				var content = data.content.replace(/&amp;nbsp;/g, "&#10;")

				var str = '<div class="bn clearfix"><h2 class="fl">' + title + '</h2><span class="fr">' + bread +
					'</span></div>'
				str += '<div class="right_view"><div class="sub_content"><h3>' + data.title + '</h3><div class="sub_date">'
				str += '<span>' + Time + ':</span><i>' + time + '</i> </div><p>' + content + '</p></div></div></div>'
				$("#kxyj_sub_c").removeClass("content_item_active")
				$("#kxyj_sub_c_0_1").addClass("content_item_active")
				$("#kxyj_sub_c_0_1").empty()
				$("#kxyj_sub_c_0_1").append($(str))



			}

		}
	})
}
//就业服务就业指导详情
function zssw_zsxly_info(id) {
	$.ajax({
		url: baseUrl + "sys/student/campinfo",
		data: {
			id: id
		},
		type: "POST",
		success: function (res) {
			// // console.log("就业指导详情")
			// // console.log(res)
			if (res.code == 0) {
				if (languageStatus == 1) {
					var bread = "当前位置:招生就业&bull;就业服务"
					var title = "就业服务"

				} else if (languageStatus == 0) {
					var bread = "Current location: Candidate affairs"
					var title = "Candidate affairs"
				}
				var time = ""

				var data = res.data
				if (data.createTime != null) {
					time = data.createTime.split(" ")[0]
				}
				var content = data.content.replace(/&amp;nbsp;/g, "&#10;")

				var str = '<div class="bn clearfix"><h2 class="fl">' + title + '</h2><span class="fr">' + bread +
					'</span></div>'
				str += '<div class="right_view"><div class="sub_content"><h3>' + data.title + '</h3><div class="sub_date">'
				str += '<span>' + Time + ':</span><i>' + time + '</i> </div><p>' + content + '</p></div></div></div>'
				$("#kxyj_sub_c").removeClass("content_item_active")
				$("#kxyj_sub_c_0_1").addClass("content_item_active")
				$("#kxyj_sub_c_0_1").empty()
				$("#kxyj_sub_c_0_1").append($(str))
			}

		}
	})
}
//就业服务就业指导列表
function zssw_zsxly_list() {

	$.ajax({
		// url: baseUrl + "sys/student/camp/list",
		url: baseUrl + "sys/student/examination/list",
		type: "POST",
		data: {
			language: languageStatus,
			type: 128,
			exchibition: 2,
		},
		success: function (res) {
			// console.log("就业指导列表")
			// console.log(res)
			var data = res.page.list
			var str = ""
			if (data.length !== 0) {
				data.forEach(function (item, index) {
					var time = ""
					if (item.date != null) {
						time = item.date.split(" ")[0]
					}
					var title = ""
					if (item.title != "") {
						title = item.title

					}
					if (item.date != null) {
						var currDate = item.date.split(" ")[0]
					}
					str +=
						'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix  fivejyfwjyzd fiveStep"  data-step="fivejyfwjyzd" data-index="' +
						index + '" onclick="zssw_zsxly_info(' + item.id +
						')"><span>' + title + '</span><i>' + currDate + '</i></li>'
				})
			}
			$("#kxyj_sub_c_0 .sub_title ul").html($(str))
			fiveMenuClickEvent()
		}
	})
}
//就业服务就业信息详情
function zssw_zsxc_info(id) {
	$.ajax({
		url: baseUrl + "sys/student/gandainfo",
		data: {
			id: id
		},
		type: "POST",
		success: function (res) {
			// // console.log("就业信息详情")
			// // console.log(res)
			if (res.code == 0) {
				if (languageStatus == 1) {
					var bread = "当前位置:招生就业&bull;就业服务"
					var title = "就业服务"

				} else if (languageStatus == 0) {
					var bread = "Current location: Candidate affairs"
					var title = "Candidate affairs"
				}
				var time = ""

				var data = res.data
				if (data.createTime != null) {
					time = data.createTime.split(" ")[0]
				}
				var content = data.content.replace(/&amp;nbsp;/g, "&#10;")

				var str = '<div class="bn clearfix"><h2 class="fl">' + title + '</h2><span class="fr">' + bread +
					'</span></div>'
				str += '<div class="right_view"><div class="sub_content"><h3>' + data.title + '</h3><div class="sub_date">'
				str += '<span>' + Time + ':</span><i>' + time + '</i> </div><p>' + content + '</p></div></div></div>'
				$("#kxyj_sub_c").removeClass("content_item_active")
				$("#kxyj_sub_c_0_1").addClass("content_item_active")
				$("#kxyj_sub_c_0_1").empty()
				$("#kxyj_sub_c_0_1").append($(str))



			}

		}
	})
}
//就业服务就业信息列表 sys/student/examination/list  
function zssw_zsxc_list() {

	$.ajax({
		// url: baseUrl + "sys/student/ganda/list",
		url: baseUrl + "sys/student/examination/list",
		type: "POST",
		data: {
			language: languageStatus,
			type: 127,
			exchibition: 2,
		},
		success: function (res) {
			// console.log("就业信息")
			// console.log(res)
			var data = res.page.list
			var str = ""
			if (data.length !== 0) {
				data.forEach(function (item, index) {
					var time = ""
					if (item.date != null) {
						time = item.date.split(" ")[0]
					}
					var title = ""
					if (item.title != "") {
						title = item.title

					}
					if (item.date != null) {
						var currDate = item.date.split(" ")[0]
					}
					str +=
						'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivejyfujyxx fiveStep"  data-step="fivejyfujyxx" data-index="' +
						index + '" onclick="zssw_zsxc_info(' + item.id +
						')"><span>' + title + '</span><i>' + currDate + '</i></li>'
				})
			}
			$("#kxyj_sub_c_0 .sub_title ul").html($(str))
			fiveMenuClickEvent()
		}
	})
}
//就业服务就业政策宣传详情
function zssw_zszn_info(id) {
	$.ajax({
		url: baseUrl + "sys/student/recruitstuinfo",
		data: {
			id: id
		},
		type: "POST",
		success: function (res) {
			// // console.log("宣传指南详情")
			// // console.log(res)
			if (res.code == 0) {
				if (languageStatus == 1) {
					var bread = "当前位置:招生就业&bull;就业服务"
					var title = "就业服务"

				} else if (languageStatus == 0) {
					var bread = "Current location: Candidate affairs"
					var title = "Candidate affairs"
				}
				var time = ""

				var data = res.data
				if (data.createTime != null) {
					time = data.createTime.split(" ")[0]
				}
				var content = data.content.replace(/&amp;nbsp;/g, "&#10;")

				var str = '<div class="bn clearfix"><h2 class="fl">' + title + '</h2><span class="fr">' + bread +
					'</span></div>'
				str += '<div class="right_view"><div class="sub_content"><h3>' + data.title + '</h3><div class="sub_date">'
				str += '<span>' + Time + ':</span><i>' + time + '</i></div><p>' + content + '</p></div></div></div>'
				$("#kxyj_sub_c").removeClass("content_item_active")
				$("#kxyj_sub_c_0_1").addClass("content_item_active")
				$("#kxyj_sub_c_0_1").empty()
				$("#kxyj_sub_c_0_1").append($(str))



			}

		}
	})
}
//就业服务就业政策宣传列表 sys/student/examination/list
function zssw_zszn_list() {
	$.ajax({
		// url: baseUrl + "sys/student/recruitstu/list",
		url: baseUrl + "sys/student/examination/list",
		type: "POST",
		data: {
			language: languageStatus,
			exchibition: 2,
			type: 126,
		},
		success: function (res) {
			// console.log("就业政策")
			// console.log(res)
			var data = res.page.list
			var str = ""
			if (data.length !== 0) {
				data.forEach(function (item, index) {
					var time = ""
					if (item.date != null) {
						time = item.date.split(" ")[0]
					}
					var title = ""
					if (item.title != "") {
						title = item.title

					}
					if (item.date != null) {
						var currDate = item.date.split(" ")[0]
					}

					str +=
						'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivejyfujyzc fiveStep"  data-step="fivejyfujyzc" data-index="' +
						index + '" onclick="zssw_zszn_info(' + item.id +
						')"><span>' + title + '</span><i>' + currDate + '</i></li>'
				})
			}
			$("#kxyj_sub_c #kxyj_sub_c_0 .sub_title ul").html($(str))
			fiveMenuClickEvent()
		}
	})
}
//*****************/校友***********************
//校友毕业生信息列表
function jyfw_jyzn_list() {

	$.ajax({
		url: baseUrl + "sys/student/guide/list",
		type: "POST",
		data: {
			language: languageStatus,
		},
		success: function (res) {
			// // console.log("毕业生信息")
			// // console.log(res)
			if (res.code == 0) {
				var data = res.page.list
				var str = ""
				if (data.length !== 0) {
					data.forEach(function (item, index) {
						var time = ""
						if (item.createTime != null) {
							time = item.createTime.split(" ")[0]
						}
						var title = ""
						if (item.title != "") {
							title = item.title

						}
						if (item.date != null) {
							var currDate = item.date.split(" ")[0]
						}
						str +=
							'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivexiaoyoubysxx fiveStep"  data-step="fivexiaoyoubysxx" data-index="' +
							index + '" onclick="jyfw_jyzn_info(' + item.id +
							')"><span>' + title + '</span><i>' + currDate + '</i></li>'
					})
				} else {
					if (sessionStorage.getItem("CNtoEn") == 0) {
						var temp = "No data"
					} else {
						var temp = "暂无数据"
					}
					str += '<li  class=" sub_info_mange  clearfix"  ><span>' + temp + '</span><i></i></li>'
				}
			}
			$("#kxyj_sub_d_0 .sub_title ul").html($(str))
			fiveMenuClickEvent()
		}
	})
}
//校友毕业生信息详情
function jyfw_jyzn_info(id) {
	$.ajax({
		url: baseUrl + "sys/student/recruitstuinfo",
		data: {
			id: id
		},
		type: "POST",
		success: function (res) {
			// // console.log("校友毕业生信息详情")
			// // console.log(res)
			if (res.code == 0) {
				if (languageStatus == 1) {
					var bread = "当前位置:招生就业&bull;校友通讯"
					var title = "校友通讯"

				} else if (languageStatus == 0) {
					var bread = "Current location: Employment Services"
					var title = "Employment Services"
				}
				var time = ""

				var data = res.data
				if (data.createTime != null) {
					time = data.createTime.split(" ")[0]
				}
				var content = data.content.replace(/&amp;nbsp;/g, "&#10;")

				var str = '<div class="bn clearfix"><h2 class="fl">' + title + '</h2><span class="fr">' + bread +
					'</span></div>'
				str += '<div class="right_view"><div class="sub_content"><h3>' + data.title + '</h3><div class="sub_date">'
				str += '<span>' + Time + ':</span><i>' + time + '</i></div><p>' + content + '</p></div></div></div>'
				$("#kxyj_sub_d").removeClass("content_item_active")
				$("#kxyj_sub_d_0_1").addClass("content_item_active")
				$("#kxyj_sub_d_0_1").empty()
				$("#kxyj_sub_d_0_1").append($(str))



			}

		}
	})
}
//校友毕业去向列表
function jyfw_zpxx_list() {

	$.ajax({
		url: baseUrl + "sys/student/recruit/list",
		type: "POST",
		data: {
			language: languageStatus,
		},
		success: function (res) {
			// // console.log("毕业去向")
			// // console.log(res)
			if (res.code == 0) {
				var data = res.page.list
				var str = ""

				if (data.length !== 0) {
					data.forEach(function (item, index) {
						var time = ""
						if (item.createTime != null) {
							time = item.createTime.split(" ")[0]
						}
						var title = ""
						if (item.title != "") {
							title = item.title

						}
						if (item.date != null) {
							var currDate = item.date.split(" ")[0]
						}
						str +=
							'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivexiaoyoubyqx fiveStep"  data-step="fivexiaoyoubyqx" data-index="' +
							index + '" onclick="jyfw_zpxx_info(' + item.id +
							')"><span>' + title + '</span><i>' + currDate + '</i></li>'
					})
				} else {

					if (sessionStorage.getItem("CNtoEn") == 0) {
						var temp = "No data"
					} else {
						var temp = "暂无数据"
					}
					str += '<li  class=" sub_info_mange  clearfix"  ><span>' + temp + '</span><i></i></li>'
				}
			}
			$("#kxyj_sub_d_0 .sub_title ul").html($(str))
			fiveMenuClickEvent()
		}
	})
}
//校友毕业去向详情
function jyfw_zpxx_info(id) {
	$.ajax({
		url: baseUrl + "sys/student/recruitinfo",
		data: {
			id: id
		},
		type: "POST",
		success: function (res) {
			// // console.log("校友毕业去向详情")
			// // console.log(res)
			if (res.code == 0) {
				if (languageStatus == 1) {
					var bread = "当前位置:招生就业&bull;校友"
					var title = "校友"

				} else if (languageStatus == 0) {
					var bread = "Current location: Employment Services"
					var title = "Employment Services"
				}
				var time = ""

				var data = res.data
				if (data.createTime != null) {
					time = data.createTime.split(" ")[0]
				}
				var content = data.content.replace(/&amp;nbsp;/g, "&#10;")

				var str = '<div class="bn clearfix"><h2 class="fl">' + title + '</h2><span class="fr">' + bread +
					'</span></div>'
				str += '<div class="right_view"><div class="sub_content"><h3>' + data.title + '</h3><div class="sub_date">'
				str += '<span>' + Time + ':</span><i>' + time + '</i> </div><p>' + content + '</p></div></div></div>'
				$("#kxyj_sub_d").removeClass("content_item_active")
				$("#kxyj_sub_d_0_1").addClass("content_item_active")
				$("#kxyj_sub_d_0_1").empty()
				$("#kxyj_sub_d_0_1").append($(str))



			}

		}
	})
}
//校友就业政策息列表
function jyfw_jyzc_list() {

	$.ajax({
		url: baseUrl + "sys/student/obtain/list",
		type: "POST",
		data: {
			language: languageStatus,
		},
		success: function (res) {
			// // console.log("就业政策")
			// // console.log(res)
			if (res.code == 0) {

				var data = res.page.list
				var str = ""
				if (data.length !== 0) {
					data.forEach(function (item, index) {
						var time = ""
						if (item.createTime != null) {
							time = item.createTime.split(" ")[0]
						}
						var title = ""
						if (item.title != "") {
							title = item.title

						}
						if (item.date != null) {
							var currDate = item.date.split(" ")[0]
						}
						str +=
							'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivexiaoyouxytx fiveStep"  data-step="fivexiaoyouxytx" data-index="' +
							index + '" onclick="jyfw_jyzc_info(' + item.id +
							')"><span>' + title + '</span><i>' + currDate + '</i></li>'
					})
				} else {
					if (sessionStorage.getItem("CNtoEn") == 0) {
						var temp = "No data"
					} else {
						var temp = "暂无数据"
					}
					str += '<li  class=" sub_info_mange  clearfix"  ><span>' + temp + '</span><i></i></li>'
				}
			}
			$("#kxyj_sub_d_0 .sub_title ul").html($(str))
			fiveMenuClickEvent()
		}
	})
}
//校友就业政策息详情
function jyfw_jyzc_info(id) {
	$.ajax({
		url: baseUrl + "sys/student/obtaininfo",
		data: {
			id: id,
		},
		type: "POST",
		success: function (res) {
			// // console.log("校友就业政策详情")
			// // console.log(res)
			if (res.code == 0) {
				if (languageStatus == 1) {
					var bread = "当前位置:招生就业&bull;校友"
					var title = "校友"
					var Time = "时间"

				} else if (languageStatus == 0) {
					var bread = "Current location: Employment Services"
					var title = "Employment Services"
					var Time = "Time"
				}
				var cuTime = ""

				var data = res.data
				if (data.createTime != null) {
					cuTime = data.createTime.split(" ")[0]
				}

				var content = data.content.replace(/&amp;nbsp;/g, "&#10;")

				var str = '<div class="bn clearfix"><h2 class="fl">' + title + '</h2><span class="fr">' + bread +
					'</span></div>'
				str += '<div class="right_view"><div class="sub_content"><h3>' + data.title + '</h3><div class="sub_date">'
				str += '<span>' + Time + ':</span><i>' + cuTime + '</i> </div><p>' + content + '</p></div></div></div>'
				$("#kxyj_sub_d").removeClass("content_item_active")
				$("#kxyj_sub_d_0_1").addClass("content_item_active")
				$("#kxyj_sub_d_0_1").empty()
				$("#kxyj_sub_d_0_1").append($(str))



			}

		}
	})
}
//************************人才培养************************** */
// 教学日历 sys/content/info 
// 课程信息 sys/kecheng/list
// 教师队伍
function rcpy_jsdw_list() {
	$.ajax({
		url: baseUrl + "sys/tutor/teaList",
		data: {
			language: languageStatus,
		},
		type: "POST",
		success: function (res) {
			// // console.log("教师队伍")
			// // console.log(res)
			if (res.code == 0) {
				var data = res.page
				var str = ""
				var desDom = $("#rcpy_jsdw")

				data.forEach(function (item, index) {
					var personnel = ""
					var _item = item
					// // console.log(item.personnel.length)
					if (item.personnel.length != 0) {
						item.personnel.forEach(function (item, index) {
							if (_item.personnel.length !== index + 1) {
								personnel += '' + item.roleName + ','

							} else {
								personnel += '' + item.roleName + ''
							}
						})
					}


				})
				desDom.append($(str))
			}


		}



	})
}
//教学日历
function rcpy_jxrl_info() {
	$.ajax({
		url: baseUrl + "sys/content/info",
		data: {
			language: languageStatus,
			id: 108
		},
		type: "POST",
		success: function (res) {

			// // console.log("教学日历")
			// // console.log(res)
			if (res.code === 0) {
				var data = res.content
				if (data != null) {

					$("#jxrl_pic").append(res.content.content)
				} else {
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var temp = "暂无数据"
					} else {
						var temp = "No data"
					}
					$("#jxrl_pic").append('<p>' + temp + '</p>')
				}
			}



		}



	})

}
//************************学位学科************************** */
//学位学科学位授予息列表
function xwxk_xwsy_list() {
	$.ajax({
		url: baseUrl + "sys/degree/grant/list",
		type: "POST",
		data: {
			language: languageStatus,
		},
		success: function (res) {
			// // console.log("学位授予")
			// // console.log(res)
			if (res.code === 0) {

				var data = res.page.list
				var str = ""
				if (data.length !== 0) {
					data.forEach(function (item, index) {
						var time = ""
						var title = ""
						if (item.title != "") {
							title = item.title

						}
						if (item.createTime != null) {
							time = item.createTime.split(" ")[0]
						}
						if (item.date != null) {
							var currDate = item.date.split(" ")[0]
						}


						str +=
							'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivexwxkxwsy fiveStep"  data-step="fivexwxkxwsy" data-index="' +
							index + '" onclick="xwxk_xwsy_info(' + item.id +
							')"><span>' + title + '</span><i>' + currDate + '</i></li>'
					})
					$("#rcpy_sub_b .right_view .sub_content ul").html($(str))
					fiveMenuClickEvent()
				} else {
					if (languageStatus === 1) {
						var temp = "暂无数据"
					} else {
						var temp = "No data"
					}


					var str = '<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix"><span>' + temp + '</span></li>'
					$("#rcpy_sub_b .right_view .sub_content ul").html($(str))
				}


			}



		}
	})
}
//学位学科学位授予息详情
function xwxk_xwsy_info(id) {
	$.ajax({
		url: baseUrl + "sys/degree/grantinfo",
		data: {
			id: id
		},
		type: "POST",
		success: function (res) {
			if (res.code == 0) {
				if (res.data != null) {
					var data = res.data
					if (languageStatus == 1) {
						var bread = "当前位置:学位学科"
						var title = "学位学科"
						var end = "暂无数据"
						var Time = "时间"
						var PageView = "浏览量"
						var currTime = ""
					} else if (languageStatus == 0) {
						var bread = "Current location: Degree science"
						var title = "Degree science"
						var end = "No data"
						var Time = "time"
						var PageView = "PageView"
					}
					var content = ""
					if (data.content != null) {
						content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					}
					if (data.createTime != null) {
						currTime = data.createTime.split(" ")[0]
					}

					var str = '<div class="bn clearfix"><h2 class="fl">' + title + '</h2><span class="fr">' + bread +
						'</span></div>'
					str += '<div class="right_view"><div class="sub_content"><h3>' + data.title + '</h3><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + currTime + '</i> </div><p>' + content + '</p></div></div></div>'
				} else {
					if (languageStatus == 1) {
						var bread = "当前位置:学位学科"
						var title = "学位学科"
						var end = "暂无数据"
						var Time = "时间"
						var PageView = "浏览量"
					} else if (languageStatus == 0) {
						var bread = "Current location: Degree science"
						var title = "Degree science"
						var end = "No data"
						var Time = "time"
						var PageView = "PageView"
					}

					var str = '<div class="bn clearfix"><h2 class="fl">' + title + '</h2><span class="fr">' + bread +
						'</span></div>'
					str += '<div class="right_view"><div class="sub_content"><h3>' + end + '</h3><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + time + '</i> </div><p>' + end + '</p></div></div></div>'
				}
			}

			$("#rcpy_sub_b").removeClass("content_item_active")
			$("#rcpy_sub_d_1").empty()
			$("#rcpy_sub_d_1").append($(str))
			$("#rcpy_sub_d_1").addClass("content_item_active")

		}
	})
}
//学位学科学科建设列表
function xwxk_xkjs_list() {

	$.ajax({
		url: baseUrl + "sys/degree/build/list",
		type: "POST",
		data: {
			language: languageStatus,
		},
		success: function (res) {

			if (res.code === 0) {

				var data = res.page.list
				// // console.log("学科建设")
				// // console.log(data)
				var str = ""
				if (data.length !== 0) {
					data.forEach(function (item, index) {
						var time = ""
						var title = ""
						if (item.title != "") {
							title = item.title

						}
						if (item.createTime != null) {
							time = item.createTime.split(" ")[0]
						}
						if (item.date != null) {
							var currDate = item.date.split(" ")[0]
						}

						str +=
							'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivexwxkxsjs fiveStep"  data-step="fivexwxkxsjs" data-index="' +
							index + '" onclick="xwxk_xwsy_info(' + item.id +
							')"><span>' + title + '</span><i>' + currDate + '</i></li>'
					})
					$("#rcpy_sub_b .right_view .sub_content ul").html($(str))
					fiveMenuClickEvent()
				} else {
					if (languageStatus === 1) {
						var temp = "暂无数据"
					} else {
						var temp = "No data"
					}


					str += '<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix"  ><span>' + temp + '</span><i></i></li>'
					$("#rcpy_sub_b .right_view .sub_content ul").html($(str))
				}


			}


		}
	})
}
//学位学科学科评估列表
function xwxk_xkpg_list() {

	$.ajax({
		url: baseUrl + "sys/degree/assessment/list",
		type: "POST",
		data: {
			language: languageStatus,
		},
		success: function (res) {

			if (res.code === 0) {

				var data = res.page.list
				// // console.log("学科评估")
				// // console.log(data)
				var str = ""
				if (data.length !== 0) {
					data.forEach(function (item, index) {
						var time = ""
						var title = ""
						if (item.title != "") {
							title = item.title

						}
						if (item.createTime != null) {
							time = item.createTime.split(" ")[0]
						}
						if (item.date != null) {
							var currDate = item.date.split(" ")[0]
						}

						str +=
							'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivexwxkxwpg fiveStep"  data-step="fivexwxkxwpg" data-index="' +
							index + '" onclick="xwxk_xwsy_info(' + item.id +
							')"><span>' + title + '</span><i>' + currDate + '</i></li>'
					})
					$("#rcpy_sub_b .right_view .sub_content ul").html($(str))
					fiveMenuClickEvent()
				} else {
					if (languageStatus === 1) {
						var temp = "暂无数据"
					} else {
						var temp = "No data"
					}


					var str = '<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix"><span>' + temp + '</span></li>'
					$("#rcpy_sub_b .right_view .sub_content ul").html($(str))
				}


			}


		}
	})
}
//学位学科学位论文列表
function xwxk_xklw_list() {

	$.ajax({
		url: baseUrl + "sys/degree/paper/list",
		type: "POST",
		data: {
			language: languageStatus,
		},
		success: function (res) {
			if (res.code === 0) {

				var data = res.page.list
				// // console.log("学位论文")
				// // console.log(data)
				var str = ""
				if (data.length !== 0) {
					data.forEach(function (item, index) {
						var time = ""
						var title = ""
						if (item.title != "") {
							title = item.title

						}
						if (item.createTime != null) {
							time = item.createTime.split(" ")[0]
						}
						if (item.date != null) {
							var currDate = item.date.split(" ")[0]
						}

						str +=
							'<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivexwxkxwlw fiveStep"  data-step="fivexwxkxwlw" data-index="' +
							index + '" onclick="xwxk_xwsy_info(' + item.id +
							')"><span>' + title + '</span><i>' + currDate + '</i></li>'
					})
					$("#rcpy_sub_b .right_view .sub_content ul").html($(str))
					fiveMenuClickEvent()
				} else {
					if (languageStatus === 1) {
						var temp = "暂无数据"
					} else {
						var temp = "No data"
					}

					var str = '<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix"><span>' + temp + '</span></li>'
					$("#rcpy_sub_b .right_view .sub_content ul").html($(str))
				}


			}

		}
	})
}
//学位学科 导师队伍
xwxk_dsdw_list()
function xwxk_dsdw_list() {
	$.ajax({
		url: baseUrl + "sys/tutormanage/list",
		type: "POST",
		data: {
			language: sessionStorage.getItem("CNtoEn"),
			page: 1,
			limit: 500,
		},
		success: function (res) {
			// // console.log("导师队伍")
			// // console.log(res)
			if (res.code == 0) {
				var data = res.page.list
				optionsDSDW.data = res.page.list

				pageDSDW.init(data.length, 1, optionsDSDW);

			}
		}
	})
}
//导师队伍个人信息详情
function getDstd_info(id) {
	$.ajax({
		url: baseUrl + 'sys/tutormanage/getman',
		data: {
			id: id
		},
		type: "POST",
		success: function (res) {
			// // console.log("人员")
			// // console.log(res)
			var str = ""
			//详情头部渲染
			if (res.code == 0) {
				var data = res.list[0]
				var sex = ""
				if (data.sex !== null) {
					sex = data.sex == 1 ? '男' : '女'
				}
				var tutorname = ""
				var work = ""
				var email = ""
				var address = ""
				var website = ""
				if (data.tutorname) {
					tutorname = data.tutorname
				}
				if (data.work) {
					work = data.work
				}
				if (data.email) {
					email = data.email
				}
				if (data.address) {
					address = data.address
				}
				if (data.website) {
					website = data.website
				}
				//头部渲染

				str += '<div class="detailPage_Pi clearfix"><div class="detailPage_pi_img fl"><img src="' + data.url +
					'" alt=""></div>'
				str += '<div class="detaiPage_pi_info clearfix"><div class="fl" style="width:40%;"><h5>' + tutorname +
					'</h5><span>性别:</span><span id="detaiPage_pi_info_sex">' + sex + '</span><br />'
				str += '<span>职称:</span><span id="detaiPage_pi_info_title">' + work + '</span><br />'
				str += '<span>邮箱:</span><span id="detaiPage_pi_info_mail">' + email + '</span><br />'
				str += '<span class="detail_pi_info_bottomspan"'
				str += 'id="detaiPage_pi_info_address">通信地址:' + address +
					'</span><br /><p ><a href="http://' + website +
					'">课题组网址</a></p></div></div></div>'
			}
			if (data.research) {
				//研究领域
				str += handleDsdwInfo(data.research, "研究领域")
			}
			if (data.educational) {
				//教育背景
				str += handleDsdwInfo(data.work, "教育背景")
			}
			if (data.work) {
				//工作经历
				str += handleDsdwInfo(data.educatipatentsonal, "工作经历")
			}
			if (data.patents) {
				//专利与奖励
				str += handleDsdwInfo(data.educational, "专利与奖励")
			}
			if (data.publication) {
				//出版信息
				str += handleDsdwInfo(data.publication, "出版信息")
			}
			$("#rcpy_sub_e").removeClass("content_item_active")
			$("#rcpy_sub_e_1 .right_view .sub_content").html(str)
			$("#rcpy_sub_e_1").addClass("content_item_active")
		},
		err: function (err) {
			// // console.log("错误信息")
			// // console.log(err)
		}
	})
}
//教研团队
jytdList()
function jytdList() {
	$.ajax({
		url: baseUrl + "sys/research/getPersonnel",
		type: "POST",
		data: {
			deptId: 48,
			type: 0,
		},
		success: function (res) {
			// // console.log("教研团队")
			// // console.log(res)
		}
	})
}
//处理导师队伍个人信息函数
function handleDsdwInfo(data, title) {
	var str = ""
	if (!title) {
		title = ""
	}
	if (data !== null) {
		str += '<div class="detailPage_Pi_content clearfix">'
		//个人简介
		// str += '<div class="fl" style="width:100%;height:100%;font-size:16px;text-align:left;border-bottom: 1px solid #ccc;padding-bottom: 24px;"><h2 style="margin-bottom:24px;font-size:18px;color:#165B9F;">' + profile + '</h2><p style="color:#666;font-size:14px">' + empty + '</p></div>'
		var research = data.split('|')
		str += '<div  class="detailPage_Pi_content_item"><h2>' + title + '</h2>'
		research.forEach(function (item, index) {
			if (item != "") {
				str += '<p>' + item + '</p>'
			}
		})
		str += '</div>'
		return str

	}
}
var jyjxLanguage = {
	"titleCn": ["招生就业", "特色培养"],
	"titleEn": ["Enrollment", "Training"],
	"jsTeamThCn": ["教师类别", "教师姓名"],
	"jsTeamThEn": ["Teacher category", "Teacher name"],
	"jyjxSubTitleCn": ["硕士招生", "博士招生", "就业服务", "校友通讯"],
	"jyjxSubTitleEn": ["Master's", "Doctor", "Employment", "Alumni"],
	"zsTitleCn": ["信息公开", "简章目录", "招生宣传", "表格下载", "信息公开", "简章目录", "招生宣传", "表格下载"],
	"zsTitleEn": ["Information", "Guide dir", "Employment", "Download", "Information", "Guide dir", "Employment",
		"Download"
	],
	"zsswTitleCn": ["就业政策", "就业信息", "就业指导", "手续办理", "学位授予", "学科建设", "学位论文", "学科评估"],
	"zsswTitleEn": ["Guide", "Employment", "CareerGuidance", "Procedure", "Award", "Construction", "Thesis", "Exam test"],
	"jyfwTitleCn": ["校友活动", "校友风采", "校友服务"],
	"jyfwTitleEn": ["Alumni activities", "Alumni style", "Alumni service"],
	"zsjyBreadCn": ['当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>&bull;硕士招生',
		'当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>&bull;博士招生',
		'当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>&bull;就业服务',
		'当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>&bull;校友通讯'
	],
	"zsjyBreadEn": [
		'Current location: <a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull;Master Admissions',
		'Current location: <a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull;Doctoral Admissions',
		'Current location: <a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull;Admissions',
		'Current location: <a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull;Employment Services'
	],
	"rcpyTitleCn": ["学位学科", "课程体系", "教研团队", "导师队伍", "课程信息"],
	"rcpyTitleEn": ["Degree", "Curriculum", "Research", "Tutor", "Course"],
	"rcpyBreadCn": [
		'当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>&bull;学位学科',
		'当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>&bull;课程体系',
		'当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>&bull;教研团队',
		'当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>&bull;导师队伍',
		'当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>&bull;课程信息'
	],
	"rcpyBreadEn": [
		'Current location: <a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull;Degree subject',
		'Current location: <a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull;Curriculum',
		'Current location: <a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull;Research',
		'Current location: <a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull;Tutor',
		'Current location: <a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull;course information'
	],
	"xwxkTitleCn": ["学位授予", "学科建设", "导师队伍", "学科评估", "学位论文", "表格下载", "管理规定"],
	"xwxkTitleEn": ["Degree award", "Construction", "Tutor team", "Evaluation", "Thesis", "Form download", "Management"],
	"xwxkBreadCn": ['当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>•学位授权',
		'当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>•学科建设',
		'当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>•导师队伍',
		'当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>•学科评估',
		'当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>•学位论文',
		'当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>•表格下载',
		'当前位置：<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">研究生教育</a>•管理规定',
	],
	"xwxkBreadEn": [
		'Current location: <a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull;Degree Authorization',
		'Current location: <a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull;Subject construction',
		'Current location: <a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull;Mentor team',
		'Current location: <a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull;Subject assessment',
		'Current location:<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull; Dissertation',
		'Current location:<a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull; Form download',
		'Current location: <a href="../subPage/menu.html?prevName=教育教学&prevEname=Education&menuId=71">Education</a>&bull;Management regulations',
	],
	"xwxkSubTitleCn": ["党政办", "科技处", "学生处", "教育处", "党政办", "科技处", "学生处", "教育处"],
	"xwxkSubTitleEn": ["Party Admin", "Technology Dept", "Student Office", "Education Dept", "Management",
		"Technology Dept", "Student Office", "Education Dept"
	],
	"dsdwThCn": ["研究生培养单位", "学科名称(一级学科)", "博士生导师", "硕士生导师"],
	"dsdwThEn": ["Graduate training unit", "Subject name (a subject)", "PhD Tutor", "Master Instructor"],
	"zzjg_pydwCn": "培养单位",
	"zzjg_pydwEn": "Training Unit",
	"zzjgSubTitleCn": ["党政领导", "机构设置", "研院本部", "研院本部", "九院各所", "九院各所", "九院各所", "委员会"],
	"zzjgSubTitleEn": ["leadership", "Institutional", "Headquarters", "Headquarters", "Nine hospitals", "Nine hospitals",
		"Nine hospitals", "Committee"
	],
	"pydw_subTitleCn": ["研究生教育简介", "招生信息", "导师介绍", "毕业就业", "研究生教育简介", "招生信息", "导师介绍", "毕业就业"],
	"pydw_subTitleEn": ["Education", "Admissions", "Training", "Graduation", "Education", "Admissions", "Training",
		"Graduation"
	],
	"zzjg_leftBarCn": ["研院本部", "九院各所",],
	"zzjg_leftBarEn": ["Headquarters", "Nine hospitals",],
}
var pydw_subTitle = $("li[name = 'pydw_subTitle' ]")
var jgsz_title = $("span[name = 'jgsz_title']")
var jgsz_subTitle = $("th[name = jgsz_subTitle]")
let zzjg_pydw = $("p[name = 'zzjg_leftBar']")
let zzjgSubTitle = $("span[name = 'zzjgSubTitle']")
let zzjg_leftBar = $("li[name = 'zzjg_leftBar']")
//中英文切换 
if (sessionStorage.getItem("CNtoEn") == 1) {
	//中文
	$("li[ name = jyjxTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["titleCn"][index])
	})
	$("span[ name = jyjxTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["titleCn"][index])
	})
	//招生子标题
	$("li[ name = jyjxSubTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["jyjxSubTitleCn"][index])
	})
	$("h2[ name = jyjxSubTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["jyjxSubTitleCn"][index])
	})

	//特色培养
	languageChange("li[ name = rcpyTitle]", "rcpyTitleCn", jyjxLanguage)
	languageChange("h2[ name = rcpyTitle]", "rcpyTitleCn", jyjxLanguage)
	//学位学科子标题
	$("li[ name = xwxkSubTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["xwxkSubTitleCn"][index])
	})
	$("li[ name = zzjg_subsubsub]").each(function (index, item) {
		$(this).text(jyjxLanguage["zzjg_leftBarCn"][index])
	})
	//硕士招生子标题
	$("li[ name = zsTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["zsTitleCn"][index])
	})
	//就业服务子标题
	$("li[ name = zsswTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["zsswTitleCn"][index])
	})
	//校友子标题
	$("li[ name = jyfwTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["jyfwTitleCn"][index])
	})

	//学位学科导师队伍
	$("th[ name = dsdwTh]").each(function (index, item) {
		$(this).text(jyjxLanguage["dsdwThCn"][index])
	})
	//面包屑
	//招生
	$("span[ name = zsjyBread]").each(function (index, item) {
		$(this).html(jyjxLanguage["zsjyBreadCn"][index])
	})
	//人才培养
	$("span[ name = rcpyBread]").each(function (index, item) {
		$(this).html(jyjxLanguage["rcpyBreadCn"][index])
	})
	//学位学科
	$("span[ name = xwxkBread]").each(function (index, item) {
		$(this).html(jyjxLanguage["xwxkBreadCn"][index])
	})
	//教师团队 thead
	$("th[ name = jsTeamTh]").each(function (index, item) {
		$(this).text(jyjxLanguage["jsTeamThCn"][index])
	})
	$("h2[ name = rcpyIntroduction]").each(function (index, item) {
		$(this).text(jyjxLanguage["titleCn"][index])
	})
	$("dl[name = 'yybb_bread']").html("当前位置：培养单位 &bull;<i class='yybbTrigger'>研院本部</i>")
	$("dl[name = 'qtdw_bread']").html("当前位置：培养单位 ")
	//培养单位
	zzjg_pydw.text(jyjxLanguage["zzjg_pydwCn"])
	//子标题
	pydw_subTitle.each(function (index, item) {
		$(item).text(jyjxLanguage["pydw_subTitleCn"][index])
	})
	//子标题
	zzjgSubTitle.each(function (index, item) {
		$(item).text(jyjxLanguage["zzjgSubTitleCn"][index])
	})
	//左标题
	zzjg_leftBar.each(function (index, item) {
		$(item).text(jyjxLanguage["zzjg_leftBarCn"][index])
	})
	$("span[ name = zzjgSubYybb]").html("研院本部")
	$("span[ name = zzjgSubQtdw]").html("培养单位")
	$("span[ name = zzjgSubQtdw1]").html("培养单位")
	$("span[ name = zzjgSubQtdw2]").html("培养单位")
	$("h2[name = rcpyIntroduction]")
} else if (sessionStorage.getItem("CNtoEn") == 0) {
	//英文
	$("li[ name = jyjxTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["titleEn"][index])
		$(item).css({
			"padding-right": "10px"
		})
	})
	$("span[ name = jyjxTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["titleEn"][index])
	})
	$("li[ name = zzjg_subsubsub]").each(function (index, item) {
		$(this).text(jyjxLanguage["zzjg_leftBarEn"][index])
	})
	//招生子标题
	$("li[ name = jyjxSubTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["jyjxSubTitleEn"][index])
	})
	$("h2[ name = jyjxSubTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["jyjxSubTitleEn"][index])
	})
	$("h2[ name = rcpyIntroduction]").each(function (index, item) {
		$(this).text(jyjxLanguage["titleEn"][index])
	})
	//特色培养
	languageChange("li[ name = rcpyTitle]", "rcpyTitleEn", jyjxLanguage)
	languageChange("h2[ name = rcpyTitle]", "rcpyTitleEn", jyjxLanguage)
	//学位学科子标题
	$("li[ name = xwxkSubTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["xwxkSubTitleEn"][index])
	})
	//硕士招生子标题
	$("li[ name = zsTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["zsTitleEn"][index])
	})
	//就业服务子标题
	$("li[ name = zsswTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["zsswTitleEn"][index])
	})
	//校友子标题
	$("li[ name = jyfwTitle]").each(function (index, item) {
		$(this).text(jyjxLanguage["jyfwTitleEn"][index])
	})
	//学位学科导师队伍
	$("th[ name = dsdwTh]").each(function (index, item) {
		$(this).text(jyjxLanguage["dsdwThEn"][index])
	})
	//面包屑
	//招生
	$("span[ name = zsjyBread]").each(function (index, item) {
		$(this).html(jyjxLanguage["zsjyBreadEn"][index])
	})
	//人才培养
	$("span[ name = rcpyBread]").each(function (index, item) {
		$(this).html(jyjxLanguage["rcpyBreadEn"][index])
	})
	//学位学科
	$("span[ name = xwxkBread]").each(function (index, item) {
		$(this).html(jyjxLanguage["xwxkBreadEn"][index])
	})
	//教师团队 thead
	$("th[ name = jsTeamTh]").each(function (index, item) {
		$(this).text(jyjxLanguage["jsTeamThEn"][index])
	})
	$("dl[name = 'yybb_bread']").html("Current location:  <i class='yybbTrigger'>institute headquarters</i>")
	$("dl[name = 'qtdw_bread']").html("Current location:  培养单位")
	//培养单位
	zzjg_pydw.text(jyjxLanguage["zzjg_pydwEn"])
	//子标题
	pydw_subTitle.each(function (index, item) {
		$(item).text(jyjxLanguage["pydw_subTitleEn"][index])
	})
	//子标题
	zzjgSubTitle.each(function (index, item) {
		$(item).text(jyjxLanguage["zzjgSubTitleEn"][index])
	})
	//左标题
	zzjg_leftBar.each(function (index, item) {
		$(item).text(jyjxLanguage["zzjg_leftBarEn"][index])
	})
	$("span[ name = zzjgSubYybb]").html("Headquarters")
	$("span[ name = zzjgSubQtdw]").html("Training Unit")
	$("span[ name = zzjgSubQtdw1]").html("Training Unit")
	$("span[ name = zzjgSubQtdw2]").html("Training Unit")
	//面包屑trigger事件
	//研院本部
	$('.yybbTrigger').on("click", function (event) {
		$("#zzjg_sub_c_ul>li").eq(0).trigger("click")
	})
	//培养单位
	$('.pydwTrigger').on("click", function (event) {
		$("#zzjg_sub_c_ul>li").eq(1).trigger("click")
	})
}
//简章目录分页结构
//模拟数据
//分页插件配置选项 ---逻辑是在每个需要分页的地方 分别请求不同的数据给在初始化时给其赋值.
//硕士招生选项
var optionsSSZS = {
	"id": "page_sszs", //显示页码的元素
	"data": null, //显示数据
	"maxshowpageitem": 4, //最多显示的页码个数
	"pagelistcount": 5, //每页显示数据个数
	"callBack": function (result) {
		if (sessionStorage.getItem("CNtoEn") == 1) {
			var zhuanye = "招生专业（专业代码）"
			var fangxiang = "研究方向（方向代码）"
			var kaoshikemu = "考试科目"
			var danwei = "培养单位（单位代码）"
			var zhidao = "指导教师"
			var zhaosheng = "招生人数"
			var beizhu = "备注"
		} else {
			var zhuanye = "Professional code"
			var fangxiang = "Direction code"
			var kaoshikemu = "Test subjects"
			var danwei = "Unit Code"
			var zhidao = "mentor"
			var zhaosheng = "Enrollment"
			var beizhu = "Remarks"
		}


		var cHtml = '<thead><tr><th>' + zhuanye + '</th><th>' + fangxiang + '</th><th>' + kaoshikemu + '</th><th>' + danwei +
			'</th><th>' + zhidao + '</th><th>' + zhaosheng + '</th><th>' + beizhu + '</th></tr><tbody>'
		for (var i = 0; i < result.length; i++) {
			var ssstudy = ""
			if (result[i].standby == null) {
				ssstudy = "无备注"
			} else {
				ssstudy = result[i].standby
			}
			cHtml += "<tr>"

			cHtml += '<td>' + result[i].majorCode + '</td><td>' + result[i].directionCode + '</td><td>' + result[i].subject +
				'</td><td>' + result[i].deptCode + '</td><td>' + result[i].teacher + '</td><td>' + result[i].stuNum + '</td><td>' +
				ssstudy + '</td>'
			cHtml += "</tr>"
		}

		cHtml += '</tbody></thead>'
		$("#demoContent").html(cHtml); //将数据增加到页面中
	}

};
//博士招生选项
// 分页插件配置选项 ---逻辑是在每个需要分页的地方 分别请求不同的数据给在初始化时给其赋值.
var optionsBSZS = {
	"id": "page_bszs", //显示页码的元素
	"data": null, //显示数据
	"maxshowpageitem": 4, //最多显示的页码个数
	"pagelistcount": 5, //每页显示数据个数
	"callBack": function (result) {

		if (sessionStorage.getItem("CNtoEn") == 1) {
			var zhuanye = "招生专业（专业代码）"
			var fangxiang = "研究方向（方向代码）"
			var kaoshikemu = "考试科目"
			var danwei = "培养单位（单位代码）"
			var zhidao = "指导教师"
			var zhaosheng = "招生人数"
			var beizhu = "备注"
		} else {
			var zhuanye = "Professional code"
			var fangxiang = "Direction code"
			var kaoshikemu = "Test subjects"
			var danwei = "Unit Code"
			var zhidao = "mentor"
			var zhaosheng = "Enrollment"
			var beizhu = "Remarks"
		}

		var cHtml = '<thead><tr><th>' + zhuanye + '</th><th>' + fangxiang + '</th><th>' + kaoshikemu + '</th><th>' + danwei +
			'</th><th>' + zhidao + '</th><th>' + zhaosheng + '</th><th>' + beizhu + '</th></tr><tbody>'
		for (var i = 0; i < result.length; i++) {
			var ssstudy = ""
			if (result[i].standby == null) {
				ssstudy = "无备注"
			} else {
				ssstudy = result[i].standby
			}
			cHtml += "<tr>"

			cHtml += '<td>' + result[i].majorCode + '</td><td>' + result[i].directionCode + '</td><td>' + result[i].subject +
				'</td><td>' + result[i].deptCode + '</td><td>' + result[i].teacher + '</td><td>' + result[i].stuNum + '</td><td>' +
				ssstudy + '</td>'
			cHtml += "</tr>"
		}

		cHtml += '</tbody></thead>'
		$("#demoContent_bszs").html(cHtml); //将数据增加到页面中
	}

};
//课程信息配置文件
var optionsKCXX = {
	"id": "page_rcpy_kcxx", //显示页码的元素
	"data": null, //显示数据
	"maxshowpageitem": 4, //最多显示的页码个数
	"pagelistcount": 5, //每页显示数据个数
	"callBack": function (result) {
		if (sessionStorage.getItem("CNtoEn") == 1) {
			var No = "课程编号"
			var Title = "课程名称"
			var attribute = "课程属性"
			var hour = "学时"
			var Credit = "学分"
			var Teacher = "教师"
			var location = "开课地点"
		} else {
			var No = "Course No"
			var Title = "Course Title"
			var attribute = "Course attribute"
			var hour = "Class hour"
			var Credit = "Credit"
			var Teacher = "Teacher"
			var location = "Course location"
		}

		var cHtml = '<thead><tr><th>' + No + '</th><th>' + Title + '</th><th>' + attribute + '</th><th>' + hour +
			'</th><th>' + Credit + '</th><th>' + Teacher + '</th><th>' + location + '</th></tr><tbody>'
		for (var i = 0; i < result.length; i++) {

			cHtml += "<tr>"

			cHtml += '<td>' + result[i].code + '</td><td>' + result[i].name + '</td><td>' + result[i].culumValue + '</td><td>' +
				result[i].classHour + '</td><td>' + result[i].credit + '</td><td>' + result[i].teacher + '</td><td>' + result[i].addr +
				'</td>'
			cHtml += "</tr>"
		}

		cHtml += '</tbody></thead>'
		$("#rcpy_kcxx").html(cHtml); //将数据增加到页面中
	}

}
//导师队伍配置文件
var optionsDSDW = {
	"id": "page_dsdw", //显示页码的元素
	"data": null, //显示数据
	"maxshowpageitem": 4, //最多显示的页码个数
	"pagelistcount": 5, //每页显示数据个数
	"callBack": function (result) {
		var str = ""
		str += '<thead><tr><th name="dsdwTh">研究生培养单位</th>'
		str += '<th name="dsdwTh">学科名称(一级学科)</th><th name="dsdwTh">博士生导师</th><th name="dsdwTh">硕士生导师</th>'
		str += '</tr></thead><tbody id="xwxk_dsdw_table">'
		//循环所有一级培养单位名称
		result.forEach(function (item, index) {
			if (item.tutortype == 1) {
				var Doctor = item.tutorname
				var tutor = ""
				str += '<tr><td>' + item.trainingunit + '</td><td>' + item.subjectname + '</td><td onclick="getDstd_info(' +
					item.id + ')" class="fivedsdw fiveStep"  data-step="fivedsdw" data-index="' + index + '" >' + Doctor +
					'</td><td>' + tutor + '</td></tr>'
			} else {
				var Doctor = ""
				var tutor = item.tutorname
				str += '<tr><td>' + item.trainingunit + '</td><td>' + item.subjectname + '</td><td>' + Doctor +
					'</td><td onclick="getDstd_info(' + item.id +
					')" class="fivedsdw fiveStep"  data-step="fivedsdw" data-index="' + index + '">' + tutor + '</td></tr>'
			}

		})
		str += "</tbody>"
		$('#demoContent_dsdw').html(str)
		fiveMenuClickEvent()
	}

}
$('li[name = jyjxTitle]').on("click", tabBarClick)
function tabBarClick(e) {
	var val = e.target.innerHTML
	if (val == "招生就业" || val == "Enrollment") {
		$('#kxyj_sub_e')
			.addClass("content_item_active")
			.siblings()
			.removeClass("content_item_active")
	} else {
		$('#rcpy_sub_g')
			.addClass("content_item_active")
			.siblings()
			.removeClass("content_item_active")
	}
}
// 简介
xsIntro(300)
xsIntro(301)
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
				if (type == 301) {
					var desDom = $('p[name  = tspy]')
				} else {
					var desDom = $('p[name  = zsjy]')
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
		// // console.log((index + 2) + "级标题dom事件")
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
		// console.log((index + 2)+"级标题dom事件")
		// console.log("第五层")
		var step = event.target.dataset.step
		var step = $(this).data().step
		var _index = $(this).data().index
		breadcrumb(step, _index)
	})
}
//六级菜单设置点击事件
function sixMenuClickEvent() {
	$('.sixStep').on('click', function (event) {
		//获取data-step 并获取当前dom的索引
		// console.log((index + 2)+"级标题dom事件")
		var step = event.target.dataset.step
		var step = $(this).data().step
		var _index = $(this).data().index
		breadcrumb(step, _index)
		// breadcrumb("page", window.currPage)
		// if(location.href.indexOf("page") < 0) {
		// 	console.log("不存在Page执行了")
		// 	breadcrumb("page", window.currPage)
		// } else {
		// 	if(window.currPage != 1) {
		// 		console.log("存在Page执行了")
		// 		breadcrumb("page", window.currPage)
		// 	}
		// }
	})
}
/*
*  @parma  url 网站地址
*  @parma currStep 层级
*  @parma currIndex 索引
*/
function breadcrumb(currStep, currIndex) {
	// console.log("currIndex")
	// console.log(currIndex)
	// console.log("currStep")
	// console.log(currStep)
	//判断url是否存在层级记录  大于-1 有 小于-1 没有
	// console.log(decodeURI(window.location.href))
	if (window.location.href.indexOf("#") > -1) {
		//1.获取当前层级 获取当前点击对象的data-step 层级关系
		//2.判断当前层级 更新当前层级索引
		//3.如果有后续层级删除
		//获取当前的url
		// console.log("currStep")
		// console.log(currStep)
		// console.log("currIndex")
		// console.log(currIndex)
		var currUrlIndex = window.location.href.indexOf("#")
		var currUrl = window.location.href.slice(currUrlIndex + 1)
		//判断是否包含当前的层级
		if (currUrl.indexOf(currStep) > -1) {
			//包含当前层级
			// console.log("包含step的url")
			// console.log(currUrl)
			//将当前的url层级分割成数组便于处理
			var currUrlArr = currUrl.split("|")
			// console.log("currUrlArr")
			// console.log(currUrlArr)
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
					// console.log("tempArr")
					// console.log(tempArr)
					// console.log("currDomIndex")
					// console.log(currDomIndex)
					//分割数组进行用层级data-step判断当前点击的层级，修改其索引
					if (tempArr[0] == currStep) {
						//如果匹配当前层级后续层级不在填写到url中 我们已｜分割方便后续使用数组分割
						currDomIndex = false
						currStr += tempArr[0] + "=" + currIndex + "|"
						// console.log("str")
						// console.log(currStr)
						return
					} else {
						//如果处于当前层级的前面我们保留
						if (currDomIndex) {
							//console.log("不匹配当前元素执行了")
							currStr += item + "|"
						}
					}
				}
			})
			// console.log("updataStr")
			// console.log(currStr)
			//使用新的字符串替代#号后面的所有字符串
			var updataUrlIndex = window.location.href.indexOf("#") + 1
			window.location.href = window.location.href.slice(0, updataUrlIndex) + currStr

		} else {
			//不包含当前层级 我们在后面追加当前的操作
			// console.log("不包含step的url")
			// console.log(currUrl)
			window.location.href += currStep + '=' + currIndex + '|'
		}
	} else {
		//0.增加#锚点标记
		//1.获取当前层级添加
		//如果当前页面中还没有#锚点，我们需要增加锚点标示符。
		//*** 给location.search 修改时会自动刷新页面*/
		if (!window.proformance) {
			window.location.href += '#' + currStep + '=' + currIndex + '|'
			// // // console.log("else 执行")
		}

	}
}
//我们需要首次加载的时候获取url如果在dom加载完成后，会和增加的dom事件冲突将后续的事件序列清空
var urlPath = window.location.href
// console.log("urlPath")
// console.log(urlPath)
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
			// console.log("operatPath")
			// console.log(operatPath)
			var operatPathArr = operatPath.split("|")
			if (operatPathArr.length > 0) {
				operatPathArr.forEach(function (item, index) {
					if (item != "") {
						var tempArr = item.split("=")
						// console.log("反显")
						// console.log('.' + tempArr[0] + tempArr[1])
						if (tempArr[0] == "two") {
							console.log($('.' + tempArr[0] + 'Step'))
							$('.' + tempArr[0] + 'Step').eq(tempArr[1]).trigger("click")
						} else {
							// console.log('三级层级以上' + tempArr[0])
							// console.log($('.' + tempArr[0]))
							// console.log($('.' + tempArr[0]).eq(tempArr[1]))
							// console.log(($('.' + tempArr[0]).length))
							// console.log(new Date().getSeconds())
							if ($('.' + tempArr[0]).length == 0) {
								setTimeout(function () {
									$('.' + tempArr[0]).eq(tempArr[1]).trigger("click")
								}, 2000)
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
//导师介绍分页按钮
function prevPage(Pid) {
	console.log("上一夜按钮触发")
	if (window.currPage == 1) {
		return false
	} else {
		window.currPage--
		zzjg_qtdw_pygz(Pid)
		breadcrumb("page", window.currPage)
	}
}
function nextPage(Pid) {
	console.log("下一夜按钮触发")
	if (window.currPage >= window.totalPage) {
		return false
	} else {
		window.currPage++
		zzjg_qtdw_pygz(Pid)
		breadcrumb("page", window.currPage)
	}
}
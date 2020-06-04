$(function () {
	//设置培养单位_点击哨兵
	var pydwIsClick = false
	//评奖评优通知list
	//逻辑：给每一个子标题设置点击事件触发list函数并渲染其下列表项，渲染子页面时将此列表项的id赋值给它
	//在点击列表项的时候触发info函数渲染其详情
	//默认点击事件
	var loginUserid = sessionStorage.getItem("loginUserId")
	$("#sssw_pjpytz_first_click").trigger("click")
	$("#sssw_pjpytz_perent_click").click(function () {
		$("#sssw_pjpytz_first_click").trigger("click")
	})
	/**tab栏切换效果 */
	//顶部tab栏函数
	kygk_tab()
	//科研团队
	kytd_tab()
	//tab切换补充
	// kytd_tabSupplement ()
	/*****************************学习学术 ************************/
	//组织架构
	jyxx_jyzp_list()
	//学生活动
	jyxx_xwgg_list()
	//设置默认展示
	li_trigger()

	function li_trigger() {
		$('.content .title>ul>li').eq(0).trigger("click")
		var str = window.location.href
		var index = str.indexOf("=")
		var subStr = str.substr(index + 1)
		var subINdex = subStr.indexOf("#")
		var id = subStr.substr(0, subINdex)
		$('.menu_lsyg_wrap .title>ul>li').eq(id).trigger("click")

	}
	//右侧显示区域点击事件
	xwxk_tab()
	//顶部tab栏函数
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
		$(titles).on('click', "li", function (event) {
			/** tab点击效果*/
			var index = $(this).index()
			$(this)
				.addClass('tab_active')
				.siblings()
				.removeClass("tab_active")
			//添加子菜单默认点击事件
			//点击显示内容 
			if (event.currentTarget.innerText == "社团文化" || event.currentTarget.innerText == "Social culture") {
				$('#xueshenghuiFirstClick').trigger('click')
			}

			$(items)
				.eq(index)
				.addClass("content_item_active")
				.siblings()
				.removeClass('content_item_active')
		})
	}
	//左侧导航栏点击事件tab栏执行
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
			$(this)
				.addClass("left_menu_hover")
				.siblings()
				.removeClass("left_menu_hover")
			$('#' + id)
				.addClass("content_item_active")
				.siblings()
				.removeClass("content_item_active")
		})
		$('.item .left_menu>ul').on("click", 'li', function () {

			var id = $(this).data("id")
			// console.log($('#' + id))
			$(this)
				.addClass("left_menu_hover")
				.siblings()
				.removeClass("left_menu_hover")
			$('#' + id)
				.addClass("content_item_active")
				.siblings()
				.removeClass("content_item_active")
		})
	}
	//左侧导航点击事件补充
	function kytd_tabSupplement() {
		var zzjg_tabs = $('.menu_lsyg .content .item .left_menu>ul')
		// console.log("左侧dom")
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
			$('#' + id)
				.addClass("content_item_active")
				.siblings()
				.removeClass("content_item_active")
		})
	}
	//右侧显示区域点击事件
	function xwxk_tab() {
		var conta = $("#xsPage_section .right_view .sub_content")
		var contimg = $("#xsPage_section .right_view .sub_content_img_style")
		var sub_content = $("#xssw_sub_a  .sub_title")
		var sub_content_jyxx_sub_b = $("#jyxx_sub_b  .sub_title")
		var sub_content_jyxx_sub_c = $("#jyxx_sub_c  .sub_title")
		$(conta).on("click", "li", function () {
			var id = $(this).data("id")
			// console.log(id)
			// console.log("点击事件触发了")
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
	/************************学生社团list **************/
	// 学生活动
	function jyxx_xwgg_list() {
		if (loginUserid) {
			$.ajax({
				// url: baseUrl + "sys/obtaininfo/obtaininfo/newslist", 临时换个有数据的
				url: baseUrl + "sys/content/schlife/list",
				type: "POST",
				data: {
					language: sessionStorage.getItem("CNtoEn"),
					type: 171,
					id: loginUserid
				},
				success: function (res) {
					// 分页
					console.log("学生活动")
					console.log(res)
					if (res.code === 0) {
						layui.use(['laypage', 'layer'], function () {
							var laypage = layui.laypage,
								layer = layui.layer;
							var data = res.page.list == null ? [] : res.page.list
							//调用分页
							laypage.render({
								elem: 'xshdListBox',
								count: data.length,
								limit: 3,
								jump: function (obj) {
									//模拟渲染
									document.getElementById('xshdList').innerHTML = function () {
										var arr = [],
											thisData = data.concat().splice(obj.curr * obj.limit - obj.limit, obj.limit);
										layui.each(thisData, function (index, item) {
											var str = ""
											var content = ""
											if (item.standby != null) {
												content = item.standby.replace(/&amp;nbsp;/g, "&#10;").slice(0, 100)
											}
											if (item.date != null) {
												var currDate = item.date.split(" ")[0]
											}
											str += '<div class="kyjz_sub_item clearfix" data-id="' + index +
												'"><div class="kyjz_sub_picture lsyg_fl"><img src="' + (item.remark == null ? "" : item.remark) +
												'" alt=""></div>'
											str += '<div class="kyjz_sub_context  lsyg_rl fivexshd fiveStep"  data-step="fivexshd" data-index="' + index + '"  onclick="jyxx_xwgg_info(' + item.id + ')"><h5>' + item.title +
												'</h5><p>' + content + '</p><i>' + currDate + '</i></div></div>'


											arr.push('<li>' + str + '</li>');

										});
										return arr.join('');

									}();
								}
							});
							fiveMenuClickEvent()
						})
					}


				}
			})
		} else {
			$.ajax({
				// url: baseUrl + "sys/obtaininfo/obtaininfo/newslist", 临时换个有数据的
				url: baseUrl + "sys/content/schlife/list",
				type: "POST",
				data: {
					language: sessionStorage.getItem("CNtoEn"),
					type: 171,
				},
				success: function (res) {
					// console.log("学生活动")
					// console.log(res)

					if (res.code === 0) {
						layui.use(['laypage', 'layer'], function () {
							var laypage = layui.laypage,
								layer = layui.layer;
							var data = res.page.list == null ? [] : res.page.list
							//调用分页
							laypage.render({
								elem: 'xshdListBox',
								count: data.length,
								limit: 3,
								jump: function (obj) {
									//模拟渲染
									document.getElementById('xshdList').innerHTML = function () {
										var arr = [],
											thisData = data.concat().splice(obj.curr * obj.limit - obj.limit, obj.limit);
										layui.each(thisData, function (index, item) {
											var str = ""
											var content = ""
											if (item.standby != null) {
												content = item.standby.replace(/&amp;nbsp;/g, "&#10;").slice(0, 100)
											}
											if (item.date != null) {
												var currDate = item.date.split(" ")[0]
											}
											str += '<div class="kyjz_sub_item clearfix" data-id="' + index +
												'"><div class="kyjz_sub_picture lsyg_fl"><img src="' + (item.remark == null ? "" : item.remark) +
												'" alt=""></div>'
											str += '<div class="kyjz_sub_context  lsyg_rl fivexshd fiveStep"  data-step="fivexshd" data-index="' + index + '"  onclick="jyxx_xwgg_info(' + item.id + ')"><h5>' + item.title +
												'</h5><p>' + content + '</p><i>' + currDate + '</i></div></div>'


											arr.push('<li>' + str + '</li>');

										});
										return arr.join('');

									}();
								}
							});
							fiveMenuClickEvent()
						})
					}
				}
			})
		}

	}
})
//jquery入口函数之外
/*********************学习学术info *****************/
//活动通知详情 
var userid = sessionStorage.getItem("loginUserId")

function xshd_hdtz_info(id) {
	$.ajax({
		url: baseUrl + "sys/stu/actinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// console.log("通知互动详情")
			// console.log(res)
			if (res.code == 0) {

				let data = res.content

				if (data != null) {
					let desDom = $("#hdtz_sub_a_1 .right_view .sub_content")
					let str = ""
					let createTime = ""
					let content = ""
					if (data.createTime != null) {
						createTime = data.createTime.split(" ")[0]
					}
					if (data.content != null) {
						content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					}
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Time = "时间"
						var Pageviews = "浏览量"
					} else {
						var Time = "Time"
						var Pageviews = "Pageviews"
					}

					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + createTime + '</i> <span>' + Pageviews + ':</span><i>' + id + '</i>'
					str += '</div><p>' + content + '</p></div>'
					$(desDom).empty()
					desDom.append(str)
				}

			}
		}
	})
}
//讲座信息详情 
function xshd_jzxx_info(id) {
	$.ajax({
		url: baseUrl + "sys/stu/lectureinfo",
		type: "POST",
		data: {
			id: id
		},
		success: function (res) {
			// console.log("讲座info")
			// console.log(res)
			if (res.code == 0) {
				let data = res.content
				let desDom = $("#hdtz_sub_b_1 .right_view .sub_content")
				let str = ""
				if (data != null) {
					let createTime = ""
					let content = ""
					if (data.createTime != null) {
						createTime = data.createTime.split(" ")[0]
					}
					if (data.content != null) {
						content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					}
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Time = "时间"
						var Pageviews = "浏览量"
					} else {
						var Time = "Time"
						var Pageviews = "Pageviews"
					}

					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + createTime + '</i> <span>' + Pageviews + ':</span><i>' + id +
						'</i></div>'
					str += '<p>' + content + '</p></div>'
				}

				$(desDom).empty()
				desDom.append(str)
			}




		}
	})
}
//风采详情
function xxxs_fc_info(id, crumb) {
	$.ajax({
		url: baseUrl + "sys/passage/getinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// console.log("风采info")
			// console.log(res)
			if (res.code == 0) {
				let crumbDom = $("#xsfc_sub_d_1 .crumb")
				let desDom = $("#xsfc_sub_d_1 .right_view .sub_content")
				let titleCrumbDom = $("#xsfc_sub_d_1 .titleCrumb")
				var str = ""
				let data = res.content
				if (sessionStorage.getItem("CNtoEn") == 1) {
					if (crumb == 1) {
						crumb = "导师风采"
					} else if (crumb == 2) {
						crumb = "学生风采"
					} else {
						crumb = "校园风采"
					}
				} else {
					if (crumb == 1) {
						crumb = "Tutor style"
					} else if (crumb == 2) {
						crumb = "Student style"
					} else {
						crumb = "Campus style"
					}
				}

				if (data != null) {

					let createTime = ""
					let content = ""
					if (data.createTime != null) {
						createTime = data.createTime.split(" ")[0]
					}
					if (data.content != null) {
						content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					}
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Time = "时间"
						var Pageviews = "浏览量"
					} else {
						var Time = "Time"
						var Pageviews = "Pageviews"
					}

					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + createTime + '</i> <span>' + Pageviews + ':</span><i>' + id +
						'</i></div>'
					str += '<p>' + content + '</p></div>'

				}
				$(desDom).empty()
				desDom.append(str)
				$(crumbDom).eq(0).empty()
				$(crumbDom).eq(0).text(crumb)
				$(titleCrumbDom).eq(0).empty()
				$(titleCrumbDom).eq(0).text(crumb)

			}

		}
	})
}
/*********************学生事务*****************/
//评奖评优通知list
function xshd_pjpytz_list(type, crumb) {
	if (crumb == "心理健康工作") {
		if (sessionStorage.getItem("CNtoEn") == 1) {
			crumb = "1"
		} else {
			crumb = "1"
		}
	} else if (crumb == "评优评选") {
		if (sessionStorage.getItem("CNtoEn") == 1) {
			crumb = "2"
		} else {
			crumb = "2"
		}
	} else if (crumb == "心理健康文件") {
		if (sessionStorage.getItem("CNtoEn") == 1) {
			crumb = "3"
		} else {
			crumb = "3"
		}
	}
	$.ajax({
		url: baseUrl + "sys/schlife/reward/list",
		type: "POST",
		data: {
			type: type,
			language: sessionStorage.getItem("CNtoEn"),
		},
		success: function (res) {

			// console.log("评奖评优通知")
			// console.log(res)
			if (sessionStorage.getItem("CNtoEn") == 1) {
				var Data = "暂无数据"
			} else {
				var Data = "No data"
			}
			if (res.code == 0) {
				var data = res.page.list
				if (data.length != 0) {
					var str = ""
					var time = ""

					data.forEach(function (item, index) {
						if (item.title != "") {
							title = item.title

						}
						if (item.createTime != "") {
							time = item.createTime.split(" ")[0]
						}
						if (item.date != null) {
							var currDate = item.date.split(" ")[0]
						}
						str +=
							'<li  data-id="pjpytz_sub_a_0_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix"  onclick="xshd_pjpytz_info(' +
							item.id + ',' + crumb + ')"><span>' + title + '</span><i>' + currDate + '</i></li>'

					})


				} else {
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Data = "暂无数据"
					} else {
						var Data = "No data"
					}
					var time = new Date().toLocaleDateString()

					str += '<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix"  ><span>' + Data + '</span><i></i></li>'

				}

			}


			$("#pjpytz_sub_a_0").addClass("content_item_active")
			$("#pjpytz_sub_a_0 .sub_title ul").empty()
			$("#pjpytz_sub_a_0 .sub_title ul").append($(str))

		}

	})
}
//评奖评优通知info
function xshd_pjpytz_info(id, crumb) {

	$.ajax({
		url: baseUrl + "sys/schlife/rewardinfo",
		data: {
			id: id,
		},
		type: "POST",
		success: function (res) {
			// console.log("心理健康")
			// console.log(res)
			if (crumb == "1") {
				if (sessionStorage.getItem("CNtoEn") == 1) {
					crumb = "心理健康工作"
				} else {
					crumb = "Scholarship"
				}
			} else if (crumb == "2") {

				if (sessionStorage.getItem("CNtoEn") == 1) {
					crumb = "评优评选"
				} else {
					crumb = "MindStation"
				}


			} else if (crumb == "3") {

				if (sessionStorage.getItem("CNtoEn") == 1) {
					crumb = "心理健康文件"
				} else {
					crumb = "Mental Health"
				}


			}
			if (sessionStorage.getItem("CNtoEn") == 1) {
				var Bread = "当前位置:学生▪学生事务"
				var Time = "时间"
				var Pageviews = "浏览量"
			} else {
				var Bread = "Current location: Students feel student affairs"
				var Time = "Time"
				var Pageviews = "Pageviews"
			}

			if (res.code == 0) {
				var data = res.data
				if (data != null) {
					if (data.createTime != null) {
						var CreateTime = data.createTime.split(" ")[0]
					}
					var content = data.content.replace(/&amp;nbsp;/g, "&#10;")

					str = '<div class="bn clearfix"><h2 class="fl">' + crumb + '</h2><span class="fr">' + Bread + '' + crumb +
						'</span>'
					str += '</div><div class="right_view"><div class="sub_content"><div class="sub_detail_content"><h3>' + data.title +
						'</h3>'
					str += '<div class="sub_date"><span>' + Time + ':</span><i>' + CreateTime + '</i> <span>' + Pageviews +
						':</span><i>11</i></div>'
					str += '<p>' + content + '</p></div></div></div>'
				}

				$("#pjpytz_sub_a_0").removeClass("content_item_active")
				$("#pjpytz_sub_a_0_1").empty()
				$("#pjpytz_sub_a_0_1").append($(str))
				$("#pjpytz_sub_a_0_1").addClass("content_item_active")

			}

		}
	})
}

//团委活动通知info
function xssw_twhdtz_info(id) {
	$.ajax({
		url: baseUrl + "sys/stu/businessactinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// console.log("团委活动通知info")
			// console.log(res)
			let desDom = $("#twhd_sub_b_1 .right_view .sub_content")
			let str = ""
			if (res.code == 0) {
				if (res.content != null) {
					let Time = ""
					let PageView = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						Time = "时间"
						PageView = "浏览量"
					} else {
						Time = "time"
						PageView = "Pageview"
					}
					let data = res.content
					let createTime = data.createTime.split(" ")[0]
					let content = data.content.replace(/&amp;nbsp;/g, "&#10;")

					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + createTime + '</i> <span>' + PageView + ':</span><i>' + id + '</i>'
					str += '</div><p>' + content + '</p></div>'
				}

				$(desDom).html($(str))


			}




		}
	})
}
//保险理赔程序info
function xssw_bxlpcx_info(id) {
	$.ajax({
		url: baseUrl + "sys/stu/insuranceinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// console.log("保险理赔程序info")
			// console.log(res)
			let desDom = $("#bxlp_sub_c_1 .right_view .sub_content")
			let str = ""
			if (res.code == 0) {
				if (res.content != null) {
					let Time = ""
					let PageView = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						Time = "时间"
						PageView = "浏览量"
					} else {
						Time = "time"
						PageView = "Pageview"
					}
					let data = res.content
					let createTime = data.createTime.split(" ")[0]
					let content = data.content.replace(/&amp;nbsp;/g, "&#10;")


					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + createTime + '</i> <span>' + PageView + ':</span><i>' + id + '</i>'
					str += '</div><p>' + content + '</p></div>'
				}

				$(desDom).html($(str))


			}



		}
	})
}
//心理健康工作发放说明info
function xssw_jxjffsm_info(id) {
	// console.log(id)
	$.ajax({
		url: baseUrl + "sys/stu/scholarshipinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// console.log("心理健康工作发放说明info")
			// console.log(res)
			let desDom = $("#jxjff_sub_d_1 .right_view .sub_content")
			let str = ""
			if (res.code == 0) {
				if (res.content != null) {
					let Time = ""
					let PageView = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						Time = "时间"
						PageView = "浏览量"
					} else {
						Time = "time"
						PageView = "Pageview"
					}
					let data = res.content
					let createTime = data.createTime.split(" ")[0]
					let content = data.content.replace(/&amp;nbsp;/g, "&#10;")


					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + createTime + '</i> <span>' + PageView + ':</span><i>' + id + '</i>'
					str += '</div><p>' + content + '</p></div>'
				}
				$('#jxjff_sub_d_1').addClass("content_item_active").siblings().removeClass("content_item_active")
				$(desDom).append($(str))


			}


		}
	})
}
//助教报名info
function xssw_zjbmtz_info(id) {
	// console.log(id)
	$.ajax({
		url: baseUrl + "sys/stu/assistantinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// console.log("助教报名info")
			// console.log(res)
			let desDom = $("#zjbm_sub_e_1 .right_view .sub_content")
			let str = ""
			if (res.code == 0) {
				if (res.content != null) {
					let Time = ""
					let PageView = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						Time = "时间"
						PageView = "浏览量"
					} else {
						Time = "time"
						PageView = "Pageview"
					}
					let data = res.content
					let createTime = data.createTime.split(" ")[0]
					let content = data.content.replace(/&amp;nbsp;/g, "&#10;")

					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + createTime + '</i> <span>' + PageView + ':</span><i>' + id + '</i>'
					str += '</div><p>' + content + '</p></div>'
				}
				$('#zjbm_sub_e_1').addClass("content_item_active").siblings().removeClass("content_item_active")
				$(desDom).append(str)


			}
		}
	})
}
/************************业务办理info **************/

/************************就业信息 就业创业tab触发list **************/
//组织架构 sys/obtaininfo/obtaininfo/obtainlist
function jyxx_jyzp_list() {
	if (sessionStorage.getItem("CNtoEn") == 1) {
		var id = 1412
	} else {
		var id = 1413
	}
	$.ajax({
		url: baseUrl + "sys/studyactivity/stuContent",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// console.log("组织架构")
			// console.log(res)
			if (sessionStorage.getItem("CNtoEn") == 1) {
				var Data = "暂无数据"
			} else {
				var Data = "No data"
			}
			let desDom = $("#djyd_sub_a .right_view>.sub_content")
			if (res.code === 0) {
				let data = res.page[0]
				let crumb = ""
				if (sessionStorage.getItem("CNtoEn") == 1) {
					crumb = "组织架构"
				} else {
					crumb = "Employment recruitment"
				}
				let str = ""
				if (!data) {
					if (sessionStorage.getItem("CNtoEn") == 0) {
						var temp = "No data"
					} else {
						var temp = "暂无数据"
					}
					str += '<span>' + temp + '</span>'
					desDom.html(str)
				} else {
					var time = ""
					var title = ""
					if (data.content != "") {
						title = data.title

					}
					if (data.createTime != null) {
						time = data.createTime.split(" ")[0]
					}
					if (data.date != null) {
						var currDate = data.date.split(" ")[0]
					}
					str += '<p>' + data.content + '</p>'
					desDom.html(str)

				}
			}


		}
	})
}
//学生园地
function jyxx_cyxx_list() {
	$.ajax({
		url: baseUrl + "sys/obtaininfo/obtaininfo/initiationlist",
		type: "POST",
		data: {
			language: sessionStorage.getItem("CNtoEn"),
			type: 150,
		},
		success: function (res) {
			// console.log("学生园地")
			// console.log(res)
			if (sessionStorage.getItem("CNtoEn") == 1) {
				var Data = "暂无数据"
			} else {
				var Data = "No data"
			}

			let desDom = $("#djyd_sub_b .right_view .sub_content>ul")
			if (res.code === 0) {
				let data = res.page.list
				let crumb = ""
				if (sessionStorage.getItem("CNtoEn") == 1) {
					crumb = "学生园地"
				} else {
					crumb = "Business information"
				}
				let str = ""
				if (data.length == 0) {
					if (sessionStorage.getItem("CNtoEn") == 0) {
						var temp = "No data"
					} else {
						var temp = "暂无数据"
					}
					str += '<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix" >'
					str += '<span>' + temp + '</span><i></i></li>'

					desDom.html(str)
				} else {
					data.forEach(function (item, index) {
						var time = ""
						var title = ""
						if (item.content != "") {
							title = item.title

						}
						if (item.createTime != null) {
							time = item.createTime.split(" ")[0]
						}
						if (item.date != null) {
							var currDate = item.date.split(" ")[0]
						}
						str +=
							'<li data-id="jyxx_jycy_sub_a_0" class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivexxyd fiveStep" data-step="fivexxyd" data-index="' + index + '"  onclick="xuesheng_jyxx_info(' +
							item.id + ',2)">'
						str += '<span>' + title + '</span><i>' + time + '</i></li>'
					})
					desDom.html(str)
					fiveMenuClickEvent()
				}
			}



		}
	})
}
//特色活动
function jyxx_gwy_list() {
	$.ajax({
		url: baseUrl + "sys/obtaininfo/obtaininfo/internshiplist",
		type: "POST",
		data: {
			language: sessionStorage.getItem("CNtoEn"),
			type: 304,
		},
		success: function (res) {
			// console.log("特色活动")
			// console.log(res)

			if (sessionStorage.getItem("CNtoEn") == 1) {
				var Data = "暂无数据"
			} else {
				var Data = "No data"
			}

			let desDom = $("#djyd_sub_c .right_view .sub_content>ul")
			if (res.code === 0) {
				let data = res.page.list
				let crumb = ""
				if (sessionStorage.getItem("CNtoEn") == 1) {
					crumb = "特色活动"
				} else {
					crumb = "Civil servant"
				}
				let str = ""
				if (data.length == 0) {
					if (sessionStorage.getItem("CNtoEn") == 0) {
						var temp = "No data"
					} else {
						var temp = "暂无数据"
					}
					str += '<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix" >'
					str += '<span>' + temp + '</span><i></i></li>'

					desDom.html(str)
				} else {
					data.forEach(function (item, index) {
						var time = ""
						var title = ""
						if (item.content != "") {
							title = item.title

						}
						if (item.createTime != null) {
							time = item.createTime.split(" ")[0]
						}
						if (item.date != null) {
							var currDate = item.date.split(" ")[0]
						}
						str +=
							'<li data-id="jyxx_jycy_sub_a_0" class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivetehd fiveStep" data-step="fivetehd" data-index="' + index + '" onclick="xuesheng_jyxx_info(' +
							item.id + ',3)">'
						str += '<span>' + title + '</span><i>' + time + '</i></li>'
					})
					desDom.html(str)
					fiveMenuClickEvent()

				}
			}


		}
	})
}
/************************学生info**************/
//毕业通道
function xuesheng_bytd_info(id, crumb) {

	$.ajax({
		url: baseUrl + "sys/passage/getinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {

			// console.log("学生info")
			// console.log(res)
			// console.log(crumb)
			let desDom = $("#xwlw_sub_b_1 .right_view .sub_content")
			let crumbDom = $("#xwlw_sub_b_1 .crumb")
			let titleCrumbDom = $("#xwlw_sub_b_1 .titleCrumb")
			var str = ""
			if (res.code == 0) {

				if (res.content != null) {

					let data = res.content
					let createTime = data.createTime.split(" ")[0]
					let content = data.content.replace(/&amp;nbsp;/g, "&#10;")

					$(crumbDom).eq(0).empty()
					$(titleCrumbDom).eq(0).empty()
					if (data != null) {
						let Time = ""
						let PageView = ""
						if (sessionStorage.getItem("CNtoEn") == 1) {
							Time = "时间"
							PageView = "浏览量"
						} else {
							Time = "time"
							PageView = "Pageview"
						}
						if (sessionStorage.getItem("CNtoEn") == 1) {
							var Data = "暂无数据"
							Time = "时间"
							PageView = "浏览量"
							if (crumb == 1) {
								crumb = "活动通知"
							} else if (crumb == 2) {
								crumb = "学位论文"
							} else if (crumb == 3) {
								crumb = "毕业典礼"
							} else if (crumb == 4) {
								crumb = "毕业晚会"
							} else if (crumb == 5) {
								crumb = "离校寄语"
							} else if (crumb == 6) {
								crumb = "留影留念"
							}
						} else {
							var Data = "NO data"
							Time = "time"
							PageView = "Pageview"
							if (crumb == 1) {
								crumb = "Notification"
							} else if (crumb == 2) {
								crumb = "Dissertation"
							} else if (crumb == 3) {
								crumb = "Graduation ceremony"
							} else if (crumb == 4) {
								crumb = "Graduation Party"
							} else if (crumb == 5) {
								crumb = "Out-of-school message"
							} else if (crumb == 6) {
								crumb = "Picture Remembrance"
							}
						}

						str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date">'
						str += '<span>' + Time + ':</span><i>' + createTime + '</i> <span>' + PageView + ':</span><i>' + id +
							'</i></div>'
						str += '<p>' + content + '</p></div>'
					}
				} else {
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Data = "暂无数据"
						Time = "时间"
						PageView = "浏览量"
					} else {
						var Data = "NO data"
						Time = "time"
						PageView = "Pageview"
					}

					str += '<div class="sub_detail_content"><h3>' + Data + '</h3><div class="sub_date"><span>' + Time +
						':</span><i></i> <span>' + PageView + ':</span><i></i>'
					str += '</div><p>' + Data + '</p></div>'
				}


			}

			$(desDom).empty()
			desDom.append(str)
			$(crumbDom).eq(0).text(crumb)
			$(titleCrumbDom).eq(0).text(crumb)
		}
	})
}
//新生通道
function xuesheng_xstd_info(id, crumb) {
	$.ajax({
		url: baseUrl + "sys/passage/getinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// console.log("学生info")
			// console.log(res)


			let desDom = $("#bzr_sub_g_1")
			var str = ""
			if (res.code == 0) {

				if (res.content != null) {

					let data = res.content
					let createTime = data.createTime.split(" ")[0]
					let content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					let Bread = ""
					let Time = ""
					let PageView = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						Bread = "当前位置：学生&bull;新生通道&bull;"
						Time = "时间"
						PageView = "浏览量"
						if (crumb == 1) {
							crumb = "校纪校规"
						} else {
							crumb = "开学典礼"
						}
					} else {
						Bread = "Current location: Student &bull; Freshman Channel & Bull;"
						Time = "time"
						PageView = "Pageview"
						if (crumb == 1) {
							crumb = "School discipline"
						} else {
							crumb = "Opening ceremony"
						}
					}
					if (data != null) {


						str += '<div class="bn clearfix"><h2 class="fl">' + crumb + '</h2><span class="fr">' + Bread + '' + crumb +
							'</span>'
						str += '</div><div class="right_view"><div class="sub_content"><div class="sub_detail_content"><h3>' + data.title +
							'</h3>'
						str += '<div class="sub_date"><span>' + Time + ':</span><i>' + createTime + '</i> <span>' + PageView +
							':</span><i>' + id + '</i></div>'
						str += '<p>' + content + '</p></div></div></div>'
					}
				} else {
					let Bread = ""
					let Time = ""
					let PageView = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						Bread = "当前位置：学生&bull;新生通道&bull;"
						Time = "时间"
						PageView = "浏览量"
					} else {
						Bread = "Current location: Student &bull; Freshman Channel & Bull;"
						Time = "time"
						PageView = "Pageview"
					}
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Data = "暂无数据"
					} else {
						var Data = "NO data"
					}

					str += '<div class="bn clearfix"><h2 class="fl">' + crumb + '</h2><span class="fr">' + Bread + '' + crumb +
						'</span>'
					str += '</div><div class="right_view"><div class="sub_content"><div class="sub_detail_content"><h3></h3>'
					str += '<div class="sub_date"><span>' + Time + ':</span><i></i> <span>' + PageView + ':</span><i></i></div>'
					str += '<p></p></div></div></div>'
				}


			}

			$("#bzr_sub_g_1").siblings().removeClass("content_item_active")
			$("#bzr_sub_g_1").addClass("content_item_active")

			$(desDom).html($(str))


		}
	})
}
//学生社团
function xuesheng_xsst_info(id, crumb) {
	$.ajax({
		url: baseUrl + "sys/community/getinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// console.log("学生社团")
			// console.log(res)



			let crumbDom = $("#xstd_sub_a_1 .crumb")
			let desDom = $("#xstd_sub_a_1 .right_view .sub_content")
			let titleCrumbDom = $("#xstd_sub_a_1 .titleCrumb")
			let str = ""
			if (res.code == 0) {
				let data = res.content
				if (data != null) {
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Time = "时间"

						if (crumb == 1) {
							crumb = "社会活动"
						} else if (crumb == 2) {
							crumb = "通知公告"

						} else if (crumb == 3) {
							crumb = "社团成员"
						} else if (crumb == 4) {
							crumb = "精彩留念"
						}
					} else {
						var Time = "Time"

						if (crumb == 1) {
							crumb = "Social activities"
						} else if (crumb == 2) {
							crumb = "Notification Notice"
						} else if (crumb == 3) {
							crumb = "Members"
						} else if (crumb == 4) {
							crumb = "Wonderful Memories"
						}

					}
					let createTime = data.createTime.split(" ")[0]
					let content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + createTime + '</i> <span>' + PageView + ':</span><i>' + id +
						'</i></div>'
					str += '<p>' + content + '</p></div>'

				} else {
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Data = "暂无数据"
					} else {
						var Data = "NO data"
					}

					str += '<div class="sub_detail_content"><h3>' + Data + '</h3><div class="sub_date">'
					str += '<span></span><i></i> <span></span><i></i></div><p>' + Data + '</p></div>'

				}


			}

			$(desDom).empty()
			desDom.append(str)
			$(crumbDom).eq(0).empty()
			$(crumbDom).eq(0).text(crumb)
			$(titleCrumbDom).eq(0).empty()
			$(titleCrumbDom).eq(0).text(crumb)

		}
	})
}
//就业信息
function xuesheng_jyxx_info(id, crumb) {
	$.ajax({
		url: baseUrl + "sys/obtaininfo/getinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// console.log("就业信息info")
			// console.log(res)
			let crumbDom = $("#jyxx_jycy_sub_a_0 .crumb")
			let desDom = $("#djyd_xshd_sub_a_0 .right_view .sub_content")
			let titleCrumbDom = $("#jyxx_jycy_sub_a_0 .titleCrumb")
			let str = ""
			if (res.code == 0) {
				let data = res.content
				if (data != null) {

					let createTime = data.createTime.split(" ")[0]
					let content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Data = "暂无数据"
						Time = "时间"
						PageView = "浏览量"
						if (crumb == 1) {
							crumb = "就业招聘"
						} else if (crumb == 2) {
							crumb = "创业信息"
						} else if (crumb == 3) {
							crumb = "公务员"
						} else if (crumb == 4) {
							crumb = "国际招聘"
						} else if (crumb == 5) {
							crumb = "就业指南"
						} else if (crumb == 6) {
							crumb = "就业政策"
						} else if (crumb == 10) {
							crumb = "新闻公告"
						}
					} else {
						var Data = "NO data"
						Time = "time"
						PageView = "Pageview"
						if (crumb == 1) {
							crumb = "Employment recruitment"
						} else if (crumb == 2) {
							crumb = "Business information"
						} else if (crumb == 3) {
							crumb = "Civil servant"
						} else if (crumb == 4) {
							crumb = "International recruitment"
						} else if (crumb == 5) {
							crumb = "Employment guide"
						} else if (crumb == 6) {
							crumb = "Employment policy"
						} else if (crumb == 10) {
							crumb = "News Bulletin"
						}

					}

					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + createTime + '</i>'
					str += '</div><p>' + content + '</p></div>'
				} else {
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Data = "暂无数据"
					} else {
						var Data = "NO data"
					}

					str += '<div class="sub_detail_content"><h3>' + Data + '</h3><div class="sub_date">'
					str += '<span></span><i></i> <span></span><i></i></div><p>' + Data + '</p></div>'


				}



			}

			if (crumb == "创业信息") {
				var sourceDom = $('#djyd_sub_b')
			} else {
				var sourceDom = $('#djyd_sub_c')
			}
			// console.log("zifuchuan")
			// console.log(crumb)
			// console.log(sourceDom)
			sourceDom.removeClass("content_item_active")
			$('#djyd_xshd_sub_a_0').addClass('content_item_active')
			$(desDom).empty()
			desDom.append(str)
			$(crumbDom).eq(0).empty()
			$(crumbDom).eq(0).text(crumb)
			$(titleCrumbDom).eq(0).empty()
			$(titleCrumbDom).eq(0).text(crumb)

		}
	})
}
//业务办理info
function xs_ywbl_info(id) {

	$.ajax({
		url: baseUrl + "sys/alumnus/getinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// console.log("业务办理详情")
			// console.log(res)
			let str = ""
			let desDom = $("#ywbl_sub_c_1 .right_view .sub_content")

			if (res.code == 0) {
				let data = res.content
				if (data !== null) {
					let Time = ""
					let PageView = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						Time = "时间"
					} else {
						Time = "time"
					}
					var CreateTime = ""
					if (data.createTime != null) {
						CreateTime = data.createTime.split(" ")[0]
					}
					let content = data.content.replace(/&amp;nbsp;/g, "&#10;")

					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + CreateTime + '</i>'
					str += '</div><p>' + content + '</p></div>'
				} else {
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Data = "暂无数据"
					} else {
						var Data = "NO data"
					}

					str += '<div class="sub_detail_content"><h3>' + Data + '</h3><div class="sub_date">'
					str += '<span></span><i></i> <span></span><i></i></div><p>' + Data + '</p></div>'
				}



			}


			$(desDom).empty()
			desDom.append(str)

		}
	})
}
//下载中心
jzg_download_list()

function jzg_download_list() {
	$.ajax({
		url: baseUrl + "sys/studyactivity/downloadlist",
		type: "POST",
		data: {
			language: 1,
		},
		success: function (res) {
			// console.log("下载中心")
			// console.log(res)
			let desDom = $("#xiazzx_sub_a .right_view .sub_content>ul")
			if (res.code === 0) {

				var data = res.page.list
				var str = ""
				if (sessionStorage.getItem("CNtoEn") == 1) {
					crumb = "下载中心"
				} else {
					crumb = "Download Center"
				}
				if (data.length !== 0) {

					data.forEach(function (item, index) {
						var time = ""
						var title = ""
						let crumb = ""

						if (item.standby != "") {
							title = item.standby

						}
						if (item.createTime != null) {
							time = item.createTime.split(" ")[0]
						}
						if (item.date != null) {
							var currDate = item.date.split(" ")[0]
						}
						str +=
							'<li data-id="xiazzx_sub_a_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivexzzx fiveStep" data-step="fivexzzx" data-index="' + index + '" onclick="jzg_download_info(' +
							item.id + ',' + crumb + ')"><span>' + title + '</span><i>' + time + '</i></li>'
					})

					desDom.append(str)
					fiveMenuClickEvent()
				} else {

					let crumb = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						crumb = "下载中心"
						var temp = "暂无数据"
					} else {
						crumb = "Download Center"
						var temp = "No data"
					}

					str += '<li class="kxyj_sub_a_0_item  sub_info_mange " ><span>' + temp + '</span><i></i></li>'
					desDom.append(str)
				}


			}



		}
	})
}
// 规章制度
jzg_gzzd_list()

function jzg_gzzd_list() {
	$.ajax({
		url: baseUrl + "sys/studyactivity/ruleslist",
		type: "POST",
		data: {
			language: 1,
		},
		success: function (res) {
			// console.log("规章制度")
			// console.log(res)



			let desDom = $("#guizzd_sub_a .right_view .sub_content>ul")
			if (res.code === 0) {

				var data = res.page.list

				var str = ""
				if (data.length !== 0) {

					data.forEach(function (item, index) {

						var time = ""
						var title = ""
						let crumb = ""
						if (sessionStorage.getItem("CNtoEn") == 1) {
							crumb = "规章制度"
						} else {
							crumb = "Rules and regulations"
						}
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
							'<li data-id="guizzd_sub_a_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix fivegzzd fiveStep" data-step="fivegzzd" data-index="' + index + '"  onclick="jzg_gzzd_info(' +
							item.id + ',1)"><span>' + title + '</span><i>' + time + '</i></li>'

					})

					desDom.html(str)
					fiveMenuClickEvent()
				} else {

					let crumb = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						crumb = "规章制度"
						var temp = "暂无数据"
					} else {
						crumb = "Rules and regulations"
						var temp = "No data"
					}

					str += '<li class="kxyj_sub_a_0_item  sub_info_mange " ><span>' + temp + '</span><i></i></li>'
					desDom.html(str)
				}


			}


		}
	})
}
//规章制度info
function jzg_gzzd_info(id, crumb) {
	$.ajax({
		url: baseUrl + "sys/staff/getinfo",
		type: "POST",
		data: {
			id: id
		},
		success: function (res) {
			// console.log("规章制度info")
			// console.log(res)
			let desDom = $("#guizzd_sub_a_1 .right_view .sub_content")
			if (res.code == 0) {
				let data = res.content
				if (data != null) {
					let createTime = ""
					let content = ""
					var str = ""

					if (sessionStorage.getItem("CNtoEn") == 1) {
						var temp = "暂无数据"
						var Time = "时间"

						if (crumb == 1) {
							crumb = "规章制度"
						}
					} else {

						var temp = "No Data"
						var Time = "Time"
						if (crumb == 1) {
							crumb = "Rules and regulations"
						}
					}
					if (data.createTime != null) {
						createTime = data.createTime.split(" ")[0]
					}
					if (data.content != null) {
						content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					}
					if (data.createTime != null) {
						var currDate = data.createTime.split(" ")[0]
					}
					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date"><span>' + Time +
						':</span><i>' + currDate + '</i>'
					str += '</div><p>' + content + '</p></div>'

				}

			}


			$(desDom).empty()
			desDom.append(str)


		}
	})
}
//下载中心info
function jzg_download_info(id, crumb) {
	$.ajax({
		url: baseUrl + "sys/staff/getinfo",
		type: "POST",
		data: {
			id: id
		},
		success: function (res) {
			// console.log("学生info")
			// console.log(res)

			let desDom = $("#xiazzx_sub_a_1 .right_view .sub_content")
			if (res.code == 0) {
				let data = res.content
				if (data != null) {
					let createTime = ""
					let content = ""
					var str = ""
					if (data.createTime != null) {
						createTime = data.createTime.split(" ")[0]
					}
					if (data.content != null) {
						content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					}
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var temp = "暂无数据"
						var Time = "时间"
					} else {
						var temp = "No Data"
						var Time = "Time"
					}
					if (data.createTime != null) {
						var currDate = data.createTime.split(" ")[0]
					}
					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date"><span>' + Time +
						':</span><i>' + currDate + '</i>'
					str += '</div><p>' + content + '</p></div>'

				}

			}
			$(desDom).empty()
			desDom.append(str)


		}
	})
}
// 二级标题移动函数
var xueshengTabMoveNumber = 0
var xueshengTabSentinel = false

function xueshengTabMove(direction) {
	var des = $('.title>ul')
	var len = $('.title>ul>li').length
	// console.log(len)
	if (!xueshengTabSentinel) {
		if (direction == "left") {
			xueshengTabMoveNumber--
			// console.log("++触发了")
		} else {
			xueshengTabMoveNumber++
			// console.log("--触发了")
		}
		var Movedistance = xueshengTabMoveNumber * 109
		if (Movedistance < 0) {
			xueshengTabMoveNumber = 0
			return
		}
		if (xueshengTabMoveNumber == len) {
			xueshengTabMoveNumber--
			return
		}
		// console.log(xueshengTabMoveNumber)
		// console.log(Movedistance + "px")

		xueshengTabSentinel = true
		des.animate({
			right: Movedistance + "px"
		}, 500, function () {
			des.stop()
			xueshengTabSentinel = false
		})
	}

}
var xueshengLanguageObj = {
	titleCn: ["办事指南", "新生通道", "培养环节", "学籍学工", '党团班建设', '奖助评优', '心理健康', '学生活动', '社团文化', "毕业通道", "就业通道", "规章制度", "下载中心"],
	titleEn: ["Working Guide", "New Life Channel", "Cultivation Link", "Student Class", 'Party Team ', 'Award for Evaluation', 'Psychological Health',
		'Student activities', 'Social culture', "Graduation Channel", "Employment Channel", "Regulations", "Download center"
	],
	MenuCn: ["组织架构", "学习园地", "特色活动", "学生活动", "社团文化"],
	MenuEn: ["Organizational", "Learning Garden", "Special Events", "Student activities", "Social culture"],
	OneBreadCn: ["当前位置：学生&bull;办事指南", "当前位置：学生&bull;新生通道", "当前位置：学生&bull;培养环节", "当前位置：学生&bull;学籍学工", "当前位置：学生&bull;奖助评优", "当前位置：学生&bull;毕业通道", "当前位置：学生&bull;就业通道", "当前位置：学生•规章制度", "当前位置：学生•下载中心", "当前位置：学生•心理健康"],
	OneBreadEn: ["Current location: Student &bull; handling guideline",
		"Current location: Student &bull; freshman channel", "Current location: Student &bull; training session",
		"Current location: Student &bull; student status", "Current location: Student &bull; Award for Evaluation",
		"Current location: Student &bull; Graduation Channel", "Current location: Students &bull;Employment Channel",
		"Current location: Student &bull; Rules", "Current location: Student &bull; Download Center",
		"Current location: Student &bull; Mental Health"
	],
	xxxsSubTitleCn: ["活动通知", "讲座信息", ],
	xxxsSubTitleEn: ["Event notice", "Lecture information", ],
	xxxsSubBreadCn: ["当前位置：学生&bull;学习学术&bull;活动通知", "当前位置：学生&bull;学习学术&bull;讲座信息", "当前位置：学生&bull;学习学术&bull;"],
	xxxsSubBreadEn: ["Current location: Students &bull; Learning Academic &bull; Event Notice",
		"Current location: Students &bull; Learning Academic &bull; Lecture Information",
		"Current location: Student &bull; Learning Academic &bull;"
	],
	xsswSubTabCn: ["心理健康工作", "评优评选", "心理健康文件"],
	xsswSubTabEn: ["healthWork", "MindStation", "Mental Health"],
	xsswSubTitleInfoCn: ["团委活动通知", "保险理赔程序", "心理健康工作发放说明", "助教报名通知"],
	xsswSubTitleInfoEn: ["Committee Activities", "Insurance Claims Procedure", "Scholarship Distribution",
		"Instructor Assistant Registration"
	],
	xsswSubBreadInfoCn: ["当前位置：学生事务•团委活动通知", "当前位置：学生事务•保险理赔程序", "当前位置：学生事务•心理健康工作方法说明", "当前位置：学生事务•助教报名通知"],
	xsswSubBreadInfoEn: ["Current location: Student Affairs • Youth League Committee Notice",
		"Current location: Student Affairs • Insurance Claims Procedure",
		"Current location: Student Affairs • Scholarship Method Description",
		"Current location: Student Affairs • Teaching Assistant Registration Notice"
	],
	ywblSubTitleCn: ["学生"],
	ywblSubTitleEn: ["Student"],
	ywblSubBreadCn: ["当前位置:学生•详情页面"],
	ywblSubBreadEn: ["Current location: Student • Detail Page"],
	bytdSubBreadCn: ["当前位置：学生&bull;毕业通道&bull;"],
	bytdSubBreadEn: ["Current location: Student &bull; Graduation passage&bull;"],
	yyxxSubBreadCn: ["当前位置：学生&bull;就业信息&bull;"],
	yyxxSubBreadEn: ["Current location: Student &bull; Employment Information &bull;"],
	jjxxSubTitleCn: ["学生会", "学生社团", ],
	jjxxSubTitleEn: ["Student union", "Student club", ],
	sshdSubBreadCn: ["当前位置：学生&bull;学生社团&bull;"],
	sshdSubBreadEn: ["Current location: Student &bull; Student Association &bull;"],
	jgzGzzdTitleCn: ["规章制度", "下载中心"],
	jgzGzzdTitleEn: ["Rules", "Download Center"],
	jzgOneBreadCn: ["当前位置：规章制度", "当前位置：下载中心"],
	jzgOneBreadEn: ["Current location: rules and regulations", "Current location: Download Center"],
	xyshBreadCn: ["当前位置：党团班建设&bull;组织架构", "当前位置：党团班建设•学习园地", "当前位置：党团班建设•特色活动"],
	xyshBreadEn: ["Current Location: Party Group Construction and Organizational Structure",
		"Current Location: Construction of Party Groups and Learning Areas",
		"Current Location: Construction of Party Groups and Special Events"
	],
	jzpyTitleCn: ["心理健康工作", "心灵驿站", "心理咨询师"],
	jzpyTitleEn: ["healthWork", "MindStation", "Counselor"],
	jzpyoneBreadCn: ["当前位置：心理健康&bull;心理健康工作", "当前位置：心理健康&bull;心灵驿站", "当前位置：心理健康&bull;心理咨询师"],
	jzpyoneBreadEn: ["Current location:Mental health &bull; Mental health work",
		"Current location:Mental health &bull; Mind station", "Current location:Mental health &bull;Counselor",
	],
	jzpySubBreadCn: ["当前位置：心理健康&bull;详情", ],
	jzpySubBreadEn: ["Current location:Mental health &bull;Details", ],
}
if (sessionStorage.getItem("CNtoEn") == 1) {
	$('span[name = xyshBread]').html("")
	$('span[name = jgzTwoBread]').text(xueshengLanguageObj["twoBreadCn"])
	//中文
	//导航
	$("li[name = jzpySubMenu]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["jzpyTitleCn"][index])

	})
	$("h2[name = jzpySubMenu]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["jzpyTitleCn"][index])

	})
	$("span[name = jzpySubBread]").each(function (index, item) {
		$(item).html(xueshengLanguageObj["jzpySubBreadCn"][index])

	})
	$("span[name = jzpyoneBread]").each(function (index, item) {
		$(item).html(xueshengLanguageObj["jzpyoneBreadCn"][index])

	})
	$("li[name = xsTitle]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["titleCn"][index])

	})
	//学生事务评奖评优通知tab
	$("li[name = xsswSuBTab]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["xsswSubTabCn"][index])

	})
	$("span[name = xsTitle]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["titleCn"][index])
	})
	//目录
	$("li[name = xsMenu]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["MenuCn"][index])

	})
	$("h2[name = xsMenu]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["MenuCn"][index])
	})
	// 校园生活详情页标题和面包屑 
	$("h2[name = xyshSubTitle]").html("校园生活")
	$("span[name = xyshSubBread]").html("当前位置：校园生活&bull;详情页面")
	//面包屑
	$("span[name = oneBread]").each(function (index, item) {
		$(item).html(xueshengLanguageObj["OneBreadCn"][index])
	})
	//校园生活 子项面包屑
	$("span[name = xyshBread]").each(function (index, item) {
		$(item).html(xueshengLanguageObj["xyshBreadCn"][index])
	})

	//学习学术详情面包屑
	$("h2[name = xxxsInfoTitle]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["xxxsSubTitleCn"][index])
	})
	$("span[name = xxxsInfoBread]").each(function (index, item) {
		$(item).html(xueshengLanguageObj["xxxsSubBreadCn"][index])
	})
	//学生事务详情面包屑
	$("h2[name = ssswSubInfoTitle]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["xsswSubTitleInfoCn"][index])
	})
	$("span[name = ssswSubInfoBread]").each(function (index, item) {
		$(item).html(xueshengLanguageObj["xsswSubBreadInfoCn"][index])
	})
	//业务办理详情标题面包屑
	$("h2[name = ywblSubInfo]").html(xueshengLanguageObj["ywblSubTitleCn"])
	$("span[name = ywblSubBread]").html(xueshengLanguageObj["ywblSubBreadCn"])
	//毕业通道详情面包屑
	$("span[name = bytdSubBread]").html(xueshengLanguageObj["bytdSubBreadCn"])
	//就业信息详情面包屑
	$("span[name = jyxxSubBread]").html(xueshengLanguageObj["yyxxSubBreadCn"])
	$("li[name = jxxxSubTitle]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["jjxxSubTitleCn"][index])

	})
	//规章制度下载中心子页面
	$("span[name = jzgOneBread]").each(function (index, item) {
		$(item).html(xueshengLanguageObj["jzgOneBreadCn"][index])

	})
	//学生活动详情面包屑 
	$("span[name = sshdSubBread]").html(xueshengLanguageObj["sshdSubBreadCn"])
	//子标题 下载中心规章制度
	$("h2[name = jgzGzzdTitle]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["jgzGzzdTitleCn"][index])
	})
	//子标题 下载中心规章制度
	$("h2[name = jzgSubMenu]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["jgzGzzdTitleCn"][index])
	})
	$("li[name = jzgSubMenu]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["jgzGzzdTitleCn"][index])
	})
} else {
	//英文

	//导航
	$("li[name = xsTitle]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["titleEn"][index])
			.css({
				"padding": "0 10px",
				"font-weight": "blod",
			})
	})
	$("span[name = xsTitle]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["titleEn"][index])
	})
	//学生事务评奖评优通知tab
	$("li[name = xsswSuBTab]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["xsswSubTabEn"][index])

	})
	$("span[name = jzpySubBread]").each(function (index, item) {
		$(item).html(xueshengLanguageObj["jzpySubBreadEn"][index])

	})
	$("li[name = jzpySubMenu]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["jzpyTitleEn"][index])

	})
	$("h2[name = jzpySubMenu]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["jzpyTitleEn"][index])

	})
	$("span[name = jzpyoneBread]").each(function (index, item) {
		$(item).html(xueshengLanguageObj["jzpyoneBreadEn"][index])

	})
	//目录
	$("li[name = xsMenu]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["MenuEn"][index])

	})
	// 校园生活详情页标题和面包屑 
	$("h2[name = xyshSubTitle]").html("School Life")
	$("span[name = xyshSubBread]").html("Current location: Campus Life &bull; Details page")
	$("h2[name = xsMenu]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["MenuEn"][index])
	})
	//面包屑
	$("span[name = oneBread]").each(function (index, item) {
		$(item).html(xueshengLanguageObj["OneBreadEn"][index])
	})
	//学习学术详情面包屑
	$("h2[name = xxxsInfoTitle]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["xxxsSubTitleEn"][index])
	})
	$("span[name = xxxsInfoBread]").each(function (index, item) {
		$(item).html(xueshengLanguageObj["xxxsSubBreadEn"][index])
	})
	//学生事务详情面包屑
	$("h2[name = ssswSubInfoTitle]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["xsswSubTitleInfoEn"][index])
	})
	$("span[name = ssswSubInfoBread]").each(function (index, item) {
		$(item).html(xueshengLanguageObj["xsswSubBreadInfoEn"][index])
	})
	//业务办理详情标题面包屑
	$("h2[name = ywblSubInfo]").html(xueshengLanguageObj["ywblSubTitleEn"])
	$("span[name = ywblSubBread]").html(xueshengLanguageObj["ywblSubBreadEn"])
	//毕业通道详情面包屑
	$("span[name = bytdSubBread]").html(xueshengLanguageObj["bytdSubBreadEn"])
	//就业信息详情面包屑
	$("span[name = jyxxSubBread]").html(xueshengLanguageObj["yyxxSubBreadEn"])
	$("li[name = jxxxSubTitle]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["jjxxSubTitleEn"][index])


	})
	//学生活动详情面包屑 
	$("span[name = sshdSubBread]").html(xueshengLanguageObj["sshdSubBreadEn"])
	//子标题 下载中心规章制度
	//子标题 下载中心规章制度
	$("h2[name = jgzGzzdTitle]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["jgzGzzdTitleEn"][index])
	})
	//规章制度下载中心子页面
	$("span[name = jzgOneBread]").each(function (index, item) {
		$(item).html(xueshengLanguageObj["jzgOneBreadEn"][index])

	})
	//子标题 下载中心规章制度
	$("h2[name = jzgSubMenu]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["jgzGzzdTitleEn"][index])
	})
	$("li[name = jzgSubMenu]").each(function (index, item) {
		$(item).text(xueshengLanguageObj["jgzGzzdTitleEn"][index])
	})
	$('span[name = xyshBread]').html("Current location: Campus Life &bull; Student Activities")
	$('span[name = jgzTwoBread]').text(xueshengLanguageObj["twoBreadEn"])
	//校园生活 子项面包屑
	$("span[name = xyshBread]").each(function (index, item) {
		$(item).html(xueshengLanguageObj["xyshBreadEn"][index])
	})
	$("h2[name = xs_kcxxTitle]").html("Course Information")
	$("span[name = xs_kcxxBread]").html("Current location: Student &bull; Course Information")
}
//新生通道
function xshd_hdtz_list() {
	if (userid) {
		$.ajax({
			url: baseUrl + "sys/stu/study/actlist",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 158,
				id: userid,
			},
			success: function (res) {
				// console.log("新生通道")
				// console.log(res)
				var desDom = $("#newStuChannel")
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
							if (item.date != null) {
								var currDate = item.date.split(" ")[0]
							}
							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1"  class="fivexstd fiveStep clearfix"  data-step="fivexstd" data-index="' + index + '"  onclick="xs_ywbl_info(' + item.id +
									')"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									title + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></a></li>'
							}
						})

						desDom.html(str)
						fiveMenuClickEvent()
					} else {
						if (sessionStorage.getItem("CNtoEn") == 0) {
							var temp = "No data"
						} else {
							var temp = "暂无数据"
						}
						str += '<li class="kxyj_sub_a_0_item  sub_info_mange  clearfix" ><span>' + temp + '</span><i></i></li>'

						desDom.html(str)
					}


				}


			}
		})
	} else {
		$.ajax({
			url: baseUrl + "sys/stu/study/actlist",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 158,
			},
			success: function (res) {
				// console.log("新生通道")
				// console.log(res)
				var desDom = $("#newStuChannel")
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
							if (item.date != null) {
								var currDate = item.date.split(" ")[0]
							}
							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1"  class="fivexstd fiveStep clearfix"  data-step="fivexstd" data-index="' + index + '"  onclick="xs_ywbl_info(' + item.id +
									')"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									title + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></a></li>'
							}
						})
						desDom.html(str)
						fiveMenuClickEvent()
					} else {
						if (sessionStorage.getItem("CNtoEn") == 0) {
							var temp = "No data"
						} else {
							var temp = "暂无数据"
						}
						str += '<li class="kxyj_sub_a_0_item  sub_info_mange  clearfix" ><span>' + temp + '</span><i></i></li>'
						desDom.html(str)
					}


				}


			}
		})
	}

}
// 培养环节
function bytd_xwlw_list() {
	if (userid) {
		$.ajax({
			url: baseUrl + "sys/passage/passage/actlist",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 149,
				id: userid,
			},
			success: function (res) {
				// console.log("培养环节")
				// console.log(res)
				let desDom = $("#cultivate")
				if (res.code === 0) {

					var data = res.page.list

					var str =
						'<li  class="clearfix" data-id="ywbl_sub_c_2" ><div class="img"><img src="../img/Edu_0.png" alt=""></div><span>' +
						"课程信息" + '</span></li>'
					// var str = ""
					if (data.length !== 0) {

						data.forEach(function (item, index) {

							var time = ""
							var title = ""
							let crumb = ""
							if (sessionStorage.getItem("CNtoEn") == 1) {
								crumb = "培养环节"
							} else {
								crumb = "Dissertation"
							}
							if (item.title != "") {
								title = item.title

							}
							if (item.createTime != null) {
								time = item.createTime.split(" ")[0]
							}
							if (item.date != null) {
								var currDate = item.date.split(" ")[0]
							}
							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1" class="fivepyhj fiveStep clearfix"  data-step="fivepyhj" data-index="' + index + '"  onclick="xs_ywbl_info(' + item.id +
									')"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									title + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></a></li>'
							}
						})
						desDom.html(str)
						fiveMenuClickEvent()
					} else {
						if (sessionStorage.getItem("CNtoEn") == 1) {
							var temp = "暂无数据"
						} else {
							var temp = "No Data"
						}

						let crumb = ""
						if (sessionStorage.getItem("CNtoEn") == 1) {
							crumb = "学位论文"
						} else {
							crumb = "Dissertation"
						}


						str += '<li data-id="xwlw_sub_b_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix" >'
						str += '<span>' + temp + '</span><i></i></li>'
						desDom.empty()
						desDom.append(str)
					}


				}



			}
		})
	} else {
		$.ajax({
			url: baseUrl + "sys/passage/passage/actlist",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 149,
			},
			success: function (res) {
				// console.log("培养环节")
				// console.log(res)
				let desDom = $("#cultivate")
				if (res.code === 0) {

					var data = res.page.list

					var str =
						'<li  class="clearfix" data-id="ywbl_sub_c_2" ><div class="img"><img src="../img/Edu_0.png" alt=""></div><span>' +
						"课程信息" + '</span></li>'
					// var str = ""
					if (data.length !== 0) {

						data.forEach(function (item, index) {

							var time = ""
							var title = ""
							let crumb = ""
							if (sessionStorage.getItem("CNtoEn") == 1) {
								crumb = "培养环节"
							} else {
								crumb = "Dissertation"
							}
							if (item.title != "") {
								title = item.title

							}
							if (item.createTime != null) {
								time = item.createTime.split(" ")[0]
							}
							if (item.date != null) {
								var currDate = item.date.split(" ")[0]
							}
							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1" class="fivepyhj fiveStep clearfix"  data-step="fivepyhj"  data-index="' + index + '" onclick="xs_ywbl_info(' + item.id +
									')"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									title + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></a></li>'
							}
						})
						desDom.html(str)
						fiveMenuClickEvent()
					} else {
						if (sessionStorage.getItem("CNtoEn") == 1) {
							var temp = "暂无数据"
						} else {
							var temp = "No Data"
						}

						let crumb = ""
						if (sessionStorage.getItem("CNtoEn") == 1) {
							crumb = "学位论文"
						} else {
							crumb = "Dissertation"
						}


						str += '<li data-id="xwlw_sub_b_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix" >'
						str += '<span>' + temp + '</span><i></i></li>'
						desDom.empty()
						desDom.append(str)
					}


				}



			}
		})
	}

}
//学籍学工 
function bytd_bywh_list() {
	if (userid) {
		$.ajax({
			url: baseUrl + "sys/stu/business/businessactlist",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 154,
				id: userid,
			},
			success: function (res) {
				// console.log("学籍学工")
				// console.log(res)


				let desDom = $("#schoolRoll")
				if (res.code === 0) {

					var data = res.page.list
					var str = ""
					if (data.length !== 0) {

						data.forEach(function (item, index) {

							var time = ""
							var title = ""
							let crumb = ""
							if (sessionStorage.getItem("CNtoEn") == 1) {
								crumb = "学籍学工"
							} else {
								crumb = "Graduation ceremony"
							}
							if (item.title != "") {
								title = item.title

							}
							if (item.createTime != null) {
								time = item.createTime.split(" ")[0]
							}
							if (item.date != null) {
								var currDate = item.date.split(" ")[0]
							}
							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1"  class="fivexjxg fiveStep clearfix"  data-step="fivexjxg"  data-index="' + index + '"  onclick="xs_ywbl_info(' + item.id +
									')"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									title + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></a></li>'
							}

						})
						desDom.html(str)
						fiveMenuClickEvent()
					} else {
						if (sessionStorage.getItem("CNtoEn") == 1) {
							var temp = "暂无数据"
						} else {
							var temp = "No Data"
						}
						let crumb = ""
						if (sessionStorage.getItem("CNtoEn") == 1) {
							crumb = "学籍学工"
						} else {
							crumb = "Graduation ceremony"
						}
						var time = new Date().toLocaleDateString()


						str += '<li data-id="xwlw_sub_b_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix" >'
						str += '<span>' + temp + '</span><i></i></li>'
						desDom.empty()
						desDom.append(str)
					}


				}


			}
		})
	} else {
		$.ajax({
			url: baseUrl + "sys/stu/business/businessactlist",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 154,
			},
			success: function (res) {
				// console.log("学籍学工")
				// console.log(res)


				let desDom = $("#schoolRoll")
				if (res.code === 0) {

					var data = res.page.list
					var str = ""
					if (data.length !== 0) {

						data.forEach(function (item, index) {

							var time = ""
							var title = ""
							let crumb = ""
							if (sessionStorage.getItem("CNtoEn") == 1) {
								crumb = "学籍学工"
							} else {
								crumb = "Graduation ceremony"
							}
							if (item.title != "") {
								title = item.title

							}
							if (item.createTime != null) {
								time = item.createTime.split(" ")[0]
							}
							if (item.date != null) {
								var currDate = item.date.split(" ")[0]
							}
							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1"  class="fivexjxg fiveStep clearfix"  data-step="fivexjxg"  data-index="' + index + '"   onclick="xs_ywbl_info(' + item.id +
									')"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									title + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></a></li>'
							}

						})
						desDom.html(str)
						fiveMenuClickEvent()
					} else {
						if (sessionStorage.getItem("CNtoEn") == 1) {
							var temp = "暂无数据"
						} else {
							var temp = "No Data"
						}
						let crumb = ""
						if (sessionStorage.getItem("CNtoEn") == 1) {
							crumb = "学籍学工"
						} else {
							crumb = "Graduation ceremony"
						}
						var time = new Date().toLocaleDateString()


						str += '<li data-id="xwlw_sub_b_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix" >'
						str += '<span>' + temp + '</span><i></i></li>'
						desDom.empty()
						desDom.append(str)
					}


				}


			}
		})
	}

}
// *_* 毕业通道
function bytd_lxjy_list() {
	if (userid) {
		$.ajax({
			url: baseUrl + "sys/passage/passage/messagelist",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 160,
				id: userid,
			},
			success: function (res) {
				// console.log("毕业通道")
				// console.log(res)

				let desDom = $("#graduateChannel")
				if (res.code === 0) {

					var data = res.page.list
					var str = ""
					if (data.length !== 0) {

						data.forEach(function (item, index) {

							var time = ""
							var title = ""
							let crumb = ""
							if (sessionStorage.getItem("CNtoEn") == 1) {
								crumb = "毕业通道"
							} else {
								crumb = "Out-of-school message"
							}
							if (item.title != "") {
								title = item.title

							}
							if (item.createTime != null) {
								time = item.createTime.split(" ")[0]
							}
							if (item.date != null) {
								var currDate = item.date.split(" ")[0]
							}
							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1"   class="fivebytd fiveStep clearfix"  data-step="fivebytd"  data-index="' + index + '"  onclick="xs_ywbl_info(' + item.id +
									')"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									title + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></a></li>'
							}
						})
						desDom.html(str)
						fiveMenuClickEvent()
					} else {
						if (sessionStorage.getItem("CNtoEn") == 1) {
							var temp = "暂无数据"
						} else {
							var temp = "No Data"
						}
						let crumb = ""
						if (sessionStorage.getItem("CNtoEn") == 1) {
							crumb = "离校寄语"
						} else {
							crumb = "Out-of-school message"
						}
						var time = new Date().toLocaleDateString()
						// console.log(time)

						str += '<li data-id="xwlw_sub_b_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix" >'
						str += '<span>' + temp + '</span><i></i></li>'
						desDom.empty()
						desDom.append(str)
					}


				}

			}
		})
	} else {
		$.ajax({
			url: baseUrl + "sys/passage/passage/messagelist",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 160,
			},
			success: function (res) {
				// console.log("毕业通道")
				// console.log(res)

				let desDom = $("#graduateChannel")
				if (res.code === 0) {

					var data = res.page.list
					var str = ""
					if (data.length !== 0) {

						data.forEach(function (item, index) {

							var time = ""
							var title = ""
							let crumb = ""
							if (sessionStorage.getItem("CNtoEn") == 1) {
								crumb = "毕业通道"
							} else {
								crumb = "Out-of-school message"
							}
							if (item.title != "") {
								title = item.title

							}
							if (item.createTime != null) {
								time = item.createTime.split(" ")[0]
							}
							if (item.date != null) {
								var currDate = item.date.split(" ")[0]
							}
							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1"  class="fivebytd fiveStep clearfix"  data-step="fivebytd"  data-index="' + index + '" onclick="xs_ywbl_info(' + item.id +
									')"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									title + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></a></li>'
							}
						})
						desDom.html(str)
						fiveMenuClickEvent()
					} else {
						if (sessionStorage.getItem("CNtoEn") == 1) {
							var temp = "暂无数据"
						} else {
							var temp = "No Data"
						}
						let crumb = ""
						if (sessionStorage.getItem("CNtoEn") == 1) {
							crumb = "离校寄语"
						} else {
							crumb = "Out-of-school message"
						}
						var time = new Date().toLocaleDateString()
						// console.log(time)

						str += '<li data-id="xwlw_sub_b_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix" >'
						str += '<span>' + temp + '</span><i></i></li>'
						desDom.empty()
						desDom.append(str)
					}


				}

			}
		})
	}

}
//就业通道
function bytd_lyln_list() {
	if (userid) {
		$.ajax({
			url: baseUrl + "sys/obtaininfo/obtaininfo/newslist",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 166,
				id: userid
			},
			success: function (res) {
				// console.log("就业通道")
				// console.log(res)


				let desDom = $("#employmentChannel")
				if (res.code === 0) {

					var data = res.page.list
					var str = ""
					if (data.length !== 0) {

						data.forEach(function (item, index) {

							var time = ""
							var title = ""
							let crumb = ""
							if (sessionStorage.getItem("CNtoEn") == 1) {
								crumb = "就业通道"
							} else {
								crumb = "Picture Remembrance"
							}
							if (item.title != "") {
								title = item.title

							}
							if (item.createTime != null) {
								time = item.createTime.split(" ")[0]
							}
							if (item.date != null) {
								var currDate = item.date.split(" ")[0]
							}
							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1"  class="fivejytd fiveStep clearfix"  data-step="fivejytd"  data-index="' + index + '"  onclick="xs_ywbl_info(' + item.id +
									')"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									title + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></a></li>'
							}
						})
						desDom.html(str)
						fiveMenuClickEvent()
					} else {
						if (sessionStorage.getItem("CNtoEn") == 1) {
							var temp = "暂无数据"
						} else {
							var temp = "No Data"
						}
						let crumb = ""
						if (sessionStorage.getItem("CNtoEn") == 1) {
							crumb = "留影留念"
						} else {
							crumb = "Picture Remembrance"
						}
						var time = new Date().toLocaleDateString()
						// console.log(time)

						str += '<li data-id="xwlw_sub_b_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix" >'
						str += '<span>' + temp + '</span><i></i></li>'
						desDom.empty()
						desDom.append(str)
					}

				}

			}
		})
	} else {
		$.ajax({
			url: baseUrl + "sys/obtaininfo/obtaininfo/newslist",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 166,
			},
			success: function (res) {
				// console.log("就业通道")
				// console.log(res)


				let desDom = $("#employmentChannel")
				if (res.code === 0) {

					var data = res.page.list
					var str = ""
					if (data.length !== 0) {

						data.forEach(function (item, index) {

							var time = ""
							var title = ""
							let crumb = ""
							if (sessionStorage.getItem("CNtoEn") == 1) {
								crumb = "就业通道"
							} else {
								crumb = "Picture Remembrance"
							}
							if (item.title != "") {
								title = item.title

							}
							if (item.createTime != null) {
								time = item.createTime.split(" ")[0]
							}
							if (item.date != null) {
								var currDate = item.date.split(" ")[0]
							}
							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1"  class="fivejytd fiveStep clearfix"  data-step="fivejytd"  data-index="' + index + '"  onclick="xs_ywbl_info(' + item.id +
									')"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									title + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></a></li>'
							}
						})
						desDom.html(str)
						fiveMenuClickEvent()
					} else {
						if (sessionStorage.getItem("CNtoEn") == 1) {
							var temp = "暂无数据"
						} else {
							var temp = "No Data"
						}
						let crumb = ""
						if (sessionStorage.getItem("CNtoEn") == 1) {
							crumb = "留影留念"
						} else {
							crumb = "Picture Remembrance"
						}
						var time = new Date().toLocaleDateString()
						// console.log(time)

						str += '<li data-id="xwlw_sub_b_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix" >'
						str += '<span>' + temp + '</span><i></i></li>'
						desDom.empty()
						desDom.append(str)
					}

				}

			}
		})
	}

}
//奖助评优
function xshd_xsfc_list() {
	if (userid) {
		$.ajax({
			url: baseUrl + "sys/stu/study/stuelegance",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 303,
				id: userid,
			},
			success: function (res) {
				// console.log("奖助评优")
				// console.log(res)

				let desDom = $("#mentalHealth")

				let str = ""
				if (sessionStorage.getItem("CNtoEn") == 1) {
					var Data = "暂无数据"
				} else {
					var Data = "NO data"
				}
				if (res.code == 0) {
					let data = res.page.list
					if (data.length > 0) {
						data.forEach(function (item, index) {

							var content = ""
							if (item.title != null) {
								content = item.title.substr(0, 20)
								content += "..."
							}


							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1"  class="fivejzpy fiveStep clearfix"  data-step="fivejzpy"  data-index="' + index + '"  onclick="xs_ywbl_info(' + item.id +
									')"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									content + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + content + '</span></a></li>'
							}
						})
					} else {
						if (sessionStorage.getItem("CNtoEn") == 1) {
							var Data = "暂无数据"
						} else {
							var Data = "NO data"
						}
						str += '<li class="clearfix" ><img src="#" alt=""><span>' + Data + '</span></li>'
					}
					desDom.html(str)
					fiveMenuClickEvent()
				}



			}
		})
	} else {
		$.ajax({
			url: baseUrl + "sys/stu/study/stuelegance",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 303,
			},
			success: function (res) {
				// console.log("奖助评优")
				// console.log(res)

				let desDom = $("#mentalHealth")

				let str = ""
				if (sessionStorage.getItem("CNtoEn") == 1) {
					var Data = "暂无数据"
				} else {
					var Data = "NO data"
				}
				if (res.code == 0) {
					let data = res.page.list
					if (data.length > 0) {
						data.forEach(function (item, index) {

							var content = ""
							if (item.title != null) {
								content = item.title.substr(0, 20)
								content += "..."
							}


							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1"  class="fivejzpy fiveStep clearfix"  data-step="fivejzpy"  data-index="' + index + '"  onclick="xs_ywbl_info(' + item.id +
									')"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									content + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + content + '</span></a></li>'
							}
						})
					} else {
						if (sessionStorage.getItem("CNtoEn") == 1) {
							var Data = "暂无数据"
						} else {
							var Data = "NO data"
						}
						str += '<li class="clearfix" ><img src="#" alt=""><span>' + Data + '</span></li>'
					}
					desDom.html(str)
					fiveMenuClickEvent()
				}



			}
		})
	}

}
// 校园生活下社团活动下学生会
function jyxx_jyzn_list() {
	if (userid) {
		$.ajax({
			url: baseUrl + "sys/stu/study/lecture",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 172,
				id: userid,
			},
			success: function (res) {
				// console.log("学生会")
				// console.log(res)
				let desDom = $("#xssw_sub_a_0 .right_view>ul")
				let sourceDom = $("#xssw_sub_a_0")
				if (res.code === 0) {
					let data = res.page.list
					let crumb = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						crumb = "学生会"
					} else {
						crumb = "Employment guide"
					}
					let str = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Data = "暂无数据"
					} else {
						var Data = "NO data"
					}
					if (data.length == 0) {

						str += '<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix" >'
						str += '<span>' + Data + '</span></li>'

						desDom.empty()
						desDom.append(str)
					} else {
						data.forEach(function (item, index) {
							var time = ""
							var title = ""
							if (item.content != "" && item.content != undefined) {
								title = item.title

							}
							if (item.createTime != null && item.createTime != undefined) {
								time = item.createTime.split(" ")[0]
							}
							if (item.date != null) {
								var currDate = item.date.split(" ")[0]
							}

							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1" class="fivestwhxsh fiveStep clearfix"  data-step="fivestwhxsh" data-index="' + index + '" onclick="xueshenghuiinfo(' + item.id +
									',1)"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									title + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></a></li>'
							}
						})
						$('#xssw_sub_a_0').addClass('content_item_active')
						$('#jyxx_jycy_sub_a_0').removeClass('content_item_active')

						desDom.html(str)
						fiveMenuClickEvent()
					}
				}




			}
		})
	} else {
		$.ajax({
			url: baseUrl + "sys/stu/study/lecture",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 172,
			},
			success: function (res) {
				// console.log("学生会")
				// console.log(res)


				let desDom = $("#xssw_sub_a_0 .right_view>ul")
				if (res.code === 0) {
					let data = res.page.list
					let crumb = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						crumb = "学生会"
					} else {
						crumb = "Employment guide"
					}
					let str = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Data = "暂无数据"
					} else {
						var Data = "NO data"
					}
					if (data.length == 0) {

						str += '<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix" >'
						str += '<span>' + Data + '</span></li>'

						desDom.empty()
						desDom.append(str)
					} else {
						data.forEach(function (item, index) {
							var time = ""
							var title = ""
							if (item.content != "" && item.content != undefined) {
								title = item.title

							}
							if (item.createTime != null && item.createTime != undefined) {
								time = item.createTime.split(" ")[0]
							}
							if (item.date != null) {
								var currDate = item.date.split(" ")[0]
							}

							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1" class="fivestwhxsh fiveStep clearfix"  data-step="fivestwhxsh" data-index="' + index + '" onclick="xueshenghuiinfo(' + item.id +
									',1)"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									title + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></a></li>'
							}
						})
						desDom.html(str)
						fiveMenuClickEvent()

					}
				}




			}
		})
	}

}

//学生会详情
function xueshenghuiinfo(id, path) {
	$.ajax({
		url: baseUrl + "sys/community/getinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// console.log("学生活动info")
			// console.log(res)
			let crumbDom = $("#xueshenghuiSection .crumb")
			let desDom = $("#xueshenghuiSection .right_view .sub_content")
			let titleCrumbDom = $("#xueshenghuiSection .titleCrumb")
			let str = ""
			if (res.code == 0) {
				let data = res.content
				if (data != null) {
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Time = "时间"

					}
					let createTime = data.createTime.split(" ")[0]
					let content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + createTime + '</i> </div>'
					str += '<p>' + content + '</p></div>'

				} else {
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Data = "暂无数据"
					} else {
						var Data = "NO data"
					}

					str += '<div class="sub_detail_content"><h3>' + Data + '</h3><div class="sub_date">'
					str += '<span></span><i></i> <span></span><i></i></div><p>' + Data + '</p></div>'

				}


			}
			if (path == 1) {
				var sourceDom = $('#xssw_sub_a_0')
			} else {
				var sourceDom = $('#xssw_sub_a_1')
			}

			sourceDom.removeClass('content_item_active')
			$('#xueshenghuiSection').addClass("content_item_active")
			$(desDom).empty()
			desDom.append(str)
			$(crumbDom).eq(0).empty()
			$(crumbDom).eq(0).text(crumb)
			$(titleCrumbDom).eq(0).empty()
			$(titleCrumbDom).eq(0).text(crumb)

		}
	})
}
//校园生活下学生社团
function jyxx_jyzc_list() {
	if (userid) {
		$.ajax({
			url: baseUrl + "sys/community/community/notiacelist",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 152,
				id: userid
			},
			success: function (res) {
				// console.log("学生社团")
				// console.log(res)
				let desDom = $("#xssw_sub_a_1 .right_view>ul")
				if (res.code === 0) {
					let data = res.page.list
					let crumb = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						crumb = "学生社团"
					} else {
						crumb = "Employment policy"
					}
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Data = "暂无数据"
					} else {
						var Data = "NO data"
					}
					let str = ""

					if (data.length == 0) {

						str += '<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix" >'
						str += '<span>' + Data + '</span></li>'
						desDom.empty()
						desDom.append(str)
					} else {
						data.forEach(function (item, index) {
							var time = ""
							var title = ""
							if (item.content != "" && item.content != undefined) {
								title = item.title

							}
							if (item.createTime != null && item.createTime != undefined) {
								time = item.createTime.split(" ")[0]
							}
							if (item.date != null) {
								var currDate = item.date.split(" ")[0]
							}
							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1" class="fivestwhxsst fiveStep clearfix"  data-step="fivestwhxsst" data-index="' + index + '" onclick="xueshenghuiinfo(' + item.id +
									',2)"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									title + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></a></li>'
							}


						})
						desDom.html(str)
						fiveMenuClickEvent()

					}
				}

			}
		})
	} else {
		$.ajax({
			url: baseUrl + "sys/community/community/notiacelist",
			type: "POST",
			data: {
				language: sessionStorage.getItem("CNtoEn"),
				type: 152,
			},
			success: function (res) {
				// console.log("学生社团")
				// console.log(res)

				let desDom = $("#xssw_sub_a_1 .right_view>ul")
				if (res.code === 0) {
					let data = res.page.list
					let crumb = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						crumb = "学生社团"
					} else {
						crumb = "Employment policy"
					}
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Data = "暂无数据"
					} else {
						var Data = "NO data"
					}
					let str = ""

					if (data.length == 0) {

						str += '<li  class="kxyj_sub_a_0_item  sub_info_mange  clearfix" >'
						str += '<span>' + Data + '</span></li>'
						desDom.empty()
						desDom.append(str)
					} else {
						data.forEach(function (item, index) {
							var time = ""
							var title = ""
							if (item.content != "" && item.content != undefined) {
								title = item.title

							}
							if (item.createTime != null && item.createTime != undefined) {
								time = item.createTime.split(" ")[0]
							}
							if (item.date != null) {
								var currDate = item.date.split(" ")[0]
							}
							if (item.jumpPath == null || item.jumpPath == "") {
								str += '<li data-id="ywbl_sub_c_1"  class="fivestwhxsst fiveStep clearfix"  data-step="fivestwhxsst" data-index="' + index + '" onclick="xueshenghuiinfo(' + item.id +
									',2)"><div class="img"><img src="' + (item.remark == null ? "" : item.remark) + '" alt=""></div><span>' +
									title + '</span></li>'
							} else {
								str += '<li><a href="http://' + item.jumpPath + '"target="_blank"><div class="img"><img src="' + (item.remark ==
									null ? "" : item.remark) + '" alt=""></div><span>' + title + '</span></a></li>'
							}


						})
						desDom.html(str)
						fiveMenuClickEvent()

					}
				}
			}
		})
	}

}
//学生活动info
function jyxx_xwgg_info(id) {
	$.ajax({
		url: baseUrl + "sys/community/getinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// console.log("学生活动info")
			// console.log(res)
			let crumbDom = $("#jyxx_xshd_sub_a_0 .crumb")
			let desDom = $("#jyxx_xshd_sub_a_0 .right_view .sub_content")
			let titleCrumbDom = $("#jyxx_xshd_sub_a_0 .titleCrumb")
			let str = ""
			if (res.code == 0) {
				let data = res.content
				if (data != null) {
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Time = "时间"

						var crumb = 1
						if (crumb == 1) {
							crumb = "学生社团"
						} else if (crumb == 2) {
							crumb = "通知公告"
						} else if (crumb == 3) {
							crumb = "社团成员"
						} else if (crumb == 4) {
							crumb = "精彩留念"
						}
					} else {
						var Time = "Time"

						if (crumb == 1) {
							crumb = "Social activities"
						} else if (crumb == 2) {
							crumb = "Notification Notice"
						} else if (crumb == 3) {
							crumb = "Members"
						} else if (crumb == 4) {
							crumb = "Wonderful Memories"
						}

					}
					let createTime = data.createTime.split(" ")[0]
					let content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + createTime + '</i> </div>'
					str += '<p>' + content + '</p></div>'

				} else {
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Data = "暂无数据"
					} else {
						var Data = "NO data"
					}

					str += '<div class="sub_detail_content"><h3>' + Data + '</h3><div class="sub_date">'
					str += '<span></span><i></i> <span></span><i></i></div><p>' + Data + '</p></div>'

				}


			}
			// console.log("详情dom")
			// console.log($("#jyxx_sub_a"))
			$("#jyxx_sub_a").removeClass("content_item_active")
			$("#jyxx_xshd_sub_a_0").addClass("content_item_active")
			$(desDom).empty()
			desDom.append(str)
			$(crumbDom).eq(0).empty()
			$(crumbDom).eq(0).text(crumb)
			$(titleCrumbDom).eq(0).empty()
			$(titleCrumbDom).eq(0).text(crumb)

		}
	})
}
//办事指南
function xshd_bszn_list() {
	if (sessionStorage.getItem("CNtoEn") == 1) {
		var id = 1362
	} else {
		var id = 1363
	}
	$.ajax({
		url: baseUrl + "sys/alumnus/getinfo",
		type: "POST",
		data: {
			id: id,
		},
		success: function (res) {
			// console.log("办事指南详情")
			// console.log(res)
			let str = ""
			let desDom = $("#bszn")
			if (res.code == 0) {
				let data = res.content
				if (data !== null) {
					let Time = ""
					let PageView = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						Time = "时间"
					} else {
						Time = "time"
					}
					var CreateTime = ""
					if (data.date != null) {
						CreateTime = data.date.split(" ")[0]
					}
					let content = data.content.replace(/&amp;nbsp;/g, "&#10;")

					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date">'
					str += '<span>' + Time + ':</span><i>' + CreateTime + '</i>'
					str += '</div><p>' + content + '</p></div>'
				} else {
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var Data = "暂无数据"
					} else {
						var Data = "NO data"
					}

					str += '<div class="sub_detail_content"><h3>' + Data + '</h3><div class="sub_date">'
					str += '<span></span><i></i> <span></span><i></i></div><p>' + Data + '</p></div>'
				}



			}


			$(desDom).empty()
			desDom.append(str)

		}
	})
}
//心理健康工作
jzg_jxj_list(274)

function jzg_jxj_list(type) {
	$.ajax({
		url: baseUrl + "sys/schlife/reward/list",
		type: "POST",
		data: {
			language: 1,
			type: type,
		},
		success: function (res) {
			// console.log("心理健康工作")
			// console.log(res)
			var desDom = ""
			var sourceDom = null
			switch (true) {
				case type == 274:
					desDom = $("#jzpu_sub_a .right_view .sub_content")
					sourceDom = $("#jzpu_sub_a")
					break
				case type == 275:
					desDom = $("#jzpu_sub_b .right_view .sub_content")
					sourceDom = $("#jzpu_sub_b")
					break
				case type == 276:
					sourceDom = $("#jzpu_sub_c")
					desDom = $("#jzpu_sub_c .right_view .sub_content")
					break
			}
			if (res.code === 0) {
				var data = res.page.list[0]
				var str = ""
				if (sessionStorage.getItem("CNtoEn") == 1) {
					crumb = "心理健康工作"
				} else {
					crumb = "Scholarship"
				}
				if (data != null) {
					let createTime = ""
					let content = ""
					var str = ""
					if (data.createTime != null) {
						createTime = data.createTime.split(" ")[0]
					}
					if (data.content != null) {
						content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					}
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var temp = "暂无数据"
						var Time = "时间"
					} else {
						var temp = "No Data"
						var Time = "Time"
					}
					if (data.date != null) {
						var currDate = data.date.split(" ")[0]
					}
					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date"><span>' + Time +
						':</span><i>' + currDate + '</i>'
					str += '</div><p>' + content + '</p></div>'
					sourceDom.addClass('content_item_active')
						.siblings()
						.removeClass("content_item_active")
					desDom.html(str)
				}

			}
		},
	})
}
//心理健康info
function jzg_jzpy_info(id, crumb) {
	$.ajax({
		url: baseUrl + "sys/staff/getinfo",
		type: "POST",
		data: {
			id: id
		},
		success: function (res) {
			// console.log("心理健康info")
			// console.log(res)

			let desDom = $("#jzpu_sub_a_1 .right_view .sub_content")
			if (res.code == 0) {
				let data = res.content
				if (data != null) {
					let createTime = ""
					let content = ""
					var str = ""
					if (data.createTime != null) {
						createTime = data.createTime.split(" ")[0]
					}
					if (data.content != null) {
						content = data.content.replace(/&amp;nbsp;/g, "&#10;")
					}
					if (sessionStorage.getItem("CNtoEn") == 1) {
						var temp = "暂无数据"
						var Time = "时间"
					} else {
						var temp = "No Data"
						var Time = "Time"
					}
					if (data.createTime != null) {
						var currDate = data.createTime.split(" ")[0]
					}
					str += '<div class="sub_detail_content"><h3>' + data.title + '</h3><div class="sub_date"><span>' + Time +
						':</span><i>' + currDate + '</i>'
					str += '</div><p>' + content + '</p></div>'

				}

			}
			$(desDom).empty()
			desDom.append(str)


		}
	})
}
//心灵驿站
function jzg_xspj_list(type) {
	$.ajax({
		url: baseUrl + "sys/schlife/reward/list",
		type: "POST",
		data: {
			language: 1,
			type: type,
		},
		success: function (res) {
			// console.log("心灵驿站")
			// console.log(res)
			let desDom = $("#jzpu_sub_b .right_view .sub_content>ul")
			if (res.code === 0) {

				var data = res.page.list
				var str = ""
				if (sessionStorage.getItem("CNtoEn") == 1) {
					crumb = "心灵驿站"
				} else {
					crumb = "Student MindStation"
				}
				if (data.length !== 0) {

					data.forEach(function (item, index) {
						var time = ""
						var title = ""
						let crumb = ""

						if (item.standby != "") {
							title = item.standby

						}
						if (item.createTime != null) {
							time = item.createTime.split(" ")[0]
						}
						if (item.date != null) {
							var currDate = item.date.split(" ")[0]
						}
						str +=
							'<li data-id="jzpu_sub_a_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix" onclick="jzg_jzpy_info(' +
							item.id + ',' + crumb + ')"><span>' + title + '</span><i>' + time + '</i></li>'
					})

					desDom.html(str)
				} else {

					let crumb = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						crumb = "心灵驿站"
						var temp = "暂无数据"
					} else {
						crumb = "Student MindStation"
						var temp = "No data"
					}

					str += '<li class="kxyj_sub_a_0_item  sub_info_mange " ><span>' + temp + '</span><i></i></li>'
					desDom.html(str)
				}


			}



		}
	})
}
//心理咨询师
function jzg_jzpywj_list(type) {
	$.ajax({
		url: baseUrl + "sys/schlife/reward/list",
		type: "POST",
		data: {
			language: 1,
			type: type,
		},
		success: function (res) {
			// console.log("心理咨询师")
			// console.log(res)
			let desDom = $("#jzpu_sub_c .right_view .sub_content>ul")
			if (res.code === 0) {

				var data = res.page.list
				var str = ""
				if (sessionStorage.getItem("CNtoEn") == 1) {
					crumb = "心理咨询师"
				} else {
					crumb = "Award system document"
				}
				if (data.length !== 0) {

					data.forEach(function (item, index) {
						var time = ""
						var title = ""
						let crumb = ""

						if (item.standby != "") {
							title = item.standby

						}
						if (item.createTime != null) {
							time = item.createTime.split(" ")[0]
						}
						if (item.date != null) {
							var currDate = item.date.split(" ")[0]
						}
						str +=
							'<li data-id="jzpu_sub_a_1" class="kxyj_sub_a_0_item  sub_info_mange  clearfix" onclick="jzg_jzpy_info(' +
							item.id + ',' + crumb + ')"><span>' + title + '</span><i>' + time + '</i></li>'
					})

					desDom.html(str)
				} else {

					let crumb = ""
					if (sessionStorage.getItem("CNtoEn") == 1) {
						crumb = "心理咨询师"
						var temp = "暂无数据"
					} else {
						crumb = "Award system document"
						var temp = "No data"
					}

					str += '<li class="kxyj_sub_a_0_item  sub_info_mange " ><span>' + temp + '</span><i></i></li>'
					desDom.html(str)
				}


			}



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
						// // // console.log("反显")
						// // // console.log('.' + tempArr[0] + tempArr[1])
						if (tempArr[0] == "two") {
							// // // console.log($('.' + tempArr[0] + 'Step'))
							$('.' + tempArr[0] + 'Step').eq(tempArr[1]).trigger("click")
						} else {
							// // console.log('三级层级以上' + tempArr[0])
							// // console.log($('.' + tempArr[0]))
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
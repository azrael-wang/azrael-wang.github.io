$(function () {

	login()
	blurrySreach()
	//设置中英文切换静态资源变量默认中文
	if (!sessionStorage.getItem("CNtoEn")) {
		sessionStorage.setItem("CNtoEn", "1")

	}
})
//底部静态资源中英文切换
var footLanObj = {
	'cn': ["首页", "研院概况", "学生", "研究生教育", "教职工", "科学研究", "来访人员", "校园生活", "招聘", "信息服务", "内部系统", "办公系统", "邮箱登录", "学院地图", "招标公告", "官方微信", "联系我们"],
	'en': ["Home", "Education", "Student", "Student MGT", "Faculty", "Research", "Alumni", "Student Activities", "Recruitment", "Service", "Internal", "Office", "Login", "Map", "Announcement", "WeiChat", "Weibo", "contact us"],
	"bLinkCn": ["友情链接:", "中国工程物理研究院 |","北京计算科学研究中心 |", "北京高压科学研究中心 |", "", "北京应用物理与计算数学研究所", "© CopyRight 2017 -ICP备案证号：京ICP备17010163号"],
	"bLinkEn": ["Link:", "China Academy of Engineering Physics |", "High Voltage Research Center |", "Beijing Computing Science Research Center |", "Chinese Academy of Talents Recruitment Network |", "China Institute of Applied Physics and Mathematical Computing", "© CopyRight 2017 -ICP备案证号：京ICP备17010163号"],
}

bannerRender(languageStatus)
//banner导航栏渲染
function bannerRender(language) {
	$.ajax({
		type: "POST",
		url: baseUrl + "sys/sysmenu/list",
		data: {
			language: language,
		},
		success: function (res) {
			let navLists = res.page;
			// // // console.log("导航list")
			// // // console.log(navLists)
			CreateNavDom(navLists)
			my_scroll()

		},
		error: function (res) {
			// // console.log("err")
			// // console.log(res)
		}
	})
}
//拼接nav_doem_节点副本
function CreateNavDom(res) {
	// // // console.log("引文")
	// // // console.log(res)
	var obj = {}
	var arr = []
	var navMenu = []
	//拼接假数据传给导航的详情页面
	var subObj = {}
	if (languageStatus == 1) {
		for (var i = 0; i < res.length; i++) {
			arr.push(res[i].name)
			obj[res[i].name] = res[i].menu
		}
		for (key in obj) {
			subObj[key] = []
			if (obj[key].length != 0) {
				obj[key].forEach(function (item, index) {
					subObj[key].push(item.name)

				})
			}
		}
	} else if (languageStatus == 0) {
		for (var i = 0; i < res.length; i++) {
			arr.push(res[i].ename)
			obj[res[i].ename] = res[i].menu
		}
		for (key in obj) {
			subObj[key] = []
			if (obj[key].length != 0) {
				obj[key].forEach(function (item, index) {
					subObj[key].push(item.ename)

				})
			}
		}


	}
	//子页面传递数据拼接
	res.forEach(function (item, index) {
		navMenu.push({
			"name": item.name,
			"ename": item.ename,
			"menuId": item.menuId
		})

	})


	//渲染首页父级导航
	var con = $("a[name='navname']")
	$(con).each(function (index, item) {
		$(item).text(arr[index])

		if (arr[index] == "官网首页" || arr[index] == "Home") {
			$(item).attr("href", "../index.html")
		} else {
			$(item).attr("href", '../subPage/menu.html?prevName=' + navMenu[index].name + '&prevEname=' + navMenu[index].ename + '&menuId=' + navMenu[index].menuId + '')
		}


	})
	subMenu(subObj, arr)

}
//设置子菜单内容
function subMenu(obj, arr) {

	var aaa = {
		"官网首页": "../index.html",
		"研院概况": "../subPage/menu_lsyg.html",
		"科学研究": "../subPage/kxyj.html",
		"研究生教育": "../subPage/jyjx.html",
		"校园生活": "../subPage/xiaoyuansh.html",
		"信息服务": '../subPage/infro_sverver.html'
	}
	var bbb = {
		"Home": "../index.html",
		"About": "../subPage/menu_lsyg.html",
		"Research": "../subPage/kxyj.html",
		"Education": "../subPage/jyjx.html",
		"School Life": "../subPage/xiaoyuansh.html",
		"Information": '../subPage/infro_sverver.html'
	}

	//渲染图像
	var content = {
		"aboutCn": "通过科教协同，建设特色明显、水平一流的研究生院，服务于国家和中物院长远战略发展。",
		"aboutEn": "Through the integration of science and education, the scientific research ability of the backbone of the Chinese Academy of Sciences will be promoted.",
		"mainCn": "一、实施特色定制、有国家目标牵引的研究生教育；二、面向国家战略需求和学科前沿，开展完全开放的基础研究。；三、通过科教融合，促进中物院骨干队伍科研能力的提升。",
		"mainEn": "First, the implementation of specialization, graduate education with national goals; Second, for the national strategy and the frontier of the discipline, to carry out a fully open basic research; Third, through the integration of science and education, to promote the scientific research capabilities of the backbone of the Chinese Academy of Sciences.",
		"cn": "实施特色定制、有国家目标牵引的研究生教育。",
		"en": "Implement postgraduate education with customized features and national target traction.",
		"schoollifCn": "丰富多彩的校园生活是校园精神文明建设的重要组成部分，是高素质人才培养的重要途径。",
		"kexueyanjiuCn": "面向国家战略需求和学科前沿，开展完全开放的基础研究。",
		"kexueyanjiuEn": "Facing the national strategy and the frontier of the discipline, carry out basic research that is completely open.",
		"schoollifEn": "Colorful campus life is an important part of the construction of campus spiritual civilization and an important way to train high-quality talents.",
		"infoSeverCn": '建院以来，几代中物院人在创造两弹伟业的过程中，凝聚和培养了以两弹精神为核心、科研文化为主题的组织文化理念。',
		"infoSeverEn": 'Since the establishment of the Academy, in the process of creating two great achievements, the Chinese people of several generations have united and cultivated the organizational culture concept with the spirit of two bombs as the core and scientific research culture as the theme.',
	}
	$("#navMain_nav>ul>li").on("mouseenter", function () {
		$("#navShow .content").empty()
		$("#navShow").fadeIn()
		var key = $(this).text()
		if (key == "官网首页" || key == "Home") {

			var str = "<h2>" + key + "</h2>"
			str += "<span>" + (languageStatus == 1 ? content['mainCn'] : content['mainEn']) + "</span>"
			str += '<div id="nav_sub">'
			str += '<ul class="clearfix">'
			if (languageStatus == 1) {

				$(obj[key]).each(function (index, item) {


					str += '<li><a href="../index.html#mainPage$' + (index + 1) + '">' + item + '</a></li>'
				})

			} else if (languageStatus == 0) {

				$(obj[key]).each(function (index, item) {

					str += '<li><a href="../index.html#mainPage$' + (index + 1) + '">' + item + '</a></li>'
				})
			}


			str += "</ul></div>"
			$("#navShow .content").append($(str))
			var index = arr.indexOf(key)
			if (index !== -1) {
				$("#navShow .titimg").css({
					"background": 'url("../img/headerNav' + (index + 1) + '.png")',
					"background-size": "100% 100%",
				})
			}
		} else {
			switch (true) {
				case key == "信息服务" || key == "Information":
					var str = '<h2>' + key + '</h2><span>' + (languageStatus == 1 ? content["infoSeverCn"] : content["infoSeverEn"]) + '</span><div id="nav_sub"><ul class="clearfix">'
					break;
				case key == "科学研究" || key == "Research":
					var str = '<h2>' + key + '</h2><span>' + (languageStatus == 1 ? content["kexueyanjiuCn"] : content["kexueyanjiuEn"]) + '</span><div id="nav_sub"><ul class="clearfix">'
					break;
				case key == "校园生活" || key == "School Life":
					var str = '<h2>' + key + '</h2><span>' + (languageStatus == 1 ? content["schoollifCn"] : content["schoollifEn"]) + '</span><div id="nav_sub"><ul class="clearfix">'
					break;
				case key == "研院概况" || key == "About":
					var str = '<h2>' + key + '</h2><span>' + (languageStatus == 1 ? content["aboutCn"] : content["aboutEn"]) + '</span><div id="nav_sub"><ul class="clearfix">'
					break;
				default:
					var str = '<h2>' + key + '</h2><span>' + (languageStatus == 1 ? content["cn"] : content["en"]) + '</span><div id="nav_sub"><ul class="clearfix">'
			}
			if (languageStatus == 1) {

				$(obj[key]).each(function (index, item) {


					str += '<li><a href="' + aaa[key] + '?index=' + index + '">' + item + '</a></li>'
				})

			} else if (languageStatus == 0) {

				$(obj[key]).each(function (index, item) {

					str += '<li><a href="' + bbb[key] + '?index=' + index + '">' + item + '</a></li>'
				})
			}


			str += "</ul></div>"
			$("#navShow .content").html($(str))
			var index = arr.indexOf(key)
			if (index !== -1) {
				$("#navShow .titimg").css({
					"background": 'url("../img/headerNav' + (index + 1) + '.png")',
					"background-size": "100% 100%",
				})
			}



		}

		$(".bottomLine").fadeIn(300)

	})
	$(".nav-wrapper").on("mouseleave", function () {
		// $(this).css({
		// 	display:"none"
		// })
		$("#navShow").fadeOut()
		$(".bottomLine").fadeOut(300)
	})
	$("#navShow").on("mouseleave", function () {
		// $(this).css({
		// 	display:"none"
		// })
		$("#navShow").fadeOut()
		$(".bottomLine").fadeOut(300)
	})


}

// scroll 动画
function my_scroll() {
	pos = 0;
	window.addEventListener("scroll", function (e) {

		scrollTop = $(window).scrollTop();
		if (scrollTop > 50) {
			$('.header').addClass('current');
			$('.current').find('.topWrap').css({
				display: 'none'
			}).stop().animate({
				top: "-400px"
			}, 200);
			$(".main_logo").css({
				display: 'none'
			})
			$(".bx-wrapper").css({
				height: 0,

			})
			$("#logo_img").css({
				'transform': 'scale(0.4)',
				"transition": "all 0.3s ease 0s"
			})
			$("#header .navMain .main_logo_botton>img").css({
				width: 0
			})
			$("#navShow").css({
				top: "60px",
			})
		}
		if (scrollTop < 50) {
			$('.header').removeClass('current');
			$("#logo_img").css({
				'transform': 'scale(1)',
				"transition": "all 0.3s ease 0s"
			})
			$('.topWrap').css({
				display: 'block'
			}).stop().animate({
				top: 0
			}, 200);
			$(".main_logo").css({
				display: 'none'
			})
			$(".bx-wrapper").css({
				height: "460px",
			})
			$("#header .navMain .main_logo_botton>img").css({
				width: "168px"
			})
			$("#navShow").css({
				top: "100px",
			})
		}
	});
}

//二维码
$(".footer_right i")
	.on("mouseenter", function () {
		var index = $(this).data("id")
		$("#" + index).fadeIn(200)
	})
	.on("mouseleave", function () {
		var index = $(this).data("id")
		$("#" + index).fadeOut(200)
	})
//hover bottomLine
//获取元素宽度 然后获取元素距离屏幕的位置进行定位 在css中加上渐变效果实现hover移动效果
$("#navMain_nav").hover(function () {}, function () {
	//设置下标初始位置
	// $(".bottomLine").css("width",parseFloat($(".selectedNav").eq(0).width()-48)+"px");
	// $(".bottomLine").css("left",parseFloat($(".selectedNav").eq(0)[0].offsetLeft+ 25)+"px");	
})
//通过this获取当前元素的坐标后，给下标赋值 在css中设置渐变动画达到动画效果
$("#navMain_nav>ul>li").hover(function () {
	$(".bottomLine").css("width", parseFloat($(this).width() - 48) + "px");
	$(".bottomLine").css("left", parseFloat($(this)[0].offsetLeft + 25) + "px");
});
//当点击的时候改变下标的宽度
$("#navMain_nav>ul>li").on("click", function () {
	$(".nav li").removeClass("selectedNav");
	$(this).addClass("selectedNav");
	$(".bottomLine").css("width", parseFloat($(this).width()) + "px");
	$(".bottomLine").css("left", parseFloat($(this)[0].offsetLeft) + "px");
})


//登录效果
function login() {

	var islogin = sessionStorage.getItem("islogin")
	// // // console.log(islogin)
	//底部静态导航dom
	var footStcNav = $(".fooer_wrap .footer a[name='footCNEN']")
	//底部友情链接dom
	var footLink = $(".copyrightWrap .copyright a[name = bottomLinks]")

	var strRight = ""

	var strLeftCn = '<li><a href="../subPage/xsTongzhi.html" >学生</a></li><li><a href="../subPage/jiaozhigongTongzhi.html" >教职工</a></li><li><a href="../subPage/menu.html?prev=Alumnus" >来访人员</a></li><li><a href="../subPage/zhaopin.html" >招聘</a></li>'
	var strLeftEn = '<li><a href="../subPage/xsTongzhi.html"" >Student</a></li><li><a href="../subPage/jiaozhigongTongzhi.html" >Teacher</a></li><li><a href="../subPage/menu.html?prev=Alumnus" >Alumnus</a></li><li><a href="../subPage/zhaopin.html" >Recruit</a></li>'

	var login_dom = $("#header_login_item")
	//获取中英文切换字段
	var CNtoEN = sessionStorage.getItem("CNtoEn")
	// // // console.log("CNtoEN")
	// // // console.log(CNtoEN)

	if (CNtoEN == 1) {


		if (islogin == 1) {

			strRight += '<li><a href="../subPage/Homepage.html"><span>个人主页</span></a></li><li><a href="#"  onclick="logOut()"><span>退出</span></a></li><li><a href="#"  ><span onclick="StaticCNtoEN()">English</span></a></li>'
			$(login_dom).prepend($(strRight))
			$("#header_login_item li:first-child").css({
				"margin-left": "105px"
			})
			$("#header_login_left").append($(strLeftCn))

			//底部静态资源中英文切换之中文
			$(footStcNav).each(function (index, item) {
				$(item).text(footLanObj["cn"][index])
			})
			//底部链接中英文切换之中文
			$(footLink).each(function (index, item) {
				$(item).text(footLanObj["bLinkCn"][index])
			})


		} else {

			// strRight += '<li><a href="../subPage/login.html" ><span>登录</span></a></li><li><a href="#"  ><span onclick="StaticCNtoEN()">English</span></a></li>'
			strRight += '<li><a href="http://mail.gscaep.ac.cn" ><span >邮箱登陆</span></a></li><li><a href="http://oa.gscaep.ac.cn" ><span >办公系统</span></a></li><li><a href="#"  ><span onclick="StaticCNtoEN()">English</span></a></li>'
			$(login_dom).prepend($(strRight))
			$("#header_login_item li:first-child").css({
				"margin-left": "110px"
			})
			$("#header_login_left").append($(strLeftCn))
		}

		//底部静态资源中英文切换之中文
		$(footStcNav).each(function (index, item) {
			$(item).text(footLanObj["cn"][index])
		})
		//底部链接中英文切换之中文
		$(footLink).each(function (index, item) {
			$(item).text(footLanObj["bLinkCn"][index])
		})


	} else {
		// // console.log("非中文")
		// // console.log(strLeftEn)
		if (islogin == 1) {

			strRight += '<li><a href="../subPage/Homepage.html"><span>HomePage</span></a></li><li><a href="#"  onclick="logOut()"><span>LogOut</span></a></li><li><a href="#"  ><span onclick="StaticCNtoEN()">中文</span></a></li>'
			$(login_dom).prepend($(strRight))
			$("#header_login_item li:first-child").css({
				"margin-left": "75px"
			})
			$("#header_login_left").append($(strLeftEn))



			//底部静态资源中英文切换之英文
			$(footStcNav).each(function (index, item) {
				$(item).text(footLanObj["en"][index])
			})
			//底部链接中英文切换之英文
			$(footLink).each(function (index, item) {
				$(item).text(footLanObj["bLinkEn"][index])
			})
			$('.copyrightWrap').css({
				"height": "80px"
			})
			$('.copyrightWrap .copyright a:last-child').css({
				"display": "inline-block",
				"width": "350px"
			})


		} else {

			// strRight += '<li><a href="../subPage/login.html" ><span>Login</span></a></li><li><a href="#"  ><span onclick="StaticCNtoEN()">中文</span></a></li>'
			strRight += '<li><a href="http://mail.gscaep.ac.cn" ><span >Mail</span></a></li><li><a href="http://oa.gscaep.ac.cn" ><span >OAsystem</span></a></li><li><a href="#"  ><span onclick="StaticCNtoEN()">中文</span></a></li>'
			$(login_dom).prepend($(strRight))
			$("#header_login_item li:first-child").css({
				"margin-left": "120px"
			})
			$("#header_login_left").append($(strLeftEn))



			//底部静态资源中英文切换之英文
			$(footStcNav).each(function (index, item) {
				$(item).text(footLanObj["en"][index])
			})
			//底部链接中英文切换之英文
			$(footLink).each(function (index, item) {
				$(item).text(footLanObj["bLinkEn"][index])
			})
			$('.copyrightWrap').css({
				"height": "80px"
			})
			$('.copyrightWrap .copyright a:last-child').css({
				"display": "inline-block",
				"width": "350px"
			})
		}



	}



}
//底部bannerinfo
function down_banner() {
	$.ajax({
		url: baseUrl + "sys/banner/bannerdowninfo",
		data: {
			language: 1
		},
		type: "POST",
		success: function (res) {
			// // console.log("res__________")
			// // console.log(res)

		}
	})
}

//退出处理函数
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
				location.href = " ../index.html"
			}
		},
	})

}

//静态资源中文切换
function StaticCNtoEN() {
	var CNtoEN = sessionStorage.getItem("CNtoEn")
	// // console.log(CNtoEN)
	if (CNtoEN === "1") {

		sessionStorage.setItem("CNtoEn", 0)
	} else {
		sessionStorage.setItem("CNtoEn", 1)

	}
	window.history.go(0)
}

//搜索函数
function blurrySreach() {
	var oldKeyWord = ""
	var currLen = 0
	$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	$('input[type=search]').keydown(function (event) {
		var keyWord = $(this).val()
		var _that = this
		//监听回车事件
		if (event.keyCode === 13) {
			//如果关键字空停止
			if (keyWord === "") {
				return
			} else {

				// // console.log(keyWord)
				//不会空进行搜索 搜索a标签内容为关键子的字符，返回值为匹配内容的字段
				var keyWordLen = $("a:contains(" + keyWord + ")").length
				//搜索有结果继续
				if (keyWordLen > 0) {
					if (oldKeyWord == keyWord) {
						currLen = currLen % keyWordLen;
					} else {
						currLen = 0;
					}
					$body.animate({
						scrollTop: $("a:contains(" + keyWord + "):eq(" + currLen + ")").offset().top
					}, 5);
					$("a:contains(" + keyWord + "):eq(" + currLen + ")").css({
						color: "#f39c12"
					})
					currLen = currLen + 1;
					oldKeyWord = keyWord;
				} else {
					currLen = 0;
					oldKeyWord = "";
				}

			}


		}


	})
}
//中英文切换
if (sessionStorage.getItem("CNtoEn") == 1) {
	//中文
	$('title').text("中国工程物理研究院研究生院")

} else {
	//英文
	$('title').text("Graduate School of China Academy of Engineering Physics")


}
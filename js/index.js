(function($) {
	var BrowserVersion = IEVersion()
	if (BrowserVersion != -1 && BrowserVersion < 9) {
		layer.msg("您的IE浏览器版本过低请升级至IE11推荐使用谷歌Chrome浏览器", {
			"icon": 5,
			"time": 6000
		})
	}
	var _this_ = this;
	var init = function(options) {
		var vokeIndex = options.invoke;
		var objName = options.name;
		var oBj = $(objName);
		var behav = options.behavior;
		var effect = options.effect;
		var tabLi = oBj.find('.tab-nav li');
		var tabCon = oBj.find('.content-wrap .content-item');
		var time = options.time;
		invokeCheck(vokeIndex, oBj); //显示第几个检测
		behaviorCheck(oBj, behav); //行为检测	
		if (time) {
			var timer = null;
			autoPlay(options) //自动切换
			oBj.find('.tab-nav li').hover(function() {

				window.clearInterval(timer);

			}, function() {
				autoPlay(options)
			})
		}

		function autoPlay(options) {
			var tabLi = oBj.find('.tab-nav li');
			var tabCon = oBj.find('.content-wrap .content-item');
			var loop = vokeIndex;
			tabliLength = tabLi.size();
			timer = window.setInterval(function() {
				loop++;
				if (loop >= tabliLength) {
					loop = 0;
				}
				fadeBe(oBj, loop)
			}, time)
		}

		function effectCheck(oBj, vokeIndex) {
			if (effect === 'fade') {
				fadeBe(oBj, vokeIndex)
			} else if (effect === 'default' || effect != 'fade') {
				invokeCheck(vokeIndex, oBj);
			}
		}

		function behaviorCheck(oBj, behav) {
			if (behav === 'click') {
				clickFun(oBj);
			} else if (behav === 'mouseover' || behav != 'click') {
				hoverFun(oBj);
			}
		};

		function clickFun(oBj) {
			oBj.find('.tab-nav li').on('click', function() {
				var vokeIndex = $(this).index();
				effectCheck(oBj, vokeIndex); //切换效果检测
			})
		};

		function hoverFun(oBj) {
			oBj.find('.tab-nav li').on('mouseover', function() {
				var vokeIndex = $(this).index();
				effectCheck(oBj, vokeIndex); //切换效果检测
			})
		}

		function fadeBe(oBj, vokeIndex) {
			var tabLi = oBj.find('.tab-nav li');
			var tabCon = oBj.find('.content-wrap .content-item');
			tabLi.eq(vokeIndex).addClass('actived').siblings().removeClass('actived');
			tabCon.eq(vokeIndex).fadeIn().siblings().fadeOut();
		}

		function invokeCheck(vokeIndex, oBj) {
			var tabLi = oBj.find('.tab-nav li');
			var tabCon = oBj.find('.content-wrap .content-item');
			tabLi.eq(vokeIndex).addClass('actived').siblings().removeClass('actived');
			tabCon.eq(vokeIndex).addClass('current').siblings().removeClass('current');
		}
	};

	$.fn.tabChange = function(options) {
		init(options);
	}
})(jQuery)
var banner_nav_prev = ""

//学术讲座分页
//分页参数对象学术讲座
let options = {
	"id": "page", //显示页码的元素
	"data": null, //显示数据
	"maxshowpageitem": 3, //最多显示的页码个数
	"pagelistcount": 4, //每页显示数据个数
	"callBack": function(result) {
		week = {
			"星期一": "Monday",
			"星期二": "Tuesday",
			"星期三": "Wednesday",
			"星期四": "Thursday",
			"星期五": "Friday",
			"星期六": "Saturday",
			"星期日": "Sunday"
		}
		var cHtml = "";
		for (var i = 0; i < result.length; i++) {
			var content = ""
			if (result[i].standby != null) {
				content += result[i].standby.replace(/&amp;nbsp;/g, "&#10;")
			}

			if (sessionStorage.getItem("CNtoEn") == 0) {

				result[i].weekday = week[result[i].weekday]
			}
			var titleTime = ""
			if (result[i].date != null) {
				titleTime = result[i].date.split(" ")[0]
			}
			if (result[i].type == 268) {
				cHtml += '<li><a href=./subPage/sxhyInfo.html?id=' + result[i].standby1 + ' title=' + result[i].name +
					'><div class="weekdata"><p class="week">' + result[i].weekday +
					'</p><p class="date">' + result[i].sdate +
					'</p></div><div class="items-list"><p class="title">' + result[i].name +
					'</p><p class="introl">' + content + '</p></div></a></li>';
			} else {
				cHtml += '<li><a href=./subPage/xsjz_info.html?id=' + result[i].id + ' title=' + result[i].name +
					'><div class="weekdata"><p class="week">' + result[i].weekday +
					'</p><p class="date">' + result[i].sdate +
					'</p></div><div class="items-list"><p class="title">' + result[i].name +
					'</p><p class="introl">' + content + '</p></div></a></li>';
			}

			//处理数据
		}

		$(".demoContent1").html(cHtml); //将数据增加到页面中


	}
};
//底部静态资源中英文切换   官方微博去掉
let footLanObj = {
	'cn': ["首页", "研院概况", "学生", "研究生教育", "教职工", "科学研究", "来访人员", "校园生活", "招聘", "信息服务", "内部系统", "办公系统", "邮箱登录", "学院地图",
		"招标公告", "官方微信", "联系我们"
	],
	'en': ["Home", "Education", "Student", "Student MGT", "Faculty", "Research", "Alumni", "Student Activities",
		"Recruitment", "Service", "Internal", "Office", "Login", "Map", "Announcement", "WeiChat", "Weibo", "contact us"
	],
	"bLinkCn": ["友情链接:", "中国工程物理研究院 |", "北京计算科学研究中心 |", "北京高压科学研究中心 |", "", "北京应用物理与计算数学研究所",
		"© CopyRight 2017 -ICP备案证号：京ICP备17010163号"
	],
	"bLinkEn": ["Link:", "China Academy of Engineering Physics |", "High Voltage Research Center |",
		"Beijing Computing Science Research Center |", "Chinese Academy of Talents Recruitment Network |",
		"China Institute of Applied Physics and Mathematical Computing", "© CopyRight 2017 -ICP备案证号：京ICP备17010163号"
	],
	"TitleCn": ["新闻资讯", "活动日历", "学术讲座", "通知公告", "专题网站", "教育科研", "学生活动", "两弹元勋"],
	"TitleEn": ["&nbsp;&nbsp;&nbsp;News", "Event calendar", "Academic talk", "Announcement", "Special website",
		"Education", "Activities", "TwoBombs"
	]
}
//页面渲染
$(function() {
	//基准url


	//加载页面数据
	load()
	//登录导航渲染
	login()
	//页面加载函数
	function load() {
		//设置中英文切换静态资源变量默认中文
		if (!sessionStorage.getItem("CNtoEn")) {
			sessionStorage.setItem("CNtoEn", "1")

		}
		//主页埋点
		bury(1)

		//头部菜单
		bannerRender(languageStatus);
		//banner数据渲染
		bannerList(languageStatus)
		//新闻资讯
		newList(languageStatus);
		//教育科研数据
		educationData(languageStatus);
		//校园生活
		schoolLife(languageStatus);
		//信息服务
		infoList(languageStatus);
		//网站服务
		websiteList(languageStatus);
		//学术讲座
		paging(languageStatus)
		//通知公告
		noticeList(languageStatus)
		//底部banner请求执行
		down_banner(languageStatus)
		//上来掉一次my_scroll
		my_scroll()
		//搜索
		blurrySreach()

	}
	//banner导航栏渲染
	function bannerRender(language) {
		$.ajax({
			type: "POST",
			url: baseUrl + "sys/sysmenu/list",
			data: {
				language: language
			},
			success: function(res) {
				let navLists = res.page;
				// console.log("导航list")
				// console.log(navLists)
				CreateNavDom(navLists, language)

				my_scroll()
				banner_hover()
			},
			error: function(res) {
				// console.log("err")
				// console.log(res)
			}
		})
	}
	//轮播图渲染
	function bannerList(language) {

		$.ajax({
			type: "POST",
			url: baseUrl + "sys/banner/list",
			data: {
				language: language,
				currpage: 1,
				pageSize: 10,
			},
			success: function(res) {
				if (res.code == 0) {
					let data = res.page.list;
					var sliderStr = ""
					var slideSelectorsStr = ""
					$(data).each(function(index, item) {
						sliderStr += "<div class = 'item item" + (index + 1) + "'>"
						sliderStr += "<div class = 'inner'>"
						sliderStr += "<img class='bannerImg' src = '" + item.content + "' data-href='" + item.standby + "'/>"
						sliderStr += "</div></div>"
						slideSelectorsStr += "<div class = 'item " + (index == 0 ? "selected" : "") + "'></div> "

					})
					$("#banner_list_item").append($(sliderStr))
					$("#slideSelectors").append($(slideSelectorsStr))

					$('.iosSlider').iosSlider({
						desktopClickDrag: true,
						snapToChildren: true,
						infiniteSlider: true,
						snapSlideCenter: true,
						navSlideSelector: '.sliderContainer .slideSelectors .item',
						navPrevSelector: '.sliderContainer .slideSelectors .prev',
						navNextSelector: '.sliderContainer .slideSelectors .next',
						onSlideComplete: slideComplete,
						onSliderLoaded: sliderLoaded,
						onSlideChange: slideChange,
						autoSlide: true,
						scrollbar: true,
						scrollbarContainer: '.sliderContainer .scrollbarContainer',
						scrollbarMargin: '0',
						scrollbarBorderRadius: '0',
						keyboardControls: true
					});
					//删除demo标签
					$(".iosSlider i").remove()
					$('.bannerImg').on('click', function(event) {
						// console.log("执行了")
						// console.log(event)
						var href = event.currentTarget.dataset.href
						// console.log(href)
						// console.log(typeof(href))
						if (href != null && href.trim() != '' && href != 'null') {
							window.open(href)
						}
						return false
					})
				}

			},
			error: function(res) {
				// console.log("err")
				// console.log(res)
			}
		})
	}
	//公共事件
	//拼接nav_doem_节点副本
	function CreateNavDom(res, language) {
		var obj = {}
		var arr = []
		var navMenu = []
		//拼接假数据传给导航的详情页面
		var subObj = {}

		if (language == 1) {
			for (var i = 0; i < res.length; i++) {

				arr.push(res[i].name)
				obj[res[i].name] = res[i].menu
			}
			for (key in obj) {
				subObj[key] = []
				if (obj[key].length != 0) {
					obj[key].forEach(function(item, index) {
						subObj[key].push(item.name)

					})
				}
			}
		} else if (language == 0) {
			for (var i = 0; i < res.length; i++) {
				arr.push(res[i].ename)
				obj[res[i].ename] = res[i].menu
			}
			for (key in obj) {
				subObj[key] = []
				if (obj[key].length != 0) {
					obj[key].forEach(function(item, index) {
						subObj[key].push(item.ename)

					})
				}
			}


		}
		// // console.log("ppppppp")
		// // console.log(obj)
		// // console.log(arr)
		// // console.log(navMenu)
		// // console.log(subObj)
		//子页面传递数据拼接
		res.forEach(function(item, index) {
			navMenu.push({
				"name": item.name,
				"ename": item.ename,
				"menuId": item.menuId
			})

		})
		// console.log("子页面资源")

		// console.log(navMenu)
		//渲染首页父级导航
		var con = $("a[name='navname']")
		$(con).each(function(index, item) {
			$(item).text(arr[index])

			if (arr[index] == "官网首页" || arr[index] == "Home") {
				$(item).attr("href", "./index.html")
			} else {
				$(item).attr("href", './subPage/menu.html?prevName=' + navMenu[index].name + '&prevEname=' + navMenu[index].ename +
					'&menuId=' + navMenu[index].menuId + '')
			}




		})
		subMenu(subObj, arr, language)

	}
	//设置子菜单内容
	function subMenu(obj, arr, language) {

		var aaa = {
			"官网首页": "./index.html",
			"研院概况": "./subPage/menu_lsyg.html",
			"科学研究": "./subPage/kxyj.html",
			"研究生教育": "./subPage/jyjx.html",
			"校园生活": "./subPage/xiaoyuansh.html",
			"信息服务": './subPage/infro_sverver.html'
		}
		var bbb = {
			"Home": "./index.html",
			"About": "./subPage/menu_lsyg.html",
			"Research": "./subPage/kxyj.html",
			"Education": "./subPage/jyjx.html",
			"School Life": "./subPage/xiaoyuansh.html",
			"Information": './subPage/infro_sverver.html'
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
		$("#navMain_nav>ul>li").on("mouseenter", function() {
			$("#navShow .content").empty()
			$("#navShow").fadeIn()
			var key = $(this).text()
			if (key == "官网首页" || key == "Home") {

				var str = "<h2>" + key + "</h2>"
				str += "<span>" + (language == 1 ? content['mainCn'] : content['mainEn']) + "</span>"
				str += '<div id="nav_sub">'
				str += '<ul class="clearfix">'
				if (language == 1) {

					$(obj[key]).each(function(index, item) {
						if (item == "专题网站") {
							str += '<li><a href="#mainPage' + 6 + '">' + item + '</a></li>'
						} else {
							str += '<li><a href="#mainPage' + (index + 1) + '">' + item + '</a></li>'
						}

					})

				} else if (language == 0) {

					$(obj[key]).each(function(index, item) {

						// console.log(item)
						if (item == "Subject Web") {
							str += '<li><a href="#mainPage' + 6 + '">' + item + '</a></li>'
						} else {
							str += '<li><a href="#mainPage' + (index + 1) + '">' + item + '</a></li>'
						}
					})
				}


				str += "</ul></div>"
				$("#navShow .content").append($(str))
				var index = arr.indexOf(key)
				if (index !== -1) {
					$("#navShow .titimg").css({
						"background": 'url("./img/headerNav' + (index + 1) + '.png")'
					})
				}
			} else {

				// console.log(key)

				switch (true) {
					case key == "信息服务" || key == "Information":
						var str = '<h2>' + key + '</h2><span>' + (language == 1 ? content["infoSeverCn"] : content["infoSeverEn"]) +
							'</span><div id="nav_sub"><ul class="clearfix">'
						break;
					case key == "科学研究" || key == "Research":
						var str = '<h2>' + key + '</h2><span>' + (language == 1 ? content["kexueyanjiuCn"] : content["kexueyanjiuEn"]) +
							'</span><div id="nav_sub"><ul class="clearfix">'
						break;
					case key == "校园生活" || key == "School Life":
						var str = '<h2>' + key + '</h2><span>' + (language == 1 ? content["schoollifCn"] : content["schoollifEn"]) +
							'</span><div id="nav_sub"><ul class="clearfix">'
						break;
					case key == "研院概况" || key == "About":
						var str = '<h2>' + key + '</h2><span>' + (language == 1 ? content["aboutCn"] : content["aboutEn"]) +
							'</span><div id="nav_sub"><ul class="clearfix">'
						break;
					default:
						var str = '<h2>' + key + '</h2><span>' + (language == 1 ? content["cn"] : content["en"]) +
							'</span><div id="nav_sub"><ul class="clearfix">'
				}
				if (language == 1) {

					$(obj[key]).each(function(index, item) {

						str += '<li><a href="' + aaa[key] + '?index=' + index + '">' + item + '</a></li>'
					})

				} else if (language == 0) {

					$(obj[key]).each(function(index, item) {


						str += '<li><a href="' + bbb[key] + '?index=' + index + '">' + item + '</a></li>'
					})
				}


				str += "</ul></div>"
				$("#navShow .content").append($(str))
				var index = arr.indexOf(key)
				if (index !== -1) {
					$("#navShow .titimg").css({
						"background": 'url("./img/headerNav' + (index + 1) + '.png")',
						"background-size": "100% 100%",
					})
				}



			}


			$(".bottomLine").fadeIn(300)

		})
		$(".nav-wrapper").on("mouseleave", function() {

			$("#navShow").fadeOut()
			$(".bottomLine").fadeOut(300)
		})
		$("#navShow").on("mouseleave", function() {

			$("#navShow").fadeOut()
			$(".bottomLine").fadeOut(300)
		})


	}
	// 头部scroll 动画
	function my_scroll() {
		pos = 0;
		window.addEventListener("scroll", function(e) {

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
					"margin-top": "60px",
				})
				$("#header .navMain .main_logo_botton>img").css({
					width: 0
				})
				$("#logo_img").css({
					'transform': 'scale(0.4)',
					"transition": "all .3s ease 0s"
				})
				$("#navShow").css({
					top: "60px",
				})
			}
			if (scrollTop < 50) {
				$('.header').removeClass('current');
				$("#logo_img").css({
					'transform': 'scale(1)',
					"transition": "all .3s ease 0s"
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
					"margin-top": "100px",
				})
				$("#header .navMain .main_logo_botton>img").css({
					width: "168px"
				})
				$("#navShow").css({
					top: "100px",
				})
			}
			if (scrollTop > 500) {
				$('.mod-sidebar').fadeIn(500)
			}
			if (scrollTop < 500) {
				$('.mod-sidebar').fadeOut(500)
			}

		});

	}

	//获取新闻资讯列表
	function newList(language) {
		$.ajax({
			url: baseUrl + 'sys/content/news/list',
			type: 'POST',
			dataType: 'json',
			data: { 
				language: language,
				'page': 1,
				'limit': 4,
				'type': 103,
			},
			success: function(res) {
				// console.log("新闻列表")
				// console.log(res);
				if (res.page.list.length != 0) {
					var newsList = res.page.list;
					createNews(newsList);
					banner_hover();
				}
			}

		})
	}
	//拼接新闻资讯列表节点
	function createNews(newsList) {
		var newsListArr = '';
		for (var i = 0; i < newsList.length; i++) {
			if (i > 3) {
				break
			}
			var content = ""

			if (newsList[i].standby != null && languageStatus == 1) {
				content = newsList[i].standby.substr(0, 30).replace(/&amp;nbsp;/g, "&#10;")
				content += "..."
			} else {
				content = newsList[i].standby.substr(0, 60).replace(/&amp;nbsp;/g, "&#10;")
				content += "..."
			}

			newsListArr += '<li onclick="bury(2)"><a href="./subPage/news_info.html?id=' + newsList[i].id + '">'
			newsListArr += '<img src="' + newsList[i].remark + '" alt="">'
			newsListArr += '<i></i><h5>' + newsList[i].title + '</h5>'
			newsListArr += '<span>' + content + '</span></a></li>'
		}
		$('#newsBox').html(newsListArr);
	}
	//学术讲座分页渲染 paging : 分页
	function paging(language) {
		$.ajax({
			type: "POST",
			url: baseUrl + "sys/learning/list",
			data: {
				language: language,
				page: 1,
				limit: 100,
			},
			success: function(res) {
				// console.log("学术讲座")
				// console.log(res)
				if (res.code == 0) {
					var maxLen = res.page.list.length
					options.data = res.page.list
					page.init(maxLen, 1, options);
				}
			},
			error: function(res) {
				// console.log("res")
				// console.log(res)
			}
		})
	}
	//获取教育科研数据
	function educationData(language) {
		$.ajax({
			url: baseUrl + 'sys/content/learn/list',
			type: 'POST',
			dataType: 'json',
			data: {
				language: language,
				'current': 1,
				'pageSize': 4,
			},
			success: function(res) {
				// console.log('教育科研的数据')
				// console.log(res);
				if (res.page.list.length != 0) {
					var eduList = res.page.list;
					var eduitems = '';
					for (var i = 0; i < eduList.length; i++) {
						if (i > 3) {
							break
						}

						eduitems += '<li onclick="bury(3)"><a href="./subPage/jyjy_info.html?id=' + eduList[i].id +
							'"><img class="tra" src="' + eduList[i].remark + '" alt=""><i></i><p class="tra">' + eduList[i].title +
							'</p></a></li>'
					}
					$('#eduBox').html(eduitems);
					banner_hover();
				}
			}
		})
	}
	//获取学生活动列表  sys/content/schlife/list
	function schoolLife(language) {
		$.ajax({
			url: baseUrl + 'sys/content/schlife/list',
			type: 'POST',
			dataType: 'json',
			data: {
				language: language,
				'current': 1,
				'pageSize': 4,
			},
			success: function(res) {
				// console.log("校园生活的数据")
				// console.log(res)
				if (res.page.list.length != 0) {
					var schoolLifeList = res.page.list;
					var lifestr = '';
					for (var i = 0; i < schoolLifeList.length; i++) {
						if (i > 3) {
							break
						}

						lifestr += '<li onclick="bury(4)"><a href="./subPage/xysh_info.html?id=' + schoolLifeList[i].id +
							'"><img class="tra" src="' + schoolLifeList[i].remark + '" alt=""><i></i><p>' + schoolLifeList[i].title +
							'</p></a></li>'
					}
					$('.schooLife').html(lifestr);
					banner_hover();
				}
			}
		})
	}
	//获取信息服务列表数据  原接口sys/subjectweb/info/list
	//改为两弹元勋
	function infoList(language) {
		$.ajax({
			url: baseUrl + 'sys/alumnus/alumnus/historylist',
			type: 'POST',
			dataType: 'json',
			data: {
				language: language,
				'current': 1,
				'pageSize': 4,
			},
			success: function(res) {
				// console.log("两弹元勋的数据")
				// console.log(res)
				if (res.page.list.length != 0) {
					var infoListItems = res.page.list;
					var infostr = '';
					for (var i = 0; i < infoListItems.length; i++) {
						if (i > 3) {
							break
						}

						infostr += '<li><a href="./subPage/infoserver_info.html?id=' + infoListItems[i].id +
							'"><img class="tra info-img" src="' + infoListItems[i].remark + '" alt=""><i></i><p class="tra"><span>' +
							infoListItems[i].title + '</span></p></a></li>'
					}
					$('#infoBox').html(infostr);
					banner_hover();
				}
			}
		})
	}
	//获取通知公告列表数据
	function noticeList(language) {
		$.ajax({
			url: baseUrl + 'sys/notice/list',
			type: 'POST',
			dataType: 'json',
			data: {
				language: language,
				'current': 1,
				'pageSize': 3,
			},
			success: function(res) {
				// console.log("通知公告的数据")
				// console.log(res)

				week = {
					"星期一": "Monday",
					"星期二": "Tuesday",
					"星期三": "Wednesday",
					"星期四": "Thursday",
					"星期五": "Friday",
					"星期六": "Saturday",
					"星期日": "Sunday"
				}
				if (res.code == 0) {
					if (res.page.list.length != 0) {
						var noticeListItems = res.page.list;
						var noticestr = '';
						for (var i = 0; i < noticeListItems.length; i++) {
							if (i > 4) {
								break
							}
							if (sessionStorage.getItem("CNtoEn") == 0) {

								noticeListItems[i].weekday = week[noticeListItems[i].weekday]
							}
							var content = ""
							if (noticeListItems[i].srandby != null) {
								content += noticeListItems[i].srandby.replace(/&amp;nbsp;/g, "&#10;")
							}
							var titleTime = ""
							if (noticeListItems[i].date != null) {
								titleTime = noticeListItems[i].date.split(" ")[0]
							}
							// <p class="date">'+ noticeListItems[i].sdate +'</p>
							noticestr += '<li><a href="./subPage/tzgg_info.html?id=' + noticeListItems[i].id + '" title="' +
								noticeListItems[i].title +
								'"><div class="weekdata"><p class="date" style="background:#165B9F;color:#FFF;">' + titleTime +
								'</p></div><div class="itemsInfo-list"><p class="title">' + noticeListItems[i].title +
								'</p></div></a></li>'
						}
						$('.noticeBox').html(noticestr);
					}
				}
			}
		})
	}
	//获取专题网站
	function websiteList(language) {
		$.ajax({
			url: baseUrl + 'sys/subjectweb/sub/list',
			type: 'POST',
			dataType: 'json',
			data: {
				language: language,
				'page': 1,
				'limit': 4,
			},
			success: function(res) {
				// console.log("专题网站的数据")
				// console.log(res)

				if (res.page.list.length != 0) {
					var websiteListItems = res.page.list;
					var websitestr = '';
					for (var i = 0; i < websiteListItems.length; i++) {
						if (i > 3) {
							break
						}
						if (i == 0) {
							websitestr +=
								'<li><a href="./subPage/dzyd_more.html"><img src="./img/dzyd.png" alt=""><span class="div7_boder"></span><span class="div7_seach"></span><span class="div7_bg"></span></a></li>'
						} else {
							websitestr += '<li><a href="' + websiteListItems[i].path + '"><img src="' + websiteListItems[i].content +
								'" alt=""><span class="div7_boder"></span><span class="div7_seach"></span><span class="div7_bg"></span></a></li>'
						}

					}

					$("#zhuantiweb").append($(websitestr))
				} else {
					// $('.websiteBox').html('暂无数据');
				}
			}
		})
	}

	function banner_hover() {
		var is_nemuDown = false
		var nav_leave_timer = null
		$("#div_3_ul li").mouseenter(function() {
			// $(this).addClass('action').siblings().removeClass('action')
			// $(this).find("div").css("cssText", "display:block;");
			var navHover = $("#div_3_span")
			$(navHover).css("display", "block")
			$(this).find("div").slideDown("slow")
			$(this).find("div").on("mouseenter", function() {
				is_nemuDown = true
			})
			//获取当前hover的默认定位
			var curr_left = $(this).position().left + 16
			$(navHover).css({
				left: curr_left
			})
			// console.log("当前定位")
			// console.log(curr_left)
			$(this).hover(function() {
				// console.log("hover触发了")
				$(navHover).stop().animate({
					left: $(this).position.left,
				}, 500)
			}, function() {
				$(navHover).stop().animate({
					left: curr_left,
				}, 500)
			})



		}).mouseleave(function() {
			clearTimeout(nav_leave_timer)
			var nav_leave_timer = setTimeout(function() {
				// console.log("定时器触发了")
				if (is_nemuDown) {
					return
				}

				$(this).find("div").stop().css("cssText", "display:none;");
				is_nemuDown = false
			}, 500)
		})
		$("#div_3_ul").mouseleave(function() {


			if (is_nemuDown) {
				return
			}
			$(this).find("div").stop().css("cssText", "display:none;");

			is_nemuDown = false

		});

		// 鼠标移入图片缩放
		$(".mail_ul li").mouseenter(function() {
			$(this).find("p").css("cssText", "bottom: 0px;");
			$(this).find("img").css("cssText",
				"transform: scale(1.2);-webkit-transform: scale(1.2);-moz-transform: scale(1.2);-o-transform: scale(1.2);-ms-transform: scale(1.2);"
			);
		}).mouseleave(function() {
			$(this).find("p").css("cssText", "bottom: -51px;");
			$(this).find("img").css("cssText", "");
		});
		//校园活动鼠标移入图片缩放

	}
	//二维码
	$(".footer_right i")
		.on("mouseenter", function() {
			var index = $(this).data("id")
			$("#" + index).fadeIn(200)
		})
		.on("mouseleave", function() {
			var index = $(this).data("id")
			$("#" + index).fadeOut(200)
		})
	//hover bottomLine
	//获取元素宽度 然后获取元素距离屏幕的位置进行定位 在css中加上渐变效果实现hover移动效果
	$("#navMain_nav").hover(function() {}, function() {
		//设置下标初始位置
		// $(".bottomLine").css("width",parseFloat($(".selectedNav").eq(0).width()-48)+"px");
		// $(".bottomLine").css("left",parseFloat($(".selectedNav").eq(0)[0].offsetLeft+ 25)+"px");	
	})
	//通过this获取当前元素的坐标后，给下标赋值 在css中设置渐变动画达到动画效果
	$("#navMain_nav>ul>li").hover(function() {
		$(".bottomLine").css("width", parseFloat($(this).width() - 48) + "px");
		$(".bottomLine").css("left", parseFloat($(this)[0].offsetLeft + 25) + "px");
	});
	//当点击的时候改变下标的宽度
	$("#navMain_nav>ul>li").on("click", function() {
		$(".nav li").removeClass("selectedNav");
		$(this).addClass("selectedNav");
		$(".bottomLine").css("width", parseFloat($(this).width()) + "px");
		$(".bottomLine").css("left", parseFloat($(this)[0].offsetLeft) + "px");
	})
	//登录效果
	function login() {

		var islogin = sessionStorage.getItem("islogin")

		//底部静态导航dom
		var footStcNav = $(".fooer_wrap .footer a[name='footCNEN']")
		//底部友情链接dom
		var footLink = $(".copyrightWrap .copyright a[name = bottomLinks]")
		var subTitle = $("span[name=subTitle]")
		var strRight = ""

		var strLeftCn =
			'<li><a href="./subPage/xsTongzhi.html" >学生</a></li><li><a href="./subPage/jiaozhigongTongzhi.html" >教职工</a></li><li><a href="./subPage/menu.html?prev=Alumnus" >来访人员</a></li><li><a href="./subPage/zhaopin.html" >招聘</a></li>'
		var strLeftEn =
			'<li><a href="./subPage/xsTongzhi.html"" >Student</a></li><li><a href="./subPage/jiaozhigongTongzhi.html" >Teacher</a></li><li><a href="./subPage/menu.html?prev=Alumnus" >Alumnus</a></li><li><a href="./subPage/zhaopin.html" >Recruit</a></li>'
		var login_dom = $("#header_login_item")
		//获取中英文切换字段
		var CNtoEN = sessionStorage.getItem("CNtoEn")


		if (CNtoEN == 1) {


			if (islogin == 1) {

				strRight +=
					'<li><a href="./subPage/Homepage.html"><span>个人主页</span></a></li><li><a href="#"  onclick="logOut()"><span>退出</span></a></li><li><a href="#"  ><span onclick="StaticCNtoEN()">English</span></a></li>'
				$(login_dom).prepend($(strRight))
				$("#header_login_item li:first-child").css({
					"margin-left": "105px"
				})
				$("#header_login_left").append($(strLeftCn))
				//底部静态资源中英文切换之中文
				$(footStcNav).each(function(index, item) {
					$(item).html(footLanObj["cn"][index])
				})
				//底部链接中英文切换之中文
				$(footLink).each(function(index, item) {
					$(item).html(footLanObj["bLinkCn"][index])
				})
				//子标题中英文切换至中文
				$(subTitle).each(function(index, item) {
					$(item).html(footLanObj["TitleCn"][index])
				})

				$('.main-img').css({
					"right": "8px"
				})

			} else {

				// strRight += '<li><a href="./subPage/login.html" ><span >登录</span></a></li><li><a href="#"  ><span onclick="StaticCNtoEN()">English</span></a></li>'
				strRight +=
					'<li><a href="http://mail.gscaep.ac.cn" ><span >邮箱登陆</span></a></li><li><a href="http://oa.gscaep.ac.cn" ><span >办公系统</span></a></li><li><a href="#"  ><span onclick="StaticCNtoEN()">English</span></a></li>'
				$(login_dom).prepend($(strRight))
				$("#header_login_item li:first-child").css({
					// "margin-left": "185px"
					"margin-left": "110px"
				})
				$("#header_login_left").append($(strLeftCn))
			}
			//底部静态资源中英文切换之中文
			$(footStcNav).each(function(index, item) {
				$(item).html(footLanObj["cn"][index])
			})
			//底部链接中英文切换之中文
			$(footLink).each(function(index, item) {
				$(item).html(footLanObj["bLinkCn"][index])
			})
			//子标题中英文切换至中文
			$(subTitle).each(function(index, item) {
				$(item).html(footLanObj["TitleCn"][index])
			})
			$('.main-img').css({
				"right": "8px"
			})

		} else {

			if (islogin == 1) {

				strRight +=
					'<li><a href="./subPage/Homepage.html"><span>HomePage</span></a></li><li><a href="#"  onclick="logOut()"><span>LogOut</span></a></li><li><a href="#"  ><span onclick="StaticCNtoEN()">中文</span></a></li>'
				$(login_dom).prepend($(strRight))
				$("#header_login_item li:first-child").css({
					"margin-left": "75px"
				})
				$("#header_login_left").append($(strLeftEn))

				//底部静态资源中英文切换之英文
				$(footStcNav).each(function(index, item) {
					$(item).html(footLanObj["en"][index])
				})
				//底部链接中英文切换之英文
				$(footLink).each(function(index, item) {
					$(item).html(footLanObj["bLinkEn"][index])
				})
				//子标题中英文切换至英文
				$(subTitle).each(function(index, item) {
					$(item).html(footLanObj["TitleEn"][index])
				})
				$('.copyrightWrap').css({
					"height": "80px"
				})
				$('.copyrightWrap .copyright a:last-child').css({
					"display": "inline-block",
					"width": "350px"
				})

				$('.main-img').css({
					"right": "4px"
				})
				$('a[name = moreClick]').html("MORE>")
			} else {

				// strRight += '<li><a href="./subPage/login.html" ><span>Login</span></a></li><li><a href="#"  ><span onclick="StaticCNtoEN()">中文</span></a></li>'
				strRight +=
					'<li><a href="http://mail.gscaep.ac.cn" ><span >Mail</span></a></li><li><a href="http://oa.gscaep.ac.cn" ><span >OAsystem</span></a></li><li><a href="#"  ><span onclick="StaticCNtoEN()">中文</span></a></li>'
				$(login_dom).prepend($(strRight))
				$("#header_login_item li:first-child").css({
					"margin-left": "120px"
				})
				$("#header_login_left").append($(strLeftEn))
				//底部静态资源中英文切换之英文
				$(footStcNav).each(function(index, item) {
					$(item).html(footLanObj["en"][index])
				})
				//底部链接中英文切换之英文
				$(footLink).each(function(index, item) {
					$(item).html(footLanObj["bLinkEn"][index])
				})
				//子标题中英文切换至英文
				$(subTitle).each(function(index, item) {
					$(item).html(footLanObj["TitleEn"][index])
				})
				$('.copyrightWrap').css({
					"height": "80px"
				})
				$('.copyrightWrap .copyright a:last-child').css({
					"display": "inline-block",
					"width": "350px"
				})
			}

			$('.main-img').css({
				"right": "4px"
			})

			$('a[name = moreClick]').html("MORE>")

		}


	}
	//底部bannerlist
	function down_banner(language) {
		$.ajax({
			url: baseUrl + "sys/banner/down/list",
			data: {
				language: language,
			},
			type: "POST",
			success: function(res) {
				// console.log("底部banner数据")
				// console.log(res)
				if (res.code == 0) {
					var data = res.page.list
					var btBanner1 = $("img[name = bottomBanner1]")
					var btBanner2 = $("img[name = bottomBanner2]")
					data.forEach(function(item, index) {
						btBanner1.eq(index).attr("src", item.content)
						btBanner2.eq(index).attr("src", item.content)
					})
				}




			}
		})
	}
	//回到顶部设置
	$(".mod-sidebar ").on("click", function() {
		// console.log("返回顶部触发了")
		$('html,body').animate({
			scrollTop: 0
		}, 1000)
	})

})

//退出处理函数
function logOut() {
	$.ajax({
		url: baseUrl + "sys/login/signOut",
		type: "POST",
		data: {
			id: sessionStorage.getItem("loginUserId")
		},
		success: function(res) {
			if (res.code == 0) {
				sessionStorage.clear()
				location.href = " ./index.html"
			}
		},
	})

}
//静态资源中文切换
function StaticCNtoEN() {
	var CNtoEN = sessionStorage.getItem("CNtoEn")
	if (CNtoEN === "1") {
		sessionStorage.setItem("CNtoEn", 0)
	} else {
		sessionStorage.setItem("CNtoEn", 1)
	}
	window.history.go(0)
}

//埋点
function bury(sign) {
	if (sign == 1) {
		var statisName = "主页"
	} else if (sign == 2) {
		var statisName = "新闻资讯"
	} else if (sign == 3) {
		var statisName = "科学研究"
	} else if (sign == 4) {
		var statisName = "学生活动"
	}
	$.ajax({
		url: baseUrl + "sys/flow/flowList",
		data: {
			statisName: statisName,
			sign: sign
		},
		type: "POST",
		success: function(res) {

		},
		error: function(res) {

		}
	})
}


//iosslider 
function slideChange(args) {
	$('.sliderContainer .slideSelectors .item').removeClass('selected');
	$('.more').css("display", "none")
	$('.more').fadeIn(500)
	$('.sliderContainer .slideSelectors .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');

}

function slideComplete(args) {

	if (!args.slideChanged) return false;

	$(args.sliderObject).find('.text1, .text2').attr('style', '');

	$(args.currentSlideObject).find('.text1').animate({
		left: '30px',
		opacity: '0.8'
	}, 700, 'easeOutQuint');

	$(args.currentSlideObject).find('.text2').delay(200).animate({
		left: '30px',
		opacity: '0.8'
	}, 600, 'easeOutQuint');

}


function sliderLoaded(args) {

	$(args.sliderObject).find('.text1, .text2').attr('style', '');

	$(args.currentSlideObject).find('.text1').animate({
		left: '30px',
		opacity: '0.8'
	}, 700, 'easeOutQuint');

	$(args.currentSlideObject).find('.text2').delay(200).animate({
		left: '30px',
		opacity: '0.8'
	}, 600, 'easeOutQuint');

	slideChange(args);

}

//搜索函数
function blurrySreach() {
	var oldKeyWord = ""
	var currLen = 0
	$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	$('input[type=search]').keydown(function(event) {
		var keyWord = $(this).val()
		var _that = this
		//监听回车事件
		if (event.keyCode === 13) {
			//如果关键字空停止
			if (keyWord === "") {
				return
			} else {

				// console.log(keyWord)
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

//title中英文切换
if (sessionStorage.getItem("CNtoEn") == 1) {
	//中文
	$('title').html("中国工程物理研究院研究生院")

} else {
	//英文
	$('title').html("Graduate School of China Academy of Engineering Physics")



}
// console.log($('a[name = moreClick]'))

$(function () {
	/**
	 * Created by zzg on 2017/4/26.
	 * listCount = datas.length   currentPage =当前页 options配置对象
	 */

	var page = {
		"pageId": "",
		"data": null,
		"maxshowpageitem": 5, //最多显示的页码个数
		"pagelistcount": 6, //每一页显示的内容条数
		"init": function (listCount, currentPage, options) {
				//把options定义的参数赋值给page对象
				this.data = options.data,
				this.pageId = options.id,
				this.maxshowpageitem = options.maxshowpageitem, //最多显示的页码个数
				this.pagelistcount = options.pagelistcount //每一页显示的内容条数
				page.initPage(listCount, currentPage);
		},
		/**
		 * 初始化数据处理
		 * @param listCount 列表总量
		 * @param currentPage 当前页
		 */
		"initPage": function (listCount, currentPage) {
			//最多页码
			var maxshowpageitem = page.maxshowpageitem;
			//最多页码有值 如果这个值不为空 在赋值回去
			if (maxshowpageitem != null && maxshowpageitem > 0 && maxshowpageitem != "") {
				page.maxshowpageitem = maxshowpageitem;
			}
			//和以上同理
			var pagelistcount = page.pagelistcount;
			if (pagelistcount != null && pagelistcount > 0 && pagelistcount != "") {
				page.pagelistcount = pagelistcount;
			}
			page.pagelistcount = pagelistcount;
			if (listCount < 0) {
				listCount = 0;
			}
			if (currentPage <= 0) {
				currentPage = 1;
			}
			page.setPageListCount(listCount, currentPage);
		},
		/**
		 * 初始化分页界面
		 * @param listCount 列表总量
		 */
		"initWithUl": function (listCount, currentPage) {
			var pageCount = 1;
			//计算显示的总页码
			if (listCount >= 0) {
				var pageCount = listCount % page.pagelistcount > 0 ? parseInt(listCount / page.pagelistcount) + 1 : parseInt(listCount / page.pagelistcount);
			}
			//绘制显示的总页码和当前页
			var appendStr = page.getPageListModel(pageCount, currentPage);
			//渲染到页面中
			$("#" + page.pageId).html(appendStr);
		},
		/**
		 * 设置列表总量和当前页码
		 * @param listCount 列表总量
		 * @param currentPage 当前页码
		 * @param page.pagelistcount 每页显示的内容
		 */
		"setPageListCount": function (listCount, currentPage) {
			listCount = parseInt(listCount);
			currentPage = parseInt(currentPage);
			page.initWithUl(listCount, currentPage); //绘制分页样式
			page.initPageEvent(listCount); //分页按钮点击事件
			page.viewPage(currentPage, listCount, page.pagelistcount, page.data)
			//      fun(currentPage);
		},
		//页面显示功能
		"viewPage": function (currentPage, listCount, pagelistcount, data) {
			var NUM = listCount % pagelistcount == 0 ? listCount / pagelistcount : parseInt(listCount / pagelistcount) + 1;
			if (currentPage == NUM) {
				var result = data.slice((currentPage - 1) * pagelistcount, data.length);
			} else {
				var result = data.slice((currentPage - 1) * pagelistcount, (currentPage - 1) * pagelistcount + pagelistcount);
			}
			// console.log("callback")
			// console.log(options)
			options.callBack(result);
		},
		"initPageEvent": function (listCount) {
			$("#" + page.pageId + ">li[class='pageItem']").on("click", function () {
				page.setPageListCount(listCount, $(this).attr("page-data"), page.fun);
			});
		},
		"getPageListModel": function (pageCount, currentPage) {
			var prePage = currentPage - 1;
			var nextPage = currentPage + 1;
			var prePageClass = "pageItem";
			var nextPageClass = "pageItem";
			if (prePage <= 0) {
				prePageClass = "pageItemDisable";
			}
			if (nextPage > pageCount) {
				nextPageClass = "pageItemDisable";
			}
			var appendStr = "";
			appendStr += "<li class='" + prePageClass + "' page-data='" + prePage + "' page-rel='prepage'>&lt;上一页</li>";
			var miniPageNumber = 1;
			if (currentPage - parseInt(page.maxshowpageitem / 2) > 0 && currentPage + parseInt(page.maxshowpageitem / 2) <= pageCount) {
				miniPageNumber = currentPage - parseInt(page.maxshowpageitem / 2);
			} else if (currentPage - parseInt(page.maxshowpageitem / 2) > 0 && currentPage + parseInt(page.maxshowpageitem / 2) > pageCount) {
				miniPageNumber = pageCount - page.maxshowpageitem + 1;
				if (miniPageNumber <= 0) {
					miniPageNumber = 1;
				}
			}
			var showPageNum = parseInt(page.maxshowpageitem);
			if (pageCount < showPageNum) {
				showPageNum = pageCount;
			}
			for (var i = 0; i < showPageNum; i++) {
				var pageNumber = miniPageNumber++;
				var itemPageClass = "pageItem";
				if (pageNumber == currentPage) {
					itemPageClass = "pageItemActive";
				}


				appendStr += "<li class='" + itemPageClass + "' page-data='" + pageNumber + "' page-rel='itempage'>" + pageNumber + "</li>";
			}
			appendStr += "<li class='" + nextPageClass + "' page-data='" + nextPage + "' page-rel='nextpage'>下一页&gt;</li>";
			return appendStr;

		}
	}

	//定义分页参数对象学术讲座
	var options = {
		"id": "page", //显示页码的元素
		"data": null, //显示数据
		"maxshowpageitem": 3, //最多显示的页码个数
		"pagelistcount": 6, //每页显示数据个数
		"callBack": function (result) {
			var cHtml = "";
			// console.log("分页配置")
			// console.log(result)
			for (var i = 0; i < result.length; i++) {
				var Year = result[i].createTime.split(" ")[0]
		cHtml +='<li><a href="../subPage/Tender_info.html?id='+ result[i].id +'"><p class="date"> '+ Year +'</p><p class="title">'+ result[i].title +'</p></a></li>'
				//处理数据
			}

			$(".news_item").html(cHtml); //将数据增加到页面中


		}
	};

	//banner导航栏渲染

	var languageStatus = sessionStorage.getItem("CNtoEn")
	paging(languageStatus);

	function paging(languageStatus) {
		$.ajax({
			type: "POST",
			url: baseUrl + "sys/content/news/list",
			data: {
				language: languageStatus,
				'page': 1,
				'limit': 100,
				type:258,
			},
			success: function (res) {
				// console.log("新闻list")
				// console.log(res)
				if (res.code === 0) {
					var maxLen = res.page.totalCount
					options.data = res.page.list
					// console.log("首次加载")
					// console.log(options.data)
					page.init(maxLen, 1, options);
					// $("li[page-rel = prepage]").on("click",function(){
					// 	var pageNum = Number($(".pageItemActive").text())
					// 	laodPage(languageStatus,pageNum,)
					// })
					// 	$("li[page-rel = nextpage]").on("click",function(){
					// 	var pageNum = Number($(".pageItemActive").text())
					// 	laodPage(languageStatus,pageNum,loadData)
					// })
				}

			},
			error: function (res) {
				// console.log("res")
				// console.log(res)
			}
		})
	}
	//点击事件函数
	function laodPage(languageStatus, pageNum, loadData) {
		if (pageNum < 1) {
			return
		}
		// console.log("pageNum")
		// console.log(pageNum)
		$.ajax({
			type: "POST",
			url: baseUrl + "sys/content/news/list",
			data: {
				language: languageStatus,
				"page": pageNum,
				'limit': 2,
			},
			success: function (res) {


				if (res.code === 0) {

					var maxLen = res.page.list.length + loadData.length

					var data = res.page.list
					if (loadData.length != 0) {
						loadData.forEach(function (item, index) {
							options.data.push(item)
						})
					}
					if (maxLen != 0) {
						data.forEach(function (item, index) {
							options.data.push(item)
						})
					}
					// console.log("被点击后的请求")
					// console.log(options.data)

					page.init(maxLen, pageNum, options);

				}

			},
			error: function (res) {
				// console.log("res")
				// console.log(res)
			}
		})
	}
	var newsMoreLanguage = {
		titleCn: ["招标公告", ],
		titleEn: ["Tender notice", ],
		titleBreadCn: ['当前位置：<a href="../index.html">首页</a>&bull;招标公告'],
		titleBreadEn: ['Current location:<a href="../index.html">Home</a>&bull;Tender notice'],

	}
	if (languageStatus == 1) {
		//中文
		$("h2[name = newsMoreTitle]").text(newsMoreLanguage["titleCn"])
		$("span[name = newsMoreBread]").html(newsMoreLanguage["titleBreadCn"])
	} else {
		//英文
		$("h2[name = newsMoreTitle]").text(newsMoreLanguage["titleEn"])
		$("span[name = newsMoreBread]").html(newsMoreLanguage["titleBreadEn"])
	}



})
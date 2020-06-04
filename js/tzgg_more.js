

	/**
 * Created by zzg on 2017/4/26.
 * listCount = datas.length   currentPage =当前页 options配置对象
 */

var  page = {
	"pageId":"",
	"data":null,
	"maxshowpageitem":5,//最多显示的页码个数
	"pagelistcount":10,//每一页显示的内容条数
		"init":function(listCount,currentPage,options){
			this.data=options.data,
			this.pageId=options.id,
	this.maxshowpageitem=options.maxshowpageitem,//最多显示的页码个数
	this.pagelistcount=options.pagelistcount//每一页显示的内容条数
	page.initPage(listCount,currentPage);
},
/**
	 * 初始化数据处理
	 * @param listCount 列表总量
	 * @param currentPage 当前页
	 */
"initPage":function(listCount,currentPage){
		//最多页码
			var maxshowpageitem = page.maxshowpageitem;
			//最多页码有值 如果这个值不为空 在赋值回去
			if(maxshowpageitem!=null&&maxshowpageitem>0&&maxshowpageitem!=""){
					page.maxshowpageitem = maxshowpageitem;
			}
			//和以上同理
			var pagelistcount = page.pagelistcount;
			if(pagelistcount!=null&&pagelistcount>0&&pagelistcount!=""){
					page.pagelistcount = pagelistcount;
			}   
			page.pagelistcount=pagelistcount;
			if(listCount<0){
					listCount = 0;
			}
			if(currentPage<=0){
					currentPage=1;
			}
	 
			page.setPageListCount(listCount,currentPage);
 },
	/**
	 * 初始化分页界面
	 * @param listCount 列表总量
	 */
	"initWithUl":function(listCount,currentPage){
			var pageCount = 1;
			if(listCount>=0){
					var pageCount = listCount%page.pagelistcount>0?parseInt(listCount/page.pagelistcount)+1:parseInt(listCount/page.pagelistcount);
			}
			var appendStr = page.getPageListModel(pageCount,currentPage);
			$("#"+page.pageId).html(appendStr);
	},
	/**
	 * 设置列表总量和当前页码
	 * @param listCount 列表总量
	 * @param currentPage 当前页码
	 */
	"setPageListCount":function(listCount,currentPage){
			listCount = parseInt(listCount);
			currentPage = parseInt(currentPage);
			page.initWithUl(listCount,currentPage);//绘制分页样式
			page.initPageEvent(listCount); //分页按钮点击事件
			page.viewPage(currentPage,listCount,page.pagelistcount,page.data)
//      fun(currentPage);
	},
	//页面显示功能
	 "viewPage":function (currentPage,listCount,pagelistcount,data){
					var NUM=listCount%pagelistcount==0?listCount/pagelistcount:parseInt(listCount/pagelistcount)+1;
					if(currentPage==NUM){
							var result=data.slice((currentPage-1)* pagelistcount,data.length);
					}
					else{
							var result=data.slice((currentPage-1)*pagelistcount,(currentPage-1)*pagelistcount+pagelistcount);
					}
					options.callBack(result);
	},
	"initPageEvent":function(listCount){
			$("#"+page.pageId +">li[class='pageItem']").on("click",function(){
					page.setPageListCount(listCount,$(this).attr("page-data"),page.fun);
			});
	},
	"getPageListModel":function(pageCount,currentPage){
			var prePage = currentPage-1;
			var nextPage = currentPage+1;
			var prePageClass ="pageItem";
			var nextPageClass = "pageItem";
			if(prePage<=0){
					prePageClass="pageItemDisable";
			}
			if(nextPage>pageCount){
					nextPageClass="pageItemDisable";
			}
			var appendStr ="";
			appendStr+="<li class='"+prePageClass+"' page-data='"+prePage+"' page-rel='prepage'>&lt;上一页</li>";
			var miniPageNumber = 1;
			if(currentPage-parseInt(page.maxshowpageitem/2)>0&&currentPage+parseInt(page.maxshowpageitem/2)<=pageCount){
					miniPageNumber = currentPage-parseInt(page.maxshowpageitem/2);
			}else if(currentPage-parseInt(page.maxshowpageitem/2)>0&&currentPage+parseInt(page.maxshowpageitem/2)>pageCount){
					miniPageNumber = pageCount-page.maxshowpageitem+1;
					if(miniPageNumber<=0){
							miniPageNumber=1;
					}
			}
			var showPageNum = parseInt(page.maxshowpageitem);
			if(pageCount<showPageNum){
					showPageNum = pageCount;
			}
			for(var i=0;i<showPageNum;i++){
					var pageNumber = miniPageNumber++;
					var itemPageClass = "pageItem";
					if(pageNumber==currentPage){
							itemPageClass = "pageItemActive";
					}
					// appendStr+="<li class='"+itemPageClass+"' page-data='"+pageNumber+"' page-rel='itempage'></li>";

					appendStr+="<li class='"+itemPageClass+"' page-data='"+pageNumber+"' page-rel='itempage'>"+pageNumber+"</li>";
			}
			appendStr+="<li class='"+nextPageClass+"' page-data='"+nextPage+"' page-rel='nextpage'>下一页&gt;</li>";
		 return appendStr;

	}
}

//定义分页参数对象学术讲座
let options = {
	"id": "page", //显示页码的元素
	"data": null, //显示数据
	"maxshowpageitem": 3, //最多显示的页码个数
	"pagelistcount": 10, //每页显示数据个数
	"callBack": function (result) {
		var cHtml = "";
    // console.log("学术讲座")
    // console.log(result)
		for (var i = 0; i < result.length; i++) {
			if(result[i].date != null){
				var Year = result[i].date.split(" ")[0]
			} else {
				var Year = result[i].createTime.split(" ")[0]
			}
	
		cHtml +='<li><a href="../subPage/tzgg_info.html?id='+ result[i].id +'"><p class="date"> '+ Year +'</p>'
		cHtml +='<p class="title">'+ result[i].title +'</p></a></li>'
			//处理数据
		}

		$(".news_item").html(cHtml); //将数据增加到页面中


	}
};

$(function () {
	//基准url
	//加载页面数据
	load()
	//页面加载函数
	function load() {
		//获取新闻列表
		
	}


	var languageStatus = sessionStorage.getItem("CNtoEn")
	//获取新闻列表
	paging(languageStatus);
	function paging(languageStatus) {
		$.ajax({
			type: "POST",
			url: baseUrl + "sys/notice/list",
			data: {
				language: languageStatus,
				'page': 1,
				'limit': 100,
			},
			success: function (res) {
				// console.log("reres")
				// console.log(res)
				var maxLen = res.page.list.length
				options.data = res.page.list
				page.init(maxLen, 1, options);
			},
			error: function (res) {
				// console.log("res")
				// console.log(res)
			}
		})
	}

	var languageStatus = sessionStorage.getItem("CNtoEn")
	var tzggMoreLanguage = {
		titleCn:["通知公告",],
		titleEn:["announcement",],
		titleBreadCn:['当前位置：<a href="../index.html">首页</a>&bull;通知公告'],
		titleBreadEn:['Current location:<a href="../index.html">Home</a>&bull;announcement'],
	
	}

	if(languageStatus == 1){
		//中文
		$("h2[name = tzggMoreTitle]").text(tzggMoreLanguage["titleCn"])
		$("span[name = tzggMoreBread]").html(tzggMoreLanguage["titleBreadCn"])
	}else {
		//英文
		$("h2[name = tzggMoreTitle]").text(tzggMoreLanguage["titleEn"])
		$("span[name = tzggMoreBread]").html(tzggMoreLanguage["titleBreadEn"])
	}



})
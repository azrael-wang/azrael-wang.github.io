//招生就业 ----博士招生----专业目录
var  pageSeminar = {
  "pageId":"",
  "data":null,
  "maxshowpageitem":5,//最多显示的页码个数
  "pagelistcount":10,//每一页显示的内容条数
    "init":function(listCount,currentPage,options){
      this.data=options.data,
      this.pageId=options.id,
  this.maxshowpageitem=options.maxshowpageitem,//最多显示的页码个数
  this.pagelistcount=options.pagelistcount//每一页显示的内容条数
  pageSeminar.initPage(listCount,currentPage);
},
/**
   * 初始化数据处理
   * @param listCount 列表总量
   * @param currentPage 当前页
   */
"initPage":function(listCount,currentPage){
      var maxshowpageitem = pageSeminar.maxshowpageitem;
      if(maxshowpageitem!=null&&maxshowpageitem>0&&maxshowpageitem!=""){
          pageSeminar.maxshowpageitem = maxshowpageitem;
      }
      var pagelistcount = pageSeminar.pagelistcount;
      if(pagelistcount!=null&&pagelistcount>0&&pagelistcount!=""){
          pageSeminar.pagelistcount = pagelistcount;
      }   
      pageSeminar.pagelistcount=pagelistcount;
      if(listCount<0){
          listCount = 0;
      }
      if(currentPage<=0){
          currentPage=1;
      }
   
      pageSeminar.setPageListCount(listCount,currentPage);
 },
  /**
   * 初始化分页界面
   * @param listCount 列表总量
   */
  "initWithUl":function(listCount,currentPage){
      var pageCount = 1;
      if(listCount>=0){
          var pageCount = listCount%pageSeminar.pagelistcount>0?parseInt(listCount/pageSeminar.pagelistcount)+1:parseInt(listCount/pageSeminar.pagelistcount);
      }
      var appendStr = pageSeminar.getPageListModel(pageCount,currentPage);
      $("#"+pageSeminar.pageId).html(appendStr);
      fourMenuClickEvent()
  },
  /**
   * 设置列表总量和当前页码
   * @param listCount 列表总量
   * @param currentPage 当前页码
   */
  "setPageListCount":function(listCount,currentPage){
      listCount = parseInt(listCount);
      currentPage = parseInt(currentPage);
      pageSeminar.initWithUl(listCount,currentPage);
      pageSeminar.initPageEvent(listCount);
      pageSeminar.viewPage(currentPage,listCount,pageSeminar.pagelistcount,pageSeminar.data)
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
          optionsSeminar.callBack(result);
  },
  "initPageEvent":function(listCount){
        if($("#"+pageSeminar.pageId +">li[class='pageItem Seminarprev fourStep']").length > 0){
            $("#"+pageSeminar.pageId +">li[class='pageItem Seminarprev fourStep']").on("click",function(){
                pageSeminar.setPageListCount(listCount,$(this).attr("page-data"),pageSeminar.fun);
            });
        }
        if($("#"+pageSeminar.pageId +">li[class='pageItem Seminarhome fourStep']").length > 0){
            $("#"+pageSeminar.pageId +">li[class='pageItem Seminarhome fourStep']").on("click",function(){
                pageSeminar.setPageListCount(listCount,$(this).attr("page-data"),pageSeminar.fun);
            });
        }
        if($("#"+pageSeminar.pageId +">li[class='pageItem Seminarnext fourStep']").length > 0){
            $("#"+pageSeminar.pageId +">li[class='pageItem Seminarnext fourStep']").on("click",function(){
                pageSeminar.setPageListCount(listCount,$(this).attr("page-data"),pageSeminar.fun);
            });
        }
        if($("#"+pageSeminar.pageId +">li[class='pageItem Seminarend fourStep']").length > 0){
            $("#"+pageSeminar.pageId +">li[class='pageItem Seminarend fourStep']").on("click",function(){
                pageSeminar.setPageListCount(listCount,$(this).attr("page-data"),pageSeminar.fun);
            });
        }
      $("#"+pageSeminar.pageId +">li[class='pageItem fourSeminar fourStep']").on("click",function(){
          pageSeminar.setPageListCount(listCount,$(this).attr("page-data"),pageSeminar.fun);
      });
  },
  "getPageListModel":function(pageCount,currentPage){
      var prePage = currentPage-1;
      var nextPage = currentPage+1;
      var prePageClass ="pageItem";
      var nextPageClass = "pageItem";
      
      if (sessionStorage.getItem("CNtoEn") == 1) {
        //中文
        var home = "首页"
        var prev = "上一页"
        var next = "下一页"
        var end = "尾页"
        
        
      } else {
        //英文
        var home = "Home"
        var prev = "Prev"
        var next = "Next"
        var end = "End"
      
      }
      if(prePage<=0){
          prePageClass="pageItemDisable";
      }
      if(nextPage>pageCount){
          nextPageClass="pageItemDisable";
      }
      var appendStr =""; // fourSeminar fourStep
      appendStr+="<li class='"+prePageClass+" Seminarhome fourStep' data-step='fourSeminar' data-index='1' page-data='1' page-rel='firstpage'>"+ home +"</li>";
      appendStr+="<li class='"+prePageClass+" Seminarprev fourStep' data-step='fourSeminar' data-index='" + (prePage - 1) + "'page-data='"+prePage+"' page-rel='prepage'>&lt;"+ prev+"</li>";
      var miniPageNumber = 1;
      if(currentPage-parseInt(pageSeminar.maxshowpageitem/2)>0&&currentPage+parseInt(pageSeminar.maxshowpageitem/2)<=pageCount){
          miniPageNumber = currentPage-parseInt(pageSeminar.maxshowpageitem/2);
      }else if(currentPage-parseInt(pageSeminar.maxshowpageitem/2)>0&&currentPage+parseInt(pageSeminar.maxshowpageitem/2)>pageCount){
          miniPageNumber = pageCount-pageSeminar.maxshowpageitem+1;
          if(miniPageNumber<=0){
              miniPageNumber=1;
          }
      }
      var showPageNum = parseInt(pageSeminar.maxshowpageitem);
      if(pageCount<showPageNum){
          showPageNum = pageCount;
      }
      for(var i=0;i<showPageNum;i++){
          var pageNumber = miniPageNumber++;
          var itemPageClass = "pageItem";
          if(pageNumber==currentPage){
              itemPageClass = "pageItemActive";
          }

          appendStr+="<li class='"+itemPageClass+" fourSeminar fourStep'  data-step='fourSeminar' data-index='" + (pageNumber - 1) + "' page-data='"+pageNumber+"' page-rel='itempage'>"+pageNumber+"</li>";
      }
      appendStr+="<li class='"+itemPageClass+" Seminarnext fourStep' data-step='fourSeminar' data-index='" + (nextPage - 1) + "' page-data='"+nextPage+"' page-rel='nextpage'>"+ next+"&gt;</li>";
      appendStr+="<li class='"+itemPageClass+" Seminarend fourStep' data-step='fourSeminar' data-index='" + (pageCount) + "' page-data='"+pageCount+"' page-rel='lastpage'>"+ end+"</li>";
     return appendStr;

  }
}
//五级菜单设置点击事件
function fourMenuClickEvent() {
    $('.fourStep').on('click', function (event) {
      //获取data-step 并获取当前dom的索引
      // // // console.log((index + 2)+"级标题dom事件")
      // var step = event.target.dataset.step
      var step = $(this).data().step
      var _index = $(this).data().index
      breadcrumb(step, _index)
    })
  }

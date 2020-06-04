
//人才培养 ----课程信息
var  pageKCXX = {
  "pageId":"",
  "data":null,
  "maxshowpageitem":5,//最多显示的页码个数
  "pagelistcount":10,//每一页显示的内容条数
    "init":function(listCount,currentPage,options){
      this.data=options.data,
      this.pageId=options.id,
  this.maxshowpageitem=options.maxshowpageitem,//最多显示的页码个数
  this.pagelistcount=options.pagelistcount//每一页显示的内容条数
  pageKCXX.initPage(listCount,currentPage);
},
/**
   * 初始化数据处理
   * @param listCount 列表总量
   * @param currentPage 当前页
   */
"initPage":function(listCount,currentPage){
      var maxshowpageitem = pageKCXX.maxshowpageitem;
      if(maxshowpageitem!=null&&maxshowpageitem>0&&maxshowpageitem!=""){
          pageKCXX.maxshowpageitem = maxshowpageitem;
      }
      var pagelistcount = pageKCXX.pagelistcount;
      if(pagelistcount!=null&&pagelistcount>0&&pagelistcount!=""){
          pageKCXX.pagelistcount = pagelistcount;
      }   
      pageKCXX.pagelistcount=pagelistcount;
      if(listCount<0){
          listCount = 0;
      }
      if(currentPage<=0){
          currentPage=1;
      }
   
      pageKCXX.setPageListCount(listCount,currentPage);
 },
  /**
   * 初始化分页界面
   * @param listCount 列表总量
   */
  "initWithUl":function(listCount,currentPage){
      var pageCount = 1;
      if(listCount>=0){
          var pageCount = listCount%pageKCXX.pagelistcount>0?parseInt(listCount/pageKCXX.pagelistcount)+1:parseInt(listCount/pageKCXX.pagelistcount);
      }
      var appendStr = pageKCXX.getPageListModel(pageCount,currentPage);
      $("#"+pageKCXX.pageId).html(appendStr);
  },
  /**
   * 设置列表总量和当前页码
   * @param listCount 列表总量
   * @param currentPage 当前页码
   */
  "setPageListCount":function(listCount,currentPage){
      listCount = parseInt(listCount);
      currentPage = parseInt(currentPage);
      pageKCXX.initWithUl(listCount,currentPage);
      pageKCXX.initPageEvent(listCount);
      pageKCXX.viewPage(currentPage,listCount,pageKCXX.pagelistcount,pageKCXX.data)
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
          optionsKCXX.callBack(result);
  },
  "initPageEvent":function(listCount){
      $("#"+pageKCXX.pageId +">li[class='pageItem']").on("click",function(){
          pageKCXX.setPageListCount(listCount,$(this).attr("page-data"),pageKCXX.fun);
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
      var appendStr ="";
      appendStr+="<li class='"+prePageClass+"' page-data='1' page-rel='firstpage'>"+ home +"</li>";
      appendStr+="<li class='"+prePageClass+"' page-data='"+prePage+"' page-rel='prepage'>&lt;"+ prev +"</li>";
      var miniPageNumber = 1;
      if(currentPage-parseInt(pageKCXX.maxshowpageitem/2)>0&&currentPage+parseInt(pageKCXX.maxshowpageitem/2)<=pageCount){
          miniPageNumber = currentPage-parseInt(pageKCXX.maxshowpageitem/2);
      }else if(currentPage-parseInt(pageKCXX.maxshowpageitem/2)>0&&currentPage+parseInt(pageKCXX.maxshowpageitem/2)>pageCount){
          miniPageNumber = pageCount-pageKCXX.maxshowpageitem+1;
          if(miniPageNumber<=0){
              miniPageNumber=1;
          }
      }
      var showPageNum = parseInt(pageKCXX.maxshowpageitem);
      if(pageCount<showPageNum){
          showPageNum = pageCount;
      }
      for(var i=0;i<showPageNum;i++){
          var pageNumber = miniPageNumber++;
          var itemPageClass = "pageItem";
          if(pageNumber==currentPage){
              itemPageClass = "pageItemActive";
          }

          appendStr+="<li class='"+itemPageClass+"' page-data='"+pageNumber+"' page-rel='itempage'>"+pageNumber+"</li>";
      }
      appendStr+="<li class='"+nextPageClass+"' page-data='"+nextPage+"' page-rel='nextpage'>" + next +"&gt;</li>";
      appendStr+="<li class='"+nextPageClass+"' page-data='"+pageCount+"' page-rel='lastpage'>"+ end +"</li>";
     return appendStr;

  }
}
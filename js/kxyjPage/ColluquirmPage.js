//招生就业 ----博士招生----专业目录
var  pageColluquirm = {
  "pageId":"",
  "data":null,
  "maxshowpageitem":5,//最多显示的页码个数
  "pagelistcount":10,//每一页显示的内容条数
    "init":function(listCount,currentPage,options){
      this.data=options.data,
      this.pageId=options.id,
  this.maxshowpageitem=options.maxshowpageitem,//最多显示的页码个数
  this.pagelistcount=options.pagelistcount//每一页显示的内容条数
  pageColluquirm.initPage(listCount,currentPage);
},
/**
   * 初始化数据处理
   * @param listCount 列表总量
   * @param currentPage 当前页
   */
"initPage":function(listCount,currentPage){
      var maxshowpageitem = pageColluquirm.maxshowpageitem;
      if(maxshowpageitem!=null&&maxshowpageitem>0&&maxshowpageitem!=""){
          pageColluquirm.maxshowpageitem = maxshowpageitem;
      }
      var pagelistcount = pageColluquirm.pagelistcount;
      if(pagelistcount!=null&&pagelistcount>0&&pagelistcount!=""){
          pageColluquirm.pagelistcount = pagelistcount;
      }   
      pageColluquirm.pagelistcount=pagelistcount;
      if(listCount<0){
          listCount = 0;
      }
      if(currentPage<=0){
          currentPage=1;
      }
   
      pageColluquirm.setPageListCount(listCount,currentPage);
 },
  /**
   * 初始化分页界面
   * @param listCount 列表总量
   */
  "initWithUl":function(listCount,currentPage){
      var pageCount = 1;
      if(listCount>=0){
          var pageCount = listCount%pageColluquirm.pagelistcount>0?parseInt(listCount/pageColluquirm.pagelistcount)+1:parseInt(listCount/pageColluquirm.pagelistcount);
      }
      var appendStr = pageColluquirm.getPageListModel(pageCount,currentPage);
      $("#"+pageColluquirm.pageId).html(appendStr);
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
      pageColluquirm.initWithUl(listCount,currentPage);
      pageColluquirm.initPageEvent(listCount);
      pageColluquirm.viewPage(currentPage,listCount,pageColluquirm.pagelistcount,pageColluquirm.data)
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
          optionsColluquirm.callBack(result);
  },
  "initPageEvent":function(listCount){
      // console.log(pageColluquirm.pageId )
      
    if($("#"+pageColluquirm.pageId +">li[class='pageItem Colluquirmprev fourStep']").length > 0){
        $("#"+pageColluquirm.pageId +">li[class='pageItem Colluquirmprev fourStep']").on("click",function(){
            pageColluquirm.setPageListCount(listCount,$(this).attr("page-data"),pageColluquirm.fun);
        });
    }
    if($("#"+pageColluquirm.pageId +">li[class='pageItem Colluquirmhome fourStep']").length > 0){
        $("#"+pageColluquirm.pageId +">li[class='pageItem Colluquirmhome fourStep']").on("click",function(){
            pageColluquirm.setPageListCount(listCount,$(this).attr("page-data"),pageColluquirm.fun);
        });
    }
    if($("#"+pageColluquirm.pageId +">li[class='pageItem Colluquirmnext fourStep']").length > 0){
        $("#"+pageColluquirm.pageId +">li[class='pageItem Colluquirmnext fourStep']").on("click",function(){
            pageColluquirm.setPageListCount(listCount,$(this).attr("page-data"),pageColluquirm.fun);
        });
    }
    if($("#"+pageColluquirm.pageId +">li[class='pageItem Colluquirmend fourStep']").length > 0){
        $("#"+pageColluquirm.pageId +">li[class='pageItem Colluquirmend fourStep']").on("click",function(){
            pageColluquirm.setPageListCount(listCount,$(this).attr("page-data"),pageColluquirm.fun);
        });
    }
      $("#"+pageColluquirm.pageId +">li[class='pageItem fourColluquirm fourStep']").on("click",function(){
          pageColluquirm.setPageListCount(listCount,$(this).attr("page-data"),pageColluquirm.fun);
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
      appendStr+="<li class='"+prePageClass+" Colluquirmhome fourStep' data-step='fourColluquirm' data-index='1' page-data='1' page-rel='firstpage'>"+ home +"</li>";
      appendStr+="<li class='"+prePageClass+" Colluquirmprev fourStep' data-step='fourColluquirm' data-index='" + (prePage - 1) + "'page-data='"+prePage+"' page-rel='prepage'>&lt;"+ prev+"</li>";
      var miniPageNumber = 1;
      if(currentPage-parseInt(pageColluquirm.maxshowpageitem/2)>0&&currentPage+parseInt(pageColluquirm.maxshowpageitem/2)<=pageCount){
          miniPageNumber = currentPage-parseInt(pageColluquirm.maxshowpageitem/2);
      }else if(currentPage-parseInt(pageColluquirm.maxshowpageitem/2)>0&&currentPage+parseInt(pageColluquirm.maxshowpageitem/2)>pageCount){
          miniPageNumber = pageCount-pageColluquirm.maxshowpageitem+1;
          if(miniPageNumber<=0){
              miniPageNumber=1;
          }
      }
      var showPageNum = parseInt(pageColluquirm.maxshowpageitem);
      if(pageCount<showPageNum){
          showPageNum = pageCount;
      }
      for(var i=0;i<showPageNum;i++){
          var pageNumber = miniPageNumber++;
          var itemPageClass = "pageItem";
          if(pageNumber==currentPage){
              itemPageClass = "pageItemActive";
          }
          
          appendStr+="<li class='"+itemPageClass+" fourColluquirm fourStep'  data-step='fourColluquirm' data-index='" + (pageNumber - 1) + "' page-data='"+pageNumber+"' page-rel='itempage'>"+pageNumber+"</li>";
        }
        appendStr+="<li class='"+itemPageClass+" Colluquirmnext fourStep' data-step='fourColluquirm' data-index='" + (nextPage - 1) + "' page-data='"+nextPage+"' page-rel='nextpage'>"+ next+"&gt;</li>";
        appendStr+="<li class='"+itemPageClass+" Colluquirmend fourStep' data-step='fourColluquirm' data-index='" + (pageCount) + "' page-data='"+pageCount+"' page-rel='lastpage'>"+ end+"</li>";
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
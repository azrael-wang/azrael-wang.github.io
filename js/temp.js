//搜索点击弹出效果
function SerMax(){
  $('#btn_ser').click(function(){
    $('#ser').toggle(300);
  })
}
//导航置顶
//$(function(){
//navTop();
$(window).resize(function(){
  //navTop();
})
//})

function navTop(){
var sWSon = document.documentElement.clientWidth ;
  if(sWSon>900){
    $('.topWrap').css({display:'block'})
      $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 10){
      $('.header').addClass('current');
      //$('.ser').addClass('current');
      $('.current').find('.topWrap').css({display:'none'}).stop().animate({top:"-400px"},200);
      var liWidth = $("#nav li").width()
      $('.subNav').css('width',liWidth)
      }else{
      $('.header').removeClass('current');
      $('.topWrap').css({display:'block'}).stop().animate({top:0},200);
      var liWidth = $("#nav li").width()
      $('.subNav').css('width',liWidth)
      }
    });
    
  }else{
    $ (window).unbind ('scroll');
    $('.topWrap').css({display:'none'});
    $('.header').removeClass('current');
  }
}






  
  

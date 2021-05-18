//제이쿼리
$(document).ready(function(){
// $(function(){
var $menu = $('.menu2 li'),
    $contents = $('#fullpage > section');//바로밑에 있는 section

  //메뉴 클릭 이동
   $menu.click(function(e){
     e.preventDefault();
    var idx = $(this).index();
    var tt = $contents.eq(idx).offset().top
    console.log(tt);
    //스크롤한 해당 위치로 이동하도록
    $('html, body').animate({scrollTop:tt});
  });//메뉴클릭

  $(window).scroll(function(){
     var $sct = $(this).scrollTop();
     $contents.each(function(i){
      var tg = $(this);
      if(tg.offset().top -10 < $sct + 50){
        $menu.removeClass('on');
        $menu.eq(i).addClass('on');
      }
    });
   });

});//끝

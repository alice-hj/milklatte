//까사 제이쿼리
$(document).ready(function(){
function scroll_header(){
  //scroll = 스크롤이 움직일 때 이벤트
  $(window).on('scroll',function(){
    var scr = $(this).scrollTop();
    console.log(scr)
    if( scr > 50 ){
      $('.nav').addClass('on');
    }else{
      $('.nav').removeClass('on');
    }
  });
}
scroll_header();

//탑버튼
 function top2() {
   $(window).scroll(function() {
       if ($(this).scrollTop() > 500) {
           $('.top').fadeIn(100);
       } else {
           $('.top').fadeOut(200);
       }
   });

   $('.top').on('click',function(){
       $('html').animate({
           scrollTop : 0
       }, 400);
       return false;
   });
  }
  top2();
var visual = $('.slider').bxSlider({
 auto:true, // 자동플레이 true = 실행, false = 실행안함
 pause:3000, // 슬라이드가 머무는 시간 1/1000초 => 3초에 한번씩움직인다.
 maxSlides:1, // 최대 슬라이드 보여질 갯수(반응형)
 // slideWidth:auto, // 슬라이드 1개의 가로사이즈
 moveSlides:1// 슬라이드를 움직일수 있는 갯수
});

});//제이쿼리끝

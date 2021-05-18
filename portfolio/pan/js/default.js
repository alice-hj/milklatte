//신한페이판 제이쿼리
$(document).ready(function(){

//카드페이지슬라이드
var slide = $('.slider ul').bxSlider({
  wrapperClass:'first_slide',
  mode: 'fade',
  // auto:false, // 자동플레이 true = 실행, false = 실행안함
  // pause:3000, // 슬라이드가 머무는 시간 1/1000초 => 3초에 한번씩움직인다.
  // minSlides:,
  maxSlides:3, // 최대 슬라이드 보여질 갯수(반응형)
  // slideWidth:144, // 슬라이드 1개의 가로사이즈
  // slideWidth:$width,   //변하는 옵션값
  moveSlides:1// 슬라이드를 움직일수 있는 갯수
});
//플랫폼 슬라이드2
// $('.slider2').bxSlider({
//   wrapperClass:'second_slide', //.bx-wrapper을 대신하는 클래스(클래스명을 바꿔준다.)
//   // infiniteLoop: true,
//   // control:true
// });
// 슬라이드업  버튼
$('.benefit > button').on('click',function(){
  $(this).next('.bnf').slideToggle(400);
  $(this).parent().toggleClass('on');
});

// });

});//제이쿼리끝

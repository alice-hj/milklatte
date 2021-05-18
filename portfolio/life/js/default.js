//생명보험 자바스크립트
window.addEventListener('DOMContentLoaded',function(){
  var  topbtn = document.querySelector('.top'),
    docHeight,//html 의 전체 높이
    offset,// 올라가고 남은양\
    scrollPos,// scorlltop 해서 픽셀수를 가져온다.?
    docElem = document.documentElement;


//탑버튼
  docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight);
  //html 의 높이
  if(docHeight != 0){
    offset = docHeight/6;
  }
  window.addEventListener('scroll',function(){
   backToTop();
  });

   function backToTop(){
     scrollPos = docElem.scrollTop;
     if(scrollPos > offset){
       topbtn.style.display = "block"
     }else{
       topbtn.style.display = "none"
     }
    }//topbtn 나타나

    topbtn.addEventListener('click',function(){
      function scrollToTop() {
        var scrollInterval = setInterval(function(){
          if(scrollPos !=0){
            window.scrollBy(0,-55);
          }else{
            clearInterval(scrollInterval);
          }
        },15);
       }//scrollToTop
      scrollToTop();
    });

//--------왼쪽메뉴
var snbBtn = document.querySelectorAll('li.snb_btn button'),
listHeight=0,
snbTitle = document.querySelectorAll('.snb_btn ul'),
snbList = document.querySelectorAll('.snb_btn li'),
listHeight = snbTitle.clientHeight;//220


for(var i =0; i < snbBtn.length; i++){
  snbBtn[i].addEventListener('click',function(e){
    document.querySelector('.snb_btn button.on').classList.remove('on');
    document.querySelector('.show').classList.remove('show');
    e.target.classList.add('on');
    e.target.nextElementSibling.classList.add('show');
  })//click event
}//for lists.length


//푸터 슬라이드 제이쿼리
var slide = $('.slider ul').bxSlider({
  auto:true, // 자동플레이 true = 실행, false = 실행안함
  pause:3000, // 슬라이드가 머무는 시간 1/1000초 => 3초에 한번씩움직인다.
  maxSlides:7, // 최대 슬라이드 보여질 갯수(반응형)
  slideWidth:178, // 슬라이드 1개의 가로사이즈
  // slideWidth:$width,   //변하는 옵션값
  moveSlides:1// 슬라이드를 움직일수 있는 갯수
});

})//DOMContentLoaded

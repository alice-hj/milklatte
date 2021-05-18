//까사 자바스크립트
window.addEventListener('DOMContentLoaded',function(){
    var  naviTop = document.querySelector('.nav'),
      threshold = naviTop.offsetHeight,
      topbtn = document.querySelector('.top'),
      docHeight,//html 의 전체 높이
      offset,// 올라가고 남은양\
      scrollPos,// scorlltop 해서 픽셀수를 가져온다.?
      docElem = document.documentElement;

//header top
 window.addEventListener('scroll',function(){
  if(window.scrollY > threshold){
    if(!naviTop.classList.contains('on')){
      naviTop.classList.add('on');
    }
  }else{
    if(naviTop.classList.contains('on')){
      naviTop.classList.remove('on');
    }
  }//else
backToTop();
});//header top scroll event

//탑버튼
docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight);
//html 의 높이
if(docHeight != 0){
  offset = docHeight/6;
}

 function backToTop(){
   scrollPos = docElem.scrollTop;
   if(scrollPos > offset){
     topbtn.style.display = "block"
   }else{
     topbtn.style.display = "none"
   }
  }//topbtn 나타나

  topbtn.addEventListener('click',function(){
    scrollToTop();
  });

  function scrollToTop() {
    var scrollInterval = setInterval(function(){
      if(scrollPos !=0){
        window.scrollBy(0,-55);
      }else{
        clearInterval(scrollInterval);
      }
    },15);
   }//scrollToTop


});//DOMContentLoaded

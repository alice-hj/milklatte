//티빙 자바스크립트
window.addEventListener('DOMContentLoaded',function(){
//--------------탑버튼
var topbtn = document.querySelector('.top2'),
    docHeight = 0,//html 의 전체 높이
    offset = 0,// 올라가고 남은양\
    scrollPos = 0,// scorlltop 해서 픽셀수를 가져온다.
    docElem = document.documentElement;


docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight);
// docHeight =docElem.scrollHeight;
//html 의 높이
if(docHeight != 0){
  offset = docHeight/6;
}

window.addEventListener('scroll',function(){
  backToTop();
})
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
    var scrollUp = setInterval(function(){
      if(scrollPos !=0){
        window.scrollBy(0,-55);
      }else{
        clearInterval(scrollUp);
      }
    },15);
   }//scrollToTop

//-------

  var slideWrap = document.querySelector('.visual'),
      slideContainer = document.querySelector('.slideContainer'),
      slide = document.querySelectorAll('.slideContainer li.slide'),
      slideHeight = 0,
      slideCount = slide.length,
      currentIndex = 0,
      timer = undefined,
      pagerHTML ='',
      pager = document.querySelector('.pager'),
      navPrev = document.querySelector('.bx-prev'),
      navNext = document.querySelector('.bx-next');


//슬라이드의 높이 확인하여 부모의 높이로 지정하기 - 대상.offsetHeight
for(var i = 0; i < slide.length; i++){
   if(slideHeight < slide[i].offsetHeight){
        slideHeight = slide[i].offsetHeight;
   }
}
slideWrap.style.height = slideHeight +'px';
slideContainer.style.height = slideHeight +'px';
// 슬라이드가 있으면 가로로 배열하기
for(var a = 0; a < slideCount; a++){
    slide[a].style.left = a * 100 + '%';
//pager span html 만들기 <span data-idx="0">1</span>
 // pagerHTML += `<span data-idx="${a}">${a+1}</span>`;
 pagerHTML += '<span data-idx="'+ a +'">'+ (a+1) + '</span>';
 pager.innerHTML =pagerHTML;
 }
 var pagerBtn = document.querySelectorAll('.pager span');

// 슬라이드 이동 함수
function goToSlide(idx){
  slideContainer.classList.add('animated');
    slideContainer.style.left = -100 * idx + '%';
    currentIndex = idx;

    for(var y =0; y< pagerBtn.length; y++){
      pagerBtn[y].classList.remove('active');
    }//span active 반복문
    pagerBtn[idx].classList.add('active');

}//goToSlide
goToSlide(0);//시작하자마자 0 을 보여줘


// 버튼을 클릭하면 슬라이드 이동시키기
navPrev.addEventListener('click',function(){
    if(currentIndex == 0){
        goToSlide(slideCount - 1);
    }else{
        goToSlide(currentIndex - 1);
    }
});
navNext.addEventListener('click',function(){
   if(currentIndex == slideCount - 1){
       goToSlide(0);
   }else{
       goToSlide(currentIndex + 1);
   }
});
// pager로 슬라이드 이동하기 (클릭해서)
   for(var i=0; i < pagerBtn.length; i++){
     pagerBtn[i].addEventListener('click',function(e){
       var pagerNumber = e.target.innerText -1;
       goToSlide(pagerNumber);
     })
   }
//자동슬라이드 함수
function startAutoSlide(){
timer = setInterval(function(){
var nextIdx = (currentIndex +1) % slideCount;
  goToSlide(nextIdx);
},3000);
}
startAutoSlide();


//마우스 들어오면 멈추고 나가기
slideWrap.addEventListener('mouseenter',function(){
  clearInterval(timer);
});
slideWrap.addEventListener('mouseleave',function(){
  startAutoSlide(0);
});
})//DOMContentLoaded

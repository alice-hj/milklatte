//동화 자바스립트 -index.html
window.addEventListener('DOMContentLoaded',function(){
  var slideContainer = document.querySelector('.slider'),
      slide = document.querySelectorAll('.visual'),
      slideHeight = 0,
      slideCount = slide.length,
      currentIndex = 0,
      timer = undefined,
      pagerHTML ='';

//----비쥬얼슬라이드
//슬라이드가 있으면 가로로 배열하기
for(var a = 0; a < slide.length; a++){
    slide[a].style.left = a * 100 + '%';
 }

 //클릭하면 슬라이드 이동
 slideContainer.addEventListener('click',function(){
   var nextIdx = (currentIndex +1) % slideCount;
   goToSlide(nextIdx);
 });

// 슬라이드 이동 함수
function goToSlide(idx){
  slideContainer.classList.add('animated');
  slideContainer.style.left = -100 * idx + '%';
  currentIndex = idx;
}
goToSlide(0);//시작하자마자 0 을 보여줘


//자동슬라이드 함수
function startAutoSlide(){
timer = setInterval(function(){
  var nextIdx = (currentIndex +1) % slideCount;
  goToSlide(nextIdx);
},3000);
}
startAutoSlide();

//--------------탑버튼
var topbtn = document.querySelector('.top'),
    scrollPos,// scorlltop 해서 픽셀수를 가져온다.
    docElem = document.documentElement;

  topbtn.addEventListener('click',function(){
    scrollToTop();
  });

  function scrollToTop() {
    var scrollUp = setInterval(function(){
      scrollPos = docElem.scrollTop;
      if(scrollPos !=0){
        window.scrollBy(0,-55);
      }else{
        clearInterval(scrollUp);
      }
    },15);
   }//scrollToTop

//----어떤제품을 찾으시나요?
var tab = document.querySelectorAll('.tab.no1 li')
   list = document.querySelectorAll('.tabs .list');

    for(let i =0; i<tab.length; i++){
      (function(id){
      tab[id].addEventListener('click',function(e){
        e.preventDefault();
        if(!this.classList.contains('show')){
        document.querySelector('.tab.no1 li.show').classList.remove('show');
        tab[id].classList.add('show');
        document.querySelector('.tabs .list.on').classList.remove('on');
        list[id].classList.add('on');
        }
      })//click event
    }(i));
    }//for

//-------------인테리어 스타일 보실래요?
    var tabNo2 = document.querySelectorAll('.tab.no2 li'),
       interial = document.querySelectorAll('.tom .interial_list');

    for(let i =0; i< tabNo2.length; i++){
      (function(y){
      tabNo2[y].addEventListener('click',function(e){
        e.preventDefault();
        if(!this.classList.contains('show')){
        document.querySelector('.no2 li.show').classList.remove('show');
        document.querySelector('.interial_list.on').classList.remove('on');
        tabNo2[y].classList.add('show');
        interial[y].classList.add('on');
      }
     })//click event
    }(i));
    interial_list();
  }//for

//-------slider 슬라이드
function interial_list(){
  $('.interial_list').bxSlider({
 });
}
interial_list();

// function slider(){
//   $('.slider').bxSlider({
//  });
// }
// slider();


//------ talk
function talk(){
 $('.talk').on('click',function(){
  $(this).toggleClass('on');
  $(this).next('.talkin').slideToggle(100);
 });
}
talk();

//----------header navi 자바스크립트
var navi = document.querySelector('.nav');
var whiteBox = document.querySelector('.white_box');
var menuList = document.querySelectorAll('.menulist');

function naviIn(){
    whiteBox.style.display ="block";
    for(var i =0; i < menuList.length; i++){
      menuList[i].style.display ="block";
    }
  }
function naviOut(){
    whiteBox.style.display ="none";
    for(var i =0; i < menuList.length; i++){
      menuList[i].style.display ="none";
    }
}

 navi.addEventListener('mouseenter',function(){
   naviIn();
})
 navi.addEventListener('mouseleave',function(){
   naviOut();
})

//-------------menulist
// function menulist(){
//  $('.nav > ul > li, .white_box').on('mouseenter keyup',function(){
//    $('.nav > ul > li ul').stop().slideDown(400);
//    $('.nav > ul ').next('.white_box').stop().slideDown(300);
//    return false;
//  });
//  $('.nav > ul > li, .white_box').on('mouseleave',function(){
//    $('.nav > ul > li ul').stop().slideUp(300);
//    $('.nav > ul ').next('.white_box').stop().slideUp(400);
//    return false;
//  });
// }


});//DOMContentLoaded

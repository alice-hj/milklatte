//동화자연마루 제이쿼리
$(document).ready(function(){
    //$(this) <--  이벤트 전에 선택자를 애기함('.tabs .tab button') 즉,버튼
    //.parent() 부모선택자
    //.parents() 조상부모선택자
    //.siblings()나를 제외한 나머지 형제
    //.index()몇번째인지 찾아주는 메서드
    //.eq() 몇번째인지 찾아가는 것

 // ----왼쪽메뉴
function product(){
  $('.product > ul > li').on('click',function(){
   $(this).children('ul').stop().slideDown(300);
   $(this).siblings('li').children('ul').slideUp(300);
   $(this).addClass('on');
   $(this).siblings('li').removeClass('on');

   $(this).children('a').addClass('on');
   $(this).siblings('li').children('a').removeClass('on');
   return false;
 })

  $('.product > ul > li > ul > li').on('click',function(){
   $(this).children('ul').stop().slideDown(300);
   $(this).siblings('li').children('ul').slideUp(300);
   $(this).addClass('on');
   $(this).siblings('li').removeClass('on');
   return false;
  })

  $('.product > ul > li > ul > li > ul > li').on('click',function(){
   $(this).addClass('on');
   $(this).siblings('li').removeClass('on');
   return false;
  })

}
product();

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


//-----------bxslider

function interial_list(){
  $('.slider').bxSlider({
 });
}
interial_list();

//------- index.html slider 슬라이드
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



//--------------탑버튼 자바스크립트
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


});//전체끝

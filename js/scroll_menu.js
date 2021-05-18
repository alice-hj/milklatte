//제이쿼리
$(document).ready(function(){
  /*
   *
   * Scroll position
   * (스크롤 위치값 관리)
   *
   */

 //  let docScroll;
 //  let lastScroll;
 //  let linkScroll;
 //  let scrollingSpeed = 0;
 //
 //  const getPageYScroll = () => {
 //    docScroll = window.pageYOffset || document.documentElement.scrollTop;
 //    linkScroll = [
 //      docScroll + document.querySelector("#section0").getBoundingClientRect().top,
 //      docScroll + document.querySelector("#section1").getBoundingClientRect().top,
 //      docScroll + document.querySelector("#section2").getBoundingClientRect().top,
 //      docScroll + document.querySelector("#section3").getBoundingClientRect().top,
 //      docScroll + document.querySelector("#section4").getBoundingClientRect().top,
 //    ];
 //    console.log(`Scroll : ${docScroll}`);
 //  };
 //
 //  // getPageYScroll();
 //
 //  window.addEventListener("scroll", getPageYScroll);
 //  //스크롤 움직일 때, 스크롤의 위치값 설정
 //
 //
 // $(window).on('scroll',function() {
 //     if (docScroll <= 100) {
 //       animateTxt();
 //     }
 // });

  /*
   *
   * 메뉴클릭이동
   *
   *
   */

 var $menu = $('.menu2 li'),
 $contents = $('#fullpage > section');//바로밑에 있는 section


   $menu.click(function(e){
     e.preventDefault();
    var idx = $(this).index();
    var tt = $contents.eq(idx).offset().top
    console.log(tt);
    //스크롤한 해당 위치로 이동하도록
    $('html, body').animate({scrollTop:tt});
  });//메뉴클릭

  var $menuColorOn = $('.menu2 > li.on > a');
  var $logo =$('#logo a');

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

   /*
   *
   * animate text
   * (메인 글짜 에니메이션)
   *
   */
   const element = document.querySelectorAll('.s01_txt > *');
   function animateTxt(){
     for(var i =0; i < element.length; i++){
       element[i].classList.add('animate__animated', 'animate__fadeInLeft');
     }
   }
   animateTxt();
   /*
   *
   * 창크기조절
   *
   *
   */
   // var $menu = $('.menu2 li'),
var $mobile = $('.mob');


   /*
    *
    * aos 초기화
    *
    *
    */
       AOS.init({

       });


});//끝

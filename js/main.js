window.addEventListener('DOMContentLoaded',function(){
  var menu = document.querySelectorAll('.menu2 li'),
    contents = document.querySelectorAll('#fullpage > section'), //바로밑에 있는 section
    topbtn = document.querySelector('.top'),
    lastPos =0,
    docHeight,//html 의 전체 높이
    offset,// 올라가고 남은양
    scrollPos,// scorlltop 해서 픽셀수를 가져온다.
    docElem = document.documentElement;

    /*
    *
    * 탑버튼
    *
    *
    */
  docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight);
  //html 의 높이
  if(docHeight != 0){
    offset = docHeight/6;
  }

  window.addEventListener('scroll',function(){
    backToTop();
  })
var headerColor = document.querySelector('#header');
var logoColor = document.querySelector('#logo a');
var menuColorOn = document.querySelector('.menu2 li.on a');
var menu2 = document.querySelector('.menu2');
  function backToTop(){
    scrollPos = docElem.scrollTop;
    if(scrollPos > offset){
      topbtn.style.display = "block"
      // headerColor.style.background ="transparent"
    }else{
      topbtn.style.display = "none"
      // headerColor.style.background = "transparent"
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
    },100);
  }//scrollToTop

  /*
  *
  * 팝업
  *
  *
  */
  var portfolioList = document.querySelectorAll('.container > button');
  var popUp = document.querySelectorAll('.popup');
  var colseBtn = document.querySelectorAll('.close');

//팝업열리면 header postion 변경
  for(var i =0; i < portfolioList.length; i++){
    portfolioList[i].addEventListener('click',function(){
      headerColor.style.position = static;
    })
  }
//팝업 버튼 닫기
for(var i=0; i < colseBtn.length; i++){
colseBtn[i].addEventListener('click',function(){
 for(var j=0; j < popUp.length; j++){
   popUp[j].style.display ="none";
 }
});
}


/*
*
* 탑버튼 : 제이쿼리
*
*
*/
  // function top(){
    //  $('.top2').on('click',function(){
      //   $('html').animate({
        //     scrollTop:0
        //   }, 500);
        //  });
        // }
        // top();



  /*
  *
  *
  * change Theme
  *
  */

//     const bodyColor = document.querySelectorAll(".js-color-change");
//     let themeNum = 1;
//
//     const changeColorTheme = () => {
//       body.classList.remove(
//         `theme-1`,
//         `theme-2`,
//         `theme-3`,
//         `theme-4`,
//         `theme-5`
//       );
//       if (themeNum === 5) {
//         themeNum = 1;
//       } else {
//         themeNum++;
//       }
//       body.classList.add(`theme-${themeNum}`);
//     };
//
//     bodyColor.forEach((colorDom) => {
//       colorDom.addEventListener("click", changeColorTheme);
//     });


});//DOMContentLoaded

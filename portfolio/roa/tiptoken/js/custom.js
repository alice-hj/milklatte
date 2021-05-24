var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var tiptokenPlayer;
  function onYouTubeIframeAPIReady() {
    tiptokenPlayer = new YT.Player('tiptokenPlayer', {
      width: '100%',
      height:  '100%',
      videoId: 'pNk8qv1R8T0',
      playerVars: { 'playlist': 'pNk8qv1R8T0', 'loop': 1, 'mute':1, 'autoplay': 1, 'controls': 0, 'autohide': 0, 'rel': 0, 'disablekb': 1, 'showinfo': 0, 'playsinline': 0 },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
      tiptokenPlayer.playVideo(); 
  }
  }

  // var done = true;
  // function onPlayerStateChange(event) {
  //   if (event.data == YT.PlayerState.PLAYING && !done) {
  //     setTimeout(stopVideo, 6000);
  //     done = true;
  //   }
  // }
  // function stopVideo() {
  //   player.stopVideo();
  // }



// 타이핑 효과 ------------------------------

var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    var tyInt = setInterval(typing,100); // 반복동작 
} 
     
function typing(){ 
  $(".typing ul li").removeClass("on");
   $(".typing ul li").eq(liIndex).addClass("on");
  if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
     $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
     typingIdx++; 
   } else{ if(liIndex<liLength-1){
     //다음문장으로  가기위해 인덱스를 1증가
       liIndex++; 
     //다음문장을 타이핑하기위한 셋팅
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
       
     //다음문장 타이핑전 1초 쉰다
         clearInterval(tyInt);
          //타이핑종료
     
         setTimeout(function(){
           //1초후에 다시 타이핑 반복 시작
           tyInt = setInterval(typing,100);
         },1000);
        } else if(liIndex==liLength-1){
          
         //마지막 문장까지 써지면 반복종료
           clearInterval(tyInt);
        }
    } 
}  

// svg hover 
$(function(){

  $('.main6-info svg g').hover(function(){
    $('.main6-info svg circle').removeClass('on');
    $('.main6-info svg g text').removeClass('on');
    $(this).find('circle').addClass('on');
    $(this).find('text').addClass('on');
  });


// переменные
var flagBlur = document.querySelector('.flag-blur');
var flag = document.querySelector('.flag');



function startPage() {
  
  // наведение курсора на флаги
  flag.onmouseover = function() {
    TweenMax.to(flagBlur, 0.15, {
      attr:{stdDeviation: 20},
      ease: Power1.easeInOut
    });
  };

  flag.onmouseleave = function() {
    TweenMax.to(flagBlur, 0.35, {
      attr:{stdDeviation: 0},
      ease: Power1.easeInOut
    });
  };
}

startPage();

});


AOS.init();
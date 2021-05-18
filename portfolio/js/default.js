//현정포폴자바스크립트
$(document).ready(function(){
  //--------팝업클릭되어랏
  $('.container .maru').on('click',function(){
      $('.popup.donghwa2').show();
      $('.iframe_bck > iframe').css({
        width:1280,
        height:700
      })
       $('.iframe_bck').css('width','1284px')
  });//동화 팝업 열리는 크기
  $('.container .tving').on('click',function(){
      $('.popup.tving2').show();
      $('.iframe_bck > iframe').css({
        width:1280,
        height:700
      })
       $('.iframe_bck').css('width','1284px')
  });//티빙 팝업열리는 크기
  $('.container .howru').on('click',function(){
      $('.popup.howru2').show();
      $('.iframe_bck > iframe').css({
        width:1280,
        height:700
      })
       $('.iframe_bck').css('width','1284px')
  });//하우알유팝업 열리는 크기
  $('.container .pan').on('click',function(){
      $('.popup.pan2').show();
      $('.iframe_bck > iframe').css({
        width:1280,
        height:700
      })
       $('.iframe_bck').css('width','1284px')
  });//신한판팝업 열리는 크기
  $('.container .casa').on('click',function(){
      $('.popup.casa2').show();
      $('.iframe_bck > iframe').css({
        width:1280,
        height:700
      })
       $('.iframe_bck').css('width','1284px')
  });//까사팝업 열리는 크기
  $('.container .life').on('click',function(){
      $('.popup.life2').show();
      $('.iframe_bck > iframe').css({
        width:1280,
        height:700
      })
       $('.iframe_bck').css('width','1284px')
  });//보험팝업 열리는 크기

  //-----------아이크레임크기변화
  $('.ico_web').on('click', function(){
    $('.iframe_bck > iframe').css({
      width:1500,
      height:720
    })
     $('.iframe_bck').css('width','1504px')
  });
  $('.ico_list').on('click', function(){
    $('.iframe_bck > iframe').css({
      width:1280,
      height:700
    })
     $('.iframe_bck').css('width','1284px')
  });
  $('.ico_list').on('click', function(){
    $('.iframe_bck360 > iframe').css({
      width:1280,
      height:700
    })
     $('.iframe_bck360').css('width','1284px')
  });
  $('.ico_tablet').on('click', function(){
    $('.iframe_bck > iframe').css({
      width:900,
      height:700
    })
     $('.iframe_bck').css('width','904px')
  });
  $('.ico_mobile').on('click', function(){
    $('.iframe_bck > iframe').css({
      width:480,
      height:660
    })
     $('.iframe_bck').css('width','484px')
  });
  $('.ico_mobile').on('click', function(){
    $('.iframe_bck360 > iframe').css({
      width:480,
      height:660
    })
     $('.iframe_bck360').css('width','484px')
  });
  //---------------팝업페이지아이콘
  $('.icon li').on('click',function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
  });
  //---------------포폴부분 아이콘ico1
  $('.ico1').on('click',function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });
  //------------------------------
  //--- 팝업닫기
  // $('.close').on('click', function(){
    //   $('.popup').hide();
    // });//---없앨 클래스 명..꼬옥 넣어줘

});// ready 닫기

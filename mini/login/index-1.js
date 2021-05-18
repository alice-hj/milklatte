var $modal =$('.modal'),
    $modalSelected = $('.modal.is-selected'),

    $navSignIn =$('.main-nav').children('li').eq(0).children('a'),
    $navSignUp =$('.main-nav').children('li').eq(1).children('a'),

    $login1nav =$('.switcher').children('li').eq(0).children('a'),
    $login2nav =$('.switcher').children('li').eq(1).children('a'),

    $log_in =$modal.find('#login'),
    $sign_up =$modal.find('#signup'),
    $resetPassword =$modal.find('#reset-password');

    $forgotBottom =$('#login').find('.form-bottom button');
    $resetBottom =$('#reset-password').find('.form-bottom button');


//========================================
//============모달닫기=====================
//========================================
  $modal.click(function(){
    $modal.removeClass('is-selected');
  });

//========================================
//============전달막기=====================
//========================================
  $('.container1').click(function(e){
    event.stopPropagation(e);
  });
  $('.container2').click(function(e){
    event.stopPropagation(e);
  });

//========================================
//======login1 or login2==================
//========================================
  $(".login1").click(function(){
    $modal.addClass('is-selected');//모달열기
    container1();
    container1Login();
    login1nav();
  });

$(".login2").click(function(){
  $modal.addClass('is-selected');//모달열기
  container2();
});

//========================================
//==========container1====================
//========================================

//===container1 signin====================

$login1nav.click(function(){
  login1nav();
  container1Login();
});
//===container1 signup====================
$login2nav.click(function(){
  login2nav();
  container1Signup();
});

//=====container1 bottom===================
$forgotBottom.on('click',function(){
  event.stopPropagation()
  container1Reset();
});
$resetBottom.on('click',function(){
  container1Login();
})


//============================================
function login1nav(){
  $login1nav.addClass('selected');// container1 login1 열기
  $login2nav.removeClass('selected');// container1 login2 막기
}
function login2nav(){
  $login2nav.addClass('selected');// container1 login2 열기
  $login1nav.removeClass('selected');// container1 login1 막기
}
function container1(){
  $('.container1').css('display','block');
  $('.container2').css('display','none');// container2 막기
}
function container2(){
  $('.container1').css('display','none');
  $('.container2').css('display','block');// container2 열기
}

function container1Login(){
  $log_in.css('display','block');
  $sign_up.css('display','none');
  $resetPassword.css('display','none');
}
function container1Signup(){
  $log_in.css('display','none');
  $sign_up.css('display','block');
  $resetPassword.css('display','none');
}
function container1Reset(){
  $log_in.css('display','none');
  $sign_up.css('display','none');
  $resetPassword.css('display','block');
}

// function login_signIn(){
//   $modal.addClass('is-selected');//모달열기
//   container1();
//   container1Login();
//   login1nav();
//
// }
// function login_newAccount(){
//   $modal.addClass('is-selected');//모달열기
//   container1();
//   container1Signup();
//   login2nav();
// }

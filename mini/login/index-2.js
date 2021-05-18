let page = 0;


$(".signin").on("click", function(){
  if(page == 0){
    $(".move").addClass("moving");
    $(".move").removeClass("start");

    $(".creat-account").addClass("movingForm");
    $(".creat-account").removeClass("startForm");

    $(".hello").show();
    $(".welcome").hide();

    $('.move').css('background-postion','right');

    setTimeout (function(){
    $(".move").css("border-radius","0px 10px 10px 0px");
    $(".creat-account").css("border-radius","10px 0px 0px 10px");
    $(".p-button").text("SIGN UP");
    $(".b-button").text("SIGN IN");
    $(".forgot").show();
    $(".name").hide();
    $(".creat-account-text").text("Or use your email account");
    $(".title").text("Sign-In");
    },200);

    page =1;
  }else{
    $(".move").removeClass("moving");
    $(".move").addClass("start");

    $(".creat-account").removeClass("movingForm");
    $(".creat-account").addClass("startForm");


    $(".hello").hide();
    $(".welcome").show();

    $(".move").css("background-position", "left");

    setTimeout (function(){
      $(".creat-account").css("border-radius","0px 10px 10px 0px");
      $(".move").css("border-radius","10px 0px 0px 10px");
      $(".b-button").text("SIGN UP");
      $(".p-button").text("SIGN IN");
      $(".forgot").hide();
      $(".name").show();
      $(".creat-account-text").text("Or use your email for registration");
      $(".title").text("Create Account");

    },200);

    page=0;
  }
});

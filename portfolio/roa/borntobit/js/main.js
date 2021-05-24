$(document).ready(function () {
  $('.conclusion .sub_menu li').click(function () {
    var activeTab = $(this).attr('data-tab');
    $('.conclusion .sub_menu li').removeClass('on');
    $('.lists-container').removeClass('active');
    $(this).addClass('on');
    $('#' + activeTab).addClass('active');
  });
  $('.buy_sell .sub_menu li').click(function () {
    var activeTab2 = $(this).attr('data-tab');
    $('.buy_sell .sub_menu li').removeClass('on');
    $('.sub-container').removeClass('active');
    $(this).addClass('on');
    $('#' + activeTab2).addClass('active');
  });
  $('.coin_box .table_tablist li').click(function () {
    // 현재 선택되어있던 메뉴들을 초기화함
    $('.table_tablist li').removeClass('on');
    // $('.tab .conBox').removeClass('on');

    // 선택된 메뉴에 on 클래스를 주어 표기함
    $(this).addClass('on');

    // 선택된 탭의 data 값으로 content box를 선택함
    // $('#' + $(this).data('id')).addClass('on');
  });
  $('.buy_percent button').click(function () {
    $('.buy_percent button').removeClass('on');
    $(this).addClass('on');
  });
  //---------------------------------------------table_top 메이저,하이브리드,bsdt
  $('.table_tablist li').click(function () {
    $('.table_tablist li').removeClass('on');
    $(this).addClass('on');
  });
  //---------------------------------------------------서치버튼
  $('.coin_search').on('keyup', function () {
    var value = $(this).val().toLowerCase();
    $('tbody tr').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
  //---------------------------------------------------footer버튼
  $('footer div a').click(function () {
    $('footer div a').removeClass('on');
    $(this).addClass('on');
  });
  //-------------------------------------------- 공지닫기
  $('.removebtn').click(function () {
    $('#notice').css('display', 'none');
  });
  //----------------------------------------market 서브 hieo ,h-ieo Time Line
  $('.mti-tap li.en').click(function () {
    $('.mti-tap li.en').removeClass('active');
    $('.ieo-container').removeClass('active');
    $(this).addClass('active');
    $('#' + $(this).data('id')).addClass('active');
  });
  //-----------------------------입찰/입찰 내역 ,투자하기/투자현황
  $('.ieo-tabmenu .fl').click(function () {
    $('.ieo-tabmenu .fl').removeClass('active');
    $('.ieo-tab-container').removeClass('active');
    $(this).addClass('active');
    $('#' + $(this).data('id')).addClass('active');
  });
  // ------------------------------------------퍼센트버튼
  $('.paymentSelector button').click(function () {
    $('.paymentSelector button').removeClass('on');
    $(this).addClass('on');
    return false;
  });
  //---------------------------------market_sub에서 현재 입찰 수량/신청내역
  $('.panel-tabs .fl').click(function () {
    var activeTab3 = $(this).find('a').attr('href');
    $('.panel-tabs .fl').removeClass('active');
    $('.tab-pane').removeClass('active');
    $(this).addClass('active');
    $(activeTab3).addClass('active');
    return false; //상단이동막기
  });
  //---------------------------------market_sub 에서 로그인누르면 입찰내용
  $('.logged-in').click(function () {
    $('.ieo-login-box').hide();
    $('.value-wrap').show();
  });
  //------------------------------------로그인버튼누르면
  $('.log-button').click(function () {
    $('.value-wrap').hide();
    $('.ieo-login-box').show();
  });
  //----------------------------투자하기버튼
  $('.invest-contaienr').hide();
  $('.btn-invest').click(function () {
    $('.invest-contaienr').toggle();
    //원래 hide인데 잠시 toggle
  });
});

document.addEventListener('DOMContentLoaded', function(){

    // 변수 지정
    var $slideWrap = document.querySelector('.container'),
        $slideContainer = document.querySelector('.slider-container'),
        $slide = document.querySelectorAll('.slide'),
        $navPrev = document.getElementById('prev'),
        $slideHeight = 0,
        $slideCount = $slide.length,
        $currentIndex = 0,
        $timer = undefined,//timer 값이 정해지지 않앗다.
        //이렇게 하면 아래 함수안에 지역변수여도 공공제변수로 변해서 함수밖에서도 사용이된다.
        $pagerHTML ='',
        $pager = document.querySelector('.pager'),
        // $pagerBtn = document.querySelectorAll('.pager span'),
        $navNext = document.getElementById('next');

        //슬라이드의 높이 확인하여 부모의 높이로 지정하기 - 대상.offsetHeight
        for(var i = 0; i < $slideCount ; i++){
           if($slideHeight < $slide[i].offsetHeight){
                $slideHeight = $slide[i].offsetHeight;
           }
        }
        console.log($slideHeight);

        $slideWrap.style.height = $slideHeight +'px';
        $slideContainer.style.height = $slideHeight +'px';

        // 슬라이드가 있으면 가로로 배열하기
        for(var a = 0; a < $slideCount; a++){
            $slide[a].style.left = a * 100 + '%';
            //<span data-idx="0">1</span>
            // var i = 2; i+2; i+=2 //$pagerHTML = $pagerHTML + <span....
            $pagerHTML += '<span data-idx="'+ a +'">'+ (a+1) + '</span>';
            //span 라인이 6개가 잇어야하니깐 a 는 6개까지 반복되니간 ..
            $pager.innerHTML = $pagerHTML;
            // innerHTML 의 태그 확인 (혹은 반환) ex.A.innerHTML = <h2> ; A 를 <h2> 로 바꾼다는의미
        }
        var $pagerBtn = document.querySelectorAll('.pager span');



        // 슬라이드 이동 함수
        function goToSlide(idx){
            $slideContainer.classList.add('animated');
            $slideContainer.style.left = -100 * idx + '%';
            $currentIndex = idx;

            for(var y =0; y< $pagerBtn.length; y++){
              $pagerBtn[y].classList.remove('active');
            }//span active 반복문
            $pagerBtn[idx].classList.add('active');
        }//goToSlide

        goToSlide(0);//시작하자마자 0 을 보여줘


        // 버튼을 클릭하면 슬라이드 이동시키기
        $navPrev.addEventListener('click',function(){
            //goToSlide($currentIndex - 1);

            if($currentIndex == 0){
                //$navPrev.classList.add('disabled');
                goToSlide($slideCount - 1);
            }else{
                //$navPrev.classList.remove('disabled');
                goToSlide($currentIndex - 1);
            }
        });

        $navNext.addEventListener('click',function(){
            //goToSlide($currentIndex + 1);

           if($currentIndex == $slideCount - 1){
               // $navNext.classList.add('disabled');
               goToSlide(0);
           }else{
               // $navNext.classList.remove('disabled');
               goToSlide($currentIndex + 1);
           }
        });

    //자동 슬라이드
    //아래처럼 차근히 작성후 작성해보자
    //4초마다 goToSlide(숫자); 0,1,2,3...5 ,0
    //setIntervalO(할일,시간);
    //실제 할일 =goToSlide(숫자); 0,1,2,3...5 ,0

    //자동슬라이드 함수
    function startAutoSlide(){
      $timer = setInterval(function(){
        //goToSlide(숫자); 0,1,2,3...5 ,0
        //$currentIndex[0] 4초 -> nextIdx[1] ->$currentIndex[1] 4초 -> nextIdx[2]....$currentIndex[5] 4초->nextIdx[0]
        var nextIdx = ($currentIndex +1) % $slideCount;//% 뜻, 나눈 나머지 => 1%6 =1 , 2%6=2,3%6=3...6%6=0
        goToSlide(nextIdx);
      },2000);
    }
    startAutoSlide();

    /*
    $slideWrap(div)에 마우스가 들어오면 할일, 나가면 할일
    $slideContainer(ul)을 지정하지 않는이유는 $slideContainer(ul)이 움직여서
    //setInterval 멈춰랏 ! => clearInterval(대상)
    */
    $slideWrap.addEventListener('mouseenter',function(){
     clearInterval($timer);//마우스 들어오면 멈춤
    });
    $slideWrap.addEventListener('mouseleave',function(){
      startAutoSlide();
    });

    //pager로 슬라이드 이동하기
    for(var x = 0; x < $pagerBtn.length; x++){
      $pagerBtn[x].addEventListener('click',function(ev){
      // console.log(ev.target);//클릭한 요소 확인하는 방법
      console.log(ev.target.innerText);//클릭한 요소의 html내용확인하는 방법
      //innerText 내용 확인(혹은 반환) ex.A.innerText ='B'; A의 내용을 B로 교체
      // innerHTML 의 태그 확인 (혹은 반환) ex.A.innerHTML = <h2> ; A 를 <h2> 로 바꾼다는의미
      // var pagerNumber = ev.target.getAttribute('data-idx'); //data-idx 사용방법
      var pagerNumber = ev.target.innerText -1 ; // html내용 사용방법
       goToSlide(pagerNumber);
       //data-idx를 가져와서(getAttribute) goToSlide 에 넘겨준다.
       //getAttribute : data,class,id 이것들을 가져오는걸


     });//$pagerBtn click 함수
   }//span 반복문

});//DOMcontentloaded

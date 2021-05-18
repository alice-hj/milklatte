//동화 자바스크립트 sub3.html
window.addEventListener('DOMContentLoaded',function(){
//---sub3 자주하는질문
   var $asks = document.querySelectorAll('.ask'),
   $question = document.querySelectorAll('.question'),
   $answer = document.querySelectorAll('.answer');

   for(var i=0; i < $question.length; i++){
     $question[i].addEventListener('click',function(e){
       for (var j = 0; j < $asks.length; j++) {
         $asks[j].classList.remove('active');
         e.target.parentNode.classList.add('active');
         active();
       }
     });//click event
   };
   function active(){
     for(var j= 0; j < $answer.length; j++ ){
       $answer[j].style.display = 'none';
     }
     var $activeQuestion = document.querySelector('.ask.active .answer');
     $activeQuestion.style.display ='block';
   };
   active();
});//DOMContentLoaded

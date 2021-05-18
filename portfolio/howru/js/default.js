// howRU 자바스크립트
window.addEventListener('DOMContentLoaded',function(){

var contactBtn = document.querySelector('.contact > button'),
    touch = document.querySelector('.touch'),
    contactList =document.querySelector('.contact ul');

//sub3 슬라이드
contactBtn.addEventListener('click',function(){
 if(!touch.classList.contains('show')){
   touch.classList.add('show');
 }else{
   touch.classList.remove('show');
 }
});//click event

contactList.addEventListener('click',function(){
  touch.classList.remove('show');
});

// //cleaveJs
// var cleave = new Cleave('.input-element', {
//     phone: true,
//     phoneRegionCode: '{country}'
// });


});//DOMContentLoaded

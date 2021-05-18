//무언가 컴퓨터에 저장하는 방법
const form = document.querySelector(".js-form"),
 input = form.querySelector("input"),//css 방식처럼 변수 form 안에 있는 input 이란 소리
 greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
 SHOWING_CN = "showing";

 function saveName(text){
    localStorage.setItem(USER_LS, text);
 }

 function handleSubmit(event) {
   event.preventDefault();//이벤트릐 동작을 막는다.
   const currentValue = input.value;
   paintGreeting(currentValue);//paintGreeting은 text가 필요하다.
   saveName(currentValue);
 }

 function askForName(){
   form.classList.add(SHOWING_CN);//showing
   form.addEventListener("submit", handleSubmit);
 }

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text} :)`;
}//paintGreeting function은 form 을 지워주고,greeting을 보여주고,보낸 텍스트를 넣어줄것이다.

 function loadName(){
  const currentUser = localStorage.getItem(USER_LS);//const USER_LS = "currentUser",

  if(currentUser === null){//who is not
    askForName();
  } else {//who is
    paintGreeting(currentUser);
  }
 }
function init(){
 loadName();
}
init();

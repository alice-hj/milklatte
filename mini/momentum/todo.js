const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");//ul

const TODOS_LS = 'toDos';
let toDos = [];

function init(){
 loadToDos();
 toDoForm.addEventListener("submit",handleSubmit)//handleSubmit함수 호출방법
}
init();

function loadToDos(){ //로컬스토리지에서 오는것
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    // console.log(loadedToDos);
     const parsedToDos = JSON.parse(loadedToDos);//parse를 해주면 아래stringify과 다르게 object로 변환된다.
     parsedToDos.forEach(function(toDo){//forEach 기본적으로 함수를 실행하는데 array에 담겨있는 것들 각각에 한번씩 함수를 실행시킨다.
       // console.log(toDo.text);
       paintToDo(toDo.text);
     });
  }
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value ="";//input 내용 생성
}

function paintToDo(text){
 const li = document.createElement("li");//createElement 만약 무엇을 생성하고 싶다면
 const delBtn = document.createElement("span");
 delBtn.innerText = "✖";
 delBtn.addEventListener("click",delcteToDo);//delcteToDo함수 호출방법
 const span = document.createElement("label");
 span.innerText = text; // 여기서 text는 submit function 해서 온 글짜가 된다.
 li.appendChild(delBtn);//li 안에 버튼을 넣는다.
 li.appendChild(span);//appendChild는 부모에게 넣는 거로, li 안에  span 을 넣는다.
 toDoList.appendChild(li);//ul 안에 li를 넣는다.
 //그러니깐 html로 만들어진 ul 안에 js 로 li button span 을 만들어서 ul > li > button + span 이 되는것
//할일을 생성할때마다 toDos 라는 array 에 추가되도록 array 생성
 const newId = toDos.length + 1
 const toDoObj = {
   text : text,
   id: newId
 };
 toDos.push(toDoObj);//push를 뭔갈 toDos array 앞에 넣는것
 li.id = newId;//li에 아이디를 줘서 나중에 어떤 li를 지울지 알수잇게된다.
 saveToDos()//push 한 이후로 호출을 해야한다.그렇지 않으면 아무것도 없는게 되어버린다.
}

function saveToDos(){//todo 목록을 로콜스토리지에 저장
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
//localStorage에서는 JS data를 저장할수없구 오직 string 만 저장이 가능함
//그래서 JSON.stringify 가 js object를 string 으로 바꿔준대
//JSON은 javascript Object Notation 의 준말로 데이터를 전달할때 자바스크립트가 그걸 다룰 수 있도록
//object를 string 으로 바꿔줄수도 잇고 반대로 할 수도 있다.
//또한 자바스크립트는 localStorage에 있는 모든 데이터를 string으로 저장하려고


//delect 버튼 만들기
//1.localStorage 에서 todo 하나를 지운것을 저장해야한다.
//2.그리고 html 에서도 지워야한다.
//그래서 li를 지울것이다.

function delcteToDo(event){
  // console.dir(event.target);//dir을 사용하면 parentNode: ul.js-toDoList 를 console 창에서 찾을 수 잇다.
 // console.log(event.target.parentNode);//어떤 버튼이 클릭된지 알아야하고 버튼의 부모의 id를 알아야 한다.
 //parentNode을 하면 클릭한 버튼의 id 값을 알수있다.
 const btn = event.target;//li
 const li = btn.parentNode; //btn 의 부모인 li 지우기
 toDoList.removeChild(li);
 //removeChild :
 //이렇게 하면 화면에서는 li들이 지워지지만 새로고침을 하면 그대로 남아잇는걸 볼수잇다.
  const cleanToDos = toDos.filter(function(toDo){
    // console.log(toDo.id,li.id);//이거로 확인해보면 li.id가 "string"인걸 확인할수잇고 이것을 숫자로 바꿀것이다.
    return toDo.id !== parseInt(li.id); //모든 toDos가 li의 id 와 같지 않을때
    //parseInt 은 string("1") 을 숫자(1)로 바꿔준다.
  });
  // console.log(cleanToDos);
  toDos = cleanToDos //toDos를 cleanToDos로 교체한다.
  saveToDos();//그리고 toDos를 저장한다.(localStorage)
  //이렇게 하면 html 과 localStorage 에서 지워져 새로고침해서 다시 나타나지 않게 된다.
}
//filter는 마치 foreach와 같이 각각의 item과 가이 실행이 된다.
//toDos.filter(filterFn) 이렇게 filterFn 함수를 넣으면 array 안에 잇는 모든 toDos를 통하게된다. 그리고 true인것만 toDos에서 return 할것이다.
//filter는 array안에 모든 아이템을 통해 함수를 실행하고 true 인 아이템만 가지고 새로운 array 를 만들고
//cleanToDos 와 filter가 하는것은 filterFn 이 체크된 아이템들의 array를 주는것이다.

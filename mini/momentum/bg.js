const body = document.querySelector('body');
const IMG_NUMBER =3; //IMG_NUMBER 원하는 숫자

function init(){
 const randomNumber = genRandom();//이건함수호출
 paintImage(randomNumber);//이건함수호출
}
init();

function genRandom(){
  const number = Math.floor(Math.random()*IMG_NUMBER);
  return number;
}

function paintImage(imgNumber){
  //이함수도 숫자를 가져와야한다.
  const image =new Image();
  image.src =` images/${imgNumber + 1}.jpg`;
  //+1 하는 이유는 Math.random()함수가 0을 줄 수 있기때문
  body.prepend(image);
  image.classList.add("bgImage");
}

window.addEventListener('DOMContentLoaded', function(){
var slides = document.querySelector('.slider2'),//ul
		slide = document.querySelectorAll('.slider2 li'),
		currentIdx = 0;//시작하자마자 0을 보고잇을테니
		slideCount = slide.length,//끝인지 마지막인지 구분할용도
		prevBtn = document.querySelector('.prev'),
		slideWidth = 78, //슬라이드의 하나의 위드 => ul 전체마진위해
		slideMargin = 20, // 슬라이드의 오른쪽마진 => ul 전체마진위해
		nextBtn = document.querySelector('.next');

//slide 배열
slides.style.width =(slideWidth  + slideMargin)*slideCount - slideMargin + 'px';
//(slideWidth + slideMargin ) *slideCount -slideMargin(마지막슬라이드의 마진값)

//slide 이동 함수
function moveSlide(num){
	slides.style.left = -num * 98 + 'px';
	currentIdx = num;
}

// 버튼을 클릭하면 슬라이드 이동시키기
nextBtn.addEventListener('click',function(){
	if(currentIdx < slideCount- 5){
		moveSlide(currentIdx +1);
		console.log(currentIdx);
	}else{
		moveSlide(0);//끝으로 가면 다시 맨처음으로 가라
	}
 });

})//DOMContentLoaded

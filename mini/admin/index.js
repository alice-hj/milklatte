var menubtn = document.querySelector('.menu');
var sideBar = document.querySelector(".side-bar");
function sidebtn() {
       if (sideBar.style.display === 'none') {
           sideBar.style.display = "block";
       } else {
           sideBar.style.display = 'none'
       }
}
menubtn.addEventListener('click',function(){
  sidebtn();
})

// var side = document.querySelector('.side-bar');
sideBar.addEventListener('click',function(){
  sideBar.style.display ="none"
})

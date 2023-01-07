//  show menu

function responsiveMenu( ){
  var showMenu = document.querySelector('#nav');

  if(showMenu.className === ''){
    showMenu.className = 'responsive';
  }else{
    showMenu.className = '';
  }
}

//menu active
document.querySelector('#menu').addEventListener('click', animacionbarra);

var line1_bars = document.querySelector('.line1__bars-menu');
var line2_bars = document.querySelector('.line2__bars-menu');
var line3_bars = document.querySelector('.line3__bars-menu');

function animacionbarra(){
  line1_bars.classList.toggle('activeline1__bars-menu');
  line2_bars.classList.toggle('activeline2__bars-menu');
  line3_bars.classList.toggle('activeline3__bars-menu');
}


/* eslint-disable no-undef */

//resize
handleResize();

//play startup sound
var audio = new Audio('winxp.mp3');
audio.play();

//hide the boot screen
window.setTimeout(function(){
  bootScreen.style.display = 'none';
}, 1500);

//show the chat window
window.setTimeout(function () {
  card.style.visibility = 'visible';

    //play welcome
  var audioWelcome = new Audio('welcome.mp3');
  audioWelcome.play();
}, 3500);

//add resize event
window.addEventListener('resize', handleResize);

function handleResize() {

    //set top and left of card
  card.style.left = ((window.innerWidth - card.offsetWidth) / 2) + 'px';
  card.style.top = ((window.innerHeight - card.offsetHeight) / 2) + 'px';

    //buffer some space on the edges and calculate scale
  var ww = window.innerWidth - (window.innerWidth * .3);
  var wh = window.innerHeight - (window.innerHeight * .3);

    //scale the card
  scale = Math.min(ww / card.offsetWidth, wh / card.offsetHeight);

    //set the scale
  $('#card').css({ '-webkit-transform': 'scale(' + scale + ')' });
}
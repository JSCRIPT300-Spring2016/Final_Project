'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* eslint-disable no-console */
/* eslint-disable comma-dangle */

$(init);

var colorElements = [0, 0, 0, 0];

function init() {
  document.getElementsByClassName('colors')[0].style.visibility = 'hidden';
  var saveButton = document.getElementById('save');
  saveButton.addEventListener('click', saveItem);
}

function submitColors() {
  var play = new Games({});

  var view = new View({ model: play });
  var total = new totalView({ model: play });
  var box0View = new Box0View({ model: play });
  var box1View = new Box1View({ model: play });
  var box2View = new Box2View({ model: play });
  var box3View = new Box3View({ model: play });
  var curGame = play.create(player.attributes);
  console.log(curGame);
  document.getElementById('playColors').disabled = true;
  document.getElementById('resetColors').disabled = false;
}
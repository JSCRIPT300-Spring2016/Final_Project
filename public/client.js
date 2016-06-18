'use strict';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* eslint-disable no-console */

function saveItem() {
  var playerName = document.getElementById('key').value;
  player.set('name', playerName);
  console.log(player.asString());
  document.getElementsByClassName('colors')[0].style.visibility = 'visible';
  playColors(player.asString());
}

function playColors() {
  var curPlayer = player.get('name');
  /* Event fired on the drag target. */
  document.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('Text', event.target.id);
  });

  /* Events fired on the drop target. */
  document.addEventListener('dragover', function (event) {
    event.preventDefault();
  });

  document.addEventListener('drop', function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('Text');
    event.target.appendChild(document.getElementById(data));
    /* colorElements.push(data); */
    colorElements[event.target.id] = data;
    if ((event.target.id === '') || (event.target.id === 'Blue') ||
	   (event.target.id === 'Red') || (event.target.id === 'Green') ||
	   (event.target.id === 'Orange')) {
      var index = colorElements.indexOf(data);
      colorElements[index] = 0;
      console.log('Moved out of box' + data);
      player.unset(event.target.id, data);
    }
    else if (event.target.id != '') {
      player.set(event.target.id, data);
    }
    var allColors = 1;
    var colorArray = ['box_0', 'box_1', 'box_2', 'box_3',];
    for (var i = 0; i < colorArray.length; i++) {
      if (player.has(colorArray[i]) === false) {
        console.log('Color not selected: [' + colorArray[i] + ']');
        document.getElementById('playColors').disabled = true;
        allColors = 0;
      }
      else if (allColors === 1) {
        document.getElementById('playColors').disabled = false;
        document.getElementById('playColors').addEventListener('click', submitColors);
      }
    }
  });
}
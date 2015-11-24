'use strict';

var path = document.querySelector('#wave');
var animation = document.querySelector('#moveTheWave');
var m = 0.512286623256592433;

function buildWave(w, h) {

  var a = h / 4;
  var y = h / 2;

  var pathData = ['M', w * 0, y + a / 2, 'c', a * m, 0, -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a].join(' ');

  path.setAttribute('d', pathData);
}

buildWave(90, 60);
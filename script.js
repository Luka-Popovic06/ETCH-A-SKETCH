'use strict';
const inputColor = document.querySelector('.inp-color');
const eraser = document.querySelector('.btn-eraser');
const clear = document.querySelector('.btn-clear');
const cubes = document.querySelectorAll('.cube');
const sketch = document.querySelector('#span-1');
const selectColor = document.querySelector('.btn-mode');
let color;
inputColor.addEventListener('input', function (e) {
  color = e.target.value;
  sketch.style.color = color;
});

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
//1

function selecting() {
  cubes.forEach(function (cube) {
    cube.addEventListener('mouseover', function () {
      cube.style.backgroundColor = color;
    });
  });
}
selectColor.addEventListener('click', function () {
  selecting();
  coloringBtn(selectColor, eraser, clear);
});
//2

function erasing() {
  cubes.forEach(function (cube) {
    cube.addEventListener('mouseover', function () {
      cube.style.backgroundColor = 'white';
    });
  });
}
eraser.addEventListener('click', function () {
  erasing();
  coloringBtn(eraser, clear, selectColor);
});

//3
function cleaning() {
  cubes.forEach(function (cube) {
    cube.style.backgroundColor = 'white';
  });
}
clear.addEventListener('click', function () {
  cleaning();
  coloringBtn(clear, eraser, selectColor);
});

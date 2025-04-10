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
//4
function coloringBtn(btnOne, btnTwo, btnThree) {
  btnOne.style.backgroundColor = 'white';
  btnOne.style.color = 'black';
  btnOne.style.borderColor = 'black';
  btnTwo.style.backgroundColor = 'black';
  btnTwo.style.color = 'white';
  btnTwo.style.borderColor = 'white';
  btnThree.style.backgroundColor = 'black';
  btnThree.style.color = 'white';
  btnThree.style.borderColor = 'white';
}

'use strict';
const inputColor = document.querySelector('.inp-color');
const eraser = document.querySelector('.btn-eraser');
const clear = document.querySelector('.btn-clear');
const cubes = document.querySelectorAll('.cube');
const sketch = document.querySelector('#span-1');
const selectColor = document.querySelector('.btn-mode');
const btnRandom = document.querySelector('.btn-random');
let rgbColor;
let randomMode;
btnRandom.addEventListener('click', function () {
  randomMode = true;
  coloringBtn(btnRandom, inputColor, selectColor, eraser, clear);
});
let color;
let cool;
inputColor.addEventListener('input', function (e) {
  randomMode = false;
  color = e.target.value;
  sketch.style.color = color;
  coloringBtn(inputColor, selectColor, eraser, clear, btnRandom);
});

//1
cubes.forEach(function (cube) {
  cube.addEventListener('mouseover', function () {
    if (randomMode === true) {
      let red = Math.trunc(Math.random() * 255) + 1;
      let blue = Math.trunc(Math.random() * 255) + 1;
      let yellow = Math.trunc(Math.random() * 255) + 1;
      rgbColor = `RGB(${red}, ${blue}, ${yellow})`;
      color = rgbColor;
    }
    cube.style.backgroundColor = color;
  });
});

selectColor.addEventListener('click', function () {
  randomMode = false;
  color = inputColor.value;
  coloringBtn(selectColor, eraser, clear, inputColor, btnRandom);
});
//2

eraser.addEventListener('click', function () {
  randomMode = false;
  color = 'white';
  coloringBtn(eraser, clear, selectColor, inputColor, btnRandom);
});

//3
function cleaning() {
  cubes.forEach(function (cube) {
    cube.style.backgroundColor = 'white';
  });
}
clear.addEventListener('click', function () {
  randomMode = false;
  cleaning();
  coloringBtn(clear, eraser, selectColor, inputColor, btnRandom);
});
//4
function coloringBtn(btnOne, btnTwo, btnThree, btnFour, btnFive) {
  btnOne.style.backgroundColor = 'white';
  btnOne.style.color = 'black';
  btnOne.style.borderColor = 'black';
  btnTwo.style.backgroundColor = 'black';
  btnTwo.style.color = 'white';
  btnTwo.style.borderColor = 'white';
  btnThree.style.backgroundColor = 'black';
  btnThree.style.color = 'white';
  btnThree.style.borderColor = 'white';
  btnFour.style.backgroundColor = 'black';
  btnFour.style.color = 'white';
  btnFour.style.borderColor = 'white';
  btnFive.style.backgroundColor = 'black';
  btnFive.style.color = 'white';
  btnFive.style.borderColor = 'white';
}

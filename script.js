'use strict';
const inputColor = document.querySelector('.inp-color');
const inputRange = document.querySelector('.inp-range');
const eraser = document.querySelector('.btn-eraser');
const clear = document.querySelector('.btn-clear');
const sketch = document.querySelector('#span-1');
const selectColor = document.querySelector('.btn-mode');
const btnRandom = document.querySelector('.btn-random');
const gridBox = document.querySelector('.grid-box');
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
///////new//////
let cubeSaiz;
inputRange.addEventListener('input', function (e) {
  cubeSaiz = Number(e.target.value);
  gridBox.innerHTML = '';
  createGrid(cubeSaiz);
  addingRowColums(cubeSaiz);
});
function addingRowColums(Number) {
  gridBox.style.gridTemplateColumns = `repeat(${Number}, 1fr)`;
  gridBox.style.gridTemplateRows = `repeat(${Number}, 1fr)`;
}

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
  const cubes = document.querySelectorAll('.cube');
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

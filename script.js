'use strict';
const inputColor = document.querySelector('.inp-color');
const eraser = document.querySelector('.btn-eraser');
const clear = document.querySelector('.btn-clear');
const cubes = document.querySelectorAll('.cube');
const sketch = document.querySelector('#span-1');
const selectColor = document.querySelector('.btn-mode');
let color;
let cool;
inputColor.addEventListener('input', function (e) {
  color = e.target.value;
  sketch.style.color = color;
  coloringBtn(inputColor, selectColor, eraser, clear);
});

//1

cubes.forEach(function (cube) {
  cube.addEventListener('mouseover', function () {
    cube.style.backgroundColor = color;
  });
});

selectColor.addEventListener('click', function () {
  color = inputColor.value;
  coloringBtn(selectColor, eraser, clear, inputColor);
});
//2

eraser.addEventListener('click', function () {
  color = 'white';
  coloringBtn(eraser, clear, selectColor, inputColor);
});

//3
function cleaning() {
  cubes.forEach(function (cube) {
    cube.style.backgroundColor = 'white';
  });
}
clear.addEventListener('click', function () {
  cleaning();
  coloringBtn(clear, eraser, selectColor, inputColor);
});
//4
function coloringBtn(btnOne, btnTwo, btnThree, btnFour) {
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
}

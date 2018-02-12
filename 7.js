
let alphabet     = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let array        = alphabet.split('');
let topRow       = array.slice(0,12);
let middleRow    = array.slice(12,23);
let bottomRow    = array.slice(23,35);
let row1         = document.querySelector(".row1");
let row2         = document.querySelector(".row2");
let row3         = document.querySelector(".row3");

  function createLayout() {

    topRow.map   ((n, i) => row1.innerHTML += `<button>${topRow[i]}</button>`)
    middleRow.map((n, i) => row2.innerHTML += `<button>${middleRow[i]}</button>`)
    bottomRow.map((n, i) => row3.innerHTML += `<button>${bottomRow[i]}</button>`)
 }
  createLayout();

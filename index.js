let container = document.getElementsByClassName("wheel-container");
let number = Math.ceil(Math.random() * 10000);
let flash = document.querySelector(".container div");

function btnOnclick() {
  let number = JSON.parse(localStorage.getItem("ten"));
  container[0].style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 10000);
}

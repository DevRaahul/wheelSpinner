let container = document.getElementsByClassName("wheel-container");

function btnOnclick() {
  let number = JSON.parse(localStorage.getItem("ten"));
  number = number * 1000;
  container[0].style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 1000000);
}

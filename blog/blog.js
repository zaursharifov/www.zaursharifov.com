var modal = document.getElementsByClassName("modal");
var btn = document.getElementsByClassName("myBtn");
var span = document.getElementsByClassName("close");
btn[0].onclick = function () {
  modal[0].style.display = "block";
};
btn[1].onclick = function () {
  modal[1].style.display = "block";
};
btn[2].onclick = function () {
  modal[2].style.display = "block";
};
btn[3].onclick = function () {
  modal[3].style.display = "block";
};
btn[4].onclick = function () {
  modal[4].style.display = "block";
};
btn[5].onclick = function () {
  modal[5].style.display = "block";
};

span[0].onclick = function () {
  modal[0].style.display = "none";
};
span[1].onclick = function () {
  modal[1].style.display = "none";
};
span[2].onclick = function () {
  modal[2].style.display = "none";
};
span[3].onclick = function () {
  modal[3].style.display = "none";
};
span[4].onclick = function () {
  modal[4].style.display = "none";
};
span[5].onclick = function () {
  modal[5].style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
  if (event.target == modal[1]) {
    modal[1].style.display = "none";
  }
  if (event.target == modal[2]) {
    modal[2].style.display = "none";
  }
  if (event.target == modal[3]) {
    modal[3].style.display = "none";
  }
  if (event.target == modal[4]) {
    modal[4].style.display = "none";
  }
  if (event.target == modal[5]) {
    modal[5].style.display = "none";
  }

};

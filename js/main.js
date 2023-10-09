// JS scripts placed here
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
      x.style.display = "none";
  } else {
      x.style.display = "flex";
  }
}

function mySecondFunction() {
  var x = document.getElementById("myTopnav2");
  if (x.className === "header2") {
      x.className += "responsive";
  } else {
      x.className = "header2";
  }
}
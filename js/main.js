// JS scripts placed here
function mySecondFunction() {
  var x = document.getElementById("myTopnav2");
  if (x.className === "header2") {
      x.className += "responsive";
  } else {
      x.className = "header2";
  }
}
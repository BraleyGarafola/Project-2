// JS scripts placed here
function mySecondFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "monday-soap") {
        x.className += " responsive";
    } else {
        x.className = "monday-soap";
    }
}

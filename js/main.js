// JS scripts placed here
function mySecondFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header2") {
        x.className += " responsive";
    } else {
        x.className = "header2";
    }
}



let gradient = document.querySelector(".input-color");
let gradientRandom = document.querySelector(".random-color");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.querySelector(".random-button");


// DRY CODE
function setGradient() {
    body.style.background = "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    gradient.textContent = body.style.background + ";";
}


function randomColor() {
    var left = Math.floor(Math.random()*16777215).toString(16);
    var right = Math.floor(Math.random()*16777215).toString(16);
    color1.value = "#" + left;
    color2.value = "#" + right;
    body.style.background = "linear-gradient(to right, "
        + "#"
        + right
        + ", "
        + "#"
        + left
        + ")";
    gradientRandom.textContent = body.style.background +";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomColor);

const body = document.body;
const toggle = document.getElementById("toggle-switch");
const input = document.querySelector("input");
const slider = document.getElementById("slider");
var bgColor = slider.getAttributeNames("background-color");

console.log(toggle.toggleAttribute(true))
console.log(toggle);
console.log(input.checked);
console.log(toggle.style.backgroundColor);
console.log(slider.style.background);
console.log(body.style.backgroundColor);

body.addEventListener("click", toggleLight);

function toggleLight() {
    body.classList.toggle("light-mode");
}

//logic for toggle function. if toggle background is green-blue then gradient theme is dark. if toggle background is grey then theme is light.
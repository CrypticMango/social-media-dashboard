const input = document.querySelector("input");
const slider = document.getElementById("slider");
var bgColor = slider.getAttributeNames("background-color");

const toggle = document.getElementById("toggle-switch");
const body = document.body;

//click body and theme switches

body.addEventListener("click", toggleLight);

function toggleLight() {
	body.classList.toggle("light-mode");
}

//use toggle switch

toggle.addEventListener("input", (e) => {
	const isChecked = e.target.checked;

	if (isChecked) {
		body.classList.add("light-mode");
	} else {
		body.classList.add("dark-mode");
	}
});

//logic for toggle function. if toggle background is green-blue then gradient theme is dark. if toggle background is grey then theme is light.

//figure out how to get background color value

const toggle = document.getElementById("toggle-switch");
const body = document.body;
const h1 = document.getElementById("dashboard");
const h2 = document.getElementById("overview");
const followTotal = document.getElementById("follower-total");
const attribution = document.getElementById("attribution");
const topCard = document.querySelectorAll(".top-card");
const statNumber = document.querySelectorAll(".stat-number-lg");
const infoCard = document.querySelectorAll(".info-card");
const infoNumber = document.querySelectorAll(".info-number");
const line = document.getElementById("line");
const dmLabel = document.getElementById("dm-label");

console.log(line)


toggle.addEventListener("input", (e) => {
   
	const isChecked = e.target.checked;

	if (isChecked) {
		body.classList.add("light-mode");
		
		h1.classList.add("title-light");

		h2.classList.add("second-title-light");

		dmLabel.classList.add("second-title-light");

		line.classList.add("line-color-light");
	
		followTotal.classList.add("second-title-light");

		attribution.classList.add("title-light");

		topCard.forEach(card => card.classList.add ("card-light"));
		
		statNumber.forEach(number => number.classList.add("title-light"));

		infoCard.forEach(card => card.classList.add("card-light"));

		infoNumber.forEach(number => number.classList.add("title-light"));

	} else {
		
        body.classList.remove("light-mode");
		
		h1.classList.remove("title-light");

		h2.classList.remove("second-title-light");

		dmLabel.classList.remove("second-title-light");

		line.classList.remove("line-color-light");

		followTotal.classList.remove("second-title-light");

		attribution.classList.remove("title-light");

		topCard.forEach(card => card.classList.remove ("card-light"));

		statNumber.forEach(number => number.classList.remove("title-light"));

		infoCard.forEach(card => card.classList.remove("card-light"));

		infoNumber.forEach(number => number.classList.remove("title-light"));
	}
});


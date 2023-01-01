const toggle = document.getElementById("toggle-switch");
const body = document.body;

toggle.addEventListener("input", (e) => {
   
	const isChecked = e.target.checked;

	if (isChecked) {
		body.classList.add("light-mode");
        body.classList.remove("dark-mode");
	} else {
		body.classList.add("dark-mode");
        body.classList.remove("light-mode");
	}
});

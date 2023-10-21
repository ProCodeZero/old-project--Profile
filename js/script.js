$(".scrollto a").on("click", function () {
	let href = $(this).attr("href");

	$("html, body").animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 370,   // по умолчанию «400»
		easing: "linear" // по умолчанию «swing»
	});

	return false;
});

$("a[href^='#']").on("click", function () {
	let href = $(this).attr("href");

	$("html, body").animate({
		scrollTop: $(href).offset().top
	});

	return false;
});

// Popup variables
const popupCloseIcon = document.querySelector(".close-popup");
const popupLink = document.querySelector(".popup-link");
const popup = document.querySelector(".popup");
const body = document.querySelector("body");

// Popup code
popupLink.addEventListener("click", function (e) {
	popupOpen(popup);
	e.preventDefault();
});

popupCloseIcon.addEventListener("click", function (e) {
	popupClose(popup);
	e.preventDefault();
});

function popupOpen(curentPopup) {
	curentPopup.classList.add("open");
	popupLink.style["display"] = "none"
	popupCloseIcon.style["display"] = "block"
}

function popupClose(popupActive) {
	popupActive.classList.remove("open");
	popupLink.style["display"] = "block"
	popupCloseIcon.style["display"] = "none"
}
// End popup code
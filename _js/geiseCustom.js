$(document).ready(function() {
	// Enable left menu for mobile
	$(".button-collapse").sideNav();

	// Enable carousel of images for facilities page
	$(".carousel").carousel();

	// Set copyright year
	var year = new Date();
	year = year.getFullYear();
	document.getElementById("year").textContent = year;
});

$(document).ready(function() {
	// Enable left menu for mobile
	$(".button-collapse").sideNav();


	// Set copyright year
	var year = new Date();
	year = year.getFullYear();
	document.getElementById("year").textContent = year;
	
	// Facilities Page
	if (window.location.href.includes("facilities")) {
		// Enable carousel of images for facilities page
		$(".carousel").carousel();
	}
	
	// People Page
	if (window.location.href.includes("people")) {
		document.body.getBoundingClientRect();
		window.addEventListener("resize", peoplePageCheck);
		peoplePageCheck();
		
		function peoplePageCheck() {
			// If odd number of group pictures, make the last one centered
			var groupPhotos = $(".groupPhotos").children();
			if ((groupPhotos.length % 2) !== 0) {
				var lastPhoto = groupPhotos[groupPhotos.length - 1];
				$(lastPhoto).addClass("push-l3").addClass("push-m3");
			}
			
			// Remove "horizontal" class from group members on small screen sizes
			document.body.getBoundingClientRect();
			if (document.body.clientWidth < 790) {
				$(".groupMembers .card").removeClass("horizontal");
				$(".groupMembers .col").removeClass("m12").addClass("m8").addClass("push-m2");
			} else {
				$(".groupMembers .card").addClass("horizontal");
				$(".groupMembers .col").addClass("m12").removeClass("m8").removeClass("push-m2");
			}
		}
		
	}
});

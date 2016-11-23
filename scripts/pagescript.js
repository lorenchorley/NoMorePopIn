(function () {

	console.log("qsdqsd");

	// Add the domain name and domain suffix to the html class string so that the css can use it
	var domainStrings = window.location.hostname.split(".").join(" ");
	var htmlclasses = document.documentElement.getAttribute("class");
	document.documentElement.setAttribute("class", htmlclasses + " " + domainStrings);

} ())
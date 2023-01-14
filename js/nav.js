document.addEventListener("DOMContentLoaded", function(event) { 
	const openButton = document.querySelector("#open-menu");
	const closeButton = document.querySelector("#close-button");
	const menu = document.querySelector(".main-nav");

	openButton.addEventListener("click", function(event){
		menu.classList.toggle("show-menu");
	});
	closeButton.addEventListener("click", function(event){
		menu.classList.toggle("show-menu");
	});
});
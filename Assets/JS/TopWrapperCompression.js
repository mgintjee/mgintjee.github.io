window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var HeaderNav = document.getElementById("WrapperHeader");
	var HeaderContent = document.getElementById("HeaderContainer");
	var Spacer = document.getElementById("Spacer");

	/* User Is At Top Of Page */
	if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
		HeaderNav.style.height = "10vh";
		Spacer.style.height= "10vh";
		HeaderContainer.style.display = "none";
	} 
	/* User Is NOT At Top Of Page */
	else {
		HeaderNav.style.height = "90vh";
		Spacer.style.height= "90vh";
		HeaderContainer.style.display = "flex";
	}
}
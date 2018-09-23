window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var HeaderNav = document.getElementById("WrapperHeader");
	var HeaderContent = document.getElementById("HeaderContainer");
	var AboutContent = document.getElementById("ContentAbout");
	var Spacer = document.getElementById("Spacer");

	/* User Is NOT At Top Of Page */
	if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
		HeaderNav.style.height = "10vh";
		Spacer.style.height= "0vh";
		Spacer.style.margin = "0";
		//Spacer.style.display = "none";
		HeaderContainer.style.display = "none";
	} 
	/* User Is At Top Of Page */
	else {
		HeaderNav.style.height = "90vh";
		Spacer.style.height= "90vh";
		Spacer.style.marginTop = "10vh";
		//Spacer.style.display = "block";
		HeaderContainer.style.display = "flex";
	}
}
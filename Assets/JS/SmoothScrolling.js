// Gradulally scrolls the view to the element
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    scrollFunction();
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


function scrollFunction() {
  var HeaderNav = document.getElementById("WrapperHeader");
  var HeaderContent = document.getElementById("HeaderContainer");
  var AboutContent = document.getElementById("ContentAbout");
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
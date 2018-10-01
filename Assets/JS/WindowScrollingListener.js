// Some Globals for this script
var Headers = ["HeaderAbout", "HeaderEducation", "HeaderProjects", "HeaderSkills", "HeaderContact"],
NavLinks = ["NavAbout", "NavEducation", "NavProjects", "NavSkills", "NavContact"],
HeadersLength = Headers.length,
BelowTopOfScreen = true,
CurrentHeader  = -1,
PreviousHeader = -1;

// Initial Call
HandleHeaderInView();

// On Scroll Listener
window.onscroll = function(){
  HandleHeaderCompression();
  if(BelowTopOfScreen){
    HandleHeaderInView();
  }
};

//  Checks each of the headers to see if it is in view. 
// Remembers the last previous one
function HandleHeaderInView(){
  for(i=0; i<HeadersLength; i++) {
    var Header = document.getElementById(Headers[i]);
    if (isElementInViewport(Header)){
      if(PreviousHeader != i){
        CurrentHeader = i;
      }
    }
  }
  if(PreviousHeader != CurrentHeader){
    UpdateNav(CurrentHeader);
    PreviousHeader = CurrentHeader;
  }
}

function UpdateNav(index){
  for(i=0; i < HeadersLength; ++i ){
    var NavLink = document.getElementById(NavLinks[i]);
// Not Visible
if(i != index ){
    NavLink.setAttribute("style","background: var(--BlueDark );");
}
//Visible
else{
    NavLink.setAttribute("style","background: var(--BlueLight );");
}
}
}

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
}

function HandleHeaderCompression() {
  BelowTopOfScreen = document.body.scrollTop > 1 || document.documentElement.scrollTop > 1;

  /* User Is NOT At Top Of Page */
  if (BelowTopOfScreen) {
    CompressHeader();
  } 
  /* User Is At Top Of Page */
  else {
    ExpandHeader();
  }
}

function CompressHeader(){
  var HeaderNav = document.getElementById("WrapperHeader");
  var HeaderContent = document.getElementById("HeaderContainer");
  var AboutContent = document.getElementById("ContentAbout");
  var Spacer = document.getElementById("Spacer");

  HeaderNav.style.height = "10vh";
  Spacer.style.height= "10vh";
  Spacer.style.margin = "0";
  HeaderContainer.style.display = "none";
}

function ExpandHeader(){
  var HeaderNav = document.getElementById("WrapperHeader");
  var HeaderContent = document.getElementById("HeaderContainer");
  var AboutContent = document.getElementById("ContentAbout");
  var Spacer = document.getElementById("Spacer");

  HeaderNav.style.height = "90vh";
  Spacer.style.height= "10vh";
  Spacer.style.marginTop = "90vh";
  HeaderContainer.style.display = "flex";

  ClearNavLinkSelection();
}

function ClearNavLinkSelection(){
  for(i=0; i < HeadersLength; ++i ){
    var NavLink = document.getElementById(NavLinks[i]);
    NavLink.setAttribute("style","background: var(--BlueDark );");
    if(NavLink.classList.contains("selected")){
      NavLink.classList.remove("selected");

    }
  }
  CurrentHeader = -1;
  PreviousHeader = -1;
}
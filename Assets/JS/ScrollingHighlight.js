// Some Globals for this script
var Headers = ["HeaderWelcome", "HeaderAbout", "HeaderEducation", "HeaderProjects", "HeaderSkills", "HeaderContact"],
Sidebars = ["SidebarWelcome", "SidebarAbout", "SidebarEducation", "SidebarProjects", "SidebarSkills", "SidebarContact"],
HeadersLength = Headers.length,
CurrentHeader  = -1,
PreviousHeader = -1;

// Initial Call
HandleHeaderInView();

// On Scroll Listener
window.onscroll = function(){
  HandleHeaderInView();
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
    UpdateSideBar(CurrentHeader);
    PreviousHeader = CurrentHeader;
  }
}

function UpdateSideBar(index){
  for(i=0; i < HeadersLength; ++i ){
    var Sidebar = document.getElementById(Sidebars[i]);
    if(i != index ){
      Sidebar.setAttribute("style","background-image: linear-gradient(to top, var(--BlueLight ), var(--BlueDark )); background-repeat:  no-repeat; background-size: 100% 100%;");
    }
    else{
      Sidebar.setAttribute("style","background-image: linear-gradient(to top, var(--BlueLight ), var(--GrayDark )); background-repeat:  no-repeat; background-size: 100% 100%;");
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

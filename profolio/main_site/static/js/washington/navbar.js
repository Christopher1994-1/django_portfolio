window.onscroll = function() {
    let secondNavbar = document.querySelector(".navbar2");
    let navbarPlaceholder = document.querySelector(".navbar-placeholder");
    if (window.pageYOffset >= 250) {
      secondNavbar.style.position = "fixed";
      secondNavbar.style.top = "0";
      secondNavbar.style.width = "100%";
      secondNavbar.style.zIndex = "1";
      secondNavbar.style.visibility = 'inherit';
      secondNavbar.style.transition = "top 0.6s ease-in-out";

    //   navbarPlaceholder.style.display = "block";
    //   navbarPlaceholder.style.height = secondNavbar.offsetHeight + "px";
    }
      
      else if (window.pageYOffset < 250) {
      secondNavbar.style.top = "-70px";
      secondNavbar.style.position = "absolute";
      secondNavbar.style.visibility = 'hidden';
      navbarPlaceholder.style.display = "none";
      navbarPlaceholder.style.height = "0";
    }
  };
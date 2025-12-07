window.addEventListener('load', function() {
    var jumbo_words = document.getElementById('jumbo-main-messageID');

    if (jumbo_words) {
        jumbo_words.style.opacity = 1;
        jumbo_words.style.transform = 'translateY(0)';
    }
    
});


function menu_narbar_link() {
    // function that handles the hamburger menu dropdown option for the navbar
    const dropdown_menu = document.getElementById('dropdown_ID');

    if (dropdown_menu.style.display == 'block') {
        dropdown_menu.style.display = 'none';
    } else {
        dropdown_menu.style.display = 'block';
    }
};


function scroll_navbar_dropdown() {
    // function that handles hamburger pie button/icon dropdown

    const scroll_navbar_dropdownID = document.getElementById('dropdown-scroll-navbarID');
    let offThing = document.getElementById('right-arrowID');

    if (scroll_navbar_dropdownID.style.display == 'block') {
        scroll_navbar_dropdownID.style.display = 'none';
        offThing.style.visibility = 'visible';
    } else {
        scroll_navbar_dropdownID.style.display = 'block';
        offThing.style.visibility = 'hidden';
    }
}


window.onscroll = function() {
    // function that handles the scroll bar, when pageOffset is over 250px scroll navbar appears

    if (window.pageYOffset >= 250) {
        const scroll_navbar = document.getElementById('scroll-navbarID');

        scroll_navbar.style.display = 'block';
        scroll_navbar.style.position = 'fixed';
    } 
    else if (window.pageYOffset <= 250) {
        const scroll_navbar = document.getElementById('scroll-navbarID');

        scroll_navbar.style.display = 'none';

    }
};
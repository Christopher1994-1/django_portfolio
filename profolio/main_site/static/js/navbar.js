let hamburger_menu = document.getElementById('hamburgerMenu_linksID');
let projects = document.getElementById('hamburgerMenu_projectsID');


function open_menu() {
    hamburger_menu.style.display = 'block';
}


function closeX() {
    hamburger_menu.style.display = 'none';
}

function closeX2() {
    projects.style.display = 'none';
}


function open_projects_(event) {
    event.preventDefault();
    hamburger_menu.style.display = 'none';
    projects.style.display = 'block'
}


function back() {
    projects.style.display = 'none'
    hamburger_menu.style.display = 'block';
}





let isHovering = false

function showPopup() {
    isHovering = true;
    document.getElementById("popup-element").style.display = "block";
    document.getElementById("popup-element").style.display = "flex";
    document.getElementById("popup-element").style.flexDirection = "column";
}

function hidePopup() {
    if (!isHovering) {
        document.getElementById("popup-element").style.display = "none";
    }
}

document.getElementById("popup-element").addEventListener("mouseover", function () {
    showPopup();
});

document.getElementById("popup-element").addEventListener("mouseout", function () {
    isHovering = false;
    hidePopup();
});


function showPopup2() {
    document.getElementById("popup-element").style.display = "none";
};





window.onscroll = function() {
    // function that handles the scroll bar, when pageOffset is over 250px scroll navbar appears

    if (window.pageYOffset >= 250) {
        const scroll_navbar = document.getElementById('scroll-navbarID');

        scroll_navbar.style.display = 'block';
        scroll_navbar.style.position = 'fixed';
        scroll_navbar.style.display = 'flex';
        scroll_navbar.style.alignItems = 'center';
        
    } 
    else if (window.pageYOffset <= 250) {
        const scroll_navbar = document.getElementById('scroll-navbarID');

        scroll_navbar.style.display = 'none';

    }
};

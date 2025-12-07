
// dots
const first_displayDOTS = document.getElementById('firstClientsDots');
const second_displayDOTS = document.getElementById('secondClientsDots');



// See more button
const see_more_button = document.getElementById('see-more-displayID');


// The two displays
const first_display = document.getElementById('clientsID');
const second_display = document.getElementById('clients_displayID');

// Get the computed styles of the elements
const firstDisplayStyle = getComputedStyle(first_display).display;
const secondDisplayStyle = getComputedStyle(second_display).display;




function switch_between() {
// Function that is used to switch between the two client testimonials

if (firstDisplayStyle === 'grid') {

    first_display.classList.remove('slide-Out');
    first_display.classList.remove('slide-back');
    first_display.classList.remove('slide-In');
    first_display.classList.add('slide-Out');

    first_displayDOTS.style.display = 'none';
    second_displayDOTS.style.display = 'block';


    see_more_button.style.opacity = 1;
    see_more_button.style.transform = 'translateY(0)';


    setTimeout(() => {
    first_display.style.display = 'none';
    first_display.classList.remove('slide-Out');

    second_display.classList.remove('slide-In');
    second_display.classList.remove('slide-back');
    second_display.classList.remove('slide-out2');
    second_display.classList.remove('slide-forward');

    
    second_display.classList.add('slide-forward')
    second_display.classList.add('slide-In');
    second_display.style.display = 'block';
    second_display.style.display = 'grid';
    }, 500); // Change the delay (in milliseconds) to match the animation duration
}
}

function switch_between1() {
// Function that is used to switch between the two client testimonials
const firstDisplayStyle = getComputedStyle(first_display).display;

if (first_display.style.display == 'none') {

    second_display.classList.add('slide-back')
    second_display.classList.add('slide-out2');

    see_more_button.style.opacity = 0;
    see_more_button.style.transform = 'translateY(100%)';

    first_displayDOTS.style.display = 'block';
    second_displayDOTS.style.display = 'none';



    setTimeout(() => {
    second_display.style.display = 'none';
    second_display.classList.remove('slide-forward');
    second_display.classList.remove('slide-in');

    first_display.classList.add('slide-back');
    first_display.classList.add('slide-In');
    first_display.style.display = 'block';
    first_display.style.display = 'grid';
    }, 500); // Change the delay (in milliseconds) to match the animation duration
}
}

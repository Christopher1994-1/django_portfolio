var popup = document.getElementById('popup_cookiesID');


window.addEventListener('load', function() {

    setTimeout(function() {
        popup.style.opacity = 1;
    }, 6000);

});



function accepted_popup() {
    popup.style.opacity = 0;
}
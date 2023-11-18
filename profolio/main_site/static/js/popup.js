var popup = document.getElementById('popup_cookiesID');
let activate = false



function doNothing() {

}


window.addEventListener('load', function() {

    if (activate == true) {
        setTimeout(function() {
            popup.style.opacity = 1;
            popup.style.zIndex = 220
        }, 1000);
    } else {
        doNothing()
    }

});



function accepted_popup() {
    popup.style.opacity = 0;
    popup.style.zIndex = -20;
    popup.style.display = 'none';
}
var popup = document.getElementById('popup_cookiesID');
let activate = false



function doNothing() {

}


window.addEventListener('load', function() {

    if (activate == true) {
        setTimeout(function() {
            popup.style.opacity = 1;
        }, 6000);
    } else {
        doNothing()
    }

});



function accepted_popup() {
    popup.style.opacity = 0;
}
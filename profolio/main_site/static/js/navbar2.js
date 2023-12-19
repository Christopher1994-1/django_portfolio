let isHovering2 = false;

function showPopup2Scroll() {
    isHovering2 = true;
    document.getElementById("popup-element2").style.display = "grid";
    document.getElementById("popup-element2").style.gridTemplateColumns = '1fr 1fr 1fr';
}

function hidePopup2Scroll() {
    if (!isHovering2) {
        document.getElementById("popup-element2").style.display = "none";
    }
}

document.getElementById("popup-element2").addEventListener("mouseover", function () {
    showPopup2Scroll();
});

document.getElementById("popup-element2").addEventListener("mouseout", function () {
    isHovering2 = false;
    hidePopup2Scroll();
});


function showPopup2() {
    isHovering = true;
    document.getElementById("popup-element2").style.display = "block";
    document.getElementById("popup-element2").style.display = "grid";
    document.getElementById("popup-element2").style.gridTemplateColumns = '1fr 1fr 1fr';
}

function hidePopup2() {
    if (!isHovering) {
        document.getElementById("popup-element2").style.display = "none";
    }
}




function open_arrow2(thing) {
    let arrowkeySTR = 'arrowkeyq' + thing;
    let arrowkey = document.getElementById(arrowkeySTR);

    arrowkey.style.opacity = 1;
    arrowkey.style.transform = 'translateY(0)';
}



function close_arrow2(thing) {
    let arrowkeySTR = 'arrowkeyq' + thing;
    let arrowkey = document.getElementById(arrowkeySTR);

    arrowkey.style.transform = 'translateX(-100%)';
    arrowkey.style.opacity = 0;
}


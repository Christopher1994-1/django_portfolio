let isHovering2 = false;

function showPopup2Scroll() {
    isHovering2 = true;
    document.getElementById("popup-element2").style.display = "flex";
    document.getElementById("popup-element2").style.flexDirection = "column";
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


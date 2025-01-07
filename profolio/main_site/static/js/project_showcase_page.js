"use strict";
let mainImage = document.getElementById('mainCoverPhoto');
let mainImageContainer = document.getElementById('mainCoverPhoto_Container');
if (mainImageContainer) {
    mainImageContainer.addEventListener("mouseenter", function () {
        mainImage.style.filter = "brightness(40%)";
        const newDiv = document.createElement('div');
        newDiv.id = "iconID";
        newDiv.innerHTML = '<i class="fa-solid fa-magnifying-glass-plus" id="mainImageCoverIcon"></i>';
        mainImageContainer.style.position = "relative";
        mainImageContainer.style.cursor = "pointer";
        mainImageContainer.style.zIndex = "0";
        newDiv.style.position = "absolute";
        newDiv.style.top = "50%";
        newDiv.style.left = "50%";
        newDiv.style.transform = "translate(-50%, -50%)";
        newDiv.style.zIndex = "1";
        mainImageContainer.appendChild(newDiv);
    });
    mainImageContainer.addEventListener("mouseleave", function () {
        let newDiv = document.getElementById("iconID");
        if (newDiv) {
            mainImageContainer.removeChild(newDiv);
        }
        mainImage.style.filter = "brightness(100%)";
    });
}
;
mainImageContainer.addEventListener("click", function () {
});

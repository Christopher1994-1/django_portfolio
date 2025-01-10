"use strict";
let mainImage = document.getElementById('mmi');
let mainImageContainer = document.getElementById('mainCoverPhoto_Container');
if (mainImage) {
    mainImage.addEventListener("mouseenter", function () {
        mainImage.style.filter = "brightness(40%)";
        const newDiv = document.createElement('div');
        newDiv.id = "iconID";
        newDiv.innerHTML = '<i class="fa-solid fa-magnifying-glass-plus" id="mainImageCoverIcon"></i>';
        mainImage.style.position = "relative";
        newDiv.style.position = "absolute";
        newDiv.style.top = "50%";
        newDiv.style.left = "50%";
        newDiv.style.transform = "translate(-50%, -50%)";
        newDiv.style.zIndex = "1";
        mainImage.appendChild(newDiv);
    });
    mainImage.addEventListener("mouseleave", function () {
        let newDiv = document.getElementById("iconID");
        if (newDiv) {
            mainImage.removeChild(newDiv);
        }
        mainImage.style.filter = "brightness(100%)";
    });
}
;
function main_image_viewer(image) {
    const newDiv = document.createElement('div');
    newDiv.id = "image_viewer";
    newDiv.innerHTML = `
    <div id="xbutton">
        <button onclick="close_main_image_viewer()"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <img src="${image}">
    `;
    document.body.appendChild(newDiv);
}
;
function close_main_image_viewer() {
    let mainViewer = document.getElementById('image_viewer');
    let overlay = document.getElementById('image_overlay');
    document.body.removeChild(overlay);
    document.body.removeChild(mainViewer);
}
;
mainImage.addEventListener("click", function () {
    const newDiv = document.createElement('div');
    newDiv.id = "image_overlay";
    newDiv.style.position = 'fixed';
    newDiv.style.width = '100%';
    newDiv.style.height = '100%';
    newDiv.style.top = '0';
    newDiv.style.backgroundColor = '#0000007d';
    document.body.appendChild(newDiv);
    const element = document.getElementById("mainCoverPhoto");
    if (element) {
        let imageCover = element.getAttribute("data-image");
        main_image_viewer(imageCover);
    }
});

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
function change_main_viewer(image) {
    let main_image_viewer = document.getElementById('main_image');
    main_image_viewer.src = image;
    console.log(image);
}
;
function main_image_viewer(image) {
    const newDiv = document.createElement('div');
    newDiv.id = "image_viewer";
    newDiv.innerHTML = `
    <div id="xbutton">
        <button onclick="close_main_image_viewer()"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <img src="${image}" id="main_image">

    <div id="left-side-button">
        <button onclick="leftSideButton()"><i class="fa-solid fa-arrow-left"></i></button>
    </div>

    <div id="right-side-button">
        <button onclick="rightSideButton()"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
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
function index_figured(stringList) {
    let main_image_viewer = document.getElementById('main_image');
    let main_image_viewer_src = main_image_viewer.src;
    let firstIndex = stringList[0];
    if (main_image_viewer_src == firstIndex) {
        return 1;
    }
    else {
        return 0;
    }
}
;
function rightSideButton() {
    let inputImages = document.getElementById('listofimages');
    let inputImages_value = inputImages.value;
    let stringList = inputImages_value.split(';');
    let nextIndex = index_figured(stringList);
    change_main_viewer(stringList[nextIndex]);
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

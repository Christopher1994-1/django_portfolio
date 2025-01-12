"use strict";
let mainImage = document.getElementById('mmi');
let mainImageContainer = document.getElementById('mainCoverPhoto_Container');
function left_show_button(state) {
    let leftSideButton = document.getElementById('left-side-button');
    leftSideButton.style.display = state;
}
;
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
    var _a;
    let main_image_viewer = document.getElementById('main_image');
    let main_image_viewer_src = main_image_viewer.src;
    let firstIndex = stringList[0];
    let length_of_list = stringList.length;
    let ss_name = "next-image-in-hoster";
    if (main_image_viewer_src == firstIndex) {
        localStorage.setItem(ss_name, '1');
        left_show_button('block');
        return 1;
    }
    else {
        let lastIndex = (_a = localStorage.getItem(ss_name)) !== null && _a !== void 0 ? _a : '';
        let intergerIndex = Number(lastIndex) + 1;
        if (length_of_list === intergerIndex) {
            localStorage.removeItem(ss_name);
            left_show_button('none');
            return 0;
        }
        else {
            localStorage.setItem(ss_name, intergerIndex.toString());
            left_show_button('block');
            return intergerIndex;
        }
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
function leftSideButton() {
    let current_index = Number(localStorage.getItem("next-image-in-hoster"));
    let inputImages = document.getElementById('listofimages');
    let inputImages_value = inputImages.value;
    let stringList = inputImages_value.split(';');
    let current_now_index = current_index - 1;
    if (current_now_index === 0) {
        localStorage.setItem("next-image-in-hoster", current_now_index.toString());
        let image = stringList[current_now_index];
        let main_image_viewer = document.getElementById('main_image');
        main_image_viewer.src = image;
        left_show_button("none");
    }
    else {
        localStorage.setItem("next-image-in-hoster", current_now_index.toString());
        let image = stringList[current_now_index];
        let main_image_viewer = document.getElementById('main_image');
        main_image_viewer.src = image;
    }
    ;
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
    ;
});
window.addEventListener('beforeunload', (event) => {
    localStorage.removeItem('next-image-in-hoster');
});

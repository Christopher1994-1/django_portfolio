"use strict";
let mainImage = document.getElementById('mmi');
let mainImageContainer = document.getElementById('mainCoverPhoto_Container');
const LOCAL_STORGE_INDEX_NAME = "next-image-in-hoster";
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
    if (main_image_viewer_src == firstIndex) {
        localStorage.setItem(LOCAL_STORGE_INDEX_NAME, '1');
        left_show_button('block');
        return 1;
    }
    else {
        let lastIndex = (_a = localStorage.getItem(LOCAL_STORGE_INDEX_NAME)) !== null && _a !== void 0 ? _a : '';
        let intergerIndex = Number(lastIndex) + 1;
        if (length_of_list === intergerIndex) {
            localStorage.removeItem(LOCAL_STORGE_INDEX_NAME);
            left_show_button('none');
            return 0;
        }
        else {
            localStorage.setItem(LOCAL_STORGE_INDEX_NAME, intergerIndex.toString());
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
    let current_index = Number(localStorage.getItem(LOCAL_STORGE_INDEX_NAME));
    let inputImages = document.getElementById('listofimages');
    let inputImages_value = inputImages.value;
    let stringList = inputImages_value.split(';');
    let current_now_index = current_index - 1;
    if (current_now_index === 0) {
        localStorage.setItem(LOCAL_STORGE_INDEX_NAME, current_now_index.toString());
        let image = stringList[current_now_index];
        let main_image_viewer = document.getElementById('main_image');
        main_image_viewer.src = image;
        left_show_button("none");
    }
    else {
        localStorage.setItem(LOCAL_STORGE_INDEX_NAME, current_now_index.toString());
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
    localStorage.removeItem(LOCAL_STORGE_INDEX_NAME);
});
function main_image_viewer_gallery(image) {
    const newDiv = document.createElement('div');
    newDiv.id = "image_viewer2";
    newDiv.innerHTML = `
    <div id="xbutton">
        <button onclick="close_main_image_viewer2()"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <img src="${image}" id="main_image">

    <div id="left-side-button">
        <button onclick="leftSideButton2('${image}')"><i class="fa-solid fa-arrow-left"></i></button>
    </div>

    <div id="right-side-button">
        <button onclick="rightSideButton2('${image}')"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
    `;
    document.body.appendChild(newDiv);
    localStorage.removeItem(LOCAL_STORGE_INDEX_NAME);
}
;
function close_main_image_viewer2() {
    let overlay = document.getElementById('image_overlay');
    let imageViewer = document.getElementById('image_viewer2');
    document.body.removeChild(overlay);
    document.body.removeChild(imageViewer);
}
;
function leftSideButton2(image) {
}
;
function rightSideButton2(image) {
    let lastIndex = localStorage.getItem(LOCAL_STORGE_INDEX_NAME);
    let loi = document.getElementById('listofimages');
    let listOfImages = loi.value.split(';');
    if (listOfImages.length - 1 === Number(lastIndex)) {
        localStorage.removeItem(LOCAL_STORGE_INDEX_NAME);
        let nextImage = listOfImages[0];
        let main_image = document.getElementById('main_image');
        main_image.src = nextImage;
    }
    else if (lastIndex) {
        let lastIndex_Number = Number(lastIndex);
        let currentIndex = lastIndex_Number + 1;
        let nextImage = listOfImages[currentIndex];
        let main_image = document.getElementById('main_image');
        main_image.src = nextImage;
        localStorage.setItem(LOCAL_STORGE_INDEX_NAME, currentIndex.toString());
    }
    else {
        let currentIndex = listOfImages.indexOf(image) + 1;
        let nextImage = listOfImages[currentIndex];
        let main_image = document.getElementById('main_image');
        main_image.src = nextImage;
        localStorage.setItem(LOCAL_STORGE_INDEX_NAME, currentIndex.toString());
    }
    ;
}
;
function open_gallery_image(image) {
    const newDiv = document.createElement('div');
    newDiv.id = "image_overlay";
    newDiv.style.position = 'fixed';
    newDiv.style.width = '100%';
    newDiv.style.height = '100%';
    newDiv.style.top = '0';
    newDiv.style.backgroundColor = '#0000007d';
    document.body.appendChild(newDiv);
    main_image_viewer_gallery(image);
}
;

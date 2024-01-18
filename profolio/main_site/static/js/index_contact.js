"use strict";
let project_quickView = document.getElementById('entryWarningID');
let project_title = document.getElementById('project_titleID');
let projectImage = document.getElementById('popupImageID');
let projectImageLink = document.getElementById('imageLINKID');
function add_links(links_array) {
    let gitHubButton = document.getElementById('link2gitubID');
    let gitHubLink = links_array[0];
    gitHubButton.href = gitHubLink;
    gitHubButton.target = "_blank";
}
function add_useCaes(data) {
    let useCaes_container = document.getElementById('casesID');
    data.forEach(function (value, index) {
        var newElement = document.createElement('p');
        newElement.textContent = `#${value.trim()}`;
        useCaes_container.appendChild(newElement);
    });
}
;
function add_tags(data) {
    let tags_container = document.getElementById('tagsID');
    data.forEach(function (value, index) {
        var newElement = document.createElement('p');
        newElement.setAttribute('id', `tagID${index}`);
        newElement.textContent = `#${value.trim()}`;
        tags_container.appendChild(newElement);
    });
}
function add_para(data) {
    let value = data;
    let paraContainer = document.getElementById('shortDID');
    var newElement = document.createElement('p');
    newElement.textContent = `${value}`;
    paraContainer.appendChild(newElement);
}
function open_quickshot_projectHTML(data) {
    var _a;
    project_quickView.style.display = 'flex';
    project_title.innerHTML = data[1];
    projectImageLink.href = '';
    projectImage.src = data[5];
    projectImage.alt = data[1];
    document.getElementById('tagsID').innerHTML = '';
    document.getElementById('shortDID').innerHTML = '';
    (_a = document.getElementById('casesID')) === null || _a === void 0 ? void 0 : _a.innerHTML = '';
    let tags = `${data[3]}`.split(',');
    let para = data[8];
    let useCases = `${data[13]}`.split(',');
    let githubLink = data[7];
    let links_array = [githubLink,];
    add_tags(tags);
    add_para(para);
    add_useCaes(useCases);
    add_links(links_array);
}
function closePopup() {
    project_quickView.style.display = 'none';
}
function open_quickshot_project(id) {
    $.ajax({
        url: '/quickshot_search_query/',
        type: 'GET',
        data: { 'id': id },
        dataType: 'json',
        success: function (data) {
            open_quickshot_projectHTML(data.data);
        },
        error: function (error) {
            console.log('Error:', error);
        }
    });
}
const imgDiv = document.querySelector(".img-div");
const img = imgDiv.querySelector("img");
const liveDemoButton = imgDiv.querySelector(".live-demo-button");
img.addEventListener("mouseover", () => {
    liveDemoButton.style.display = "block";
    img.style.filter = 'brightness(0.1)';
});
liveDemoButton.addEventListener("mouseover", () => {
    liveDemoButton.style.display = "block";
    img.style.filter = 'brightness(0.1)';
});
liveDemoButton.addEventListener("mouseout", () => {
    liveDemoButton.style.display = "none";
    img.style.filter = 'brightness(1)';
});
img.addEventListener("mouseout", () => {
    liveDemoButton.style.display = "none";
    img.style.filter = 'brightness(1)';
});

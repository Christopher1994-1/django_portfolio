"use strict";
function check_server_status1() {
    let l = document.getElementById('serverStatus');
    const SERVER_STATUS = l.value;
    return SERVER_STATUS.toLowerCase() === "true";
}
function get_url() {
    let bool = check_server_status();
    if (bool) {
        return "http://cejkirk.com/projects/";
    }
    else {
        return "http://127.0.0.1:8000/projects/";
    }
    ;
}
;
let project_quickView = document.getElementById('entryWarningID');
let project_title = document.getElementById('project_titleID');
let projectImage = document.getElementById('popupImageID');
let projectImageLink = document.getElementById('imageLINKID');
function add_links(links_array) {
    let gitHubButton = document.getElementById('link2gitubID');
    let liveDemoButton = document.getElementById('live-demo-a-tag-button');
    let liveDemoCoverImage = document.getElementById('imageLINKID');
    let LearnMoreButton = document.getElementById('learnMoreQuickShot');
    let gitHubLink = links_array[0];
    let liveDemoLink = links_array[1];
    let projectShowCase = `projects_showcase/${links_array[2]}`;
    gitHubButton.href = gitHubLink;
    gitHubButton.target = "_blank";
    liveDemoButton.href = liveDemoLink;
    liveDemoButton.target = "_blank";
    liveDemoCoverImage.href = liveDemoLink;
    liveDemoCoverImage.target = "_blank";
    LearnMoreButton.href = projectShowCase;
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
    project_quickView.style.display = 'flex';
    project_title.innerHTML = data[1];
    projectImageLink.href = '';
    projectImage.src = data[12];
    projectImage.alt = data[1];
    const tagsElement = document.getElementById('tagsID');
    if (tagsElement) {
        tagsElement.innerHTML = '';
    }
    ;
    const shortDElement = document.getElementById('shortDID');
    if (shortDElement) {
        shortDElement.innerHTML = '';
    }
    ;
    const casesElement = document.getElementById('casesID');
    if (casesElement) {
        casesElement.innerHTML = '';
    }
    ;
    let tags = `${data[3]}`.split(',');
    let para = data[2];
    let useCases = `${data[11]}`.split(',');
    let githubLink = data[6];
    let liveDemoLink = `projects/${data[5]}`;
    let links_array = [githubLink, liveDemoLink, data[1]];
    console.log(data);
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
let filterButton = document.getElementById('filterID');
let filterContainer = document.getElementById('filter_popupID');
let filterCloseButton = document.getElementById('filterCloseID');
filterButton.addEventListener('click', () => {
    filterContainer.style.display = 'flex';
});
filterCloseButton.addEventListener('click', () => {
    filterContainer.style.display = 'none';
});
let filtered = [];
let IDs_clicked = [];
let useCases_ = ['|'];
let api_thing = document.getElementById('useCases_filter_APIs');
api_thing.addEventListener('click', () => {
    api_thing.style.backgroundColor = 'grey';
    useCases_.push('apis');
    IDs_clicked.push("useCases_filter_APIs");
});
let dataFocused = document.getElementById('useCases_filter_data-focused');
dataFocused.addEventListener('click', () => {
    dataFocused.style.backgroundColor = 'grey';
    useCases_.push('data focused');
    IDs_clicked.push('useCases_filter_data-focused');
});
let errorHandling_ = document.getElementById('useCases_filter_error-handling');
errorHandling_.addEventListener('click', () => {
    errorHandling_.style.backgroundColor = 'grey';
    useCases_.push('error handling');
    IDs_clicked.push('useCases_filter_error-handling');
});
let onlinePayments_ = document.getElementById('useCases_filter_online-payments');
onlinePayments_.addEventListener('click', () => {
    onlinePayments_.style.backgroundColor = 'grey';
    useCases_.push('online payment');
    IDs_clicked.push('useCases_filter_online-payments');
});
let dataCollecting_ = document.getElementById('useCases_filter_data-collecting');
dataCollecting_.addEventListener('click', () => {
    dataCollecting_.style.backgroundColor = 'grey';
    useCases_.push('data collecting');
    IDs_clicked.push('useCases_filter_data-collecting');
});
let webFrameworks_ = document.getElementById('useCases_filter_web-frameworks');
webFrameworks_.addEventListener('click', () => {
    webFrameworks_.style.backgroundColor = 'grey';
    useCases_.push('web frameworks');
    IDs_clicked.push('useCases_filter_web-frameworks');
});
let desktopDev_ = document.getElementById('useCases_filter_desktop-development');
desktopDev_.addEventListener('click', () => {
    desktopDev_.style.backgroundColor = 'grey';
    useCases_.push('desktop development');
    IDs_clicked.push('useCases_filter_desktop-development');
});
let techUsed_ = ['|'];
let python__ = document.getElementById('techUsed_filter_python');
python__.addEventListener('click', () => {
    python__.style.backgroundColor = 'grey';
    techUsed_.push('python');
    IDs_clicked.push('techUsed_filter_python');
});
let ts_ = document.getElementById('techUsed_filter_typescript');
ts_.addEventListener('click', () => {
    ts_.style.backgroundColor = 'grey';
    techUsed_.push('typescript');
    IDs_clicked.push('techUsed_filter_typescript');
});
let js__ = document.getElementById('techUsed_filter_javascript');
js__.addEventListener('click', () => {
    js__.style.backgroundColor = 'grey';
    techUsed_.push('javascript');
    IDs_clicked.push('techUsed_filter_javascript');
});
let scss_ = document.getElementById('techUsed_filter_scss');
scss_.addEventListener('click', () => {
    scss_.style.backgroundColor = 'grey';
    techUsed_.push('scss');
    IDs_clicked.push('techUsed_filter_scss');
});
let css_ = document.getElementById('techUsed_filter_css');
css_.addEventListener('click', () => {
    css_.style.backgroundColor = 'grey';
    techUsed_.push('css');
    IDs_clicked.push('techUsed_filter_css');
});
let django_ = document.getElementById('techUsed_filter_django');
django_.addEventListener('click', () => {
    django_.style.backgroundColor = 'grey';
    techUsed_.push('django');
    IDs_clicked.push('techUsed_filter_django');
});
let flask_ = document.getElementById('techUsed_filter_flask');
flask_.addEventListener('click', () => {
    flask_.style.backgroundColor = 'grey';
    techUsed_.push('flask');
    IDs_clicked.push('techUsed_filter_flask');
});
let Type_ = ['|'];
let fullStackAPp_ = document.getElementById('type_full-stack-app');
fullStackAPp_.addEventListener('click', () => {
    fullStackAPp_.style.backgroundColor = 'grey';
    Type_.push('full stack apps');
    IDs_clicked.push('type_full-stack-app');
});
let serverSideApp_ = document.getElementById('type_server-side-app');
serverSideApp_.addEventListener('click', () => {
    serverSideApp_.style.backgroundColor = 'grey';
    Type_.push('server side apps');
    IDs_clicked.push('type_server-side-app');
});
let clientSideApp_ = document.getElementById('type_client-side-app');
clientSideApp_.addEventListener('click', () => {
    clientSideApp_.style.backgroundColor = 'grey';
    Type_.push('client side apps');
    IDs_clicked.push('type_client-side-app');
});
let resetFilterButton = document.getElementById('reset_filter_button');
let filterFilterButton = document.getElementById('filter_filter_button');
let filter_filter_button_Atag = document.getElementById('filter_filter_buttonATAG');
resetFilterButton.addEventListener('click', () => {
    filtered.length = '';
    for (let clicked of IDs_clicked) {
        let dd = document.getElementById(`${clicked}`);
        dd.style.backgroundColor = '#333';
    }
    IDs_clicked.length = '';
});
filterFilterButton.addEventListener('click', () => {
    let combinedArray = useCases_.concat(techUsed_, Type_);
    let hrefString = combinedArray.join(', ');
    let projects_url = get_url();
    let fullURL = `${projects_url}${hrefString}/`;
    window.location.href = fullURL;
    filterContainer.style.display = 'none';
});

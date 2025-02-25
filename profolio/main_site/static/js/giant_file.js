"use strict";
let projectsDropdown = document.getElementById("projects-page");
const LINKS2 = {
    starbucks_project: "projects_showcase/Starbucks Remake",
    washington_project: "projects_showcase/Washington",
    ofdream_project: "projects_showcase/Ofdream",
    stripe_payment: "projects_showcase/Stripe Backend Payment/",
    chatgpt: "/projects_showcase/ChatGPT Replica/",
    bigfoot: "",
    calapp: "projects_showcase/GUI Calculator App"
};
function open_arrow(thing) {
    let arrowkeySTR = 'arrowkey' + thing;
    let arrowkey = document.getElementById(arrowkeySTR);
    if (arrowkey) {
        arrowkey.style.marginLeft = "5px";
        arrowkey.style.opacity = '1';
    }
}
;
function close_arrow(thing) {
    let arrowkeySTR = 'arrowkey' + thing;
    let arrowkey = document.getElementById(arrowkeySTR);
    if (arrowkey) {
        arrowkey.style.opacity = "0";
    }
}
;
let innherHTML2 = `
<div class="item">

    <h5>Web Development</h5>
    <hr class="navbar_dropdownHR">
    
    <div class="slidepart">
        <a href="${LINKS2.starbucks_project}" onmouseover="open_arrow('1')" onmouseout="close_arrow('1')">Starbucks Remake</a>
        <i class="fa-solid fa-arrow-right arrowkey" id="arrowkey1"></i>
    </div>
    <div class="slidepart">
        <a href="${LINKS2.washington_project}" onmouseover="open_arrow('2')" onmouseout="close_arrow('2')">Washington</a>
        <i class="fa-solid fa-arrow-right arrowkey" id="arrowkey2"></i>
    </div>

    <div class="slidepart">
        <a href="${LINKS2.ofdream_project}" onmouseover="open_arrow('3')" onmouseout="close_arrow('3')">Ofdream</a>
        <i class="fa-solid fa-arrow-right arrowkey" id="arrowkey3"></i>
    </div>

    <hr class="navbar_dropdownHR">

    <div class="info_dropdown">
        <p>My web development consists mainly of frontend technologies such as HTML, SCSS/CSS, JavaScript, and TypeScript. I focus on crafting engaging and responsive user interfaces to enhance the overall experience. Additionally, I optimize performance, ensure accessibility, and integrate APIs to build seamless and dynamic applications.</p>
    </div>

    <div class="skills" id="skills1">
        <h5>Skills:</h5>
        <p>HTML5, CSS, Scss, JavaScript, TypeScript</p>
    </div>
</div>








<div class="item">
    <h5>Backend Development</h5>
    <hr class="navbar_dropdownHR">
    <div class="slidepart">
        <a href="${LINKS2.stripe_payment}" onmouseover="open_arrow('4')" onmouseout="close_arrow('4')">Stripe Payment API</a>
        <i class="fa-solid fa-arrow-right arrowkey" id="arrowkey4"></i>
    </div>
    <div class="slidepart">
        <a href="${LINKS2.chatgpt}" onmouseover="open_arrow('5')" onmouseout="close_arrow('5')">ChatGPT Remake</a>
        <i class="fa-solid fa-arrow-right arrowkey" id="arrowkey5"></i>
    </div>

    <div class="slidepart">
        <a href="#" onmouseover="open_arrow('6')" onmouseout="close_arrow('6')">Bigfoot Dataset Visualization</a>
        <i class="fa-solid fa-arrow-right arrowkey" id="arrowkey6"></i>
    </div>

    <hr class="navbar_dropdownHR">

    <div class="info_dropdown" id="backendINFO">
        <p>In my backend development journey, I've harnessed the power of Python, utilizing web frameworks such as Django and Flask. My experience also extends to C# and ASP.NET Core. I have worked on various API integrations and have hands-on experience with different database systems, including MySQL, SQLite3, and MongoDB. Additionally, I've successfully managed and processed data using Python's Pandas library to handle and visualize large datasets in a user-friendly manner.</p>
    </div>

    <div class="skills" id="skills2">
        <h5>Skills:</h5>
        <p>Python, APIs, Data handling and Visualization, Authentication, MySQL</p>
    </div>
</div>


<div class="item">
    <h5>Application Development</h5>
    <hr class="navbar_dropdownHR">
    <div class="slidepart">
        <a href="${LINKS2.calapp}" onmouseover="open_arrow('7')" onmouseout="close_arrow('7')">Desktop Calculator</a>
        <i class="fa-solid fa-arrow-right arrowkey" id="arrowkey7"></i>
    </div>

    <div class="slidepart">
        <a href="#" onmouseover="open_arrow('8')" onmouseout="close_arrow('8')">Voice Assistant</a>
        <i class="fa-solid fa-arrow-right arrowkey" id="arrowkey8"></i>
    </div>

    <div class="slidepart">
        <a href="#" onmouseover="open_arrow('9')" onmouseout="close_arrow('9')">Automated Program</a>
        <i class="fa-solid fa-arrow-right arrowkey" id="arrowkey9"></i>
    </div>


    <hr class="navbar_dropdownHR">

    <div class="info_dropdown">
        <p>Beyond web applications, I develop desktop software, automation scripts, and web scraping tools using Python and C#. I have experience building standalone applications, data processing pipelines, and system utilities. My work also involves integrating APIs, handling large datasets, and optimizing performance for efficient and scalable solutions across different platforms.</p>
    </div>

    <div class="skills" id="skills3">
        <h5>Skills:</h5>
        <p>Web Scrapping, Automation, Desktop Application, OOP</p>
    </div>
</div>



`;
if (projectsDropdown) {
    const dropdownContainer = document.createElement('div');
    dropdownContainer.className = 'dropdownContainer';
    dropdownContainer.innerHTML = innherHTML2;
    projectsDropdown.appendChild(dropdownContainer);
    dropdownContainer.style.display = 'none';
    let isHovered = false;
    projectsDropdown.addEventListener("mouseenter", function () {
        dropdownContainer.style.display = 'flex';
        isHovered = true;
    });
    dropdownContainer.addEventListener("mouseenter", function () {
        isHovered = true;
    });
    projectsDropdown.addEventListener("mouseleave", function () {
        setTimeout(() => {
            if (!isHovered) {
                dropdownContainer.style.display = 'none';
            }
        }, 20);
        isHovered = false;
    });
    dropdownContainer.addEventListener("mouseleave", function () {
        setTimeout(() => {
            if (!isHovered) {
                dropdownContainer.style.display = 'none';
            }
        }, 20);
        isHovered = false;
    });
}
function onScrollThreshold(threshold, callback) {
    let hasFired = false;
    window.addEventListener("scroll", () => {
        if (window.scrollY >= threshold && !hasFired) {
            hasFired = true;
            callback();
        }
        else if (window.scrollY < threshold) {
            hasFired = false;
        }
    });
}
onScrollThreshold(500, () => {
    let navbar01 = document.getElementById("navbar1010");
    if (navbar01) {
        navbar01.style.transition = "ease-in 0.3s";
        navbar01.style.backgroundColor = "grey";
    }
});
function onScrollUpThreshold(threshold, callback) {
    let hasFired = false;
    window.addEventListener("scroll", () => {
        if (window.scrollY <= threshold && !hasFired) {
            hasFired = true;
            callback();
        }
        else if (window.scrollY > threshold) {
            hasFired = false;
        }
    });
}
onScrollUpThreshold(200, () => {
    let navbar01 = document.getElementById("navbar1010");
    if (navbar01) {
        navbar01.style.transition = "ease-in 0.3s";
        navbar01.style.backgroundColor = "transparent";
    }
});
let mobileNavBurger = document.getElementById("buttonMenu");
let mobileNavBurger2 = document.getElementById("buttonMenu2");
const LINKS = {
    starbucks_project: "projects_showcase/Starbucks Remake",
    washington_project: "projects_showcase/Washington",
    ofdream_project: "projects_showcase/Ofdream",
    stripe_payment: "projects_showcase/Stripe Backend Payment/",
    chatgpt: "/projects_showcase/ChatGPT Replica/",
    bigfoot: "",
    calapp: "projects_showcase/GUI Calculator App"
};
function openSidePanel() {
    const newDiv = document.createElement('div');
    newDiv.id = "panel";
    newDiv.innerHTML = `
    <div id="mobile-side-panel">
  
      <div id="close-button-container">
        <button id="close-button"><i class="fa-solid fa-xmark"></i></button>
      </div>
  
        <div class="nav-item">
            <div class="nav-item-clickable" onclick="open_panel_options(${'clientside'})">
              <a>Client Side Apps</a>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div class="dropdown-content" id="clientside">
                <a href="${LINKS.starbucks_project}">Starbucks Remake</a>
                <a href="${LINKS.washington_project}">Washington</a>
                <a href="${LINKS.ofdream_project}">Ofdream</a>
            </div>
        </div>
  
        <div class="nav-item">
            <div class="nav-item-clickable" onclick="open_panel_options(${'serverside'})">
              <a>Server Side App</a>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div class="dropdown-content" id="serverside">
                <a href="${LINKS.stripe_payment}">Stripe Payment API</a>
                <a href="${LINKS.chatgpt}">ChatGPT Remake</a>
                <a href="#">Bigfoot Dataset Visualization</a>
            </div>
        </div>

        <div class="nav-item">
            <div class="nav-item-clickable" onclick="open_panel_options(${'apps'})">
              <a>Applications</a>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div class="dropdown-content" id="apps">
                <a href="${LINKS.calapp}">Calculator App</a>
            </div>
        </div>
  
        <div class="nav-item">
            <div class="nav-item-clickable">
              <a>About Me</a>
            </div>
        </div>
  
  
        <div class="nav-item">
            <div class="nav-item-clickable">
              <a href="/contact_page">Contact Me</a>
            </div>
        </div>
  
  
        <div class="nav-item">
            <div class="nav-item-clickable">
              <a href="/privacy-policy" >Privacy Policy</a>
            </div>
        </div>
  
  
    </div>
  
  `;
    document.body.appendChild(newDiv);
    let close_button = document.getElementById('close-button');
    let overlay = document.getElementById("overlay");
    close_button.addEventListener('click', () => {
        if (newDiv) {
            document.body.removeChild(newDiv);
            if (overlay) {
                document.body.removeChild(overlay);
            }
        }
    });
}
;
let boo = false;
function open_panel_options(option) {
    if (boo) {
        option.style.display = 'none';
        boo = false;
    }
    else {
        option.style.display = 'flex';
        boo = true;
    }
}
;
if (mobileNavBurger) {
    mobileNavBurger.addEventListener("click", function (event) {
        const newDiv = document.createElement('div');
        newDiv.id = "overlay";
        newDiv.style.position = "fixed";
        newDiv.style.top = "0";
        newDiv.style.left = "0";
        newDiv.style.width = "100%";
        newDiv.style.height = "100%";
        newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.61)";
        newDiv.style.zIndex = "15";
        document.body.appendChild(newDiv);
        openSidePanel();
        let overlay = document.getElementById("overlay");
        let panel = document.getElementById('panel');
        overlay.addEventListener('click', () => {
            if (newDiv) {
                document.body.removeChild(newDiv);
                if (panel) {
                    document.body.removeChild(panel);
                }
            }
        });
    });
}
;
if (mobileNavBurger2) {
    mobileNavBurger2.addEventListener("click", function (event) {
        const newDiv = document.createElement('div');
        newDiv.id = "overlay";
        newDiv.style.position = "fixed";
        newDiv.style.top = "0";
        newDiv.style.left = "0";
        newDiv.style.width = "100%";
        newDiv.style.height = "100%";
        newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.61)";
        newDiv.style.zIndex = "15";
        document.body.appendChild(newDiv);
        openSidePanel();
        let overlay = document.getElementById("overlay");
        let panel = document.getElementById('panel');
        overlay.addEventListener('click', () => {
            if (newDiv) {
                document.body.removeChild(newDiv);
                if (panel) {
                    document.body.removeChild(panel);
                }
            }
        });
    });
}
;
let contactFormElement = document.getElementById('contactFormID');
let indexContactFormElement = document.getElementById('index_form_');
function open_thank_you(message) {
    let contactElement = document.getElementById('contact-container');
    contactElement.style.display = 'none';
    contactFormElement.style.display = 'none';
    const thankYouDiv = document.createElement('div');
    thankYouDiv.style.position = 'fixed';
    thankYouDiv.style.top = '50%';
    thankYouDiv.style.left = '50%';
    thankYouDiv.style.transform = 'translate(-50%, -50%)';
    thankYouDiv.style.padding = '20px';
    thankYouDiv.style.backgroundColor = '#f9f9f9';
    thankYouDiv.style.border = '1px solid #ccc';
    thankYouDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    thankYouDiv.style.zIndex = '1000';
    thankYouDiv.textContent = message;
    thankYouDiv.id = 'thank-you-div';
    document.body.appendChild(thankYouDiv);
}
;
function highlight_inputData_required() {
    let client_name = document.getElementById("client_name");
    let client_email = document.getElementById("client_email");
    let client_message = document.getElementById("client_msg");
    client_name.style.border = "1px solid red";
    client_email.style.border = "1px solid red";
    client_message.style.border = "1px solid red";
}
function say_thank_you(message1) {
    let name = document.getElementById('client_name');
    name.value = '';
    let email = document.getElementById('client_email');
    email.value = '';
    let message = document.getElementById('client_msg');
    message.value = '';
    const thankYouDiv = document.createElement('div');
    thankYouDiv.style.position = 'fixed';
    thankYouDiv.style.top = '7%';
    thankYouDiv.style.left = '50%';
    thankYouDiv.style.transform = 'translate(-50%, -50%)';
    thankYouDiv.style.padding = '20px';
    thankYouDiv.style.backgroundColor = '#f9f9f9';
    thankYouDiv.style.border = '1px solid #ccc';
    thankYouDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    thankYouDiv.style.zIndex = '1000';
    thankYouDiv.textContent = message1;
    thankYouDiv.id = 'thank-you-div';
    document.body.appendChild(thankYouDiv);
    setTimeout(function () {
        let thankYouDiv2 = document.getElementById('thank-you-div');
        thankYouDiv2.style.display = 'none';
        document.body.removeChild(thankYouDiv);
    }, 3000);
}
;
function closeCap() {
    let capDiv = document.getElementById('captchaCode');
    document.body.removeChild(capDiv);
}
;
function open_captchaDIV(captchaCode, name, email, message) {
    const thankYouDiv = document.createElement('div');
    thankYouDiv.style.position = 'fixed';
    thankYouDiv.style.top = '50%';
    thankYouDiv.style.left = '50%';
    thankYouDiv.style.transform = 'translate(-50%, -50%)';
    thankYouDiv.style.padding = '20px';
    thankYouDiv.style.backgroundColor = 'rgb(0 0 0 / 36%)';
    thankYouDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    thankYouDiv.style.zIndex = '1000';
    thankYouDiv.style.width = '100%';
    thankYouDiv.style.height = '100%';
    thankYouDiv.id = 'captchaCode';
    let innerHTML_ = `
        <div class="innerCaptcha" id="forRealz">

            <div class="captchacodeHodler"><button id="captchacode" onclick="closeCap()">x</button></div>


            <div class="capHolder">
                <p>${captchaCode}</p>
            </div>

            <div class="inputCap">
                <form id="captchaFORM">

                    <input type="text" id="capinput" placeholder="Enter Code..">
                    <button type="submit" >Submit</button>

                </form>

            </div>


            <small id="failure">Captcha failed....Try Again!!</small>

        </div>
    `;
    thankYouDiv.innerHTML = innerHTML_;
    document.body.appendChild(thankYouDiv);
    let captchaFORM = document.getElementById('captchaFORM');
    if (captchaFORM) {
        captchaFORM.addEventListener('submit', function (event) {
            event.preventDefault();
            let inputCaptcha = document.getElementById("capinput");
            let inputCaptchaValue = inputCaptcha.value;
            if (inputCaptchaValue == captchaCode) {
                closeCap();
                message_backend(name, email, message);
                say_thank_you("Thank you for your submission!");
            }
            else {
                let capHolder = document.getElementById("forRealz");
                let failure = document.getElementById("failure");
                capHolder.style.border = '2px solid red';
                failure.style.display = 'block';
            }
        });
    }
    ;
}
;
let captchaCode = "";
function run_captcha(name, email, message) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    captchaCode = '';
    for (let i = 0; i < 6; i++) {
        captchaCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    open_captchaDIV(captchaCode, name, email, message);
}
function message_backend(name, email, message) {
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
    let csrfToken_ = csrfToken.value;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    fetch('/contact_info/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken_
        },
        body: formData
    });
}
;
if (contactFormElement) {
    contactFormElement.addEventListener('submit', function (event) {
        var _a, _b, _c, _d, _e, _f;
        event.preventDefault();
        let name = (_b = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        let email = (_d = (_c = document.getElementById('email')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '';
        let message = (_f = (_e = document.getElementById('message')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : '';
        message_backend(name, email, message);
        open_thank_you("Thank you for your submission!");
    });
}
;
if (indexContactFormElement) {
    indexContactFormElement.addEventListener('submit', function (event) {
        var _a, _b, _c, _d, _e, _f;
        event.preventDefault();
        let name = (_b = (_a = document.getElementById('client_name')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        let email = (_d = (_c = document.getElementById('client_email')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '';
        let message = (_f = (_e = document.getElementById('client_msg')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : '';
        if (name && email && message) {
            run_captcha(name, email, message);
        }
        else if (name == "None" && email == "None" && message == "None") {
            say_thank_you("Please fill out the correct information..");
            highlight_inputData_required();
        }
        else {
            say_thank_you("Please fill out the information..");
            highlight_inputData_required();
        }
    });
}
;
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

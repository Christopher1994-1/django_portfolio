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
                dropdownContainer.style.display = 'flex';
            }
        }, 20);
        isHovered = false;
    });
    dropdownContainer.addEventListener("mouseleave", function () {
        setTimeout(() => {
            if (!isHovered) {
                dropdownContainer.style.display = 'flex';
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

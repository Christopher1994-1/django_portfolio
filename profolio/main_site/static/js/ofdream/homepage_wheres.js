window.addEventListener('load', function() {
    let path = window.location.pathname;

    let random_thing2 = document.getElementById('h1-thing2');

    const thing2 = getComputedStyle(random_thing2).display;


    let homePageLink = document.getElementById('home-page');
    let aboutPageLink = document.getElementById('about-page');
    let servicesPageLink = document.getElementById('services-page');
    let projectsPageLink = document.getElementById('projects-page');
    let contactPageLink = document.getElementById('contact-page');

    



    if (path == "/" && thing2 === "none") {
        homePageLink.style.color = 'black';
        homePageLink.style.borderBottom = '2px solid black';
    }
    else if (path == "/about" && thing2 === "none") {
        aboutPageLink.style.color = 'black';
        aboutPageLink.style.borderBottom = '2px solid black';
    }
    else if (path == '/services' && thing2 === 'none') {
        servicesPageLink.style.color = 'black';
        servicesPageLink.style.borderBottom = '2px solid black';
    }
    else if (path == '/projects' && thing2 === 'none') {
        projectsPageLink.style.color = 'black';
        projectsPageLink.style.borderBottom = '2px solid black';
    }
    else if (path == '/contact' && thing2 === 'none') {
        contactPageLink.style.color = 'black';
        contactPageLink.style.borderBottom = '2px solid black';
    }
});
window.addEventListener('load', function() {
    var jumbo_words = document.getElementById('jumbotron_h1');
    var jumboh5 = document.getElementById('jumbotron_h5');

    let homePage = document.getElementById('home-page');
    let aboutPage = document.getElementById('about-page');
    let projectsPage = document.getElementById('projects-page');
    let contactPage = document.getElementById('contact-page');


    const is_index = document.getElementById('index_pageID').innerHTML;

    if (is_index == "index") {
        jumbo_words.style.opacity = 1;
        jumbo_words.style.transform = 'translateY(0)';


        setTimeout(function() {
            jumboh5.style.opacity = 1;
            jumboh5.style.transform = 'translateY(0)';
        }, 500);


        setTimeout(function() {
            homePage.style.opacity = 1;
            homePage.style.transform = 'translateY(0)';
        }, 1000);
        setTimeout(function() {
            aboutPage.style.opacity = 1;
            aboutPage.style.transform = 'translateY(0)';
        }, 1400);
        setTimeout(function() {
            projectsPage.style.opacity = 1;
            projectsPage.style.transform = 'translateY(0)';
        }, 1900);
        setTimeout(function() {
            contactPage.style.opacity = 1;
            contactPage.style.transform = 'translateY(0)';
        }, 2300);
    }
    else if (is_index == 'pp') {

        jumbo_words.style.opacity = 1;
        jumbo_words.style.transform = 'translateY(0)';


        setTimeout(function() {
            jumboh5.style.opacity = 1;
            jumboh5.style.transform = 'translateY(0)';
        }, 500);


        setTimeout(function() {
            homePage.style.opacity = 1;
            homePage.style.transform = 'translateY(0)';
        }, 1000);
        setTimeout(function() {
            aboutPage.style.opacity = 1;
            aboutPage.style.transform = 'translateY(0)';
        }, 1400);
        setTimeout(function() {
            projectsPage.style.opacity = 1;
            projectsPage.style.transform = 'translateY(0)';
        }, 1900);
        setTimeout(function() {
            contactPage.style.opacity = 1;
            contactPage.style.transform = 'translateY(0)';
        }, 2300);

    }
    
});

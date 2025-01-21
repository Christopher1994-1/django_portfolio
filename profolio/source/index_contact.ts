

//. MAIN FUNCTION TAHT CHECKS THE SERVER STATUS
function check_server_status1(): boolean {
    let l: any = document.getElementById('serverStatus');
    const SERVER_STATUS: any = l.value;
    return SERVER_STATUS.toLowerCase() === "true";
}


//. FUNCTION THAT DECIDES URL FOR SUCCESSFUL PAY PAGE
function get_url(): string {
    let bool: boolean = check_server_status();

    if (bool) {
        return "http://cejkirk.com/projects/";
    }

    else {
        return "http://127.0.0.1:8000/projects/";
    };
};


let project_quickView:any = document.getElementById('entryWarningID');


let project_title:any = document.getElementById('project_titleID');

let projectImage:any = document.getElementById('popupImageID');
let projectImageLink:any = document.getElementById('imageLINKID');



//. ADDING LINKS TO QUICK SHOT
function add_links(links_array:any): void {
    //= ID's for links
    let gitHubButton:any = document.getElementById('link2gitubID');
    let liveDemoButton:any = document.getElementById('live-demo-a-tag-button');
    let liveDemoCoverImage:any = document.getElementById('imageLINKID');
    let LearnMoreButton:any = document.getElementById('learnMoreQuickShot');

    let gitHubLink:string = links_array[0];
    let liveDemoLink: string = links_array[1];
    let projectShowCase: string = `projects_showcase/${links_array[2]}`;

    gitHubButton.href = gitHubLink;
    gitHubButton.target = "_blank";


    liveDemoButton.href = liveDemoLink;
    liveDemoButton.target = "_blank";

    liveDemoCoverImage.href = liveDemoLink;
    liveDemoCoverImage.target = "_blank";

    LearnMoreButton.href = projectShowCase;
}


//. ADDING USE CASES TO QUICK SHOT
function add_useCaes(data:any): void {
    let useCaes_container:any = document.getElementById('casesID');

    data.forEach(function(value:string, index:number) {

        var newElement = document.createElement('p');

        newElement.textContent = `#${value.trim()}`;

        useCaes_container.appendChild(newElement);
    });
};



//* adding tags to quick shot
function add_tags(data:any) {
    let tags_container:any = document.getElementById('tagsID');

    data.forEach(function(value:string, index:number) {

        var newElement = document.createElement('p');

        newElement.setAttribute('id', `tagID${index}`);

        newElement.textContent = `#${value.trim()}`;

        tags_container.appendChild(newElement);
    });

}



//* adding paragraph to quick shot
function add_para(data:any) {
    let value:string = data
    let paraContainer:any = document.getElementById('shortDID');
    var newElement = document.createElement('p');
    newElement.textContent = `${value}`;
    paraContainer.appendChild(newElement);
}









//. MAIN FUNCTION TO OPEN QUICKSHOT
function open_quickshot_projectHTML(data:any): void {

    project_quickView.style.display = 'flex';

    project_title.innerHTML = data[1];

    projectImageLink.href = '';
    projectImage.src = data[14];
    projectImage.alt = data[1]; //. MAKE THE ALT THE TITLE OF THE PROJECT

    // Clear existing content
    const tagsElement = document.getElementById('tagsID');
    if (tagsElement) {
        tagsElement.innerHTML = '';
    };
    
    const shortDElement = document.getElementById('shortDID');
    if (shortDElement) {
        shortDElement.innerHTML = '';
    };
    
    const casesElement = document.getElementById('casesID');
    if (casesElement) {
        casesElement.innerHTML = '';
    };

    let tags:any = `${data[3]}`.split(',');
    let para:any = data[2];

    let useCases:any = `${data[12]}`.split(',');

    let githubLink:string = data[6];
    let liveDemoLink: string = `projects/${data[5]}`;
    
    let links_array:any = [githubLink, liveDemoLink, data[1]];


    add_tags(tags);
    add_para(para);
    add_useCaes(useCases);
    add_links(links_array);
}



//* main function to close quick shot
function closePopup() {
    project_quickView.style.display = 'none'
}


//. FUNCTION TO SEND AND RECEIVE QUICKSHOT PROJECT
function open_quickshot_project(id:string): void {
    // AJAX request
    $.ajax({
        url: '/quickshot_search_query/',
        type: 'GET',
        data: { 'id': id },  // Send data to the backend
        dataType: 'json',
        success: function(data) {
            // Handle the response data here
            open_quickshot_projectHTML(data.data)
        },
        error: function(error) {
            //! maybe I can send a an email that shows error
            console.log('Error:', error);
            // Handle the error here
        }
    });
}













//= Code section that handles the fade in and out on quickshot

const imgDiv:any = document.querySelector(".img-div");
const img:any = imgDiv.querySelector("img");
const liveDemoButton:any = imgDiv.querySelector(".live-demo-button");

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


//======================================================================================================================
//, Filter Logic


//* filter button
let filterButton:any = document.getElementById('filterID');

//* filter popup container
let filterContainer:any = document.getElementById('filter_popupID');


//* filter close button id
let filterCloseButton:any = document.getElementById('filterCloseID');


//* logic that handles when user clicks filter button
filterButton.addEventListener('click', () => {
    filterContainer.style.display = 'flex';
});


//* logic that handles when user clicks fliter CLOSE button
filterCloseButton.addEventListener('click', () => {
    filterContainer.style.display = 'none';
});


//, logic for when filtered things clicked


let filtered:any = [];
let IDs_clicked:any = [];

let useCases_:any = ['|'];




//====================================================================
//, USE CASES
// APIs use cases
let api_thing:any = document.getElementById('useCases_filter_APIs');
api_thing.addEventListener('click', () => {
    api_thing.style.backgroundColor = 'grey';
    useCases_.push('apis');
    IDs_clicked.push("useCases_filter_APIs");
});

// Data Focused
let dataFocused:any = document.getElementById('useCases_filter_data-focused');
dataFocused.addEventListener('click', () => {
    dataFocused.style.backgroundColor = 'grey';
    useCases_.push('data focused');
    IDs_clicked.push('useCases_filter_data-focused');
});

// Error Handling
let errorHandling_:any = document.getElementById('useCases_filter_error-handling');
errorHandling_.addEventListener('click', () => {
    errorHandling_.style.backgroundColor = 'grey';
    useCases_.push('error handling');
    IDs_clicked.push('useCases_filter_error-handling');
});

// Online Payment
let onlinePayments_:any = document.getElementById('useCases_filter_online-payments');
onlinePayments_.addEventListener('click', () => {
    onlinePayments_.style.backgroundColor = 'grey';
    useCases_.push('online payment');
    IDs_clicked.push('useCases_filter_online-payments');
});

// Data Collecting
let dataCollecting_:any = document.getElementById('useCases_filter_data-collecting');
dataCollecting_.addEventListener('click', () => {
    dataCollecting_.style.backgroundColor = 'grey';
    useCases_.push('data collecting');
    IDs_clicked.push('useCases_filter_data-collecting');
});

// Web Frameworks
let webFrameworks_:any = document.getElementById('useCases_filter_web-frameworks');
webFrameworks_.addEventListener('click', () => {
    webFrameworks_.style.backgroundColor = 'grey';
    useCases_.push('web frameworks');
    IDs_clicked.push('useCases_filter_web-frameworks');
});

// Desktop Development
let desktopDev_:any = document.getElementById('useCases_filter_desktop-development');
desktopDev_.addEventListener('click', () => {
    desktopDev_.style.backgroundColor = 'grey';
    useCases_.push('desktop development');
    IDs_clicked.push('useCases_filter_desktop-development');
});
//============================================================================





let techUsed_:any = ['|'];

//=============================================================================
//, TECH USED

//* Python
let python__:any = document.getElementById('techUsed_filter_python');
python__.addEventListener('click', () => {
    python__.style.backgroundColor = 'grey';
    techUsed_.push('python');
    IDs_clicked.push('techUsed_filter_python');
});

//* TypeScript
let ts_:any = document.getElementById('techUsed_filter_typescript');
ts_.addEventListener('click', () => {
    ts_.style.backgroundColor = 'grey';
    techUsed_.push('typescript');
    IDs_clicked.push('techUsed_filter_typescript');
});

//* JavaScript
let js__:any = document.getElementById('techUsed_filter_javascript');
js__.addEventListener('click', () => {
    js__.style.backgroundColor = 'grey';
    techUsed_.push('javascript');
    IDs_clicked.push('techUsed_filter_javascript');
});

//* SCSS
let scss_:any = document.getElementById('techUsed_filter_scss');
scss_.addEventListener('click', () => {
    scss_.style.backgroundColor = 'grey';
    techUsed_.push('scss');
    IDs_clicked.push('techUsed_filter_scss');
});

//* CSS
let css_:any = document.getElementById('techUsed_filter_css');
css_.addEventListener('click', () => {
    css_.style.backgroundColor = 'grey';
    techUsed_.push('css');
    IDs_clicked.push('techUsed_filter_css');
});

//* Django
let django_:any = document.getElementById('techUsed_filter_django');
django_.addEventListener('click', () => {
    django_.style.backgroundColor = 'grey';
    techUsed_.push('django');
    IDs_clicked.push('techUsed_filter_django');
});

//* flask
let flask_:any = document.getElementById('techUsed_filter_flask');
flask_.addEventListener('click', () => {
    flask_.style.backgroundColor = 'grey';
    techUsed_.push('flask');
    IDs_clicked.push('techUsed_filter_flask');
});

//==============================================================================




let Type_:any = ['|']



//==============================================================================
//, Type

//* Full Stack App
let fullStackAPp_:any = document.getElementById('type_full-stack-app');
fullStackAPp_.addEventListener('click', () => {
    fullStackAPp_.style.backgroundColor = 'grey';
    Type_.push('full stack apps');
    IDs_clicked.push('type_full-stack-app');
});


//* Server Side App
let serverSideApp_:any = document.getElementById('type_server-side-app');
serverSideApp_.addEventListener('click', () => {
    serverSideApp_.style.backgroundColor = 'grey';
    Type_.push('server side apps');
    IDs_clicked.push('type_server-side-app');
});


//* Client Side App
let clientSideApp_:any = document.getElementById('type_client-side-app');
clientSideApp_.addEventListener('click', () => {
    clientSideApp_.style.backgroundColor = 'grey';
    Type_.push('client side apps');
    IDs_clicked.push('type_client-side-app');
});


//==============================================================================











//============================================================================================
//, Handling REST or FILTER buttons

//* reset button
let resetFilterButton:any = document.getElementById('reset_filter_button');

//* filter button
let filterFilterButton:any = document.getElementById('filter_filter_button');

//* filter button's parent A tag element
let filter_filter_button_Atag:any = document.getElementById('filter_filter_buttonATAG');


//* action that happens when reset button is clicked
resetFilterButton.addEventListener('click', () => {
    filtered.length = '';

    for (let clicked of IDs_clicked) {
        let dd:any = document.getElementById(`${clicked}`)
        dd.style.backgroundColor = '#333'; 
    }
    IDs_clicked.length = '';
})


//. ACTION THAT HAPPENS WHEN FILTER BUTTON IS CLICKED
filterFilterButton.addEventListener('click', () => {
    
    let combinedArray = useCases_.concat(techUsed_, Type_);
    let hrefString:string = combinedArray.join(', ');

    let projects_url: string = get_url();

    let fullURL = `${projects_url}${hrefString}/`
    // steps
    // add the loctation.href here 
    // 
    window.location.href = fullURL;
    filterContainer.style.display = 'none';
})



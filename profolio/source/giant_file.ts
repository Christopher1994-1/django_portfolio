









function onScrollThreshold(threshold: number, callback: () => void): void {
    let hasFired = false;

    window.addEventListener("scroll", () => {
        if (window.scrollY >= threshold && !hasFired) {
            hasFired = true;
            callback();
        } else if (window.scrollY < threshold) {
            hasFired = false; // Reset when scrolling up so it can trigger again
        }
    });
}

// Example usage:
onScrollThreshold(500, () => {
    let navbar01 = document.getElementById("navbar1010");

    if (navbar01) {
        navbar01.style.transition = "ease-in 0.3s";
        navbar01.style.backgroundColor = "grey";
    }
});

function onScrollUpThreshold(threshold: number, callback: () => void): void {
    let hasFired = false;

    window.addEventListener("scroll", () => {
        if (window.scrollY <= threshold && !hasFired) {
            hasFired = true;
            callback();
        } else if (window.scrollY > threshold) {
            hasFired = false; // Reset when scrolling down so it can trigger again
        }
    });
}

// Example usage:
onScrollUpThreshold(200, () => {
    let navbar01 = document.getElementById("navbar1010");

    if (navbar01) {
        navbar01.style.transition = "ease-in 0.3s";
        navbar01.style.backgroundColor = "transparent";
    }
});



//. end of navbar code



//. NAVBAR LOGIC
//. MOBILE NAVBAR BURGER MENU ELEMENT
let mobileNavBurger:any = document.getElementById("buttonMenu");

//. MOBILE NAVBAR BURGER MENU ELEMENT
let mobileNavBurger2:any = document.getElementById("buttonMenu2");



//. LINKS
const LINKS: Record<string, string> = {
  starbucks_project: "projects_showcase/Starbucks Remake",
  washington_project: "projects_showcase/Washington",
  ofdream_project: "projects_showcase/Ofdream",
  stripe_payment: "projects_showcase/Stripe Backend Payment/",
  chatgpt: "/projects_showcase/ChatGPT Replica/",
  bigfoot: "",
  calapp: "projects_showcase/GUI Calculator App"
};
  


//. FUNCTION THAT OPENS SIDE PANEL FOR MOBILE
function openSidePanel(): void {

    const newDiv = document.createElement('div');
  
    newDiv.id = "panel"
  
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
  
  
    let close_button:any = document.getElementById('close-button');
    let overlay:any = document.getElementById("overlay");
    close_button.addEventListener('click', () => {
      if (newDiv) {
        // Remove the div from the body
        document.body.removeChild(newDiv);
        if (overlay) {
          document.body.removeChild(overlay);
        }
      }
    });
  
};



//. BOOLEAN VALUE
let boo: boolean = false;


//. FUNCTION THAT OPENS PANEL OPTIONS 
function open_panel_options(option:any): void {
  if (boo) {
    option.style.display = 'none';
    boo = false;
  }

  else {
    option.style.display = 'flex';
    boo = true;
  }
};




if (mobileNavBurger) {
    mobileNavBurger.addEventListener("click", function(event:any) {
        const newDiv = document.createElement('div');

        newDiv.id = "overlay";
      
        //Apply styles to make it cover the entire viewport
        newDiv.style.position = "fixed"; // Fixed position to cover everything
        newDiv.style.top = "0"; // Start from the top
        newDiv.style.left = "0"; // Start from the left
        newDiv.style.width = "100%"; // Full width
        newDiv.style.height = "100%"; // Full height
        newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.61)"; // Semi-transparent black background
        newDiv.style.zIndex = "15"; // High z-index to ensure it is above all other elements
      
      
        document.body.appendChild(newDiv);
      
        openSidePanel();
      
      
        let overlay:any = document.getElementById("overlay");
        let panel:any = document.getElementById('panel');
        overlay.addEventListener('click', () => {
          if (newDiv) {
            // Remove the div from the body
            document.body.removeChild(newDiv);
      
            if (panel) {
              document.body.removeChild(panel);
            }
          }
        });
    });
};


if (mobileNavBurger2) {
    mobileNavBurger2.addEventListener("click", function(event:any) {
        const newDiv = document.createElement('div');

        newDiv.id = "overlay";
      
        //Apply styles to make it cover the entire viewport
        newDiv.style.position = "fixed"; // Fixed position to cover everything
        newDiv.style.top = "0"; // Start from the top
        newDiv.style.left = "0"; // Start from the left
        newDiv.style.width = "100%"; // Full width
        newDiv.style.height = "100%"; // Full height
        newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.61)"; // Semi-transparent black background
        newDiv.style.zIndex = "15"; // High z-index to ensure it is above all other elements
      
      
        document.body.appendChild(newDiv);
      
        openSidePanel();
      
      
        let overlay:any = document.getElementById("overlay");
        let panel:any = document.getElementById('panel');
        overlay.addEventListener('click', () => {
          if (newDiv) {
            // Remove the div from the body
            document.body.removeChild(newDiv);
      
            if (panel) {
              document.body.removeChild(panel);
            }
          }
        });
    });
};


//. end of navbar logic



//. contact infomation

//. FOR WHEN USER SENDS A MESSAGE

//. CONTACT PAGE FORM ELEMENT
let contactFormElement: any = document.getElementById('contactFormID');

//. INDEX PAGE FORM ELEMENT
let indexContactFormElement: any = document.getElementById('index_form_');



//. FUNCTION THAT SHOWS THE THANK YOU
function open_thank_you(message: string): void {

    let contactElement: any = document.getElementById('contact-container');
    contactElement.style.display = 'none';
    contactFormElement.style.display = 'none';

    // Create a new <div> element
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

    // Add content to the <div>
    thankYouDiv.textContent = message;

    // Add an ID to the <div> for easier management
    thankYouDiv.id = 'thank-you-div';

    // Append the <div> to the body
    document.body.appendChild(thankYouDiv);

};



//. FUNCTION THAT HIGHLIGHTS INPUT FILEDS NEED TO BE FILLED IN
function highlight_inputData_required(): void {
    let client_name: any = document.getElementById("client_name");
    let client_email: any = document.getElementById("client_email");
    let client_message: any = document.getElementById("client_msg");

    client_name.style.border = "1px solid red";
    client_email.style.border = "1px solid red";
    client_message.style.border = "1px solid red";
}


//. FUNCTION THAT SHOWS THANK YOU MESSAGE ON INDEX PAGE
function say_thank_you(message1: string): void {
    //. CLEAN THE VALUES    
    let name: any = document.getElementById('client_name');
    name.value = '';
    let email: any = document.getElementById('client_email');
    email.value = '';
    let message: any = document.getElementById('client_msg');
    message.value = '';

    //. than make message pop up, fixed position and disappears in 3 seconds
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


    // Add content to the <div>
    thankYouDiv.textContent = message1;

    // Add an ID to the <div> for easier management
    thankYouDiv.id = 'thank-you-div';

    // Append the <div> to the body
    document.body.appendChild(thankYouDiv);

    setTimeout(function() {
        let thankYouDiv2: any = document.getElementById('thank-you-div');
        thankYouDiv2.style.display = 'none';
        document.body.removeChild(thankYouDiv);
    }, 3000);

};





//. FUNCTION THAT CLOSES CAPTCHA DIV
function closeCap(): void {
    let capDiv: any = document.getElementById('captchaCode');
    document.body.removeChild(capDiv);
};




//. FUNCTION THAT OPENS CAPTCHA DIV
function open_captchaDIV(captchaCode: string, name: string, email: string, message: string): void {
    // Create a new <div> element
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


    // Add an ID to the <div> for easier management
    thankYouDiv.id = 'captchaCode';

    let innerHTML_: string = `
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

    // Append the <div> to the body
    document.body.appendChild(thankYouDiv);


    //. CAPTCHA FORM
    let captchaFORM: any = document.getElementById('captchaFORM');


    if (captchaFORM) {
        captchaFORM.addEventListener('submit', function(event:any) {
            event.preventDefault();

            //. get the input captcha code
            let inputCaptcha: any = document.getElementById("capinput");
            let inputCaptchaValue:string = inputCaptcha.value;


            if (inputCaptchaValue == captchaCode) {
                closeCap();
                message_backend(name, email, message);
                say_thank_you("Thank you for your submission!");
                
            } 
            
            else {
                let capHolder:any = document.getElementById("forRealz");
                let failure:any = document.getElementById("failure");

                capHolder.style.border = '2px solid red';
                failure.style.display = 'block';
                
            }


        });
    };

};

let captchaCode = "";


//. FUNCTION THAT OPENS UP A CAPHTCA 
function run_captcha(name: string, email: string, message: string): void {

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    captchaCode = '';
    for (let i = 0; i < 6; i++) {
        captchaCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    open_captchaDIV(captchaCode, name, email, message)
}


//. FUNCTION THAT SENDS MESSAGE DATA TO BACKEND
function message_backend(name: string, email: string, message: string): void {
    const csrfToken:any = document.querySelector('[name=csrfmiddlewaretoken]');
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
    })
};




//. EVENT LISTENER FOR WHEN CONTACT PAGE FORM IS SUBMITTED
if (contactFormElement) {
    contactFormElement.addEventListener('submit', function(event: any) {
        event.preventDefault();
    
        //. NAME OF USER
        let name: string = (document.getElementById('name') as HTMLInputElement)?.value ?? '';
        let email: string = (document.getElementById('email') as HTMLInputElement)?.value ?? '';
        let message: string = (document.getElementById('message') as HTMLInputElement)?.value ?? '';
    
        message_backend(name, email, message);
        open_thank_you("Thank you for your submission!");
    });

};




//. EVENT LISTENER FOR WHEN INDEX FORM IS SUBMITTED
if (indexContactFormElement) {
    indexContactFormElement.addEventListener('submit', function(event: any) {
        event.preventDefault();
    
        //. NAME OF USER
        let name: string = (document.getElementById('client_name') as HTMLInputElement)?.value ?? '';
        let email: string = (document.getElementById('client_email') as HTMLInputElement)?.value ?? '';
        let message: string = (document.getElementById('client_msg') as HTMLInputElement)?.value ?? '';

        if (name && email && message) {
            
            run_captcha(name, email, message)
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
};



//. end of contact information





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
    projectImage.src = data[12];
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

    let useCases:any = `${data[11]}`.split(',');

    let githubLink:string = data[6];
    let liveDemoLink: string = `projects/${data[5]}`;
    
    let links_array:any = [githubLink, liveDemoLink, data[1]];

    console.log(data)


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







// //. ON LOADING
// window.addEventListener('load', function() {
//     //. load me image
//     let meImageContainer: any = document.getElementById("meIMAGE");
//     meImageContainer.src = 'static/images/site_images/me.jpg'


// });
  
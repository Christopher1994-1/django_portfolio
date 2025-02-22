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
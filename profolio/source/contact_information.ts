//. FOR WHEN USER SENDS A MESSAGE

//. CONTACT PAGE FORM ELEMENT
let contactFormElement: any = document.getElementById('contactFormID');

//. INDEX PAGE FORM ELEMENT
let indexContactFormElement: any = document.getElementById('index_form_');



//. FUNCTION THAT SHOWS THE THANK YOU
function open_thank_you(): void {

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
    thankYouDiv.textContent = 'Thank you for your submission!';

    // Add an ID to the <div> for easier management
    thankYouDiv.id = 'thank-you-div';

    // Append the <div> to the body
    document.body.appendChild(thankYouDiv);

};



//. FUNCTION THAT SHOWS THANK YOU MESSAGE ON INDEX PAGE
function say_thank_you(): void {
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
    thankYouDiv.textContent = 'Thank you for your submission!';

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
        open_thank_you();
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
        
        message_backend(name, email, message);
        say_thank_you();
    });
};
"use strict";
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

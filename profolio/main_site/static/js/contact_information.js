"use strict";
let contactFormElement = document.getElementById('contactFormID');
let indexContactFormElement = document.getElementById('index_form_');
function open_thank_you() {
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
    thankYouDiv.textContent = 'Thank you for your submission!';
    thankYouDiv.id = 'thank-you-div';
    document.body.appendChild(thankYouDiv);
}
;
function say_thank_you() {
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
    thankYouDiv.textContent = 'Thank you for your submission!';
    thankYouDiv.id = 'thank-you-div';
    document.body.appendChild(thankYouDiv);
    setTimeout(function () {
        let thankYouDiv2 = document.getElementById('thank-you-div');
        thankYouDiv2.style.display = 'none';
        document.body.removeChild(thankYouDiv);
    }, 3000);
}
;
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
        open_thank_you();
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
        message_backend(name, email, message);
        say_thank_you();
    });
}
;

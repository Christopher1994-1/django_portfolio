"use strict";
const main_form = document.getElementById("chat-form");
const main_content = document.getElementById("main-content");
let font = "Helvetica Neue, Helvetica, Arial, sans-serif";
let time_put = 150;
function errorHandler(message) {
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
    thankYouDiv.textContent = message;
    thankYouDiv.id = 'thank-you-div';
    document.body.appendChild(thankYouDiv);
    setTimeout(function () {
        let thankYouDiv2 = document.getElementById('thank-you-div');
        thankYouDiv2.style.display = 'none';
        document.body.removeChild(thankYouDiv);
    }, 3000);
}
;
function api_response_handler(data, user_input) {
    main_content.style.display = 'none';
    const main_container = document.getElementById('word-gen-areaID');
    main_container.style.justifyContent = "space-between";
    let MobileButtons = document.getElementById("buttons-mobileID");
    if (MobileButtons) {
        MobileButtons.style.display = "none";
    }
    ;
    const navss = document.getElementById("div1");
    const userInput = document.createElement("div");
    userInput.textContent = user_input;
    navss.appendChild(userInput);
    userInput.style.background = '#2F2F2F';
    userInput.style.color = "white";
    userInput.style.fontSize = "17px";
    userInput.style.fontFamily = font;
    userInput.style.padding = "14px";
    userInput.style.width = "max-content";
    userInput.style.alignSelf = "flex-end";
    userInput.style.borderRadius = "17px";
    const placeholder = document.createElement("div");
    placeholder.setAttribute("id", "placeholder");
    placeholder.textContent = "...";
    navss.appendChild(placeholder);
    placeholder.style.color = "white";
    placeholder.style.fontSize = "17px";
    placeholder.style.fontFamily = font;
    placeholder.style.padding = "14px";
    placeholder.style.width = "100%";
    placeholder.style.lineHeight = "22px";
    placeholder.style.textAlign = "justify";
    const words = data.split(" ");
    let i = 0;
    placeholder.textContent = '';
    const text = document.getElementById('prompt');
    text.value = '';
    const myDiv = document.getElementById("div1");
    myDiv.scrollTop = myDiv.scrollHeight;
    const intervalId = setInterval(() => {
        if (i >= words.length) {
            clearInterval(intervalId);
            return;
        }
        placeholder.textContent += words[i] + " ";
        i++;
    }, time_put);
}
if (main_form) {
    main_form.addEventListener("submit", function (event) {
        event.preventDefault();
        let user_input_promot = document.getElementById('prompt');
        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
        let csrfToken_ = csrfToken.value;
        const formData = new FormData();
        formData.append('text', user_input_promot.value);
        fetch('/my_backend_function/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrfToken_
            },
            body: formData
        })
            .then(response => {
            if (!response.ok) {
                errorHandler("Network response was not ok");
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
            .then(data => {
            api_response_handler(data.result, user_input_promot.value);
        })
            .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            errorHandler("There was a problem with the fetch operation:");
        });
    });
}
;

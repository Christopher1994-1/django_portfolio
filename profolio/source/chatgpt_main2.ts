//. MAIN FORM ELEMENT
const main_form: any = document.getElementById("chat-form");

//. MAIN CONTENT ELEMENT (how can i help you etc)
const main_content:any = document.getElementById("main-content");

let font:string = "Helvetica Neue, Helvetica, Arial, sans-serif";

//. TIME FOR HOW FAST EACH WORD IS PUT ON THE SCREEN
let time_put: number = 150;



//. FUNCTION FOR HANDLING ERRORS
function errorHandler(message:string): void {
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
    thankYouDiv.textContent = message;

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



//. FUNCTION THAT HANDLES THE API RESPONSE
function api_response_handler(data:any, user_input:string): void {
    main_content.style.display = 'none';

    const main_container:any = document.getElementById('word-gen-areaID');
    main_container.style.justifyContent = "space-between";
  
    //. GETTING RID OF THE MOBILE BUTTONS
    let MobileButtons = document.getElementById("buttons-mobileID");
    
    if (MobileButtons) {
      MobileButtons.style.display = "none";
    };

    const navss:any = document.getElementById("div1");
    const userInput = document.createElement("div");
    userInput.textContent = user_input;
    navss.appendChild(userInput);


    //. Styling the newly created input element
    userInput.style.background = '#2F2F2F';
    userInput.style.color = "white";
    userInput.style.fontSize = "17px"
    userInput.style.fontFamily = font;
    userInput.style.padding = "14px";
    userInput.style.width = "max-content";
    userInput.style.alignSelf = "flex-end";
    userInput.style.borderRadius = "17px";

    const placeholder = document.createElement("div");
    placeholder.setAttribute("id", "placeholder");
    placeholder.textContent = "...";
    navss.appendChild(placeholder);
  
    //. Styling the newly created placeholder element
    placeholder.style.color = "white";
    placeholder.style.fontSize = "17px"
    placeholder.style.fontFamily = font;
    placeholder.style.padding = "14px";
    placeholder.style.width = "100%";
    placeholder.style.lineHeight = "22px";
    placeholder.style.textAlign = "justify";


    // Display the response one word at a time
    const words: string[] = data.split(" ");
    let i: number = 0;

    // reassigning the placeholder value to ''
    placeholder.textContent = ''
    // removing the text that is in the text box
    const text:any = document.getElementById('prompt');
    text.value = '';

    // scrolling to bottom of content
    const myDiv:any = document.getElementById("div1");
    myDiv.scrollTop = myDiv.scrollHeight;

    const intervalId = setInterval(() => {
        if (i >= words.length) {
        clearInterval(intervalId);
        return;
        }
        placeholder.textContent += words[i] + " ";
        i++;
    }, time_put); // 1000 ms delay between each word
}


if (main_form) {
    main_form.addEventListener("submit", function(event:any) {
        //. prevent the form from submitting normally
        event.preventDefault();

        //. getting user input promot
        let user_input_promot: any = document.getElementById('prompt')

        //. sending user input promot to backend endpoint
        const csrfToken:any = document.querySelector('[name=csrfmiddlewaretoken]');
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
                errorHandler("Network response was not ok")
            throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {

            api_response_handler(data.result, user_input_promot.value)

        })
        .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        errorHandler("There was a problem with the fetch operation:")
        });
    })
};


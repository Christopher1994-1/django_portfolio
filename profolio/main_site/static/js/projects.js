

const first_ = document.getElementById('clientsID');
const second_ = document.getElementById('clientsID2');
const third_ = document.getElementById('clientsID3');


let dot_one = document.getElementById('firstDots');
let dot_two = document.getElementById('secondDots');
let dot_three = document.getElementById('thirdDots');


let info_panel2 = {
    "python": {
        description: 'Python is a high-level, interpreted programming language known for its dynamic typing, extensive standard library, object-oriented and cross-platform usage.',
        useCases: 'Commonly used for web development, data science, artificial intelligence, automation, and more.'
    },
    "sass": {
        description: 'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). It provides a set of features and enhancements to make the process of writing and maintaining stylesheets more efficient and maintainable.',
        useCases: 'Used to improve the maintainability and structure of CSS code, particularly in large and complex projects.'
    },
    "html5": {
        description: 'HTML, or HyperText Markup Language, is the standard markup language used to create and structure content on the web. It forms the backbone of almost every webpage by defining the structure and layout of the information presented.',
        useCases: 'Fundamental for building the structure of web pages, including headings, paragraphs, links, images, and more.'
    },
    "js": {
        description: 'JavaScript is a high-level, versatile, and interpreted programming language primarily known for its role in web development. It allows developers to create dynamic, interactive, and responsive user interfaces within web browsers. JavaScript is an essential technology for building modern web applications.',
        useCases: 'Used for client-side scripting, creating interactive web pages, handling asynchronous tasks, and building full-stack web applications.'
    },
    "flask": {
        description: "Flask is a lightweight and flexible web framework for Python. It is designed to make it easy to build web applications quickly and with minimal code. Flask is considered a micro-framework because it provides the essentials for building web applications without imposing too much structure or unnecessary dependencies.",
        useCases: 'Ideal for small to medium-sized web applications, RESTful APIs, and prototyping.'
    },
    "django": {
        description: "Django is a high-level web framework for Python that encourages rapid development and clean, pragmatic design.",
        useCases: 'Suitable for building large-scale web applications, content management systems, and applications requiring a full-featured framework.'
    },
    "pandas": {
        description: "Pandas is a Python library for data manipulation and analysis. It provides data structures like DataFrame and Series, along with tools for cleaning, aggregating, and analyzing data.",
        useCases: 'Commonly used in data science and analysis tasks, working with structured data, and handling missing or incomplete data.'
    }
}


// default is set to true
let slide_finished = true

// number display is set to
let current_display_number = 1


let current_dots_number = 1




// .slide-left
// from <-- from nothing

// .slide-right 
// slide --> to nothing

// .slide-back
// slide --> from nothing

// .slide-forward
// slide <-- to nothing


// function for change to FirstDots
function changeDots(dot_leaving, dot_coming) {
    dot_leaving.style.display = 'none'
    dot_coming.style.display = 'block'
}







// function called to move the displays forward
function moving_forward(display_leaving, display_coming) {

    display_coming.classList.remove('slide-right');
    display_coming.classList.remove('slide-forward');
    display_coming.classList.remove('slide-left');
    display_coming.classList.remove('slide-backk');

    display_leaving.classList.remove('slide-right');
    display_leaving.classList.remove('slide-forward');
    display_leaving.classList.remove('slide-left');
    display_leaving.classList.remove('slide-backk');
    display_leaving.classList.add('slide-forward')

    setTimeout(() => {

        display_coming.style.display = 'grid';
        display_coming.classList.add('slide-left');


        display_leaving.classList.remove('slide-forward');
        display_leaving.style.display = 'none';

    }, 700)

}


// function called to move the displays backward
function moving_backward(display_leaving, display_coming) {
    display_coming.classList.remove('slide-right');
    display_coming.classList.remove('slide-forward');
    display_coming.classList.remove('slide-left');
    display_coming.classList.remove('slide-backk');

    display_leaving.classList.remove('slide-right');
    display_leaving.classList.remove('slide-forward');
    display_leaving.classList.remove('slide-left');
    display_leaving.classList.remove('slide-backk');

    display_leaving.classList.add('slide-right')

    setTimeout(() => {
        display_coming.classList.add('slide-backk');
        display_coming.style.display = 'grid'

        display_leaving.classList.remove('slide-right');
        display_leaving.style.display = 'none';
    }, 700)
}



// Function called when -> button is pressed
function goForward() {
    let idsss = document.getElementById('normal_buttons_displayID');
    if (current_display_number == 1) {
        moving_forward(first_, second_);
        changeDots(dot_one, dot_two);
        current_display_number = 2;
        num = 2;
        idsss.style.display = 'none';
    }
    else if (current_display_number == 2) {
        moving_forward(second_, third_);
        changeDots(dot_two, dot_three);
        current_display_number = 3;
        num = 3;
        idsss.style.display = 'none';
    }

    else if (current_display_number == 3) {
        moving_forward(third_, first_);
        changeDots(dot_three, dot_one);
        current_display_number = 1;
        num = 1;
        idsss.style.display = 'none';
    }

}


// function called when <- button is pressed
function goBack() {
    let idsss = document.getElementById('normal_buttons_displayID');
    if (current_display_number == 3) {
        moving_backward(third_, second_)
        changeDots(dot_three, dot_two)
        current_display_number = 2
        num = 2
        idsss.style.display = 'none';

    } 
    
    else if (current_display_number == 2) {
        // Remove slide-backk class before transitioning to the first section
        second_.classList.remove('slide-backk');

        second_.classList.add('slide-right');

        setTimeout(() => {
            first_.classList.add('slide-backk');
            first_.style.display = 'grid';

            second_.classList.remove('slide-right');
            second_.style.display = 'none';
        }, 700)
        changeDots(dot_two, dot_one);

        current_display_number = 1;
        num = 1;
        idsss.style.display = 'none';
    }

    else if (current_display_number == 1) {
        first_.classList.remove('slide-backk');

        first_.classList.add('slide-right')

        setTimeout(() => {
            third_.classList.add('slide-backk');
            third_.style.display = 'grid'

            first_.classList.remove('slide-right');
            first_.style.display = 'none';
        }, 700)
        changeDots(dot_one, dot_three)

        current_display_number = 3;
        num = 3;
        idsss.style.display = 'none';
        
    }
}





function close_thingys2() {
    let idsss = document.getElementById('normal_buttons_displayID');

    idsss.style.display = 'none';


}



function end_opens101() {
    console.log('janaj')
    if (num == 1) {
        var div1 = document.getElementById('isID');
        var div2 = document.getElementById('isID2');
        var div3 = document.getElementById('isID3');

        if (div2.style.display === 'block' || div3.style.display === 'block' || div1.style.display === 'block') {
            div1.style.display = 'none';
            div2.style.display = 'none';
            div3.style.display = 'none';
        }
    }
    else if (num == 2) {
        var div4 = document.getElementById('isID4');
        var div5 = document.getElementById('isID5');
        var div6 = document.getElementById('isID6');

        if (div5.style.display === 'block' || div6.style.display === 'block' || div4.style.display === 'block') {
            div4.style.display = 'none';
            div5.style.display = 'none';
            div6.style.display = 'none';
        }
    }

    else if (num == 3) {
        var div7 = document.getElementById('isID7');
        var div8 = document.getElementById('isID8');
        var div9 = document.getElementById('isID9');

        if (div8.style.display === 'block' || div9.style.display === 'block' || div7.style.display === 'block') {
            div7.style.display = 'none';
            div8.style.display = 'none';
            div9.style.display = 'none';
        }
    }
}


document.getElementById('switch_buttonsID').addEventListener('mouseover', function() {
    // Your code to be executed when the mouseover event occurs
    end_opens101()
    // Add more code here as needed
});





function open_info_boxy(lan) {
    let idsss = document.getElementById('normal_buttons_displayID');
    let inner_html = document.getElementById('inside_html');
    let inner_html2 = document.getElementById('inside_html2');

    idsss.style.display = 'block';
    inner_html.innerHTML = info_panel2[lan]['description'];
    inner_html2.innerHTML = info_panel2[lan]['useCases']

}




// function when dot two is clicked 
function dotTwo_clicked(wanted) {
    if (current_display_number == 1 && wanted == '2') {
        moving_forward(first_, second_)
        changeDots(dot_one, dot_two)
        current_display_number = 2
        end_opens101()
        num = 2
    }
    else if (current_display_number == 2 && wanted == '3') {
        moving_forward(second_, third_)
        changeDots(dot_two, dot_three)
        current_display_number = 3
        end_opens101()
        num = 3
    }
    else if (current_display_number == 1 && wanted == '3') {
        moving_forward(first_, third_)
        changeDots(dot_one, dot_three)
        current_display_number = 3
        end_opens101()
        num = 3
    }
}




function dot_backwards(wanted) {
    if (current_display_number == 2 && wanted == '1') {
        second_.classList.remove('slide-backk');

        second_.classList.add('slide-right')

        setTimeout(() => {
            first_.classList.add('slide-backk');
            first_.style.display = 'grid'

            second_.classList.remove('slide-right');
            second_.style.display = 'none';
        }, 700)
        changeDots(dot_two, dot_one)
        current_display_number = 1
        num = 1
    }
    else if (current_display_number == 3 && wanted == '2') {
        moving_backward(third_, second_)
        changeDots(dot_three, dot_two)
        current_display_number = 2
        num = 2
    }
    else if (current_display_number == 3 && wanted == '1') {
        moving_backward(third_, first_)
        changeDots(dot_three, dot_one)
        current_display_number = 1
        num = 1
    }

}
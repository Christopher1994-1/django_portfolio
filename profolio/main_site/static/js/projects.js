

const first_ = document.getElementById('clientsID');
const second_ = document.getElementById('clientsID2');
const third_ = document.getElementById('clientsID3');


let dot_one = document.getElementById('firstDots');
let dot_two = document.getElementById('secondDots');
let dot_three = document.getElementById('thirdDots');



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
    if (current_display_number == 1) {
        moving_forward(first_, second_)
        changeDots(dot_one, dot_two)
        current_display_number = 2
        num = 2
    }
    else if (current_display_number == 2) {
        moving_forward(second_, third_)
        changeDots(dot_two, dot_three)
        current_display_number = 3
        num = 3
    }
}


// function called when <- button is pressed
function goBack() {
    if (current_display_number == 3) {
        moving_backward(third_, second_)
        changeDots(dot_three, dot_two)
        current_display_number = 2
        num = 2
    } else if (current_display_number == 2) {
        // Remove slide-backk class before transitioning to the first section
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


const firstDisplay = document.getElementById('clientsID');
const secondDisplay = document.getElementById('clientsID2');
const thirdDisplay = document.getElementById('clientsID3');


let dotOne = document.getElementById('firstDots');
let dotTwo = document.getElementById('secondDots');
let dotThree = document.getElementById('thirdDots');


// number display is set to
let current_display_number_ = 1



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
    if (current_display_number_ == 1) {
        moving_forward(firstDisplay, secondDisplay)
        changeDots(dotOne, dotTwo)
        current_display_number_ = 2
        num = 2
    }
    else if (current_display_number_ == 2) {
        moving_forward(secondDisplay, thirdDisplay)
        changeDots(dotTwo, dotThree)
        current_display_number_ = 3
        num = 3
    }
}


// function called when <- button is pressed
function goBack() {
    if (current_display_number_ == 3) {
        moving_backward(thirdDisplay, secondDisplay)
        changeDots(dotThree, dotTwo)
        current_display_number_ = 2
        num = 2
    } else if (current_display_number_ == 2) {
        // Remove slide-backk class before transitioning to the first section
        secondDisplay.classList.remove('slide-backk');

        secondDisplay.classList.add('slide-right')

        setTimeout(() => {
            firstDisplay.classList.add('slide-backk');
            firstDisplay.style.display = 'grid'

            secondDisplay.classList.remove('slide-right');
            secondDisplay.style.display = 'none';
        }, 700)
        changeDots(dotTwo, dotOne)

        current_display_number_ = 1
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
    if (current_display_number_ == 1 && wanted == '2') {
        moving_forward(firstDisplay, secondDisplay)
        changeDots(dotOne, dotTwo)
        current_display_number_ = 2
        end_opens101()
        num = 2
    }
    else if (current_display_number_ == 2 && wanted == '3') {
        moving_forward(secondDisplay, thirdDisplay)
        changeDots(dotTwo, dotThree)
        current_display_number_ = 3
        end_opens101()
        num = 3
    }
    else if (current_display_number_ == 1 && wanted == '3') {
        moving_forward(firstDisplay, thirdDisplay)
        changeDots(dotOne, dotThree)
        current_display_number_ = 3
        end_opens101()
        num = 3
    }
}




function dot_backwards(wanted) {
    if (current_display_number_ == 2 && wanted == '1') {
        secondDisplay.classList.remove('slide-backk');

        secondDisplay.classList.add('slide-right')

        setTimeout(() => {
            firstDisplay.classList.add('slide-backk');
            firstDisplay.style.display = 'grid'

            secondDisplay.classList.remove('slide-right');
            secondDisplay.style.display = 'none';
        }, 700)
        changeDots(dotTwo, dotOne)
        current_display_number_ = 1
        num = 1
    }
    else if (current_display_number_ == 3 && wanted == '2') {
        moving_backward(thirdDisplay, secondDisplay)
        changeDots(dotThree, dotTwo)
        current_display_number_ = 2
        num = 2
    }
    else if (current_display_number_ == 3 && wanted == '1') {
        moving_backward(thirdDisplay, firstDisplay)
        changeDots(dotThree, dotOne)
        current_display_number_ = 1
        num = 1
    }

}
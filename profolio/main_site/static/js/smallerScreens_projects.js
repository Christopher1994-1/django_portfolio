

const firstDisplay = document.getElementById('clientsID1');
const secondDisplay = document.getElementById('clientsID22');
const thirdDisplay = document.getElementById('clientsID33');

const fourthDisplay = document.getElementById('clientsID44');
const fifthDisplay = document.getElementById('clientsID55');
const sixthDisplay = document.getElementById('clientsID66');

const sevenDisplay = document.getElementById('clientsID77');
const eightDisplay = document.getElementById('clientsID88');
const nineDisplay = document.getElementById('clientsID99');


let dotOne = document.getElementById('firstDots1');
let dotTwo = document.getElementById('secondDots1');
let dotThree = document.getElementById('thirdDots1');

let dot4 = document.getElementById('4Dots');
let dot5 = document.getElementById('5Dots');
let dot6 = document.getElementById('6Dots');

let dot7 = document.getElementById('7Dots');
let dot8 = document.getElementById('8Dots');
let dot9 = document.getElementById('9Dots');


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
    // slide <-- to nothing
    display_leaving.classList.remove('slide-back') //
    display_leaving.classList.add('slide-forward')

    setTimeout(() => {

        display_coming.style.display = 'grid';
        // from <-- from nothing
        display_coming.classList.add('slide-left');


        display_leaving.classList.remove('slide-forward');
        display_leaving.classList.remove('slide-back')
        display_leaving.classList.remove('slide-right')
        display_leaving.classList.remove('slide-left')

        display_leaving.style.display = 'none';

    }, 700)
}


// function called to move the displays backward
function moving_backward(display_leaving, display_coming) {
    display_leaving.classList.remove('slide-forward');
    display_leaving.classList.remove('slide-back')
    display_leaving.classList.remove('slide-right')
    display_leaving.classList.remove('slide-left')


    display_coming.classList.remove('slide-forward');
    display_coming.classList.remove('slide-back')
    display_coming.classList.remove('slide-right')
    display_coming.classList.remove('slide-left')

    display_leaving.classList.add('slide-right')

    setTimeout(() => {
        display_coming.classList.add('slide-backk');
        display_coming.style.display = 'grid'

        display_leaving.classList.remove('slide-right');
        display_leaving.style.display = 'none';
    }, 700)
}


// Function called when -> button is pressed
function goForward2(event) {

    if (current_display_number_ === 1) {
        // display leaving
        firstDisplay.classList.remove('slide-forward');
        firstDisplay.classList.remove('slide-right');
        firstDisplay.classList.remove('slide-left');
        firstDisplay.classList.remove('slide-back');
        firstDisplay.classList.remove('slide-backk');
        firstDisplay.classList.add('slide-forward');

        setTimeout(() => {
            // display coming
            secondDisplay.style.display = 'grid';
            secondDisplay.classList.add('slide-left');
    
            // display leaving
            firstDisplay.classList.remove('slide-forward');
            firstDisplay.classList.remove('slide-back');
            firstDisplay.classList.remove('slide-right');
            firstDisplay.classList.remove('slide-left');
    
            firstDisplay.style.display = 'none';
    
            // Remove the class here
        }, 700);
    
        changeDots(dotOne, dotTwo);
        current_display_number_ = 2;
        num = 2;
    }
    
    else if (current_display_number_ == 2) {
        // display leaving
        secondDisplay.classList.remove('slide-back');
        secondDisplay.classList.remove('slide-backk');
        secondDisplay.classList.add('slide-forward');

        setTimeout(() => {
            // display coming
            thirdDisplay.style.display = 'grid';
            thirdDisplay.classList.add('slide-left');
    
            // display leaving
            secondDisplay.classList.remove('slide-forward');
            secondDisplay.classList.remove('slide-back');
            secondDisplay.classList.remove('slide-right');
            secondDisplay.classList.remove('slide-left');
    
            secondDisplay.style.display = 'none';
    
            // Remove the class here
        }, 700);
    
        changeDots(dotTwo, dotThree);
        current_display_number_ = 3;
        num = 3;
    }
    else if (current_display_number_ == 3) {
        // display leaving
        thirdDisplay.classList.remove('slide-back');
        thirdDisplay.classList.add('slide-forward');

        setTimeout(() => {
            // display coming
            fourthDisplay.style.display = 'grid';
            fourthDisplay.classList.add('slide-left');
    
            // display leaving
            thirdDisplay.classList.remove('slide-forward');
            thirdDisplay.classList.remove('slide-backk');
            thirdDisplay.classList.remove('slide-right');
            thirdDisplay.classList.remove('slide-left');
    
            thirdDisplay.style.display = 'none';
    
            // Remove the class here
        }, 700);
    
        changeDots(dotThree, dot4);
        current_display_number_ = 4;
        num = 4;

    }
    else if (current_display_number_ == 4) {
        // display leaving
        fourthDisplay.classList.remove('slide-back');
        fourthDisplay.classList.add('slide-forward');

        setTimeout(() => {
            // display coming
            fifthDisplay.style.display = 'grid';
            fifthDisplay.classList.add('slide-left');
    
            // display leaving
            fourthDisplay.classList.remove('slide-forward');
            fourthDisplay.classList.remove('slide-backk');
            fourthDisplay.classList.remove('slide-right');
            fourthDisplay.classList.remove('slide-left');
    
            fourthDisplay.style.display = 'none';
    
            // Remove the class here
        }, 700);
    
        changeDots(dot4, dot5);
        current_display_number_ = 5;
        num = 5;

    }
    else if (current_display_number_ == 5) {
        // display leaving
        fifthDisplay.classList.remove('slide-back');
        fifthDisplay.classList.add('slide-forward');

        setTimeout(() => {
            // display coming
            sixthDisplay.style.display = 'grid';
            sixthDisplay.classList.add('slide-left');
    
            // display leaving
            fifthDisplay.classList.remove('slide-forward');
            fifthDisplay.classList.remove('slide-backs');
            fifthDisplay.classList.remove('slide-right');
            fifthDisplay.classList.remove('slide-left');
    
            fifthDisplay.style.display = 'none';
    
            // Remove the class here
        }, 700);
    
        changeDots(dot5, dot6);
        current_display_number_ = 6;
        num = 6;

    }
    else if (current_display_number_ == 6) {
        // display leaving
        sixthDisplay.classList.remove('slide-back');
        sixthDisplay.classList.add('slide-forward');

        setTimeout(() => {
            // display coming
            sevenDisplay.style.display = 'grid';
            sevenDisplay.classList.add('slide-left');
    
            // display leaving
            sixthDisplay.classList.remove('slide-forward');
            sixthDisplay.classList.remove('slide-backk');
            sixthDisplay.classList.remove('slide-right');
            sixthDisplay.classList.remove('slide-left');
    
            sixthDisplay.style.display = 'none';
    
            // Remove the class here
        }, 700);
    
        changeDots(dot6, dot7);
        current_display_number_ = 7;
        num = 7;

    }
    else if (current_display_number_ == 7) {
        // display leaving
        sevenDisplay.classList.remove('slide-back');
        sevenDisplay.classList.add('slide-forward');

        setTimeout(() => {
            // display coming
            eightDisplay.style.display = 'grid';
            eightDisplay.classList.add('slide-left');
    
            // display leaving
            sevenDisplay.classList.remove('slide-forward');
            sevenDisplay.classList.remove('slide-backk');
            sevenDisplay.classList.remove('slide-right');
            sevenDisplay.classList.remove('slide-left');
    
            sevenDisplay.style.display = 'none';
    
            // Remove the class here
        }, 700);
    
        changeDots(dot7, dot8);
        current_display_number_ = 8;
        num = 8;
 
    }
    else if (current_display_number_ == 8) {
        // display leaving
        eightDisplay.classList.remove('slide-back');
        eightDisplay.classList.add('slide-forward');

        setTimeout(() => {
            // display coming
            nineDisplay.style.display = 'grid';
            nineDisplay.classList.add('slide-left');
    
            // display leaving
            eightDisplay.classList.remove('slide-forward');
            eightDisplay.classList.remove('slide-backk');
            eightDisplay.classList.remove('slide-right');
            eightDisplay.classList.remove('slide-left');
    
            eightDisplay.style.display = 'none';
    
            // Remove the class here
        }, 700);
    
        changeDots(dot8, dot9);
        current_display_number_ = 9;
        num = 9;


    }
    else if (current_display_number_ == 9) {
        // display leaving
        nineDisplay.classList.remove('slide-back');
        nineDisplay.classList.add('slide-forward');

        setTimeout(() => {
            // display coming
            firstDisplay.style.display = 'grid';
            firstDisplay.classList.add('slide-left');
    
            // display leaving
            nineDisplay.classList.remove('slide-forward');
            nineDisplay.classList.remove('slide-backk');
            nineDisplay.classList.remove('slide-right');
            nineDisplay.classList.remove('slide-left');
    
            nineDisplay.style.display = 'none';
    
            // Remove the class here
        }, 700);
    
        changeDots(dot9, dotOne);
        current_display_number_ = 1;
        num = 1;

    }
}


// function called when <- button is pressed
function goBack2() {
    // 2 to 1
    if (current_display_number_ == 2) {
        secondDisplay.classList.remove('slide-backk')
        secondDisplay.classList.remove('slide-left');
        secondDisplay.classList.add('slide-right');

        setTimeout(() => {
            // display coming
            firstDisplay.style.display = 'grid'
            firstDisplay.classList.add('slide-backk');
    
            // display leaving
            secondDisplay.classList.remove('slide-right');
            secondDisplay.style.display = 'none';
        }, 700)

        changeDots(dotTwo, dotOne)
        current_display_number_ = 1
        num = 1
    }
    // 3 to 2
    else if (current_display_number_ == 3) {
        // display leaving
        thirdDisplay.classList.remove('slide-backk')
        thirdDisplay.classList.remove('slide-left');
        thirdDisplay.classList.add('slide-right');

        setTimeout(() => {
            // display coming
            secondDisplay.classList.add('slide-backk');
            secondDisplay.style.display = 'grid'
    
            // display leaving
            thirdDisplay.classList.remove('slide-right');
            thirdDisplay.style.display = 'none';
        }, 700)

        changeDots(dotThree, dotTwo)
        current_display_number_ = 2
        num = 2
    }

    // 4 to 3
    else if (current_display_number_ == 4) {
        // display leaving
        fourthDisplay.classList.remove('slide-backk')
        fourthDisplay.classList.remove('slide-left');
        fourthDisplay.classList.add('slide-right');

        setTimeout(() => {
            // display coming
            thirdDisplay.classList.add('slide-backk');
            thirdDisplay.style.display = 'grid'
    
            // display leaving
            fourthDisplay.classList.remove('slide-right');
            fourthDisplay.style.display = 'none';
        }, 700)

        changeDots(dot4, dotThree)
        current_display_number_ = 3
        num = 3
    }

    // 5 to 4
    else if (current_display_number_ == 5) {
        // display leaving
        fifthDisplay.classList.remove('slide-backk')
        fifthDisplay.classList.remove('slide-left');
        fifthDisplay.classList.add('slide-right');

        setTimeout(() => {
            // display coming
            fourthDisplay.classList.add('slide-backk');
            fourthDisplay.style.display = 'grid'
    
            // display leaving
            fifthDisplay.classList.remove('slide-right');
            fifthDisplay.style.display = 'none';
        }, 700)

        changeDots(dot5, dot4)
        current_display_number_ = 4
        num = 4
    }

    // 6 to 5
    else if (current_display_number_ == 6) {
        // display leaving
        sixthDisplay.classList.remove('slide-backk')
        sixthDisplay.classList.remove('slide-left');
        sixthDisplay.classList.add('slide-right');

        setTimeout(() => {
            // display coming
            fifthDisplay.classList.add('slide-backk');
            fifthDisplay.style.display = 'grid'
    
            // display leaving
            sixthDisplay.classList.remove('slide-right');
            sixthDisplay.style.display = 'none';
        }, 700)

        changeDots(dot6, dot5)
        current_display_number_ = 5
        num = 5
    }

    // 7 to 6
    else if (current_display_number_ == 7) {
        // display leaving
        sevenDisplay.classList.remove('slide-backk')
        sevenDisplay.classList.remove('slide-left');
        sevenDisplay.classList.add('slide-right');

        setTimeout(() => {
            // display coming
            sixthDisplay.classList.add('slide-backk');
            sixthDisplay.style.display = 'grid'
    
            // display leaving
            sevenDisplay.classList.remove('slide-right');
            sevenDisplay.style.display = 'none';
        }, 700)

        changeDots(dot7, dot6)
        current_display_number_ = 6
        num = 6
    }

    // 8 to 7
    else if (current_display_number_ == 8) {
        // display leaving
        eightDisplay.classList.remove('slide-backk')
        eightDisplay.classList.remove('slide-left');
        eightDisplay.classList.add('slide-right');

        setTimeout(() => {
            // display coming
            sevenDisplay.classList.add('slide-backk');
            sevenDisplay.style.display = 'grid'
    
            // display leaving
            eightDisplay.classList.remove('slide-right');
            eightDisplay.style.display = 'none';
        }, 700)

        changeDots(dot8, dot7)
        current_display_number_ = 7
        num = 7
    }

    // 9 to 8
    else if (current_display_number_ == 9) {
        // display leaving
        nineDisplay.classList.remove('slide-backk')
        nineDisplay.classList.remove('slide-left');
        nineDisplay.classList.add('slide-right');

        setTimeout(() => {
            // display coming
            eightDisplay.classList.add('slide-backk');
            eightDisplay.style.display = 'grid'
    
            // display leaving
            nineDisplay.classList.remove('slide-right');
            nineDisplay.style.display = 'none';
        }, 700)

        changeDots(dot9, dot8)
        current_display_number_ = 8
        num = 8
    }

    // 1 to 9
    else if (current_display_number_ == 1) {
        // display leaving
        firstDisplay.classList.remove('slide-backk')
        firstDisplay.classList.remove('slide-left');
        firstDisplay.classList.add('slide-right');

        setTimeout(() => {
            // display coming
            nineDisplay.classList.add('slide-backk');
            nineDisplay.style.display = 'grid'
    
            // display leaving
            firstDisplay.classList.remove('slide-right');
            firstDisplay.style.display = 'none';
        }, 700)

        changeDots(dotOne, dot9)
        current_display_number_ = 9
        num = 9
    }

};





function open_techies_S1(box) {
    var div1 = document.getElementById('techines_nowID');

    if (div1.style.display === 'block') {
        div1.style.display = 'none';
    } else {
        div1.style.display = 'block';
    };
};



let info_panel = {
    "python": 'Python is a high-level, interpreted programming language known for its dynamic typing, extensive standard library, object-oriented and cross-platform usage.',
    "sass" : '',
    "html5": '',
    "js": '',
    "flask" : "",
    "django": "",
    "pandas": "",

}



function open_info_techie(lan) {
    let info = info_panel[lan];
    
    let things2ID = document.getElementById('thingsID');
    let open_para = document.getElementById('things2ID');

    let backbutton = document.getElementById('backbutton');

    things2ID.style.display = 'none';
    open_para.style.display = 'block';
    backbutton.style.visibility = 'visible';

    let p = document.getElementById('para_insert');
    p.innerHTML = info;

};




function close_thingys(what) {
    var div1 = document.getElementById('techines_nowID');

    let things2ID = document.getElementById('thingsID');
    let open_para = document.getElementById('things2ID');
    let backbutton = document.getElementById('backbutton');

    if (what === 'back') {
        things2ID.style.display = 'block';
        open_para.style.display = 'none';
        backbutton.style.visibility = 'hidden';

    } else {
        div1.style.display = 'none';
    }
    
};



let hasBeenClicked = false



// Function called when -> button is pressed
function goForward23() {
    if (current_display_number_ === 1) {
        firstDisplay.style.display = 'none';
        secondDisplay.style.display = 'grid';
        changeDots(dotOne, dotTwo);
        current_display_number_ = 2;
        num = 2;
    }

    else if (current_display_number_ === 2) {
        secondDisplay.style.display = 'none';
        thirdDisplay.style.display = 'grid';
        changeDots(dotTwo, dotThree);
        current_display_number_ = 3;
        num = 3;
    }

    else if (current_display_number_ === 3) {
        thirdDisplay.style.display = 'none';
        fourthDisplay.style.display = 'grid';
        changeDots(dotThree, dot4);
        current_display_number_ = 4;
        num = 4;
    }

    else if (current_display_number_ === 4) {
        fourthDisplay.style.display = 'none';
        fifthDisplay.style.display = 'grid';
        changeDots(dot4, dot5);
        current_display_number_ = 5;
        num = 6;
    }

    else if (current_display_number_ === 5) {
        fifthDisplay.style.display = 'none';
        sixthDisplay.style.display = 'grid';
        changeDots(dot5, dot6);
        current_display_number_ = 6;
        num = 6;
    }

    else if (current_display_number_ === 6) {
        sixthDisplay.style.display = 'none';
        sevenDisplay.style.display = 'grid';
        changeDots(dot6, dot7);
        current_display_number_ = 7;
        num = 7;
    }
    
    else if (current_display_number_ === 7) {
        sevenDisplay.style.display = 'none';
        eightDisplay.style.display = 'grid';
        changeDots(dot7, dot8);
        current_display_number_ = 8;
        num = 8;
    }

    else if (current_display_number_ === 8) {
        eightDisplay.style.display = 'none';
        nineDisplay.style.display = 'grid';
        changeDots(dot8, dot9);
        current_display_number_ = 9;
        num = 9;
    }

    else if (current_display_number_ === 9) {
        nineDisplay.style.display = 'none';
        firstDisplay.style.display = 'grid';
        changeDots(dot9, dotOne);
        current_display_number_ = 1;
        num = 1;
    }

}


function goBack23() {
    if (current_display_number_ == 9) {
        nineDisplay.style.display = 'none';
        eightDisplay.style.display = 'grid';
        changeDots(dot9, dot8);
        current_display_number_ = 8;
        num = 8;
    }

    else if (current_display_number_ == 8) {
        eightDisplay.style.display = 'none';
        sevenDisplay.style.display = 'grid';
        changeDots(dot8, dot7);
        current_display_number_ = 7;
        num = 7;
    }

        else if (current_display_number_ == 7) {
        sevenDisplay.style.display = 'none';
        sixthDisplay.style.display = 'grid';
        changeDots(dot7, dot6);
        current_display_number_ = 6;
        num = 6;
    }

    else if (current_display_number_ == 6) {
        sixthDisplay.style.display = 'none';
        fifthDisplay.style.display = 'grid';
        changeDots(dot6, dot5);
        current_display_number_ = 5;
        num = 5;
    }

    else if (current_display_number_ == 5) {
        fifthDisplay.style.display = 'none';
        fourthDisplay.style.display = 'grid';
        changeDots(dot5, dot4);
        current_display_number_ = 4;
        num = 4;
    }

    else if (current_display_number_ == 4) {
        fourthDisplay.style.display = 'none';
        thirdDisplay.style.display = 'grid';
        changeDots(dot4, dotThree);
        current_display_number_ = 3;
        num = 3;
    }

    else if (current_display_number_ == 3) {
        thirdDisplay.style.display = 'none';
        secondDisplay.style.display = 'grid';
        changeDots(dotThree, dotTwo);
        current_display_number_ = 2;
        num = 2;
    }

    else if (current_display_number_ == 2) {
        secondDisplay.style.display = 'none';
        firstDisplay.style.display = 'grid';
        changeDots(dotTwo, dotOne);
        current_display_number_ = 1;
        num = 1;
    }

    else if (current_display_number_ == 1) {
        firstDisplay.style.display = 'none';
        nineDisplay.style.display = 'grid';
        changeDots(dotOne, dot9);
        current_display_number_ = 9;
        num = 9;
    }
}




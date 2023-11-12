// The two displays
const first_display = document.getElementById('clientsID');
const second_display = document.getElementById('clients_displayID');



const NEW_first_display = document.getElementById('clientsID2');
const NEW_second_display = document.getElementById('clients_displayID2');




let balls = []





function switch_dots1() {
    const firstDots = document.getElementById('firstDots');
    const secondDots = document.getElementById('secondDots');
    firstDots.style.display = 'none';
    secondDots.style.display = 'block';
}

function switch_dots2() {
    const firstDots = document.getElementById('firstDots');
    const secondDots = document.getElementById('secondDots');
    firstDots.style.display = 'block';
    secondDots.style.display = 'none';
}




// .slide-left
// from <-- from nothing

// .slide-right 
// slide --> to nothing

// .slide-back
// slide --> from nothing

// .slide-forward
// slide <-- to nothing


function new_thing() {
    const oldThing = document.getElementById('old');
    const newThing = document.getElementById('new');

    oldThing.style.display = 'none'
    newThing.style.display = 'block'
}

// <-----
function going_forward(going, coming, condition) {
    if (condition === true) {
        going.classList.add('slide-forward')
        console.log()
        console.log('old going <-')
        setTimeout(() => {
    
            console.log('new coming <- ')
            coming.style.display = 'grid';
            coming.classList.add('slide-left');

            new_thing()
    
    
            going.classList.remove('slide-forward');
            going.style.display = 'none';
    
    
        }, 700)
    } 
    
    else if (condition === false) {
        going.classList.add('slide-forward')
        console.log()
        console.log('old going <-')
    
        setTimeout(() => {
    
            console.log('new coming <- ')
            coming.style.display = 'grid';
            coming.classList.add('slide-left');
    
    
            going.classList.remove('slide-forward');
            going.style.display = 'none';
    
    
        }, 700)
    }

    else if (condition === 'idk') {
        going.classList.add('slide-forward')
        console.log()
        console.log('old going <-')
    
        setTimeout(() => {
    
            console.log('new coming <- ')
            coming.style.display = 'grid';
            coming.classList.add('slide-left');
    
    
            going.classList.remove('slide-forward');
            going.style.display = 'none';
    
    
        }, 700)
    }
}


// ----->
function going_backward(going, coming) {
    going.classList.add('slide-right')
    console.log('')
    console.log('old going ->')

    setTimeout(() => {

        console.log('new coming ->')
        coming.classList.add('slide-backk');
        coming.style.display = 'grid'

        going.classList.remove('slide-right');
        going.style.display = 'none';


    }, 700)

    
}

// STARTING ON GOING BACKWARDS NOW LOLOLOLOLOLOLOL




// forwards
function go_forward() {
    if (!balls[0]) {
        balls.push('second')
        going_forward(first_display, second_display, false)
        console.log(balls)
    }

    else if (balls[0] === 'second') {
        balls.length = 0
        balls.push('third')
        going_forward(second_display, NEW_first_display, true)
        console.log(balls)
    }

    else if (balls[0] === 'third') {
        balls.length = 0
        balls.push('fourth')
        going_forward(NEW_first_display, NEW_second_display, 'idk')
        console.log(balls)
    }
}



// backwards
function go_back() {

    if (balls[0] == 'second') {
        balls.length = 0

        second_display.classList.add('slide-right')
        console.log('-------------------')
        console.log('old second_display ->')
    
        setTimeout(() => {
    
            console.log('new first_display ->')

            second_display.classList.remove('slide-right');
            second_display.style.display = 'none';

            first_display.classList.add('slide-backk');
            first_display.style.display = 'grid'
        }, 700)

    } 
    
    else if (balls[0] == 'third') {
        balls.length = 0
        balls.push('second')

        third_display.classList.add('slide-right')
        console.log('-------------------')
        console.log('old third_display ->')
    
        setTimeout(() => {
    
            console.log('new second_display ->')

            third_display.classList.remove('slide-right');
            third_display.style.display = 'none';

            second_display.classList.add('slide-backk');
            second_display.style.display = 'grid'
        }, 700)
    }
}










// Here you will put in the numbers for count up animations on the page.


// Here you want to change the number 124 to whatever number you want. 
const limit_one = 124

// Here you want to change the number 1106 to whatever number you want.
const limit_two = 1106

// Here you want to change the number 142 to whatever number you want.
const limit_three = 142

// Here you want to change the number 142 to whatever number you want.
const limit_four = 6


// Here you will edit the time it takes the count up to get to final number 
// If you do not wish to edit the count up speed, please don't change the variables below


// Here here for the first count up, change only the number
const timer_one = 20 // milliseconds

// Here here for the second count up, change only the number
const timer_two = 0 // milliseconds

// Here here for the third count up, change only the number
const timer_three = 20 // milliseconds

// Here here for the fourth count up, change only the number
const timer_four = 400 // milliseconds



// After you have changes all the numbers above you can now leave this file. Everything is done



// Function for the first count up
function countUp() {
    var counter = document.getElementById("counter");
    var count = 0;

    var interval = setInterval(function() {
        if (count < limit_one) {
        count++;
        counter.innerHTML = count;
        } else {
        clearInterval(interval);
        }
    }, timer_one);
};

// Function for the second count up
function countUp2() {
    var counter = document.getElementById("counter2");
    var count = 0;

    var interval = setInterval(function() {
        if (count < limit_two) {
        count++;
        counter.innerHTML = count;
        } else {
        clearInterval(interval);
        }
    }, timer_two); // set the interval time in milliseconds
};

// Function for the third count up
function countUp3() {
    var counter = document.getElementById("counter3");
    var count = 0;

    var interval = setInterval(function() {
        if (count < limit_three) {
        count++;
        counter.innerHTML = count;
        } else {
        clearInterval(interval);
        }
    }, timer_three);
};

// Function for the fourth count up
function countUp4() {
    var counter = document.getElementById("counter4");
    var count = 0;

    var interval = setInterval(function() {
        if (count < limit_four) {
        count++;
        counter.innerHTML = count;
        } else {
        clearInterval(interval);
        }
    }, timer_four);
};


// End of this page to edit
  
  var count_up_array = []
  
    
  window.addEventListener('scroll', () => {
  
    if (window.pageYOffset >= 480) {

      let bottom = document.getElementById('bottom');
      bottom.style.opacity = 1;
  
      if (bottom.style.opacity == 1 && count_up_array.length === 0) {
        count_up_array.push("true")
        countUp()
        countUp2()
        countUp3()
        countUp4()
      }
      bottom.style.transform = "translateY(0)";
    }
  });
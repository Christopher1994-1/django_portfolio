

let stars = []


function starOne() {

    if (stars.length > 0) {
        stars.length = 0
    } else {
        stars.push('11111')
    }
}

function starTwo() {
    if (stars.length > 0) {
        stars.length = 0
    } else {
        stars.push('1111')
    }
}

function starThree() {
    if (stars.length > 0) {
        stars.length = 0
    } else {
        stars.push('111')
    }
}

function starFour() {
    if (stars.length > 0) {
        stars.length = 0
    } else {
        stars.push('11')
    }
}

function starFive() {
    if (stars.length > 0) {
        stars.length = 0
    } else {
        stars.push('1')
    }
}


const form = document.getElementById('review-form')



function submit_clicked() {
    if (stars.length == 0) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            let error_star_message = document.getElementById('error-star')
            error_star_message.style.display = 'block';
            error_star_message.style.opacity = 1;
            });
    } else {
        form.addEventListener("submit", async (event) => {
            event.preventDefault(); // prevent the form from submitting normally
        
            let name = document.getElementById('review-name').value
            let message = document.getElementById('review-message').value
            let stars_ = stars
        
        
            let leave_a_review_container = document.getElementById('leave-us-a-review-container')
            let thank_you_review = document.getElementById('leave-us-a-review-container2')
            let error_star_message = document.getElementById('error-star')

            if (error_star_message.style.display == 'block') {
                error_star_message.style.display = 'none';
            }
            
        
            leave_a_review_container.style.display = 'none'
        
            thank_you_review.style.display = 'block'
            thank_you_review.style.display = 'flex'
            thank_you_review.style.flexDirection = 'column'
        
            // Send the data to python backend
            // JavaScript code
        
            const formData = new FormData();
            formData.append('review-name', name);
            formData.append('message', message);
            formData.append('stars', stars_);
            
            fetch('backend_review_transfer', {
              method: 'POST',
              headers: {
              },
              body: formData
            });
            
        
        });
    }

}



function checkLength() {
    var textarea = document.querySelector('textarea');
    var feedback = document.querySelector('#feedback');
    var maxlength = textarea.getAttribute('maxlength');
    var remaining = maxlength - textarea.value.length;
    feedback.textContent = remaining;

    let char_count = feedback.textContent = remaining;

    if (char_count < 20) {
        feedback.style.color = 'red';
    } else {
        feedback.style.color = '#1E2B2B';
    };
}

// function that displays the password
function password_viewer() {

    // // icons
    const visble_eye = document.getElementById('view_on');
    const slash_eye = document.getElementById('view_off');

    let password_input = document.getElementById("password")

    visble_eye.style.display = 'none';
    slash_eye.style.display = 'block';
    password_input.type = "text";

};




// function that does not display the password
function none_password_view() {

    // // icons
    const visble_eye = document.getElementById('view_on');
    const slash_eye = document.getElementById('view_off');

    let password_input = document.getElementById("password")

    visble_eye.style.display = 'block';
    slash_eye.style.display = 'none';
    password_input.type = "password";

};



// function that submits admin details
function enter_admin_details() {

    // getting values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send the data to python backend
    // JavaScript code
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    
    fetch('/update_admin_info', {
      method: 'POST',
      headers: {
      },
      body: formData
    });

    // getting values
    const username1 = document.getElementById('username').value = '';
    const password1 = document.getElementById('password').value = '';
}



// function that resets admin password
function admin_password_reset() {
    let value = "True"

    const formData = new FormData();
    formData.append('value', value);
    
    fetch('/reset_admin_password', {
      method: 'POST',
      headers: {
      },
      body: formData
    });

    
    setTimeout(function() {
        location.reload();
      }, 1000); 

}
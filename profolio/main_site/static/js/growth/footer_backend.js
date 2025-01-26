const formF = document.getElementById('footer-form')

formF.addEventListener("submit", async (event) => {
    event.preventDefault(); // prevent the form from submitting normally

    let email = document.getElementById('email2').value

    let email_container = document.getElementById('email-sub-form')
    let thank_you = document.getElementById('thank-you-sub-form')

    email_container.style.display = 'none'

    thank_you.style.display = 'block'


    // Send the data to python backend
    // JavaScript code

    const formData = new FormData();

    formData.append('email', email);
    
    fetch('/backend_email_sub_transfer', {
      method: 'POST',
      headers: {
      },
      body: formData
    });
  });

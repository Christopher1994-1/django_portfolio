const msg_form = document.getElementById("message-sent-form")

msg_form.addEventListener("submit", async (event) => {
    event.preventDefault(); // prevent the form from submitting normally

    let msg_body = document.getElementById('msg-body').value
    let msg_subject = document.getElementById('msg-subject').value


    let msg_sent_div = document.querySelector('.message-sent-popup')
    msg_sent_div.style.display = "block"




    // Send the data to python backend
    // JavaScript code
    const formData = new FormData();
    formData.append('msg_bd', msg_body);
    formData.append('msg_sub', msg_subject);
    
    fetch('/getting_message', {
      method: 'POST',
      headers: {
      },
      body: formData
    });

      
    document.getElementById('body').value = ''
    document.getElementById('subject').value = ''
});






















function right_side_panel_open() {

  document.getElementById("mySidepanel").style.width = "250px";

  let closebtn = document.getElementById('closebtn');
  let links = document.getElementById('all-links');

  closebtn.style.display = "block";
  links.style.display = 'block';

};




function closeNav() {
document.getElementById("mySidepanel").style.width = "0";

let closebtn = document.getElementById('closebtn')
let links = document.getElementById('all-links')


closebtn.style.display = "none"
links.style.display = 'none';
};



// function for when send message is clicked
function sendMsg() {
  // containers
  let dashboard = document.getElementById('dboard');
  let g = document.getElementById('guide');
  let msg_box = document.getElementById('msg-box');
  let settings_container = document.getElementById('settings');
  let reviews_container = document.getElementById('reviews-id');
  let products_container = document.getElementById('product-id');


  // a tag IDs
  const msg_id = document.getElementById('msg');
  const dash = document.getElementById('dashboard');
  const guide1 = document.getElementById('g');
  const setting = document.getElementById('setter');
  const reviews_a = document.getElementById('resviers');
  const products_a = document.getElementById('products1');

  // if dashboard is activate
  if (dashboard.style.display = 'block') {

    dashboard.style.display = 'none';

    dash.style.color = 'white'

    msg_box.style.display = 'block'
    msg_id.style.color = 'rgb(34, 180, 34)'
  } 
  
  // if guide is activate
  if (g.style.display = 'block') {

    g.style.display = 'none';

    msg_box.style.display = 'block';


    msg_id.style.color = 'rgb(34, 180, 34)';
    guide1.style.color = 'white'
  }

  // if settings is activate
  if (settings_container.style.display = 'block') {
    settings_container.style = 'none'

    msg_box.style.display = 'block'

    msg_id.style.color = 'rgb(34, 180, 34)';
    setting.style.color = 'white'
  }

  // if reviews is activate
  if (reviews_container.style.display = 'block') {
    reviews_container.style.display = 'none';

    msg_box.style.display = 'block';

    msg_id.style.color = 'rgb(34, 180, 34)';
    reviews_a.style.color = 'white'
  };

  // if products is activate
  if (products_container.style.display = 'block') {
    products_container.style.display = 'none';

    msg_box.style.display = 'block';

    msg_id.style.color = 'rgb(34, 180, 34)';
    products_a.style.color = 'white'
  };

  closeNav()
};


// function for when dashboard is clicked
function dash() {
  let msg_box = document.getElementById('msg-box');
  let dash = document.getElementById('dboard');
  let g = document.getElementById('guide');
  let settings_container = document.getElementById('settings');
  let reviews_container = document.getElementById('reviews-id');
  let products_container = document.getElementById('product-id');
  

  // a tag IDs
  const msg_id_a = document.getElementById('msg');
  const dashboard_a = document.getElementById('dashboard');
  const guide_a = document.getElementById('g');
  const setting = document.getElementById('setter');
  const reviews_a = document.getElementById('resviers');
  const products_a = document.getElementById('products1');

  // if message box is activate
  if (msg_box.style.display = 'block') {
    msg_box.style.display = 'none';
    dash.style.display = 'block';

    msg_id_a.style.color = 'white';
    dashboard_a.style.color = 'rgb(34, 180, 34)';
  }

  // if guide is activate
  if (g.style.display = 'block') {

    g.style.display = 'none';

    dash.style.display = 'block';
    g.style.display = 'none';


    guide_a.style.color = 'white';
    dashboard_a.style.color = 'rgb(34, 180, 34)';
  }

  // if settings is activate
  if (settings_container.style.display = 'block') {
    settings_container.style = 'none'

    dash.style.display = 'block'

    dashboard_a.style.color = 'rgb(34, 180, 34)';
    setting.style.color = 'white'
  }

  // if reviews is activate
  if (reviews_container.style.display = 'block') {
    reviews_container.style.display = 'none';

    dash.style.display = 'block';

    dashboard_a.style.color = 'rgb(34, 180, 34)';
    reviews_a.style.color = 'white'
  };


  // if products is activate
  if (products_container.style.display = 'block') {
    products_container.style.display = 'none';

    dash.style.display = 'block';

    dashboard_a.style.color = 'rgb(34, 180, 34)';
    products_a.style.color = 'white'
  };

  closeNav();
};


// function for when guide is clicked
function guide() {
  let msg_box = document.getElementById('msg-box');
  let dash = document.getElementById('dboard');
  let g = document.getElementById('guide');
  let settings_container = document.getElementById('settings');
  let reviews_container = document.getElementById('reviews-id');
  let products_container = document.getElementById('product-id');

  // a tag IDs
  const msg_id_a = document.getElementById('msg');
  const dashboard_a = document.getElementById('dashboard');
  const guide_a = document.getElementById('g');
  const setting = document.getElementById('setter');
  const reviews_a = document.getElementById('resviers');
  const products_a = document.getElementById('products1');

  // if dashboard is activate
  if (dash.style.display = 'block') {
    dash.style.display = 'none';
    g.style.display = 'block';

    dashboard_a.style.color = 'white';
    guide_a.style.color = 'rgb(34, 180, 34)';
  }

  // if message box is activate
  if (msg_box.style.display = 'block') {

    msg_box.style.display = 'none';

    g.style.display = 'block';


    msg_id_a.style.color = 'white';
    guide_a.style.color = 'rgb(34, 180, 34)';
    
  }

  // if settings is activate
  if (settings_container.style.display = 'block') {
    settings_container.style = 'none'

    g.style.display = 'block'

    guide_a.style.color = 'rgb(34, 180, 34)';
    setting.style.color = 'white'
  }

  // if reviews is activate
  if (reviews_container.style.display = 'block') {
    reviews_container.style.display = 'none';

    g.style.display = 'block';

    guide_a.style.color = 'rgb(34, 180, 34)';
    reviews_a.style.color = 'white'
  };


  // if products is activate
  if (products_container.style.display = 'block') {
    products_container.style.display = 'none';

    g.style.display = 'block';

    guide_a.style.color = 'rgb(34, 180, 34)';
    products_a.style.color = 'white'
  };



  closeNav();
};


// function for when settings is clicked
function set() {
  let msg_box = document.getElementById('msg-box');
  let dash = document.getElementById('dboard');
  let g = document.getElementById('guide');
  let settings_container = document.getElementById('settings');
  let reviews_container = document.getElementById('reviews-id');
  let products_container = document.getElementById('product-id');

  // a tag IDs
  const msg_id_a = document.getElementById('msg');
  const dashboard_a = document.getElementById('dashboard');
  const guide_a = document.getElementById('g');
  const setting = document.getElementById('setter');
  const reviews_a = document.getElementById('resviers');
  const products_a = document.getElementById('products1');



  // if dashboard is activate
  if (dash.style.display = 'block') {
    dash.style.display = 'none';
    settings_container.style.display = 'block';

    dashboard_a.style.color = 'white';
    setting.style.color = 'rgb(34, 180, 34)';
  };
  
  // if message box is activate
  if (msg_box.style.display = 'block') {

    msg_box.style.display = 'none';

    settings_container.style.display = 'block';


    msg_id_a.style.color = 'white';
    setting.style.color = 'rgb(34, 180, 34)';
    
  };
  
  // if guide is activate
  if (g.style.display = 'block') {
    g.style = 'none'

    settings_container.style.display = 'block'

    guide_a.style.color = 'white';
    setting.style.color = 'rgb(34, 180, 34)'
  };

  // if reviews is activate
  if (reviews_container.style.display = 'block') {
    reviews_container.style.display = 'none';

    settings_container.style.display = 'block';

    setting.style.color = 'rgb(34, 180, 34)';
    reviews_a.style.color = 'white'
  };


  // if products is activate
  if (products_container.style.display = 'block') {
    products_container.style.display = 'none';

    settings_container.style.display = 'block';

    setting.style.color = 'rgb(34, 180, 34)';
    products_a.style.color = 'white'
  };

  closeNav();
};



// function for when reviews is clicked
function res() {
  let msg_box = document.getElementById('msg-box');
  let dash = document.getElementById('dboard');
  let g = document.getElementById('guide');
  let settings_container = document.getElementById('settings');
  let reviews_container = document.getElementById('reviews-id');
  let products_container = document.getElementById('product-id');

  // a tag IDs
  const msg_id_a = document.getElementById('msg');
  const dashboard_a = document.getElementById('dashboard');
  const guide_a = document.getElementById('g');
  const setting = document.getElementById('setter');
  const reviews_a = document.getElementById('resviers');
  const products_a = document.getElementById('products1');



  // if dashboard is activate
  if (dash.style.display = 'block') {
    dash.style.display = 'none';
    reviews_container.style.display = 'block';

    dashboard_a.style.color = 'white';
    reviews_a.style.color = 'rgb(34, 180, 34)';
  };
  
  // if message box is activate
  if (msg_box.style.display = 'block') {

    msg_box.style.display = 'none';

    reviews_container.style.display = 'block';


    msg_id_a.style.color = 'white';
    reviews_a.style.color = 'rgb(34, 180, 34)';
    
  };
  
  // if guide is activate
  if (g.style.display = 'block') {
    g.style = 'none'

    reviews_container.style.display = 'block'

    guide_a.style.color = 'white';
    reviews_a.style.color = 'rgb(34, 180, 34)'
  };


  // if settings is activate
  if (settings_container.style.display = 'block') {
    settings_container.style = 'none'

    reviews_container.style.display = 'block'

    reviews_a.style.color = 'rgb(34, 180, 34)';
    setting.style.color = 'white'
  };

  // if products is activate
  if (products_container.style.display = 'block') {
    products_container.style.display = 'none';

    reviews_container.style.display = 'block';

    reviews_a.style.color = 'rgb(34, 180, 34)';
    products_a.style.color = 'white'
  };

  closeNav();
};



// function for when products is clicked
function products_clicked() {
  let msg_box = document.getElementById('msg-box');
  let dash = document.getElementById('dboard');
  let g = document.getElementById('guide');
  let settings_container = document.getElementById('settings');
  let reviews_container = document.getElementById('reviews-id');
  let products_container = document.getElementById('product-id');

  // a tag IDs
  const msg_id_a = document.getElementById('msg');
  const dashboard_a = document.getElementById('dashboard');
  const guide_a = document.getElementById('g');
  const setting = document.getElementById('setter');
  const reviews_a = document.getElementById('resviers');
  const products_a = document.getElementById('products1');



  // if dashboard is activate
  if (dash.style.display = 'block') {
    dash.style.display = 'none';
    products_container.style.display = 'block';

    dashboard_a.style.color = 'white';
    products_a.style.color = 'rgb(34, 180, 34)';
  };
  
  // if message box is activate
  if (msg_box.style.display = 'block') {

    msg_box.style.display = 'none';

    products_container.style.display = 'block';


    msg_id_a.style.color = 'white';
    products_a.style.color = 'rgb(34, 180, 34)';
    
  };
  
  // if guide is activate
  if (g.style.display = 'block') {
    g.style = 'none'

    products_container.style.display = 'block'

    guide_a.style.color = 'white';
    products_a.style.color = 'rgb(34, 180, 34)'
  };

  // if settings is activate
  if (settings_container.style.display = 'block') {
    settings_container.style = 'none'

    products_container.style.display = 'block'

    products_a.style.color = 'rgb(34, 180, 34)';
    setting.style.color = 'white'
  };

  // if reviews is activate
  if (reviews_container.style.display = 'block') {
    reviews_container.style.display = 'none';

    products_container.style.display = 'block';

    products_a.style.color = 'rgb(34, 180, 34)';
    reviews_a.style.color = 'white'
  };

  closeNav();
};






// function that handles deleting of review
function delete_review(id) {

  const formData = new FormData();
  formData.append('id', id);
  
  fetch('/getting_id_delete', {
    method: 'POST',
    headers: {
    },
    body: formData
  });

  let successful = document.getElementById('successful');

  if (successful.style.display = 'block') {
    successful.style.display = 'none'
    successful.style.display = 'block'
  } else {
    successful.style.display = 'block'
  }

  

}


// function that handles when the 'done' button is clicked
function done_button_done(id) {

    // getting value of updated fields
    let edit_name = document.getElementById('edit_name').value;
    let edit_msg = document.getElementById('edit-review').value;
    let edit_stars = document.getElementById('edit-stars').value;

    // containers
    const review_tables = document.getElementById('review-table');
    const edit_fields = document.getElementById('update');
    const add_manual_div = document.getElementById('manuel-button');
    const review_edit_successful = document.getElementById('edit-successful');


    // displaying edit input fields
    review_tables.style.display = 'block';
    add_manual_div.style.display = 'block';
    edit_fields.style.display = 'none';
    review_edit_successful.style.display = 'block';

    // Send the data to python backend
    // JavaScript code
    const formData = new FormData();
    formData.append('id', id);
    formData.append('id_name', edit_name);
    formData.append('id_msg', edit_msg);
    formData.append('id_stars', edit_stars);
    
    fetch('/editing_id_review', {
      method: 'POST',
      headers: {
      },
      body: formData
    });



}


// function for when the edit button is clicked
function edit_review(id, name, review, stars) {

  // containers
  const review_tables = document.getElementById('review-table');
  const edit_fields = document.getElementById('update');
  const add_manual_div = document.getElementById('manuel-button');

  // edit input fields
  let edit_name = document.getElementById('edit_name');
  let edit_msg = document.getElementById('edit-review');
  let edit_stars = document.getElementById('edit-stars');

  // displaying edit input fields
  review_tables.style.display = 'none';
  add_manual_div.style.display = 'none';
  edit_fields.style.display = 'block';
  edit_fields.style.display = 'flex';
  edit_fields.style.flexDirection = 'column';

  // putting selected data into input fields
  edit_name.value = name;
  edit_msg.value = review;

  const done_button = document.getElementById('done-btn');

  done_button.addEventListener("click", async (event) => {
    done_button_done(id)

  });

  
};



function add_new_review() {
    // containers
    const review_tables = document.getElementById('review-table');
    const add_manual_container = document.getElementById('manuel-add');
    const add_manual_button = document.getElementById('manuel-button');
    const added_successfully = document.getElementById('add-successful');

    // getting html input field values
    let new_name = document.getElementById('add_name').value;
    let new_msg = document.getElementById('add-review').value;
    let new_star = document.getElementById('add-stars').value;


    review_tables.style.display = 'block';
    add_manual_button.style.display = 'block';
    add_manual_container.style.display = 'none';
    added_successfully.style.display = 'block';

    // Send the data to python backend
    // JavaScript code
    const formData = new FormData();
    formData.append('new_name', new_name);
    formData.append('new_msg', new_msg);
    formData.append('new_stars', new_star);
    
    fetch('/review_added_manually', {
      method: 'POST',
      headers: {
      },
      body: formData
    });

}



function add_manual_review() {
    // containers
    const review_tables = document.getElementById('review-table');
    const add_manual_container = document.getElementById('manuel-add');
    const add_manual_button = document.getElementById('manuel-button');


    // getting html input field values
    let new_name = document.getElementById('add_name');
    let new_msg = document.getElementById('add-review');
    let new_star = document.getElementById('add-stars');


    // displaying container
    review_tables.style.display = 'none';
    add_manual_container.style.display = 'block';
    add_manual_container.style.display = 'flex';
    add_manual_container.style.flexDirection = 'column';
    add_manual_container.style.rowGap = '10px';
    add_manual_button.style.display = 'none';


    const submit_new_review_button = document.getElementById('add-btn');

    submit_new_review_button.addEventListener("click", async (event) => {
      add_new_review()
  });

};





let id_list = []


// Function for the edit product action button
function product_edit(id, name, price, category, description, url) {

    if (id_list.length > 0) {
        id_list.length = 0
    } else {
        id_list.push(id)
    }

    // containters 
    const product_table = document.getElementById('products_container');
    const edit_section = document.getElementById('edit-product');
    const add_new_button = document.getElementById('new_product_button');
    const standard_header = document.getElementById('standard-header');
  
    product_table.style.display = 'none';
    standard_header.style.display = 'none';
    add_new_button.style.display = 'none';
    edit_section.style.display = 'block';
    edit_section.style.display = 'flex';
    edit_section.style.width = '80%';
    edit_section.style.flexDirection = 'column';
  
    
  
    // input fields
    let product_name = document.getElementById('edit-product-name');
    let product_price = document.getElementById('edit-product-price');
    let product_category = document.getElementById('edit-product-category');
    let product_description = document.getElementById('edit-product-description');
    let product_image_url = document.getElementById('edit-product-image-url');


    product_name.value = name;
    product_price.value = price;
    product_category.value = category;
    product_description.value = description;
    product_image_url.value = url;
  
  
};
  

// simple function that updates the char limit for product description
function product_update_char_limit() {
    var textarea = document.getElementById('edit-product-description');
    var feedback = document.querySelector('#feedback1');
    var maxlength = 460;

    var remaining = maxlength - textarea.value.length;
    feedback.textContent = remaining;
  
    let char_count = feedback.textContent = remaining;
  
    if (char_count < 100) {
        feedback.style.color = 'red';
    } else {
        feedback.style.color = '#1E2B2B';
    };
};



// function that handles when the edit is finished
function on_finish_edit() {

    const id = id_list[0]

    // grabbing current updated input values
    const product_name = document.getElementById('edit-product-name').value;
    const product_price = document.getElementById('edit-product-price').value;
    const product_category = document.getElementById('edit-product-category').value;
    const product_description = document.getElementById('edit-product-description').value;
    const product_image_url = document.getElementById('edit-product-image-url').value;


    // containers 
    const edit_project_container = document.getElementById('edit-product');
    const edit_message = document.getElementById('edit-successful1');
    const products_table = document.getElementById('products_container');
    const main_header = document.getElementById('standard-header');

    edit_project_container.style.display = 'none';
    edit_message.style.display = 'block';
    products_table.style.display = 'block';
    main_header.style.display = 'block';


    // Send the data to python backend
    // JavaScript code
    const formData = new FormData();

    formData.append('id', id);
    formData.append('edit_project_name', product_name);
    formData.append('edit_project_price', product_price);
    formData.append('edit_project_category', product_category);
    formData.append('edit_project_description', product_description);
    formData.append('edit_project_image_url', product_image_url);
    
    fetch('/editing_admin_product', {
      method: 'POST',
      headers: {
      },
      body: formData
    });

};


// function that gets id and deletes the row
function delete_product(id) {

    const delete_successful = document.getElementById('del-successful1');

    if (delete_successful.style.display = 'none') {
        delete_successful.style.display = 'block';
    } else {
        delete_successful.style.display = 'none';
    };


    
    // Send the data to python backend
    // JavaScript code
    const formData = new FormData();

    formData.append('id', id);
    
    fetch('/deleting_id_product', {
      method: 'POST',
      headers: {
      },
      body: formData
    });
    
}



// function for adding new product, displaying new product fields
function adding_new_product() {

    // containers 
    const products_table = document.getElementById('products_container');
    const main_header = document.getElementById('standard-header');
    const added_message = document.getElementById('add-successful1');
    const adding_product_container = document.getElementById('new_product_container');
    const add_product_button = document.getElementById('new_product_button');


    products_table.style.display = 'none';
    main_header.style.display = 'none';
    add_product_button.style.display = 'none';

    adding_product_container.style.display = 'block';
    adding_product_container.style.display = 'flex';
    adding_product_container.style.flexDirection = 'column';

    if (added_message.style.display = 'block') {
        added_message.style.display = 'none';
    };
}



// simple function that updates the char limit for product description
function product_update_char_limit2() {
    var textarea = document.getElementById('new-product-description');
    var feedback = document.querySelector('#feedback2');
    var maxlength = 460;

    var remaining = maxlength - textarea.value.length;
    feedback.textContent = remaining;
  
    let char_count = feedback.textContent = remaining;
  
    if (char_count < 100) {
        feedback.style.color = 'red';
    } else {
        feedback.style.color = '#1E2B2B';
    };
};



// function that adds new product finish
function add_new_product_finish() {

    // containters
    const products_table = document.getElementById('products_container');
    const main_header = document.getElementById('standard-header');
    const added_message = document.getElementById('add-successful1');
    const adding_product_container = document.getElementById('new_product_container');
    const add_product_button = document.getElementById('new_product_button');


    // applying styles to containers
    products_table.style.display = 'block';
    main_header.style.display = 'block';
    add_product_button.style.display = 'block';
    adding_product_container.style.display = 'none';

    added_message.style.display = 'block'


    // getting values from input fields
    let product_name1 = document.getElementById('new-product-name').value;
    let produce_price1 = document.getElementById('new-product-price').value;
    let product_category1 = document.getElementById('new-product-category').value;
    let product_des = document.getElementById('new-product-description').value;
    let product_url = document.getElementById('new-product-image-url').value;



    // Send the data to python backend
    // JavaScript code
    const formData = new FormData();
    formData.append('new_product_name', product_name1);
    formData.append('new_product_price', produce_price1);
    formData.append('new_product_category', product_category1);
    formData.append('new_product_des', product_des);
    formData.append('new_product_url', product_url);
    
    fetch('/adding_new_product_backend', {
      method: 'POST',
      headers: {
      },
      body: formData
    });

    let product_name_end = document.getElementById('new-product-name').value = '';
    let produce_price1_end = document.getElementById('new-product-price').value = '';
    let product_category1_end = document.getElementById('new-product-category').value = '';
    let product_des_end = document.getElementById('new-product-description').value = '';
    let product_url_end = document.getElementById('new-product-image-url').value = '';


};
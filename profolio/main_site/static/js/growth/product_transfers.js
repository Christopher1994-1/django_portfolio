
let active = [];
let wantsToBe = [];
let touble_tab = [];


function remove_prev_view() {
    // getting the item inside the active array
    let active_item = active[0];

    // getting the current id of the current active one
    let active_item_id = active_item.split('_')[2];

    // removing items 
    let item_index_id_remove = "item_details_" + active_item_id;
    let description_id_remove = "description_" + active_item_id;
    let flipToDesBtn_remove = "flip-over-button_" + active_item_id;
    let FlipToItems_remove = "flip-over-button-right_" + active_item_id;



    let item_details_removal = document.getElementById(item_index_id_remove);
    let description_removal = document.getElementById(description_id_remove);

    let flipToDesBtn = document.getElementById(flipToDesBtn_remove);
    let FlipToItems = document.getElementById(FlipToItems_remove);
    

    item_details_removal.style.display = 'block';
    description_removal.style.display = 'none';

    flipToDesBtn.style.display = 'block';
    FlipToItems.style.display = 'none';



}


function adding_nex_view(message) {
    // getting the item inside the wantstobe array
    let wantsToBe1 = wantsToBe[0];

    // getting the current id of the wants to be active one
    let wants_item_id = wantsToBe1.split('_')[2];

    let item_index_id = "item_details_" + wants_item_id
    let description_id = "description_" + wants_item_id
    let flipToDesBtn = "flip-over-button_" + wants_item_id
    let FlipToItems = "flip-over-button-right_" + wants_item_id

    // item details container
    const items_details = document.getElementById(item_index_id);

    // description to display
    const description = document.getElementById(description_id);

    // buttons 
    const left_slide_button = document.getElementById(FlipToItems);
    const right_slide_button = document.getElementById(flipToDesBtn);


    // displaying containers
    items_details.style.display = 'none';
    description.style.display = 'block';

    // displaying buttons
    left_slide_button.style.display = 'block';
    right_slide_button.style.display = 'none';


    // displaying description
    description.innerHTML = message

}


function return_descripton(message, id, is_active, second) {


    if (is_active == 'true') {

        remove_prev_view()

        adding_nex_view(message)
    } 

    else if (second == 'true') {
        remove_prev_view()

        adding_nex_view(message)

    }

    
    else {
        let item_index_id = "item_details_" + id.toString()
        let description_id = "description_" + id.toString()
        let flipToDesBtn = "flip-over-button_" + id.toString()
        let FlipToItems = "flip-over-button-right_" + id.toString()

        // item details container
        const items_details = document.getElementById(item_index_id);

        // description to display
        const description = document.getElementById(description_id);

        // buttons 
        const left_slide_button = document.getElementById(FlipToItems);
        const right_slide_button = document.getElementById(flipToDesBtn);


        // displaying containers
        items_details.style.display = 'none';
        description.style.display = 'block';

        // displaying buttons
        left_slide_button.style.display = 'block';
        right_slide_button.style.display = 'none';


        // displaying description
        description.innerHTML = message


    }
}



function returnOG() {

    if (active.length > 0 && wantsToBe.length == 0) {
        // getting current active ID
        let active_item_details_conatiner = active[0]

        // getting id 
        let active_id = active[0].split('_')[2]


        // defining description id
        let description_id = "description_" + active_id

        // defining buttons id
        let removeItemsBtn = "flip-over-button_" + active_id
        let removeDesriptionBtn = "flip-over-button-right_" + active_id


        // getting items container
        const item_details = document.getElementById(active_item_details_conatiner)

        // getting description container
        const description = document.getElementById(description_id)

        // getting buttons
        const left_button = document.getElementById(removeDesriptionBtn)

        const right_button = document.getElementById(removeItemsBtn)


        // styles
        description.style.display = 'none';
        item_details.style.display = 'block';
        left_button.style.display = 'none';
        right_button.style.display = 'block';

        // removing active
        active.length = 0;
    }

    else {

        let right_close = wantsToBe[0]

        // getting id 
        let active_id = right_close.split('_')[2]


        // defining description id
        let description_id = "description_" + active_id

        // defining buttons id
        let removeItemsBtn = "flip-over-button_" + active_id
        let removeDesriptionBtn = "flip-over-button-right_" + active_id


        // getting items container
        const item_details = document.getElementById(right_close)

        // getting description container
        const description = document.getElementById(description_id)

        // getting buttons
        const left_button = document.getElementById(removeDesriptionBtn)

        const right_button = document.getElementById(removeItemsBtn)


        // styles
        description.style.display = 'none';
        item_details.style.display = 'block';
        left_button.style.display = 'none';
        right_button.style.display = 'block';

        // removing active
        active.length = 0;
        wantsToBe.length = 0;
        
    }
    
}


function descriptionSlideOver(id) {

    let item_index_id = "item_details_" + id.toString()
    let is_active = ''
    let second = 'false'

    if (active.length > 0 && wantsToBe == 0) {
        is_active = 'true'
        wantsToBe.push(item_index_id)
        second = 'false'
        
    } else if (wantsToBe.length > 0) {
        second = 'true'
        active.length = 0
        let new_active = wantsToBe[0]
        active.push(new_active)

        let new_wantsToBe = item_index_id
        wantsToBe.length = 0
        wantsToBe.push(new_wantsToBe)
    }
    
    else {
        active.push(item_index_id)
        is_active = 'false'
        second = 'false'
    }



    const formData = new FormData();
    formData.append('id', id);

    fetch('/sending_id_number', {
    method: 'POST',
    headers: {
    },
    body: formData
}).then(response => response.json()).then(data => return_descripton(data.message, id, is_active, second));

    
}

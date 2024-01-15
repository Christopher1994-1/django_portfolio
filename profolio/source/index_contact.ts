

let project_quickView:any = document.getElementById('entryWarningID');


let project_title:any = document.getElementById('project_titleID');

let projectImage:any = document.getElementById('popupImageID');
let projectImageLink:any = document.getElementById('imageLINKID');




function add_tags(data:any) {
    let tags_container:any = document.getElementById('tagsID');

    data.forEach(function(value:string, index:number) {

        var newElement = document.createElement('p');

        newElement.setAttribute('id', `tagID${index}`);

        newElement.textContent = `#${value.trim()}`;

        tags_container.appendChild(newElement);
    });

}


function add_para(data:any) {
    let value:string = data
    console.log(value)
    let paraContainer:any = document.getElementById('shortDID');
    var newElement = document.createElement('p');
    newElement.textContent = `${value}`;
    paraContainer.appendChild(newElement);
}



function open_quickshot_projectHTML(data:any) {

    project_quickView.style.display = 'flex';

    project_title.innerHTML = data[1]

    projectImageLink.href = ''
    projectImage.src = data[5];
    projectImage.alt = data[1];

    // Clear existing content
    document.getElementById('tagsID').innerHTML = '';
    document.getElementById('shortDID').innerHTML = '';

    let tags:any = `${data[3]}`.split(',')
    let para:any = data[8]
    
    add_tags(tags)
    add_para(para)
}




function closePopup() {
    project_quickView.style.display = 'none'
}



function open_quickshot_project(id:string) {
    // AJAX request
    $.ajax({
        url: '/quickshot_search_query/',
        type: 'GET',
        data: { 'id': id },  // Send data to the backend
        dataType: 'json',
        success: function(data) {
            // Handle the response data here
            open_quickshot_projectHTML(data.data)
        },
        error: function(error) {
            console.log('Error:', error);
            // Handle the error here
        }
    });
}






const imgDiv:any = document.querySelector(".img-div");
const img:any = imgDiv.querySelector("img");
const liveDemoButton:any = imgDiv.querySelector(".live-demo-button");

img.addEventListener("mouseover", () => {
  liveDemoButton.style.display = "block";
  img.style.filter = 'brightness(0.1)';
});

liveDemoButton.addEventListener("mouseover", () => {
    liveDemoButton.style.display = "block";
    img.style.filter = 'brightness(0.1)';
});

liveDemoButton.addEventListener("mouseout", () => {
    liveDemoButton.style.display = "none";
    img.style.filter = 'brightness(1)';
});

img.addEventListener("mouseout", () => {
  liveDemoButton.style.display = "none";
  img.style.filter = 'brightness(1)';
});

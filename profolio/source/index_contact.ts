

let project_quickView:any = document.getElementById('entryWarningID');


let project_title:any = document.getElementById('project_titleID');

let projectImage:any = document.getElementById('popupImageID');
let projectImageLink:any = document.getElementById('imageLINKID');



//* adding links to quick shot
function add_links(links_array:any) {
    //= ID's for links
    let gitHubButton:any = document.getElementById('link2gitubID');

    let gitHubLink:string = links_array[0];

    gitHubButton.href = gitHubLink;
    gitHubButton.target = "_blank";
}


//* adding use cases to quick shot
function add_useCaes(data:any) {
    let useCaes_container:any = document.getElementById('casesID');

    data.forEach(function(value:string, index:number) {

        var newElement = document.createElement('p');

        newElement.textContent = `#${value.trim()}`;

        useCaes_container.appendChild(newElement);
    });
};



//* adding tags to quick shot
function add_tags(data:any) {
    let tags_container:any = document.getElementById('tagsID');

    data.forEach(function(value:string, index:number) {

        var newElement = document.createElement('p');

        newElement.setAttribute('id', `tagID${index}`);

        newElement.textContent = `#${value.trim()}`;

        tags_container.appendChild(newElement);
    });

}



//* adding paragraph to quick shot
function add_para(data:any) {
    let value:string = data
    let paraContainer:any = document.getElementById('shortDID');
    var newElement = document.createElement('p');
    newElement.textContent = `${value}`;
    paraContainer.appendChild(newElement);
}





//* main function to open quickshot
function open_quickshot_projectHTML(data:any) {

    project_quickView.style.display = 'flex';

    project_title.innerHTML = data[1]

    projectImageLink.href = ''
    projectImage.src = data[5];
    projectImage.alt = data[1];

    // Clear existing content
    document.getElementById('tagsID').innerHTML = '';
    document.getElementById('shortDID').innerHTML = '';
    document.getElementById('casesID')?.innerHTML = '';

    let tags:any = `${data[3]}`.split(',')
    let para:any = data[8]

    let useCases:any = `${data[13]}`.split(',')

    let githubLink:string = data[7]
    
    let links_array:any = [githubLink, ]


    add_tags(tags)
    add_para(para)
    add_useCaes(useCases)
    add_links(links_array)
}



//* main function to close quick shot
function closePopup() {
    project_quickView.style.display = 'none'
}


//, function to send and receive quickshot project
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
            //! maybe I can send a an email that shows error
            console.log('Error:', error);
            // Handle the error here
        }
    });
}







//= Code section that handles the fade in and out on quickshot

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

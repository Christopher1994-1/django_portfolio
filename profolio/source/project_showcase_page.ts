
//. MAIN SCRIPT FOR HANDLING PROJECTS SHOWCASE PAGE

//. MAIN IMAGE COVER FOR PROJECT
let mainImage: any = document.getElementById('mmi');

//. MAIN IMAGE COVER CONTAINER
let mainImageContainer: any = document.getElementById('mainCoverPhoto_Container');

const LOCAL_STORGE_INDEX_NAME: string = "next-image-in-hoster";




//. FUNCTION THAT SHOWS AND HIDES LEFT SIDE ARROW BUTTON
function left_show_button(state: string): void {
    let leftSideButton: any = document.getElementById('left-side-button');
    leftSideButton.style.display = state;
};




//. HANDLING WHEN MAIN IMAGE COVER IS HOVERED OVER
if (mainImage) {
    //. HANDLING WHEN MAIN IMAGE COVER IS HOVERED OVER
    mainImage.addEventListener("mouseenter", function() {
        mainImage.style.filter = "brightness(40%)";

        //. CREATE NEW DIV TO HOLD THE MAGNIFYING GLASS ICON
        const newDiv = document.createElement('div');
        newDiv.id = "iconID";
        
        //. Ensure the icon has some styling
        newDiv.innerHTML = '<i class="fa-solid fa-magnifying-glass-plus" id="mainImageCoverIcon"></i>';
        
        //. Ensure the parent container has relative positioning
        mainImage.style.position = "relative";

        //. Position the new div absolutely in the center of its parent container
        newDiv.style.position = "absolute";
        newDiv.style.top = "50%";
        newDiv.style.left = "50%";
        newDiv.style.transform = "translate(-50%, -50%)";
        newDiv.style.zIndex = "1";
        

        mainImage.appendChild(newDiv);


    });

    //. HANDLING WHEN MAIN IMAGE OR ICON IS HOVERED OVER
    mainImage.addEventListener("mouseleave", function() {
        let newDiv = document.getElementById("iconID");
        //. Remove the newDiv when mouse leaves the entire container
        if (newDiv) {
            mainImage.removeChild(newDiv);
        }
        //. Reset the brightness filter
        mainImage.style.filter = "brightness(100%)";
    });
};



//. FUNCTION THAT CHANGES MAIN IMAGE VIEWER
function change_main_viewer(image:string): void {
    //. GET THE MAIN IMAGE VIEWER ELEMENT
    let main_image_viewer: any = document.getElementById('main_image');
    //. CHANGING SOURCE OF IMAGE
    main_image_viewer.src = image;
};




//. FUNCTION THAT OPENS THE MAIN IMAGE
function main_image_viewer(image:any): void {

    //. CREATE NEW DIV THAT IS THE IMAGE VIEWER
    const newDiv = document.createElement('div');
    newDiv.id = "image_viewer";


    newDiv.innerHTML = `
    <div id="xbutton">
        <button onclick="close_main_image_viewer()"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <img src="${image}" id="main_image">

    <div id="left-side-button">
        <button onclick="leftSideButton()"><i class="fa-solid fa-arrow-left"></i></button>
    </div>

    <div id="right-side-button">
        <button onclick="rightSideButton()"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
    `;


    document.body.appendChild(newDiv);
};


//. FUNCTION THAT CLOSES MAIN IMAGE VIEWER
function close_main_image_viewer(): void {
    let mainViewer: any = document.getElementById('image_viewer');
    let overlay: any = document.getElementById('image_overlay');
    document.body.removeChild(overlay);
    document.body.removeChild(mainViewer);
};




//. FUNCTION THAT FIGURES OUT THE NEXT INDEX FOR MAIN IMAGE VIEWER
//. ONLY FOR MAIN IMAGE VIEWER NOT GALLERY
function index_figured(stringList: string[]): number {
    //. GET THE MAIN IMAGE VIEWER ELEMENT
    let main_image_viewer: any = document.getElementById('main_image');
    //. GET THE MAIN IMAGE SOURCE
    let main_image_viewer_src: string = main_image_viewer.src;
    //. GETTING THE FIRST INDEX FROM PASSED LIST
    let firstIndex: string = stringList[0];
    //. GET THE LENGTH OF THE LIST
    let length_of_list: number = stringList.length;


    if (main_image_viewer_src == firstIndex) {
        localStorage.setItem(LOCAL_STORGE_INDEX_NAME, '1');
        //. SHOW THE LEFT SIDE ARROW BUTTON
        left_show_button('block');
        return 1
    } else {
        //. GETTING THE LOCAL STORAGE VAR
        let lastIndex: string = localStorage.getItem(LOCAL_STORGE_INDEX_NAME) ?? '';
        //. CONVERTING THE LAST INDEX INTO NUMBER THAN ADDING 1
        let intergerIndex: number = Number(lastIndex) + 1;

        if (length_of_list === intergerIndex) {
            
            localStorage.removeItem(LOCAL_STORGE_INDEX_NAME);
            left_show_button('none');
            return 0;
        }

        else {
            //. SETTING THE NEW LOCAL STORAGE TO THE NEW VALUE
            localStorage.setItem(LOCAL_STORGE_INDEX_NAME, intergerIndex.toString());
            //. SHOW THE LEFT SIDE ARROW BUTTON
            left_show_button('block');
            return intergerIndex;

        }
        
    }

};


//. FUNCTION THAT HANDLES RIGHT SIDE ARROW - IMAGE FLIPPING -
function rightSideButton(): void {
    //. GET INPUT VALUE OF IMAGES
    let inputImages: any = document.getElementById('listofimages');
    //. GET THE INPUT VALUE OF IMAGES VALUE
    let inputImages_value: string = inputImages.value;
    //. SPLITING THE STRING VALUE INTO A LIST []
    let stringList: string[] = inputImages_value.split(';');
    //. GET THE NEXT INDEX
    let nextIndex: number = index_figured(stringList);
    //. CHANGE THE MAIN IMAGE VIEWER
    change_main_viewer(stringList[nextIndex]);
};





//. FUNCTION THAT HANDLES THE LEFT SIDE ARROW - IMAGE FLIPPING -
function leftSideButton(): void {
    //. GRAB THE LOCAL STORAGE INDEX STRING AND CONVERT TO INTERGER
    let current_index: number = Number(localStorage.getItem(LOCAL_STORGE_INDEX_NAME));
    //. GET INPUT VALUE OF IMAGES
    let inputImages: any = document.getElementById('listofimages');
    //. GET THE INPUT VALUE OF IMAGES VALUE
    let inputImages_value: string = inputImages.value;
    //. SPLITING THE STRING VALUE INTO A LIST []
    let stringList: string[] = inputImages_value.split(';');

    //. THE NEW INDEX
    let current_now_index: number = current_index - 1;

    if (current_now_index === 0) {
        //. UPDATE THE LOCAL STORAGE
        localStorage.setItem(LOCAL_STORGE_INDEX_NAME, current_now_index.toString());

        //. INDEXED IMAGE THE CLIENT WANTS
        let image: string = stringList[current_now_index];

        //. GET THE MAIN IMAGE VIEWER ELEMENT
        let main_image_viewer: any = document.getElementById('main_image');

        main_image_viewer.src = image;

        left_show_button("none");
    } 
    
    else {
        //. UPDATE THE LOCAL STORAGE
        localStorage.setItem(LOCAL_STORGE_INDEX_NAME, current_now_index.toString());

        //. INDEXED IMAGE THE CLIENT WANTS
        let image: string = stringList[current_now_index];

        //. GET THE MAIN IMAGE VIEWER ELEMENT
        let main_image_viewer: any = document.getElementById('main_image');

        main_image_viewer.src = image;
    };

};




//. HANDLING WHEN MAIN IMAGE OR ICON IS CLICKED -- OPEN OVERLAY
mainImage.addEventListener("click", function() {

    //. CREATE NEW DIV THAT IS THE OVERLAY
    const newDiv = document.createElement('div');
    newDiv.id = "image_overlay";


    newDiv.style.position = 'fixed';
    newDiv.style.width = '100%';
    newDiv.style.height = '100%';
    newDiv.style.top = '0';
    newDiv.style.backgroundColor = '#0000007d';



    document.body.appendChild(newDiv);

    //. ACCESS THE IMAGE
    const element = document.getElementById("mainCoverPhoto");
    if (element) {
        let imageCover: any = element.getAttribute("data-image");
        main_image_viewer(imageCover);
    };


});





//. ENSURE THE LOCAL STROAGE IS CLEARED WHEN USER LEAVES THE PAGE
window.addEventListener('beforeunload', (event) => {
    localStorage.removeItem(LOCAL_STORGE_INDEX_NAME);
});














//. FUNCTION FOR FINDING THE INDEX OF THE CURRENT INDEX
//. ONLY FOR GALLERY IMAGE VIEWER NOT MAIN IMAGE VIEWER
function find_current_index(image:string, listOfImages: string[]): number {

    //. GET THE INDEX NUMBER OF THE IMAGE PASSED IN PLUS ONE
    let currentIndex: number = listOfImages.indexOf(image) + 1;

    //. GET THE NEXT IMAGE IN LINE
    let nextImage: string = listOfImages[currentIndex]

    //. ELEMENT OF THE MAIN IMAGE
    let main_image: any = document.getElementById('main_image');
    main_image.src = nextImage;



    //. UPDATE LOCAL STORAGE WITH THE NEW INDEX
    

    return 0

};








//. FUNCTION THAT OPENS THE MAIN IMAGE FOR THE GALLERY
function main_image_viewer_gallery(image:any): void {

    //. CREATE NEW DIV THAT IS THE IMAGE VIEWER
    const newDiv = document.createElement('div');
    newDiv.id = "image_viewer2";


    newDiv.innerHTML = `
    <div id="xbutton">
        <button onclick="close_main_image_viewer2()"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <img src="${image}" id="main_image">

    <div id="left-side-button">
        <button onclick="leftSideButton2('${image}')"><i class="fa-solid fa-arrow-left"></i></button>
    </div>

    <div id="right-side-button">
        <button onclick="rightSideButton2('${image}')"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
    `;


    document.body.appendChild(newDiv);

    localStorage.removeItem(LOCAL_STORGE_INDEX_NAME);


};



//. FUNCTION THAT CLOSES THE MAIN IMAGE VIEWER FOR GALLERY
function close_main_image_viewer2(): void {
    let overlay: any = document.getElementById('image_overlay');
    let imageViewer:any = document.getElementById('image_viewer2');
    document.body.removeChild(overlay);
    document.body.removeChild(imageViewer);
};



//. FUNCTION THAT HANDLES THE LEFT SIDE CLICK WHEN GALLERY IS OPEN
function leftSideButton2(image:string): void {


};


//. FUNCTION THAT HANDLES THE RIGHT SIDE CLICK WHEN GALLERY IS OPEN
function rightSideButton2(image:string): void {
    //. GET THE LIST OF IMAGES ELEMENT
    let loi: any = document.getElementById('listofimages')
    //. GET THE LIST OF IMAGES AND CONVERT TO LIST
    let listOfImages: string[] = loi.value.split(';');
   
    //. CURRENT INDEX OF THE PASSED IMAGE
    let currentIndex: number = find_current_index(image, listOfImages);
};



//. FUNCTION THAT OPENS THE GALLERY IMAGE 
function open_gallery_image(image: string): void {
    //. CREATE NEW DIV THAT IS THE OVERLAY
    const newDiv = document.createElement('div');
    newDiv.id = "image_overlay";


    newDiv.style.position = 'fixed';
    newDiv.style.width = '100%';
    newDiv.style.height = '100%';
    newDiv.style.top = '0';
    newDiv.style.backgroundColor = '#0000007d';



    document.body.appendChild(newDiv);


    main_image_viewer_gallery(image);
};
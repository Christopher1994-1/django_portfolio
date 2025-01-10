
//. MAIN SCRIPT FOR HANDLING PROJECTS SHOWCASE PAGE

//. MAIN IMAGE COVER FOR PROJECT
let mainImage: any = document.getElementById('mmi');

//. MAIN IMAGE COVER CONTAINER
let mainImageContainer: any = document.getElementById('mainCoverPhoto_Container');





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




//. FUNCTION THAT OPENS THE MAIN IMAGE
function main_image_viewer(image:any): void {

    //. CREATE NEW DIV THAT IS THE IMAGE VIEWER
    const newDiv = document.createElement('div');
    newDiv.id = "image_viewer";


    newDiv.innerHTML = `
    <div id="xbutton">
        <button onclick="close_main_image_viewer()"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <img src="${image}">
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
    }


    // make the popup for the image
    // tranfer all the images etc to bunny
    // maybe add in two columns to the projects class for smaller/larger images
    // need a module to update rows
});


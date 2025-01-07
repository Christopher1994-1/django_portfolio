
//. MAIN SCRIPT FOR HANDLING PROJECTS SHOWCASE PAGE

//. MAIN IMAGE COVER FOR PROJECT
let mainImage: any = document.getElementById('mainCoverPhoto');

//. MAIN IMAGE COVER CONTAINER
let mainImageContainer: any = document.getElementById('mainCoverPhoto_Container');





//. HANDLING WHEN MAIN IMAGE COVER IS HOVERED OVER
if (mainImageContainer) {
    //. HANDLING WHEN MAIN IMAGE COVER IS HOVERED OVER
    mainImageContainer.addEventListener("mouseenter", function() {
        mainImage.style.filter = "brightness(40%)";

        //. CREATE NEW DIV TO HOLD THE MAGNIFYING GLASS ICON
        const newDiv = document.createElement('div');
        newDiv.id = "iconID";
        
        // Ensure the icon has some styling
        newDiv.innerHTML = '<i class="fa-solid fa-magnifying-glass-plus" id="mainImageCoverIcon"></i>';
        
        //. Ensure the parent container has relative positioning
        mainImageContainer.style.position = "relative";
        mainImageContainer.style.cursor = "pointer";
        mainImageContainer.style.zIndex = "0";

        //. Position the new div absolutely in the center of its parent container
        newDiv.style.position = "absolute";
        newDiv.style.top = "50%";
        newDiv.style.left = "50%";
        newDiv.style.transform = "translate(-50%, -50%)";
        newDiv.style.zIndex = "1";
        

        mainImageContainer.appendChild(newDiv);


    });

    //. HANDLING WHEN MAIN IMAGE OR ICON IS HOVERED OVER
    mainImageContainer.addEventListener("mouseleave", function() {
        let newDiv = document.getElementById("iconID");
        //. Remove the newDiv when mouse leaves the entire container
        if (newDiv) {
            mainImageContainer.removeChild(newDiv);
        }
        //. Reset the brightness filter
        mainImage.style.filter = "brightness(100%)";
    });
};

//. HANDLING WHEN MAIN IMAGE OR ICON IS CLICKED
mainImageContainer.addEventListener("click", function() {
    // make the popup for the image
    // tranfer all the images etc to bunny
    // maybe add in two columns to the projects class for smaller/larger images
    // need a module to update rows
});


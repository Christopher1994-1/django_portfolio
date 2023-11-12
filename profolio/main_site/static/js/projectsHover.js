const tech_bx = document.getElementById('isID'); // thing i want to open when clicked and disappear when clicked again
const tech_bx_Display = getComputedStyle(tech_bx).display;
const overlay = document.getElementById('overlay');


let main_box = document.getElementById('feedbackID');


function overly_clicked() {
    tech_bx.style.display = 'none';
    overlay.style.display = 'none';
}



function pop_info(tech) {
    console.log(tech)
};










let isHovering33333 = false

function showPopup222() {
    isHovering33333 = true;
    document.getElementById("isID").style.display = "block";
    document.getElementById("isID").style.display = "flex";
    document.getElementById("isID").style.flexDirection = "column";
}

function hidePopup222() {
    if (!isHovering33333) {
        document.getElementById("isID").style.display = "none";
        overlay.style.display = 'none'
    }
}

document.getElementById("isID").addEventListener("mouseover", function () {
    showPopup222();
});

document.getElementById("isID").addEventListener("mouseout", function () {
    isHovering33333 = false;
    hidePopup222();
});


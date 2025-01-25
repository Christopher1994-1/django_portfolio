"use strict";
function openSidePanel() {
    const newDiv = document.createElement('div');
    let openbutton = document.getElementById("hamburger");
    let xbutton = document.getElementById("xburger");
    openbutton.style.display = 'none';
    xbutton.style.display = 'block';
    newDiv.id = "panel";
    newDiv.innerHTML = `
    <div id="mobile-side-panel">

        <div class="links">
            <a>Menu</a>
            <a>Rewards</a>
            <a>Gift Cards</a>
            <a href="/">Portfolio Home</a>
        </div>

        <hr>

        <div class="buttons">
            <button id="signin">Sign in</button>
            <button id="join">Join Now</button>
        </div>

        <div class="bottom">
            <i class="fa-solid fa-location-dot"></i>
            <a>Find a store</a>
        </div>
    
  
    </div>
  
  `;
    document.body.appendChild(newDiv);
}
;
function closeSidePanel() {
    let openbutton = document.getElementById("hamburger");
    let xbutton = document.getElementById("xburger");
    let panel = document.getElementById("panel");
    openbutton.style.display = 'block';
    xbutton.style.display = 'none';
    panel.style.display = "none";
    document.body.removeChild(panel);
}
;
